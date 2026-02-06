import { GradientTitle } from "@/components/shared/GradientTitle";
import type { BenefitCardsSection as BenefitCardsSectionData } from "@/lib/page-types";

type Props = {
  data?: BenefitCardsSectionData;
};

export function BenefitCardsSection({ data }: Props) {
  const cards = data?.cards || [];

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

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <GradientTitle label={data?.label || ""} className="mb-0" />
        <div className="flex flex-col gap-1 items-start justify-start mb-[40px] md:mb-[60px] w-full">
          <h2
            className="font-sans font-semibold leading-[1.1] text-[#000618] text-[clamp(28px,4vw,52px)] tracking-[-1.04px] w-full text-left whitespace-pre-wrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {renderWithBreaks(data?.title)}
          </h2>
        </div>

        {/* Benefits Grid - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] items-start w-full">
          {/* Card 1 */}
          <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[130px]">
            <h3
              className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px] mb-5"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {cards[0]?.label}
            </h3>
            <p
              className="font-sans font-normal leading-[1.2] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(cards[0]?.description)}
            </p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[210px]">
            <h3
              className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px] mb-5"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {cards[1]?.label}
            </h3>
            <p
              className="font-sans font-normal leading-[1.2] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(cards[1]?.description)}
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[210px]">
            <h3
              className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px] mb-5"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {cards[2]?.label}
            </h3>
            <p
              className="font-sans font-normal leading-[1.2] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {renderWithBreaks(cards[2]?.description)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
