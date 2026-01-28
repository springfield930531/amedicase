import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { ContactSection } from "@/components/sections/ContactSection";

export default function AccountingFinancePage() {
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
                      Accounting and Finance
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image Background - Full width */}
              <div className="relative h-[562px] w-full -mt-[29px] overflow-hidden">
                <img
                  src="/images/services/hero-services.jpg"
                  alt="Accounting and finance professionals"
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
                    Accounting and Finance
                  </h1>
                  <p 
                    className="font-sans font-normal text-[clamp(11px,1.5vw,12px)] leading-[1.4] tracking-[-0.26px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Access trained, reliable and detail-oriented digital support specialists dedicated to improving your agency&apos;s online presence, documentation flows and patient experience.
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
                  alt="Accounting and finance professionals"
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
                    Accounting and Finance
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
                    Accounting and Finance
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Access trained, reliable and detail-oriented digital support specialists{'\n'}dedicated to improving your agency&apos;s online presence, documentation flows{'\n'}and patient experience.
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
            <div className="flex flex-col gap-1 items-start mb-[40px] md:mb-[60px] w-full">
              <GradientTitle label="Our Story" className="mb-0" />
              <h2 
                className="font-sans leading-[120%] w-full whitespace-pre-wrap -mt-[30px]"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#D01127',
                  fontSize: '52px',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.52px',
                }}
              >
                Outsourcing Accounting & Finance Services{'\n'}for Home Health Agencies
              </h2>
              <p 
                className="font-sans w-full mt-4"
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
                Most Home Health and Hospice agencies across the U.S. are now outsourcing billing, payroll prep, AR follow-up and claims reconciliation to specialized remote teams.
                <br /><br />
                This shift allows agencies to speed up payments, reduce denials, and maintain consistent financial accuracy without the cost of expanding an in-house office team.
                <br /><br />
                Amedicase specialists are trained on the systems commonly used in the U.S. healthcare sector, including WellSky, Axxess, MatrixCare, Brightree, QuickBooks and other{'\n'}RCM tools.
                <br /><br />
                Because we operate in alignment with U.S. financial standards, Medicare guidelines, HIPAA compliance and state-specific requirements, outsourcing your billing and finance functions to Amedicase becomes efficient, accurate, and scalable.
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
            <TitleBlock
              label="What We Can Offer"
              title="Digital support designed to strengthen your agency&apos;s online presence, documentation accuracy and patient experience."
            />
            
            {/* Services Grid - Responsive 2x2 on desktop, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[60px_120px] items-start w-full max-w-[1068px] mx-auto">
                  {/* Card 1: Accounts Receivable Coordinators */}
                  <div className="relative w-full min-h-[117px]">
                    <div className="absolute inset-0">
                      <img
                        src="/images/creative-development/card-bg-1.svg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src="/images/creative-development/dot-icon.svg"
                          alt=""
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Accounts Receivable Coordinators
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Follow-ups, payment posting, AR aging management, weekly and monthly reports.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Payroll & Timesheet Support */}
                  <div className="relative w-full min-h-[117px]">
                    <div className="absolute inset-0">
                      <img
                        src="/images/creative-development/card-bg-2.svg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src="/images/creative-development/dot-icon.svg"
                          alt=""
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Payroll & Timesheet Support
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Processing timesheets, preparing payroll reports, verifying visit records and EVV data.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Billing & Claims Specialists */}
                  <div className="relative w-full min-h-[145px]">
                    <div className="absolute inset-0">
                      <img
                        src="/images/creative-development/card-bg-3.svg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src="/images/creative-development/dot-icon.svg"
                          alt=""
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Billing & Claims Specialists
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        End-to-end claims submission, denial management, AR tracking and reconciliation{'\n'}for Medicare, Medicaid and private pay.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Bookkeeping & Financial Assistants */}
                  <div className="relative w-full min-h-[145px]">
                    <div className="absolute inset-0">
                      <img
                        src="/images/creative-development/card-bg-4.svg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex flex-col gap-[10px] p-[20px]">
                      <div className="flex items-start gap-[20px]">
                        <img
                          src="/images/creative-development/dot-icon.svg"
                          alt=""
                          className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                          style={{ filter: 'blur(0.3px)' }}
                        />
                        <h3 className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Bookkeeping & Financial Assistants
                        </h3>
                      </div>
                      <p className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Digital documentation setup, EMR form mapping and patient-flow optimization for smoother operations.
                      </p>
                    </div>
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

        {/* The Amedicase Process Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label="The Amedicase Process" className="mb-0" />
            
            {/* Process Steps - Vertical Stack */}
            <div className="flex flex-col gap-[20px] items-center w-full max-w-[1002px] mx-auto mt-[40px] md:mt-[60px]">
              {/* Stage 1 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      Stage 1
                    </p>
                    <p className="text-[#0b1737]">
                      Understanding Your Needs
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We begin by analyzing your billing process, EMR setup, AR aging, payroll structure and reporting needs.{'\n'}We identify the exact tasks to outsource and create a clear, tailored finance solution for your agency.
                  </p>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src="/images/creative-development/arrow-down.svg" 
                    alt="" 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Stage 2 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      Stage 2
                    </p>
                    <p className="text-[#0b1737]">
                      Assigning the Right Specialists
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We select professionals experienced in U.S. home health billing, AR management, payroll prep and financial support.{'\n'}Every specialist is vetted, trained and aligned with HIPAA and Medicare compliance requirements.
                  </p>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src="/images/creative-development/arrow-down.svg" 
                    alt="" 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Stage 3 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      Stage 3
                    </p>
                    <p className="text-[#0b1737]">
                      Seamless Integration Into Your Agency
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Your outsourced team works directly with your EMR, RCM platform, financial tools and internal staff.{'\n'}Communication, workflows and reports remain aligned with your agency&apos;s processes for a productive collaboration.
                  </p>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src="/images/creative-development/arrow-down.svg" 
                    alt="" 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Stage 4 */}
              <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid flex flex-col from-[rgba(45,78,174,0.002)] items-center justify-center p-[20px] relative rounded-[12px] shadow-[0px_3.391px_13.565px_0px_rgba(129,132,178,0.2)] to-[rgba(34,62,140,0.001)] w-full">
                <div className="flex flex-col gap-[40px] items-center justify-center text-center w-full">
                  <div className="flex flex-col font-sans font-medium gap-[20px] items-center leading-[1.2] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="text-[#d01127]">
                      Stage 4
                    </p>
                    <p className="text-[#0b1737]">
                      Quality Control & Continuous Support
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-[1.1] text-[#0b1737] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    We provide frequent reporting, quality checks, denial analysis and financial insights. As your volume grows,{'\n'}we adjust team size and workflows, to ensure your billing and finance remain accurate and fast.
                  </p>
                </div>
              </div>

              {/* Arrow 4 - Final */}
              <div className="flex h-[20px] items-center justify-center w-[44px]">
                <div className="flex-none rotate-90">
                  <img 
                    src="/images/creative-development/arrow-down-final.svg" 
                    alt="" 
                    className="h-[44px] w-[20px]"
                  />
                </div>
              </div>

              {/* Contact Us Button */}
              <a
                href="/#contact"
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid flex from-[rgba(205,27,48,0.24)] items-center justify-center px-[60px] py-[20px] relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(87,18,23,0.3)] to-[rgba(215,45,64,0.16)] hover:opacity-90 transition-opacity"
              >
                <p className="font-sans font-semibold leading-[1.1] text-[#d4283c] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Contact Us
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

