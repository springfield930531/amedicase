import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import Image from "next/image";
import { getPageBySlugDynamic } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  BackgroundPatternSection,
  ContactBlockSection,
  PageEntry,
  PageSection,
  ServicesHeroSection,
  ServicesHowItWorksSection,
  ServicesHowWeHelpSection,
  ServicesPillarsSection,
  ServicesQualitySection,
  ServicesWhyChooseSection,
  StrapiMedia,
} from "@/lib/page-types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const servicePage = (await getPageBySlugDynamic("services")) as PageEntry | null;
  const seo = servicePage?.seo;
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

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

export default async function ServicesPage() {
  const page = (await getPageBySlugDynamic("services")) as PageEntry | null;
  const sections = page?.sections || [];
  const contactBlock = sections.find(
    (section: PageSection): section is ContactBlockSection => section.__component === "sections.contact-block"
  );
  const fallback = {
    backgroundPattern: {
      enabled: true,
      svgPath: svgPaths.p2ff94480,
      viewBox: "0 0 517 1300",
      fill: "#7F92C7",
      opacity: 0.5,
      width: 516,
      height: 1300,
      top: 572,
      left: 0,
    },
    hero: {
      badgeLabel: "SeRvices",
      title: "End-to-End Outsourcing Solutions for Home Health Agencies",
      titleDesktop: "End-to-End Outsourcing Solutions\nfor Home Health Agencies",
      subtitle:
        "From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.",
      subtitleDesktop:
        "From patient intake to billing and operations — Amedicase helps\nU.S. home health providers streamline workflows, cut costs, and focus on patient care.",
      primaryCta: { label: "Book a Free Consultation", url: "#" },
      secondaryCta: { label: "Download Service Overview", url: "#" },
    },
    servicePillars: {
      label: "Our Service Pillars",
      cards: [
        {
          title: "Billing & Finance",
          titleMobile: "Billing &\nFinance",
          titleDesktop: "Billing & Finance",
          description: "Accurate billing.\nFaster payments.",
          descriptionDesktop: "Accurate billing. Faster payments.",
          descriptionMobile: "Accurate billing.\nFaster payments.",
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          imageStyle: { heightPercent: 121.49, widthPercent: 100, leftPercent: 0, topPercent: -17.42 },
        },
        {
          title: "Patient Intake & Support",
          titleMobile: "Patient Intake\n& Support",
          titleDesktop: "Patient Intake & Support",
          description: "Accurate billing.\nFaster payments.",
          descriptionDesktop: "Accurate billing. Faster payments.",
          descriptionMobile: "Accurate billing.\nFaster payments.",
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          imageStyle: { heightPercent: 100, widthPercent: 237.04, leftPercent: -71.67, topPercent: 0 },
        },
        {
          title: "Operations & Admin Support",
          titleMobile: "Operations &\nAdmin Support",
          titleDesktop: "Operations & Admin Support",
          description: "Reliable back-office for\nclinical teams.",
          descriptionDesktop: "Reliable back-office for clinical teams.",
          descriptionMobile: "Reliable back-office for\nclinical teams.",
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          imageStyle: { heightPercent: 100, widthPercent: 187.27, leftPercent: -26.67, topPercent: 0 },
        },
        {
          title: "Digital Presence & Growth",
          titleMobile: "Digital Presence\n& Growth",
          titleDesktop: "Digital Presence & Growth",
          description: "Power your agency with\nsmart technology.",
          descriptionDesktop: "Power your agency with smart technology.",
          descriptionMobile: "Power your agency with\nsmart technology.",
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          imageStyle: { heightPercent: 119.99, widthPercent: 100, leftPercent: 0, topPercent: -6 },
        },
      ],
    },
    howWeHelp: {
      label: "How We Help Home Health Agencies",
      title: "Designed to Help You Operate Efficiently and Scale with Confidence.",
      benefits: [
        { label: "Reduce Costs up to 60% without compromising HIPAA compliance." },
        { label: "Focus on Patient Care. Let us handle admin load." },
        { label: "Scale Seamlessly. Expand your team as your caseload grows." },
      ],
      bulletIconBlur: 2,
    },
    weDeliverQuality: {
      title: "We deliver quality.",
      overlayColor: "rgba(30,58,138,0.6)",
      mobileTopSvgPath: svgPaths.p1d182d80,
      mobileBottomSvgPath:
        "M0 34.8145C0 34.8145 27.9409 0.328038 47.5434 0.00417593C62.2703 -0.242293 73.8502 10.493 77.4164 13.2432C80.9825 15.9934 101.892 36.0728 105.452 41.3932C105.452 41.3932 85.1446 24.8508 74.9695 19.3996C58.1924 10.4098 49.5877 13.6578 30.7556 29.6969C21.6295 37.4624 17.9227 44.1626 0 34.8145Z",
      mobileSvgViewBox: "0 0 106 42",
    },
    howItWorks: {
      label: "How It Works",
      steps: [
        { title: "Discovery & Planning", description: "We identify your workflow needs and define clear KPIs." },
        { title: "Onboarding & Training", description: "Your dedicated Amedicase team gets trained on your EMR tools and processes." },
        { title: "Execution & Support", description: "We manage daily operations, reports, and QA checks." },
        { title: "Ongoing Optimization", description: "Continuous performance tracking and scaling when needed." },
      ],
      cta: { label: "Start Your Free Discovery Call", url: "#" },
    },
    whyChoose: {
      label: "Why Choose Amedicase",
      benefits: [
        { label: "HIPAA-Compliant &\nSecure Data Handling" },
        { label: "Up to 60% Cost Savings\nvs. U.S. Operations" },
        { label: "Healthcare-trained Teams\nwith U.S. Experience" },
        { label: "Dedicated Account\nManagers" },
        { label: "Real-time Communication\n& U.S. Time-Zone Overlap" },
      ],
      mobileSeparatorSvgPath:
        "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z",
      mobileSeparatorViewBox: "0 0 280 2",
    },
  };

  const backgroundPattern =
    (sections.find((section: PageSection): section is BackgroundPatternSection => section.__component === "shared.background-pattern")) || fallback.backgroundPattern;
  const hero =
    (sections.find((section: PageSection): section is ServicesHeroSection => section.__component === "sections.services-page-hero")) || fallback.hero;
  const servicePillars =
    (sections.find((section: PageSection): section is ServicesPillarsSection => section.__component === "sections.services-page-pillars")) || fallback.servicePillars;
  const howWeHelp =
    (sections.find((section: PageSection): section is ServicesHowWeHelpSection => section.__component === "sections.services-page-how-we-help")) || fallback.howWeHelp;
  const weDeliverQuality =
    (sections.find((section: PageSection): section is ServicesQualitySection => section.__component === "sections.services-page-quality")) || fallback.weDeliverQuality;
  const howItWorks =
    (sections.find((section: PageSection): section is ServicesHowItWorksSection => section.__component === "sections.services-page-how-it-works")) || fallback.howItWorks;
  const whyChoose =
    (sections.find((section: PageSection): section is ServicesWhyChooseSection => section.__component === "sections.services-page-why-choose")) || fallback.whyChoose;
  const howWeHelpBulletIcon =
    howWeHelp && "bulletIcon" in howWeHelp ? howWeHelp.bulletIcon : undefined;
  const weDeliverQualityBackgroundImage =
    weDeliverQuality && "backgroundImage" in weDeliverQuality
      ? weDeliverQuality.backgroundImage
      : undefined;
  const weDeliverQualityDesktopTopIcon =
    weDeliverQuality && "desktopTopIcon" in weDeliverQuality
      ? weDeliverQuality.desktopTopIcon
      : undefined;
  const weDeliverQualityDesktopBottomIcon =
    weDeliverQuality && "desktopBottomIcon" in weDeliverQuality
      ? weDeliverQuality.desktopBottomIcon
      : undefined;
  const howItWorksIllustration =
    howItWorks && "illustration" in howItWorks ? howItWorks.illustration : undefined;
  const whyChooseSeparatorImage =
    whyChoose && "separatorImage" in whyChoose ? whyChoose.separatorImage : undefined;
  const whyChooseRightImage =
    whyChoose && "rightImage" in whyChoose ? whyChoose.rightImage : undefined;
  const whyChooseRightOverlay =
    whyChoose && "rightOverlay" in whyChoose ? whyChoose.rightOverlay : undefined;

  const getUrl = (media: StrapiMedia | null | undefined, fallbackUrl?: string) => getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: StrapiMedia | null | undefined, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);
  const toPercent = (value?: number | string) => (value !== undefined && value !== null ? `${value}%` : undefined);
  const splitLines = (value?: string) => (value ? value.split("\n") : []);
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
  const pillarCards = servicePillars?.cards?.length ? servicePillars.cards : fallback.servicePillars?.cards || [];
  const pillarCard1 = pillarCards[0] || {};
  const pillarCard2 = pillarCards[1] || {};
  const pillarCard3 = pillarCards[2] || {};
  const pillarCard4 = pillarCards[3] || {};
  const extraPillarCards = pillarCards.slice(4);
  const getCardImage = (card: typeof pillarCard1) => ("image" in card ? card.image : undefined);
  const getCardImageStyle = (card: typeof pillarCard1) =>
    "imageStyle" in card ? card.imageStyle : undefined;
  const getCardLearnMoreIcon = (card: typeof pillarCard1) =>
    "learnMoreIcon" in card ? card.learnMoreIcon : undefined;
  const howItWorksSteps = howItWorks?.steps?.length ? howItWorks.steps : fallback.howItWorks?.steps || [];
  const whyChooseBenefits = whyChoose?.benefits?.length ? whyChoose.benefits : fallback.whyChoose?.benefits || [];
  const whyChooseLine1 = splitLines(whyChooseBenefits[1]?.label || "Up to 60% Cost Savings\nvs. U.S. Operations");

  const heroPrimaryUrl = hero?.primaryCta?.url || "#";
  const heroSecondaryUrl = hero?.secondaryCta?.url || "#";
  const heroPrimaryExternal = (hero?.primaryCta && 'isExternal' in hero.primaryCta ? hero.primaryCta.isExternal : undefined);
  const heroSecondaryExternal = (hero?.secondaryCta && 'isExternal' in hero.secondaryCta ? hero.secondaryCta.isExternal : undefined);
  const howItWorksCtaUrl = howItWorks?.cta?.url || "#";
  const howItWorksCtaExternal = (howItWorks?.cta && 'isExternal' in howItWorks.cta ? howItWorks.cta.isExternal : undefined);

  const card1Lines = splitLines(pillarCard1.descriptionMobile || pillarCard1.description);
  const card2Lines = splitLines(pillarCard2.descriptionMobile || pillarCard2.description);
  const card3Lines = splitLines(pillarCard3.descriptionMobile || pillarCard3.description);
  const card4Lines = splitLines(pillarCard4.descriptionMobile || pillarCard4.description);
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      {/* Background Pattern - Decorative element, absolute is appropriate here */}
      {backgroundPattern?.enabled !== false && backgroundPattern?.svgPath ? (
        <div
          className="absolute max-w-[100vw] opacity-80 pointer-events-none z-0 overflow-hidden"
          style={{
            top: backgroundPattern?.top ?? 572,
            left: backgroundPattern?.left ?? 0,
            width: backgroundPattern?.width ?? 516,
            height: backgroundPattern?.height ?? 1300,
          }}
        >
          <svg className="w-full h-full" fill="none" viewBox={backgroundPattern?.viewBox || "0 0 517 1300"}>
            <path
              d={backgroundPattern?.svgPath || svgPaths.p2ff94480}
              fill={backgroundPattern?.fill || "#7F92C7"}
              opacity={backgroundPattern?.opacity ?? 0.5}
            />
          </svg>
        </div>
      ) : null}

      <Header />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - Refactored with flexbox structure */}
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative h-[562px] w-full overflow-hidden">
              {/* Badge Container */}
              <div className="absolute top-0 left-5 z-20">
                <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] relative">
                  <p 
                    className="absolute left-[20px] top-[10px] font-sans font-medium text-[#d01127] text-[13px] uppercase"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {hero?.badgeLabel || "SeRvices"}
                  </p>
                </div>
              </div>

              {/* Hero Image Background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
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
                        src={getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg")}
                        alt={getAlt((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "Healthcare professionals working")}
                        fill
                        sizes="100vw"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: 'cover', objectPosition: 'center center' }}
                        unoptimized={isRemoteUrl(getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg"))}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
              </div>
              
              {/* Content Card - Using flexbox instead of absolute positioning */}
              <div className="absolute inset-x-5 top-[39px] h-[503px]">
                <div className="backdrop-blur-[10px] bg-gradient-to-b from-[rgba(183,198,243,0.12)] to-[rgba(84,100,145,0.04)] rounded-[12px] border border-[rgba(158,162,203,0.8)] h-full flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-[60px] mt-[97px]">
                    <h1 
                      className="font-sans font-semibold text-[clamp(28px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {hero?.title || fallback.hero?.title}
                    </h1>
                    <p 
                      className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {hero?.subtitle || fallback.hero?.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start">
                    <a 
                      className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                      href={heroPrimaryUrl}
                      target={heroPrimaryExternal ? "_blank" : undefined}
                      rel={heroPrimaryExternal ? "noreferrer" : undefined}
                    >
                      {hero?.primaryCta?.label || "Book a Free Consultation"}
                    </a>
                    <a 
                      className="font-sans font-normal text-[#d01127] text-[clamp(12px,1.8vw,13px)] underline tracking-[-0.26px] text-right w-full mb-[5px]"
                      style={{ 
                        fontVariationSettings: "'wdth' 100", 
                        textDecorationSkipInk: 'none', 
                        textUnderlinePosition: 'from-font' 
                      }}
                      href={heroSecondaryUrl}
                      target={heroSecondaryExternal ? "_blank" : undefined}
                      rel={heroSecondaryExternal ? "noreferrer" : undefined}
                    >
                      {hero?.secondaryCta?.label || "Download Service Overview"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Refactored with flexbox */}
          <div className="hidden lg:block relative h-[750px] w-full overflow-hidden">
            {/* Hero Image Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={getUrl((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "/images/services/hero-services.jpg")}
                    alt={getAlt((hero && 'backgroundImage' in hero ? hero.backgroundImage : undefined), "Healthcare professionals working")}
                  fill
                  sizes="100vw"
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                  unoptimized={isRemoteUrl(
                    getUrl(
                      hero && "backgroundImage" in hero ? hero.backgroundImage : undefined,
                      "/images/services/hero-services.jpg"
                    )
                  )}
                />
              </div>
              <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
            </div>
            
            {/* Content Container - Using flexbox structure */}
            <div className="relative mx-auto max-w-[1440px] h-full flex items-start pt-[15px]">
              {/* Badge */}
              <p 
                className="absolute left-[calc(50%-620px)] top-[15px] font-sans font-medium text-[#d01127] text-[20px] uppercase z-20"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {hero?.badgeLabel || "SeRvices"}
              </p>
              
              {/* Content Card - Using flexbox instead of absolute */}
              <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                  <h1 
                    className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {hero?.titleDesktop || hero?.title || fallback.hero?.titleDesktop}
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {hero?.subtitleDesktop || hero?.subtitle || fallback.hero?.subtitleDesktop}
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <a 
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    href={heroPrimaryUrl}
                    target={heroPrimaryExternal ? "_blank" : undefined}
                    rel={heroPrimaryExternal ? "noreferrer" : undefined}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {hero?.primaryCta?.label || "Book a Free Consultation"}
                    </p>
                  </a>
                  <a 
                    className="font-sans font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textDecorationSkipInk: 'none',
                      textUnderlinePosition: 'from-font'
                    }}
                    href={heroSecondaryUrl}
                    target={heroSecondaryExternal ? "_blank" : undefined}
                    rel={heroSecondaryExternal ? "noreferrer" : undefined}
                  >
                    {hero?.secondaryCta?.label || "Download Service Overview"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Pillars - Already using grid, structure is good */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
            <p 
              className="font-sans font-medium text-[15px] lg:text-[20px] uppercase mb-8 lg:mb-[60px]"
              style={{
                WebkitBackgroundClip: 'text !important',
                WebkitTextFillColor: 'transparent',
                background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                fontVariationSettings: "'wdth' 100",
              } as ExtendedCSSProperties}
            >
              {servicePillars?.label || "Our Service Pillars"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[60px]">
              {/* Service Cards - Already using flexbox, structure is good */}
              {/* Service Card 1: Billing & Finance */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div
                      className="absolute"
                      style={{
                        height: toPercent(getCardImageStyle(pillarCard1)?.heightPercent) || "121.49%",
                        left: toPercent(getCardImageStyle(pillarCard1)?.leftPercent) || "0%",
                        top: toPercent(getCardImageStyle(pillarCard1)?.topPercent) || "-17.42%",
                        width: toPercent(getCardImageStyle(pillarCard1)?.widthPercent) || "100%",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={getUrl(getCardImage(pillarCard1), "/images/services/billing-finance-new.jpg")}
                          alt={getAlt(getCardImage(pillarCard1), "Billing & Finance")}
                          fill
                          sizes="122px"
                          className="absolute inset-0 w-full h-full object-cover"
                          unoptimized={isRemoteUrl(
                            getUrl(getCardImage(pillarCard1), "/images/services/billing-finance-new.jpg")
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start justify-center">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">
                          {renderWithBreaks(pillarCard1.titleMobile || pillarCard1.title || "Billing &\nFinance")}
                        </span>
                        <span className="hidden lg:inline">
                          {pillarCard1.titleDesktop || pillarCard1.title || "Billing & Finance"}
                        </span>
                      </h3>
                      <div className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="mb-0 lg:inline lg:mr-2">
                          {card1Lines[0] || "Accurate billing."}
                        </p>
                        <p className="lg:inline">{card1Lines[1] || "Faster payments."}</p>
                      </div>
                    </div>
                    <a
                      className="flex gap-[10px] items-center w-full"
                      href={pillarCard1.learnMoreUrl || "#"}
                    >
                      <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {pillarCard1.learnMoreLabel || "Learn More"}
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <Image
                          src={getUrl(getCardLearnMoreIcon(pillarCard1), "/images/services/arrow-icon.svg")}
                          alt={getAlt(getCardLearnMoreIcon(pillarCard1), "Arrow")}
                          width={26}
                          height={26}
                          className="w-full h-full"
                          unoptimized={isRemoteUrl(
                            getUrl(getCardLearnMoreIcon(pillarCard1), "/images/services/arrow-icon.svg")
                          )}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Card 2: Patient Intake & Support */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[33px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <div
                        className="absolute"
                        style={{
                          left: toPercent(getCardImageStyle(pillarCard2)?.leftPercent) || "-71.67%",
                          width: toPercent(getCardImageStyle(pillarCard2)?.widthPercent) || "237.04%",
                          top: toPercent(getCardImageStyle(pillarCard2)?.topPercent) || "0%",
                          height: toPercent(getCardImageStyle(pillarCard2)?.heightPercent) || "100%",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={getUrl(getCardImage(pillarCard2), "/images/services/patient-intake-correct.jpg")}
                            alt={getAlt(getCardImage(pillarCard2), "Patient Intake & Support")}
                            fill
                            sizes="120px"
                            className="absolute h-full max-w-none"
                            unoptimized={isRemoteUrl(
                              getUrl(getCardImage(pillarCard2), "/images/services/patient-intake-correct.jpg")
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">
                          {renderWithBreaks(pillarCard2.titleMobile || pillarCard2.title || "Patient Intake\n& Support")}
                        </span>
                        <span className="hidden lg:inline">
                          {pillarCard2.titleDesktop || pillarCard2.title || "Patient Intake & Support"}
                        </span>
                      </h3>
                      <div className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="mb-0 lg:inline lg:mr-2">
                          {card2Lines[0] || "Accurate billing."}
                        </p>
                        <p className="lg:inline">{card2Lines[1] || "Faster payments."}</p>
                      </div>
                    </div>
                    <a
                      className="flex gap-[10px] items-center w-full"
                      href={pillarCard2.learnMoreUrl || "#"}
                    >
                      <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {pillarCard2.learnMoreLabel || "Learn More"}
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <Image
                          src={getUrl(getCardLearnMoreIcon(pillarCard2), "/images/services/arrow-icon.svg")}
                          alt={getAlt(getCardLearnMoreIcon(pillarCard2), "Arrow")}
                          width={26}
                          height={26}
                          className="w-full h-full"
                          unoptimized={isRemoteUrl(
                            getUrl(getCardLearnMoreIcon(pillarCard2), "/images/services/arrow-icon.svg")
                          )}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Card 3: Operations & Admin Support */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[22px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <div
                        className="absolute"
                        style={{
                          left: toPercent(getCardImageStyle(pillarCard3)?.leftPercent) || "-26.67%",
                          width: toPercent(getCardImageStyle(pillarCard3)?.widthPercent) || "187.27%",
                          top: toPercent(getCardImageStyle(pillarCard3)?.topPercent) || "0%",
                          height: toPercent(getCardImageStyle(pillarCard3)?.heightPercent) || "100%",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={getUrl(getCardImage(pillarCard3), "/images/services/operations-admin-correct.jpg")}
                            alt={getAlt(getCardImage(pillarCard3), "Operations & Admin Support")}
                            fill
                            sizes="120px"
                            className="absolute h-full max-w-none"
                            unoptimized={isRemoteUrl(
                              getUrl(getCardImage(pillarCard3), "/images/services/operations-admin-correct.jpg")
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">
                          {renderWithBreaks(pillarCard3.titleMobile || pillarCard3.title || "Operations &\nAdmin Support")}
                        </span>
                        <span className="hidden lg:inline">
                          {pillarCard3.titleDesktop || pillarCard3.title || "Operations & Admin Support"}
                        </span>
                      </h3>
                      <p className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">
                          {renderWithBreaks(card3Lines.join("\n") || "Reliable back-office for\nclinical teams.")}
                        </span>
                        <span className="hidden lg:inline">
                          {pillarCard3.descriptionDesktop || pillarCard3.description || "Reliable back-office for clinical teams."}
                        </span>
                      </p>
                    </div>
                    <a
                      className="flex gap-[10px] items-center w-full"
                      href={pillarCard3.learnMoreUrl || "#"}
                    >
                      <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {pillarCard3.learnMoreLabel || "Learn More"}
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <Image
                          src={getUrl(getCardLearnMoreIcon(pillarCard3), "/images/services/arrow-icon.svg")}
                          alt={getAlt(getCardLearnMoreIcon(pillarCard3), "Arrow")}
                          width={26}
                          height={26}
                          className="w-full h-full"
                          unoptimized={isRemoteUrl(
                            getUrl(getCardLearnMoreIcon(pillarCard3), "/images/services/arrow-icon.svg")
                          )}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Card 4: Digital Presence & Growth */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[10px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div
                      className="absolute"
                      style={{
                        height: toPercent(getCardImageStyle(pillarCard4)?.heightPercent) || "119.99%",
                        left: toPercent(getCardImageStyle(pillarCard4)?.leftPercent) || "0%",
                        top: toPercent(getCardImageStyle(pillarCard4)?.topPercent) || "-6%",
                        width: toPercent(getCardImageStyle(pillarCard4)?.widthPercent) || "100%",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={getUrl(getCardImage(pillarCard4), "/images/services/digital-growth-new.jpg")}
                          alt={getAlt(getCardImage(pillarCard4), "Digital Presence & Growth")}
                          fill
                          sizes="120px"
                          className="absolute inset-0 w-full h-full object-cover"
                          unoptimized={isRemoteUrl(
                            getUrl(getCardImage(pillarCard4), "/images/services/digital-growth-new.jpg")
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-[32px] items-start w-[150px] lg:w-auto">
                    <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">
                          {renderWithBreaks(pillarCard4.titleMobile || pillarCard4.title || "Digital Presence\n& Growth")}
                        </span>
                        <span className="hidden lg:inline">
                          {pillarCard4.titleDesktop || pillarCard4.title || "Digital Presence & Growth"}
                        </span>
                      </h3>
                      <p className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">
                          {renderWithBreaks(card4Lines.join("\n") || "Power your agency with\nsmart technology.")}
                        </span>
                        <span className="hidden lg:inline">
                          {pillarCard4.descriptionDesktop || pillarCard4.description || "Power your agency with smart technology."}
                        </span>
                      </p>
                    </div>
                    <a
                      className="flex gap-[10px] items-center w-[127px] lg:w-full"
                      href={pillarCard4.learnMoreUrl || "#"}
                    >
                      <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {pillarCard4.learnMoreLabel || "Learn More"}
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <Image
                          src={getUrl(getCardLearnMoreIcon(pillarCard4), "/images/services/arrow-icon.svg")}
                          alt={getAlt(getCardLearnMoreIcon(pillarCard4), "Arrow")}
                          width={26}
                          height={26}
                          className="w-full h-full"
                          unoptimized={isRemoteUrl(
                            getUrl(getCardLearnMoreIcon(pillarCard4), "/images/services/arrow-icon.svg")
                          )}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {extraPillarCards.map((card, index) => {
                const descriptionLines = splitLines(card.descriptionMobile || card.description);
                return (
                  <div
                    key={`pillar-extra-${index}`}
                    className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]"
                  >
                    <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
                      <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                        <div
                          className="absolute"
                          style={{
                            height: toPercent(getCardImageStyle(card)?.heightPercent) || "100%",
                            left: toPercent(getCardImageStyle(card)?.leftPercent) || "0%",
                            top: toPercent(getCardImageStyle(card)?.topPercent) || "0%",
                            width: toPercent(getCardImageStyle(card)?.widthPercent) || "100%",
                          }}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={getUrl(getCardImage(card))}
                              alt={getAlt(getCardImage(card), card.title || "Service")}
                              fill
                              sizes="122px"
                              className="absolute inset-0 w-full h-full object-cover"
                              unoptimized={isRemoteUrl(getUrl(getCardImage(card)))}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                        <div className="flex flex-col gap-[20px] items-start justify-center">
                          <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <span className="lg:hidden">
                              {renderWithBreaks(card.titleMobile || card.title || "Service")}
                            </span>
                            <span className="hidden lg:inline">
                              {card.titleDesktop || card.title || "Service"}
                            </span>
                          </h3>
                          <div className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="mb-0 lg:inline lg:mr-2">
                              {descriptionLines[0] || ""}
                            </p>
                            <p className="lg:inline">{descriptionLines[1] || ""}</p>
                          </div>
                        </div>
                        <a className="flex gap-[10px] items-center w-full" href={card.learnMoreUrl || "#"}>
                          <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {card.learnMoreLabel || "Learn More"}
                          </p>
                          <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                            <Image
                              src={getUrl(getCardLearnMoreIcon(card), "/images/services/arrow-icon.svg")}
                              alt={getAlt(getCardLearnMoreIcon(card), "Arrow")}
                              width={26}
                              height={26}
                              className="w-full h-full"
                              unoptimized={isRemoteUrl(
                                getUrl(getCardLearnMoreIcon(card), "/images/services/arrow-icon.svg")
                              )}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Help Home Health Agencies - Refactored with flexbox */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px]">
            <p className="font-sans font-medium text-[15px] lg:text-[20px] uppercase mb-8 lg:mb-[60px]" style={{
              WebkitBackgroundClip: 'text !important',
              WebkitTextFillColor: 'transparent',
              background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontVariationSettings: "'wdth' 100",
            } as ExtendedCSSProperties}>
              {howWeHelp?.label || "How We Help Home Health Agencies"}
            </p>
            <h2 className="font-sans font-semibold text-[33px] lg:text-[52px] text-[#000618] leading-[1.1] tracking-[-0.66px] lg:tracking-[-1.04px] mb-8 lg:mb-0 lg:w-[952px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {howWeHelp?.title || "Designed to Help You Operate Efficiently and Scale with Confidence."}
            </h2>
            
            {/* Benefit Items - Refactored with flexbox structure */}
            <div className="flex flex-col gap-0 items-start">
              {/* Benefit 1 - Using flexbox layout */}
              <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                <div className="flex items-start gap-[10px]">
                  {/* Decorative card - absolute positioning is appropriate for decorative element */}
                  <div className="backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-full min-h-[60px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                  {/* Icon dot - absolute positioning for precise placement */}
                  <div className="absolute left-[20px] top-[20px] w-[10px] h-[10px] z-10">
                    <div className="absolute inset-[-40%]">
                      <Image
                        alt=""
                        className="block max-w-none size-full"
                        src={getUrl(howWeHelpBulletIcon, "/images/services/icon-dot.svg")}
                        width={10}
                        height={10}
                        style={{ filter: `blur(${howWeHelp?.bulletIconBlur ?? 2}px)` }}
                        unoptimized={isRemoteUrl(getUrl(howWeHelpBulletIcon, "/images/services/icon-dot.svg"))}
                      />
                    </div>
                  </div>
                  {/* Text content */}
                  <p 
                    className="font-sans font-medium leading-[1.2] ml-[12px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {howWeHelp?.benefits?.[0]?.label || "Reduce Costs up to 60% without compromising HIPAA compliance."}
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                <div className="flex items-start gap-[10px]">
                  <div className="backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-full min-h-[60px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                  <div className="absolute left-[20px] top-[20px] w-[10px] h-[10px] z-10">
                    <div className="absolute inset-[-40%]">
                      <Image
                        alt=""
                        className="block max-w-none size-full"
                        src={getUrl(howWeHelpBulletIcon, "/images/services/icon-dot.svg")}
                        width={10}
                        height={10}
                        style={{ filter: `blur(${howWeHelp?.bulletIconBlur ?? 2}px)` }}
                        unoptimized={isRemoteUrl(getUrl(howWeHelpBulletIcon, "/images/services/icon-dot.svg"))}
                      />
                    </div>
                  </div>
                  <p 
                    className="font-sans font-medium leading-[1.2] ml-[12px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {howWeHelp?.benefits?.[1]?.label || "Focus on Patient Care. Let us handle admin load."}
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                <div className="flex items-start gap-[10px]">
                  <div className="backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-full min-h-[60px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                  <div className="absolute left-[20px] top-[20px] w-[10px] h-[10px] z-10">
                    <div className="absolute inset-[-40%]">
                      <Image
                        alt=""
                        className="block max-w-none size-full"
                        src={getUrl(howWeHelpBulletIcon, "/images/services/icon-dot.svg")}
                        width={10}
                        height={10}
                        style={{ filter: `blur(${howWeHelp?.bulletIconBlur ?? 2}px)` }}
                        unoptimized={isRemoteUrl(getUrl(howWeHelpBulletIcon, "/images/services/icon-dot.svg"))}
                      />
                    </div>
                  </div>
                  <p 
                    className="font-sans font-medium leading-[1.2] ml-[12px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {howWeHelp?.benefits?.[2]?.label || "Scale Seamlessly. Expand your team as your caseload grows."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Deliver Quality - Refactored with flexbox */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden">
              <div className="relative rounded-[12px] overflow-hidden aspect-[320/213] max-w-2xl mx-auto">
                <Image
                  src={getUrl(weDeliverQualityBackgroundImage, "/images/services/we-deliver-quality.jpg")}
                  alt={getAlt(weDeliverQualityBackgroundImage, "We deliver quality")}
                  fill
                  className="object-cover rounded-[12px]"
                />
                <div
                  className="absolute inset-0 mix-blend-hard-light"
                  style={{ backgroundColor: weDeliverQuality?.overlayColor || "rgba(30,58,138,0.6)" }}
                />
                
                {/* Content Overlay - Using flexbox */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[16px]">
                  <div className="w-[80px] h-[32px]">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox={weDeliverQuality?.mobileSvgViewBox || "0 0 106 42"}
                    >
                      <path
                        d={weDeliverQuality?.mobileTopSvgPath || svgPaths.p1d182d80}
                        fill="#F1F5FF"
                      />
                    </svg>
                  </div>
                  <p
                    className="font-sans font-medium text-[20px] text-[#f1f5ff] text-center leading-[1.1] tracking-[-0.4px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {weDeliverQuality?.title || "We deliver quality."}
                  </p>
                  <div className="w-[80px] h-[32px]">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox={weDeliverQuality?.mobileSvgViewBox || "0 0 106 42"}
                    >
                      <path
                        d={
                          weDeliverQuality?.mobileBottomSvgPath ||
                          "M0 34.8145C0 34.8145 27.9409 0.328038 47.5434 0.00417593C62.2703 -0.242293 73.8502 10.493 77.4164 13.2432C80.9825 15.9934 101.892 36.0728 105.452 41.3932C105.452 41.3932 85.1446 24.8508 74.9695 19.3996C58.1924 10.4098 49.5877 13.6578 30.7556 29.6969C21.6295 37.4624 17.9227 44.1626 0 34.8145Z"
                        }
                        fill="#F1F5FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Refactored with flexbox */}
            <div className="hidden lg:flex items-center justify-center h-[630px] w-full max-w-[1320px] mx-auto relative">
              {/* Background Image - absolute positioning for background is appropriate */}
              <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <Image
                    alt={getAlt(weDeliverQualityBackgroundImage, "We deliver quality")}
                    className="absolute h-[139.7%] left-0 max-w-none top-[-18.25%] w-full rounded-[12px]"
                    src={getUrl(weDeliverQualityBackgroundImage, "/images/services/we-deliver-quality.jpg")}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1320px"
                    unoptimized={isRemoteUrl(
                      getUrl(weDeliverQualityBackgroundImage, "/images/services/we-deliver-quality.jpg")
                    )}
                  />
                </div>
                <div
                  className="absolute inset-0 mix-blend-hard-light rounded-[12px]"
                  style={{ backgroundColor: weDeliverQuality?.overlayColor || "rgba(30,58,138,0.6)" }}
                />
              </div>
              
              {/* Content - Using flexbox for centering */}
              <div className="relative z-10 flex flex-col gap-[60px] items-center">
                <div className="h-[82.786px] w-[210.904px]">
                  <Image
                    alt={getAlt(weDeliverQualityDesktopTopIcon, "Arrow")}
                    className="block max-w-none size-full"
                    src={getUrl(weDeliverQualityDesktopTopIcon, "/images/services/arrow-vector-1.svg")}
                    width={211}
                    height={83}
                    unoptimized={isRemoteUrl(
                      getUrl(weDeliverQualityDesktopTopIcon, "/images/services/arrow-vector-1.svg")
                    )}
                  />
                </div>
                <p className="font-sans font-medium leading-[1.1] text-[#f1f5ff] text-[52px] text-center tracking-[-1.04px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {weDeliverQuality?.title || "We deliver quality."}
                </p>
                <div className="h-[82.786px] w-[210.904px]">
                  <Image
                    alt={getAlt(weDeliverQualityDesktopBottomIcon, "Arrow")}
                    className="block max-w-none size-full"
                    src={getUrl(weDeliverQualityDesktopBottomIcon, "/images/services/arrow-vector-2.svg")}
                    width={211}
                    height={83}
                    unoptimized={isRemoteUrl(
                      getUrl(weDeliverQualityDesktopBottomIcon, "/images/services/arrow-vector-2.svg")
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Already using flexbox, structure is good */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden">
              <p 
                className="font-sans font-medium text-[15px] uppercase mb-8"
                style={{
                  WebkitBackgroundClip: 'text !important',
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontVariationSettings: "'wdth' 100",
                } as ExtendedCSSProperties}
              >
                {howItWorks?.label || "How It Works"}
              </p>

              <div className="flex flex-col gap-[20px] items-start w-full max-w-full overflow-x-hidden">
                <div className="flex flex-col gap-[10px] items-start w-full max-w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {howItWorksSteps[0]?.title || "Discovery & Planning"}
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      howItWorksSteps[0]?.description ||
                        "We identify your workflow needs and define clear KPIs."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] items-start w-full max-w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {howItWorksSteps[1]?.title || "Onboarding & Training"}
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      howItWorksSteps[1]?.description ||
                        "Your dedicated Amedicase team gets trained on\nyour EMR tools and processes."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] items-start w-full max-w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {howItWorksSteps[2]?.title || "Execution & Support"}
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      howItWorksSteps[2]?.description ||
                        "We manage daily operations, reports, and QA checks."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] items-start w-full max-w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {howItWorksSteps[3]?.title || "Ongoing Optimization"}
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full max-w-full break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      howItWorksSteps[3]?.description ||
                        "Continuous performance tracking and scaling\nwhen needed."
                    )}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  className="block w-full max-w-full backdrop-blur-[3.777px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] shadow-[0px_1px_4px_0px_rgba(27,30,79,0.3)] px-5 py-[17px] font-sans font-semibold text-[18px] text-[#f1f5ff] leading-[110%] hover:opacity-90 transition-opacity"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                  href={howItWorksCtaUrl}
                  target={howItWorksCtaExternal ? "_blank" : undefined}
                  rel={howItWorksCtaExternal ? "noreferrer" : undefined}
                >
                  {howItWorks?.cta?.label || "Start Your Free Discovery Call"}
                </a>
              </div>
            </div>

            {/* Desktop Layout - Already using flexbox */}
            <div className="hidden lg:block">
              <p 
                className="font-sans font-medium text-[20px] uppercase mb-[60px]"
                style={{
                  WebkitBackgroundClip: 'text !important',
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontVariationSettings: "'wdth' 100",
                } as ExtendedCSSProperties}
              >
                {howItWorks?.label || "How It Works"}
              </p>

              {/* Content Layout - Using flexbox */}
              <div className="flex gap-[116px] items-center pl-[55px]">
                {/* Image */}
                <div className="relative shrink-0 size-[456px]">
                  <Image
                    alt={getAlt(howItWorksIllustration, "How It Works")}
                    className="block max-w-none size-full"
                    src={getUrl(howItWorksIllustration, "/images/services/how-it-works-vector.svg")}
                    fill
                    sizes="456px"
                    unoptimized={isRemoteUrl(
                      getUrl(howItWorksIllustration, "/images/services/how-it-works-vector.svg")
                    )}
                  />
                </div>
                
                {/* Steps List - Using flexbox */}
                <div className="flex flex-col gap-[40px] items-start w-[693px]">
                  <div className="flex flex-col gap-[40px] items-start w-full">
                    {/* Step 1: Discovery & Planning */}
                    <div className="flex flex-col gap-[10px] items-start w-full">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[0]?.title || "Discovery & Planning"}
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[0]?.description || "We identify your workflow needs and define clear KPIs."}
                      </p>
                    </div>
                    
                    {/* Step 2: Onboarding & Training */}
                    <div className="flex flex-col gap-[20px] items-start w-full">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[1]?.title || "Onboarding & Training"}
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[1]?.description || "Your dedicated Amedicase team gets trained on your EMR tools and processes."}
                      </p>
                    </div>
                    
                    {/* Step 3: Execution & Support */}
                    <div className="flex flex-col gap-[20px] items-start">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[2]?.title || "Execution & Support"}
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[2]?.description || "We manage daily operations, reports, and QA checks."}
                      </p>
                    </div>
                    
                    {/* Step 4: Ongoing Optimization */}
                    <div className="flex flex-col gap-[20px] items-start">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[3]?.title || "Ongoing Optimization"}
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {howItWorksSteps[3]?.description || "Continuous performance tracking and scaling when needed."}
                      </p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <a
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    href={howItWorksCtaUrl}
                    target={howItWorksCtaExternal ? "_blank" : undefined}
                    rel={howItWorksCtaExternal ? "noreferrer" : undefined}
                  >
                    <p className="font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {howItWorks?.cta?.label || "Start Your Free Discovery Call"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Amedicase - Refactored with flexbox */}
        <section className="relative py-8 lg:py-16 overflow-hidden">
          <div className="mx-auto px-5 lg:px-8 max-w-[1440px] overflow-hidden">
            {/* Mobile Layout - Using flexbox structure */}
            <div className="md:hidden flex flex-col gap-[43px] items-start">
              <p 
                className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[15px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] whitespace-nowrap"
                style={{
                  WebkitTextFillColor: 'transparent',
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                {whyChoose?.label || "Why Choose Amedicase"}
              </p>

              {/* Benefits List - Using flexbox instead of absolute positioning */}
              <div className="flex flex-col gap-[56px] items-center w-full">
                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[194px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(whyChooseBenefits[0]?.label || "HIPAA-Compliant &\nSecure Data Handling")}
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox={whyChoose?.mobileSeparatorViewBox || "0 0 280 2"}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        whyChoose?.mobileSeparatorSvgPath ||
                        "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z"
                      }
                      fill="#0b1737"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[211px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(whyChooseBenefits[1]?.label || "Up to 60% Cost Savings\nvs. U.S. Operations")}
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox={whyChoose?.mobileSeparatorViewBox || "0 0 280 2"}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        whyChoose?.mobileSeparatorSvgPath ||
                        "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z"
                      }
                      fill="#0b1737"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[237px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(whyChooseBenefits[2]?.label || "Healthcare-trained Teams\nwith U.S. Experience")}
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox={whyChoose?.mobileSeparatorViewBox || "0 0 280 2"}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        whyChoose?.mobileSeparatorSvgPath ||
                        "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z"
                      }
                      fill="#0b1737"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[177px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(whyChooseBenefits[3]?.label || "Dedicated Account\nManagers")}
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox={whyChoose?.mobileSeparatorViewBox || "0 0 280 2"}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        whyChoose?.mobileSeparatorSvgPath ||
                        "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z"
                      }
                      fill="#0b1737"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[241px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(whyChooseBenefits[4]?.label || "Real-time Communication\n& U.S. Time-Zone Overlap")}
                </p>
              </div>
            </div>

            {/* Desktop Layout - Refactored with flexbox */}
            <div className="hidden lg:block">
              <p 
                className="font-sans font-medium text-[20px] uppercase mb-[60px]"
                style={{
                  WebkitBackgroundClip: 'text !important',
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontVariationSettings: "'wdth' 100",
                } as ExtendedCSSProperties}
              >
                {whyChoose?.label || "Why Choose Amedicase"}
              </p>

              {/* Content Layout - Using flexbox instead of absolute */}
              <div className="flex items-center justify-between gap-[60px] w-full">
                {/* Left Side - Benefits List - Using flexbox structure */}
                <div className="relative w-[495px] rounded-[12px] overflow-clip flex-shrink-0" style={{ minHeight: '624px' }}>
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-[#eef3ff] rounded-[12px]">
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_1px_rgba(30,58,138,0.4)]" />
                  </div>
                  
                  {/* Content - Using flexbox instead of absolute positioning */}
                  <div className="relative flex flex-col gap-[20px] items-center px-[20px] py-[20px] w-full">
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(whyChooseBenefits[0]?.label || "HIPAA-Compliant &\nSecure Data Handling")}
                    </p>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <Image
                          alt={getAlt(whyChooseSeparatorImage, "Separator")}
                          className="block max-w-none size-full"
                          src={getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")}
                          fill
                          sizes="455px"
                          unoptimized={isRemoteUrl(
                            getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="mb-0">{whyChooseLine1[0] || "Up to 60% Cost Savings"}</p>
                      <p>{whyChooseLine1[1] || "vs. U.S. Operations"}</p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <Image
                          alt={getAlt(whyChooseSeparatorImage, "Separator")}
                          className="block max-w-none size-full"
                          src={getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")}
                          fill
                          sizes="455px"
                          unoptimized={isRemoteUrl(
                            getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")
                          )}
                        />
                      </div>
                    </div>
                    
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(whyChooseBenefits[3]?.label || "Dedicated Account\nManagers")}
                    </p>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <Image
                          alt={getAlt(whyChooseSeparatorImage, "Separator")}
                          className="block max-w-none size-full"
                          src={getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")}
                          fill
                          sizes="455px"
                          unoptimized={isRemoteUrl(
                            getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")
                          )}
                        />
                      </div>
                    </div>
                    
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(whyChooseBenefits[2]?.label || "Healthcare-trained Teams\nwith U.S. Experience")}
                    </p>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <Image
                          alt={getAlt(whyChooseSeparatorImage, "Separator")}
                          className="block max-w-none size-full"
                          src={getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")}
                          fill
                          sizes="455px"
                          unoptimized={isRemoteUrl(
                            getUrl(whyChooseSeparatorImage, "/images/services/separator-vector.svg")
                          )}
                        />
                      </div>
                    </div>
                    
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {renderWithBreaks(whyChooseBenefits[4]?.label || "Real-time Communication\n& U.S. Time-Zone Overlap")}
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Image - absolute positioning for image overlay is appropriate */}
                <div className="relative shrink-0 w-[765px]" style={{ minHeight: '624px' }}>
                  <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <Image
                        alt={getAlt(whyChooseRightImage, "Why Choose Amedicase")}
                        className="absolute h-full left-[-21.18%] max-w-none top-0 w-[147.36%]"
                        src={getUrl(
                          whyChooseRightImage,
                          "/images/services/office-documents-filing-cabinet.jpg"
                        )}
                        fill
                        sizes="765px"
                        unoptimized={isRemoteUrl(
                          getUrl(whyChooseRightImage, "/images/services/office-documents-filing-cabinet.jpg")
                        )}
                      />
                    </div>
                    <div className="absolute bg-[rgba(30,58,138,0.2)] inset-0 mix-blend-hard-light rounded-[12px]" />
                  </div>
                  {/* Subtract Overlay - absolute positioning for decorative overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-[-0.27%_-0.52%_-0.8%_-0.52%]">
                      <Image
                        alt={getAlt(whyChooseRightOverlay, "Subtract")}
                        className="block max-w-none size-full"
                        src={getUrl(whyChooseRightOverlay, "/images/services/subtract-overlay.svg")}
                        fill
                        sizes="765px"
                        unoptimized={isRemoteUrl(
                          getUrl(whyChooseRightOverlay, "/images/services/subtract-overlay.svg")
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection data={contactBlock} />
      </main>
      <Footer />
    </div>
  );
}
