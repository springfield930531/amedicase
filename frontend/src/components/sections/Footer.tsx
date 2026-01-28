import svgPaths from "@/lib/imports/svg-v80ao031r3";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#f1f5ff] py-0 md:py-20 xl:pt-[7rem] xl:pb-[2rem] w-full">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-0 w-full">
        {/* Mobile Layout - Refactored with proper semantic structure and flex/grid */}
        <div className="md:hidden flex flex-col w-full">
          {/* Top Section - Logo, Navigation, and Social Icons */}
          <div className="flex flex-col gap-[15px] w-full">
            {/* Header Row - Navigation Links (Left) and Logo + Social (Right) */}
            <div className="flex items-start justify-between w-full">
            {/* Navigation Links - Left */}
              <nav className="flex flex-col gap-[20px]">
                <ul className="flex flex-col gap-[20px] list-none m-0 p-0">
                  <li>
                    <Link 
                      href="/about" 
                      className="font-sans font-medium text-[#0b1737] text-[13px] leading-none tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                About
              </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services" 
                      className="font-sans font-medium text-[#0b1737] text-[13px] leading-none tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                Services
              </Link>
                  </li>
                  <li>
                    <Link 
                      href="/process" 
                      className="font-sans font-medium text-[#0b1737] text-[13px] leading-none tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                Process
              </Link>
                  </li>
                  <li>
                    <Link 
                      href="/case-studies" 
                      className="font-sans font-medium text-[#0b1737] text-[13px] leading-none tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                Case Studies
              </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="font-sans font-medium text-[#0b1737] text-[13px] leading-none tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                Contact
              </Link>
                  </li>
                </ul>
              </nav>

              {/* Right Side - Logo and Social Icons */}
              <div className="flex flex-col items-end gap-[15px]">
                {/* Logo - Same as Header */}
                <Link href="/" className="w-[180px] h-auto cursor-pointer">
                  <svg className="w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 261 60">
                    <g>
                      <path d={svgPaths.p35dee300} fill="#D01127" />
                      <path d={svgPaths.p3dbfe200} fill="#1E3A8A" />
                      <path d={svgPaths.p2ad3e180} fill="#1E3A8A" />
                      <path d={svgPaths.p3f849240} fill="#1E3A8A" />
                      <path d={svgPaths.p36641b00} fill="#D01127" />
                    </g>
                  </svg>
                </Link>

                {/* Social Icons - Only icons, no text */}
                <div className="flex items-center gap-[8px]">
                  <a href="#mail" className="w-[24px] h-[24px] hover:opacity-70 transition-opacity">
                    <img alt="Mail" className="w-full h-full object-contain" src="/images/mail-icon.svg" />
                </a>
                  <a href="#facebook" className="w-[24px] h-[24px] hover:opacity-70 transition-opacity">
                    <img alt="Facebook" className="w-full h-full object-contain" src="/images/facebook-icon.svg" />
                </a>
                  <a href="#instagram" className="w-[24px] h-[24px] hover:opacity-70 transition-opacity">
                    <img alt="Instagram" className="w-full h-full object-contain" src="/images/instagram-icon.svg" />
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap gap-[20px] items-center justify-center mt-[15px]">
            <ul className="flex flex-wrap gap-[20px] items-center justify-center list-none m-0 p-0">
              <li>
                <a 
                  href="#privacy" 
                  className="font-sans font-normal text-[#6175ad] text-[13px] leading-[1.1] tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
              Privacy Policy
            </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="font-sans font-normal text-[#6175ad] text-[13px] leading-[1.1] tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
              Terms of Service
            </a>
              </li>
              <li>
                <a 
                  href="#cookies" 
                  className="font-sans font-normal text-[#6175ad] text-[13px] leading-[1.1] tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
              Cookies
            </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="flex items-center justify-center mt-[10px] py-[10px] w-full">
            <p 
              className="font-sans font-normal text-[#6175ad] text-[13px] leading-[1.1] text-center tracking-[-0.26px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              © Copyright 2025 amedicase. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Desktop & Tablet Layout - Exact Figma Design */}
        <div className="hidden md:flex flex-col gap-[120px] items-center relative w-full">
          {/* Top Section - 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[60px] lg:gap-[80px] items-start justify-center w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-[60px] items-start justify-center">
              <Link href="/about" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                About
              </Link>
              <div className="flex flex-col gap-[60px] items-start justify-center">
                <Link href="/services" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Sevices
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[60px] items-start justify-center">
              <Link href="/process" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                Process
              </Link>
              <div className="flex flex-col gap-[60px] items-start justify-center">
                <Link href="/case-studies" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Case Studies
                </Link>
                <Link href="/contact" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Contact
                </Link>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[60px] items-start justify-center">
              <Link href="/home-health" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                Home Health
              </Link>
              <div className="flex flex-col gap-[60px] items-start justify-center">
                <Link href="/hospice" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Hospice
                </Link>
                <Link href="/accounting-finance" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Acount and Finance
                </Link>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-[60px] items-start justify-center">
              <Link href="/customer-support" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                Customer Support
              </Link>
              <div className="flex flex-col gap-[60px] items-start justify-center">
                <Link href="/services" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Back Office and administration
                </Link>
                <Link href="/creative-development" className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Creative and development
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright, Logo, Policy Links */}
          <div className="flex flex-wrap md:gap-[40px] lg:gap-[120px] items-center justify-center w-full">
            {/* Copyright */}
            <p className="font-sans font-normal leading-[1.1] text-[#6175ad] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              © Copyright 2025 amedicase. All Rights Reserved.
            </p>

            {/* Logo */}
            <div className="h-[40px] w-[176px] relative shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 261 60">
                <g>
                  <path d={svgPaths.p35dee300} fill="#D01127" />
                  <path d={svgPaths.p3dbfe200} fill="#1E3A8A" />
                  <path d={svgPaths.p2ad3e180} fill="#1E3A8A" />
                  <path d={svgPaths.p3f849240} fill="#1E3A8A" />
                  <path d={svgPaths.p36641b00} fill="#D01127" />
                </g>
              </svg>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap gap-[60px] items-center justify-center">
              <a href="#privacy" className="font-sans font-normal leading-[1.1] text-[#6175ad] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                Privacy Policy
              </a>
              <a href="#terms" className="font-sans font-normal leading-[1.1] text-[#6175ad] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                Terms of Service
              </a>
              <a href="#cookies" className="font-sans font-normal leading-[1.1] text-[#6175ad] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
