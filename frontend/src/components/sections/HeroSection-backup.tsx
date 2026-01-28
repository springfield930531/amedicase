/* eslint-disable */
// @ts-nocheck

import svgPaths from "../../lib/imports/svg-znty2oevvb";
import heroImageMobile from "../Hero photo Mobile.jpg";
import heroImageDesktop from "../Hero Section desktop.jpg";

function AmedicaseSign({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative shrink-0 size-[150px]">
        <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
          <g>
            <path d={svgPaths.p3e7f3000} fill="#F1F5FF" />
            <path d={svgPaths.p348bb7c0} fill="#F1F5FF" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative bg-[#f1f5ff] pt-20 lg:pt-[100px]">
      {/* Mobile Layout - Wider and standardized */}
      <div className="lg:hidden relative w-full">
        <div className="content-stretch flex flex-col gap-[45px] items-center relative size-full h-[563px] w-full max-w-[340px] mx-auto px-[6px]">
          {/* Image Container - Same width as blue card */}
          <div className="absolute contents left-0 top-0 w-full max-w-[340px]">
            <div className="absolute h-[581px] left-[-10px] top-[-10px] w-[340px] pointer-events-none" />
            <div className="absolute h-[561px] left-0 rounded-[12px] top-0 w-full max-w-[340px] overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img
                    alt="Healthcare professionals"
                    src={heroImageMobile}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[12px]" />
              </div>
            </div>
          </div>

          {/* Amedicase Logo Icon - Mobile - Centered */}
          <AmedicaseSign className="content-stretch flex flex-col gap-[30px] h-[224px] items-center justify-center relative shrink-0 z-10" />

          {/* Blue Gradient Card with Text - Mobile - Same width as image (340px) */}
          <div className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(57,87,172,0.64)] gap-[20px] h-[295px] items-start px-[10px] pt-[20px] pb-[20px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_2px_4px_0px_rgba(47,49,81,0.3)] shrink-0 to-[rgba(39,66,144,0.48)] w-[340px] z-10">
            <div className="flex flex-col gap-[30px] w-full">
              {/* Title */}
              <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[33px] tracking-[-0.66px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Optimize Your{" "}
                <br />
                Healthcare &{" "}
                <br />
                Medical Operations
              </p>

              {/* Description */}
              <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-[#f1f5ff] text-[13px] tracking-[-0.26px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Delegate your billing, intake, and back-office operations to U.S.-trained healthcare professionals, so you can focus on patient care.
              </p>
            </div>

            {/* CTA Button - Raised higher with less gap */}
            <div className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(219,220,241,0.8)] border-solid box-border content-stretch flex from-[rgba(211,216,232,0.8)] gap-[5.396px] h-[54px] items-center justify-center px-[20px] py-[10px] -mt-[5px] mb-0 w-full relative rounded-[8px] shrink-0 to-[rgba(175,180,196,0.6)]">
              <p className="capitalize font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[18px] text-center tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Start building your team today
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Image container - 60% din înălțimea viewport, începe de la header */}
        <div className="absolute inset-x-0 top-0 h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              alt="Healthcare professionals" 
              className="absolute h-full left-0 top-0 w-full object-cover" 
              src={heroImageDesktop} 
            />
          </div>
          <div className="absolute bg-[rgba(30,58,138,0.9)] inset-0 mix-blend-hard-light" />
          <div className="absolute bg-[rgba(0,0,0,0.31)] inset-0" />
        </div>

        <div className="relative mx-auto px-8 max-w-[1440px] z-10">
          <div className="pt-[calc(60vh-200px)] pb-20">
            <h1 
              className="font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[64px] tracking-[-1.28px] mb-8"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Optimize Your Healthcare <br />
              & Medical Operations 
            </h1>

            <p 
              className="font-sans font-normal leading-[1.1] text-[#f1f5ff] text-[32px] tracking-[-0.64px] mb-12 max-w-[1023px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Delegate your billing, intake, and back-office operations <br />
              to U.S.-trained healthcare professionals, so you can focus on patient care.
            </p>

            <button 
              className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(215,218,227,0.64)] to-[rgba(200,204,214,0.48)] px-10 py-5 rounded-xl border border-[rgba(216,218,245,0.8)] shadow-[0px_2px_8px_0px_rgba(179,184,251,0.2)] font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[32px] tracking-[-0.64px] hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Start building your team today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
