import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ImageSections } from "@/components/sections/ImageSections";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { PageSection } from "@/lib/page-types";

const SECTION_COMPONENTS: Record<string, (props: { data?: any }) => JSX.Element> = {
  "sections.hero-section": HeroSection,
  "sections.service-grid": ServicesSection,
  "sections.image-highlight": ImageSections,
  "sections.why-choose": WhyChooseSection,
  "sections.process-steps": HowItWorksSection,
  "sections.team-showcase": TeamSection,
  "sections.testimonials": TestimonialsSection,
  "sections.contact-block": ContactSection,
};

type PageSectionsProps = {
  sections: PageSection[];
};

export function PageSections({ sections }: PageSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const Component = SECTION_COMPONENTS[section.__component];
        if (!Component) {
          return null;
        }
        return <Component key={`${section.__component}-${index}`} data={section} />;
      })}
    </>
  );
}
