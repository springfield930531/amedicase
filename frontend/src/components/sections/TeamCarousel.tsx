"use client";

import { useState } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  surname: string;
  position: string;
  description: string;
  photo: string;
};

type TeamCarouselProps = {
  members?: TeamMember[];
  mobileProfilePhoto?: string;
  dotImagePrimary?: string;
  dotImageSecondary?: string;
};

const fallbackMembers: TeamMember[] = [
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

export function TeamCarousel({
  members,
  mobileProfilePhoto,
  dotImagePrimary = "/images/team-member-1.png",
  dotImageSecondary = "/images/team-member-2.png",
}: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = members && members.length ? members : fallbackMembers;
  const totalCards = teamMembers.length;
  const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
  const nextIndex = (currentIndex + 1) % totalCards;
  const isRemoteUrl = (url: string) => /^https?:\/\//i.test(url);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex);
  };

  const goToNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="w-full">
      {/* Mobile/Tablet Carousel - Card only (no title) */}
      <div className="lg:hidden">
        {(() => {
          const member = teamMembers[0];
          const mobilePhoto = mobileProfilePhoto || member.photo;
          const descriptionLines = member.description.split("\n");
          return (
        <div className="mb-[20px] md:mb-12 overflow-hidden">
          <div className="min-h-[clamp(280px,81vw,323px)] relative shrink-0 w-full">
            <div className="absolute contents left-0 top-0">
              {/* Card Background - Full width with inset-0 */}
              <div className="absolute inset-0 backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(158,162,203,0.8)] border-solid from-[rgba(183,198,243,0.225)] rounded-[12px] to-[rgba(84,100,145,0.15)] overflow-hidden" />

              {/* Image - Responsive positioning */}
              <div className="absolute bg-repeat bg-size-[197.419921875px_198px] bg-top-left h-[clamp(120px,36vw,144px)] left-[clamp(15px,5vw,20px)] rounded-[12px] top-[clamp(15px,5vw,20px)] w-[clamp(120px,36vw,144px)] overflow-hidden">
                <Image
                  src={mobilePhoto}
                  alt={`${member.name} ${member.surname}`}
                  fill
                  sizes="(max-width: 1024px) 40vw, 144px"
                  className="object-cover"
                  unoptimized={isRemoteUrl(mobilePhoto)}
                />
              </div>

              {/* Name - Responsive positioning */}
              <p
                className="absolute font-sans font-semibold leading-[1.2] left-[calc(50%+clamp(18px,6vw,24px))] text-[clamp(16px,5vw,20px)] text-blue-900 top-[clamp(30px,10vw,40px)]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {member.name}
                <br />
                {member.surname}
              </p>

              {/* Position - Responsive positioning */}
              <p
                className="absolute font-sans font-normal leading-[1.1] left-[clamp(15px,5vw,20px)] text-[clamp(16px,5vw,20px)] text-blue-900 top-[clamp(160px,45vw,184px)] tracking-[-0.4px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {member.position}
              </p>

              {/* Description - Responsive positioning */}
              <p
                className="absolute font-sans font-normal leading-[1.2] left-[clamp(15px,5vw,20px)] text-[#000618] text-[clamp(11px,3.25vw,13px)] top-[clamp(190px,54vw,218px)] tracking-[-0.26px] w-[calc(100%-clamp(30px,10vw,40px))] max-w-[271px] whitespace-pre-wrap break-words"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {descriptionLines.map((line, idx) => (
                  <span key={`mobile-team-desc-${idx}`}>
                    {line}
                    {idx < descriptionLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>

              {/* Pagination Dots - Responsive positioning */}
              <div
                className="absolute flex gap-[clamp(10px,3vw,15px)] items-center left-1/2 -translate-x-1/2"
                style={{ top: "clamp(250px,73vw,293px)" }}
              >
                <div className="size-[clamp(8px,2.5vw,10px)]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={dotImagePrimary}
                    width={10}
                    height={10}
                    unoptimized={isRemoteUrl(dotImagePrimary)}
                  />
                </div>
                <div className="size-[clamp(8px,2.5vw,10px)]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={dotImageSecondary}
                    width={10}
                    height={10}
                    unoptimized={isRemoteUrl(dotImageSecondary)}
                  />
                </div>
                <div className="size-[clamp(8px,2.5vw,10px)]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src={dotImageSecondary}
                    width={10}
                    height={10}
                    unoptimized={isRemoteUrl(dotImageSecondary)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          );
        })()}
      </div>

      {/* Desktop Carousel - Slider only (no title/CTA) */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center mb-[60px] mt-[50px] min-h-[439px]">
          <div
            className="relative w-full max-w-[960px] h-[439px]"
            style={{
              perspective: "1000px",
              backgroundColor: "#f3f6ff",
            }}
          >
            {/* Arrows - Fixed position next to center card */}
            <div
              className="absolute top-1/2 z-20"
              style={{ left: "calc(50% - 250px)", transform: "translateY(-50%)" }}
            >
              <ArrowButton direction="left" onClick={goToPrevious} />
            </div>
            <div
              className="absolute top-1/2 z-20"
              style={{ left: "calc(50% + 230px)", transform: "translateY(-50%)" }}
            >
              <ArrowButton direction="right" onClick={goToNext} />
            </div>

            {teamMembers.map((member, index) => {
              let slideClass = "slide";
              if (index === currentIndex) {
                slideClass += " slide-center";
              } else if (index === prevIndex) {
                slideClass += " slide-left";
              } else if (index === nextIndex) {
                slideClass += " slide-right";
              } else {
                slideClass += " slide-hidden";
              }

              const isCenter = index === currentIndex;

              return (
                <div
                  key={`about-team-card-${index}`}
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
                    opacity: isCenter
                      ? 1
                      : index === prevIndex || index === nextIndex
                      ? 0.65
                      : 0,
                    zIndex: isCenter ? 3 : index === prevIndex || index === nextIndex ? 2 : 1,
                    transition:
                      "transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
                    pointerEvents:
                      isCenter || index === prevIndex || index === nextIndex
                        ? "auto"
                        : "none",
                    width: isCenter ? "420px" : "385px",
                    height: isCenter ? "439px" : "405px",
                  }}
                >
                  <div
                    className="h-full w-full p-[32px] lg:p-[40px] flex flex-col items-start justify-start"
                    style={{
                      borderRadius: "12px",
                      border: "1px solid rgba(158, 162, 203, 0.80)",
                      background:
                        "linear-gradient(180deg, rgba(183, 198, 243, 0.22) 0%, rgba(84, 100, 145, 0.15) 100%)",
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
                          className="w-full h-full object-cover pointer-events-none"
                          src={member.photo}
                          width={200}
                          height={200}
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
      </div>
    </div>
  );
}

