import Image from "next/image";
import type { SectionRendererPageContext } from "@/components/sections/registry";
import { getMediaUrl } from "@/lib/strapi-home";
import type { ImageOverlaySection as ImageOverlaySectionData, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: ImageOverlaySectionData;
  page?: SectionRendererPageContext;
};

export function ImageOverlaySection({ data, page }: Props) {
  const getUrl = (media: StrapiMedia | string | null | undefined, fallbackUrl?: string) => {
    if (typeof media === "string") return media;
    return getMediaUrl(media) || fallbackUrl || "";
  };
  const getAlt = (media: StrapiMedia | string | null | undefined, fallbackAlt?: string) =>
    typeof media === "string"
      ? fallbackAlt || ""
      : media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  if (page?.kind === "contact") {
    const backgroundImage = getUrl(data?.backgroundImage);
    const overlayImage = getUrl(data?.overlayImage);
    return (
      <section className="relative py-8 lg:py-16 overflow-x-hidden">
        <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
          <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: "1320/375", minHeight: "375px" }}>
            <div className="relative w-full h-full rounded-[8px] overflow-hidden">
              {/* Background Image */}
              <Image
                src={backgroundImage}
                alt={getAlt(data?.backgroundImage, "Office documents and files")}
                fill
                sizes="(max-width: 1024px) 100vw, 1320px"
                className="w-full h-full object-cover rounded-[8px]"
                style={{
                  objectPosition: "center center",
                }}
                unoptimized={isRemoteUrl(backgroundImage)}
              />

              {/* Overlay */}
              <div className="relative -mt-full rounded-[8px] pointer-events-none" style={{ marginTop: "-100%" }}>
                <div
                  className="w-full h-full mix-blend-hard-light rounded-[8px]"
                  style={{ minHeight: "375px", background: data?.overlayColor }}
                />
              </div>

              {/* Subtract SVG Overlay - positioned to leave a few pixels visible at bottom */}
              <div
                className="relative -mt-full rounded-[8px] pointer-events-none mb-[4px]"
                style={{ marginTop: "-100%", marginBottom: "4px" }}
              >
                <Image
                  src={overlayImage}
                  alt={getAlt(data?.overlayImage, "")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1320px"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center top",
                    minHeight: "calc(100% - 4px)",
                  }}
                  unoptimized={isRemoteUrl(overlayImage)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <div className="relative w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: "1320/375", minHeight: "375px" }}>
          {/* Background Image */}
          <Image
            src={getUrl(data?.backgroundImage, "/images/creative-development/office-documents-background.jpg")}
            alt={getAlt(data?.backgroundImage, "Office documents and files")}
            fill
            sizes="(max-width: 1024px) 100vw, 1320px"
            className="w-full h-full object-cover rounded-[8px]"
            style={{
              objectPosition: "center center",
            }}
            unoptimized={isRemoteUrl(getUrl(data?.backgroundImage, "/images/creative-development/office-documents-background.jpg"))}
          />

          {/* Overlays Container - Single absolute wrapper for all overlays */}
          <div className="absolute inset-0 rounded-[8px] pointer-events-none">
            {/* Blue Overlay */}
            <div
              className="w-full h-full mix-blend-hard-light rounded-[8px]"
              style={{ backgroundColor: data?.overlayColor || "rgba(30,58,138,0.2)" }}
            />

            {/* White Abstract Shapes Overlay */}
            <div className="absolute inset-0 rounded-[8px] overflow-visible">
              <Image
                src={getUrl(data?.overlayImage, "/images/creative-development/white-shapes-overlay.svg")}
                alt={getAlt(data?.overlayImage, "")}
                fill
                sizes="(max-width: 1024px) 100vw, 1320px"
                className="w-full h-full object-cover"
                style={{
                  transform: "scale(1.1)",
                  transformOrigin: "left center",
                }}
                unoptimized={isRemoteUrl(getUrl(data?.overlayImage, "/images/creative-development/white-shapes-overlay.svg"))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

