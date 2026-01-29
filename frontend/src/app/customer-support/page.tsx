import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { ContactSection } from "@/components/sections/ContactSection";
import { getPageBySlug } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  CardGridSection,
  ContactBlockSection,
  ImageOverlaySection,
  PageEntry,
  PageHeroSection,
  ProcessStagesSection,
  StoryBlockSection,
} from "@/lib/page-types";

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getPageBySlug("customer-support")) as PageEntry | null;
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

export default async function CustomerSupportPage() {
  const page = (await getPageBySlug("customer-support")) as PageEntry | null;
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
  const cardGrid = sections.find(
    (section): section is CardGridSection => section.__component === "sections.card-grid"
  );
  const processStages = sections.find(
    (section): section is ProcessStagesSection => section.__component === "sections.process-stages"
  );
  const contactBlock = sections.find(
    (section): section is ContactBlockSection => section.__component === "sections.contact-block"
  );

  const fallback = {
    hero: {
      badgeLabel: "Customer Support",
      title: "Customer Support",
      subtitle:
        "Access trained, reliable and patient-focused support specialists who manage communication, scheduling and follow-ups for U.S. Home Health and Hospice agencies.",
      subtitleDesktop:
        "Access trained, reliable and patient-focused support specialists who manage communication, scheduling and follow-ups for U.S. Home Health\nand Hospice agencies.",
      cta: { label: "Book a Discovery Call", url: "/#contact" },
    },
    story: {
      label: "Our Story",
      title: "Outsourcing Customer Support & Patient Intake Services",
      body:
        "Home Health agencies rely heavily on timely communication, accurate scheduling and consistent follow-up to deliver quality care.\n\nOutsourcing these tasks ensures your nurses, coordinators and clinicians stay focused\non patient needs, not administrative load.\n\nAmedicase provides trained intake and support specialists who understand the workflow, tone and urgency of U.S. healthcare communication.\n\nFrom eligibility verification to pre-visit reminders, our team keeps your patient operations organized, responsive and compliant.",
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
    cardGrid: {
      label: "What We Can Offer",
      title:
        "Reliable communication support designed to improve patient coordination, reduce administrative workload and enhance overall patient satisfaction.",
      dotIcon: "/images/creative-development/dot-icon.svg",
      cards: [
        {
          title: "Intake Coordinators",
          description: "Handling new patient calls, referral intake\nand data gathering for fast onboarding.",
          backgroundImage: "/images/creative-development/card-bg-1.svg",
        },
        {
          title: "Scheduling & Rescheduling Support",
          description: "Coordinating appointments, managing calendars, notifying clinicians and updating EMR.",
          backgroundImage: "/images/creative-development/card-bg-2.svg",
        },
        {
          title: "Eligibility & Insurance Verification",
          description: "Checking patient eligibility, confirming coverage details and preparing data for billing.",
          backgroundImage: "/images/creative-development/card-bg-3.svg",
        },
        {
          title: "Follow-Ups & Pre-Visit Reminders",
          description: "Reducing missed visits through timely calls, reminders and patient check-ins.",
          backgroundImage: "/images/creative-development/card-bg-4.svg",
        },
      ],
    },
    processStages: {
      label: "The Amedicase Process",
      arrowImage: "/images/creative-development/arrow-down.svg",
      arrowFinalImage: "/images/creative-development/arrow-down-final.svg",
      stages: [
        {
          stageLabel: "Stage 1",
          title: "Understanding Your Workflow",
          description:
            "We evaluate your patient communication flow, EMR usage, referral process and scheduling challenges.\nWe define the tasks you want to delegate and build a tailored support plan.",
        },
        {
          stageLabel: "Stage 2",
          title: "Assigning Trained Intake Specialists",
          description:
            "We handpick specialists with experience in patient communication, referral intake and Home Health terminology.\nAll team members are HIPAA-aligned and trained in professional U.S. communication standards.",
        },
        {
          stageLabel: "Stage 3",
          title: "Seamless Integration Into Your Agency",
          description:
            "Your support team integrates with your EMR, communication tools and daily processes.\nWe work as an extension of your in-house staff, ensuring consistent communication.",
        },
        {
          stageLabel: "Stage 4",
          title: "Reporting, QA & Continuous Improvement",
          description:
            "We provide performance dashboards, call logs, activity summaries and QA reviews.\nAs your patient volume grows, we scale the team to match demand.",
        },
      ],
      cta: { label: "Contact Us", url: "/#contact" },
    },
  };

  const heroData = hero || fallback.hero;
  const storyData = story || fallback.story;
  const overlayFirst = overlays[0] || fallback.overlays[0];
  const overlaySecond = overlays[1] || fallback.overlays[1];
  const cardGridData = cardGrid || fallback.cardGrid;
  const processData = processStages || fallback.processStages;
  const heroCta = heroData?.cta || fallback.hero.cta;
  const gridCards = cardGridData?.cards?.length ? cardGridData.cards : fallback.cardGrid.cards;
  const stageItems = processData?.stages?.length ? processData.stages : fallback.processStages.stages;
  const processCta = processData?.cta || fallback.processStages.cta;

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
  const getUrl = (media: any, fallbackUrl?: string) => getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: any, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
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
                      {heroData?.badgeLabel || fallback.hero.badgeLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image Background - Full width */}
              <div className="relative h-[562px] w-full -mt-[29px] overflow-hidden">
                <img
                  src={getUrl(heroData?.backgroundImage, "/images/services/hero-services.jpg")}
                  alt={getAlt(heroData?.backgroundImage, "Customer support professionals")}
                  className="w-full h-full object-cover object-center"
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
                    {renderWithBreaks(heroData?.title || fallback.hero.title)}
                  </h1>
                  <p 
                    className="font-sans font-normal text-[clamp(11px,1.5vw,12px)] leading-[1.4] tracking-[-0.26px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {renderWithBreaks(heroData?.subtitle || fallback.hero.subtitle)}
                  </p>
                </div>
                <div className="flex flex-col gap-[20px] items-center">
                  <a 
                    href={heroCta?.url || "/#contact"}
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
                <img
                  src={getUrl(heroData?.backgroundImage, "/images/services/hero-services.jpg")}
                  alt={getAlt(heroData?.backgroundImage, "Customer support professionals")}
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
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
                    {heroData?.badgeLabelDesktop || heroData?.badgeLabel || fallback.hero.badgeLabel}
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
                    {renderWithBreaks(heroData?.titleDesktop || heroData?.title || fallback.hero.title)}
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {renderWithBreaks(
                      heroData?.subtitleDesktop || heroData?.subtitle || fallback.hero.subtitle
                    )}
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <a 
                    href={heroCta?.url || "/#contact"}
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
            <div className="flex flex-col gap-1 items-start mb-[40px] md:mb-[60px] w-full">
              <GradientTitle label={storyData?.label || fallback.story.label} className="mb-0" />
              <h2 
                className="font-sans leading-[120%] w-full whitespace-pre-wrap -mt-[30px]"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#D01127',
                  fontSize: '52px',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.52px',
                }}
              >
                {renderWithBreaks(storyData?.title || fallback.story.title)}
              </h2>
              <p 
                className="font-sans w-full mt-4"
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
              <img
                src={getUrl(overlayFirst?.backgroundImage, "/images/creative-development/office-documents-background.jpg")}
                alt={getAlt(overlayFirst?.backgroundImage, "Office documents and files")}
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: 'center center'
                }}
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
                  <img
                    src={getUrl(overlayFirst?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")}
                    alt={getAlt(overlayFirst?.overlayImage, "")}
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.1)',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Can Offer Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <TitleBlock
              label={cardGridData?.label || fallback.cardGrid.label}
              title={cardGridData?.title || fallback.cardGrid.title}
            />
            
            {/* Services Grid - Responsive 2x2 on desktop, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[60px_120px] items-start w-full max-w-[1068px] mx-auto">
                  {/* Card 1: Intake Coordinators */}
                  <div className="relative w-full min-h-[117px]">
                    <div className="absolute inset-0">
                      <img
                        src={getUrl(gridCards[0]?.backgroundImage, "/images/creative-development/card-bg-1.svg")}
                        alt={getAlt(gridCards[0]?.backgroundImage, "")}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src={getUrl(cardGridData?.dotIcon, "/images/creative-development/dot-icon.svg")}
                          alt={getAlt(cardGridData?.dotIcon, "")}
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {gridCards[0]?.title || "Intake Coordinators"}
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {renderWithBreaks(
                          gridCards[0]?.description || fallback.cardGrid.cards[0].description
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Scheduling & Rescheduling Support */}
                  <div className="relative w-full min-h-[117px]">
                    <div className="absolute inset-0">
                      <img
                        src={getUrl(gridCards[1]?.backgroundImage, "/images/creative-development/card-bg-2.svg")}
                        alt={getAlt(gridCards[1]?.backgroundImage, "")}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src={getUrl(cardGridData?.dotIcon, "/images/creative-development/dot-icon.svg")}
                          alt={getAlt(cardGridData?.dotIcon, "")}
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {gridCards[1]?.title || "Scheduling & Rescheduling Support"}
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {renderWithBreaks(
                          gridCards[1]?.description || fallback.cardGrid.cards[1].description
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Eligibility & Insurance Verification */}
                  <div className="relative w-full min-h-[117px]">
                    <div className="absolute inset-0">
                      <img
                        src={getUrl(gridCards[2]?.backgroundImage, "/images/creative-development/card-bg-3.svg")}
                        alt={getAlt(gridCards[2]?.backgroundImage, "")}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src={getUrl(cardGridData?.dotIcon, "/images/creative-development/dot-icon.svg")}
                          alt={getAlt(cardGridData?.dotIcon, "")}
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {gridCards[2]?.title || "Eligibility & Insurance Verification"}
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {renderWithBreaks(
                          gridCards[2]?.description || fallback.cardGrid.cards[2].description
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Follow-Ups & Pre-Visit Reminders */}
                  <div className="relative w-full min-h-[117px]">
                    <div className="absolute inset-0">
                      <img
                        src={getUrl(gridCards[3]?.backgroundImage, "/images/creative-development/card-bg-4.svg")}
                        alt={getAlt(gridCards[3]?.backgroundImage, "")}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src={getUrl(cardGridData?.dotIcon, "/images/creative-development/dot-icon.svg")}
                          alt={getAlt(cardGridData?.dotIcon, "")}
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {gridCards[3]?.title || "Follow-Ups & Pre-Visit Reminders"}
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {renderWithBreaks(
                          gridCards[3]?.description || fallback.cardGrid.cards[3].description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </section>

        {/* Image Section with Overlay - Duplicate */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              {/* Background Image */}
              <img
                src={getUrl(overlaySecond?.backgroundImage, "/images/creative-development/office-documents-background.jpg")}
                alt={getAlt(overlaySecond?.backgroundImage, "Office documents and files")}
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: 'center center'
                }}
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
                  <img
                    src={getUrl(overlaySecond?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")}
                    alt={getAlt(overlaySecond?.overlayImage, "")}
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.1)',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Amedicase Process Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label={processData?.label || fallback.processStages.label} className="mb-0" />
            
            {/* Process Steps - Vertical Stack */}
            <div className="flex flex-col gap-[20px] items-center w-full max-w-[1002px] mx-auto mt-[40px] md:mt-[60px]">
              {/* Stage 1 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      {stageItems[0]?.stageLabel || "Stage 1"}
                    </p>
                    <p className="text-[#0b1737]">
                      {stageItems[0]?.title || "Understanding Your Workflow"}
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      stageItems[0]?.description || fallback.processStages.stages[0].description
                    )}
                  </p>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src={getUrl(processData?.arrowImage, "/images/creative-development/arrow-down.svg")} 
                    alt={getAlt(processData?.arrowImage, "")} 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Stage 2 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      {stageItems[1]?.stageLabel || "Stage 2"}
                    </p>
                    <p className="text-[#0b1737]">
                      {stageItems[1]?.title || "Assigning Trained Intake Specialists"}
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      stageItems[1]?.description || fallback.processStages.stages[1].description
                    )}
                  </p>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src={getUrl(processData?.arrowImage, "/images/creative-development/arrow-down.svg")} 
                    alt={getAlt(processData?.arrowImage, "")} 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Stage 3 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      {stageItems[2]?.stageLabel || "Stage 3"}
                    </p>
                    <p className="text-[#0b1737]">
                      {stageItems[2]?.title || "Seamless Integration Into Your Agency"}
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      stageItems[2]?.description || fallback.processStages.stages[2].description
                    )}
                  </p>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src={getUrl(processData?.arrowImage, "/images/creative-development/arrow-down.svg")} 
                    alt={getAlt(processData?.arrowImage, "")} 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Stage 4 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      {stageItems[3]?.stageLabel || "Stage 4"}
                    </p>
                    <p className="text-[#0b1737]">
                      {stageItems[3]?.title || "Reporting, QA & Continuous Improvement"}
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {renderWithBreaks(
                      stageItems[3]?.description || fallback.processStages.stages[3].description
                    )}
                  </p>
                </div>
              </div>

              {/* Arrow 4 - Final */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src={getUrl(processData?.arrowFinalImage, "/images/creative-development/arrow-down-final.svg")} 
                    alt={getAlt(processData?.arrowFinalImage, "")} 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Contact Us Button */}
              <a
                href={processCta?.url || "/#contact"}
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid flex from-[rgba(205,27,48,0.24)] items-center justify-center px-[60px] py-[20px] relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(87,18,23,0.3)] to-[rgba(215,45,64,0.16)] hover:opacity-90 transition-opacity"
              >
                <p className="font-sans font-semibold leading-[1.1] text-[#d4283c] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {processCta?.label || "Contact Us"}
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
