import Image from "next/image";
import { GradientTitle } from "@/components/shared/GradientTitle";
import type { SectionRendererPageContext } from "@/components/sections/registry";
import { normalizeHref } from "@/lib/href";
import { getMediaUrl } from "@/lib/strapi-home";
import type { ProcessStagesSection as ProcessStagesSectionData, ProcessStage, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: ProcessStagesSectionData;
  page?: SectionRendererPageContext;
};

export function ProcessStagesSection({ data, page }: Props) {
  const stages = data?.stages || [];

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

  if (page?.kind === "process") {
    const renderStageDescription = (description: string) => {
      const [textPart, goalPart] = description.split("Goal:");
      const lines = textPart.trim().split("\n");
      return (
        <>
          {lines.map((line, index) => (
            <span key={`stage-line-${index}`}>
              {line}
              {index < lines.length - 1 ? <br /> : null}
            </span>
          ))}
          {goalPart ? (
            <>
              <br />
              <br />
              <span className="font-medium">Goal:</span> {goalPart.trim()}
            </>
          ) : null}
        </>
      );
    };

    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <GradientTitle label={data?.label || ""} className="mb-0" />

          {/* Process Steps - Grid 2x2 layout */}
          <div className="relative mt-[60px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start w-full">
              {stages.map((stage: ProcessStage, index) => (
                <div
                  key={`${stage.stageLabel || "stage"}-${index}`}
                  className="relative backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] p-[40px] rounded-[12px] to-[rgba(80,86,104,0.003)]"
                >
                  {/* Stage Badge */}
                  <div
                    className="absolute backdrop-blur-[7px] backdrop-filter border-[0.5px] border-[rgba(205,95,108,0.8)] border-solid top-0 left-0 -translate-y-1/2 py-[10px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(162,21,38,0.3)] -ml-[20px]"
                    style={{
                      background:
                        "linear-gradient(96deg, rgb(213 161 183) 4.35%, rgb(214 206 209) 98.92%)",
                      paddingLeft: "20px",
                      paddingRight: "19px",
                    }}
                  >
                    <p
                      className="font-sans font-normal leading-[1.1] text-[#d01127] text-[13px] tracking-[-0.26px] px-[5px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {stage.stageLabel}
                    </p>
                  </div>

                  <div className="flex flex-col gap-[20px] items-start text-[#000618] mt-[8px]">
                    <h3
                      className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {renderStageDescription(stage.description || "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const stageItems = stages;
  const processCta = data?.cta;

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <GradientTitle label={data?.label || ""} className="mb-0" />

        {/* Process Steps - Vertical Stack */}
        <div className="flex flex-col gap-[20px] items-center w-full max-w-[1002px] mx-auto mt-[40px] md:mt-[60px]">
          {/* Stage 1 */}
          <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
            <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
              <div
                className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="text-[#d01127]">{stageItems[0]?.stageLabel}</p>
                <p className="text-[#0b1737]">{stageItems[0]?.title}</p>
              </div>
              <p
                className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(stageItems[0]?.description)}
              </p>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="flex h-[20px] items-center justify-center w-[44px]">
            <div className="flex-none rotate-90">
              <Image
                src={getUrl(data?.arrowImage, "/images/creative-development/arrow-down.svg")}
                alt={getAlt(data?.arrowImage, "")}
                width={20}
                height={44}
                className="h-[44px] w-[20px]"
                unoptimized={isRemoteUrl(getUrl(data?.arrowImage, "/images/creative-development/arrow-down.svg"))}
              />
            </div>
          </div>

          {/* Stage 2 */}
          <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
            <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
              <div
                className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="text-[#d01127]">{stageItems[1]?.stageLabel}</p>
                <p className="text-[#0b1737]">{stageItems[1]?.title}</p>
              </div>
              <p
                className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(stageItems[1]?.description)}
              </p>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="flex h-[20px] items-center justify-center w-[44px]">
            <div className="flex-none rotate-90">
              <Image
                src={getUrl(data?.arrowImage, "/images/creative-development/arrow-down.svg")}
                alt={getAlt(data?.arrowImage, "")}
                width={20}
                height={44}
                className="h-[44px] w-[20px]"
                unoptimized={isRemoteUrl(getUrl(data?.arrowImage, "/images/creative-development/arrow-down.svg"))}
              />
            </div>
          </div>

          {/* Stage 3 */}
          <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
            <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
              <div
                className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="text-[#d01127]">{stageItems[2]?.stageLabel}</p>
                <p className="text-[#0b1737]">{stageItems[2]?.title}</p>
              </div>
              <p
                className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(stageItems[2]?.description)}
              </p>
            </div>
          </div>

          {/* Arrow 3 */}
          <div className="flex h-[20px] items-center justify-center w-[44px]">
            <div className="flex-none rotate-90">
              <Image
                src={getUrl(data?.arrowImage, "/images/creative-development/arrow-down.svg")}
                alt={getAlt(data?.arrowImage, "")}
                width={20}
                height={44}
                className="h-[44px] w-[20px]"
                unoptimized={isRemoteUrl(getUrl(data?.arrowImage, "/images/creative-development/arrow-down.svg"))}
              />
            </div>
          </div>

          {/* Stage 4 */}
          <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
            <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
              <div
                className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="text-[#d01127]">{stageItems[3]?.stageLabel}</p>
                <p className="text-[#0b1737]">{stageItems[3]?.title}</p>
              </div>
              <p
                className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(stageItems[3]?.description)}
              </p>
            </div>
          </div>

          {/* Arrow 4 - Final */}
          <div className="flex h-[20px] items-center justify-center w-[44px]">
            <div className="flex-none rotate-90">
              <Image
                src={getUrl(data?.arrowFinalImage, "/images/creative-development/arrow-down-final.svg")}
                alt={getAlt(data?.arrowFinalImage, "")}
                width={20}
                height={44}
                className="h-[44px] w-[20px]"
                unoptimized={isRemoteUrl(getUrl(data?.arrowFinalImage, "/images/creative-development/arrow-down-final.svg"))}
              />
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={normalizeHref(processCta?.url) || "/#contact"}
            className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid flex from-[rgba(205,27,48,0.24)] items-center justify-center px-[60px] py-[20px] relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(87,18,23,0.3)] to-[rgba(215,45,64,0.16)] hover:opacity-90 transition-opacity"
          >
            <p
              className="font-sans font-semibold leading-[1.1] text-[#d4283c] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {processCta?.label}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
