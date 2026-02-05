import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { ContentUnavailable } from "@/components/shared/ContentUnavailable";
import Image from "next/image";
import { getPageBySlug } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  ContactInfoFormSection,
  FaqListSection,
  ImageOverlaySection,
  PageEntry,
  PageHeroSection,
  StoryBlockSection,
} from "@/lib/page-types";

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getPageBySlug("contact")) as PageEntry | null;
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

export default async function ContactPage() {
  const page = (await getPageBySlug("contact")) as PageEntry | null;
  if (!page) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[strapi] Contact page content not available");
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
  const contactInfo = sections.find(
    (section): section is ContactInfoFormSection => section.__component === "sections.contact-info-form"
  );
  const faq = sections.find(
    (section): section is FaqListSection => section.__component === "sections.faq-list"
  );

  const fallback = {
    hero: {
      badgeLabel: "Contact Us",
      title:
        "Get in touch with our team for consultations, service inquiries or onboarding questions.",
      titleDesktop:
        "Get in touch with our team for consultations,\nservice inquiries or onboarding questions.",
      backgroundImage: "/images/services/hero-services.jpg",
      cta: { label: "Book a Discovery Call", url: "/#contact" },
    },
    story: {
      label: "Our Story",
      title: "We're Here to Support Your Agency",
      body:
        "Whether you want to explore outsourcing options, request a service breakdown or discuss your agency's current workflow challenges, our team is ready to help.\n\nWe respond quickly, maintain full transparency and aim to understand your needs clearly before recommending solutions.",
    },
    overlays: [
      {
        backgroundImage: "/images/creative-development/office-documents-background.jpg",
        overlayColor: "rgba(208,17,39,0.2)",
        overlayImage: "/images/contact/subtract-overlay.svg",
      },
      {
        backgroundImage: "/images/creative-development/office-documents-background.jpg",
        overlayColor: "rgba(30,58,138,0.2)",
        overlayImage: "/images/contact/subtract-overlay.svg",
      },
    ],
    contactInfo: {
      label: "Contact Information",
      infoCards: [
        { title: "Main Office", body: "Amedicase Operations\nChișinău, Moldova" },
        { title: "Email", body: "support@amedicase.com" },
        { title: "Phone", body: "+373 (xxx) xxx xxx" },
        { title: "Business Hours", body: "Monday — Friday: 9:00–18:00 (EET)\nU.S. overlap included." },
      ],
      formTitle: "Send Us a Message",
      fields: [
        { name: "firstName", type: "text", placeholder: "First Name" },
        { name: "lastName", type: "text", placeholder: "Last Name" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "phone", type: "tel", placeholder: "Phone Number" },
        { name: "company", type: "text", placeholder: "Company Name" },
        { name: "message", type: "textarea", placeholder: "Message / Service Inquiry", rows: 4 },
      ],
      submitLabel: "Submit",
    },
    faq: {
      label: "FAQ",
      items: [
        {
          question: "How fast do you respond?",
          answer: "Usually within a few hours during business days.",
        },
        {
          question: "Do you offer a free consultation?",
          answer: "Yes, all discovery calls and workflow assessments are free.",
        },
        {
          question: "Can we start with a small team?",
          answer: "Yes, you can start with one specialist and scale as needed.",
        },
      ],
    },
  };

  const heroData = {
    badgeLabel: hero?.badgeLabel || fallback.hero.badgeLabel,
    title: hero?.title || fallback.hero.title,
    titleDesktop: hero?.titleDesktop || fallback.hero.titleDesktop,
    backgroundImage: getMediaUrl(hero?.backgroundImage) || fallback.hero.backgroundImage,
    cta: hero?.cta || fallback.hero.cta,
  };

  const storyData = {
    label: story?.label || fallback.story.label,
    title: story?.title || fallback.story.title,
    body: story?.body || fallback.story.body,
  };

  const overlayData = overlays.length
    ? overlays.map((overlay, index) => ({
        backgroundImage: getMediaUrl(overlay.backgroundImage) || fallback.overlays[index]?.backgroundImage,
        overlayColor: overlay.overlayColor || fallback.overlays[index]?.overlayColor,
        overlayImage: getMediaUrl(overlay.overlayImage) || fallback.overlays[index]?.overlayImage,
      }))
    : fallback.overlays;
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  const infoData = {
    label: contactInfo?.label || fallback.contactInfo.label,
    infoCards: contactInfo?.infoCards?.length ? contactInfo.infoCards : fallback.contactInfo.infoCards,
    formTitle: contactInfo?.formTitle || fallback.contactInfo.formTitle,
    fields: contactInfo?.fields?.length ? contactInfo.fields : fallback.contactInfo.fields,
    submitLabel: contactInfo?.submitLabel || fallback.contactInfo.submitLabel,
  };

  const faqData = {
    label: faq?.label || fallback.faq.label,
    items: faq?.items?.length ? faq.items : fallback.faq.items,
  };

  const getField = (name: string) => infoData.fields.find((field) => field.name === name);
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - Based on ServicesPageHeroSection */}
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative h-[562px] w-full overflow-hidden">
              {/* Badge Container */}
              <div className="absolute top-0 left-5 z-20">
                <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] relative flex items-center">
                  <p 
                    className="relative left-[20px] -mt-[10px] font-sans font-medium text-[#d01127] text-[13px] uppercase"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.badgeLabel}
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
              <div className="absolute inset-x-5 top-[39px] h-[503px]">
                <div className="backdrop-blur-[10px] bg-gradient-to-b from-[rgba(183,198,243,0.12)] to-[rgba(84,100,145,0.04)] rounded-[12px] border border-[rgba(158,162,203,0.8)] h-full flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-[60px] mt-[97px]">
                    <h1 
                      className="font-sans font-semibold text-[clamp(28px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {heroData.title}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start">
                    <a 
                      href={heroData.cta?.url || "/#contact"}
                      className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {heroData.cta?.label}
                    </a>
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
            <div className="relative mx-auto max-w-[1440px] h-full flex items-start pt-[15px]">
              {/* Badge */}
              <div className="absolute top-[-17px] left-[60px] z-20">
                <div className="bg-[#f1f5ff] h-[70px] rounded-bl-[18px] rounded-br-[18px] w-auto relative flex items-center px-[20px]">
                  <p 
                    className="font-sans font-medium text-[#d01127] text-[33px] uppercase whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.badgeLabel}
                  </p>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[147px] min-h-[510px]">
                <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                  <h1 
                    className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {heroData.titleDesktop || heroData.title}
                  </h1>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <a 
                    href={heroData.cta?.url || "/#contact"}
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {heroData.cta?.label}
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
            <TitleBlock 
              label={storyData.label}
              title={storyData.title}
              subtitle={storyData.body}
            />
          </div>
        </section>

        {/* Image Section with Overlay */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                {/* Background Image */}
                <Image
                  src={overlayData[0]?.backgroundImage}
                  alt="Office documents and files"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1320px"
                  className="w-full h-full object-cover rounded-[8px]"
                  style={{
                    objectPosition: 'center center'
                  }}
                  unoptimized={isRemoteUrl(overlayData[0]?.backgroundImage)}
                />
                
                {/* Red Overlay */}
                <div className="relative -mt-full rounded-[8px] pointer-events-none" style={{ marginTop: '-100%' }}>
                  <div className="w-full h-full mix-blend-hard-light rounded-[8px]" style={{ minHeight: '375px', background: overlayData[0]?.overlayColor }} />
                </div>
                
                {/* Subtract SVG Overlay - positioned to leave a few pixels visible at bottom */}
                <div className="relative -mt-full rounded-[8px] pointer-events-none mb-[4px]" style={{ marginTop: '-100%', marginBottom: '4px' }}>
                  <Image
                    src={overlayData[0]?.overlayImage}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 1320px"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center top',
                      minHeight: 'calc(100% - 4px)'
                    }}
                    unoptimized={isRemoteUrl(overlayData[0]?.overlayImage)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information and Form Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[60px] items-start">
              {/* Contact Information */}
              <div className="flex flex-col gap-[72px] items-start w-full lg:w-[394px]">
                <p 
                  className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[clamp(13px,1.8vw,20px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a]"
                  style={{ 
                    WebkitTextFillColor: "transparent", 
                    fontVariationSettings: "'wdth' 100" 
                  }}
                >
                  {infoData.label}
                </p>
                <div className="flex flex-col gap-[28px] items-start w-full">
                  {infoData.infoCards.map((card, index) => (
                    <div key={`contact-info-${index}`} className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid from-[rgba(204,211,234,0.25)] rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] p-[40px] w-full">
                      <div className="flex flex-col gap-[20px] items-start">
                        <p 
                          className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {card.title}
                        </p>
                        <p 
                          className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] text-[#000618] tracking-[-0.4px] whitespace-pre-line"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {card.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex flex-col gap-[44px] items-start w-full lg:w-[640px]">
                <h2 
                  className="font-sans font-semibold leading-[1.1] text-[clamp(28px,4vw,52px)] text-[#000618] tracking-[-1.04px] w-full whitespace-pre-wrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {infoData.formTitle}
                </h2>
                <form className="flex flex-col gap-[20px] w-full">
                  {/* First Name and Last Name Row */}
                  <div className="flex flex-col md:flex-row gap-[20px] w-full">
                    <input
                      type="text"
                      placeholder={getField("firstName")?.placeholder || "First Name"}
                      className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                    <input
                      type="text"
                      placeholder={getField("lastName")?.placeholder || "Last Name"}
                      className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder={getField("email")?.placeholder || "Email"}
                    className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />

                  {/* Phone Number */}
                  <input
                    type="tel"
                    placeholder={getField("phone")?.placeholder || "Phone Number"}
                    className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />

                  {/* Company Name */}
                  <input
                    type="text"
                    placeholder={getField("company")?.placeholder || "Company Name"}
                    className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />

                  {/* Message */}
                  <textarea
                    placeholder={getField("message")?.placeholder || "Message / Service Inquiry"}
                    rows={getField("message")?.rows || 4}
                    className="border border-[#d4283c] border-solid min-h-[160px] rounded-[12px] px-[19px] py-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full resize-none"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="backdrop-blur-[7.555px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(209,51,69,0.8)] border-solid from-[rgba(205,27,48,0.3)] h-[104px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(167,32,41,0.5)] to-[rgba(215,45,64,0.2)] w-full hover:opacity-90 transition-opacity"
                  >
                    <p 
                      className="font-sans font-semibold leading-[1.1] text-[clamp(24px,3vw,33px)] text-[#d94052] text-center tracking-[-0.66px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {infoData.submitLabel}
                    </p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section with Overlay */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                {/* Background Image */}
                <Image
                  src={overlayData[1]?.backgroundImage}
                  alt="Office documents and files"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1320px"
                  className="w-full h-full object-cover rounded-[8px]"
                  style={{
                    objectPosition: 'center center'
                  }}
                  unoptimized={isRemoteUrl(overlayData[1]?.backgroundImage)}
                />
                
                {/* Blue Overlay */}
                <div className="relative -mt-full rounded-[8px] pointer-events-none" style={{ marginTop: '-100%' }}>
                  <div className="w-full h-full mix-blend-hard-light rounded-[8px]" style={{ minHeight: '375px', background: overlayData[1]?.overlayColor }} />
                </div>
                
                {/* Subtract SVG Overlay - positioned to leave a few pixels visible at bottom */}
                <div className="relative -mt-full rounded-[8px] pointer-events-none mb-[4px]" style={{ marginTop: '-100%', marginBottom: '4px' }}>
                  <Image
                    src={overlayData[1]?.overlayImage}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 1320px"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center top',
                      minHeight: 'calc(100% - 4px)'
                    }}
                    unoptimized={isRemoteUrl(overlayData[1]?.overlayImage)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="flex flex-col gap-[60px] items-center w-full">
              <p 
                className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[clamp(16px,2vw,20px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a]"
                style={{ 
                  WebkitTextFillColor: "transparent", 
                  fontVariationSettings: "'wdth' 100" 
                }}
              >
              {faqData.label}
              </p>
              <div className="flex flex-col gap-[40px] items-start w-full max-w-[582px]">
                {faqData.items.map((item, index) => (
                  <div key={`faq-${index}`} className="backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] rounded-[12px] to-[rgba(80,86,104,0.003)] p-[40px] w-full">
                    <div className="flex flex-col gap-[20px] items-start text-[#000618]">
                      <p 
                        className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {item.question}
                      </p>
                      <p 
                        className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] tracking-[-0.4px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
