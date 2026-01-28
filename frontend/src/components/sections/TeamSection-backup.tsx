/* eslint-disable */
// @ts-nocheck

import svgPaths from "../../lib/imports/svg-ie2km5jka3";
import dorinAcruImage from "../Dorin Acru.jpg";

export function TeamSection() {
  return (
    <section id="team" className="relative bg-[#f1f5ff] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-[50%] lg:w-[30%] opacity-80 pointer-events-none">
        <svg className="w-full h-auto" fill="none" viewBox="0 0 202 91">
          <path d={svgPaths.p24732a00} fill="#D01127" opacity="0.8" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[50%] lg:w-[30%] opacity-80 pointer-events-none">
        <svg className="w-full h-auto" fill="none" viewBox="0 0 179 75">
          <path d={svgPaths.p13211580} fill="#1E3A8A" opacity="0.8" />
        </svg>
      </div>

      <div className="mx-auto relative z-10 max-w-[1440px] w-full max-w-[340px] lg:w-full lg:px-8 px-[6px]">
        {/* Section Header - Exact Figma layout */}
        <div className="flex flex-col gap-[20px] items-start mb-[20px]">
          <p className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[13px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
            Our Team Behind the Care
          </p>
          <h2 className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#000618] text-[33px] tracking-[-0.66px] w-full whitespace-pre-wrap lg:text-[42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Healthcare professionals{" "}
            <br />
            & process engineers with 1+ years{" "}
            <br />
            in U.S. home health operations.
          </h2>
        </div>

        {/* Team Card - Exact Figma layout */}
        <div className="max-w-4xl mx-auto mb-[20px]">
          <div className="h-[323px] relative shrink-0 w-full">
            <div className="absolute contents left-0 top-0">
              {/* Card Background */}
              <div className="absolute backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.225)] h-[323px] left-0 rounded-[12px] to-[rgba(84,100,145,0.15)] top-0 w-[320px]" />
              
              {/* Image - Exact Figma positioning */}
              <div className="absolute bg-repeat bg-size-[197.419921875px_198px] bg-top-left h-[144px] left-[20px] rounded-[12px] top-[20px] w-[144.056px] overflow-hidden">
                <img 
                  src={dorinAcruImage} 
                  alt="Dorin Acru" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name - Exact Figma positioning */}
              <p className="absolute font-sans font-semibold leading-[1.2] left-[calc(50%+24px)] text-[20px] text-blue-900 top-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dorin
                <br />
                Acru
              </p>
              
              {/* Position - Exact Figma positioning */}
              <p className="absolute font-sans font-normal leading-[1.1] left-[calc(50%+-140px)] text-[20px] text-blue-900 top-[184px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Marketing Manager
              </p>
              
              {/* Description - Exact Figma positioning */}
              <p className="absolute font-sans font-normal leading-[1.2] left-[calc(50%+-140px)] text-[#000618] text-[13px] top-[218px] tracking-[-0.26px] w-[271px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Building trust through precision, clarity
                <br />
                and modern medical management.
              </p>
              
              {/* Pagination Dots - Exact Figma positioning with images */}
              <div className="absolute contents left-[140px] top-[293px]">
                <div className="absolute left-[140px] size-[10px] top-[293px]">
                  <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/b0093dc2-f319-4076-89ea-897a9ada218e" />
                </div>
                <div className="absolute left-[155px] size-[10px] top-[293px]">
                  <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/63c8df5e-191f-45d8-bd96-577531581746" />
                </div>
                <div className="absolute left-[170px] size-[10px] top-[293px]">
                  <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/63c8df5e-191f-45d8-bd96-577531581746" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop - Grid layout */}
        <div className="hidden lg:grid md:grid-cols-2 gap-8 items-center p-6 lg:p-10">
          <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(183,198,243,0.225)] to-[rgba(84,100,145,0.15)] rounded-[12px] border border-[rgba(158,162,203,0.8)] p-6">
            {/* Image */}
            <div>
              <img 
                src={dorinAcruImage} 
                alt="Dorin Acru" 
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-sans font-semibold text-[20px] sm:text-[24px] text-blue-900 leading-[1.2] mb-1">
                  Dorin<br />Acru
                </h3>
                <p className="font-sans font-normal text-[18px] sm:text-[20px] text-blue-900 leading-[1.1] tracking-[-0.02em]">
                  Marketing Manager
                </p>
              </div>
              <p className="font-sans font-normal text-[12px] sm:text-[13px] text-[#000618] leading-[1.2] tracking-[-0.02em]">
                Building trust through precision, clarity<br />and modern medical management.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button - Exact Figma styling */}
        <div className="mt-[20px]">
          <button className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border-[0.874px] border-[rgba(50,59,159,0.8)] border-solid box-border content-stretch flex from-[rgba(45,78,174,0.64)] gap-[5.396px] items-center justify-center p-[20px] relative rounded-[8px] shrink-0 to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Learn More About Us
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
