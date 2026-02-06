import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/lib/strapi-home";
import { isExternalHref, normalizeHref } from "@/lib/href";
import type { AboutHeroSection as AboutHeroSectionData } from "@/lib/page-types";

type Props = {
  data?: AboutHeroSectionData;
};

export function AboutHeroSection({ data }: Props) {
  const badgeLabel = data?.badgeLabel;
  const title = data?.title;
  const titleDesktop = data?.titleDesktop;
  const subtitle = data?.subtitle;
  const subtitleDesktop = data?.subtitleDesktop;
  const backgroundImage = getMediaUrl(data?.backgroundImage) || "/images/services/hero-services.jpg";
  const primaryCta = data?.primaryCta;
  const secondaryText = data?.secondaryText;

  const heroCtaUrl = normalizeHref(primaryCta?.url) || "/contact";
  const heroCtaExternal =
    typeof primaryCta?.isExternal === "boolean" ? primaryCta.isExternal : isExternalHref(heroCtaUrl);
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  return (
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
                {badgeLabel}
              </p>
            </div>
          </div>

          {/* Hero Image Background */}
          <div className="relative h-[562px] w-full overflow-hidden rounded-xl -mt-[29px]">
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
                    src={backgroundImage}
                    alt="Healthcare professionals working"
                    fill
                    sizes="100vw"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    unoptimized={isRemoteUrl(backgroundImage)}
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
                  {title}
                </h1>
                <p
                  className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {subtitle}
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
                  {primaryCta?.label}
                </Link>
                <p
                  className="font-sans font-normal leading-[1.4] text-[#d01127] text-[clamp(16px,2.5vw,20px)] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                  }}
                >
                  {secondaryText}
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
              src={backgroundImage}
              alt="Healthcare professionals working"
              fill
              sizes="100vw"
              className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
              unoptimized={isRemoteUrl(backgroundImage)}
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
                {badgeLabel}
              </p>
            </div>
          </div>

          {/* Content Card */}
          <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
            <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
              <h1 className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {titleDesktop || title}
              </h1>
              <p className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {subtitleDesktop || subtitle}
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
                  {primaryCta?.label}
                </p>
              </Link>
              <p
                className="font-sans font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                {secondaryText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

