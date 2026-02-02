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
import type { PageSection } from "@/lib/page-types";

export default async function Home() {
  const homePage = await fetchHomePage();
  const sections = homePage?.contentSections || [];
  const hero = sections.find((section: PageSection) => (section as any).__component === "sections.hero-section");
  const services = sections.find((section: PageSection) => (section as any).__component === "sections.service-grid");
  const imageHighlight = sections.find((section: PageSection) => (section as any).__component === "sections.image-highlight");
  const whyChoose = sections.find((section: PageSection) => (section as any).__component === "sections.why-choose");
  const processSteps = sections.find((section: PageSection) => (section as any).__component === "sections.process-steps");
  const teamShowcase = sections.find((section: PageSection) => (section as any).__component === "sections.team-showcase");
  const contactBlock = sections.find((section: PageSection) => (section as any).__component === "sections.contact-block");

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
          <CoordinatingSection />
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
