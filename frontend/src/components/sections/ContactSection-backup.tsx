/* eslint-disable */
// @ts-nocheck

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#f1f5ff] py-[20px] lg:py-12">
      <div className="mx-auto max-w-[1440px] w-full px-[6px] lg:px-8">
        {/* Mobile Layout - Exact Figma design */}
        <div className="lg:hidden mx-auto relative w-full max-w-[340px] h-[472px]">
          <div className="grid grid-cols-2 grid-rows-5 gap-[5px] relative size-full">
            {/* Title - Row 1, Col 1 */}
            <h2 className="col-[1] row-[1] font-sans font-semibold leading-[1.1] text-[#000618] text-[33px] tracking-[-0.66px] w-[320px] whitespace-pre-wrap self-start" style={{ fontVariationSettings: "'wdth' 100" }}>
              Ready to Build Your Outsource Team?
            </h2>
            
            {/* First Name - Row 2, Col 1 */}
            <div className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] col-[1] row-[2] h-[40px] p-[10px] w-[150px]">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-full bg-transparent font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            {/* Last Name - Row 2, Col 2 */}
            <div className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] col-[2] row-[2] h-[40px] p-[10px] w-[150px]">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-full bg-transparent font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            {/* Email - Row 3, Span 2 columns */}
            <div className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] col-[1_/_span_2] row-[3] h-[38px] p-[10px] w-[320px] self-start">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-full bg-transparent font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            {/* Message - Row 4, Span 2 columns */}
            <div className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] col-[1_/_span_2] row-[4] p-[10px_10px_20px_10px] w-[321px] overflow-clip">
              <textarea
                placeholder="Message"
                className="w-full h-full min-h-[90px] bg-transparent font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none resize-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>

            {/* Submit Button - Absolute positioned, exact Figma: top-[400.33px], left-0, w-[320px], h-[54px] */}
            <button className="absolute backdrop-blur-[3.777px] backdrop-filter bg-gradient-to-b border border-[rgba(209,51,69,0.8)] border-solid from-[rgba(205,27,48,0.3)] h-[54px] left-0 rounded-[8px] to-[rgba(215,45,64,0.2)] top-[400.33px] w-[320px] hover:opacity-90 transition-opacity flex items-center justify-center">
              <p className="font-sans font-semibold leading-[1.1] text-[#d94052] text-[20px] text-center tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Submit Your Inquiry
              </p>
            </button>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-2xl mx-auto">
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-semibold leading-[1.1] text-[#000618] text-[clamp(28px,3vw,42px)] tracking-[-0.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Ready to Build Your Outsource Team?
            </h2>
            <p className="font-sans font-normal leading-[1.2] text-[#000618] text-[clamp(13px,1.2vw,16px)] tracking-[-0.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Let&apos;s help your home health agency grow with reliable and compliant outsourcing.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] h-[48px] px-4 font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] h-[48px] px-4 font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] h-[48px] px-4 font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none"
              style={{ fontVariationSettings: "'wdth' 100" }}
            />
            <textarea
              placeholder="Message"
              className="border-[#d4283c] border-[0.5px] border-solid rounded-[12px] min-h-[120px] p-4 font-sans font-normal text-[13px] text-[#e2abba] placeholder:text-[#e2abba] focus:outline-none resize-none"
              style={{ fontVariationSettings: "'wdth' 100" }}
            />
            <button className="backdrop-blur-[3.777px] bg-gradient-to-b from-[rgba(205,27,48,0.3)] to-[rgba(215,45,64,0.2)] rounded-[8px] border border-[rgba(209,51,69,0.8)] h-[54px] font-sans font-semibold text-[clamp(16px,1.5vw,20px)] text-[#d94052] text-center tracking-[-0.4px] hover:opacity-90 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
              Submit Your Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
