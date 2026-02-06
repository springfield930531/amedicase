import Image from "next/image";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { normalizeHref } from "@/lib/href";
import { getMediaUrl } from "@/lib/strapi-home";
import type { IconStepsSection as IconStepsSectionData, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: IconStepsSectionData;
};

export function IconStepsSection({ data }: Props) {
  const steps = data?.steps || [];
  const cta = data?.cta;
  const icon = data?.icon;

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
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <GradientTitle label={data?.label || ""} className="mb-0" />

        {/* Process Steps - Flex wrap layout with icons */}
        <div className="flex flex-col gap-[72px] items-center w-full mt-[60px]">
          <div className="flex flex-wrap gap-[72px] items-start w-full">
            {/* Step 1 */}
            <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
              <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                <Image
                  src={getUrl(icon, "/images/home-health/how-it-works-icon.svg")}
                  alt={getAlt(icon, "")}
                  width={118}
                  height={118}
                  className="w-full h-full object-contain"
                  unoptimized={isRemoteUrl(getUrl(icon, "/images/home-health/how-it-works-icon.svg"))}
                />
              </div>
              <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                <h3
                  className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {steps[0]?.title}
                </h3>
                <p
                  className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(steps[0]?.description)}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
              <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                <Image
                  src={getUrl(icon, "/images/home-health/how-it-works-icon.svg")}
                  alt={getAlt(icon, "")}
                  width={118}
                  height={118}
                  className="w-full h-full object-contain"
                  unoptimized={isRemoteUrl(getUrl(icon, "/images/home-health/how-it-works-icon.svg"))}
                />
              </div>
              <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                <h3
                  className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {steps[1]?.title}
                </h3>
                <p
                  className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(steps[1]?.description)}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
              <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                <Image
                  src={getUrl(icon, "/images/home-health/how-it-works-icon.svg")}
                  alt={getAlt(icon, "")}
                  width={118}
                  height={118}
                  className="w-full h-full object-contain"
                  unoptimized={isRemoteUrl(getUrl(icon, "/images/home-health/how-it-works-icon.svg"))}
                />
              </div>
              <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                <h3
                  className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {steps[2]?.title}
                </h3>
                <p
                  className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(steps[2]?.description)}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
              <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                <Image
                  src={getUrl(icon, "/images/home-health/how-it-works-icon.svg")}
                  alt={getAlt(icon, "")}
                  width={118}
                  height={118}
                  className="w-full h-full object-contain"
                  unoptimized={isRemoteUrl(getUrl(icon, "/images/home-health/how-it-works-icon.svg"))}
                />
              </div>
              <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                <h3
                  className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {steps[3]?.title}
                </h3>
                <p
                  className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {renderWithBreaks(steps[3]?.description)}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={normalizeHref(cta?.url) || "/#contact"}
            className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid flex from-[rgba(45,78,174,0.64)] items-center justify-center px-[40px] py-[20px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(87,18,23,0.3)] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity"
          >
            <p
              className="font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {cta?.label}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
