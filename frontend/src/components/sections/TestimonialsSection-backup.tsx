import { useState, useRef } from "react";

// Array de video-uri pentru carousel
const testimonialVideos = [
  {
    id: 1,
    youtubeId: "dQw4w9WgXcQ", // Înlocuiește cu ID-urile reale de YouTube
    title: "Client Testimonial 1",
    clientName: "John Smith",
    company: "Healthcare Solutions Inc.",
    position: "CEO"
  },
  {
    id: 2,
    youtubeId: "dQw4w9WgXcQ", // Înlocuiește cu ID-urile reale de YouTube
    title: "Client Testimonial 2",
    clientName: "Sarah Johnson",
    company: "MedCare Group",
    position: "Director of Operations"
  },
  {
    id: 3,
    youtubeId: "dQw4w9WgXcQ", // Înlocuiește cu ID-urile reale de YouTube
    title: "Client Testimonial 3",
    clientName: "Michael Brown",
    company: "HealthFirst Services",
    position: "Founder"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && activeIndex < testimonialVideos.length - 1) {
      // Swipe left - next video
      setActiveIndex(activeIndex + 1);
    } else if (distance < -minSwipeDistance && activeIndex > 0) {
      // Swipe right - previous video
      setActiveIndex(activeIndex - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative bg-[#f1f5ff]">
      <div className="mx-auto max-w-[1440px] w-full max-w-[340px] lg:w-full lg:px-8 px-[6px]">
        {/* Section Header - Exact Figma layout */}
        <div className="flex flex-col gap-[20px] items-start mb-[20px]">
          <p 
            className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] min-w-full relative shrink-0 text-[13px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-[min-content] whitespace-pre-wrap"
            style={{
              WebkitTextFillColor: 'transparent',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            What Our Clients Say
          </p>
        </div>

        {/* Video Carousel - Mobile - Exact Figma layout */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile - Exact Figma positioning with slider */}
          <div 
            className="lg:hidden relative w-[320px] mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Outer frame - Contains video, text and dots */}
            <div className="relative backdrop-blur-[7px] bg-gradient-to-b from-[rgba(45,78,174,0.64)] to-[rgba(34,62,140,0.48)] rounded-[12px] border border-[rgba(50,59,159,0.8)] w-[320px] overflow-hidden">
              {/* Video Player - Exact Figma positioning */}
              <div className="absolute bg-[#040505] border border-[#161414] rounded-[12px] h-[153px] left-[20px] top-[20px] w-[280px] overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-[12px]"
                  src={`https://www.youtube.com/embed/${testimonialVideos[activeIndex].youtubeId}`}
                  title={testimonialVideos[activeIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              
              {/* Container for text and dots - Inside frame */}
              <div className="relative pt-[185px] pb-[20px] px-[20px]">
                {/* Client Info - Aligned left with video */}
                <div className="text-left mb-[15px]">
                  {/* Client Name */}
                  <p className="font-sans font-semibold text-[#f1f5ff] text-[18px] leading-[1.2] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {testimonialVideos[activeIndex].clientName}
                  </p>
                  {/* Company and Position */}
                  <p className="font-sans font-normal text-[#f1f5ff] text-[13px] leading-[1.2] opacity-90" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {testimonialVideos[activeIndex].company}, {testimonialVideos[activeIndex].position}
                  </p>
                </div>
                
                {/* Slider Indicators - Centered below client info */}
                <div className="flex justify-center gap-[5px]">
                  {testimonialVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        index === activeIndex
                          ? "w-[10px] h-[10px] bg-[#F1F5FF] opacity-100"
                          : "w-[10px] h-[10px] bg-[#F1F5FF] opacity-40"
                      } rounded-full hover:opacity-70`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Video Player Container - Muted blue-purple frame */}
            <div 
              className="relative backdrop-blur-[7px] bg-gradient-to-b from-[rgba(183,198,243,0.25)] to-[rgba(84,100,145,0.15)] rounded-xl border border-[rgba(158,162,203,0.8)] shadow-[0px_2px_4px_0px_rgba(129,132,178,0.3)] p-4 sm:p-6 lg:p-8 mb-6"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* YouTube Player - Dark screen with rounded corners */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${testimonialVideos[activeIndex].youtubeId}`}
                  title={testimonialVideos[activeIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              
              {/* Client Info - Below video */}
              <div className="text-center mt-4">
                {/* Client Name */}
                <p className="font-sans font-semibold text-[16px] sm:text-[18px] text-[#0b1737] leading-[1.2] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {testimonialVideos[activeIndex].clientName}
                </p>
                {/* Company and Position */}
                <p className="font-sans font-normal text-[13px] sm:text-[14px] text-[#6175ad] leading-[1.2] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {testimonialVideos[activeIndex].company}, {testimonialVideos[activeIndex].position}
                </p>
              </div>

              {/* Slider Indicators - Below client info */}
              <div className="flex justify-center gap-3">
                {testimonialVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === activeIndex
                        ? "w-[12px] h-[12px] bg-[#1E3A8A] opacity-100 scale-110"
                        : "w-[10px] h-[10px] bg-[#1E3A8A] opacity-40"
                    } rounded-full hover:opacity-70`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
