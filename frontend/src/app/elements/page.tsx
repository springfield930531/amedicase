import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ImageSections } from "@/components/sections/ImageSections";
import { CoordinatingSection } from "@/components/sections/CoordinatingSection";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import Image from "next/image";

export default function ElementsPage() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative">
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md">
        <Header />
      </div>
      <main className="pt-[120px] pb-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
          
          {/* Page Title */}
          <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-[#0b1737] mb-4">Amedicase Design System - Elements</h1>
            <p className="text-lg text-[#0b1737]">Documentație vizuală a tuturor componentelor și elementelor</p>
            <p className="text-sm text-gray-600 mt-4">Accesibil la: <code className="bg-gray-100 px-2 py-1 rounded">/elements</code></p>
          </div>

          {/* 1. HeaderSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">1. HeaderSection</h2>
              <p className="text-sm text-gray-700 mt-2">Header-ul principal al site-ului, fixat în partea de sus (z-index: 9999)</p>
              <p className="text-xs text-gray-600 mt-1">Notă: Header-ul este fixat în partea de sus a paginii. Vezi header-ul fixat deasupra acestei pagini.</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100 relative" style={{ minHeight: '200px' }}>
              <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center text-gray-500">
                <p className="text-sm">Header-ul este fixat în partea de sus a paginii</p>
                <p className="text-xs mt-2">Poziție: fixed, top: 0, z-index: 9999</p>
              </div>
            </div>
          </section>

          {/* 2. HeroSection (Homepage) */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">2. HeroSection (Homepage)</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea hero principală de pe homepage, cu imagine de fundal, logo, titlu, subtitlu și buton CTA</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <HeroSection />
            </div>
          </section>

          {/* 3. Shared Title Components */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">3. Shared Title Components</h2>
              <p className="text-sm text-gray-700 mt-2">Componente reutilizabile pentru titluri</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100 space-y-12">
              <div className="border-b pb-8">
                <div className="bg-yellow-50 p-3 rounded mb-4">
                  <h3 className="text-xl font-semibold text-[#0b1737]">GradientTitle</h3>
                  <p className="text-xs text-gray-600">Titlu cu gradient (componentă shared)</p>
                </div>
                <GradientTitle label="Example Gradient Title" />
              </div>
              <div>
                <div className="bg-yellow-50 p-3 rounded mb-4">
                  <h3 className="text-xl font-semibold text-[#0b1737]">TitleBlock</h3>
                  <p className="text-xs text-gray-600">Bloc de titlu cu subtitlu (componentă shared)</p>
                </div>
                <TitleBlock 
                  label="Example Label"
                  title="Example Main Title"
                  subtitle="Example Subtitle Text"
                />
              </div>
            </div>
          </section>

          {/* 4. OutsourcingSolutionsSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">4. OutsourcingSolutionsSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea care prezintă soluțiile de outsourcing disponibile, cu carduri pentru fiecare serviciu</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <ServicesSection />
            </div>
          </section>

          {/* 5. ImageSections */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">5. ImageSections</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiuni cu imagini full-width și overlay-uri de text</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <ImageSections />
            </div>
          </section>

          {/* 6. WhyChooseSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">6. WhyChooseSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea care prezintă beneficiile alegerii Amedicase, cu card de beneficii și imagine laterală</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <WhyChooseSection />
            </div>
          </section>

          {/* 7. CoordinatingSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">7. CoordinatingSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiune cu imagine full-width și text centrat deasupra</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <CoordinatingSection />
            </div>
          </section>

          {/* 8. HowItWorksSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">8. HowItWorksSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea care prezintă procesul în pași, cu carduri pentru fiecare pas și imagine laterală</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <HowItWorksSection />
            </div>
          </section>

          {/* 9. TeamSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">9. TeamSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea care prezintă echipa, cu slider pentru membrii echipei</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <TeamSection />
            </div>
          </section>

          {/* 10. ContactSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">10. ContactSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea de contact cu slider pentru testimoniale și formular de contact</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <ContactSection />
            </div>
          </section>

          {/* 11. FooterSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-blue-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">11. FooterSection</h2>
              <p className="text-sm text-gray-700 mt-2">Footer-ul site-ului cu navigare, logo și linkuri legale</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-blue-100">
              <Footer />
            </div>
          </section>

          {/* ========== SERVICES PAGE SECTIONS ========== */}

          {/* 12. ServicesPageHeroSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">12. ServicesPageHeroSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea hero de pe pagina Services, cu badge &quot;SeRvices&quot;, imagine de fundal și card de conținut</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <div className="relative bg-[#f1f5ff] pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="relative w-full overflow-hidden">
                    <div className="relative z-20 px-5 pt-0">
                      <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] flex items-center justify-center">
                        <p className="font-sans font-medium text-[#d01127] text-[13px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                          SeRvices
                        </p>
                      </div>
                    </div>
                    <div className="relative h-[562px] w-full overflow-hidden rounded-xl -mt-[29px]">
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src="/images/services/hero-services.jpg"
                          alt="Healthcare professionals working"
                          fill
                          sizes="100vw"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
                    </div>
                    <div className="relative -mt-[503px] px-5 z-10">
                      <div className="backdrop-blur-[10px] bg-gradient-to-b from-[rgba(183,198,243,0.12)] to-[rgba(84,100,145,0.04)] rounded-[12px] border border-[rgba(158,162,203,0.8)] min-h-[503px] flex flex-col justify-between p-5">
                        <div className="flex flex-col gap-[60px] mt-[97px]">
                          <h1 className="font-sans font-semibold text-[clamp(28px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] whitespace-pre-wrap max-w-[292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            End-to-End Outsourcing Solutions for Home Health Agencies
                          </h1>
                          <p className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.
                          </p>
                        </div>
                        <div className="flex flex-col gap-[20px] items-start">
                          <button className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Book a Free Consultation
                          </button>
                          <p className="font-sans font-normal text-[#d01127] text-[clamp(12px,1.8vw,13px)] underline tracking-[-0.26px] text-right w-full mb-[5px]" style={{ fontVariationSettings: "'wdth' 100", textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                            Download Service Overview
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden lg:block relative h-[750px] w-full overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src="/images/services/hero-services.jpg"
                        alt="Healthcare professionals working"
                        fill
                        sizes="100vw"
                        className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                      />
                    </div>
                    <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
                  </div>
                  <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 xl:px-0 h-full flex items-start pt-[15px]">
                    <div className="absolute top-[-17px] left-[60px] z-20">
                      <div className="bg-[#f1f5ff] h-[70px] rounded-bl-[18px] rounded-br-[18px] w-[200px] relative">
                        <p className="absolute left-[20px] top-[20px] font-sans font-medium text-[#d01127] text-[33px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                          SeRvices
                        </p>
                      </div>
                    </div>
                    <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                      <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                        <h1 className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          End-to-End Outsourcing Solutions{'\n'}for Home Health Agencies
                        </h1>
                        <p className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          From patient intake to billing and operations — Amedicase helps{'\n'}U.S. home health providers streamline workflows, cut costs, and focus on patient care.
                        </p>
                      </div>
                      <div className="flex flex-col gap-[20px] items-start w-[419px]">
                        <button className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Book a Free Consultation
                          </p>
                        </button>
                        <p className="font-sans font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100", textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                          Download Service Overview
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 13. ServicesPageServicePillarsSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">13. ServicesPageServicePillarsSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea &quot;Our Service Pillars&quot; de pe pagina Services, cu carduri pentru fiecare pilon de serviciu</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <div className="relative py-8 lg:py-16 overflow-x-hidden bg-[#f1f5ff]">
                <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px] overflow-x-hidden">
                  <GradientTitle label="Our Service Pillars" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[60px] mt-8">
                    {/* Service Card 1: Billing & Finance */}
                    <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                      <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
                        <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                          <Image
                            src="/images/services/billing-finance-new.jpg"
                            alt="Billing & Finance"
                            fill
                            sizes="122px"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ height: '121.49%', left: 0, top: '-17.42%', width: '100%' }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                          <div className="flex flex-col gap-[20px] items-start justify-center">
                            <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <span className="lg:hidden">Billing &<br />Finance</span>
                              <span className="hidden lg:inline">Billing & Finance</span>
                            </h3>
                            <div className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="mb-0 lg:inline lg:mr-2">Accurate billing.</p>
                              <p className="lg:inline">Faster payments.</p>
                            </div>
                          </div>
                          <div className="flex gap-[10px] items-center w-full">
                            <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Learn More
                            </p>
                            <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                              <Image src="/images/services/arrow-icon.svg" alt="Arrow" width={26} height={26} className="w-full h-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 14. ServicesPageHowWeHelpSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">14. ServicesPageHowWeHelpSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea &quot;How We Help Home Health Agencies&quot; de pe pagina Services, cu elemente decorative și beneficii</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <div className="relative py-8 lg:py-16 overflow-x-hidden bg-[#f1f5ff]">
                <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
                  <TitleBlock 
                    label="How We Help Home Health Agencies"
                    title="Designed to Help You Operate Efficiently and Scale with Confidence."
                    titleClassName="mb-8 lg:mb-0 lg:w-[952px]"
                  />
                  <div className="flex flex-col gap-0 items-start mt-8">
                    <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                      <div className="flex items-start gap-[10px]">
                        <div className="bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-[86px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                        <div className="absolute left-[11px] top-[20px] w-[10px] h-[10px] z-10">
                          <div className="absolute inset-[-30%]">
                            <Image alt="" className="block max-w-none size-full" src="/images/services/icon-dot.svg" width={10} height={10} style={{ filter: 'blur(3px)' }} />
                          </div>
                        </div>
                        <p className="font-sans font-medium leading-[1.2] ml-[-32px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1" style={{ fontVariationSettings: "'wdth' 100", textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}>
                          Reduce Costs up to 60% without compromising HIPAA compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 15. ServicesPageWeDeliverQualitySection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">15. ServicesPageWeDeliverQualitySection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea &quot;We Deliver Quality&quot; de pe pagina Services, cu imagine full-width și text centrat</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <div className="relative py-8 lg:py-16 overflow-x-hidden bg-[#f1f5ff]">
                <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px] overflow-x-hidden">
                  <div className="hidden lg:flex items-center justify-center h-[630px] w-full max-w-[1320px] mx-auto relative">
                    <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                        <Image
                          alt="We deliver quality"
                          src="/images/services/we-deliver-quality.jpg"
                          fill
                          sizes="(max-width: 1280px) 100vw, 1320px"
                          className="absolute h-[139.7%] left-0 max-w-none top-[-18.25%] w-full rounded-[12px]"
                        />
                      </div>
                      <div className="absolute bg-[rgba(30,58,138,0.6)] inset-0 mix-blend-hard-light rounded-[12px]" />
                    </div>
                    <div className="relative z-10 flex flex-col gap-[60px] items-center">
                      <div className="h-[82.786px] w-[210.904px]">
                        <Image alt="Arrow" className="block max-w-none size-full" src="/images/services/arrow-vector-1.svg" width={211} height={83} />
                      </div>
                      <p className="font-sans font-medium leading-[1.1] text-[#f1f5ff] text-[52px] text-center tracking-[-1.04px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        We deliver quality.
                      </p>
                      <div className="h-[82.786px] w-[210.904px]">
                        <Image alt="Arrow" className="block max-w-none size-full" src="/images/services/arrow-vector-2.svg" width={211} height={83} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 16. ServicesPageHowItWorksSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">16. ServicesPageHowItWorksSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea &quot;How It Works&quot; de pe pagina Services, cu pași și imagine laterală</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <div className="relative py-8 lg:py-16 overflow-x-hidden bg-[#f1f5ff]">
                <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px] overflow-x-hidden">
                  <GradientTitle label="How It Works" className="mb-8" />
                  <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[116px] items-center lg:items-start">
                    <div className="relative w-full max-w-[320px] lg:max-w-none lg:size-[456px] aspect-square lg:aspect-auto">
                      <Image alt="How It Works" className="block max-w-none size-full" src="/images/services/how-it-works-vector.svg" fill sizes="(max-width: 1024px) 100vw, 456px" />
                    </div>
                    <div className="flex flex-col gap-[30px] lg:gap-[40px] items-start w-full lg:w-[693px]">
                      <div className="flex flex-col gap-[5px] items-start w-full">
                        <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[28px] lg:text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Discovery & Planning
                        </p>
                        <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[16px] lg:text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          We identify your workflow needs and define clear KPIs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 17. ServicesPageWhyChooseSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">17. ServicesPageWhyChooseSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea &quot;Why Choose Amedicase&quot; de pe pagina Services (varianta de pe Services page)</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <div className="relative py-8 lg:py-16 overflow-x-hidden bg-[#f1f5ff]">
                <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px] overflow-hidden">
                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <GradientTitle label="Why Choose Amedicase" />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[60px] w-full">
                      {/* Left Side - Benefits List */}
                      <div className="relative w-full md:w-[495px] rounded-[12px] overflow-clip flex-shrink-0" style={{ minHeight: 'auto' }}>
                        <div className="absolute inset-0 bg-[#eef3ff] rounded-[12px]">
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_1px_rgba(30,58,138,0.4)]" />
                        </div>
                        <div className="relative flex flex-col gap-[20px] items-center px-[20px] py-[20px] w-full">
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            HIPAA-Compliant &{'\n'}Secure Data Handling
                          </p>
                          <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="100vw" />
                            </div>
                          </div>
                          <div className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="mb-0">Up to 60% Cost Savings</p>
                            <p>vs. U.S. Operations</p>
                          </div>
                          <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="100vw" />
                            </div>
                          </div>
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Dedicated Account{'\n'}Managers
                          </p>
                          <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="100vw" />
                            </div>
                          </div>
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Healthcare-trained Teams{'\n'}with U.S. Experience
                          </p>
                          <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="100vw" />
                            </div>
                          </div>
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Real-time Communication{'\n'}& U.S. Time-Zone Overlap
                          </p>
                        </div>
                      </div>
                      {/* Right Side - Image */}
                      <div className="hidden md:block relative shrink-0 w-full md:w-[765px] aspect-[4/3] md:aspect-auto" style={{ minHeight: 'auto' }}>
                        <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                            <Image
                              alt="Why Choose Amedicase"
                              className="absolute h-full left-[-21.18%] max-w-none top-0 w-[147.36%]"
                              src="/images/services/office-documents-filing-cabinet.jpg"
                              fill
                              sizes="(max-width: 1024px) 100vw, 765px"
                            />
                          </div>
                          <div className="absolute bg-[rgba(30,58,138,0.2)] inset-0 mix-blend-hard-light rounded-[12px]" />
                        </div>
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-[-0.27%_-0.52%_-0.8%_-0.52%]">
                            <Image alt="Subtract" className="block max-w-none size-full" src="/images/services/subtract-overlay.svg" fill sizes="100vw" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* More About Us Button - Mobile */}
                    <div className="mt-[20px] md:mt-12">
                      <button className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid box-border content-stretch flex from-[rgba(45,78,174,0.64)] gap-[20px] items-center justify-center px-[20px] py-[17px] relative rounded-[8px] shrink-0 to-[rgba(34,62,140,0.48)] hover:opacity-90 transition-opacity w-[221px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          More About Us
                        </p>
                        <div className="h-[20.505px] relative shrink-0 w-[26px]">
                          <div className="absolute inset-[-2.23%_-0.96%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none" className="w-full h-full">
                              <path d="M16.6204 1.76406C16.6761 1.37428 16.7408 1.1622 17.0163 0.457608L25.8974 9.82045C26.3675 10.2905 26.3675 11.0525 25.8974 11.5226L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.713 16.5463 18.4322 17.0163 17.9622L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.4678 1.45371 9.4678L22.6218 9.4678L17.0163 3.86233C16.6204 3.32888 16.5001 2.60665 16.6204 1.76406Z" fill="white" />
                              <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9624L25.8974 11.5995C26.3675 11.1295 26.3675 10.3675 25.8974 9.89742L18.7187 2.23694C18.2486 1.76687 17.4864 1.76687 17.0163 2.23694C16.5463 2.70702 16.7522 3.46065 17.2223 3.93073L22.7593 9.54477H1.45371C0.788919 9.54477 0.25 10.0837 0.25 10.7485C0.25 11.4133 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5577C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" fill="white" />
                              <path d="M16.6204 1.76406C16.6761 1.37428 16.7408 1.1622 17.0163 0.457608L25.8974 9.82045C26.3675 10.2905 26.3675 11.0525 25.8974 11.5226L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.713 16.5463 18.4322 17.0163 17.9622L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.4678 1.45371 9.4678L22.6218 9.4678L17.0163 3.86233C16.6204 3.32888 16.5001 2.60665 16.6204 1.76406Z" stroke="white" strokeWidth="0.5" />
                              <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9624L25.8974 11.5995C26.3675 11.1295 26.3675 10.3675 25.8974 9.89742L18.7187 2.23694C18.2486 1.76687 17.4864 1.76687 17.0163 2.23694C16.5463 2.70702 16.7522 3.46065 17.2223 3.93073L22.7593 9.54477H1.45371C0.788919 9.54477 0.25 10.0837 0.25 10.7485C0.25 11.4133 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5577C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" stroke="white" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Desktop Layout */}
                  <div className="hidden lg:block">
                    <GradientTitle label="Why Choose Amedicase" />
                    <div className="flex items-center justify-between gap-[60px] w-full">
                      {/* Left Side - Benefits List */}
                      <div className="relative w-[495px] rounded-[12px] overflow-clip flex-shrink-0" style={{ minHeight: '624px' }}>
                        <div className="absolute inset-0 bg-[#eef3ff] rounded-[12px]">
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_1px_rgba(30,58,138,0.4)]" />
                        </div>
                        <div className="relative flex flex-col gap-[20px] items-center px-[20px] py-[20px] w-full">
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            HIPAA-Compliant &{'\n'}Secure Data Handling
                          </p>
                          <div className="h-0 relative shrink-0 w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="455px" />
                            </div>
                          </div>
                          <div className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="mb-0">Up to 60% Cost Savings</p>
                            <p>vs. U.S. Operations</p>
                          </div>
                          <div className="h-0 relative shrink-0 w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="455px" />
                            </div>
                          </div>
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Dedicated Account{'\n'}Managers
                          </p>
                          <div className="h-0 relative shrink-0 w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="455px" />
                            </div>
                          </div>
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Healthcare-trained Teams{'\n'}with U.S. Experience
                          </p>
                          <div className="h-0 relative shrink-0 w-[455px]">
                            <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                              <Image alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" fill sizes="455px" />
                            </div>
                          </div>
                          <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Real-time Communication{'\n'}& U.S. Time-Zone Overlap
                          </p>
                        </div>
                      </div>
                      {/* Right Side - Image */}
                      <div className="relative shrink-0 w-[765px]" style={{ minHeight: '624px' }}>
                        <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                            <Image
                              alt="Why Choose Amedicase"
                              className="absolute h-full left-[-21.18%] max-w-none top-0 w-[147.36%]"
                              src="/images/services/office-documents-filing-cabinet.jpg"
                              fill
                              sizes="765px"
                            />
                          </div>
                          <div className="absolute bg-[rgba(30,58,138,0.2)] inset-0 mix-blend-hard-light rounded-[12px]" />
                        </div>
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-[-0.27%_-0.52%_-0.8%_-0.52%]">
                            <Image alt="Subtract" className="block max-w-none size-full" src="/images/services/subtract-overlay.svg" fill sizes="765px" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 18. ServicesPageContactSection */}
          <section className="mb-20 pb-20 border-b-2 border-[#0b1737]">
            <div className="bg-green-100 p-4 rounded-t-lg">
              <h2 className="text-3xl font-bold text-[#0b1737]">18. ServicesPageContactSection</h2>
              <p className="text-sm text-gray-700 mt-2">Secțiunea de contact de pe pagina Services (aceeași ca pe homepage)</p>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg border-2 border-t-0 border-green-100">
              <ContactSection />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
