import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContentUnavailable } from "@/components/shared/ContentUnavailable";
import Image from "next/image";
import { getPageBySlugDynamic } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import { normalizeHref } from "@/lib/href";
import type {
  BenefitCardsSection,
  ContactBlockSection,
  IconStepsSection,
  ImageOverlaySection,
  PageEntry,
  PageHeroSection,
  StoryBlockSection,
  StrapiMedia,
} from "@/lib/page-types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getPageBySlugDynamic("hospice")) as PageEntry | null;
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

export default async function HospicePage() {
  const page = (await getPageBySlugDynamic("hospice")) as PageEntry | null;
  if (!page) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[strapi] Hospice page content not available");
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
    (section): section is PageHeroSection => section.__component === "sections.page-hero"
  );
  const story = sections.find(
    (section): section is StoryBlockSection => section.__component === "sections.story-block"
  );
  const overlays = sections.filter(
    (section): section is ImageOverlaySection => section.__component === "sections.image-overlay"
  );
  const benefits = sections.find(
    (section): section is BenefitCardsSection => section.__component === "sections.benefit-cards"
  );
  const howItWorks = sections.find(
    (section): section is IconStepsSection => section.__component === "sections.icon-steps"
  );
  const contactBlock = sections.find(
    (section): section is ContactBlockSection => section.__component === "sections.contact-block"
  );

  const fallback = {
    hero: {
      badgeLabel: "Hospice Outsourcing",
      title: "Hospice Outsourcing",
      subtitle:
        "Access trained, compassionate support staff who help Hospice providers manage coordination, documentation and family communication with accuracy and care.",
      cta: { label: "Book a Discovery Call", url: "/#contact" },
    },
    story: {
      label: "Our Story",
      title: "Outsourcing for Hospice Agencies",
      body:
        "In Hospice care, every detail matters. Accurate documentation, timely coordination\nand sensitive communication with families directly impact both care quality and operational stability.\n\nOutsourcing non-clinical Hospice tasks lets your clinical team stay focused on bedside care, interdisciplinary planning and family support, while trained professionals manage\nthe administrative load.\n\nAmedicase provides remote specialists experienced in Hospice workflows, EMR updates, care coordination and family communication, ensuring consistency, compliance and operational clarity.",
    },
    overlays: [
      {
        backgroundImage: "/images/creative-development/office-documents-background.jpg",
        overlayColor: "rgba(30,58,138,0.2)",
        overlayImage: "/images/creative-development/white-shapes-overlay.svg",
      },
      {
        backgroundImage: "/images/creative-development/office-documents-background.jpg",
        overlayColor: "rgba(30,58,138,0.2)",
        overlayImage: "/images/creative-development/white-shapes-overlay.svg",
      },
    ],
    benefits: {
      label: "What We Can Offer",
      title: "Outsourcing Benefits\nfor Hospice",
      cards: [
        {
          label: "Agility",
          description:
            "Hospice census and visit volume change weekly. Outsourcing allows you to scale up or down quickly without the cost and delay of internal hiring.",
        },
        {
          label: "Capability",
          description:
            "Our team supports core Hospice operations: documentation, family communication, coordination, form updates, scheduling\nand authorizations. Skilled people without expanding internal headcount.",
        },
        {
          label: "Core Care Focus",
          description:
            "Your nurses, social workers and coordinators focus on patient and family care, while routine administrative tasks are handled by trained support staff.",
        },
      ],
    },
    howItWorks: {
      label: "How It Works",
      icon: "/images/hospice/how-it-works-icon.svg",
      steps: [
        {
          title: "Assessment",
          description:
            "We analyze your Hospice workflows: referrals, scheduling, documentation, family touchpoints and identify the tasks\nsuitable for outsourcing.",
        },
        {
          title: "Talent Selection",
          description:
            "We assign trained support specialists experienced in healthcare coordination, documentation management and compassionate communication.",
        },
        {
          title: "Seamless Integration",
          description:
            "Your outsourced team works inside your EMR, communication tools and daily routines, operating as an extension of your\nin-house staff.",
        },
        {
          title: "Monitoring & Optimization",
          description:
            "We deliver continuous monitoring, reporting and quality checks. Your team scales easily as your Hospice census grows.",
        },
      ],
      cta: { label: "More Info", url: "/#contact" },
    },
  };

  const storyData = story || fallback.story;
  const overlayFirst = overlays[0] || fallback.overlays[0];
  const overlaySecond = overlays[1] || fallback.overlays[1];
  const benefitsData = benefits || fallback.benefits;
  const howItWorksData = howItWorks || fallback.howItWorks;
  const heroCta = (hero && 'cta' in hero ? hero.cta : undefined) || fallback.hero.cta;
  const benefitCards = benefitsData?.cards?.length ? benefitsData.cards : fallback.benefits.cards;
  const howItWorksSteps = howItWorksData?.steps?.length ? howItWorksData.steps : fallback.howItWorks.steps;
  const howItWorksCta = howItWorksData?.cta || fallback.howItWorks.cta;
  const howItWorksIcon = howItWorksData?.icon || fallback.howItWorks.icon;

  const renderWithBreaks = (value?: string) => {
    if (!value) return null;
    const parts = value.split("\n");
    return parts.map((part, index) => (
      <span key={`${part}-${index}`}>
        {part}
        {index < parts.length - 1 ? <br /> : null}
      </span>
    ));
  };
  const getUrl = (media: StrapiMedia | string | null | undefined, fallbackUrl?: string) => {
    if (typeof media === 'string') return media;
    return getMediaUrl(media) || fallbackUrl || "";
  };
  const getAlt = (media: StrapiMedia | string | null | undefined, fallbackAlt?: string) => {
    if (typeof media === 'string') return fallbackAlt || "";
    return media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
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
            <div className="relative w-full flex flex-col overflow-hidden">
              {/* Badge - At top of hero section */}
              <div className="relative z-20 px-5 pt-0">
                <div className="flex" style={{ justifyContent: 'flex-start' }}>
                  <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-auto flex items-center justify-center px-2">
                    <p 
                      className="font-sans font-medium text-[#d01127] text-[13px] uppercase whitespace-nowrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {(hero && 'badgeLabel' in hero ? hero.badgeLabel : undefined) || fallback.hero.badgeLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image Background - Full width */}
              <div className="relative h-[562px] w-full -mt-[29px] overflow-hidden">
                <Image
                  src={getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg")}
                  alt={getAlt((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "Hospice professionals")}
                  fill
                  sizes="100vw"
                  className="w-full h-full object-cover object-center"
                  unoptimized={isRemoteUrl(
                    getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg")
                  )}
                />
                <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0 pointer-events-none" />
              </div>
              
              {/* Content Card - Relative positioning */}
              <div className="relative -mt-[470px] mx-[20px] w-[calc(100%-40px)] max-w-[320px] backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.12)] rounded-[12px] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] to-[rgba(84,100,145,0.04)] flex flex-col justify-between p-5 z-10 mb-[92px]">
                <div className="flex flex-col gap-[40px] items-start text-blue-900 mt-[80px] mb-5">
                  <h1 
                    className="font-sans font-semibold text-[clamp(24px,3vw,28px)] leading-[1.1] tracking-[-0.66px] w-full whitespace-pre-wrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {renderWithBreaks((hero && 'title' in hero ? hero.title : undefined) || fallback.hero.title)}
                  </h1>
                  <p 
                    className="font-sans font-normal text-[clamp(11px,1.5vw,12px)] leading-[1.4] tracking-[-0.26px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {renderWithBreaks((hero && 'subtitle' in hero ? hero.subtitle : undefined) || fallback.hero.subtitle)}
                  </p>
                </div>
                <div className="flex flex-col gap-[20px] items-center">
                  <a 
                    href={normalizeHref(heroCta?.url) || "/#contact"}
                    className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[16px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(191,192,215,0.3)] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[18px] text-center tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {heroCta?.label || "Book a Discovery Call"}
                    </p>
                  </a>
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
                  src={getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg")}
                  alt={getAlt((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "Hospice professionals")}
                  fill
                  sizes="100vw"
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                  unoptimized={isRemoteUrl(
                    getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg")
                  )}
                />
              </div>
              <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
            </div>
            
            {/* Content Container */}
            <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 xl:px-0 h-full flex items-start pt-[15px]">
              {/* Badge */}
              <div className="absolute top-[-17px] left-[60px] z-20">
                <div className="bg-[#f1f5ff] h-[70px] rounded-bl-[18px] rounded-br-[18px] w-auto relative flex items-center px-[20px]">
                  <p 
                    className="font-sans font-medium text-[#d01127] text-[33px] uppercase whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {(hero && 'badgeLabelDesktop' in hero ? hero.badgeLabelDesktop : undefined) || (hero && 'badgeLabel' in hero ? hero.badgeLabel : undefined) || fallback.hero.badgeLabel}
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
                    {renderWithBreaks((hero && 'titleDesktop' in hero ? hero.titleDesktop : undefined) || (hero && 'title' in hero ? hero.title : undefined) || fallback.hero.title)}
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {renderWithBreaks((hero && 'subtitleDesktop' in hero ? hero.subtitleDesktop : undefined) || (hero && 'subtitle' in hero ? hero.subtitle : undefined) || fallback.hero.subtitle)}
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <a 
                    href={normalizeHref(heroCta?.url) || "/#contact"}
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {heroCta?.label || "Book a Discovery Call"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label={storyData?.label || fallback.story.label} className="mb-0" />
            <div className="flex flex-col gap-1 items-start mb-[40px] md:mb-[60px] w-full">
              <h2 
                className="font-sans leading-[120%] w-full whitespace-pre-wrap"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#000618',
                  fontSize: '52px',
                  fontWeight: 600,
                  lineHeight: '120%',
                  letterSpacing: '-1.04px',
                }}
              >
                {renderWithBreaks(storyData?.title || fallback.story.title)}
              </h2>
              <p 
                className="font-sans w-full"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#000618',
                  fontSize: '33px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.33px',
                }}
              >
                {renderWithBreaks(storyData?.body || fallback.story.body)}
              </p>
            </div>
          </div>
        </section>

        {/* Image Section with Overlay */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              {/* Background Image */}
              <Image
                src={getUrl(overlayFirst?.backgroundImage, "/images/creative-development/office-documents-background.jpg")}
                alt={getAlt(overlayFirst?.backgroundImage, "Office documents and files")}
                fill
                sizes="(max-width: 1024px) 100vw, 1320px"
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: 'center center'
                }}
                unoptimized={isRemoteUrl(
                  getUrl(overlayFirst?.backgroundImage, "/images/creative-development/office-documents-background.jpg")
                )}
              />
              
              {/* Overlays Container - Single absolute wrapper for all overlays */}
              <div className="absolute inset-0 rounded-[8px] pointer-events-none">
                {/* Blue Overlay */}
                <div
                  className="w-full h-full mix-blend-hard-light rounded-[8px]"
                  style={{ backgroundColor: overlayFirst?.overlayColor || "rgba(30,58,138,0.2)" }}
                />
                
                {/* White Abstract Shapes Overlay */}
                <div className="absolute inset-0 rounded-[8px] overflow-visible">
                  <Image
                    src={getUrl(overlayFirst?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")}
                    alt={getAlt(overlayFirst?.overlayImage, "")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1320px"
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.1)',
                      transformOrigin: 'left center'
                    }}
                    unoptimized={isRemoteUrl(
                      getUrl(overlayFirst?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Can Offer Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label={benefitsData?.label || fallback.benefits.label} className="mb-0" />
            <div className="flex flex-col gap-1 items-start justify-start mb-[40px] md:mb-[60px] w-full">
              <h2 
                className="font-sans font-semibold leading-[1.1] text-[#000618] text-[clamp(28px,4vw,52px)] tracking-[-1.04px] w-full text-left whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(benefitsData?.title || fallback.benefits.title)}
              </h2>
            </div>
            
            {/* Benefits Grid - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] items-start w-full">
              {/* Card 1: Agility */}
              <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[130px]">
                <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-[#d01127] tracking-[-0.66px] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefitCards[0]?.label || "Agility"}
                </h3>
                <p className="font-sans font-normal leading-[1.2] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {renderWithBreaks(benefitCards[0]?.description || fallback.benefits.cards[0].description)}
                </p>
              </div>

              {/* Card 2: Capability */}
              <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[154px]">
                <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-[#d01127] tracking-[-0.66px] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefitCards[1]?.label || "Capability"}
                </h3>
                <p className="font-sans font-normal leading-[1.2] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {renderWithBreaks(benefitCards[1]?.description || fallback.benefits.cards[1].description)}
                </p>
              </div>

              {/* Card 3: Core Care Focus */}
              <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[210px]">
                <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-[#d01127] tracking-[-0.66px] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefitCards[2]?.label || "Core Care Focus"}
                </h3>
                <p className="font-sans font-normal leading-[1.2] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {renderWithBreaks(benefitCards[2]?.description || fallback.benefits.cards[2].description)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section with Overlay - Duplicate */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              {/* Background Image */}
              <Image
                src={getUrl(overlaySecond?.backgroundImage, "/images/creative-development/office-documents-background.jpg")}
                alt={getAlt(overlaySecond?.backgroundImage, "Office documents and files")}
                fill
                sizes="(max-width: 1024px) 100vw, 1320px"
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: 'center center'
                }}
                unoptimized={isRemoteUrl(
                  getUrl(overlaySecond?.backgroundImage, "/images/creative-development/office-documents-background.jpg")
                )}
              />
              
              {/* Overlays Container - Single absolute wrapper for all overlays */}
              <div className="absolute inset-0 rounded-[8px] pointer-events-none">
                {/* Blue Overlay */}
                <div
                  className="w-full h-full mix-blend-hard-light rounded-[8px]"
                  style={{ backgroundColor: overlaySecond?.overlayColor || "rgba(30,58,138,0.2)" }}
                />
                
                {/* White Abstract Shapes Overlay */}
                <div className="absolute inset-0 rounded-[8px] overflow-visible">
                  <Image
                    src={getUrl(overlaySecond?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")}
                    alt={getAlt(overlaySecond?.overlayImage, "")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1320px"
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.1)',
                      transformOrigin: 'left center'
                    }}
                    unoptimized={isRemoteUrl(
                      getUrl(overlaySecond?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label={howItWorksData?.label || fallback.howItWorks.label} className="mb-0" />
            
            {/* Process Steps - Flex wrap layout with icons */}
            <div className="flex flex-col gap-[70px] items-center w-full mt-[60px]">
              <div className="flex flex-wrap gap-[70px] items-start w-full">
                {/* Step 1: Assessment */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0 w-[624px]">
                  <div className="mr-[-70px] relative shrink-0 size-[140px] mt-[30px]">
                    <Image
                      src={getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")}
                      alt={getAlt(howItWorksIcon, "")}
                      width={140}
                      height={140}
                      className="w-full h-full object-contain"
                      unoptimized={isRemoteUrl(
                        getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[554px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#d01127] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {howItWorksSteps[0]?.title || "Assessment"}
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(
                        howItWorksSteps[0]?.description || fallback.howItWorks.steps[0].description
                      )}
                    </p>
                  </div>
                </div>

                {/* Step 2: Talent Selection */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0 w-[626px]">
                  <div className="mr-[-70px] relative shrink-0 size-[140px] mt-[30px]">
                    <Image
                      src={getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")}
                      alt={getAlt(howItWorksIcon, "")}
                      width={140}
                      height={140}
                      className="w-full h-full object-contain"
                      unoptimized={isRemoteUrl(
                        getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[559px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#d01127] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {howItWorksSteps[1]?.title || "Talent Selection"}
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(
                        howItWorksSteps[1]?.description || fallback.howItWorks.steps[1].description
                      )}
                    </p>
                  </div>
                </div>

                {/* Step 3: Seamless Integration */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0 w-[624px]">
                  <div className="mr-[-70px] relative shrink-0 size-[140px] mt-[30px]">
                    <Image
                      src={getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")}
                      alt={getAlt(howItWorksIcon, "")}
                      width={140}
                      height={140}
                      className="w-full h-full object-contain"
                      unoptimized={isRemoteUrl(
                        getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[554px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#d01127] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {howItWorksSteps[2]?.title || "Seamless Integration"}
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(
                        howItWorksSteps[2]?.description || fallback.howItWorks.steps[2].description
                      )}
                    </p>
                  </div>
                </div>

                {/* Step 4: Monitoring & Optimization */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0 w-[626px]">
                  <div className="mr-[-70px] relative shrink-0 size-[140px] mt-[30px]">
                    <Image
                      src={getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")}
                      alt={getAlt(howItWorksIcon, "")}
                      width={140}
                      height={140}
                      className="w-full h-full object-contain"
                      unoptimized={isRemoteUrl(
                        getUrl(howItWorksIcon, "/images/hospice/how-it-works-icon.svg")
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[554px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#d01127] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {howItWorksSteps[3]?.title || "Monitoring & Optimization"}
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(
                        howItWorksSteps[3]?.description || fallback.howItWorks.steps[3].description
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* More Info Button */}
              <a
                href={normalizeHref(howItWorksCta?.url) || "/#contact"}
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid flex from-[rgba(205,27,48,0.24)] items-center justify-center px-[40px] py-[20px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(87,18,23,0.3)] to-[rgba(215,45,64,0.16)] w-full hover:opacity-90 transition-opacity"
              >
                <p className="font-sans font-semibold leading-[1.1] text-[#d4283c] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {howItWorksCta?.label || "More Info"}
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection data={contactBlock} />
      </main>
      
      <Footer />
    </div>
  );
}
