import type { FaqListSection as FaqListSectionData } from "@/lib/page-types";

type Props = {
  data?: FaqListSectionData;
};

export function FaqListSection({ data }: Props) {
  const items = data?.items || [];
  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <div className="flex flex-col gap-[60px] items-center w-full">
          <p
            className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[clamp(16px,2vw,20px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a]"
            style={{
              WebkitTextFillColor: "transparent",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {data?.label}
          </p>
          <div className="flex flex-col gap-[40px] items-start w-full max-w-[582px]">
            {items.map((item, index) => (
              <div
                key={`faq-${index}`}
                className="backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] rounded-[12px] to-[rgba(80,86,104,0.003)] p-[40px] w-full"
              >
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
  );
}

