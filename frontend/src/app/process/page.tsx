import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GradientTitle } from "@/components/shared/GradientTitle";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - Based on ServicesPageHeroSection */}
        <section className="relative pt-[100px] pb-8 lg:pb-16 overflow-x-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative h-[562px] w-full overflow-hidden">
              {/* Badge Container */}
              <div className="absolute top-0 left-5 z-20">
                <div className="bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] relative flex items-center">
                  <p 
                    className="relative left-[20px] -mt-[10px] font-sans font-medium text-[#d01127] text-[13px] uppercase"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Process
                  </p>
                </div>
              </div>

              {/* Hero Image Background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/images/process/hero-background.jpg"
                    alt="Business people working"
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
                      className="font-sans font-semibold text-[clamp(36.4px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Our Process
                    </h1>
                    <p 
                      className="font-sans font-normal text-[clamp(15.6px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] whitespace-pre-wrap max-w-[292px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      A clear, efficient and compliance-aligned workflow designed for healthcare providers.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start">
                    <a 
                      href="/#contact"
                      className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] w-full max-w-[239px] font-sans font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Book a Discovery Call
                    </a>
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
                  src="/images/process/hero-background.jpg"
                  alt="Business people working"
                  className="absolute h-[200.03%] left-[-30.99%] max-w-none top-[-42.98%] w-[131.05%] object-cover"
                />
              </div>
              <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
            </div>
            
            {/* Content Container - Using flexbox structure */}
            <div className="relative mx-auto max-w-[1440px] h-full flex items-start pt-[15px]">
              {/* Badge */}
              <div className="absolute top-[-17px] left-[60px] z-20">
                <div className="bg-[#f1f5ff] h-[70px] rounded-bl-[18px] rounded-br-[18px] w-auto relative flex items-center px-[20px]">
                  <p 
                    className="font-sans font-medium text-[#d01127] text-[33px] uppercase whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Process
                  </p>
                </div>
              </div>
              
              {/* Content Card - Using flexbox instead of absolute */}
              <div className="ml-[60px] mt-[60px] w-[1320px] backdrop-blur-[20px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                  <h1 
                    className="font-sans font-semibold text-[52px] tracking-[-1.04px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Our Process
                  </h1>
                  <p 
                    className="font-sans font-normal text-[33px] tracking-[-0.66px] w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    A clear, efficient and compliance-aligned workflow designed for healthcare providers.
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
            <TitleBlock 
              label="Our Story"
              title="How Amedicase Works"
              subtitle="Every partnership begins with clarity. Our process ensures that your outsourced team integrates smoothly into your operations, maintains HIPAA-aligned standards and supports your agency with precision and consistency.

We follow a simple, transparent 4-stage model used across all Home Health and Hospice services."
              titleClassName="!text-[#1e3a8a] !text-[52px] !font-semibold !leading-[120%] !tracking-[-1.04px]"
              className="[&_p]:!text-[#000618] [&_p]:!text-[33px] [&_p]:!leading-[120%] [&_p]:!tracking-[-0.33px] gap-1"
            />
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

        {/* The Amedicase Process Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <GradientTitle label="The Amedicase Process" className="mb-0" />
            
            {/* Process Steps - Grid 2x2 layout */}
            <div className="relative mt-[60px] w-full">
              {/* Grid Container - 2 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start w-full">
                {/* Stage 1: Assessment */}
                <div className="relative backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] p-[40px] rounded-[12px] to-[rgba(80,86,104,0.003)]">
                  {/* Stage Badge */}
                  <div 
                    className="absolute backdrop-blur-[7px] backdrop-filter border-[0.5px] border-[rgba(205,95,108,0.8)] border-solid top-0 left-0 -translate-y-1/2 py-[10px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(162,21,38,0.3)] -ml-[20px]"
                    style={{
                      background: 'linear-gradient(96deg, rgb(213 161 183) 4.35%, rgb(214 206 209) 98.92%)',
                      paddingLeft: '20px',
                      paddingRight: '19px'
                    }}
                  >
                    <p className="font-sans font-normal leading-[1.1] text-[#d01127] text-[13px] tracking-[-0.26px] px-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Stage 1
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-[20px] items-start text-[#000618] mt-[8px]">
                    <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Assessment
                    </h3>
                    <p className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      We review your workflows, EMR usage, operational challenges and define the exact tasks to outsource.
                      <br /><br />
                      <span className="font-medium">Goal:</span> clarity, task mapping, expectations, KPIs.
                    </p>
                  </div>
                </div>

                {/* Stage 2: Talent Selection */}
                <div className="relative backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] p-[40px] rounded-[12px] to-[rgba(80,86,104,0.003)]">
                  {/* Stage Badge */}
                  <div 
                    className="absolute backdrop-blur-[7px] backdrop-filter border-[0.5px] border-[rgba(205,95,108,0.8)] border-solid top-0 left-0 -translate-y-1/2 py-[10px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(162,21,38,0.3)] -ml-[20px]"
                    style={{
                      background: 'linear-gradient(96deg, rgb(213 161 183) 4.35%, rgb(214 206 209) 98.92%)',
                      paddingLeft: '20px',
                      paddingRight: '19px'
                    }}
                  >
                    <p className="font-sans font-normal leading-[1.1] text-[#d01127] text-[13px] tracking-[-0.26px] px-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Stage 2
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-[20px] items-start text-[#000618] mt-[8px]">
                    <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Talent Selection
                    </h3>
                    <p className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      We assign trained specialists aligned with your operational needs: billing, intake, coordination, admin or digital tasks.
                      <br /><br />
                      <span className="font-medium">Goal:</span> match skills, onboarding readiness, HIPAA alignment.
                    </p>
                  </div>
                </div>

                {/* Stage 3: Seamless Integration */}
                <div className="relative backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] p-[40px] rounded-[12px] to-[rgba(80,86,104,0.003)]">
                  {/* Stage Badge */}
                  <div 
                    className="absolute backdrop-blur-[7px] backdrop-filter border-[0.5px] border-[rgba(205,95,108,0.8)] border-solid top-0 left-0 -translate-y-1/2 py-[10px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(162,21,38,0.3)] -ml-[20px]"
                    style={{
                      background: 'linear-gradient(96deg, rgb(213 161 183) 4.35%, rgb(214 206 209) 98.92%)',
                      paddingLeft: '20px',
                      paddingRight: '19px'
                    }}
                  >
                    <p className="font-sans font-normal leading-[1.1] text-[#d01127] text-[13px] tracking-[-0.26px] px-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Stage 3
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-[20px] items-start text-[#000618] mt-[8px]">
                    <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Seamless Integration
                    </h3>
                    <p className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Your remote team works directly inside your systems: EMR, communication tools, schedules, documentation flows, operating like an extension of your in-house staff.
                      <br /><br />
                      <span className="font-medium">Goal:</span> smooth handover, workflow adoption, daily coordination.
                    </p>
                  </div>
                </div>

                {/* Stage 4: Monitoring & Optimization */}
                <div className="relative backdrop-blur-[0px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(208,17,39,0.8)] border-dashed from-[rgba(204,211,234,0.005)] p-[40px] rounded-[12px] to-[rgba(80,86,104,0.003)]">
                  {/* Stage Badge */}
                  <div 
                    className="absolute backdrop-blur-[7px] backdrop-filter border-[0.5px] border-[rgba(205,95,108,0.8)] border-solid top-0 left-0 -translate-y-1/2 py-[10px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(162,21,38,0.3)] -ml-[20px]"
                    style={{
                      background: 'linear-gradient(96deg, rgb(213 161 183) 4.35%, rgb(214 206 209) 98.92%)',
                      paddingLeft: '20px',
                      paddingRight: '19px'
                    }}
                  >
                    <p className="font-sans font-normal leading-[1.1] text-[#d01127] text-[13px] tracking-[-0.26px] px-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Stage 4
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-[20px] items-start text-[#000618] mt-[8px]">
                    <h3 className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Monitoring & Optimization
                    </h3>
                    <p className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      We provide continuous monitoring, reporting, QA checks and performance tracking. As your agency grows, your team scales at any time.
                      <br /><br />
                      <span className="font-medium">Goal:</span> consistency, quality, scalability.
                    </p>
                  </div>
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

        {/* Why This Process Works Section */}
        <section className="relative py-8 lg:py-16 overflow-x-hidden">
          <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
            <TitleBlock 
              label="Why This Process Works"
              title="Simple setup. Fast integration. Measurable results."
              className="-mt-[8px]"
            />
            
            {/* Content Box */}
            <div className="relative backdrop-blur-[5px] backdrop-filter bg-[#e7ecf6] p-[40px] rounded-[12px]">
              <div className="bg-clip-text bg-gradient-to-r font-sans font-normal from-[#d01127] from-[10.333%] leading-[1.2] text-[clamp(20px,2.5vw,33px)] to-[#1e3a8a] tracking-[-0.66px] w-full whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
                <p className="mb-0">Every partnership begins with clarity. Our process ensures that your outsourced team integrates smoothly into your operations, maintains HIPAA-aligned standards and supports your agency with precision and consistency.</p>
                <p className="mb-0">&nbsp;</p>
                <p>We follow a simple, transparent 4-stage model used across all Home Health and Hospice services.</p>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_5px_0px_rgba(27,29,54,0.4)] rounded-[12px]" />
            </div>
          </div>
        </section>

        {/* Contact Section - Includes testimonials */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

