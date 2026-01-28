/* eslint-disable */
// @ts-nocheck

import svgPaths from "../../lib/imports/svg-ie2km5jka3";

const steps = [
  {
    title: "Discovery Call",
    description: "Understand your workflow and needs",
    singleLine: true,
  },
  {
    title: "Onboarding Plan",
    description: "Define roles and tools",
    singleLine: true,
  },
  {
    title: "Training & Integration",
    description: "Align with your EMR and QA standards",
    singleLine: true,
  },
  {
    title: "Ongoing Support &",
    description: "Quality Control",
    singleLine: true,
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative bg-[#f1f5ff]">
      <div className="mx-auto max-w-[1440px] w-full max-w-[340px] lg:w-full lg:px-8 px-[6px]">
        {/* Section Header - Exact Figma layout with 20px padding */}
        <div className="flex flex-col gap-[20px] items-start mb-[20px]">
          <p className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[13px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
            How It Works
          </p>
        </div>

        {/* Steps - Mobile layout exact Figma */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-[5px] items-center w-full">
            {steps.map((step, index) => (
              <div key={index} className="w-full">
                {/* Step Card - Proper padding: 10px top/bottom, 5px left/right */}
                <div className={`backdrop-blur-[2px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid box-border flex flex-col from-[rgba(45,78,174,0.002)] py-[10px] px-[5px] rounded-[12px] to-[rgba(34,62,140,0.001)] w-full items-center justify-center overflow-hidden lg:h-auto lg:px-6 lg:py-6`}>
                  <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                    <p className={`font-sans font-medium leading-[1.2] text-[20px] text-[#0b1737] text-center tracking-[-0.4px] ${step.singleLine ? 'whitespace-nowrap' : 'whitespace-pre-line'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step.title}
                    </p>
                    {step.description && index === steps.length - 1 ? (
                      <p className={`font-sans font-medium leading-[1.2] text-[20px] text-[#0b1737] text-center tracking-[-0.4px] ${step.singleLine ? 'whitespace-nowrap' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.description}
                      </p>
                    ) : step.description ? (
                      <p className={`font-sans font-normal leading-[1.1] text-[13px] text-[#0b1737] text-center tracking-[-0.26px] ${step.singleLine ? 'whitespace-nowrap' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.description}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Arrow (except for last item) - Exact Figma positioning */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center relative shrink-0 h-[21.5px] w-full">
                    <div className="flex-none rotate-[90deg]">
                      <div className="h-[21.5px] relative w-[9.951px]">
                        <img alt="" className="block max-w-none size-full" src={index === 0 ? "https://www.figma.com/api/mcp/asset/84e7af33-5667-4c14-983b-8b86f3846668" : index === 1 ? "https://www.figma.com/api/mcp/asset/3b9f4d6b-f6bc-45cf-827e-37f4df9e54b8" : "https://www.figma.com/api/mcp/asset/b3f61652-7a95-44b1-ba49-4cb3873bace5"} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Exact Figma styling with 20px padding */}
          <div className="mt-[20px]">
            <button className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid box-border flex from-[rgba(205,27,48,0.24)] gap-[5.396px] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(215,45,64,0.16)] w-full hover:opacity-90 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#d4283c] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Start Your Free Assessment
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
