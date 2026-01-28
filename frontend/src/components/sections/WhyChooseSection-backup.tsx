import type { CSSProperties } from "react";
/* eslint-disable */
// @ts-nocheck

import svgPaths from "../../lib/imports/svg-ie2km5jka3";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

const cardBackgroundStyle: CSSProperties = {
  background: "linear-gradient(180deg, rgba(183, 198, 243, 0.08) 0%, rgba(84, 100, 145, 0.03) 100%)",
};

const cardBaseClass =
  "rounded-[12px] border border-[rgba(158,162,203,0.8)] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] backdrop-blur-[7px]";

const headingStyle: ExtendedCSSProperties = {
  textEdge: "cap",
  leadingTrim: "both",
  fontVariationSettings: "'wdth' 100",
};

const buttonStyle: ExtendedCSSProperties = {
  background: "linear-gradient(180deg, rgba(45, 78, 174, 0.64) 0%, rgba(34, 62, 140, 0.48) 100%)",
  textEdge: "cap",
  leadingTrim: "both",
  fontVariationSettings: "'wdth' 100",
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

const benefits = [
  "HIPAA-Compliant & Secure Data Handling",
  "Up to 60% Cost Savings vs\nU.S. Operations",
  "Healthcare-trained Teams \nwith U.S. Experience",
  "Dedicated Account Managers",
  "Real-time Communication \n& U.S. Time-Zone Overlap",
];

export function WhyChooseSection() {
  return (
    <section className="relative bg-[#f1f5ff] overflow-hidden">
      {/* Background Decoration */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 opacity-50 pointer-events-none"
        style={{ width: "752.353px", height: "351.751px" }}
      >
        <svg className="w-full h-auto" fill="none" viewBox="0 0 360 352">
          <path
            d="M470.367 342.372C470.367 342.372 339.142 47.835 202.196 8.70441C99.3162 -20.7157 -2.12778 32.8432 -32.3238 45.4369C-62.5197 58.0306 -247.003 159.617 -281.986 190.259C-281.986 190.259 -108.381 112.359 -26.7296 93.239C107.903 61.7007 162.178 100.672 264.17 248.632C313.609 320.284 327.022 374.27 470.367 342.372Z"
            fill="#7F92C7"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="mx-auto relative z-10 max-w-[1440px] w-full max-w-[340px] lg:w-full lg:px-8 px-[6px]">
        {/* Section Header - Exact Figma layout */}
        <div className="flex flex-col gap-[20px] items-start">
          <p
            className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] min-w-full relative shrink-0 text-[13px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-[min-content] whitespace-pre-wrap"
            style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
          >
            Why Choose Amedicase
          </p>
          <h2
            className="font-sans font-semibold h-[95px] leading-[1.1] relative shrink-0 text-[#000618] text-[33px] tracking-[-0.66px] w-full whitespace-pre-wrap lg:h-auto lg:text-[42px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Why Leading Home Health Agencies Choose Us
          </h2>
        </div>

        {/* Benefits Card - Exact Figma layout for mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.075)] h-[406px] rounded-[12px] shrink-0 to-[rgba(84,100,145,0.025)] w-full relative lg:h-auto overflow-hidden mt-[20px]">
            {/* Mobile - Absolute positioned text - Inside card (relative to card, not section) */}
            <div className="lg:hidden relative h-full w-full">
              <p className="absolute font-sans font-medium leading-[1.2] left-[20px] text-[#0b1737] text-[20px] top-[40px] tracking-[-0.4px] w-[281px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                HIPAA-Compliant & Secure Data Handling{" "}
              </p>
              <p className="absolute font-sans font-medium leading-[1.2] left-[20px] text-[#0b1737] text-[20px] top-[118px] tracking-[-0.4px] w-[281px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Up to 60% Cost Savings vs
                <br />
                U.S. Operations
              </p>
              <p className="absolute font-sans font-medium leading-[1.2] left-[20px] text-[#0b1737] text-[20px] top-[196px] tracking-[-0.4px] w-[281px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Healthcare-trained Teams{" "}
                <br />
                with U.S. Experience
              </p>
              <p className="absolute font-sans font-medium leading-[1.2] left-[20px] text-[#0b1737] text-[20px] top-[274px] tracking-[-0.4px] w-[281px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dedicated Account Managers
              </p>
              <p className="absolute font-sans font-medium leading-[1.2] left-[20px] text-[#0b1737] text-[20px] top-[328px] tracking-[-0.4px] w-[281px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Real-time Communication{" "}
                <br />
                & U.S. Time-Zone Overlap
              </p>
            </div>

            {/* Desktop - Grid layout */}
            <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-8 lg:p-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#d01127] mt-2" />
                  <p className="font-sans font-medium text-[18px] sm:text-[20px] text-[#0b1737] leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Outside card, after card - Mobile */}
          <div className="lg:hidden mt-[20px]">
            <button
              className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(50,59,159,0.8)] border-solid box-border content-stretch flex from-[rgba(45,78,174,0.64)] gap-[20px] items-center justify-center px-[20px] py-[17px] relative rounded-[8px] shrink-0 to-[rgba(34,62,140,0.48)] hover:opacity-90 transition-opacity w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                More About Us
              </p>
              <div className="h-[20.505px] relative shrink-0 w-[26px]">
                <div className="absolute inset-[-2.23%_-0.96%]">
                  <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/ed84828d-e46b-4000-9a40-33c2d609f1f6" />
                </div>
              </div>
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex mt-8 lg:mt-12 justify-center lg:justify-start">
            <button
              className="inline-flex items-center justify-center gap-5 rounded-[8px] border border-[rgba(50,59,159,0.8)] shadow-[0px_1px_4px_0px_rgba(27,30,79,0.3)] backdrop-blur-[3.777px] px-5 py-[17px] font-sans font-semibold text-[18px] sm:text-[20px] text-[#f1f5ff] leading-[110%] hover:opacity-90 transition-opacity"
              style={buttonStyle}
            >
              More About Us
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
    </section>
  );
}
