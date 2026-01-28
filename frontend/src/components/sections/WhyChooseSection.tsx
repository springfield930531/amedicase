import type { CSSProperties } from "react";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import { getMediaUrl } from "@/lib/strapi-home";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

const buttonStyle: ExtendedCSSProperties = {
  background: "linear-gradient(180deg, rgba(45, 78, 174, 0.64) 0%, rgba(34, 62, 140, 0.48) 100%)",
  textEdge: "cap",
  leadingTrim: "both",
  fontVariationSettings: "'wdth' 100",
};

const defaultBenefits = [
  "HIPAA-Compliant & Secure Data Handling",
  "Up to 60% Cost Savings vs\nU.S. Operations",
  "Healthcare-trained Teams \nwith U.S. Experience",
  "Dedicated Account Managers",
  "Real-time Communication \n& U.S. Time-Zone Overlap",
];

type WhyChooseSectionProps = {
  data?: any;
};

export function WhyChooseSection({ data }: WhyChooseSectionProps) {
  const label = data?.label || "Why Choose Amedicase";
  const title = data?.title || "Why Home Health Agencies Choose Us";
  const benefits =
    data?.benefits?.map((benefit: any) => benefit?.label).filter(Boolean) ||
    defaultBenefits;
  const ctaLabel = data?.cta?.label || "More About Us";
  const supportImage =
    getMediaUrl(data?.supportImage) || "/images/why-choose-image-figma.png";

  return (
    <section className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 xl:pt-20 pb-[40px] md:pb-16 xl:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0 overflow-visible">
      <div className="relative z-10 w-full overflow-visible">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Section Header - Standardized spacing */}
          <div className="flex flex-col gap-2 items-start mb-[20px] md:mb-12 overflow-visible">
            <p
              className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] min-w-full relative shrink-0 text-[clamp(14px,1.8vw,15px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-[min-content] whitespace-pre-wrap"
              style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </p>
            <h2
              className="font-sans font-semibold min-h-[95px] leading-[1.1] relative shrink-0 text-[#000618] text-[clamp(28px,4vw,33px)] lg:text-[42px] tracking-[-0.66px] w-full md:w-full lg:w-[600px] xl:w-[700px] whitespace-pre-wrap overflow-visible"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {title}
            </h2>
          </div>

          {/* Benefits Card - Refactored with flex, no absolute positioning */}
          <div className="w-full">
            <div className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.075)] rounded-[12px] shrink-0 to-[rgba(84,100,145,0.025)] w-full md:w-full relative">
              {/* Mobile - Flex layout */}
              <div className="md:hidden flex flex-col gap-[clamp(20px,6vw,30px)] px-[clamp(15px,5vw,20px)] py-[clamp(35px,10vw,40px)] w-full">
                {/* Text 1: HIPAA-Compliant */}
                <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(16px,5vw,20px)] tracking-[-0.4px] w-full max-w-[281px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefits[0] || defaultBenefits[0]}
                </p>
                {/* Text 2: Up to 60% */}
                <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(16px,5vw,20px)] tracking-[-0.4px] w-full max-w-[281px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefits[1] || defaultBenefits[1]}
                </p>
                {/* Text 3: Healthcare-trained */}
                <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(16px,5vw,20px)] tracking-[-0.4px] w-full max-w-[281px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefits[2] || defaultBenefits[2]}
                </p>
                {/* Text 4: Dedicated */}
                <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(16px,5vw,20px)] tracking-[-0.4px] w-full max-w-[281px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefits[3] || defaultBenefits[3]}
                </p>
                {/* Text 5: Real-time */}
                <p className="font-sans font-medium leading-[1.2] text-[#0b1737] text-[clamp(16px,5vw,20px)] tracking-[-0.4px] w-full max-w-[281px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {benefits[4] || defaultBenefits[4]}
                </p>
              </div>

              {/* Tablet - Grid layout */}
              <div className="hidden md:block lg:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 w-full">
                {benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#d01127] mt-2 lg:mt-2.5" />
                    <p className="font-sans font-medium text-[clamp(0.875rem,1.6vw,1.125rem)] lg:text-[18px] text-[#0b1737] leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                      {benefit}
                    </p>
                  </div>
                ))}
                </div>
              </div>
            </div>

            {/* CTA Button - Outside card, after card - Mobile - Exact Figma: width 221px, height 54.5px */}
            <div className="md:hidden mt-[20px] md:mt-12">
              <button
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid box-border content-stretch flex from-[rgba(45,78,174,0.64)] gap-[20px] items-center justify-center px-[20px] py-[17px] relative rounded-[8px] shrink-0 to-[rgba(34,62,140,0.48)] hover:opacity-90 transition-opacity w-[221px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {ctaLabel}
                </p>
                <div className="h-[20.505px] relative shrink-0 w-[26px]">
                  <div className="absolute inset-[-2.23%_-0.96%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none" className="w-full h-full">
                      <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" fill="white"/>
                      <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" fill="white"/>
                      <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" stroke="white" strokeWidth="0.5"/>
                      <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" stroke="white" strokeWidth="0.5"/>
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* CTA Button - Tablet */}
            <div className="hidden md:flex lg:hidden mt-8 lg:mt-12 justify-center lg:justify-start">
              <button
                className="inline-flex items-center justify-center gap-5 rounded-[8px] border border-[rgba(50,59,159,0.8)] shadow-[0px_1px_4px_0px_rgba(27,30,79,0.3)] backdrop-blur-[3.777px] px-5 py-[17px] font-sans font-semibold text-[18px] sm:text-[20px] text-[#f1f5ff] leading-[110%] hover:opacity-90 transition-opacity"
                style={buttonStyle}
              >
                {ctaLabel}
                <div className="w-[26px] h-[20px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 27 22">
                    <g>
                      <path d={svgPaths.p3a6ca5f0} fill="white" />
                      <path d={svgPaths.p39f18ef0} fill="white" />
                      <path d={svgPaths.p3a6ca5f0} stroke="white" strokeWidth="0.5" />
                      <path d={svgPaths.p39f18ef0} stroke="white" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Exact Figma Design */}
        <div className="hidden lg:block">
          {/* Section Header */}
          <div className="flex flex-col gap-2 items-start mb-[60px]">
            <p
              className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[20px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a]"
              style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </p>
            <h2
              className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#000618] text-[52px] tracking-[-1.04px] w-full whitespace-pre-wrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {title}
            </h2>
          </div>

          {/* Content Layout - Card left, Image + Button right - Responsive */}
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 xl:gap-0 w-full">
            {/* Benefits Card - Exact Figma: 893px x 480px, padding 60px - Responsive */}
            <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.075)] rounded-[12px] to-[rgba(84,100,145,0.025)] w-full max-w-[893px] xl:w-[893px] min-h-[480px] xl:h-[480px] px-8 md:px-12 xl:px-0 pt-4 md:pt-6 xl:pt-8 pb-8 md:pb-12 xl:pb-[60px]">
              <div className="flex flex-col gap-4 md:gap-5 xl:gap-[0.5rem] items-start text-[#0b1737] xl:pl-[10px]">
                {benefits.map((benefit: string, index: number) => (
                  <p key={index} className="font-sans font-medium leading-[1.2] text-[clamp(20px,3vw,33px)] text-blue-900 tracking-[-0.66px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Image + Button - Responsive */}
            <div className="flex flex-col gap-6 xl:gap-[24px] items-center xl:items-start w-full max-w-[403px] xl:w-[403px]">
              {/* Image - Exact Figma: 403px x 314px - Responsive */}
              <div className="relative w-full max-w-[403px] xl:w-[403px] aspect-[403/314] xl:h-[314px] rounded-[12px] overflow-hidden">
                <img
                  src={supportImage}
                  alt="Why choose Amedicase"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(30,58,138,0.5)] mix-blend-hard-light" />
              </div>

              {/* Button - Exact Figma: 403px x 142px - Responsive */}
              <button
                className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid from-[rgba(45,78,174,0.64)] rounded-[12px] to-[rgba(34,62,140,0.48)] w-full max-w-[403px] xl:w-[403px] h-[142px] flex flex-col items-center justify-center gap-[20px] p-[20px] hover:opacity-90 transition-opacity"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="font-sans font-semibold leading-[1.2] text-[#f1f5ff] text-[clamp(24px,3vw,33px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {ctaLabel}
                </p>
                <div className="w-full h-full max-w-[40px] max-h-[32px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 27 22">
                    <g>
                      <path d={svgPaths.p3a6ca5f0} fill="white" />
                      <path d={svgPaths.p39f18ef0} fill="white" />
                      <path d={svgPaths.p3a6ca5f0} stroke="white" strokeWidth="0.5" />
                      <path d={svgPaths.p39f18ef0} stroke="white" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
