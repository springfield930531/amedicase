import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import type { SectionRendererPageContext } from "@/components/sections/registry";
import type { StoryBlockSection as StoryBlockSectionData } from "@/lib/page-types";

type Props = {
  data?: StoryBlockSectionData;
  page?: SectionRendererPageContext;
};

export function StoryBlockSection({ data, page }: Props) {
  const label = data?.label;
  const title = data?.title;
  const body = data?.body || "";

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

  if (page?.kind === "legal") {
    const paragraphs = body ? body.split("\n\n").map((paragraph) => paragraph.split("\n")) : [];
    return (
      <section className="relative pb-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <div className="backdrop-blur-[5px] bg-white/70 border border-[rgba(158,162,203,0.4)] rounded-[12px] p-6 md:p-10 text-[#000618]">
            {paragraphs.length ? (
              paragraphs.map((lines, index) => (
                <p key={`legal-paragraph-${index}`} className="mb-6 last:mb-0 text-[16px] md:text-[18px] leading-[1.7]">
                  {lines.map((line, lineIndex) => (
                    <span key={`legal-line-${index}-${lineIndex}`}>
                      {line}
                      {lineIndex < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              ))
            ) : (
              <p className="text-[16px] md:text-[18px] leading-[1.7]">Content coming soon.</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (page?.kind === "process") {
    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <TitleBlock
            label={label || ""}
            title={title || ""}
            subtitle={body}
            titleClassName="!text-[#1e3a8a] !text-[52px] !font-semibold !leading-[120%] !tracking-[-1.04px]"
            className="[&_p]:!text-[#000618] [&_p]:!text-[33px] [&_p]:!leading-[120%] [&_p]:!tracking-[-0.33px] gap-1"
          />
        </div>
      </section>
    );
  }

  if (page?.kind === "contact") {
    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <TitleBlock label={label || ""} title={title || ""} subtitle={body} />
        </div>
      </section>
    );
  }

  if (page?.kind === "about") {
    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <div className="flex flex-col gap-2 items-start mb-[40px] md:mb-[10px] w-full">
            <GradientTitle label={label || "Our Story"} className="mb-0" />
            <h2
              className="font-sans leading-[120%] w-full whitespace-pre-wrap"
              style={{
                fontVariationSettings: "'wdth' 100",
                color: "#D01127",
                fontSize: "52px",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.52px",
              }}
            >
              {title}
            </h2>
            <p
              className="font-sans leading-[120%] w-full"
              style={{
                fontVariationSettings: "'wdth' 100",
                color: "#000618",
                fontSize: "33px",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.33px",
              }}
            >
              {body}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (page?.kind === "service-style-b") {
    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <GradientTitle label={label || "Our Story"} className="mb-0" />
          <div className="flex flex-col gap-1 items-start mb-[40px] md:mb-[60px] w-full">
            <h2
              className="font-sans leading-[120%] w-full whitespace-pre-wrap"
              style={{
                fontVariationSettings: "'wdth' 100",
                color: "#000618",
                fontSize: "52px",
                fontWeight: 600,
                lineHeight: "120%",
                letterSpacing: "-1.04px",
              }}
            >
              {renderWithBreaks(title)}
            </h2>
            <p
              className="font-sans w-full"
              style={{
                fontVariationSettings: "'wdth' 100",
                color: "#000618",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.33px",
              }}
            >
              {renderWithBreaks(body)}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (page?.kind === "service-style-c") {
    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <div className="flex flex-col gap-1 items-start mb-[40px] md:mb-[60px] w-full">
            <GradientTitle label={label || "Our Story"} className="mb-0" />
            <h2
              className="font-sans leading-[120%] w-full whitespace-pre-wrap -mt-[30px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                color: "#D01127",
                fontSize: "52px",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.52px",
              }}
            >
              {renderWithBreaks(title)}
            </h2>
            <p
              className="font-sans w-full mt-4"
              style={{
                fontVariationSettings: "'wdth' 100",
                color: "#000618",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-0.33px",
              }}
            >
              {renderWithBreaks(body)}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Generic fallback.
  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <TitleBlock label={label || ""} title={title || ""} subtitle={body} />
      </div>
    </section>
  );
}
