import type { CSSProperties } from "react";
import Image from "next/image";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  ServicesWhyChooseSection as ServicesWhyChooseSectionData,
  StrapiMedia,
} from "@/lib/page-types";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

type Props = {
  data?: ServicesWhyChooseSectionData;
};

export function ServicesWhyChooseSection({ data }: Props) {
  const fallback: ServicesWhyChooseSectionData = {
    __component: "sections.services-page-why-choose",
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
  };

  const label = data?.label || fallback.label;
  const benefits = data?.benefits?.length ? data.benefits : (fallback.benefits || []);
  const separatorImage = data?.separatorImage;
  const rightImage = data?.rightImage;
  const rightOverlay = data?.rightOverlay;
  const mobileSeparatorSvgPath = data?.mobileSeparatorSvgPath || fallback.mobileSeparatorSvgPath || "";
  const mobileSeparatorViewBox = data?.mobileSeparatorViewBox || fallback.mobileSeparatorViewBox || "0 0 280 2";

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

  const whyChooseLine1 = splitLines(benefits[1]?.label || "Up to 60% Cost Savings\nvs. U.S. Operations");

  const getUrl = (media: StrapiMedia | null | undefined, fallbackUrl?: string) =>
    getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: StrapiMedia | null | undefined, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  const separatorUrl = getUrl(separatorImage, "/images/services/separator-vector.svg");
  const rightImageUrl = getUrl(rightImage, "/images/services/office-documents-filing-cabinet.jpg");
  const rightOverlayUrl = getUrl(rightOverlay, "/images/services/subtract-overlay.svg");

  return (
    <section className="relative py-8 lg:py-16 overflow-hidden">
      <div className="mx-auto px-5 lg:px-8 max-w-[1440px] overflow-hidden">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-[43px] items-start">
          <p
            className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[15px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] whitespace-nowrap"
            style={{
              WebkitTextFillColor: "transparent",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {label}
          </p>

          <div className="flex flex-col gap-[56px] items-center w-full">
            <p
              className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[194px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(benefits[0]?.label || "HIPAA-Compliant &\nSecure Data Handling")}
            </p>
            <div className="w-[280px] h-[2px]">
              <svg className="w-full h-full" fill="none" viewBox={mobileSeparatorViewBox} preserveAspectRatio="none">
                <path d={mobileSeparatorSvgPath} fill="#0b1737" opacity="0.2" />
              </svg>
            </div>

            <p
              className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[211px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(benefits[1]?.label || "Up to 60% Cost Savings\nvs. U.S. Operations")}
            </p>
            <div className="w-[280px] h-[2px]">
              <svg className="w-full h-full" fill="none" viewBox={mobileSeparatorViewBox} preserveAspectRatio="none">
                <path d={mobileSeparatorSvgPath} fill="#0b1737" opacity="0.2" />
              </svg>
            </div>

            <p
              className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[237px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(benefits[2]?.label || "Healthcare-trained Teams\nwith U.S. Experience")}
            </p>
            <div className="w-[280px] h-[2px]">
              <svg className="w-full h-full" fill="none" viewBox={mobileSeparatorViewBox} preserveAspectRatio="none">
                <path d={mobileSeparatorSvgPath} fill="#0b1737" opacity="0.2" />
              </svg>
            </div>

            <p
              className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[177px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(benefits[3]?.label || "Dedicated Account\nManagers")}
            </p>
            <div className="w-[280px] h-[2px]">
              <svg className="w-full h-full" fill="none" viewBox={mobileSeparatorViewBox} preserveAspectRatio="none">
                <path d={mobileSeparatorSvgPath} fill="#0b1737" opacity="0.2" />
              </svg>
            </div>

            <p
              className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[241px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(benefits[4]?.label || "Real-time Communication\n& U.S. Time-Zone Overlap")}
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <p
            className="font-sans font-medium text-[20px] uppercase mb-[60px]"
            style={
              {
                WebkitBackgroundClip: "text !important",
                WebkitTextFillColor: "transparent",
                background:
                  "linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontVariationSettings: "'wdth' 100",
              } as ExtendedCSSProperties
            }
          >
            {label}
          </p>

          <div className="flex items-center justify-between gap-[60px] w-full">
            <div className="relative w-[495px] rounded-[12px] overflow-clip flex-shrink-0" style={{ minHeight: "624px" }}>
              <div className="absolute inset-0 bg-[#eef3ff] rounded-[12px]">
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_1px_rgba(30,58,138,0.4)]" />
              </div>

              <div className="relative flex flex-col gap-[20px] items-center px-[20px] py-[20px] w-full">
                <p
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(benefits[0]?.label || "HIPAA-Compliant &\nSecure Data Handling")}
                </p>
                <div className="h-0 relative shrink-0 w-[455px]">
                  <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                    <Image
                      alt={getAlt(separatorImage, "Separator")}
                      className="block max-w-none size-full"
                      src={separatorUrl}
                      fill
                      sizes="455px"
                      unoptimized={isRemoteUrl(separatorUrl)}
                    />
                  </div>
                </div>

                <div
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="mb-0">{whyChooseLine1[0] || "Up to 60% Cost Savings"}</p>
                  <p>{whyChooseLine1[1] || "vs. U.S. Operations"}</p>
                </div>
                <div className="h-0 relative shrink-0 w-[455px]">
                  <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                    <Image
                      alt={getAlt(separatorImage, "Separator")}
                      className="block max-w-none size-full"
                      src={separatorUrl}
                      fill
                      sizes="455px"
                      unoptimized={isRemoteUrl(separatorUrl)}
                    />
                  </div>
                </div>

                <p
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(benefits[3]?.label || "Dedicated Account\nManagers")}
                </p>
                <div className="h-0 relative shrink-0 w-[455px]">
                  <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                    <Image
                      alt={getAlt(separatorImage, "Separator")}
                      className="block max-w-none size-full"
                      src={separatorUrl}
                      fill
                      sizes="455px"
                      unoptimized={isRemoteUrl(separatorUrl)}
                    />
                  </div>
                </div>

                <p
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(benefits[2]?.label || "Healthcare-trained Teams\nwith U.S. Experience")}
                </p>
                <div className="h-0 relative shrink-0 w-[455px]">
                  <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                    <Image
                      alt={getAlt(separatorImage, "Separator")}
                      className="block max-w-none size-full"
                      src={separatorUrl}
                      fill
                      sizes="455px"
                      unoptimized={isRemoteUrl(separatorUrl)}
                    />
                  </div>
                </div>

                <p
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(benefits[4]?.label || "Real-time Communication\n& U.S. Time-Zone Overlap")}
                </p>
              </div>
            </div>

            <div className="relative shrink-0 w-[765px]" style={{ minHeight: "624px" }}>
              <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <Image
                    alt={getAlt(rightImage, "Why Choose Amedicase")}
                    className="absolute h-full left-[-21.18%] max-w-none top-0 w-[147.36%]"
                    src={rightImageUrl}
                    fill
                    sizes="765px"
                    unoptimized={isRemoteUrl(rightImageUrl)}
                  />
                </div>
                <div className="absolute bg-[rgba(30,58,138,0.2)] inset-0 mix-blend-hard-light rounded-[12px]" />
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-[-0.27%_-0.52%_-0.8%_-0.52%]">
                  <Image
                    alt={getAlt(rightOverlay, "Subtract")}
                    className="block max-w-none size-full"
                    src={rightOverlayUrl}
                    fill
                    sizes="765px"
                    unoptimized={isRemoteUrl(rightOverlayUrl)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

