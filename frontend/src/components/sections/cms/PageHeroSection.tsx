import Image from "next/image";
import { TitleBlock } from "@/components/shared/TitleBlock";
import type { SectionRendererPageContext } from "@/components/sections/registry";
import { normalizeHref } from "@/lib/href";
import { getMediaUrl } from "@/lib/strapi-home";
import type { PageHeroSection as PageHeroSectionData, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: PageHeroSectionData;
  page?: SectionRendererPageContext;
};

export function PageHeroSection({ data, page }: Props) {
  // Legal pages intentionally use a simplified header block (no hero background image).
  if (page?.kind === "legal") {
    const title = data?.title || page?.title || "Legal";
    const subtitle = data?.subtitle;
    const label = data?.badgeLabel || "Legal";
    return (
      <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <TitleBlock
            label={label}
            title={title}
            subtitle={subtitle}
            titleClassName="!text-[#1e3a8a] !text-[52px] !font-semibold !leading-[120%] !tracking-[-1.04px]"
            className="[&_p]:!text-[#000618] [&_p]:!text-[20px] [&_p]:!leading-[140%] [&_p]:!tracking-[-0.2px] gap-4"
          />
        </div>
      </section>
    );
  }

  const heroBackgroundImage = data?.backgroundImage;
  const badgeLabelDesktop = data?.badgeLabelDesktop || data?.badgeLabel;
  const titleDesktop = data?.titleDesktop || data?.title;
  const subtitleDesktop = data?.subtitleDesktop || data?.subtitle;

  const ctaMobile = data?.cta;
  const ctaDesktop = data?.ctaDesktop || data?.cta;
  const ctaHrefMobile = normalizeHref(ctaMobile?.url) || "/#contact";
  const ctaHrefDesktop = normalizeHref(ctaDesktop?.url) || "/#contact";

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
    if (typeof media === "string") return media;
    return getMediaUrl(media) || fallbackUrl || "";
  };
  const getAlt = (media: StrapiMedia | string | null | undefined, fallbackAlt?: string) =>
    typeof media === "string"
      ? fallbackAlt || ""
      : media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  return (
    <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative w-full flex flex-col overflow-hidden">
          {/* Badge - At top of hero section */}
          <div className="relative z-20 px-5 pt-0">
            <div className="flex" style={{ justifyContent: "flex-start" }}>
              <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-auto flex items-center justify-center px-2">
                <p
                  className="font-sans font-medium text-[#d01127] text-[13px] uppercase whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {data?.badgeLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image Background - Full width */}
          <div className="relative h-[562px] w-full -mt-[29px] overflow-hidden">
            <Image
              src={getUrl(heroBackgroundImage, "/images/services/hero-services.jpg")}
              alt={getAlt(heroBackgroundImage, "Healthcare professionals")}
              fill
              sizes="100vw"
              className="w-full h-full object-cover object-center"
              unoptimized={isRemoteUrl(getUrl(heroBackgroundImage, "/images/services/hero-services.jpg"))}
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
                {renderWithBreaks(data?.title)}
              </h1>
              <p
                className="font-sans font-normal text-[clamp(11px,1.5vw,12px)] leading-[1.4] tracking-[-0.26px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(data?.subtitle)}
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-center">
              <a
                href={ctaHrefMobile}
                className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[16px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(191,192,215,0.3)] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p
                  className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[18px] text-center tracking-[-0.36px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {ctaMobile?.label}
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
              src={getUrl(heroBackgroundImage, "/images/services/hero-services.jpg")}
              alt={getAlt(heroBackgroundImage, "Healthcare professionals")}
              fill
              sizes="100vw"
              className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
              unoptimized={isRemoteUrl(getUrl(heroBackgroundImage, "/images/services/hero-services.jpg"))}
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
                {badgeLabelDesktop}
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
                {renderWithBreaks(titleDesktop)}
              </h1>
              <p
                className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(subtitleDesktop)}
              </p>
            </div>

            <div className="flex flex-col gap-[20px] items-start w-[419px]">
              <a
                href={ctaHrefDesktop}
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p
                  className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {ctaDesktop?.label || ctaMobile?.label}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

