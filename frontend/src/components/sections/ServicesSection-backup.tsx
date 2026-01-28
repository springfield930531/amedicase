import type { CSSProperties } from "react";
import Link from "next/link";
/* eslint-disable */
// @ts-nocheck

import svgPaths from "../../lib/imports/svg-ie2km5jka3";

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

const services = [
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

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#f1f5ff] overflow-hidden">
      {/* Background Decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none lg:left-[-10%] lg:translate-x-0"
        style={{ width: "752.353px", height: "351.751px" }}
      >
        <svg className="block w-full h-full" fill="none" viewBox="0 0 360 352">
          <path
            d="M470.367 342.372C470.367 342.372 339.142 47.835 202.196 8.70441C99.3162 -20.7157 -2.12778 32.8432 -32.3238 45.4369C-62.5197 58.0306 -247.003 159.617 -281.986 190.259C-281.986 190.259 -108.381 112.359 -26.7296 93.239C107.903 61.7007 162.178 100.672 264.17 248.632C313.609 320.284 327.022 374.27 470.367 342.372Z"
            fill="#7F92C7"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Services Section - Mobile - Exact Figma layout with absolute positioning */}
        <div className="lg:hidden w-[320px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col gap-[15px] items-start mb-0">
            <p
              className="font-sans font-medium uppercase text-[13px] w-full whitespace-pre-wrap"
              style={gradientLabelStyle}
            >
              Our Outsourcing Solutions
            </p>
            
            {/* Services Container - Absolute positioned cards */}
            <div className="relative h-[466px] w-full">
              {/* Card 1: Customer Support - Grid layout as in Figma */}
              <div
                className={`${cardBaseClass} absolute h-[149px] left-0 top-0 w-[155px] grid grid-cols-1 grid-rows-2 gap-[10px] px-[12px] py-[26px] text-center`}
              >
                <p
                  className="col-[1] row-[1] font-sans font-medium text-[#0b1737] text-[20px] leading-[1.1] tracking-[-0.4px] justify-self-center self-start"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Customer<br />Support
                </p>
                <p
                  className="col-[1] row-[2] font-sans font-normal text-[#0b1737] text-[13px] leading-[1.2] tracking-[-0.26px] justify-self-center self-start"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Patient calls,<br />scheduling, follow-ups,<br />pre-visit coordination.
                </p>
              </div>

              {/* Card 2: Accounting & Finance */}
              <div
                className={`${cardBaseClass} absolute h-[149px] left-[165px] top-0 w-[155px] flex flex-col items-center justify-center gap-[15px] px-[12px] py-[33px] text-center`}
              >
                <p
                  className="font-sans font-medium text-[#0b1737] text-[20px] leading-[1.1] tracking-[-0.4px] whitespace-pre-line"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Accounting<br />& Finance
                </p>
                <p
                  className="font-sans font-normal text-[#0b1737] text-[13px] leading-[1.2] tracking-[-0.26px] whitespace-pre-line"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Billing, payroll,<br />claims reconciliation.
                </p>
              </div>

              {/* Card 3: QuickBooks support - Grid layout as in Figma */}
              <div
                className={`${cardBaseClass} absolute h-[149px] left-0 top-[158.33px] w-[155px] grid grid-cols-1 grid-rows-2 gap-[14px] px-[13px] py-[26px] text-center`}
              >
                <p
                  className="col-[1] row-[1] font-sans font-medium text-[#0b1737] text-[20px] leading-[1.1] tracking-[-0.4px] justify-self-center self-start"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  QuickBooks<br />support
                </p>
                <p
                  className="col-[1] row-[2] font-sans font-normal text-[#0b1737] text-[13px] leading-[1.2] tracking-[-0.26px] w-[131px] whitespace-pre-wrap justify-self-center self-start"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Back Office & Administration.
                </p>
              </div>

              {/* Card 4: Recruitment, Credentialing */}
              <div
                className={`${cardBaseClass} absolute h-[149px] left-[165px] top-[158.33px] w-[155px] flex flex-col items-center justify-center gap-[15px] px-[12px] py-[28px] text-center`}
              >
                <p
                  className="font-sans font-medium text-[#0b1737] text-[20px] leading-[1.1] tracking-[-0.4px] whitespace-pre-line"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Recruitment,<br />Credentialing
                </p>
                <p
                  className="font-sans font-normal text-[#0b1737] text-[13px] leading-[1.2] tracking-[-0.26px] whitespace-pre-line"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  HR, Documentation,<br />data entry.
                </p>
              </div>

              {/* Card 5: Creative & Development - Grid layout as in Figma */}
              <div
                className={`${cardBaseClass} absolute h-[149px] left-0 top-[316.67px] w-[155px] grid grid-cols-1 grid-rows-2 gap-[10px] px-[12px] py-[22px] text-center`}
              >
                <p
                  className="col-[1] row-[1] font-sans font-medium text-[#0b1737] text-[20px] leading-[1.1] tracking-[-0.4px] self-start"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Creative &<br />Development
                </p>
                <p
                  className="col-[1] row-[2] font-sans font-normal text-[#0b1737] text-[13px] leading-[1.2] tracking-[-0.26px] w-[128px] whitespace-pre-wrap self-start"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Medical website maintenance,<br />patient form design,<br />EMR integrations.
                </p>
              </div>

              {/* CTA Card - Explore All Services - Same structure as other cards */}
              <Link 
                href="/services"
                className="absolute backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(114,49,61,0.8)] border-solid box-border from-[rgba(174,45,66,0.64)] gap-[10px] grid grid-cols-1 grid-rows-[repeat(0,_minmax(0,_1fr))] h-[149px] left-[165px] p-[11px] rounded-[12px] to-[rgba(34,62,140,0.48)] top-[316.67px] w-[155px] hover:opacity-90 transition-opacity relative"
              >
                <p className="absolute font-sans font-semibold leading-[1.2] left-[14px] text-[#f1f5ff] text-[20px] top-[37px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Explore <br />
                  All<br />
                  Services
                </p>
                <div className="absolute h-[20.505px] left-[112px] top-[58px] w-[26px]">
                  <div className="absolute inset-[-2.23%_-0.96%]">
                    <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/89512c02-1510-4f5b-8c37-b0af4892d4e0" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:block mx-auto px-8 max-w-[1440px]">
          <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${cardBaseClass} p-8 h-[180px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow`}
              >
                <h3 className="font-sans font-medium text-[20px] text-[#0b1737] leading-[1.1] tracking-[-0.02em] mb-4 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="font-sans font-normal text-[13px] text-[#0b1737] leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            ))}

            <Link 
            href="/services"
              className="backdrop-blur-md bg-gradient-to-b from-[rgba(174,45,66,0.64)] to-[rgba(34,62,140,0.48)] rounded-xl p-8 border border-[rgba(114,49,61,0.8)] shadow-[0px_2px_4px_0px_rgba(68,70,102,0.3)] h-[180px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <p className="font-sans font-semibold text-[20px] text-[#f1f5ff] leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                  Explore \nAll\nServices
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
      </div>
    </section>
  );
}
