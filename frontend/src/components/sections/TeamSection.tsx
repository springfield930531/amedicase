"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitleWithSubtitle } from "@/components/shared/SectionTitleWithSubtitle";
import { getMediaUrl } from "@/lib/strapi-home";
import { isExternalHref, normalizeHref } from "@/lib/href";
import type { AboutTeamSection, CtaData, StrapiMedia } from "@/lib/page-types";

const defaultTeamMembers = [
  {
    name: "Dorin",
    surname: "Acru",
    position: "Marketing Manager",
    description: "Building trust through precision, clarity\nand modern medical management.",
    photo: "/images/team-member-photo.jpg",
  },
  {
    name: "Dorin",
    surname: "Acru",
    position: "Marketing Manager",
    description: "Building trust through precision, clarity\nand modern medical management.",
    photo: "/images/team-member-photo.jpg",
  },
  {
    name: "Dorin",
    surname: "Acru",
    position: "Marketing Manager",
    description: "Building trust through precision, clarity\nand modern medical management.",
    photo: "/images/team-member-photo.jpg",
  },
];

type TeamSectionProps = {
  data?: AboutTeamSection & {
    members?: Array<{
      firstName?: string;
      lastName?: string;
      role?: string;
      bio?: string;
      photo?: StrapiMedia | null;
    }>;
    supportGraphic?: StrapiMedia | null;
    cta?: CtaData | null;
  };
};

export function TeamSection({ data }: TeamSectionProps) {
  const teamList =
    data?.teamMembers?.length
      ? data.teamMembers
      : data?.members?.length
        ? data.members
        : null;
  const members = teamList?.length
    ? teamList.map((member) => ({
        name: member?.firstName || "",
        surname: member?.lastName || "",
        position: member?.role || "",
        description: member?.bio || "",
        photo: getMediaUrl(member?.photo) || "/images/team-member-photo.jpg",
      }))
    : defaultTeamMembers;
  const label = data?.label || "Our Team Behind the Care";
  const title =
    data?.title ||
    "Healthcare professionals & process engineers 1+ years in U.S. home health operations.";
  const supportGraphic =
    getMediaUrl(data?.supportGraphic) || "/images/team-vector-logo.svg";
  const ctaLabel = data?.cta?.label || "Learn More About Us";
  const ctaUrl = normalizeHref(data?.cta?.url) || "/about";
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);
  const ctaExternal =
    typeof data?.cta?.isExternal === "boolean"
      ? data.cta.isExternal
      : isExternalHref(ctaUrl);

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const ArrowButton = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous team member" : "Next team member"}
      className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="44"
        viewBox="0 0 20 44"
        fill="none"
        className={direction === "left" ? "scale-x-[-1]" : ""}
      >
        <path
          opacity="0.9"
          d="M2.90865 10.2326C-1.111 6.13953 -0.106092 1.70543 0.898821 0C5.25217 4.77519 14.7628 15.1442 17.9785 18.4186C21.1942 21.693 20.0983 23.5349 17.9785 25.5814L0.895001 44C-0.715917 39.907 0.898822 35.814 2.90865 33.7674L11.949 24.5581C14.0688 22.5116 13.2877 20.8062 11.949 19.4419C10.6104 18.0775 6.9283 14.3256 2.90865 10.2326Z"
          fill="#D01127"
        />
      </svg>
    </button>
  );

  // Calculate indices with modulo for infinite loop
  const totalCards = members.length;
  const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
  const nextIndex = (currentIndex + 1) % totalCards;
  const currentMember = members[currentIndex] || members[0];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const goToSlide = (index: number) => {
    const safeIndex = ((index % totalCards) + totalCards) % totalCards;
    setCurrentIndex(safeIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left -> next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swipe right -> previous
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };


  return (
    <section id="team" className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 xl:pt-20 pb-[40px] md:pb-16 xl:pb-20">
      <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0">
      <div className="relative z-10 w-full">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Section Header - Standardized spacing */}
          <div className="flex flex-col gap-2 items-start mb-[20px] md:mb-12">
            <p className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[clamp(14px,1.8vw,15px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
              {label}
            </p>
            <h2 className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#000618] text-[clamp(28px,4vw,33px)] lg:text-[42px] tracking-[-0.66px] w-full whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
              {title}
            </h2>
          </div>

          {/* Team Card - Mobile Responsive layout */}
          <div
            className="mb-[20px] md:mb-12 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="min-h-[clamp(280px,81vw,323px)] relative shrink-0 w-full">
              <div className="absolute contents left-0 top-0">
                {/* Card Background - Full width with inset-0 */}
                <div className="absolute inset-0 backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.225)] rounded-[12px] to-[rgba(84,100,145,0.15)] overflow-hidden" />
                
                {/* Image - Responsive positioning */}
                <div className="absolute bg-repeat bg-size-[197.419921875px_198px] bg-top-left h-[clamp(120px,36vw,144px)] left-[clamp(15px,5vw,20px)] rounded-[12px] top-[clamp(15px,5vw,20px)] w-[clamp(120px,36vw,144px)] overflow-hidden">
                  <Image 
                    src={currentMember?.photo || "/images/team-member-photo.jpg"} 
                    alt={`${currentMember?.name || ""} ${currentMember?.surname || ""}`} 
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name - Responsive positioning */}
                <p className="absolute font-sans font-semibold leading-[1.2] left-[calc(50%+clamp(18px,6vw,24px))] text-[clamp(16px,5vw,20px)] text-blue-900 top-[clamp(30px,10vw,40px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentMember?.name}
                  <br />
                  {currentMember?.surname}
                </p>
                
                {/* Position - Responsive positioning */}
                <p className="absolute font-sans font-normal leading-[1.1] left-[clamp(15px,5vw,20px)] text-[clamp(16px,5vw,20px)] text-blue-900 top-[clamp(160px,45vw,184px)] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentMember?.position}
                </p>
                
                {/* Description - Responsive positioning */}
                <p className="absolute font-sans font-normal leading-[1.2] left-[clamp(15px,5vw,20px)] text-[#000618] text-[clamp(11px,3.25vw,13px)] top-[clamp(190px,54vw,218px)] tracking-[-0.26px] w-[calc(100%-clamp(30px,10vw,40px))] max-w-[271px] whitespace-pre-wrap break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentMember?.description}
                </p>
                
                {/* Pagination Dots - Responsive positioning */}
                <div className="absolute flex gap-[clamp(10px,3vw,15px)] items-center left-1/2 -translate-x-1/2" style={{ top: 'clamp(250px,73vw,293px)' }}>
                  {members.map((_, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <button
                        key={`team-dot-${index}`}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className="size-[clamp(8px,2.5vw,10px)] p-0 border-0 bg-transparent hover:opacity-80 transition-opacity"
                        aria-label={`Go to team member ${index + 1}`}
                      >
                        <Image
                          alt=""
                          src={isActive ? "/images/team-member-1.png" : "/images/team-member-2.png"}
                          width={10}
                          height={10}
                          className="block max-w-none size-full"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Standardized padding */}
          <div className="mt-[20px] md:mt-12">
            <Link
              href={ctaUrl}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
              className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border-[0.874px] border-[rgba(50,59,159,0.8)] border-solid box-border content-stretch flex from-[rgba(45,78,174,0.64)] gap-[5.396px] items-center justify-center p-[20px] relative rounded-[8px] shrink-0 to-[rgba(34,62,140,0.48)] w-full hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[clamp(18px,2.5vw,20px)] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {ctaLabel}
              </p>
            </Link>
          </div>
        </div>

        {/* Desktop Layout - Slider */}
        <div className="hidden lg:block">
          {/* Header with Logo */}
          <div className="relative flex items-end justify-between gap-[84px]">
            <SectionTitleWithSubtitle
              label={label}
              title={title}
              className="mb-0"
            />
            <div className="absolute right-[-270px] h-[154px] shrink-0 w-[260.963px]">
              <Image
                alt="Logo"
                src={supportGraphic}
                fill
                sizes="260px"
                className="block max-w-none size-full"
                unoptimized={isRemoteUrl(supportGraphic)}
              />
            </div>
          </div>

          {/* Team Cards Slider */}
          <div className="flex items-center justify-center mb-[60px] mt-[50px] min-h-[439px]">
            <div 
              className="relative w-full max-w-[960px] h-[439px]" 
              style={{ 
                perspective: "1000px",
                backgroundColor: "#f3f6ff"
              }}
            >
              {/* Arrows - Fixed position next to center card */}
              <div className="absolute top-1/2 z-20" style={{ left: "calc(50% - 250px)", transform: "translateY(-50%)" }}>
                <ArrowButton direction="left" onClick={goToPrevious} />
              </div>
              <div className="absolute top-1/2 z-20" style={{ left: "calc(50% + 230px)", transform: "translateY(-50%)" }}>
                <ArrowButton direction="right" onClick={goToNext} />
              </div>
              
              {members.map((member, index: number) => {
                // Determine slide class based on index position
                let slideClass = "slide";
                if (index === currentIndex) {
                  slideClass += " slide-center";
                } else if (index === prevIndex) {
                  slideClass += " slide-left";
                } else if (index === nextIndex) {
                  slideClass += " slide-right";
                } else {
                  // Hide other cards
                  slideClass += " slide-hidden";
                }

                const isCenter = index === currentIndex;
                
                return (
                  <div
                    key={`team-card-${index}`}
                    className={slideClass}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: isCenter 
                        ? "translate(-50%, -50%) translateX(0) scale(1)" 
                        : index === prevIndex
                        ? "translate(-50%, -50%) translateX(-115%) scale(0.9)"
                        : index === nextIndex
                        ? "translate(-50%, -50%) translateX(115%) scale(0.9)"
                        : "translate(-50%, -50%) scale(0.9)",
                      filter: isCenter ? "none" : "blur(3px)",
                      opacity: isCenter ? 1 : index === prevIndex || index === nextIndex ? 0.65 : 0,
                      zIndex: isCenter ? 3 : index === prevIndex || index === nextIndex ? 2 : 1,
                      transition: "transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
                      pointerEvents: isCenter || index === prevIndex || index === nextIndex ? "auto" : "none",
                      width: isCenter ? "420px" : "385px",
                      height: isCenter ? "439px" : "405px",
                    }}
                  >
                      <div
                        className="h-full w-full p-[32px] lg:p-[40px] flex flex-col items-start justify-start"
                        style={{
                          borderRadius: "12px",
                          border: "1px solid rgba(158, 162, 203, 0.80)",
                          background: "linear-gradient(180deg, rgba(183, 198, 243, 0.22) 0%, rgba(84, 100, 145, 0.15) 100%)",
                          boxShadow: "0 2px 4px 0 rgba(129, 132, 178, 0.30)",
                          backdropFilter: "blur(7px)",
                        }}
                      >
                        {/* Content row - Image left, Name right */}
                        <div className="flex items-start gap-6 w-full">
                          {/* Left side - Image */}
                          <div
                            className="overflow-hidden shrink-0"
                            style={{
                              width: isCenter ? "200px" : "183px",
                              height: isCenter ? "200px" : "183px",
                              borderRadius: isCenter ? "12px" : "11px",
                            }}
                          >
                            <Image
                              alt={member.name}
                              src={member.photo}
                              width={200}
                              height={200}
                              className="w-full h-full object-cover pointer-events-none"
                              unoptimized={isRemoteUrl(member.photo)}
                            />
                          </div>
                          {/* Right side - Name */}
                          <p
                            className="font-sans font-semibold leading-[1.2] text-blue-900 text-left"
                            style={{
                              fontSize: isCenter ? "33px" : "30px",
                              fontVariationSettings: "'wdth' 100",
                            }}
                          >
                            {member.name}
                            <br />
                            {member.surname}
                          </p>
                        </div>
                        {/* Text content below */}
                        <div className="flex flex-col items-start justify-start w-full mt-2">
                          <p
                            className="font-sans font-normal leading-[1.1] text-blue-900 text-left"
                            style={{
                              fontSize: isCenter ? "33px" : "30px",
                              letterSpacing: isCenter ? "-0.66px" : "-0.6px",
                              fontVariationSettings: "'wdth' 100",
                            }}
                          >
                            {member.position}
                          </p>
                          <p
                            className="font-sans font-normal leading-[1.2] text-[#000618] whitespace-pre-wrap text-left mt-2"
                            style={{
                              fontSize: isCenter ? "20px" : "18px",
                              letterSpacing: isCenter ? "-0.4px" : "-0.37px",
                              maxWidth: isCenter ? "340px" : "312px",
                              fontVariationSettings: "'wdth' 100",
                            }}
                          >
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center">
            <Link
              href={ctaUrl}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
              className="backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border-[0.874px] border-[rgba(50,59,159,0.8)] border-solid box-border flex from-[rgba(45,78,174,0.64)] gap-[5.396px] items-center justify-center p-[20px] rounded-[12px] to-[rgba(34,62,140,0.48)] w-[420px] hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[#f1f5ff] text-[33px] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
