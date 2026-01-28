import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ImageSections } from "./components/ImageSections";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TeamSection } from "./components/TeamSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f1f5ff]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <ImageSections />
        <HowItWorksSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
