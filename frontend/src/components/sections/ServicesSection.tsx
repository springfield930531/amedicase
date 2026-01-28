import type { CSSProperties } from "react";
import Link from "next/link";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

const gradientLabelStyle: ExtendedCSSProperties = {
  background: "linear-gradient(90deg, #D01127 0%, #1E3A8A 20%, #1E3A8A 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textEdge: "cap",
  leadingTrim: "both",
  fontVariationSettings: "'wdth' 100",
};

const cardBaseClass =
  "rounded-[12px] border border-[rgba(99,103,146,0.8)] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)]";

const defaultServices = [
  {
    title: "Customer\nSupport",
    description: "Patient calls,\nscheduling, follow-ups,\npre-visit coordination.",
  },
  {
    title: "Accounting\n& Finance",
    description: "Billing, payroll,\nclaims reconciliation.",
  },
  {
    title: "QuickBooks\nsupport",
    description: "Back Office & Administration.",
  },
  {
    title: "Recruitment,\nCredentialing",
    description: "HR, Documentation,\ndata entry.",
  },
  {
    title: "Creative &\nDevelopment",
    description: "Medical website maintenance, \npatient form design, \nEMR integrations.",
  },
];

type ServicesSectionProps = {
  data?: any;
};

export function ServicesSection({ data }: ServicesSectionProps) {
  const label = data?.label || "Our Outsourcing Solutions";
  const services = data?.services?.length ? data.services : defaultServices;
  const ctaLabel = data?.cta?.label || "Explore All Services";
  const ctaUrl = data?.cta?.url || "/services";

  return (
    <section id="services" className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 xl:-mt-[50px] xl:pt-20 pb-[40px] md:pb-16 xl:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0">
      <div className="relative z-10">
        {/* Services Section - Mobile - Aligned left with spacing */}
        <div className="md:hidden w-full">
          {/* Section Header - Left aligned */}
          <div className="flex flex-col gap-2 items-start mb-[24px] md:mb-12">
            <p
              className="font-sans font-medium uppercase text-[clamp(14px,1.8vw,15px)] w-full whitespace-pre-wrap text-left"
              style={gradientLabelStyle}
            >
              {label}
            </p>
            
            {/* Services Container - Responsive Grid */}
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                {/* Card 1: Customer Support */}
                <div className={`${cardBaseClass} flex flex-col gap-3 p-4 sm:p-5 lg:p-6 text-center`}>
                  <p className="font-sans font-medium text-[#0b1737] text-base sm:text-lg leading-tight tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[0]?.title || defaultServices[0].title}
                  </p>
                  <p className="font-sans font-normal text-[#0b1737] text-sm leading-tight tracking-[-0.26px] whitespace-pre-line break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[0]?.description || defaultServices[0].description}
                  </p>
                </div>

                {/* Card 2: Accounting & Finance */}
                <div className={`${cardBaseClass} flex flex-col items-center justify-center gap-3 p-4 sm:p-5 lg:p-6 text-center`}>
                  <p className="font-sans font-medium text-[#0b1737] text-base sm:text-lg leading-tight tracking-[-0.4px] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[1]?.title || defaultServices[1].title}
                  </p>
                  <p className="font-sans font-normal text-[#0b1737] text-sm leading-tight tracking-[-0.26px] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[1]?.description || defaultServices[1].description}
                  </p>
                </div>

                {/* Card 3: QuickBooks support */}
                <div className={`${cardBaseClass} flex flex-col gap-3 p-4 sm:p-5 lg:p-6 text-center`}>
                  <p className="font-sans font-medium text-[#0b1737] text-base sm:text-lg leading-tight tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[2]?.title || defaultServices[2].title}
                  </p>
                  <p className="font-sans font-normal text-[#0b1737] text-sm leading-tight tracking-[-0.26px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[2]?.description || defaultServices[2].description}
                  </p>
                </div>

                {/* Card 4: Recruitment, Credentialing */}
                <div className={`${cardBaseClass} flex flex-col items-center justify-center gap-3 p-4 sm:p-5 lg:p-6 text-center`}>
                  <p className="font-sans font-medium text-[#0b1737] text-base sm:text-lg leading-tight tracking-[-0.4px] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[3]?.title || defaultServices[3].title}
                  </p>
                  <p className="font-sans font-normal text-[#0b1737] text-sm leading-tight tracking-[-0.26px] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[3]?.description || defaultServices[3].description}
                  </p>
                </div>

                {/* Card 5: Creative & Development */}
                <div className={`${cardBaseClass} flex flex-col gap-3 p-4 sm:p-5 lg:p-6 text-center`}>
                  <p className="font-sans font-medium text-[#0b1737] text-base sm:text-lg leading-tight tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[4]?.title || defaultServices[4].title}
                  </p>
                  <p className="font-sans font-normal text-[#0b1737] text-sm leading-tight tracking-[-0.26px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {services[4]?.description || defaultServices[4].description}
                  </p>
                </div>

                {/* CTA Card - Explore All Services - Refactored with flex */}
                <Link 
                  href={ctaUrl}
                  data-discover="true"
                  className="md:col-span-2 lg:col-span-1 backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(114,49,61,0.8)] border-solid from-[rgba(174,45,66,0.64)] rounded-[12px] to-[rgba(34,62,140,0.48)] p-[11px] hover:opacity-90 transition-opacity flex flex-col items-center justify-center gap-3 min-h-[120px]"
                >
                  {/* Text */}
                  <p className="font-sans font-semibold leading-[1.2] text-[#f1f5ff] text-[20px] tracking-[-0.4px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Explore <br aria-hidden="true" />
                    All<br aria-hidden="true" />
                    Services
                  </p>
                  {/* Arrow Icon */}
                  <div className="w-[26px] h-[20px] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none" className="w-full h-full">
                      <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" fill="white"/>
                      <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" fill="white"/>
                      <path d="M16.6204 1.76403C16.6761 1.37425 16.7408 1.16217 17.0163 0.457581L25.8974 9.82042C26.3675 10.2905 26.3675 11.0525 25.8974 11.5225L18.7187 19.183C18.2486 19.6531 17.4864 19.6531 17.0163 19.183C16.5463 18.7129 16.5463 18.4322 17.0163 17.9621L22.6218 11.8752L1.45371 11.8752C0.788919 11.8752 0.25 11.3363 0.25 10.6715C0.25 10.0067 0.788918 9.46777 1.45371 9.46777L22.6218 9.46777L17.0163 3.8623C16.6204 3.32885 16.5001 2.60662 16.6204 1.76403Z" stroke="white" strokeWidth="0.5"/>
                      <path d="M16.6204 19.6559C16.6761 20.0457 16.7408 20.2578 17.0163 20.9623L25.8974 11.5995C26.3675 11.1294 26.3675 10.3675 25.8974 9.89739L18.7187 2.23691C18.2486 1.76684 17.4864 1.76684 17.0163 2.23691C16.5463 2.70699 16.7522 3.46062 17.2223 3.9307L22.7593 9.54474H1.45371C0.788919 9.54474 0.25 10.0837 0.25 10.7484C0.25 11.4132 0.788918 11.9522 1.45371 11.9522L22.7593 11.7548L17.0163 17.5576C16.6204 18.0911 16.5001 18.8133 16.6204 19.6559Z" stroke="white" strokeWidth="0.5"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Tablet */}
        <div className="hidden md:block lg:hidden">
          {/* Section Header */}
          <div className="flex flex-col gap-2 items-start mb-8 md:mb-12">
            <p
              className="font-sans font-medium uppercase text-[15px] w-full whitespace-pre-wrap"
              style={gradientLabelStyle}
            >
              {label}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${cardBaseClass} p-6 md:p-8 lg:p-10 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow w-full`}
              >
                <h3 className="font-sans font-medium text-[clamp(18px,2.5vw,20px)] lg:text-[22px] text-[#0b1737] leading-[1.1] tracking-[-0.02em] mb-4 lg:mb-5 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="font-sans font-normal text-[clamp(12px,1.8vw,13px)] lg:text-[15px] text-[#0b1737] leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            ))}

            <Link 
              href={ctaUrl}
              className="backdrop-blur-md bg-gradient-to-b from-[rgba(174,45,66,0.64)] to-[rgba(34,62,140,0.48)] rounded-xl p-6 md:p-8 lg:p-10 border border-[rgba(114,49,61,0.8)] shadow-[0px_2px_4px_0px_rgba(68,70,102,0.3)] min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer w-full"
            >
              <div className="flex items-center gap-3">
                <p className="font-sans font-semibold text-[clamp(18px,2.5vw,20px)] text-[#f1f5ff] leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                  {ctaLabel}
                </p>
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
              </div>
            </Link>
          </div>
        </div>

        {/* Services Grid - Desktop - Exact Figma Layout */}
        <div className="hidden lg:block">
          {/* Section Header */}
          <div className="flex flex-col gap-2 items-start mb-[60px]">
            <p
              className="font-sans font-medium uppercase text-[20px]"
              style={gradientLabelStyle}
            >
              {label}
            </p>
          </div>
          
          {/* Grid - 3 columns, 2 rows - Exact Figma spacing: gap-[43px_55px] (row_col) - Responsive - All cards same height */}
          <div className="flex flex-wrap gap-[43px_55px] w-full justify-start items-stretch">
            {/* Card 1: Customer Support - Responsive with equal height */}
            <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] from-[rgba(204,211,234,0.25)] to-[rgba(132,139,161,0.125)] rounded-[12px] w-full max-w-[403px] lg:w-[403px] min-h-[142px] flex flex-col shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)]">
              <div className="flex flex-col gap-[30px] items-center justify-center flex-1 px-[20px] py-[5px] text-[#0b1737] text-center">
                <h3 className="font-sans font-medium leading-[1.1] text-[33px] tracking-[-0.66px] w-full pt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[0]?.title || defaultServices[0].title}
                </h3>
                <p className="font-sans font-normal leading-[1.1] text-[20px] tracking-[-0.4px] w-full whitespace-pre-line pb-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[0]?.description || defaultServices[0].description}
                </p>
              </div>
            </div>

            {/* Card 2: Accounting & Finance - Responsive with equal height */}
            <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] from-[rgba(204,211,234,0.25)] to-[rgba(132,139,161,0.125)] rounded-[12px] w-full max-w-[403px] lg:w-[403px] min-h-[142px] flex flex-col shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)]">
              <div className="flex flex-col gap-[30px] items-center justify-center flex-1 px-[20px] py-[5px] text-[#0b1737] text-center">
                <h3 className="font-sans font-medium leading-[1.1] text-[33px] tracking-[-0.66px] w-full pt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[1]?.title || defaultServices[1].title}
                </h3>
                <p className="font-sans font-normal leading-[1.1] text-[20px] tracking-[-0.4px] w-full whitespace-pre-line pb-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[1]?.description || defaultServices[1].description}
                </p>
              </div>
            </div>

            {/* Card 3: Recruitment, Credentialing - Responsive with equal height */}
            <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] from-[rgba(204,211,234,0.25)] to-[rgba(132,139,161,0.125)] rounded-[12px] w-full max-w-[403px] lg:w-[403px] min-h-[142px] flex flex-col shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)]">
              <div className="flex flex-col gap-[26px] items-center justify-center flex-1 px-[20px] py-[5px] text-[#0b1737] text-center">
                <h3 className="font-sans font-medium leading-[1.1] text-[33px] tracking-[-0.66px] w-full pt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[3]?.title || defaultServices[3].title}
                </h3>
                <p className="font-sans font-normal leading-[1.1] text-[20px] tracking-[-0.4px] w-full whitespace-pre-line pb-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[3]?.description || defaultServices[3].description}
                </p>
              </div>
            </div>

            {/* Card 4: QuickBooks support - Responsive with equal height */}
            <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] from-[rgba(204,211,234,0.25)] to-[rgba(132,139,161,0.125)] rounded-[12px] w-full max-w-[403px] lg:w-[403px] min-h-[142px] flex flex-col shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)]">
              <div className="flex flex-col gap-[30px] items-center justify-center flex-1 px-[20px] py-[5px] text-[#0b1737] text-center">
                <h3 className="font-sans font-medium leading-[1.1] text-[33px] tracking-[-0.66px] w-full pt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[2]?.title || defaultServices[2].title}
                </h3>
                <p className="font-sans font-normal leading-[1.1] text-[20px] tracking-[-0.4px] w-full whitespace-pre-line pb-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[2]?.description || defaultServices[2].description}
                </p>
              </div>
            </div>

            {/* Card 5: Creative & Development - Responsive with equal height */}
            <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] from-[rgba(204,211,234,0.25)] to-[rgba(132,139,161,0.125)] rounded-[12px] w-full max-w-[403px] lg:w-[403px] min-h-[142px] flex flex-col shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)]">
              <div className="flex flex-col gap-[30px] items-center justify-center flex-1 px-[20px] py-[5px] text-[#0b1737] text-center">
                <h3 className="font-sans font-medium leading-[1.1] text-[33px] tracking-[-0.66px] w-full pt-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[4]?.title || defaultServices[4].title}
                </h3>
                <p className="font-sans font-normal leading-[1.1] text-[20px] tracking-[-0.4px] w-full whitespace-pre-line pb-[5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {services[4]?.description || defaultServices[4].description}
                </p>
              </div>
            </div>

            {/* Explore All Services Card - Responsive with equal height */}
            <Link 
              href={ctaUrl}
              className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-b border border-[rgba(114,49,61,0.8)] from-[rgba(174,45,66,0.64)] to-[rgba(34,62,140,0.48)] rounded-[12px] w-full max-w-[403px] lg:w-[403px] min-h-[142px] flex flex-col items-center justify-center gap-[20px] py-[5px] px-[20px] hover:opacity-90 transition-opacity cursor-pointer"
            >
              <p className="font-sans font-semibold leading-[1.2] text-[#f1f5ff] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
