import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import Image from "next/image";
import { getMediaUrl } from "@/lib/strapi-home";

type ImageSectionsProps = {
  data?: any;
};

export function ImageSections({ data }: ImageSectionsProps) {
  const title =
    data?.title ||
    "Redefining patient management\nthrough clarity and trust.";
  const background = getMediaUrl(data?.backgroundImage) || "/images/Photo section3.jpg";
  const logoImage = getMediaUrl(data?.logoImage) || "/images/amedicase-logo-desktop.svg";

  return (
    <section className="relative bg-[#f1f5ff] w-full pb-[40px] md:pb-16 xl:pb-20">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0">
      {/* Unified Responsive Image Section - Full width */}
      <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/9]">
        {/* Background Image - Full width */}
        <Image
          src={background}
          alt="Patient management"
          fill
          className="object-cover rounded-xl"
        />

        {/* Overlay with blend mode */}
        <div className="absolute inset-0 bg-[rgba(30,58,138,0.6)] mix-blend-hard-light rounded-xl pointer-events-none" />

        {/* Content Overlay - Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-[15px] py-[14px] md:py-[22px] text-center z-10">
          {/* Logo Icon - Responsive size - Larger */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 md:mb-6">
            <svg className="w-full h-full" fill="none" viewBox="0 0 57 57">
              <g>
                <path d={svgPaths.p7a16b80} fill="#F1F5FF" />
                <path d={svgPaths.p25394840} fill="#F1F5FF" />
              </g>
            </svg>
          </div>

          {/* Text - Responsive - Larger with margin left and right - Increased by 2px */}
          <p
                className="font-sans font-medium text-[#f1f5ff] text-[22px] sm:text-[26px] md:text-[32px] leading-tight tracking-[-0.02em] mx-[15px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Exact Figma Design - Responsive */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-0">
          {/* Image Container - Exact Figma dimensions: 1320px x 630px - Responsive */}
          <div 
            className="relative w-full aspect-[1320/630] xl:h-[630px] overflow-hidden rounded-[12px]"
            style={{
              background: `linear-gradient(0deg, rgba(30, 58, 138, 0.90) 0%, rgba(30, 58, 138, 0.90) 100%), url('${background}') lightgray 50% / cover no-repeat`,
              backgroundBlendMode: 'hard-light, normal',
              borderRadius: '12px'
            }}
          >

            {/* Content Overlay - Centered - Exact Figma Design */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[60px] text-center z-10 px-[282px] py-[112px]">
              {/* Logo - Exact Figma: 174.023px x 174.023px */}
              <div className="relative shrink-0 w-[174.023px] h-[174.023px]">
                <img 
                  alt="Amedicase sign" 
                  src={logoImage}
                  className="block w-full h-full" 
                />
              </div>

              {/* Text - Exact Figma typography: 52px, tracking -1.04px, gap 60px */}
              <p
                className="font-sans font-medium text-[#f1f5ff] text-[52px] leading-[1.1] tracking-[-1.04px] w-full max-w-[755px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
