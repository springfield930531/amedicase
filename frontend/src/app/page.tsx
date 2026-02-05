import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ImageSections } from "@/components/sections/ImageSections";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CoordinatingSection } from "@/components/sections/CoordinatingSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { fetchHomePage } from "@/lib/strapi-home";
type HomeSection = {
  __component?: string;
  id?: number;
  [key: string]: unknown;
};

type HeroSectionData = Parameters<typeof HeroSection>[0]["data"];
type ServicesSectionData = Parameters<typeof ServicesSection>[0]["data"];
type ImageSectionsData = Parameters<typeof ImageSections>[0]["data"];
type WhyChooseSectionData = Parameters<typeof WhyChooseSection>[0]["data"];
type HowItWorksSectionData = Parameters<typeof HowItWorksSection>[0]["data"];
type TeamSectionData = Parameters<typeof TeamSection>[0]["data"];
type ContactSectionData = Parameters<typeof ContactSection>[0]["data"];
type CoordinatingSectionData = Parameters<typeof CoordinatingSection>[0]["data"];

export default async function Home() {
  const homePage = await fetchHomePage();
  const sections = (homePage?.contentSections || []) as HomeSection[];
  const findSection = <T,>(component: string) =>
    sections.find((section) => section.__component === component) as T | undefined;

  const hero = findSection<HeroSectionData>("sections.hero-section");
  const services = findSection<ServicesSectionData>("sections.service-grid");
  const imageHighlight = findSection<ImageSectionsData>("sections.image-highlight");
  const whyChoose = findSection<WhyChooseSectionData>("sections.why-choose");
  const processSteps = findSection<HowItWorksSectionData>("sections.process-steps");
  const teamShowcase = findSection<TeamSectionData>("sections.team-showcase");
  const contactBlock = findSection<ContactSectionData>("sections.contact-block");
  const coordinatingBanner = findSection<CoordinatingSectionData>("sections.coordinating-banner");

  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      {/* Mobile Patterns - Only visible on mobile */}
      <div className="lg:hidden overflow-hidden">
        {/* Pattern bottom - mutat 50% la stânga */}
        <div className="fixed bottom-0 left-[-50%] w-[200px] h-[91px] opacity-80 pointer-events-none z-0">
          <svg className="w-full h-full" fill="none" viewBox="0 0 202 91">
            <path d="M0 55.1229C0 55.1229 72.4345 97.848 110.792 90.0488C139.61 84.1945 156.566 62.2968 162.077 56.4327C167.589 50.5685 197.842 9.92861 202 0C202 0 171.074 34.7876 154.097 47.728C126.106 69.0674 107.647 67.5761 62.5873 50.1805C40.7548 41.7618 30.0361 32.7309 0 55.1229Z" fill="#D01127" opacity="0.8" />
          </svg>
        </div>
        
        {/* Pattern top - mutat 50% la dreapta */}
        <div className="fixed top-0 right-[-50%] w-[200px] h-[91px] opacity-80 pointer-events-none z-0">
          <svg className="w-full h-full" fill="none" viewBox="0 0 202 91">
            <path d="M0 55.1229C0 55.1229 72.4345 97.848 110.792 90.0488C139.61 84.1945 156.566 62.2968 162.077 56.4327C167.589 50.5685 197.842 9.92861 202 0C202 0 171.074 34.7876 154.097 47.728C126.106 69.0674 107.647 67.5761 62.5873 50.1805C40.7548 41.7618 30.0361 32.7309 0 55.1229Z" fill="#D01127" opacity="0.8" />
          </svg>
        </div>
      </div>
      
      <Header />
      <main className="flex flex-col items-start w-full overflow-x-hidden">
        <HeroSection data={hero} />
        <div className="w-full">
          <div className="mx-auto max-w-[1440px] w-full px-[10px] md:px-10 lg:px-0">
          <ServicesSection data={services} />
          <ImageSections data={imageHighlight} />
          <WhyChooseSection data={whyChoose} />
          <CoordinatingSection data={coordinatingBanner} />
          <HowItWorksSection data={processSteps} />
          <TeamSection data={teamShowcase} />
          <ContactSection data={contactBlock} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
