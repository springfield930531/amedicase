import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import Image from "next/image";
import { getMediaUrl } from "@/lib/strapi-home";
import type { CoordinatingBannerSection } from "@/lib/page-types";

type CoordinatingSectionProps = {
  data?: CoordinatingBannerSection;
};

export function CoordinatingSection({ data }: CoordinatingSectionProps) {
  const backgroundUrl =
    getMediaUrl(data?.backgroundImage) ||
    "https://amedicase.com/uploads/1_148_6748576d24.jpg";
  const title = data?.title || "Coordinating better outcomes.";
  const topIconUrl = getMediaUrl(data?.topIcon);
  const bottomIconUrl = getMediaUrl(data?.bottomIcon);

  return (
    <section className="relative bg-[#f1f5ff] w-full pb-[40px] md:pb-16 xl:pb-20">
      <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0">
      {/* Unified Responsive Image Section - Full width */}
      <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
        {/* Background Image - Full width */}
        <Image
          src={backgroundUrl}
          alt="Healthcare coordination"
          fill
          className="object-cover rounded-xl"
          unoptimized={backgroundUrl.startsWith("http")}
        />


        {/* Content Overlay - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 lg:px-12 py-[calc(6px*0.96)] md:py-[calc(8px*0.96)] lg:py-[calc(12px*0.96)] text-center z-10">
          {/* SVG Path above text */}
          {topIconUrl ? (
            <Image
              src={topIconUrl}
              alt=""
              width={140}
              height={56}
              className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-auto mb-4 md:mb-6 lg:mb-8"
              unoptimized={topIconUrl.startsWith("http")}
            />
          ) : (
            <svg className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-auto mb-4 md:mb-6 lg:mb-8" fill="none" viewBox="0 0 106 42">
              <path d="M105.452 6.57873C105.452 6.57873 77.511 41.0652 57.9085 41.3891C43.1815 41.6355 31.6017 30.9003 28.0355 28.15C24.4693 25.3998 3.55974 5.32047 0 0C0 0 20.3072 16.5424 30.4823 21.9936C47.2595 30.9834 55.8642 27.7354 74.6963 11.6963C83.8224 3.93085 87.5291 -2.76936 105.452 6.57873Z" fill="#F1F5FF" />
            </svg>
          )}

          {/* Text - Responsive */}
          <p
            className="font-sans font-medium text-[#f1f5ff] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[-0.02em] whitespace-nowrap mb-4 md:mb-6 lg:mb-8"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {title}
          </p>

          {/* SVG Path under text */}
          {bottomIconUrl ? (
            <Image
              src={bottomIconUrl}
              alt=""
              width={140}
              height={56}
              className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-auto"
              unoptimized={bottomIconUrl.startsWith("http")}
            />
          ) : (
            <svg className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-auto" fill="none" viewBox="0 0 106 42">
              <path d={svgPaths.p23b94400} fill="#F1F5FF" />
            </svg>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
