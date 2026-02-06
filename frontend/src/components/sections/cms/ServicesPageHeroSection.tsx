import Image from "next/image";
import { getMediaUrl } from "@/lib/strapi-home";
import { isExternalHref, normalizeHref } from "@/lib/href";
import type { ServicesHeroSection as ServicesHeroSectionData, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: ServicesHeroSectionData;
};

export function ServicesPageHeroSection({ data }: Props) {
  const fallback: ServicesHeroSectionData = {
    __component: "sections.services-page-hero",
    badgeLabel: "SeRvices",
    title: "End-to-End Outsourcing Solutions for Home Health Agencies",
    titleDesktop: "End-to-End Outsourcing Solutions\nfor Home Health Agencies",
    subtitle:
      "From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.",
    subtitleDesktop:
      "From patient intake to billing and operations — Amedicase helps\nU.S. home health providers streamline workflows, cut costs, and focus on patient care.",
    primaryCta: { label: "Book a Free Consultation", url: "#", isExternal: false },
    secondaryCta: { label: "Download Service Overview", url: "#", isExternal: false },
  };

  const hero = data || fallback;

  const getUrl = (media: StrapiMedia | null | undefined, fallbackUrl?: string) =>
    getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: StrapiMedia | null | undefined, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  const primaryCta = hero?.primaryCta;
  const secondaryCta = hero?.secondaryCta;
  const primaryUrl = normalizeHref(primaryCta?.url) || "#";
  const secondaryUrl = normalizeHref(secondaryCta?.url) || "#";
  const primaryExternal =
    typeof primaryCta?.isExternal === "boolean" ? primaryCta.isExternal : isExternalHref(primaryUrl);
  const secondaryExternal =
    typeof secondaryCta?.isExternal === "boolean" ? secondaryCta.isExternal : isExternalHref(secondaryUrl);

  return (
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
                {hero?.badgeLabel || fallback.badgeLabel}
              </p>
            </div>
          </div>

          {/* Hero Image Background */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute"
                style={{
                  height: "113.88%",
                  left: "-63.06%",
                  top: "-13.88%",
                  width: "266.63%",
                  maxWidth: "none",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={getUrl(hero.backgroundImage, "/images/services/hero-services.jpg")}
                    alt={getAlt(hero.backgroundImage, "Healthcare professionals working")}
                    fill
                    sizes="100vw"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    unoptimized={isRemoteUrl(getUrl(hero.backgroundImage, "/images/services/hero-services.jpg"))}
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
                  {hero?.title || fallback.title}
                </h1>
                <p
                  className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {hero?.subtitle || fallback.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-[20px] items-start">
                <a
                  className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                  href={primaryUrl}
                  target={primaryExternal ? "_blank" : undefined}
                  rel={primaryExternal ? "noreferrer" : undefined}
                >
                  {primaryCta?.label || fallback.primaryCta?.label || "Book a Free Consultation"}
                </a>
                <a
                  className="font-sans font-normal text-[#d01127] text-[clamp(12px,1.8vw,13px)] underline tracking-[-0.26px] text-right w-full mb-[5px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                  }}
                  href={secondaryUrl}
                  target={secondaryExternal ? "_blank" : undefined}
                  rel={secondaryExternal ? "noreferrer" : undefined}
                >
                  {secondaryCta?.label || fallback.secondaryCta?.label || "Download Service Overview"}
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
              src={getUrl(hero.backgroundImage, "/images/services/hero-services.jpg")}
              alt={getAlt(hero.backgroundImage, "Healthcare professionals working")}
              fill
              sizes="100vw"
              className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
              unoptimized={isRemoteUrl(getUrl(hero.backgroundImage, "/images/services/hero-services.jpg"))}
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
            {hero?.badgeLabel || fallback.badgeLabel}
          </p>

          {/* Content Card - Using flexbox instead of absolute */}
          <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
            <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
              <h1 className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {hero?.titleDesktop || hero?.title || fallback.titleDesktop}
              </h1>
              <p className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {hero?.subtitleDesktop || hero?.subtitle || fallback.subtitleDesktop}
              </p>
            </div>

            <div className="flex flex-col gap-[20px] items-start w-[419px]">
              <a
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                style={{ fontVariationSettings: "'wdth' 100" }}
                href={primaryUrl}
                target={primaryExternal ? "_blank" : undefined}
                rel={primaryExternal ? "noreferrer" : undefined}
              >
                <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {primaryCta?.label || fallback.primaryCta?.label || "Book a Free Consultation"}
                </p>
              </a>
              <a
                className="font-sans font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
                href={secondaryUrl}
                target={secondaryExternal ? "_blank" : undefined}
                rel={secondaryExternal ? "noreferrer" : undefined}
              >
                {secondaryCta?.label || fallback.secondaryCta?.label || "Download Service Overview"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

