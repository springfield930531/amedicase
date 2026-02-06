import type { CSSProperties } from "react";
import Image from "next/image";
import { normalizeHref } from "@/lib/href";
import { getMediaUrl } from "@/lib/strapi-home";
import type { ServicesPillarsSection as ServicesPillarsSectionData, StrapiMedia } from "@/lib/page-types";

type ExtendedCSSProperties = CSSProperties & {
  textEdge?: string;
  leadingTrim?: string;
};

type Props = {
  data?: ServicesPillarsSectionData;
};

export function ServicesPillarsSection({ data }: Props) {
  const getUrl = (media: StrapiMedia | null | undefined, fallbackUrl?: string) =>
    getMediaUrl(media) || fallbackUrl || "";
  const getAlt = (media: StrapiMedia | null | undefined, fallbackAlt?: string) =>
    media?.alternativeText || media?.data?.attributes?.alternativeText || fallbackAlt || "";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);
  const toPercent = (value?: number | string) => (value !== undefined && value !== null ? `${value}%` : undefined);
  const splitLines = (value?: string) => (value ? value.split("\n") : []);
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

  const cards = data?.cards || [];
  const pillarCard1 = cards[0] || {};
  const pillarCard2 = cards[1] || {};
  const pillarCard3 = cards[2] || {};
  const pillarCard4 = cards[3] || {};
  const extraPillarCards = cards.slice(4);

  const getCardImage = (card: typeof pillarCard1) => ("image" in card ? card.image : undefined);
  const getCardImageStyle = (card: typeof pillarCard1) => ("imageStyle" in card ? card.imageStyle : undefined);
  const getCardLearnMoreIcon = (card: typeof pillarCard1) => ("learnMoreIcon" in card ? card.learnMoreIcon : undefined);

  const card1Lines = splitLines(pillarCard1.descriptionMobile || pillarCard1.description);
  const card2Lines = splitLines(pillarCard2.descriptionMobile || pillarCard2.description);
  const card3Lines = splitLines(pillarCard3.descriptionMobile || pillarCard3.description);
  const card4Lines = splitLines(pillarCard4.descriptionMobile || pillarCard4.description);

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 lg:px-[60px] max-w-[1440px] overflow-x-hidden">
        <p
          className="font-sans font-medium text-[15px] lg:text-[20px] uppercase mb-8 lg:mb-[60px]"
          style={{
            WebkitBackgroundClip: "text !important",
            WebkitTextFillColor: "transparent",
            background:
              "linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)",
            backgroundClip: "text",
            color: "transparent",
            fontVariationSettings: "'wdth' 100",
          } as ExtendedCSSProperties}
        >
          {data?.label || "Our Service Pillars"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[60px]">
          {/* Service Card 1 */}
          <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
            <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
              <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                <div
                  className="absolute"
                  style={{
                    height: toPercent(getCardImageStyle(pillarCard1)?.heightPercent) || "121.49%",
                    left: toPercent(getCardImageStyle(pillarCard1)?.leftPercent) || "0%",
                    top: toPercent(getCardImageStyle(pillarCard1)?.topPercent) || "-17.42%",
                    width: toPercent(getCardImageStyle(pillarCard1)?.widthPercent) || "100%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={getUrl(getCardImage(pillarCard1), "/images/services/billing-finance-new.jpg")}
                      alt={getAlt(getCardImage(pillarCard1), "Billing & Finance")}
                      fill
                      sizes="122px"
                      className="absolute inset-0 w-full h-full object-cover"
                      unoptimized={isRemoteUrl(getUrl(getCardImage(pillarCard1), "/images/services/billing-finance-new.jpg"))}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                <div className="flex flex-col gap-[20px] items-start justify-center">
                  <h3
                    className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <span className="lg:hidden">
                      {renderWithBreaks(pillarCard1.titleMobile || pillarCard1.title || "Billing &\nFinance")}
                    </span>
                    <span className="hidden lg:inline">
                      {pillarCard1.titleDesktop || pillarCard1.title || "Billing & Finance"}
                    </span>
                  </h3>
                  <div
                    className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="mb-0 lg:inline lg:mr-2">{card1Lines[0] || ""}</p>
                    <p className="lg:inline">{card1Lines[1] || ""}</p>
                  </div>
                </div>
                <a className="flex gap-[10px] items-center w-full" href={normalizeHref(pillarCard1.learnMoreUrl) || "#"}>
                  <p
                    className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {pillarCard1.learnMoreLabel || "Learn More"}
                  </p>
                  <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                    <Image
                      src={getUrl(getCardLearnMoreIcon(pillarCard1), "/images/services/arrow-icon.svg")}
                      alt={getAlt(getCardLearnMoreIcon(pillarCard1), "Arrow")}
                      width={26}
                      height={26}
                      className="w-full h-full"
                      unoptimized={isRemoteUrl(getUrl(getCardLearnMoreIcon(pillarCard1), "/images/services/arrow-icon.svg"))}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
            <div className="flex gap-[20px] items-start pl-[20px] pr-[10px] py-[20px] overflow-hidden">
              <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                <div
                  className="absolute"
                  style={{
                    height: toPercent(getCardImageStyle(pillarCard2)?.heightPercent) || "100%",
                    left: toPercent(getCardImageStyle(pillarCard2)?.leftPercent) || "-71.67%",
                    top: toPercent(getCardImageStyle(pillarCard2)?.topPercent) || "0%",
                    width: toPercent(getCardImageStyle(pillarCard2)?.widthPercent) || "237.04%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={getUrl(getCardImage(pillarCard2), "/images/services/patient-intake-support.jpg")}
                      alt={getAlt(getCardImage(pillarCard2), "Patient Intake & Support")}
                      fill
                      sizes="120px"
                      className="absolute inset-0 w-full h-full object-cover"
                      unoptimized={isRemoteUrl(getUrl(getCardImage(pillarCard2), "/images/services/patient-intake-support.jpg"))}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[32px] items-start w-[150px] lg:w-auto">
                <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                  <h3
                    className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <span className="lg:hidden">
                      {renderWithBreaks(pillarCard2.titleMobile || pillarCard2.title || "Patient Intake\n& Support")}
                    </span>
                    <span className="hidden lg:inline">
                      {pillarCard2.titleDesktop || pillarCard2.title || "Patient Intake & Support"}
                    </span>
                  </h3>
                  <p
                    className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] lg:whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <span className="lg:hidden">{renderWithBreaks(card2Lines.join("\n") || "")}</span>
                    <span className="hidden lg:inline">
                      {pillarCard2.descriptionDesktop || pillarCard2.description || ""}
                    </span>
                  </p>
                </div>
                <a className="flex gap-[10px] items-center w-[127px] lg:w-full" href={normalizeHref(pillarCard2.learnMoreUrl) || "#"}>
                  <p
                    className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {pillarCard2.learnMoreLabel || "Learn More"}
                  </p>
                  <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                    <Image
                      src={getUrl(getCardLearnMoreIcon(pillarCard2), "/images/services/arrow-icon.svg")}
                      alt={getAlt(getCardLearnMoreIcon(pillarCard2), "Arrow")}
                      width={26}
                      height={26}
                      className="w-full h-full"
                      unoptimized={isRemoteUrl(getUrl(getCardLearnMoreIcon(pillarCard2), "/images/services/arrow-icon.svg"))}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
            <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
              <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                <div
                  className="absolute"
                  style={{
                    height: toPercent(getCardImageStyle(pillarCard3)?.heightPercent) || "100%",
                    left: toPercent(getCardImageStyle(pillarCard3)?.leftPercent) || "-26.67%",
                    top: toPercent(getCardImageStyle(pillarCard3)?.topPercent) || "0%",
                    width: toPercent(getCardImageStyle(pillarCard3)?.widthPercent) || "187.27%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={getUrl(getCardImage(pillarCard3), "/images/services/operations-admin-support.jpg")}
                      alt={getAlt(getCardImage(pillarCard3), "Operations & Admin Support")}
                      fill
                      sizes="122px"
                      className="absolute inset-0 w-full h-full object-cover"
                      unoptimized={isRemoteUrl(getUrl(getCardImage(pillarCard3), "/images/services/operations-admin-support.jpg"))}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                <div className="flex flex-col gap-[20px] items-start justify-center">
                  <h3
                    className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <span className="lg:hidden">
                      {renderWithBreaks(pillarCard3.titleMobile || pillarCard3.title || "Operations &\nAdmin Support")}
                    </span>
                    <span className="hidden lg:inline">
                      {pillarCard3.titleDesktop || pillarCard3.title || "Operations & Admin Support"}
                    </span>
                  </h3>
                  <div
                    className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="mb-0 lg:inline lg:mr-2">{card3Lines[0] || ""}</p>
                    <p className="lg:inline">{card3Lines[1] || ""}</p>
                  </div>
                </div>
                <a className="flex gap-[10px] items-center w-full" href={normalizeHref(pillarCard3.learnMoreUrl) || "#"}>
                  <p
                    className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {pillarCard3.learnMoreLabel || "Learn More"}
                  </p>
                  <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                    <Image
                      src={getUrl(getCardLearnMoreIcon(pillarCard3), "/images/services/arrow-icon.svg")}
                      alt={getAlt(getCardLearnMoreIcon(pillarCard3), "Arrow")}
                      width={26}
                      height={26}
                      className="w-full h-full"
                      unoptimized={isRemoteUrl(getUrl(getCardLearnMoreIcon(pillarCard3), "/images/services/arrow-icon.svg"))}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]">
            <div className="flex gap-[20px] items-start pl-[20px] pr-[10px] py-[20px] overflow-hidden">
              <div className="h-[150px] w-[120px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                <div
                  className="absolute"
                  style={{
                    height: toPercent(getCardImageStyle(pillarCard4)?.heightPercent) || "119.99%",
                    left: toPercent(getCardImageStyle(pillarCard4)?.leftPercent) || "0%",
                    top: toPercent(getCardImageStyle(pillarCard4)?.topPercent) || "-6%",
                    width: toPercent(getCardImageStyle(pillarCard4)?.widthPercent) || "100%",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={getUrl(getCardImage(pillarCard4), "/images/services/digital-presence-growth.jpg")}
                      alt={getAlt(getCardImage(pillarCard4), "Digital Presence & Growth")}
                      fill
                      sizes="120px"
                      className="absolute inset-0 w-full h-full object-cover"
                      unoptimized={isRemoteUrl(getUrl(getCardImage(pillarCard4), "/images/services/digital-presence-growth.jpg"))}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[32px] items-start w-[150px] lg:w-auto">
                <div className="flex flex-col gap-[20px] items-start justify-center w-full">
                  <h3
                    className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <span className="lg:hidden">
                      {renderWithBreaks(pillarCard4.titleMobile || pillarCard4.title || "Digital Presence\n& Growth")}
                    </span>
                    <span className="hidden lg:inline">
                      {pillarCard4.titleDesktop || pillarCard4.title || "Digital Presence & Growth"}
                    </span>
                  </h3>
                  <p
                    className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] lg:whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <span className="lg:hidden">{renderWithBreaks(card4Lines.join("\n") || "")}</span>
                    <span className="hidden lg:inline">
                      {pillarCard4.descriptionDesktop || pillarCard4.description || ""}
                    </span>
                  </p>
                </div>
                <a className="flex gap-[10px] items-center w-[127px] lg:w-full" href={normalizeHref(pillarCard4.learnMoreUrl) || "#"}>
                  <p
                    className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {pillarCard4.learnMoreLabel || "Learn More"}
                  </p>
                  <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                    <Image
                      src={getUrl(getCardLearnMoreIcon(pillarCard4), "/images/services/arrow-icon.svg")}
                      alt={getAlt(getCardLearnMoreIcon(pillarCard4), "Arrow")}
                      width={26}
                      height={26}
                      className="w-full h-full"
                      unoptimized={isRemoteUrl(getUrl(getCardLearnMoreIcon(pillarCard4), "/images/services/arrow-icon.svg"))}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {extraPillarCards.map((card, index) => {
            const descriptionLines = splitLines(card.descriptionMobile || card.description);
            return (
              <div
                key={`pillar-extra-${index}`}
                className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(204,211,234,0.25)] to-[rgba(80,86,104,0.125)] rounded-[12px] border border-[rgba(99,103,146,0.8)]"
              >
                <div className="flex gap-[20px] items-start pl-[20px] pr-[37px] py-[20px] overflow-hidden">
                  <div className="h-[150px] w-[121.5px] flex-shrink-0 overflow-hidden rounded-[12px] relative">
                    <div
                      className="absolute"
                      style={{
                        height: toPercent(getCardImageStyle(card)?.heightPercent) || "100%",
                        left: toPercent(getCardImageStyle(card)?.leftPercent) || "0%",
                        top: toPercent(getCardImageStyle(card)?.topPercent) || "0%",
                        width: toPercent(getCardImageStyle(card)?.widthPercent) || "100%",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={getUrl(getCardImage(card))}
                          alt={getAlt(getCardImage(card), card.title || "Service")}
                          fill
                          sizes="122px"
                          className="absolute inset-0 w-full h-full object-cover"
                          unoptimized={isRemoteUrl(getUrl(getCardImage(card)))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0">
                    <div className="flex flex-col gap-[20px] items-start justify-center">
                      <h3
                        className="font-sans font-medium text-[20px] lg:text-[26px] text-[#0b1737] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.52px] lg:whitespace-nowrap"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <span className="lg:hidden">{renderWithBreaks(card.titleMobile || card.title || "Service")}</span>
                        <span className="hidden lg:inline">{card.titleDesktop || card.title || "Service"}</span>
                      </h3>
                      <div
                        className="font-sans font-normal text-[13px] lg:text-[17px] text-[#0b1737] leading-[1.2] tracking-[-0.26px] lg:tracking-[-0.34px] whitespace-nowrap"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="mb-0 lg:inline lg:mr-2">{descriptionLines[0] || ""}</p>
                        <p className="lg:inline">{descriptionLines[1] || ""}</p>
                      </div>
                    </div>
                    <a className="flex gap-[10px] items-center w-full" href={normalizeHref(card.learnMoreUrl) || "#"}>
                      <p
                        className="font-sans font-semibold text-[18px] lg:text-[23px] text-[#1f3b8a] tracking-[-0.36px] lg:tracking-[-0.46px] capitalize"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {card.learnMoreLabel || "Learn More"}
                      </p>
                      <div className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <Image
                          src={getUrl(getCardLearnMoreIcon(card), "/images/services/arrow-icon.svg")}
                          alt={getAlt(getCardLearnMoreIcon(card), "Arrow")}
                          width={26}
                          height={26}
                          className="w-full h-full"
                          unoptimized={isRemoteUrl(getUrl(getCardLearnMoreIcon(card), "/images/services/arrow-icon.svg"))}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

