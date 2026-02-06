import Image from "next/image";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { getMediaUrl } from "@/lib/strapi-home";
import type { CardGridSection as CardGridSectionData, StrapiMedia } from "@/lib/page-types";

type Props = {
  data?: CardGridSectionData;
};

export function CardGridSection({ data }: Props) {
  const cards = data?.cards || [];

  const renderWithBreaks = (value?: string) => {
    if (!value) return null;
    const parts = value.split("\n");
    return parts.map((part, index) => (
      <span key={`${part}-${index}`}>
        {part}
        {index < parts.length - 1 ? <br /> : null}
      </span>
    ));
  };

  const getUrl = (media: StrapiMedia | string | null | undefined, fallbackUrl?: string) => {
    if (typeof media === "string") return media;
    return getMediaUrl(media) || fallbackUrl || "";
  };
  const getAlt = (media: StrapiMedia | string | null | undefined, fallbackAlt?: string) =>
    typeof media === "string"
      ? fallbackAlt || ""
      : media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <TitleBlock label={data?.label || ""} title={data?.title || ""} />

        {/* Services Grid - Responsive 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[60px_120px] items-start w-full max-w-[1068px] mx-auto">
          {/* Card 1 */}
          <div className="relative w-full min-h-[117px]">
            <div className="absolute inset-0">
              <Image
                src={getUrl(cards[0]?.backgroundImage, "/images/creative-development/card-bg-1.svg")}
                alt={getAlt(cards[0]?.backgroundImage, "")}
                fill
                sizes="100vw"
                className="w-full h-full object-cover"
                unoptimized={isRemoteUrl(getUrl(cards[0]?.backgroundImage, "/images/creative-development/card-bg-1.svg"))}
              />
            </div>
            <div className="relative flex flex-col gap-[10px] p-[20px]">
              <div className="flex items-start gap-[20px]">
                <Image
                  src={getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg")}
                  alt={getAlt(data?.dotIcon, "")}
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                  style={{ filter: "blur(0.3px)" }}
                  unoptimized={isRemoteUrl(getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg"))}
                />
                <h3
                  className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {cards[0]?.title}
                </h3>
              </div>
              <p
                className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(cards[0]?.description)}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full min-h-[117px]">
            <div className="absolute inset-0">
              <Image
                src={getUrl(cards[1]?.backgroundImage, "/images/creative-development/card-bg-2.svg")}
                alt={getAlt(cards[1]?.backgroundImage, "")}
                fill
                sizes="100vw"
                className="w-full h-full object-cover"
                unoptimized={isRemoteUrl(getUrl(cards[1]?.backgroundImage, "/images/creative-development/card-bg-2.svg"))}
              />
            </div>
            <div className="relative flex flex-col gap-[10px] p-[20px]">
              <div className="flex items-start gap-[20px]">
                <Image
                  src={getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg")}
                  alt={getAlt(data?.dotIcon, "")}
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                  style={{ filter: "blur(0.3px)" }}
                  unoptimized={isRemoteUrl(getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg"))}
                />
                <h3
                  className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {cards[1]?.title}
                </h3>
              </div>
              <p
                className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(cards[1]?.description)}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full min-h-[145px]">
            <div className="absolute inset-0">
              <Image
                src={getUrl(cards[2]?.backgroundImage, "/images/creative-development/card-bg-3.svg")}
                alt={getAlt(cards[2]?.backgroundImage, "")}
                fill
                sizes="100vw"
                className="w-full h-full object-cover"
                unoptimized={isRemoteUrl(getUrl(cards[2]?.backgroundImage, "/images/creative-development/card-bg-3.svg"))}
              />
            </div>
            <div className="relative flex flex-col gap-[10px] p-[20px]">
              <div className="flex items-start gap-[20px]">
                <Image
                  src={getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg")}
                  alt={getAlt(data?.dotIcon, "")}
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                  style={{ filter: "blur(0.3px)" }}
                  unoptimized={isRemoteUrl(getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg"))}
                />
                <h3
                  className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {cards[2]?.title}
                </h3>
              </div>
              <p
                className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(cards[2]?.description)}
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full min-h-[145px]">
            <div className="absolute inset-0">
              <Image
                src={getUrl(cards[3]?.backgroundImage, "/images/creative-development/card-bg-4.svg")}
                alt={getAlt(cards[3]?.backgroundImage, "")}
                fill
                sizes="100vw"
                className="w-full h-full object-cover"
                unoptimized={isRemoteUrl(getUrl(cards[3]?.backgroundImage, "/images/creative-development/card-bg-4.svg"))}
              />
            </div>
            <div className="relative flex flex-col gap-[10px] p-[20px]">
              <div className="flex items-start gap-[20px]">
                <Image
                  src={getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg")}
                  alt={getAlt(data?.dotIcon, "")}
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0 mt-[2px] -ml-[5px]"
                  style={{ filter: "blur(0.3px)" }}
                  unoptimized={isRemoteUrl(getUrl(data?.dotIcon, "/images/creative-development/dot-icon.svg"))}
                />
                <h3
                  className="font-sans font-bold leading-[1.2] text-[clamp(16px,2vw,18px)] text-blue-900 -mt-[5px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {cards[3]?.title}
                </h3>
              </div>
              <p
                className="font-sans font-normal leading-[1.4] text-[#000618] text-[clamp(14px,1.8vw,16px)] tracking-[-0.2px] pl-[36px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {renderWithBreaks(cards[3]?.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
