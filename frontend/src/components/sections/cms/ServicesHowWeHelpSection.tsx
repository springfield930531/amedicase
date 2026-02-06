import type { CSSProperties } from "react";
import Image from "next/image";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  ServicesHowWeHelpSection as ServicesHowWeHelpSectionData,
  StrapiMedia,
} from "@/lib/page-types";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

type Props = {
  data?: ServicesHowWeHelpSectionData;
};

export function ServicesHowWeHelpSection({ data }: Props) {
  const fallback: ServicesHowWeHelpSectionData = {
    __component: "sections.services-page-how-we-help",
    label: "How We Help Home Health Agencies",
    title: "Designed to Help You Operate Efficiently and Scale with Confidence.",
    benefits: [
      { label: "Reduce Costs up to 60% without compromising HIPAA compliance." },
      { label: "Focus on Patient Care. Let us handle admin load." },
      { label: "Scale Seamlessly. Expand your team as your caseload grows." },
    ],
    bulletIconBlur: 2,
  };

  const label = data?.label || fallback.label;
  const title = data?.title || fallback.title;
  const benefits =
    data?.benefits?.length ? data.benefits : (fallback.benefits || []);
  const bulletIcon = data?.bulletIcon;
  const bulletIconBlur = data?.bulletIconBlur ?? fallback.bulletIconBlur ?? 2;

  const getUrl = (
    media: StrapiMedia | string | null | undefined,
    fallbackUrl?: string
  ) => {
    if (typeof media === "string") return media;
    return getMediaUrl(media) || fallbackUrl || "";
  };
  const getAlt = (
    media: StrapiMedia | string | null | undefined,
    fallbackAlt?: string
  ) =>
    typeof media === "string"
      ? fallbackAlt || ""
      : media?.alternativeText ||
        media?.data?.attributes?.alternativeText ||
        fallbackAlt ||
        "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px]">
        <p
          className="font-sans font-medium text-[15px] lg:text-[20px] uppercase mb-8 lg:mb-[60px]"
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
        <h2
          className="font-sans font-semibold text-[33px] lg:text-[52px] text-[#000618] leading-[1.1] tracking-[-0.66px] lg:tracking-[-1.04px] mb-8 lg:mb-[48px] lg:w-[952px] whitespace-pre-wrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-5 lg:gap-7 items-start">
          {benefits.map((benefit, index) => (
            <div key={`how-we-help-benefit-${index}`} className="w-full max-w-[320px] lg:max-w-none">
              <div className="flex items-stretch gap-4 lg:gap-6">
                <div className="relative flex-shrink-0 w-[30px] self-stretch min-h-[60px] backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)]">
                  <div className="absolute left-1/2 top-[18px] w-[10px] h-[10px] -translate-x-1/2 z-10">
                    <div className="absolute inset-[-40%]">
                      <Image
                        alt={getAlt(bulletIcon, "")}
                        className="block max-w-none size-full"
                        src={getUrl(bulletIcon, "/images/services/icon-dot.svg")}
                        width={10}
                        height={10}
                        style={{ filter: `blur(${bulletIconBlur}px)` }}
                        unoptimized={isRemoteUrl(getUrl(bulletIcon, "/images/services/icon-dot.svg"))}
                      />
                    </div>
                  </div>
                </div>
                <p
                  className="font-sans font-medium leading-[1.2] pt-3 lg:pt-[18px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    textRendering: "optimizeLegibility",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {benefit?.label || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

