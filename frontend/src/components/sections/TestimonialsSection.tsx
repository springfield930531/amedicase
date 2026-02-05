"use client";

import { useState, useEffect } from "react";
import { DEFAULT_YOUTUBE_ID } from "@/lib/youtube";

interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitBackgroundClip?: string;
  WebkitTextFillColor?: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  youtubeId: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name 1",
    position: "Client Position 1",
    youtubeId: DEFAULT_YOUTUBE_ID,
  },
  {
    id: 2,
    name: "Client Name 2",
    position: "Client Position 2",
    youtubeId: DEFAULT_YOUTUBE_ID,
  },
  {
    id: 3,
    name: "Client Name 3",
    position: "Client Position 3",
    youtubeId: DEFAULT_YOUTUBE_ID,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 xl:pt-20 pb-[40px] md:pb-16 xl:pb-20 w-full">
      <div className="mx-auto max-w-[1440px] px-0 md:px-8 xl:px-0 w-full">
        <p
          className="font-sans font-medium text-[clamp(14px,1.8vw,15px)] uppercase mb-2 md:mb-3"
          style={{
            WebkitBackgroundClip: 'text !important',
            WebkitTextFillColor: 'transparent',
            background:
              'linear-gradient(90deg, rgba(208, 17, 39, 1) 0%, rgba(30, 58, 138, 1) 20%, rgba(30, 58, 138, 1) 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontVariationSettings: "'wdth' 100",
          } as ExtendedCSSProperties}
        >
          What Our Clients Say
        </p>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider Wrapper */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full flex-shrink-0">
                  {/* Video Container - Full width within container */}
                  <div className="relative backdrop-blur-[7px] bg-gradient-to-b from-[rgba(183,198,243,0.25)] to-[rgba(84,100,145,0.15)] rounded-xl border border-[rgba(158,162,203,0.8)] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] w-full box-border">
                    {/* YouTube Video - No padding/margin for seamless video */}
                    <div className="relative w-full aspect-video overflow-hidden rounded-t-xl mb-4">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${testimonial.youtubeId}`}
                        title={testimonial.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>

                    {/* Client Info */}
                    <div className="text-center mb-4">
                      <p className="font-sans font-semibold text-[16px] sm:text-[18px] text-[#0b1737] leading-[1.2] mb-1">
                        {testimonial.name}
                      </p>
                      <p className="font-sans font-normal text-[13px] sm:text-[14px] text-[#6175ad] leading-[1.2]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-[#1E3A8A] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-[#1E3A8A]/80 transition-colors z-10 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-[#1E3A8A] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-[#1E3A8A]/80 transition-colors z-10 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-[12px] h-[12px] bg-[#1E3A8A] opacity-100"
                    : "w-[10px] h-[10px] bg-[#1E3A8A] opacity-40"
                } rounded-full hover:opacity-70`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
