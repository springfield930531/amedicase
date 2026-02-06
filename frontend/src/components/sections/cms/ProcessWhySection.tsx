import type { ReactNode } from "react";
import { TitleBlock } from "@/components/shared/TitleBlock";
import type { ProcessWhySection as ProcessWhySectionData } from "@/lib/page-types";

type Props = {
  data?: ProcessWhySectionData;
};

export function ProcessWhySection({ data }: Props) {
  const body = data?.body || "";
  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <TitleBlock
          label={data?.label || ""}
          title={data?.title || ""}
          className="-mt-[8px]"
        />

        {/* Content Box */}
        <div className="relative backdrop-blur-[5px] backdrop-filter bg-[#e7ecf6] p-[40px] rounded-[12px]">
          <div
            className="bg-clip-text bg-gradient-to-r font-sans font-normal from-[#d01127] from-[10.333%] leading-[1.2] text-[clamp(20px,2.5vw,33px)] to-[#1e3a8a] tracking-[-0.66px] w-full whitespace-pre-wrap"
            style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
          >
            {body
              .split("\n\n")
              .map((paragraph, index, array) => (
                <p key={`process-why-${index}`} className={index < array.length - 1 ? "mb-0" : undefined}>
                  {paragraph}
                </p>
              ))
              .reduce<ReactNode[]>((acc, node, index) => {
                if (index > 0) {
                  acc.push(
                    <p key={`process-why-gap-${index}`} className="mb-0">
                      &nbsp;
                    </p>
                  );
                }
                acc.push(node);
                return acc;
              }, [])}
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_5px_0px_rgba(27,29,54,0.4)] rounded-[12px]" />
        </div>
      </div>
    </section>
  );
}
