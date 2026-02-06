import Image from "next/image";
import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import { getMediaUrl } from "@/lib/strapi-home";
import type { ServicesQualitySection as ServicesQualitySectionData, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: ServicesQualitySectionData;
};

export function ServicesQualitySection({ data }: Props) {
  const fallback: ServicesQualitySectionData = {
    __component: "sections.services-page-quality",
    title: "We deliver quality.",
    overlayColor: "rgba(30,58,138,0.6)",
    mobileTopSvgPath: svgPaths.p1d182d80,
    mobileBottomSvgPath:
      "M0 34.8145C0 34.8145 27.9409 0.328038 47.5434 0.00417593C62.2703 -0.242293 73.8502 10.493 77.4164 13.2432C80.9825 15.9934 101.892 36.0728 105.452 41.3932C105.452 41.3932 85.1446 24.8508 74.9695 19.3996C58.1924 10.4098 49.5877 13.6578 30.7556 29.6969C21.6295 37.4624 17.9227 44.1626 0 34.8145Z",
    mobileSvgViewBox: "0 0 106 42",
  };

  const title = data?.title || fallback.title;
  const overlayColor = data?.overlayColor || fallback.overlayColor;
  const mobileSvgViewBox = data?.mobileSvgViewBox || fallback.mobileSvgViewBox || "0 0 106 42";
  const mobileTopSvgPath = data?.mobileTopSvgPath || fallback.mobileTopSvgPath || svgPaths.p1d182d80;
  const mobileBottomSvgPath = data?.mobileBottomSvgPath || fallback.mobileBottomSvgPath || "";

  const backgroundImage = data?.backgroundImage;
  const desktopTopIcon = data?.desktopTopIcon;
  const desktopBottomIcon = data?.desktopBottomIcon;

  const getUrl = (media: StrapiMedia | null | undefined, fallbackUrl?: string) =>
    getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: StrapiMedia | null | undefined, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  const bgUrl = getUrl(backgroundImage, "/images/services/we-deliver-quality.jpg");
  const topIconUrl = getUrl(desktopTopIcon, "/images/services/arrow-vector-1.svg");
  const bottomIconUrl = getUrl(desktopBottomIcon, "/images/services/arrow-vector-2.svg");

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <div className="relative rounded-[12px] overflow-hidden aspect-[320/213] max-w-2xl mx-auto">
            <Image
              src={bgUrl}
              alt={getAlt(backgroundImage, "We deliver quality")}
              fill
              className="object-cover rounded-[12px]"
              unoptimized={isRemoteUrl(bgUrl)}
            />
            <div className="absolute inset-0 mix-blend-hard-light" style={{ backgroundColor: overlayColor }} />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[16px]">
              <div className="w-[80px] h-[32px]">
                <svg className="w-full h-full" fill="none" viewBox={mobileSvgViewBox}>
                  <path d={mobileTopSvgPath} fill="#F1F5FF" />
                </svg>
              </div>
              <p
                className="font-sans font-medium text-[20px] text-[#f1f5ff] text-center leading-[1.1] tracking-[-0.4px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {title}
              </p>
              <div className="w-[80px] h-[32px]">
                <svg className="w-full h-full" fill="none" viewBox={mobileSvgViewBox}>
                  <path d={mobileBottomSvgPath} fill="#F1F5FF" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center h-[630px] w-full max-w-[1320px] mx-auto relative">
          <div className="absolute inset-0 rounded-[12px] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <Image
                alt={getAlt(backgroundImage, "We deliver quality")}
                className="absolute h-[139.7%] left-0 max-w-none top-[-18.25%] w-full rounded-[12px]"
                src={bgUrl}
                fill
                sizes="(max-width: 1280px) 100vw, 1320px"
                unoptimized={isRemoteUrl(bgUrl)}
              />
            </div>
            <div className="absolute inset-0 mix-blend-hard-light rounded-[12px]" style={{ backgroundColor: overlayColor }} />
          </div>

          <div className="relative z-10 flex flex-col gap-[60px] items-center">
            <div className="h-[82.786px] w-[210.904px]">
              <Image
                alt={getAlt(desktopTopIcon, "Arrow")}
                className="block max-w-none size-full"
                src={topIconUrl}
                width={211}
                height={83}
                unoptimized={isRemoteUrl(topIconUrl)}
              />
            </div>
            <p
              className="font-sans font-medium leading-[1.1] text-[#f1f5ff] text-[52px] text-center tracking-[-1.04px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {title}
            </p>
            <div className="h-[82.786px] w-[210.904px]">
              <Image
                alt={getAlt(desktopBottomIcon, "Arrow")}
                className="block max-w-none size-full"
                src={bottomIconUrl}
                width={211}
                height={83}
                unoptimized={isRemoteUrl(bottomIconUrl)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

