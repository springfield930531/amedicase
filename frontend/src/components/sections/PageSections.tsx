import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ImageSections } from "@/components/sections/ImageSections";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { PageSection } from "@/lib/page-types";

type SectionData =
  | PageSection
  | {
      __component?: string;
      id?: number;
      [key: string]: unknown;
    };

type SectionComponent = (props: { data?: SectionData }) => JSX.Element;

const SECTION_COMPONENTS: Record<string, SectionComponent> = {
  "sections.hero-section": HeroSection as SectionComponent,
  "sections.service-grid": ServicesSection as SectionComponent,
  "sections.image-highlight": ImageSections as SectionComponent,
  "sections.why-choose": WhyChooseSection as SectionComponent,
  "sections.process-steps": HowItWorksSection as SectionComponent,
  "sections.team-showcase": TeamSection as SectionComponent,
  "sections.testimonials": TestimonialsSection as SectionComponent,
  "sections.contact-block": ContactSection as SectionComponent,
};

type PageSectionsProps = {
  sections: SectionData[];
};

export function PageSections({ sections }: PageSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        if (!section.__component) {
          return null;
        }
        const Component = SECTION_COMPONENTS[section.__component];
        if (!Component) {
          return null;
        }
        return <Component key={`${section.__component}-${index}`} data={section} />;
      })}
    </>
  );
}
