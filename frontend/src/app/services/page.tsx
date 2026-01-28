import type { CSSProperties } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";

const heroServicesImage = "/images/services/hero-services.jpg";
const billingFinanceImage = "/images/services/billing-finance-new.jpg";
const patientIntakeImage = "/images/services/patient-intake-correct.jpg";
const operationsAdminImage = "/images/services/operations-admin-correct.jpg";
const digitalGrowthImage = "/images/services/digital-growth-new.jpg";
const weDeliverQualityImage = "/images/services/we-deliver-quality.jpg";
const arrowIcon = "/images/services/arrow-icon.svg";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute top-[572px] left-0 w-[516px] max-w-[100vw] h-[1300px] opacity-80 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full" fill="none" viewBox="0 0 517 1300">
          <path d={svgPaths.p2ff94480} fill="#7F92C7" opacity="0.5" />
        </svg>
      </div>

      <Header />

      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Block 1 - Services - Responsive Figma layout */}
        <section className="relative pt-[77px] pb-8 lg:pb-16 overflow-x-hidden">
          <div className="mx-auto max-w-[1440px] overflow-x-hidden">
            {/* Mobile Layout - Full width image */}
            <div className="relative h-[562px] w-full lg:hidden overflow-hidden">
              {/* Badge - Top left corner - Exact Figma: x=20, y=0, w=103, h=29 */}
              <div className="absolute top-0 left-5 bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] z-10" />

              {/* Label "SeRvices" - Exact Figma: x=40, y=10 */}
              <p
                className="absolute left-[40px] top-[10px] font-['Instrument_Sans'] font-medium text-[#d01127] text-[13px] uppercase z-20"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                SeRvices
              </p>

              {/* Hero Image with mask overlay - Full width edge to edge */}
              <div className="absolute h-[562px] left-0 top-0 w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={heroServicesImage}
                    alt="Healthcare professionals working"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      height: "113.88%",
                      left: "-63.06%",
                      top: "-13.88%",
                      width: "266.63%",
                      maxWidth: "none",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                </div>
                <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
              </div>

              {/* Blue Gradient Card - Equal spacing on both sides */}
              <div className="absolute backdrop-blur-[10px] bg-gradient-to-b from-[rgba(183,198,243,0.12)] to-[rgba(84,100,145,0.04)] rounded-[12px] border border-[rgba(158,162,203,0.8)] h-[503px] left-5 right-5 top-[39px]">
                {/* Content inside card - Exact Figma positioning */}
                <div className="relative h-full">
                  {/* Title */}
                  <h1
                    className="absolute font-['Instrument_Sans'] font-semibold text-[clamp(28px,4vw,33px)] text-[#1c398e] leading-[1.1] tracking-[-0.66px] left-[20px] top-[97px] w-[calc(100%-40px)] max-w-[292px] whitespace-pre-wrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    End-to-End Outsourcing Solutions for Home Health Agencies
                  </h1>

                  {/* Description */}
                  <p
                    className="absolute font-['Instrument_Sans'] font-normal text-[clamp(12px,1.8vw,13px)] text-[#1c398e] leading-[1.4] tracking-[-0.26px] left-[20px] top-[269px] w-[calc(100%-40px)] max-w-[292px] whitespace-pre-wrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.
                  </p>

                  {/* Button */}
                  <button
                    className="absolute backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] border border-[rgba(50,59,159,0.8)] h-[45px] left-[20px] top-[380px] w-[calc(100%-40px)] max-w-[239px] font-['Instrument_Sans'] font-semibold text-[clamp(16px,2.5vw,18px)] text-[#f1f5ff] tracking-[-0.36px] hover:opacity-90 transition-opacity flex items-center justify-center capitalize"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Book a Free Consultation
                  </button>

                  {/* Download Link */}
                  <p
                    className="absolute font-['Instrument_Sans'] font-normal text-[#d01127] text-[clamp(12px,1.8vw,13px)] underline tracking-[-0.26px] right-[20px] top-[474px] text-right mb-[5px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      textDecorationSkipInk: "none",
                      textUnderlinePosition: "from-font",
                    }}
                  >
                    Download Service Overview
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Responsive */}
            <div className="hidden lg:block relative">
              <div className="relative max-w-4xl mx-auto">
                {/* Badge - Desktop */}
                <div className="absolute top-0 left-0 bg-[#f1f5ff] h-[29px] rounded-bl-[8px] rounded-br-[8px] w-[103px] z-10" />

                {/* Label "SeRvices" - Desktop */}
                <p
                  className="absolute left-[20px] top-[10px] font-['Instrument_Sans'] font-medium text-[#d01127] text-[13px] uppercase z-20"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  SeRvices
                </p>

                {/* Hero Image */}
                <div className="relative h-[750px] overflow-hidden rounded-[12px]">
                  <img
                    src={heroServicesImage}
                    alt="Healthcare professionals working"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bg-[rgba(240,242,248,0.2)] inset-0" />
                </div>

                {/* Frosted Card */}
                <div className="absolute inset-0 flex items-center">
                  <div className="ml-[60px] w-[1320px] max-w-[calc(100%-120px)] backdrop-blur-[20px] bg-gradient-to-b border border-[rgba(158,162,203,0.8)] from-[rgba(214,222,243,0.32)] rounded-[12px] to-[rgba(143,149,167,0.16)] px-[40px] py-[60px] flex flex-col gap-[69px] min-h-[510px]">
                    <div className="flex flex-col gap-[60px] items-start leading-[1.2] text-blue-900 w-full whitespace-pre-wrap">
                      <h1
                        className="font-['Instrument_Sans'] font-semibold text-[52px] tracking-[-1.04px] w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        End-to-End Outsourcing Solutions<br />
                        for Home Health Agencies
                      </h1>
                      <p
                        className="font-['Instrument_Sans'] font-normal text-[33px] tracking-[-0.66px] w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        From patient intake to billing and operations — Amedicase helps<br />
                        U.S. home health providers streamline workflows, cut costs, and focus on patient care.
                      </p>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start w-[419px]">
                      <button
                        className="backdrop-blur-[3.777px] bg-gradient-to-b border border-[rgba(50,59,159,0.8)] from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] p-[20px] w-full hover:opacity-90 transition-opacity flex items-center justify-center"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="capitalize font-['Instrument_Sans'] font-semibold leading-[1.1] text-[#f1f5ff] text-[33px] text-center tracking-[-0.66px] whitespace-nowrap">
                          Book a Free Consultation
                        </p>
                      </button>
                      <p
                        className="font-['Instrument_Sans'] font-normal leading-[1.4] text-[#d01127] text-[20px] tracking-[-0.4px] underline w-full whitespace-pre-wrap"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                          textDecorationSkipInk: "none",
                          textUnderlinePosition: "from-font",
                        }}
                      >
                        Download Service Overview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Pillars */}
        <section className="relative py-10 md:py-16 overflow-x-hidden bg-[#f1f5ff]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
            <p
              className="font-['Instrument_Sans'] font-medium text-[#d01127] text-[13px] uppercase tracking-[0.65px] mb-2"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              OUR SERVICE PILLARS
            </p>
            <h2
              className="font-['Instrument_Sans'] font-semibold text-[#0b1737] text-[26px] md:text-[33px] tracking-[-0.66px] mb-8"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Built to Support Every Stage of Care Delivery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px]">
              {/* Billing & Finance */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[20px] py-[20px]">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <img
                      src={billingFinanceImage}
                      alt="Billing & Finance"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ height: "121.49%", left: 0, top: "-17.42%", width: "100%" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start">
                      <h3
                        className="font-['Instrument_Sans'] font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Billing & Finance
                      </h3>
                      <div
                        className="font-['Instrument_Sans'] font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="mb-0">Accurate billing.</p>
                        <p>Faster payments.</p>
                      </div>
                    </div>
                    <div className="flex gap-[10px] items-center w-full">
                      <p
                        className="font-['Instrument_Sans'] font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Learn More
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <img src={arrowIcon} alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Intake & Support */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[20px] py-[20px]">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <img
                      src={patientIntakeImage}
                      alt="Patient Intake & Support"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ height: "121.49%", left: 0, top: "-17.42%", width: "100%" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start">
                      <h3
                        className="font-['Instrument_Sans'] font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Patient Intake & Support
                      </h3>
                      <div
                        className="font-['Instrument_Sans'] font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="mb-0">Accurate intake.</p>
                        <p>Faster admissions.</p>
                      </div>
                    </div>
                    <div className="flex gap-[10px] items-center w-full">
                      <p
                        className="font-['Instrument_Sans'] font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Learn More
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <img src={arrowIcon} alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operations & Admin Support */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[20px] py-[20px]">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <img
                      src={operationsAdminImage}
                      alt="Operations & Admin Support"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ height: "121.49%", left: 0, top: "-17.42%", width: "100%" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start">
                      <h3
                        className="font-['Instrument_Sans'] font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Operations & Admin Support
                      </h3>
                      <div
                        className="font-['Instrument_Sans'] font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="mb-0">Efficient workflows.</p>
                        <p>Smooth operations.</p>
                      </div>
                    </div>
                    <div className="flex gap-[10px] items-center w-full">
                      <p
                        className="font-['Instrument_Sans'] font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Learn More
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <img src={arrowIcon} alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Presence & Growth */}
              <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
                <div className="flex gap-[20px] items-start pl-[20px] pr-[20px] py-[20px]">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <img
                      src={digitalGrowthImage}
                      alt="Digital Presence & Growth"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ height: "121.49%", left: 0, top: "-17.42%", width: "100%" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start">
                      <h3
                        className="font-['Instrument_Sans'] font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Digital Presence & Growth
                      </h3>
                      <div
                        className="font-['Instrument_Sans'] font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="mb-0">Modern outreach.</p>
                        <p>Stronger engagement.</p>
                      </div>
                    </div>
                    <div className="flex gap-[10px] items-center w-full">
                      <p
                        className="font-['Instrument_Sans'] font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Learn More
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <img src={arrowIcon} alt="Arrow" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="relative py-10 md:py-16 overflow-x-hidden bg-[#f1f5ff]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
            <p
              className="font-['Instrument_Sans'] font-medium text-[#d01127] text-[13px] uppercase tracking-[0.65px] mb-2"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              HOW WE HELP HOME HEALTH AGENCIES
            </p>
            <h2
              className="font-['Instrument_Sans'] font-semibold text-[#0b1737] text-[26px] md:text-[33px] tracking-[-0.66px] mb-8 max-w-[952px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Designed to Help You Operate Efficiently and Scale with Confidence.
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-[10px]">
                <div className="bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-[86px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                <p
                  className="font-['Instrument_Sans'] font-medium leading-[1.2] ml-[-32px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Reduce Costs up to 60% without compromising HIPAA compliance.
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <div className="bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-[86px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                <p
                  className="font-['Instrument_Sans'] font-medium leading-[1.2] ml-[-32px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Focus on Patient Care. Let us handle admin load.
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <div className="bg-gradient-to-b from-[rgba(204,211,234,0.02)] to-[rgba(80,86,104,0.01)] rounded-[10.667px] border-[0.667px] border-[rgba(99,103,146,0.5)] border-solid w-[30px] h-[86px] shadow-[0px_2.667px_5.333px_0px_rgba(114,116,146,0.3)] flex-shrink-0" />
                <p
                  className="font-['Instrument_Sans'] font-medium leading-[1.2] ml-[-32px] mt-[41px] mb-[3px] text-[clamp(19px,2.5vw,23px)] lg:text-[33px] text-blue-900 tracking-[-0.4px] lg:tracking-[-0.66px] flex-1"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Scale Seamlessly. Expand your team as your caseload grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* We Deliver Quality */}
        <section className="relative py-10 md:py-16 overflow-x-hidden bg-[#f1f5ff]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
            <div className="relative h-[380px] md:h-[520px] lg:h-[630px] w-full rounded-[12px] overflow-hidden">
              <img
                src={weDeliverQualityImage}
                alt="We deliver quality"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bg-[rgba(30,58,138,0.6)] inset-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="font-['Instrument_Sans'] font-medium leading-[1.1] text-[#f1f5ff] text-[32px] md:text-[52px] text-center tracking-[-1.04px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  We deliver quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-10 md:py-16 overflow-x-hidden bg-[#f1f5ff]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
            <p
              className="font-['Instrument_Sans'] font-medium text-[#d01127] text-[13px] uppercase tracking-[0.65px] mb-2"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              HOW IT WORKS
            </p>
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[116px] items-center lg:items-start">
              <div className="relative w-full max-w-[320px] lg:max-w-none lg:size-[456px] aspect-square lg:aspect-auto">
                <img alt="How It Works" className="block max-w-none size-full" src="/images/services/how-it-works-vector.svg" />
              </div>
              <div className="flex flex-col gap-[30px] lg:gap-[40px] items-start w-full lg:w-[693px]">
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p
                    className="font-['Instrument_Sans'] font-medium leading-[1.2] text-[#0b1737] text-[28px] lg:text-[33px] tracking-[-0.66px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Discovery & Planning
                  </p>
                  <p
                    className="font-['Instrument_Sans'] font-normal leading-[1.4] text-[#2b4691] text-[16px] lg:text-[20px] tracking-[-0.4px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    We identify your workflow needs and define clear KPIs.
                  </p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p
                    className="font-['Instrument_Sans'] font-medium leading-[1.2] text-[#0b1737] text-[28px] lg:text-[33px] tracking-[-0.66px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Onboarding & Training
                  </p>
                  <p
                    className="font-['Instrument_Sans'] font-normal leading-[1.4] text-[#2b4691] text-[16px] lg:text-[20px] tracking-[-0.4px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Your dedicated team integrates with your workflows and processes.
                  </p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p
                    className="font-['Instrument_Sans'] font-medium leading-[1.2] text-[#0b1737] text-[28px] lg:text-[33px] tracking-[-0.66px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Execution & Support
                  </p>
                  <p
                    className="font-['Instrument_Sans'] font-normal leading-[1.4] text-[#2b4691] text-[16px] lg:text-[20px] tracking-[-0.4px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    We run day-to-day operations, support, and QA reviews.
                  </p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p
                    className="font-['Instrument_Sans'] font-medium leading-[1.2] text-[#0b1737] text-[28px] lg:text-[33px] tracking-[-0.66px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Ongoing Optimization
                  </p>
                  <p
                    className="font-['Instrument_Sans'] font-normal leading-[1.4] text-[#2b4691] text-[16px] lg:text-[20px] tracking-[-0.4px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Continual improvement cycles to keep quality high and costs low.
                  </p>
                </div>
                <button
                  className="backdrop-blur-[3.777px] bg-gradient-to-b border border-[rgba(50,59,159,0.8)] from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[8px] px-[20px] py-[17px] text-[#f1f5ff] font-['Instrument_Sans'] font-semibold text-[20px] tracking-[-0.4px] w-[280px] text-center"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Start Your Free Discovery Call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="relative py-10 md:py-16 overflow-x-hidden bg-[#f1f5ff]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
            <p
              className="font-['Instrument_Sans'] font-medium text-[#d01127] text-[13px] uppercase tracking-[0.65px] mb-2"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              WHY CHOOSE AMEDICASE
            </p>
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] items-center">
              <div className="relative w-full lg:w-[495px] rounded-[12px] overflow-clip flex-shrink-0">
                <div className="absolute inset-0 bg-[#eef3ff] rounded-[12px]">
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_1px_rgba(30,58,138,0.4)]" />
                </div>
                <div className="relative flex flex-col gap-[20px] items-center px-[20px] py-[20px] w-full">
                  <p className="font-['Instrument_Sans'] font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    HIPAA-Compliant &<br />
                    Secure Data Handling
                  </p>
                  <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                    <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                      <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                    </div>
                  </div>
                  <div className="font-['Instrument_Sans'] font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="mb-0">Up to 60% Cost Savings</p>
                    <p>vs. U.S. Operations</p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                    <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                      <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                    </div>
                  </div>
                  <p className="font-['Instrument_Sans'] font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Dedicated Account<br />
                    Managers
                  </p>
                  <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                    <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                      <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                    </div>
                  </div>
                  <p className="font-['Instrument_Sans'] font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Healthcare-trained Teams<br />
                    with U.S. Experience
                  </p>
                  <div className="h-0 relative shrink-0 w-full max-w-[455px]">
                    <div className="absolute bottom-[-1.5px] left-0 right-0 top-[-1.5px]">
                      <img alt="Separator" className="block max-w-none size-full" src="/images/services/separator-vector.svg" />
                    </div>
                  </div>
                  <p className="font-['Instrument_Sans'] font-medium leading-[1.4] text-[#0b1737] text-[20px] md:text-[33px] text-center tracking-[-0.4px] md:tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Real-time Communication<br />
                    & U.S. Time-Zone Overlap
                  </p>
                </div>
              </div>

              <div className="relative shrink-0 w-full lg:w-[765px] aspect-[4/3] lg:aspect-auto">
                <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                    <img alt="Why Choose Amedicase" className="absolute h-full left-[-21.18%] max-w-none top-0 w-[147.36%]" src="/images/services/office-documents-filing-cabinet.jpg" />
                  </div>
                  <div className="absolute bg-[rgba(30,58,138,0.2)] inset-0 mix-blend-hard-light rounded-[12px]" />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-[-0.27%_-0.52%_-0.8%_-0.52%]">
                    <img alt="Subtract" className="block max-w-none size-full" src="/images/services/subtract-overlay.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
