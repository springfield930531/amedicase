import { getMediaUrl } from "@/lib/strapi-home";
import Image from "next/image";
import Link from "next/link";
import type { IconStepsSection, StrapiMedia } from "@/lib/page-types";

const defaultSteps = [
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

type HowItWorksSectionProps = {
  data?: IconStepsSection & { illustration?: StrapiMedia | null };
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const label = data?.label || "How It Works";
  const steps =
    data?.steps?.length
      ? data.steps.map((step) => ({
          title: step?.title,
          description: step?.description,
          singleLine: true,
        }))
      : defaultSteps;
  const ctaLabel = data?.cta?.label || "Start Your Free Assessment";
  const ctaUrl = data?.cta?.url || "/contact";
  const illustration =
    getMediaUrl(data?.illustration) || "/images/how-it-works-image.jpg";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);
  const isExternal = (url: string) => /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
  const ctaExternal = data?.cta?.isExternal || isExternal(ctaUrl);

  return (
    <section className="relative bg-[#f1f5ff] w-full pt-[40px] md:pt-16 xl:pt-20 pb-[40px] md:pb-16 xl:pb-20">
      <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {/* Section Header - Standardized spacing */}
        <div className="flex flex-col gap-2 items-start mb-[29px] md:mb-12">
            <p className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[clamp(14px,1.8vw,15px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        </div>

        {/* Steps - Full width like other content */}
        <div className="w-full">
          <div className="flex flex-col gap-[5px] md:gap-4 items-center w-full">
            {steps.map((step, index) => (
              <div key={index} className="w-full">
                {/* Step Card - Responsive padding and heights */}
                <div className={`backdrop-blur-[2px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid box-border flex flex-col from-[rgba(45,78,174,0.002)] rounded-[12px] to-[rgba(34,62,140,0.001)] w-full items-center justify-center overflow-hidden ${index === steps.length - 1 ? 'h-[clamp(50px,15vw,58px)] md:min-h-[58px] px-[clamp(60px,22vw,80px)] md:px-[80px] py-[clamp(8px,2.5vw,10px)]' : 'h-[clamp(45px,14vw,60px)] md:min-h-[53px] px-[clamp(45px,18vw,59px)] md:px-[59px] py-[clamp(8px,2.5vw,10px)]'}`} style={{ boxShadow: '0 3.391px 13.565px 0 rgba(129, 132, 178, 0.20)' }}>
                  <div className="flex flex-col gap-0 items-center justify-center w-full mt-[4px] mb-[4px]">
                    <p className={`font-sans font-medium leading-[1.2] text-[clamp(18px,2.5vw,20px)] text-[#0b1737] text-center tracking-[-0.4px] ${step.singleLine ? 'whitespace-nowrap' : 'whitespace-pre-line'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step.title}
                    </p>
                    {step.description && index === steps.length - 1 ? (
                      <p className={`font-sans font-medium leading-[1.2] text-[clamp(18px,2.5vw,20px)] text-[#0b1737] text-center tracking-[-0.4px] ${step.singleLine ? 'whitespace-nowrap' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.description}
                      </p>
                    ) : step.description ? (
                      <p className={`font-sans font-normal leading-[1.1] text-[clamp(12px,1.8vw,13px)] text-[#0b1737] text-center tracking-[-0.26px] ${step.singleLine ? 'whitespace-nowrap' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.description}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Arrow (except for last item) - Exact Figma positioning */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center relative shrink-0 h-[20px] w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="20" viewBox="0 0 44 20" fill="none" className="w-[44px] h-[20px]">
                      <path opacity="0.8" d="M33.7674 2.90865C37.8605 -1.111 42.2946 -0.106092 44 0.898821C39.2248 5.25217 28.8558 14.7628 25.5814 17.9785C22.307 21.1942 20.4651 20.0983 18.4186 17.9785L-3.91217e-08 0.894999C4.09302 -0.715919 8.18605 0.89882 10.2326 2.90865L19.4419 11.949C21.4884 14.0688 23.1938 13.2877 24.5581 11.949C25.9225 10.6104 29.6744 6.9283 33.7674 2.90865Z" fill="#D01127"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Standardized padding */}
          <div className="mt-[20px] md:mt-12">
            <Link
              href={ctaUrl}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
              className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid box-border flex from-[rgba(205,27,48,0.24)] gap-[5.396px] items-center justify-center p-[20px] relative rounded-[8px] to-[rgba(215,45,64,0.16)] w-full hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#d4283c] text-[clamp(18px,2.5vw,20px)] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {ctaLabel}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Exact Figma Design */}
      <div className="hidden lg:block">
        {/* Section Header */}
        <div className="flex flex-col gap-[60px] items-start mb-[60px]">
          <p className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[20px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] pb-[50px]" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
          {label}
        </p>
        </div>

        {/* Content Layout - Steps left, Image right - 15% larger */}
        <div className="flex items-center gap-[69px] w-full" style={{ transform: 'scale(1.15)', transformOrigin: 'left center' }}>
          {/* Steps Column - Auto width based on content */}
          <div className="flex flex-col gap-[4px] items-center justify-center">
            {steps.map((step, index) => (
              <div key={index} className="w-full">
                {/* Step Card - Wider cards, centered content */}
                <div className={`backdrop-blur-[2px] backdrop-filter bg-gradient-to-b border-[0.848px] border-[rgba(204,206,228,0.8)] border-solid box-border flex flex-col from-[rgba(45,78,174,0.002)] gap-[4px] items-center justify-center px-[69px] py-[5px] relative rounded-[14px] shrink-0 to-[rgba(34,62,140,0.001)] min-w-[480px] w-auto mx-auto ${index === steps.length - 1 ? 'min-h-[120px]' : 'min-h-[90px]'}`} style={{ boxShadow: '0 3.391px 13.565px 0 rgba(129, 132, 178, 0.20)' }}>
                  <div className="flex flex-col gap-[4px] items-center justify-center relative shrink-0 text-[#0b1737]">
                    <p className={`font-sans font-medium leading-[1.2] relative shrink-0 text-[24px] text-center tracking-[-0.48px] text-[#0B1737]`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step.title}
                    </p>
                    {step.description && index === steps.length - 1 ? (
                      <p className="font-sans font-medium leading-[1.2] relative shrink-0 text-[24px] text-center tracking-[-0.48px] text-[#0B1737]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.description}
                      </p>
                    ) : step.description ? (
                      <p className="font-sans font-normal leading-[1.1] relative shrink-0 text-[14px] text-center tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.description}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Arrow after each card - Moved down slightly, 15% larger */}
                <div className="flex h-[23px] items-center justify-center relative shrink-0 w-full mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="20" viewBox="0 0 44 20" fill="none" className="w-[51px] h-[23px]">
                    <path opacity="0.8" d="M33.7674 2.90865C37.8605 -1.111 42.2946 -0.106092 44 0.898821C39.2248 5.25217 28.8558 14.7628 25.5814 17.9785C22.307 21.1942 20.4651 20.0983 18.4186 17.9785L-3.91217e-08 0.894999C4.09302 -0.715919 8.18605 0.89882 10.2326 2.90865L19.4419 11.949C21.4884 14.0688 23.1938 13.2877 24.5581 11.949C25.9225 10.6104 29.6744 6.9283 33.7674 2.90865Z" fill="#D01127"/>
                  </svg>
                </div>
              </div>
            ))}

            {/* CTA Button - 15% larger */}
            <div className="w-full mt-0">
              <Link
                href={ctaUrl}
                target={ctaExternal ? "_blank" : undefined}
                rel={ctaExternal ? "noreferrer" : undefined}
                className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid box-border flex from-[rgba(205,27,48,0.24)] gap-[6px] items-center justify-center px-[23px] py-[20px] relative rounded-[14px] shrink-0 to-[rgba(215,45,64,0.16)] w-full hover:opacity-90 transition-opacity"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="font-sans font-medium leading-[1.1] relative shrink-0 text-[#d4283c] text-[26px] text-center tracking-[-0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {ctaLabel}
                </p>
              </Link>
            </div>
          </div>

          {/* Image Column - 15% larger: 782px x 810px, moved to the right */}
          <div className="relative w-[648px] h-[610px] rounded-[14px] overflow-hidden shrink-0" style={{ marginLeft: '-30px' }}>
            <Image
              src={illustration}
              alt="Business professional working"
              fill
              sizes="(max-width: 1024px) 100vw, 648px"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-[12px]"
              unoptimized={isRemoteUrl(illustration)}
            />
            {/* Subtract overlay - SVG mask */}
            <div className="absolute inset-[-0.28%_-0.59%_-0.85%_-0.59%] pointer-events-none">
              <Image
                src="/images/how-it-works-subtract.svg"
                alt=""
                fill
                sizes="648px"
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
