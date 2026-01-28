import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomeHealthPage() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - Based on ServicesPageHeroSection */}
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative w-full flex flex-col overflow-hidden">
              {/* Badge - At top of hero section */}
              <div className="relative z-20 px-5 pt-0">
                <div className="flex" style={{ justifyContent: 'flex-start' }}>
                  <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-auto flex items-center justify-center px-2">
                    <p 
                      className="font-sans font-medium text-[#d01127] text-[13px] uppercase whitespace-nowrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Home Health
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image Background - Full width */}
              <div className="relative h-[562px] w-full -mt-[29px] overflow-hidden">
                <img
                  src="/images/services/hero-services.jpg"
                  alt="Home health professionals"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0 pointer-events-none" />
              </div>
              
              {/* Content Card - Relative positioning */}
              <div className="relative -mt-[470px] mx-[20px] w-[calc(100%-40px)] max-w-[320px] backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.12)] rounded-[12px] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] to-[rgba(84,100,145,0.04)] flex flex-col justify-between p-5 z-10 mb-[92px]">
                <div className="flex flex-col gap-[40px] items-start text-blue-900 mt-[80px] mb-5">
                  <h1 
                    className="font-sans font-semibold text-[clamp(24px,3vw,28px)] leading-[1.1] tracking-[-0.66px] w-full whitespace-pre-wrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Home Health Outsourcing
                  </h1>
                  <p 
                    className="font-sans font-normal text-[clamp(11px,1.5vw,12px)] leading-[1.4] tracking-[-0.26px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Improve your agency&apos;s patient experience, documentation accuracy and operational efficiency by leveraging trained remote specialists for billing, scheduling, intake and administrative support.
                  </p>
                </div>
                <div className="flex flex-col gap-[20px] items-center">
                  <a 
                    href="/#contact"
                    className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[16px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(191,192,215,0.3)] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[18px] text-center tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Book a Discovery Call
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative h-[750px] w-full overflow-hidden">
            {/* Hero Image Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/images/services/hero-services.jpg"
                  alt="Home health professionals"
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                />
              </div>
              <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
            </div>
            
            {/* Content Container */}
            <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 xl:px-0 h-full flex items-start pt-[15px]">
              {/* Badge */}
              <div className="absolute top-[-17px] left-[60px] z-20">
                <div className="bg-[#f1f5ff] h-[70px] rounded-bl-[18px] rounded-br-[18px] w-auto relative flex items-center px-[20px]">
                  <p 
                    className="font-sans font-medium text-[#d01127] text-[33px] uppercase whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Home Health
                  </p>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                  <h1 
                    className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Home Health Outsourcing
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Improve your agency&apos;s patient experience, documentation accuracy and operational efficiency by leveraging trained remote specialists for billing, scheduling, intake and administrative support.
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] items-start w-[419px]">
                  <a 
                    href="/#contact"
                    className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity flex"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Book a Discovery Call
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label="Our Story" className="mb-0" />
            <div className="flex flex-col gap-1 items-start mb-[40px] md:mb-[60px] w-full">
              <h2 
                className="font-sans leading-[120%] w-full whitespace-pre-wrap"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#000618',
                  fontSize: '52px',
                  fontWeight: 600,
                  lineHeight: '120%',
                  letterSpacing: '-1.04px',
                }}
              >
                Outsourcing for Home Health Agencies
              </h2>
              <p 
                className="font-sans w-full"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#000618',
                  fontSize: '33px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.33px',
                }}
              >
                In Home Health, accurate documentation, timely scheduling, clean claims and clear communication directly affect both patient outcomes and reimbursement cycles.
                <br /><br />
                Strategic outsourcing allows agencies to maintain clinical excellence while reducing administrative pressure on nurses and office staff.
                <br /><br />
                Amedicase provides dedicated remote teams trained in Home Health workflows,{'\n'}EMR updates, patient intake, authorization support and Medicare/Medicaid requirements.
                <br /><br />
                With reliable specialists handling coordination and documentation, your agency{'\n'}can deliver better patient care while staying compliant and operationally efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section with Overlay */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              {/* Background Image */}
              <img
                src="/images/creative-development/office-documents-background.jpg"
                alt="Office documents and files"
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: 'center center'
                }}
              />
              
              {/* Overlays Container - Single absolute wrapper for all overlays */}
              <div className="absolute inset-0 rounded-[8px] pointer-events-none">
                {/* Blue Overlay */}
                <div className="w-full h-full bg-[rgba(30,58,138,0.2)] mix-blend-hard-light rounded-[8px]" />
                
                {/* White Abstract Shapes Overlay */}
                <div className="absolute inset-0 rounded-[8px] overflow-visible">
                  <img
                    src="/images/creative-development/white-shapes-overlay.svg"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.1)',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Can Offer Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label="What We Can Offer" className="mb-0" />
            <div className="flex flex-col gap-1 items-start justify-start mb-[40px] md:mb-[60px] w-full">
              <h2 
                className="font-sans font-semibold leading-[1.1] text-[#000618] text-[clamp(28px,4vw,52px)] tracking-[-1.04px] w-full text-left whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Outsourcing Benefits for Home Health
              </h2>
            </div>
            
            {/* Benefits Grid - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] items-start w-full">
              {/* Card 1: Agility */}
              <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[130px]">
                <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Agility
                </h3>
                <p className="font-sans font-normal leading-[1.2] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Scale your support team up or down depending on census, referrals, authorizations or seasonal volume,{'\n'}without hiring delays or in-house overhead.
                </p>
              </div>

              {/* Card 2: Capability */}
              <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[210px]">
                <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Capability
                </h3>
                <p className="font-sans font-normal leading-[1.2] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Our specialists are trained in HH workflows: intake, scheduling, documentation, billing support and QA tasks, ensuring accuracy and consistent output.
                </p>
              </div>

              {/* Card 3: Core Care Focus */}
              <div className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid flex flex-col from-[rgba(204,211,234,0.25)] items-start px-[20px] py-[40px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] w-full min-h-[210px]">
                <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px] mb-5" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Core Care Focus
                </h3>
                <p className="font-sans font-normal leading-[1.2] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Outsourcing allows your clinical team{'\n'}to focus on patient care, visit quality and outcomes, while administrative tasks are handled by trained remote staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section with Overlay - Duplicate */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: '1320/375', minHeight: '375px' }}>
              {/* Background Image */}
              <img
                src="/images/creative-development/office-documents-background.jpg"
                alt="Office documents and files"
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: 'center center'
                }}
              />
              
              {/* Overlays Container - Single absolute wrapper for all overlays */}
              <div className="absolute inset-0 rounded-[8px] pointer-events-none">
                {/* Blue Overlay */}
                <div className="w-full h-full bg-[rgba(30,58,138,0.2)] mix-blend-hard-light rounded-[8px]" />
                
                {/* White Abstract Shapes Overlay */}
                <div className="absolute inset-0 rounded-[8px] overflow-visible">
                  <img
                    src="/images/creative-development/white-shapes-overlay.svg"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.1)',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label="How It Works" className="mb-0" />
            
            {/* Process Steps - Flex wrap layout with icons */}
            <div className="flex flex-col gap-[72px] items-center w-full mt-[60px]">
              <div className="flex flex-wrap gap-[72px] items-start w-full">
                {/* Step 1: Assessment */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
                  <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                    <img 
                      src="/images/home-health/how-it-works-icon.svg" 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Assessment
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      We begin by understanding your operational challenges and identifying the Home Health tasks best suited for outsourcing.
                    </p>
                  </div>
                </div>

                {/* Step 2: Talent Selection */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
                  <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                    <img 
                      src="/images/home-health/how-it-works-icon.svg" 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Talent Selection
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      We assign trained specialists experienced in Home Health intake, scheduling, documentation and billing coordination.
                    </p>
                  </div>
                </div>

                {/* Step 3: Seamless Integration */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
                  <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                    <img 
                      src="/images/home-health/how-it-works-icon.svg" 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Seamless Integration
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Your outsourced team integrates into your EMR, communication tools and workflow, working as an extension of your in-house staff.
                    </p>
                  </div>
                </div>

                {/* Step 4: Monitoring & Optimization */}
                <div className="flex items-start pl-0 pr-[70px] py-0 relative shrink-0">
                  <div className="mr-[-70px] relative shrink-0 size-[118px] mt-[30px]">
                    <img 
                      src="/images/home-health/how-it-works-icon.svg" 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start mr-[-70px] relative shrink-0 w-[576px] whitespace-pre-wrap">
                    <h3 className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(24px,3vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Monitoring & Optimization
                    </h3>
                    <p className="font-sans font-normal leading-[1.4] text-[#2b4691] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      We provide ongoing monitoring, reporting and quality checks. Your team can be scaled anytime as your agency grows.
                    </p>
                  </div>
                </div>
              </div>

              {/* More Info Button */}
              <a
                href="/#contact"
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid flex from-[rgba(45,78,174,0.64)] items-center justify-center px-[40px] py-[20px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(87,18,23,0.3)] to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity"
              >
                <p className="font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  More Info
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

