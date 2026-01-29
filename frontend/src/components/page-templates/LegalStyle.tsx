import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { TitleBlock } from "@/components/shared/TitleBlock";
import type { PageEntry, PageHeroSection, StoryBlockSection } from "@/lib/page-types";

type LegalStyleProps = {
  page: PageEntry | null;
};

export function LegalStyle({ page }: LegalStyleProps) {
  const sections = page?.sections || [];
  const hero = sections.find(
    (section): section is PageHeroSection => section.__component === "sections.page-hero"
  );
  const story = sections.find(
    (section): section is StoryBlockSection => section.__component === "sections.story-block"
  );

  const title = hero?.title || page?.title || "Legal";
  const subtitle = hero?.subtitle;
  const label = hero?.badgeLabel || "Legal";
  const body = story?.body || "";

  const paragraphs = body
    ? body.split("\n\n").map((paragraph) => paragraph.split("\n"))
    : [];

  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      <main className="relative z-10 overflow-x-hidden">
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <TitleBlock
              label={label}
              title={title}
              subtitle={subtitle}
              titleClassName="!text-[#1e3a8a] !text-[52px] !font-semibold !leading-[120%] !tracking-[-1.04px]"
              className="[&_p]:!text-[#000618] [&_p]:!text-[20px] [&_p]:!leading-[140%] [&_p]:!tracking-[-0.2px] gap-4"
            />
          </div>
        </section>

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
      </main>
      <Footer />
    </div>
  );
}
