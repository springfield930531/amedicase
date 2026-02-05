"use client";

import { useState } from "react";
import Image from "next/image";
import { submitContactForm } from "@/lib/strapi";
import type { ContactBlockSection } from "@/lib/page-types";
import { DEFAULT_YOUTUBE_ID, extractYoutubeId } from "@/lib/youtube";

// Testimonial videos data (YouTube)
const defaultTestimonialVideos = [
  {
    id: 1,
    clientName: "Client Name",
    position: "Client Position",
    youtubeId: DEFAULT_YOUTUBE_ID,
  },
  {
    id: 2,
    clientName: "Client Name 2",
    position: "Client Position 2",
    youtubeId: DEFAULT_YOUTUBE_ID,
  },
  {
    id: 3,
    clientName: "Client Name 3",
    position: "Client Position 3",
    youtubeId: DEFAULT_YOUTUBE_ID,
  },
];

type ContactSectionProps = {
  data?: ContactBlockSection;
};

export function ContactSection({ data }: ContactSectionProps) {
  const testimonialVideos =
    data?.videoTestimonials?.length
      ? data.videoTestimonials.map((video, index: number) => ({
          id: index + 1,
          clientName: video?.name || "Client Name",
          position: video?.position || "Client Position",
          youtubeId: extractYoutubeId(video?.youtubeId) || DEFAULT_YOUTUBE_ID,
        }))
      : defaultTestimonialVideos;
  const hasMultipleTestimonials = testimonialVideos.length > 1;
  const label = data?.label || "What Our Clients Say";
  const title = data?.title || "Ready to Build Your Outsource Team?";
  const contactEmail = data?.contactEmail;
  const socialLinks = Array.isArray(data?.socialLinks) ? data.socialLinks : [];
  const facebookLink = socialLinks.find((link) => link?.platform?.toLowerCase?.().includes("facebook"));
  const instagramLink = socialLinks.find((link) => link?.platform?.toLowerCase?.().includes("instagram"));
  const emailHref = contactEmail ? `mailto:${contactEmail}` : "#";
  const facebookHref = facebookLink?.url || "https://www.facebook.com/amedicase";
  const instagramHref = instagramLink?.url || "https://www.instagram.com/amedicase";
  const isExternal = (url: string) => /^https?:\/\//i.test(url);

  const [activeIndex, setActiveIndex] = useState(0);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialVideos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonialVideos.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactForm({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        source: 'home-page',
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#f1f5ff] pt-[40px] md:pt-16 xl:pt-20 pb-[40px] md:pb-16 xl:pb-20 w-full">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0 w-full">
        {/* Responsive Grid Layout - 1 column below 768px, 2 columns 768px+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-[70px] w-full">
          {/* Left Side - Testimonials */}
          <div className="flex flex-col gap-[10px] md:gap-[10px] items-start w-full">
              {/* Section Label - Same height as "Ready to Build" */}
              <div className="flex flex-col gap-[40px] items-start w-full">
                <p className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[20px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
              </div>
              
              <div className="flex flex-col gap-[70px] items-start w-full">
                {/* Video Testimonial Slider & Navigation */}
                <div className="flex flex-col gap-[20px] w-full">
                  {/* Video Testimonial Card - Slider */}
                  <div className="relative w-full">
                    {/* Video Container with YouTube iframe - No padding/margin for seamless video */}
                    <div className="relative w-full aspect-video overflow-hidden mb-3 rounded-lg">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${testimonialVideos[activeIndex].youtubeId}`}
                        title={`Video Testimonial ${activeIndex + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    
                    {/* Slider Indicators */}
                    {hasMultipleTestimonials ? (
                      <div className="flex justify-center gap-2 mb-3">
                        {testimonialVideos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full hover:opacity-70 ${
                              index === activeIndex
                                ? "w-[10px] h-[10px] bg-[#1E3A8A] opacity-100"
                                : "w-[8px] h-[8px] bg-[#1E3A8A] opacity-40"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                  
                  {/* Client Name (Left) & Navigation Arrows (Right) */}
                  <div className="flex items-center justify-between w-full">
                    {/* Client Info - Left aligned */}
                    <div className="text-left transition-opacity duration-500">
                      <p className="font-sans font-semibold text-[14px] text-[#0b1737] leading-[1.2] mb-1">
                        {testimonialVideos[activeIndex].clientName}
                      </p>
                      <p className="font-sans font-normal text-[12px] text-[#6175ad] leading-[1.2]">
                        {testimonialVideos[activeIndex].position}
                      </p>
                    </div>
                    
                    {/* Navigation Arrows - Right aligned */}
                    {hasMultipleTestimonials ? (
                      <div className="flex gap-[20px] items-center">
                        <button 
                          onClick={goToPrevious}
                          className="flex items-center justify-center hover:opacity-80 transition-opacity"
                          aria-label="Previous testimonial"
                        >
                          <div className="rotate-180 scale-y-[-1]">
                            <Image alt="Previous" src="/images/arrow-left.svg" width={40} height={40} className="w-[40px] h-[40px]" />
                          </div>
                        </button>
                        <button 
                          onClick={goToNext}
                          className="flex items-center justify-center hover:opacity-80 transition-opacity"
                          aria-label="Next testimonial"
                        >
                          <Image alt="Next" src="/images/arrow-right.svg" width={40} height={40} className="w-[40px] h-[40px]" />
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
                
                {/* Social Links - Hidden on mobile, visible on tablet/desktop */}
                <div className="hidden md:flex flex-col gap-[40px] items-start w-[185px]">
                  <a
                    className="flex gap-[20px] items-center"
                    href={emailHref}
                  >
                    <Image alt="Mail" src="/images/mail-icon.svg" width={24} height={24} className="w-[24px] h-[24px]" />
                    <p className="font-sans font-medium leading-none text-[20px] text-blue-900 tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Our Email
                    </p>
                  </a>
                  <a
                    className="flex gap-[20px] items-center w-full"
                    href={facebookHref}
                    target={isExternal(facebookHref) ? "_blank" : undefined}
                    rel={isExternal(facebookHref) ? "noreferrer" : undefined}
                  >
                    <Image alt="Facebook" src="/images/facebook-icon.svg" width={24} height={24} className="w-[24px] h-[24px]" />
                    <p className="font-sans font-medium leading-none text-[20px] text-blue-900 tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Facebook Page
                    </p>
                  </a>
                  <a
                    className="flex gap-[20px] items-center w-full"
                    href={instagramHref}
                    target={isExternal(instagramHref) ? "_blank" : undefined}
                    rel={isExternal(instagramHref) ? "noreferrer" : undefined}
                  >
                    <Image alt="Instagram" src="/images/instagram-icon.svg" width={24} height={24} className="w-[24px] h-[24px]" />
                    <p className="font-sans font-medium leading-none text-[20px] text-blue-900 tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Instagram Page
                    </p>
                  </a>
                </div>
              </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="flex flex-col gap-[10px] md:gap-[60px] items-start w-full">
                {/* Title & Subtitle */}
                <div className="w-full">
                  <div className="md:hidden w-full">
                    <div className="title-block">
                      <h2 className="title-main">
                        {title}
                      </h2>
                      <p className="title-sub">
                        Let&apos;s help your home health agency grow with reliable and compliant outsourcing.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col gap-[5px] items-start w-full">
                  <h2 className="font-sans font-semibold leading-[1.1] text-[#000618] text-[clamp(28px,4vw,52px)] tracking-[-1.04px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {title}
                  </h2>
                  <p className="font-sans font-normal leading-[1.1] text-[#000618] text-[clamp(20px,2.5vw,33px)] tracking-[-0.66px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Let&apos;s help your home health agency grow with reliable and compliant outsourcing.
                  </p>
                  </div>
                </div>
                
                {/* Contact Form - Desktop (lg:) */}
                <form onSubmit={handleSubmit} className="hidden lg:block relative w-full h-[484px]">
                  {/* First Name */}
                  <div className="absolute border border-[#d4283c] border-solid h-[80px] left-0 rounded-[12px] top-0 w-[310px]">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="absolute inset-0 w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none px-[19px] py-[19px] text-[20px] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                  
                  {/* Last Name */}
                  <div className="absolute border border-[#d4283c] border-solid h-[80px] left-[330px] rounded-[12px] top-0 w-[310px]">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className="absolute inset-0 w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none px-[19px] py-[19px] text-[20px] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="absolute border border-[#d4283c] border-solid h-[80px] left-0 rounded-[12px] top-[100px] w-[640px]">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="absolute inset-0 w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none px-[19px] py-[19px] text-[20px] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                  
                  {/* Message */}
                  <div className="absolute border border-[#d4283c] border-solid h-[160px] left-0 rounded-[12px] top-[200px] w-[640px]">
                    <textarea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="absolute inset-0 w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none resize-none px-[19px] py-[19px] text-[20px] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                  
                  {/* Status Message */}
                  {submitStatus.type && (
                    <div className={`absolute left-0 top-[300px] w-[640px] px-[19px] py-2 rounded-[8px] ${
                      submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      <p className="font-sans font-normal text-[16px]">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute backdrop-blur-[7.555px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(209,51,69,0.8)] border-solid from-[rgba(205,27,48,0.3)] h-[104px] left-0 rounded-[16px] shadow-[0px_2px_8px_0px_rgba(167,32,41,0.5)] to-[rgba(215,45,64,0.2)] top-[380px] w-[640px] hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p className="font-sans font-semibold leading-[1.1] text-[#d94052] text-[33px] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {isSubmitting ? 'Submitting...' : 'Submit Your Inquiry'}
                    </p>
                  </button>
                </form>
                
                {/* Contact Form - Mobile/Tablet (below lg:) */}
                <form onSubmit={handleSubmit} className="lg:hidden flex flex-col gap-4 w-full">
                  {/* First Name & Last Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {/* First Name */}
                    <div className="border border-[#d4283c] border-solid h-[60px] sm:h-[80px] rounded-[12px] w-full">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none px-[19px] py-[19px] text-[clamp(16px,2vw,20px)] tracking-[-0.4px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div className="border border-[#d4283c] border-solid h-[60px] sm:h-[80px] rounded-[12px] w-full">
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none px-[19px] py-[19px] text-[clamp(16px,2vw,20px)] tracking-[-0.4px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="border border-[#d4283c] border-solid h-[60px] sm:h-[80px] rounded-[12px] w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none px-[19px] py-[19px] text-[clamp(16px,2vw,20px)] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                  
                  {/* Message */}
                  <div className="border border-[#d4283c] border-solid h-[120px] sm:h-[160px] rounded-[12px] w-full">
                    <textarea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="w-full h-full bg-transparent font-sans font-normal leading-[1.1] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none resize-none px-[19px] py-[19px] text-[clamp(16px,2vw,20px)] tracking-[-0.4px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                  
                  {/* Status Message */}
                  {submitStatus.type && (
                    <div className={`px-4 py-2 rounded-[8px] ${
                      submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      <p className="font-sans font-normal text-[14px]">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="backdrop-blur-[7.555px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(209,51,69,0.8)] border-solid from-[rgba(205,27,48,0.3)] h-[80px] sm:h-[104px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(167,32,41,0.5)] to-[rgba(215,45,64,0.2)] w-full hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p className="font-sans font-semibold leading-[1.1] text-[#d94052] text-[clamp(24px,3vw,33px)] text-center tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {isSubmitting ? 'Submitting...' : 'Submit Your Inquiry'}
                    </p>
                  </button>
                </form>
          </div>
        </div>
      </div>
    </section>
  );
}
