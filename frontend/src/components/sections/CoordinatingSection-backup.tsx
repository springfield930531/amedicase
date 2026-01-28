/* eslint-disable */
// @ts-nocheck

import svgPaths from "../../lib/imports/svg-ie2km5jka3";
// @ts-ignore - Image file exists with space in name
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import photoSection5 from "../photo section 5.jpg";

export function CoordinatingSection() {
  return (
    <section className="relative bg-[#f1f5ff]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="max-w-6xl mx-auto">
          {/* Mobile - Exact Figma layout */}
          <div className="lg:hidden content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] h-[226px] w-full max-w-[340px] mx-auto">
            <img 
              src={photoSection5} 
              alt="Healthcare coordination" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full"
            />
            <div className="bg-[rgba(30,58,138,0.4)] h-[240.022px] relative shrink-0 w-[360.614px]">
              {/* Text - Exact Figma positioning - Single line */}
              <p className="absolute font-sans font-medium leading-[1.1] left-[180px] text-[#f1f5ff] text-[20px] text-center top-[113.27px] tracking-[-0.4px] translate-x-[-50%] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Coordinating better outcomes.
              </p>
              {/* Pattern 2 - Exact Figma positioning */}
              <div className="absolute inset-[21.66%_39.15%_61.09%_31.61%]">
                <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/ed17630e-3851-4f7f-ab21-648c2c862173" />
              </div>
              {/* Pattern 1 - Exact Figma positioning */}
              <div className="absolute inset-[61.41%_39.15%_21.35%_31.61%]">
                <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/0d8381e7-02b5-4e04-86a1-8b14d61bda14" />
              </div>
            </div>
            {/* Placeholder divs for exact Figma structure */}
            <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[226px] items-center justify-center left-0 top-0 w-[339px]">
              <div className="h-[31.677px] relative shrink-0 w-[79.99px]" />
              <div className="h-[19.79px] relative shrink-0 w-[247.959px]" />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative rounded-xl overflow-hidden aspect-[16/9] max-w-2xl mx-auto lg:max-w-none">
            <img 
              src={photoSection5} 
              alt="Healthcare coordination" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(30,58,138,0.6)] mix-blend-hard-light" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-8">
              {/* Arrow Icons */}
              <div className="flex gap-2 mb-4">
                <svg className="w-[80px] sm:w-[100px] h-auto" fill="none" viewBox="0 0 106 42">
                  <path d={svgPaths.p1d182d80} fill="#F1F5FF" />
                </svg>
              </div>
              <div className="flex gap-2 mb-6">
                <svg className="w-[80px] sm:w-[100px] h-auto" fill="none" viewBox="0 0 106 42">
                  <path d={svgPaths.p23b94400} fill="#F1F5FF" />
                </svg>
              </div>
              
              <p className="font-sans font-medium text-[18px] sm:text-[20px] lg:text-[24px] text-[#f1f5ff] text-center leading-[1.1] tracking-[-0.02em] whitespace-nowrap">
                Coordinating better outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


