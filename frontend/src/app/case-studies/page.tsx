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

export default async function Page() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-start w-full overflow-x-hidden">
        <HeroSection />
        <div className="w-full">
          <div className="mx-auto max-w-[1440px] w-full px-[10px] md:px-10 lg:px-0">
            <ServicesSection />
            <ImageSections />
            <WhyChooseSection />
            <CoordinatingSection />
            <HowItWorksSection />
            <TeamSection />
            <ContactSection />
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}
