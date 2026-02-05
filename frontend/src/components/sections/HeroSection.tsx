import svgPaths from "@/lib/imports/svg-znty2oevvb";
import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/lib/strapi-home";
import type { PageHeroSection, StrapiMedia } from "@/lib/page-types";

type HeroSectionProps = {
  data?: PageHeroSection & {
    primaryCta?: PageHeroSection["cta"];
    mobileBackground?: StrapiMedia | null;
    desktopBackground?: StrapiMedia | null;
    logoImage?: StrapiMedia | null;
  };
};

export function HeroSection({ data }: HeroSectionProps) {
  const title =
    data?.title || "Optimize Your Healthcare &\nMedical Operations";
  const subtitle =
    data?.subtitle ||
    "Delegate your billing, intake, and back-office operations to U.S.-trained healthcare professionals, so you can focus on patient care.";
  const ctaLabel = data?.primaryCta?.label || "Start building your team today";
  const ctaUrl = data?.primaryCta?.url || "/contact";
  const mobileImage =
    getMediaUrl(data?.mobileBackground) ||
    "https://amedicase.com/uploads/Hero_photo_1_bf82099b1f.jpg";
  const desktopImage =
    getMediaUrl(data?.desktopBackground) ||
    "https://amedicase.com/uploads/1_136_f4869a430a.jpg";
  const logoImage = getMediaUrl(data?.logoImage) || "/images/amedicase-logo-desktop.svg";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);
  const isExternal = (url: string) => /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
  const ctaExternal = data?.primaryCta?.isExternal || isExternal(ctaUrl);

  return (
    <section className="relative bg-[#f1f5ff] pt-20 lg:pt-[100px] pb-[40px] md:pb-16 xl:pb-20 w-full">
      {/* Mobile Layout - Refactored with logical structure */}
      <div className="w-full">
        {/* HeroMobileWrapper */}
        <div className="hero-mobile-wrapper relative w-full px-5 md:hidden">
          {/* HeroImageContainer */}
          <div className="hero-image-container relative w-full h-[630px] rounded-[12px] overflow-hidden">
            {/* HeroImage */}
            <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                  <Image
                    alt="Healthcare professionals"
                    src={mobileImage}
                    fill
                    sizes="100vw"
                    className="object-cover object-left-top scale-100 sm:scale-[1.05] md:scale-[1.1]"
                    style={{ transformOrigin: 'top left' }}
                    unoptimized={isRemoteUrl(mobileImage)}
                  />
          </div>

            {/* HeroOverlay */}
            <div className="hero-overlay absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[12px]"></div>

            {/* HeroContentLayer */}
            <div className="hero-content-layer relative z-10 flex flex-col justify-between h-full pt-[65px] pb-0">
              {/* HeroTopIcon */}
              <div className="hero-top-icon w-[150px] h-[260px] mx-auto">
              <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
                <g>
                  <path d={svgPaths.p3e7f3000} fill="#F1F5FF" />
                  <path d={svgPaths.p348bb7c0} fill="#F1F5FF" />
                </g>
              </svg>
          </div>

              {/* HeroBottomCard */}
              <div className="hero-bottom-card backdrop-blur-[7px] backdrop-filter bg-gradient-to-b from-[rgba(57,87,172,0.64)] to-[rgba(39,66,144,0.48)] rounded-bl-[12px] rounded-br-[12px] shadow-[0px_2px_4px_0px_rgba(47,49,81,0.3)] px-[10px] py-[20px]">
                <div className="flex flex-col gap-2 w-full">
                  {/* HeroTitle */}
                  <p className="hero-title font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[clamp(28px,4vw,33px)] tracking-[-0.66px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {title}
              </p>

                  {/* HeroSubtitle */}
                  <p className="hero-subtitle font-sans font-normal leading-[1.4] text-[#f1f5ff] text-[clamp(12px,1.8vw,13px)] tracking-[-0.26px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {subtitle}
              </p>
            </div>

                {/* HeroButton */}
                <Link
                  href={ctaUrl}
                  target={ctaExternal ? "_blank" : undefined}
                  rel={ctaExternal ? "noreferrer" : undefined}
                  className="hero-button backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(219,220,241,0.8)] border-solid flex from-[rgba(211,216,232,0.8)] items-center justify-center p-[10px] rounded-[8px] to-[rgba(175,180,196,0.6)] w-full hover:opacity-90 transition-opacity cursor-pointer mt-[40px]"
                >
                  <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[18px] text-center tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {ctaLabel}
              </p>
            </Link>
              </div>
          </div>
        </div>
        </div>
      </div>

      {/* Desktop Layout - Exact Figma Design - Responsive */}
      <div className="hidden lg:block relative w-full min-h-[629px] xl:h-[629px]">
        {/* Container - Exact Figma: left-[60px] top-[180px] w-[1320px] h-[629px] - Responsive */}
        <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 xl:px-0 h-full">
          {/* Background Image Container - Full width of container with rounded corners */}
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[12px]">
            <div className="absolute inset-0 rounded-[12px]">
              <Image
                alt="Healthcare professionals"
                src={desktopImage}
                fill
                sizes="100vw"
                className="absolute h-full left-0 top-0 w-full object-cover object-left-top rounded-[12px]"
                unoptimized={isRemoteUrl(desktopImage)}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[12px]" />
          </div>

          {/* Content Container - Logo and Card */}
          <div className="relative z-10 h-full flex items-end">
            {/* Logo - positioned 210px from left of image - Responsive */}
            <div className="absolute left-[clamp(60px,15vw,210px)] top-1/2 -translate-y-1/2 shrink-0 w-[clamp(200px,25vw,300px)] h-[clamp(200px,25vw,300px)]">
              <Image
                alt="Amedicase sign"
                src={logoImage}
                fill
                sizes="(max-width: 1024px) 200px, 300px"
                className="block w-full h-full"
                unoptimized={isRemoteUrl(logoImage)}
              />
            </div>
        </div>

          {/* Text Overlay - Right side, aligned to right edge of image, covering image completely - Exact Figma: w-[680px] h-[629px], px-[40px] py-[100px] - Responsive */}
          <div className="absolute right-0 bottom-0 z-20 backdrop-blur-[7px] backdrop-filter bg-gradient-to-b from-[rgba(57,87,172,0.64)] to-[rgba(39,66,144,0.48)] rounded-[12px] shadow-[0px_2px_4px_0px_rgba(47,49,81,0.3)] w-full max-w-[680px] xl:w-[680px] min-h-[629px] xl:h-[629px] flex flex-col px-6 md:px-8 xl:px-[40px] py-12 md:py-16 xl:py-[100px]">
              <div className="flex flex-col gap-8 md:gap-12 xl:gap-[82px] w-full max-w-[613px] xl:w-[613px]">
                {/* Title and Description - Reduced gap for closer spacing */}
                <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 text-[#f1f5ff] leading-[1.2]">
                  <h1 
                    className="font-sans font-semibold text-[clamp(32px,4vw,52px)] tracking-[-1.04px] w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
                    {title}
            </h1>
            <p 
                    className="font-sans font-normal text-[clamp(20px,3vw,33px)] tracking-[-0.66px] w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
                    {subtitle}
            </p>
                </div>

                {/* CTA Button - Exact Figma: p-[20px], no fixed width - Responsive */}
            <Link 
                  href={ctaUrl}
                  target={ctaExternal ? "_blank" : undefined}
                  rel={ctaExternal ? "noreferrer" : undefined}
                  className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(219,220,241,0.8)] from-[rgba(211,216,232,0.8)] to-[rgba(175,180,196,0.6)] rounded-[8px] p-4 md:p-6 xl:p-[20px] hover:opacity-90 transition-opacity cursor-pointer"
            >
                  <p className="capitalize font-sans font-semibold leading-[1.1] text-[#f1f5ff] text-[clamp(20px,3vw,33px)] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {ctaLabel}
                  </p>
            </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
