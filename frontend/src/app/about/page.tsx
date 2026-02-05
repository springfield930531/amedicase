import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { ContentUnavailable } from "@/components/shared/ContentUnavailable";
import Link from "next/link";
import Image from "next/image";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import { getPageBySlugDynamic } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  AboutHeroSection,
  AboutTeamSection,
  AboutWhyChooseSection,
  MissionValuesSection,
  PageEntry,
  StoryBlockSection,
  VideoEmbedSection,
} from "@/lib/page-types";
import type { CSSProperties } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const defaultBenefits = [
  "HIPAA-Compliant & Secure Data Handling",
  "Up to 60% Cost Savings vs\nU.S. Operations",
  "Healthcare-trained Teams \nwith U.S. Experience",
  "Dedicated Account Managers",
  "Real-time Communication \n& U.S. Time-Zone Overlap",
];

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

const gradientLabelStyle: ExtendedCSSProperties = {
  background: "linear-gradient(90deg, #D01127 0%, #1E3A8A 20%, #1E3A8A 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textEdge: "cap",
  leadingTrim: "both",
  fontVariationSettings: "'wdth' 100",
};

const cardBaseClass =
  "rounded-[12px] border border-[rgba(99,103,146,0.8)] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)]";

const INSIDE_AMEDICASE_YOUTUBE_ID = "M7lc1UVf-VE";

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getPageBySlugDynamic("about")) as PageEntry | null;
  const seo = page?.seo;
  const ogImage = seo?.ogImage ? getMediaUrl(seo.ogImage) : undefined;
  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    alternates: seo?.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
    robots: seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: seo
      ? {
          title: seo.ogTitle || seo.metaTitle,
          description: seo.ogDescription || seo.metaDescription,
          images: ogImage ? [ogImage] : undefined,
        }
      : undefined,
  };
}

export default async function AboutPage() {
  const page = (await getPageBySlugDynamic("about")) as PageEntry | null;
  if (!page) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[strapi] About page content not available");
    }
    return (
      <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
        <Header />
        <main className="flex flex-col items-start w-full overflow-x-hidden">
          <ContentUnavailable />
        </main>
        <Footer />
      </div>
    );
  }
  const sections = page?.sections || [];
  const hero = sections.find(
    (section): section is AboutHeroSection => section.__component === "sections.about-hero"
  );
  const story = sections.find(
    (section): section is StoryBlockSection => section.__component === "sections.story-block"
  );
  const mission = sections.find(
    (section): section is MissionValuesSection => section.__component === "sections.mission-values"
  );
  const team = sections.find(
    (section): section is AboutTeamSection => section.__component === "sections.about-team"
  );
  const video = sections.find(
    (section): section is VideoEmbedSection => section.__component === "sections.video-embed"
  );
  const whyChoose = sections.find(
    (section): section is AboutWhyChooseSection => section.__component === "sections.about-why-choose"
  );

  const fallback = {
    hero: {
      badgeLabel: "About Us",
      title: "We Power Home Health Operations Behind the Scenes",
      titleDesktop: "We Power Home Health Operations\nBehind the Scenes",
      subtitle:
        "From billing and intake to back-office support, our healthcare-trained teams keep your agency efficient, compliant and ready to grow.",
      subtitleDesktop:
        "From billing and intake to back-office support, our healthcare-trained teams\nkeep your agency efficient, compliant and ready to grow.",
      backgroundImage: "/images/services/hero-services.jpg",
      primaryCta: { label: "Book a Free Consultation", url: "#" },
      secondaryText: "Meet the Team",
    },
    story: {
      label: "Our Story",
      title: "Built to Help Home Health Agencies Operate Smarter",
      body:
        "Amedicase was founded by healthcare operations specialists who saw how much time U.S. home health agencies spent managing administrative tasks instead of patient care. We built a model that combines trained professionals, strong compliance, and modern workflows, helping agencies delegate what slows them down and focus on what truly matters: their patients.",
    },
    mission: {
      label: "Mission & Values",
      cards: [
        { title: "Accuracy First", description: "We measure, verify, and improve every process." },
        { title: "Compliance by Design", description: "HIPAA-compliant from onboarding to reporting." },
        { title: "People Before Process", description: "Our strength is our trained, motivated team." },
        { title: "Transparency Always", description: "Real-time communication and shared dashboards." },
        { title: "Continuous Growth", description: "We learn, optimize, and help our partners scale." },
      ],
      cta: { label: "Explore All Services", url: "/services" },
    },
    team: {
      label: "Our Team Behind the Care",
      title: "Meet the People Who Keep Healthcare Moving",
      subtitle:
        "Our success is built by people who understand both the human and operational sides of home health.\n\nEach member of our team brings professionalism, compassion, and precision to every process, from billing to patient support.",
      members: [
        {
          name: "Dorin",
          surname: "Acru",
          position: "Marketing Manager",
          description: "Building trust through precision, clarity\nand modern medical management.",
          photo: "/images/team-member-photo.jpg",
        },
        {
          name: "Dorin",
          surname: "Acru",
          position: "Marketing Manager",
          description: "Building trust through precision, clarity\nand modern medical management.",
          photo: "/images/team-member-photo.jpg",
        },
        {
          name: "Dorin",
          surname: "Acru",
          position: "Marketing Manager",
          description: "Building trust through precision, clarity\nand modern medical management.",
          photo: "/images/team-member-photo.jpg",
        },
      ],
      mobileProfilePhoto: "/images/Dorin Acru.jpg",
      dotImagePrimary: "/images/team-member-1.png",
      dotImageSecondary: "/images/team-member-2.png",
    },
    video: {
      label: "Inside Amedicase",
      youtubeId: INSIDE_AMEDICASE_YOUTUBE_ID,
    },
    whyChoose: {
      label: "Why Choose Amedicase",
      title: "Why Leading Home Health Agencies Choose Us",
      benefits: defaultBenefits,
      cta: { label: "Contact", url: "/#contact" },
      image: "/images/why-choose-image-figma.png",
      overlayColor: "rgba(30,58,138,0.5)",
    },
  };

  const heroData = {
    badgeLabel: hero?.badgeLabel || fallback.hero.badgeLabel,
    title: hero?.title || fallback.hero.title,
    titleDesktop: hero?.titleDesktop || fallback.hero.titleDesktop,
    subtitle: hero?.subtitle || fallback.hero.subtitle,
    subtitleDesktop: hero?.subtitleDesktop || fallback.hero.subtitleDesktop,
    backgroundImage: getMediaUrl(hero?.backgroundImage) || fallback.hero.backgroundImage,
    primaryCta: hero?.primaryCta || fallback.hero.primaryCta,
    secondaryText: hero?.secondaryText || fallback.hero.secondaryText,
  };
  const heroCtaUrl = heroData.primaryCta?.url || "/contact";
  const isExternalUrl = (url?: string) => /^https?:\/\//i.test(url || "") || /^mailto:/i.test(url || "");
  const heroCtaExternal =
    (heroData.primaryCta as { isExternal?: boolean } | undefined)?.isExternal ||
    isExternalUrl(heroCtaUrl);

  const storyData = {
    label: story?.label || fallback.story.label,
    title: story?.title || fallback.story.title,
    body: story?.body || fallback.story.body,
  };

  const missionData = {
    label: mission?.label || fallback.mission.label,
    cards: mission?.cards?.length ? mission.cards : fallback.mission.cards,
    cta: mission?.cta || fallback.mission.cta,
  };

  const teamMembers =
    team?.teamMembers?.length
      ? team.teamMembers.map((member) => ({
          name: member.firstName || "",
          surname: member.lastName || "",
          position: member.role || "",
          description: member.bio || "",
          photo: getMediaUrl(member.photo) || "",
        }))
      : fallback.team.members;

  const teamData = {
    label: team?.label || fallback.team.label,
    title: team?.title || fallback.team.title,
    subtitle: team?.subtitle || fallback.team.subtitle,
    members: teamMembers,
    mobileProfilePhoto: getMediaUrl(team?.mobileProfilePhoto) || fallback.team.mobileProfilePhoto,
    dotImagePrimary: getMediaUrl(team?.dotImagePrimary) || fallback.team.dotImagePrimary,
    dotImageSecondary: getMediaUrl(team?.dotImageSecondary) || fallback.team.dotImageSecondary,
  };

  const videoData = {
    label: video?.label || fallback.video.label,
    youtubeId: video?.youtubeId || fallback.video.youtubeId,
  };

  const benefitsList =
    whyChoose?.benefits?.length
      ? whyChoose.benefits.map((benefit) => benefit.label || "").filter(Boolean)
      : fallback.whyChoose.benefits;

  const whyChooseData = {
    label: whyChoose?.label || fallback.whyChoose.label,
    title: whyChoose?.title || fallback.whyChoose.title,
    benefits: benefitsList,
    cta: whyChoose?.cta || fallback.whyChoose.cta,
    image: getMediaUrl(whyChoose?.image) || fallback.whyChoose.image,
    overlayColor: whyChoose?.overlayColor || fallback.whyChoose.overlayColor,
  };
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - Based on ServicesPageHeroSection */}
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative w-full overflow-hidden">
              {/* Badge Container */}
              <div className="relative z-20 px-5 pt-0">
                <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] flex items-center justify-center">
                  <p 
                    className="font-sans font-medium text-[#d01127] text-[13px] uppercase"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.badgeLabel}
                  </p>
                </div>
              </div>

              {/* Hero Image Background */}
              <div className="relative h-[562px] w-full overflow-hidden rounded-xl -mt-[29px]">
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute"
                    style={{
                      height: '113.88%',
                      left: '-63.06%',
                      top: '-13.88%',
                      width: '266.63%',
                      maxWidth: 'none',
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={heroData.backgroundImage}
                        alt="Healthcare professionals working"
                        fill
                        sizes="100vw"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: 'cover', objectPosition: 'center center' }}
                        unoptimized={isRemoteUrl(heroData.backgroundImage)}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
              </div>
              
              {/* Content Card */}
              <div className="relative -mt-[503px] px-5 z-10">
                <div className="backdrop-blur-[10px] bg-gradient-to-b from-[rgba(183,198,243,0.12)] to-[rgba(84,100,145,0.04)] rounded-[12px] border border-[rgba(158,162,203,0.8)] min-h-[503px] flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-[60px] mt-[97px]">
                    <h1 
                      className="font-sans font-semibold text-[clamp(28px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {heroData.title}
                    </h1>
                    <p 
                      className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {heroData.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start">
                    <Link 
                      href={heroCtaUrl}
                      target={heroCtaExternal ? "_blank" : undefined}
                      rel={heroCtaExternal ? "noreferrer" : undefined}
                      className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {heroData.primaryCta?.label}
                    </Link>
                    <p 
                      className="font-sans font-normal leading-[1.4] text-[#d01127] text-[clamp(16px,2.5vw,20px)] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                      style={{ 
                        fontVariationSettings: "'wdth' 100",
                        textDecorationSkipInk: 'none',
                        textUnderlinePosition: 'from-font'
                      }}
                    >
                      {heroData.secondaryText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative h-[750px] w-full overflow-hidden">
            {/* Hero Image Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={heroData.backgroundImage}
                  alt="Healthcare professionals working"
                  fill
                  sizes="100vw"
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                  unoptimized={isRemoteUrl(heroData.backgroundImage)}
                />
              </div>
              <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
            </div>
            
            {/* Content Container */}
            <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 xl:px-0 h-full flex items-start pt-[15px]">
              {/* Badge */}
              <div className="absolute top-[-17px] left-[60px] z-20">
                <div className="bg-[#f1f5ff] h-[70px] rounded-bl-[18px] rounded-br-[18px] w-[200px] relative">
                  <p 
                    className="absolute left-[20px] top-[20px] font-sans font-medium text-[#d01127] text-[33px] uppercase"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.badgeLabel}
                  </p>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                  <h1 
                    className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.titleDesktop || heroData.title}
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.subtitleDesktop || heroData.subtitle}
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <Link 
                    href={heroCtaUrl}
                    target={heroCtaExternal ? "_blank" : undefined}
                    rel={heroCtaExternal ? "noreferrer" : undefined}
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {heroData.primaryCta?.label}
                    </p>
                  </Link>
                  <p 
                    className="font-sans font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textDecorationSkipInk: 'none',
                      textUnderlinePosition: 'from-font'
                    }}
                  >
                      {heroData.secondaryText}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="flex flex-col gap-2 items-start mb-[40px] md:mb-[10px] w-full">
              <GradientTitle label={storyData.label} className="mb-0" />
              <h2 
                className="font-sans leading-[120%] w-full whitespace-pre-wrap"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#D01127',
                  fontSize: '52px',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.52px',
                }}
              >
                {storyData.title}
              </h2>
              <p 
                className="font-sans leading-[120%] w-full"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#000618',
                  fontSize: '33px',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.33px',
                }}
              >
                {storyData.body}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values Section - Based on ServicesSection */}
        <section className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 pb-[40px] md:pb-16 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="md:hidden w-full">
                <div className="flex flex-col gap-2 items-start mb-[24px] md:mb-12">
                  <p
                    className="font-sans font-medium uppercase text-[clamp(14px,1.8vw,15px)] w-full whitespace-pre-wrap text-left"
                    style={gradientLabelStyle}
                  >
                    {missionData.label}
                  </p>
                </div>
                
                <div className="w-full">
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                    {missionData.cards.map((card, index) => (
                      <div key={`mission-mobile-${index}`} className={`${cardBaseClass} flex flex-col gap-3 p-4 sm:p-5 lg:p-6 text-center`}>
                        <p className="font-sans font-medium text-[#0b1737] text-base sm:text-lg leading-tight tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {card.title}
                        </p>
                        <p className="font-sans font-normal text-[#0b1737] text-sm leading-tight tracking-[-0.26px] whitespace-pre-line break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {card.description}
                        </p>
                      </div>
                    ))}

                    {/* Explore All Services CTA */}
                    <Link 
                      href={missionData.cta?.url || "/services"}
                      data-discover="true"
                      className="md:col-span-2 lg:col-span-1 backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(114,49,61,0.8)] border-solid from-[rgba(174,45,66,0.64)] rounded-[12px] to-[rgba(34,62,140,0.48)] p-[11px] hover:opacity-90 transition-opacity flex flex-col items-center justify-center gap-3 min-h-[120px]"
                    >
                      <p className="font-sans font-semibold leading-[1.2] text-[#f1f5ff] text-[20px] tracking-[-0.4px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {missionData.cta?.label || "Explore All Services"}
                      </p>
                      <div className="w-[26px] h-[20px] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none" className="w-full h-full">
                          <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" fill="white"/>
                          <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" fill="white"/>
                          <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" stroke="white" strokeWidth="0.5"/>
                          <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" stroke="white" strokeWidth="0.5"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tablet Layout */}
              <div className="hidden md:block lg:hidden">
                <div className="flex flex-col gap-2 items-start mb-8 md:mb-12">
                  <p
                    className="font-sans font-medium uppercase text-[15px] w-full whitespace-pre-wrap"
                    style={gradientLabelStyle}
                  >
                    {missionData.label}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full">
                  {missionData.cards.map((card, index) => (
                    <div key={`mission-tablet-${index}`} className={`${cardBaseClass} p-6 md:p-8 lg:p-10 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow w-full`}>
                      <h3 className="font-sans font-medium text-[clamp(18px,2.5vw,20px)] lg:text-[22px] text-[#0b1737] leading-[1.1] tracking-[-0.02em] mb-4 lg:mb-5 whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {card.title}
                      </h3>
                      <p className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] lg:text-[15px] text-[#0b1737] leading-[1.2] tracking-[-0.02em] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {card.description}
                      </p>
                    </div>
                  ))}

                  {/* Explore All Services CTA */}
                  <Link 
                    href={missionData.cta?.url || "/services"}
                    className="backdrop-blur-md bg-gradient-to-b from-[rgba(174,45,66,0.64)] to-[rgba(34,62,140,0.48)] rounded-xl p-6 md:p-8 lg:p-10 border border-[rgba(114,49,61,0.8)] shadow-[0px_2px_4px_0px_rgba(68,70,102,0.3)] min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-3">
                      <p className="font-sans font-semibold text-[clamp(18px,2.5vw,20px)] text-[#f1f5ff] leading-[1.2] tracking-[-0.02em] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {missionData.cta?.label || "Explore All Services"}
                      </p>
                      <div className="w-[26px] h-[20px]">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 27 22">
                          <g>
                            <path d={svgPaths.p3a6ca5f0} fill="white" />
                            <path d={svgPaths.p39f18ef0} fill="white" />
                            <path d={svgPaths.p3a6ca5f0} stroke="white" strokeWidth="0.5" />
                            <path d={svgPaths.p39f18ef0} stroke="white" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Desktop Layout - 3 columns */}
              <div className="hidden lg:block">
                <div className="flex flex-col gap-2 items-start mb-[60px]">
                  <p
                    className="font-sans font-medium uppercase text-[20px]"
                    style={gradientLabelStyle}
                  >
                    {missionData.label}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-[43px_55px] w-full justify-start items-stretch">
                  {missionData.cards.map((card, index) => (
                    <div key={`mission-desktop-${index}`} className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] from-[rgba(204,211,234,0.25)] to-[rgba(132,139,161,0.125)] rounded-[12px] w-full max-w-[403px] lg:w-[463px] min-h-[142px] flex flex-col shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)]">
                      <div className="flex flex-col gap-[30px] items-center justify-center flex-1 px-[20px] py-[5px] text-[#0b1737] text-center">
                        <h3 className="font-sans font-medium leading-[1.1] text-[33px] tracking-[-0.66px] w-full pt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {card.title}
                        </h3>
                        <p className="font-sans font-normal leading-[1.1] text-[20px] tracking-[-0.4px] w-full whitespace-pre-line pb-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Explore All Services CTA */}
                  <Link 
                    href={missionData.cta?.url || "/services"}
                    className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(114,49,61,0.8)] from-[rgba(174,45,66,0.64)] to-[rgba(34,62,140,0.48)] rounded-[12px] w-full max-w-[403px] lg:w-[463px] min-h-[142px] flex flex-col items-center justify-center gap-[20px] py-[5px] px-[20px] hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <p className="font-sans font-semibold leading-[1.2] text-[#f1f5ff] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {missionData.cta?.label || "Explore All Services"}
                    </p>
                    <div className="w-full h-full max-w-[40px] max-h-[32px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 27 22">
                        <g>
                          <path d={svgPaths.p3a6ca5f0} fill="white" />
                          <path d={svgPaths.p39f18ef0} fill="white" />
                          <path d={svgPaths.p3a6ca5f0} stroke="white" strokeWidth="0.5" />
                          <path d={svgPaths.p39f18ef0} stroke="white" strokeWidth="0.5" />
                        </g>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Behind the Care Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <TitleBlock
              label={teamData.label}
              title={teamData.title}
              subtitle={teamData.subtitle}
            />

            {/* Team Carousel without repeating title */}
            <div className="mt-8">
              <TeamCarousel
                members={teamData.members}
                mobileProfilePhoto={teamData.mobileProfilePhoto}
                dotImagePrimary={teamData.dotImagePrimary}
                dotImageSecondary={teamData.dotImageSecondary}
              />
            </div>
          </div>
        </section>

        {/* Inside Amedicase Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-4 md:px-[26px] xl:px-0 max-w-[1440px]">
            <div className="flex flex-col gap-[48px] items-start w-full">
              <GradientTitle label={videoData.label} className="mb-0" />
              
              {/* Video Player Container - Responsive YouTube embed (no absolute, no padding) */}
              <div
                className="w-full rounded-[12px] overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
                  title={videoData.label}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Amedicase Section */}
        <section className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 xl:pt-20 pb-[40px] md:pb-16 xl:pb-20 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0 overflow-visible">
            <div className="relative z-10 w-full overflow-visible">
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex flex-col gap-2 items-start mb-[20px] md:mb-12 overflow-visible px-5">
                  <p
                    className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] min-w-full relative shrink-0 text-[clamp(14px,1.8vw,15px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-[min-content] whitespace-pre-wrap"
                    style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
                  >
                    {whyChooseData.label}
                  </p>
                  <h2
                    className="font-sans font-semibold min-h-[95px] leading-[1.1] relative shrink-0 text-[#000618] text-[clamp(28px,4vw,33px)] lg:text-[42px] tracking-[-0.66px] w-full md:w-full lg:w-[600px] xl:w-[700px] whitespace-pre-wrap overflow-visible"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {whyChooseData.title}
                  </h2>
                </div>

                {/* Benefits Card */}
                <div className="w-full px-5">
                  <div className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.075)] rounded-[12px] shrink-0 to-[rgba(84,100,145,0.025)] w-full md:w-full relative">
                    {/* Mobile - Flex layout */}
                    <div className="md:hidden flex flex-col gap-[clamp(20px,6vw,30px)] px-[clamp(15px,5vw,20px)] py-[clamp(35px,10vw,40px)] w-full">
                      {whyChooseData.benefits.map((benefit, index) => (
                        <p key={index} className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(16px,5vw,20px)] tracking-[-0.4px] w-full max-w-[281px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {benefit}
                        </p>
                      ))}
                    </div>

                    {/* Tablet - Grid layout */}
                    <div className="hidden md:block lg:hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 w-full">
                        {whyChooseData.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3 lg:gap-4">
                            <div className="flex-shrink-0 w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#d01127] mt-2 lg:mt-2.5" />
                            <p className="font-sans font-medium text-[clamp(0.875rem,1.6vw,1.125rem)] lg:text-[18px] text-[#0b1737] leading-[1.2] tracking-[-0.02em] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Mobile */}
                  <div className="md:hidden mt-[20px] md:mt-12">
                    <Link
                      href={whyChooseData.cta?.url || "/#contact"}
                      className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid box-border content-stretch flex from-[rgba(45,78,174,0.64)] gap-[20px] items-center justify-center px-[20px] py-[17px] relative rounded-[8px] shrink-0 to-[rgba(34,62,140,0.48)] hover:opacity-90 transition-opacity w-[221px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {whyChooseData.cta?.label || "Contact"}
                      </p>
                      <div className="h-[20.505px] relative shrink-0 w-[26px]">
                        <div className="absolute inset-[-2.23%_-0.96%]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none" className="w-full h-full">
                            <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" fill="white"/>
                            <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" fill="white"/>
                            <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" stroke="white" strokeWidth="0.5"/>
                            <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" stroke="white" strokeWidth="0.5"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* CTA Button - Tablet */}
                  <div className="hidden md:flex lg:hidden mt-8 lg:mt-12 justify-center lg:justify-start">
                    <Link
                      href={whyChooseData.cta?.url || "/#contact"}
                      className="inline-flex items-center justify-center gap-5 rounded-[8px] border border-[rgba(50,59,159,0.8)] shadow-[0px_1px_4px_0px_rgba(27,30,79,0.3)] backdrop-blur-[3.777px] px-5 py-[17px] font-sans font-semibold text-[18px] sm:text-[20px] text-[#f1f5ff] leading-[110%] hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(180deg, rgba(45, 78, 174, 0.64) 0%, rgba(34, 62, 140, 0.48) 100%)", fontVariationSettings: "'wdth' 100" }}
                    >
                      {whyChooseData.cta?.label || "Contact"}
                      <div className="w-[26px] h-[20px]">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 27 22">
                          <g>
                            <path d={svgPaths.p3a6ca5f0} fill="white" />
                            <path d={svgPaths.p39f18ef0} fill="white" />
                            <path d={svgPaths.p3a6ca5f0} stroke="white" strokeWidth="0.5" />
                            <path d={svgPaths.p39f18ef0} stroke="white" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block">
                {/* Section Header */}
                <div className="flex flex-col gap-2 items-start mb-[60px]">
                  <p
                    className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[20px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a]"
                    style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
                  >
                    {whyChooseData.label}
                  </p>
                  <h2
                    className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#000618] text-[52px] tracking-[-1.04px] w-full whitespace-pre-wrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {whyChooseData.title}
                  </h2>
                </div>

                {/* Content Layout */}
                <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 xl:gap-0 w-full">
                  {/* Benefits Card */}
                  <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.075)] rounded-[12px] to-[rgba(84,100,145,0.025)] w-full max-w-[893px] xl:w-[893px] min-h-[480px] xl:h-[480px] px-8 md:px-12 xl:px-0 pt-4 md:pt-6 xl:pt-8 pb-8 md:pb-12 xl:pb-[60px]">
                    <div className="flex flex-col gap-4 md:gap-5 xl:gap-[0.5rem] items-start text-[#0b1737] xl:pl-[10px]">
                      {whyChooseData.benefits.map((benefit, index) => (
                        <p key={index} className="font-sans font-medium leading-[1.2] text-[clamp(20px,3vw,33px)] text-blue-900 tracking-[-0.66px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {benefit}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Image + Button */}
                  <div className="flex flex-col gap-6 xl:gap-[24px] items-center xl:items-start w-full max-w-[403px] xl:w-[403px]">
                    {/* Image */}
                    <div className="relative w-full max-w-[403px] xl:w-[403px] aspect-[403/314] xl:h-[314px] rounded-[12px] overflow-hidden">
                      <Image
                        src={whyChooseData.image}
                        alt="Why choose Amedicase"
                        fill
                        sizes="(max-width: 1024px) 100vw, 403px"
                        className="absolute inset-0 w-full h-full object-cover"
                        unoptimized={isRemoteUrl(whyChooseData.image)}
                      />
                      <div className="absolute inset-0 mix-blend-hard-light" style={{ background: whyChooseData.overlayColor }} />
                    </div>

                    {/* Button - Contact */}
                    <Link
                      href={whyChooseData.cta?.url || "/#contact"}
                      className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] rounded-[12px] to-[rgba(34,62,140,0.48)] w-full max-w-[403px] xl:w-[403px] h-[142px] flex flex-col items-center justify-center gap-[20px] p-[20px] hover:opacity-90 transition-opacity"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="font-sans font-semibold leading-[1.2] text-[#f1f5ff] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {whyChooseData.cta?.label || "Contact"}
                      </p>
                      <div className="w-full h-full max-w-[40px] max-h-[32px]">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 27 22">
                          <g>
                            <path d={svgPaths.p3a6ca5f0} fill="white" />
                            <path d={svgPaths.p39f18ef0} fill="white" />
                            <path d={svgPaths.p3a6ca5f0} stroke="white" strokeWidth="0.5" />
                            <path d={svgPaths.p39f18ef0} stroke="white" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
