import type { CSSProperties } from "react";
import Image from "next/image";
import { isExternalHref, normalizeHref } from "@/lib/href";
import { getMediaUrl } from "@/lib/strapi-home";
import type {
  ServicesHowItWorksSection as ServicesHowItWorksSectionData,
  StrapiMedia,
} from "@/lib/page-types";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

type Props = {
  data?: ServicesHowItWorksSectionData;
};

export function ServicesHowItWorksSection({ data }: Props) {
  const fallback: ServicesHowItWorksSectionData = {
    __component: "sections.services-page-how-it-works",
    label: "How It Works",
    steps: [
      { title: "Discovery & Planning", description: "We identify your workflow needs and define clear KPIs." },
      { title: "Onboarding & Training", description: "Your dedicated Amedicase team gets trained on your EMR tools and processes." },
      { title: "Execution & Support", description: "We manage daily operations, reports, and QA checks." },
      { title: "Ongoing Optimization", description: "Continuous performance tracking and scaling when needed." },
    ],
    cta: { label: "Start Your Free Discovery Call", url: "#", isExternal: false },
  };

  const label = data?.label || fallback.label;
  const steps = data?.steps?.length ? data.steps : (fallback.steps || []);
  const cta = data?.cta || fallback.cta;

  const ctaUrl = normalizeHref(cta?.url) || "#";
  const ctaExternal =
    typeof cta?.isExternal === "boolean" ? cta.isExternal : isExternalHref(ctaUrl);

  const illustration = data?.illustration;

  const getUrl = (media: StrapiMedia | null | undefined, fallbackUrl?: string) =>
    getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: StrapiMedia | null | undefined, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

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

  const illustrationUrl = getUrl(illustration, "/images/services/how-it-works-vector.svg");

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <p
            className="font-sans font-medium text-[15px] uppercase mb-8"
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

          <div className="flex flex-col gap-[20px] items-start w-full max-w-full overflow-x-hidden">
            {steps.slice(0, 4).map((step, index) => (
              <div key={`how-it-works-mobile-${index}`} className="flex flex-col gap-[10px] items-start w-full max-w-full">
                <p
                  className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full max-w-full break-words"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {step?.title}
                </p>
                <p
                  className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full max-w-full break-words"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(step?.description)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              className="block w-full max-w-full backdrop-blur-[3.777px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] shadow-[0px_1px_4px_0px_rgba(27,30,79,0.3)] px-5 py-[17px] font-sans font-semibold text-[18px] text-[#f1f5ff] leading-[110%] hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'wdth' 100" }}
              href={ctaUrl}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
            >
              {cta?.label || fallback.cta?.label}
            </a>
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

          <div className="flex gap-[116px] items-center pl-[55px]">
            <div className="relative shrink-0 size-[456px]">
              <Image
                alt={getAlt(illustration, "How It Works")}
                className="block max-w-none size-full"
                src={illustrationUrl}
                fill
                sizes="456px"
                unoptimized={isRemoteUrl(illustrationUrl)}
              />
            </div>

            <div className="flex flex-col gap-[40px] items-start w-[693px]">
              <div className="flex flex-col gap-[40px] items-start w-full">
                {steps.slice(0, 4).map((step, index) => (
                  <div
                    key={`how-it-works-desktop-${index}`}
                    className={`flex flex-col items-start w-full ${index === 0 ? "gap-[10px]" : "gap-[20px]"}`}
                  >
                    <p
                      className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {step?.title}
                    </p>
                    <p
                      className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {step?.description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                style={{ fontVariationSettings: "'wdth' 100" }}
                href={ctaUrl}
                target={ctaExternal ? "_blank" : undefined}
                rel={ctaExternal ? "noreferrer" : undefined}
              >
                <p
                  className="font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {cta?.label || fallback.cta?.label}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

