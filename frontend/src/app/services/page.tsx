import type { CSSProperties } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import Image from "next/image";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      {/* Background Pattern - Decorative element, absolute is appropriate here */}
      <div className="absolute top-[572px] left-0 w-[516px] max-w-[100vw] h-[1300px] opacity-80 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full" fill="none" viewBox="0 0 517 1300">
          <path d={svgPaths.p2ff94480} fill="#7F92C7" opacity="0.5" />
        </svg>
      </div>

      <Header />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - Refactored with flexbox structure */}
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative h-[562px] w-full overflow-hidden">
              {/* Badge Container */}
              <div className="absolute top-0 left-5 z-20">
                <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] relative">
                  <p 
                    className="absolute left-[20px] top-[10px] font-sans font-medium text-[#d01127] text-[13px] uppercase"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    SeRvices
                  </p>
                </div>
              </div>

              {/* Hero Image Background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/images/services/hero-services.jpg"
                    alt="Healthcare professionals working"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      height: '113.88%',
                      left: '-63.06%',
                      top: '-13.88%',
                      width: '266.63%',
                      maxWidth: 'none',
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                  />
                </div>
                <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
              </div>
              
              {/* Content Card - Using flexbox instead of absolute positioning */}
              <div className="absolute inset-x-5 top-[39px] h-[503px]">
                <div className="backdrop-blur-[10px] bg-gradient-to-b from-[rgba(183,198,243,0.12)] to-[rgba(84,100,145,0.04)] rounded-[12px] border border-[rgba(158,162,203,0.8)] h-full flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-[60px] mt-[97px]">
                    <h1 
                      className="font-sans font-semibold text-[clamp(28px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      End-to-End Outsourcing Solutions for Home Health Agencies
                    </h1>
                    <p 
                      className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start">
                    <button 
                      className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Book a Free Consultation
                    </button>
                    <p 
                      className="font-sans font-normal text-[#d01127] text-[clamp(12px,1.8vw,13px)] underline tracking-[-0.26px] text-right w-full mb-[5px]"
                      style={{ 
                        fontVariationSettings: "'wdth' 100", 
                        textDecorationSkipInk: 'none', 
                        textUnderlinePosition: 'from-font' 
                      }}
                    >
                      Download Service Overview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Refactored with flexbox */}
          <div className="hidden lg:block relative h-[750px] w-full overflow-hidden">
            {/* Hero Image Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/images/services/hero-services.jpg"
                  alt="Healthcare professionals working"
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                />
              </div>
              <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
            </div>
            
            {/* Content Container - Using flexbox structure */}
            <div className="relative mx-auto max-w-[1440px] h-full flex items-start pt-[15px]">
              {/* Badge */}
              <p 
                className="absolute left-[calc(50%-620px)] top-[15px] font-sans font-medium text-[#d01127] text-[20px] uppercase z-20"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                SeRvices
              </p>
              
              {/* Content Card - Using flexbox instead of absolute */}
              <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                  <h1 
                    className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    End-to-End Outsourcing Solutions{'\n'}for Home Health Agencies
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    From patient intake to billing and operations — Amedicase helps{'\n'}U.S. home health providers streamline workflows, cut costs, and focus on patient care.
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <button 
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Book a Free Consultation
                    </p>
                  </button>
                  <p 
                    className="font-sans font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textDecorationSkipInk: 'none',
                      textUnderlinePosition: 'from-font'
                    }}
                  >
                    Download Service Overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Pillars - Already using grid, structure is good */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
            <p 
              className="font-sans font-medium text-[15px] lg:text-[20px] uppercase mb-8 lg:mb-[60px]"
              style={{
                WebkitBackgroundClip: 'text !important',
                WebkitTextFillColor: 'transparent',
                background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                fontVariationSettings: "'wdth' 100",
              } as ExtendedCSSProperties}
            >
              Our Service Pillars
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[60px]">
              {/* Service Cards - Already using flexbox, structure is good */}
              {/* Service Card 1: Billing & Finance */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <img
                      src="/images/services/billing-finance-new.jpg"
                      alt="Billing & Finance"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        height: '121.49%',
                        left: 0,
                        top: '-17.42%',
                        width: '100%',
                      }}
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
                        <img src="/images/services/arrow-icon.svg" alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 2: Patient Intake & Support */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[33px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <img
                        src="/images/services/patient-intake-correct.jpg"
                        alt="Patient Intake & Support"
                        className="absolute h-full max-w-none"
                        style={{
                          left: '-71.67%',
                          width: '237.04%',
                          top: 0,
                          height: '100%',
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">Patient Intake<br />& Support</span>
                        <span className="hidden lg:inline">Patient Intake & Support</span>
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
                        <img src="/images/services/arrow-icon.svg" alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 3: Operations & Admin Support */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[22px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <img
                        src="/images/services/operations-admin-correct.jpg"
                        alt="Operations & Admin Support"
                        className="absolute h-full max-w-none"
                        style={{
                          left: '-26.67%',
                          width: '187.27%',
                          top: 0,
                          height: '100%',
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">Operations &<br />Admin Support</span>
                        <span className="hidden lg:inline">Operations & Admin Support</span>
                      </h3>
                      <p className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">Reliable back-office for<br />clinical teams.</span>
                        <span className="hidden lg:inline">Reliable back-office for clinical teams.</span>
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-center w-full">
                      <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Learn More
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <img src="/images/services/arrow-icon.svg" alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 4: Digital Presence & Growth */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[10px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <img
                      src="/images/services/digital-growth-new.jpg"
                      alt="Digital Presence & Growth"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        height: '119.99%',
                        left: 0,
                        top: '-6%',
                        width: '100%',
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-[32px] items-start w-[150px] lg:w-auto">
                    <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                      <h3 className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">Digital Presence<br />& Growth</span>
                        <span className="hidden lg:inline">Digital Presence & Growth</span>
                      </h3>
                      <p className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] lg:whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="lg:hidden">Power your agency with<br />smart technology.</span>
                        <span className="hidden lg:inline">Power your agency with smart technology.</span>
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-center w-[127px] lg:w-full">
                      <p className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Learn More
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <img src="/images/services/arrow-icon.svg" alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Home Health Agencies - Refactored with flexbox */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px]">
            <p className="font-sans font-medium text-[15px] lg:text-[20px] uppercase mb-8 lg:mb-[60px]" style={{
              WebkitBackgroundClip: 'text !important',
              WebkitTextFillColor: 'transparent',
              background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontVariationSettings: "'wdth' 100",
            } as ExtendedCSSProperties}>
              How We Help Home Health Agencies
            </p>
            <h2 className="font-sans font-semibold text-[33px] lg:text-[52px] text-[#000618] leading-[1.1] tracking-[-0.66px] lg:tracking-[-1.04px] mb-8 lg:mb-0 lg:w-[952px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Designed to Help You Operate Efficiently and Scale with Confidence.
            </h2>
            
            {/* Benefit Items - Refactored with flexbox structure */}
            <div className="flex flex-col gap-0 items-start">
              {/* Benefit 1 - Using flexbox layout */}
              <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                <div className="flex items-start gap-[10px]">
                  {/* Decorative card - absolute positioning is appropriate for decorative element */}
                  <div className="backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-full min-h-[60px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                  {/* Icon dot - absolute positioning for precise placement */}
                  <div className="absolute left-[20px] top-[20px] w-[10px] h-[10px] z-10">
                    <div className="absolute inset-[-40%]">
                      <img alt="" className="block max-w-none size-full" src="/images/services/icon-dot.svg" style={{ filter: 'blur(2px)' }} />
                    </div>
                  </div>
                  {/* Text content */}
                  <p 
                    className="font-sans font-medium leading-[1.2] ml-[12px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    Reduce Costs up to 60% without compromising HIPAA compliance.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                <div className="flex items-start gap-[10px]">
                  <div className="backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-full min-h-[60px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                  <div className="absolute left-[20px] top-[20px] w-[10px] h-[10px] z-10">
                    <div className="absolute inset-[-40%]">
                      <img alt="" className="block max-w-none size-full" src="/images/services/icon-dot.svg" style={{ filter: 'blur(2px)' }} />
                    </div>
                  </div>
                  <p 
                    className="font-sans font-medium leading-[1.2] ml-[12px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    Focus on Patient Care. Let us handle admin load.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="relative w-full max-w-[320px] lg:max-w-none pb-[3px]">
                <div className="flex items-start gap-[10px]">
                  <div className="backdrop-blur-[2.667px] backdrop-filter bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-full min-h-[60px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                  <div className="absolute left-[20px] top-[20px] w-[10px] h-[10px] z-10">
                    <div className="absolute inset-[-40%]">
                      <img alt="" className="block max-w-none size-full" src="/images/services/icon-dot.svg" style={{ filter: 'blur(2px)' }} />
                    </div>
                  </div>
                  <p 
                    className="font-sans font-medium leading-[1.2] ml-[12px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    Scale Seamlessly. Expand your team as your caseload grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Deliver Quality - Refactored with flexbox */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden">
              <div className="relative rounded-[12px] overflow-hidden aspect-[320/213] max-w-2xl mx-auto">
                <Image
                  src="/images/services/we-deliver-quality.jpg"
                  alt="We deliver quality"
                  fill
                  className="object-cover rounded-[12px]"
                />
                <div className="absolute inset-0 bg-[rgba(30,58,138,0.6)] mix-blend-hard-light" />
                
                {/* Content Overlay - Using flexbox */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[16px]">
                  <div className="w-[80px] h-[32px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 106 42">
                      <path d={svgPaths.p1d182d80} fill="#F1F5FF" />
                    </svg>
                  </div>
                  <p className="font-sans font-medium text-[20px] text-[#f1f5ff] text-center leading-[1.1] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We deliver quality.
                  </p>
                  <div className="w-[80px] h-[32px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 106 42">
                      <path d="M0 34.8145C0 34.8145 27.9409 0.328038 47.5434 0.00417593C62.2703 -0.242293 73.8502 10.493 77.4164 13.2432C80.9825 15.9934 101.892 36.0728 105.452 41.3932C105.452 41.3932 85.1446 24.8508 74.9695 19.3996C58.1924 10.4098 49.5877 13.6578 30.7556 29.6969C21.6295 37.4624 17.9227 44.1626 0 34.8145Z" fill="#F1F5FF" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Refactored with flexbox */}
            <div className="hidden lg:flex items-center justify-center h-[630px] w-full max-w-[1320px] mx-auto relative">
              {/* Background Image - absolute positioning for background is appropriate */}
              <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img alt="We deliver quality" className="absolute h-[139.7%] left-0 max-w-none top-[-18.25%] w-full rounded-[12px]" src="/images/services/we-deliver-quality.jpg" />
                </div>
                <div className="absolute bg-[rgba(30,58,138,0.6)] inset-0 mix-blend-hard-light rounded-[12px]" />
              </div>
              
              {/* Content - Using flexbox for centering */}
              <div className="relative z-10 flex flex-col gap-[60px] items-center">
                <div className="h-[82.786px] w-[210.904px]">
                  <img alt="Arrow" className="block max-w-none size-full" src="/images/services/arrow-vector-1.svg" />
                </div>
                <p className="font-sans font-medium leading-[1.1] text-[#f1f5ff] text-[52px] text-center tracking-[-1.04px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  We deliver quality.
                </p>
                <div className="h-[82.786px] w-[210.904px]">
                  <img alt="Arrow" className="block max-w-none size-full" src="/images/services/arrow-vector-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Already using flexbox, structure is good */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden">
              <p 
                className="font-sans font-medium text-[15px] uppercase mb-8"
                style={{
                  WebkitBackgroundClip: 'text !important',
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontVariationSettings: "'wdth' 100",
                } as ExtendedCSSProperties}
              >
                How It Works
              </p>

              <div className="flex flex-col gap-[20px] items-start">
                <div className="flex flex-col gap-[10px] items-start w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Discovery & Planning
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We identify your workflow needs and define clear KPIs.
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Onboarding & Training
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Your dedicated Amedicase team gets trained on<br />your EMR tools and processes.
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Execution & Support
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We manage daily operations, reports, and QA checks.
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  <p className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Ongoing Optimization
                  </p>
                  <p className="font-sans font-normal text-[13px] text-[#2b4691] leading-[1.4] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Continuous performance tracking and scaling<br />when needed.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full backdrop-blur-[3.777px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] shadow-[0px_1px_4px_0px_rgba(27,30,79,0.3)] px-5 py-[17px] font-sans font-semibold text-[18px] text-[#f1f5ff] leading-[110%] hover:opacity-90 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Start Your Free Discovery Call
                </button>
              </div>
            </div>

            {/* Desktop Layout - Already using flexbox */}
            <div className="hidden lg:block">
              <p 
                className="font-sans font-medium text-[20px] uppercase mb-[60px]"
                style={{
                  WebkitBackgroundClip: 'text !important',
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontVariationSettings: "'wdth' 100",
                } as ExtendedCSSProperties}
              >
                How It Works
              </p>

              {/* Content Layout - Using flexbox */}
              <div className="flex gap-[116px] items-center pl-[55px]">
                {/* Image */}
                <div className="relative shrink-0 size-[456px]">
                  <img alt="How It Works" className="block max-w-none size-full" src="/images/services/how-it-works-vector.svg" />
                </div>
                
                {/* Steps List - Using flexbox */}
                <div className="flex flex-col gap-[40px] items-start w-[693px]">
                  <div className="flex flex-col gap-[40px] items-start w-full">
                    {/* Step 1: Discovery & Planning */}
                    <div className="flex flex-col gap-[10px] items-start w-full">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Discovery & Planning
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        We identify your workflow needs and define clear KPIs.
                      </p>
                    </div>
                    
                    {/* Step 2: Onboarding & Training */}
                    <div className="flex flex-col gap-[20px] items-start w-full">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Onboarding & Training
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Your dedicated Amedicase team gets trained on your EMR tools and processes.
                      </p>
                    </div>
                    
                    {/* Step 3: Execution & Support */}
                    <div className="flex flex-col gap-[20px] items-start">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Execution & Support
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        We manage daily operations, reports, and QA checks.
                      </p>
                    </div>
                    
                    {/* Step 4: Ongoing Optimization */}
                    <div className="flex flex-col gap-[20px] items-start">
                      <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Ongoing Optimization
                      </p>
                      <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Continuous performance tracking and scaling when needed.
                      </p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Start Your Free Discovery Call
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Amedicase - Refactored with flexbox */}
        <section className="relative py-8 lg:py-16 overflow-hidden">
          <div className="mx-auto px-5 lg:px-8 max-w-[1440px] overflow-hidden">
            {/* Mobile Layout - Using flexbox structure */}
            <div className="md:hidden flex flex-col gap-[43px] items-start">
              <p 
                className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[15px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] whitespace-nowrap"
                style={{
                  WebkitTextFillColor: 'transparent',
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                Why Choose Amedicase
              </p>

              {/* Benefits List - Using flexbox instead of absolute positioning */}
              <div className="flex flex-col gap-[56px] items-center w-full">
                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[194px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  HIPAA-Compliant & <br aria-hidden="true" />Secure Data Handling
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 280 2" preserveAspectRatio="none">
                    <path d="M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z" fill="#0b1737" opacity="0.2" />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[211px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Up to 60% Cost Savings<br aria-hidden="true" />vs. U.S. Operations
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 280 2" preserveAspectRatio="none">
                    <path d="M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z" fill="#0b1737" opacity="0.2" />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[237px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Healthcare-trained Teams <br aria-hidden="true" />with U.S. Experience
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 280 2" preserveAspectRatio="none">
                    <path d="M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z" fill="#0b1737" opacity="0.2" />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[177px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Dedicated Account <br aria-hidden="true" />Managers
                </p>
                <div className="w-[280px] h-[2px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 280 2" preserveAspectRatio="none">
                    <path d="M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z" fill="#0b1737" opacity="0.2" />
                  </svg>
                </div>

                <p 
                  className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[20px] text-center tracking-[-0.4px] w-[241px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Real-time Communication <br aria-hidden="true" />& U.S. Time-Zone Overlap
                </p>
              </div>
            </div>

            {/* Desktop Layout - Refactored with flexbox */}
            <div className="hidden lg:block">
              <p 
                className="font-sans font-medium text-[20px] uppercase mb-[60px]"
                style={{
                  WebkitBackgroundClip: 'text !important',
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontVariationSettings: "'wdth' 100",
                } as ExtendedCSSProperties}
              >
                Why Choose Amedicase
              </p>

              {/* Content Layout - Using flexbox instead of absolute */}
              <div className="flex items-center justify-between gap-[60px] w-full">
                {/* Left Side - Benefits List - Using flexbox structure */}
                <div className="relative w-[495px] rounded-[12px] overflow-clip flex-shrink-0" style={{ minHeight: '624px' }}>
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-[#eef3ff] rounded-[12px]">
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_1px_rgba(30,58,138,0.4)]" />
                  </div>
                  
                  {/* Content - Using flexbox instead of absolute positioning */}
                  <div className="relative flex flex-col gap-[20px] items-center px-[20px] py-[20px] w-full">
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      HIPAA-Compliant &{'\n'}Secure Data Handling
                    </p>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                      </div>
                    </div>
                    
                    <div className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="mb-0">Up to 60% Cost Savings</p>
                      <p>vs. U.S. Operations</p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                      </div>
                    </div>
                    
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Dedicated Account{'\n'}Managers
                    </p>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                      </div>
                    </div>
                    
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Healthcare-trained Teams{'\n'}with U.S. Experience
                    </p>
                    <div className="h-0 relative shrink-0 w-[455px]">
                      <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                        <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                      </div>
                    </div>
                    
                    <p className="font-sans font-medium leading-[1.4] text-[#0b1737] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Real-time Communication{'\n'}& U.S. Time-Zone Overlap
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Image - absolute positioning for image overlay is appropriate */}
                <div className="relative shrink-0 w-[765px]" style={{ minHeight: '624px' }}>
                  <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="Why Choose Amedicase" className="absolute h-full left-[-21.18%] max-w-none top-0 w-[147.36%]" src="/images/services/office-documents-filing-cabinet.jpg" />
                    </div>
                    <div className="absolute bg-[rgba(30,58,138,0.2)] inset-0 mix-blend-hard-light rounded-[12px]" />
                  </div>
                  {/* Subtract Overlay - absolute positioning for decorative overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-[-0.27%_-0.52%_-0.8%_-0.52%]">
                      <img alt="Subtract" className="block max-w-none size-full" src="/images/services/subtract-overlay.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
