import svgPaths from "@/lib/imports/svg-v80ao031r3";
import Link from "next/link";
import Image from "next/image";
import { getSiteSettings } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type { NavItem, SocialLink } from "@/lib/site-settings-types";

const fallbackNavigation: NavItem[] = [
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Process", url: "/process" },
  { label: "Case Studies", url: "/case-studies" },
  { label: "Contact", url: "/contact" },
];

const fallbackColumns: Array<{ links: NavItem[] }> = [
  { links: [{ label: "About", url: "/about" }, { label: "Sevices", url: "/services" }] },
  { links: [{ label: "Process", url: "/process" }, { label: "Case Studies", url: "/case-studies" }, { label: "Contact", url: "/contact" }] },
  { links: [{ label: "Home Health", url: "/home-health" }, { label: "Hospice", url: "/hospice" }, { label: "Acount and Finance", url: "/accounting-finance" }] },
  { links: [{ label: "Customer Support", url: "/customer-support" }, { label: "Back Office and administration", url: "/services" }, { label: "Creative and development", url: "/creative-development" }] },
];

const fallbackLegalLinks: NavItem[] = [
  { label: "Privacy Policy", url: "#privacy" },
  { label: "Terms of Service", url: "#terms" },
  { label: "Cookies", url: "#cookies" },
];

const fallbackSocialLinks: SocialLink[] = [
  { platform: "Email", url: "mailto:team@amedicase.com" },
  { platform: "Facebook", url: "https://www.facebook.com/amedicase" },
  { platform: "Instagram", url: "https://www.instagram.com/amedicase" },
];

const fallbackCopyright = "© Copyright 2025 amedicase. All Rights Reserved.";

const isExternal = (url?: string) => /^https?:\/\//i.test(url || "") || /^mailto:/i.test(url || "");

const resolveLinks = (links?: NavItem[]) => (links && links.length ? links : fallbackNavigation);
const resolveColumns = (columns?: Array<{ links?: NavItem[] }>) => (columns && columns.length ? columns : fallbackColumns);
const resolveLegalLinks = (links?: NavItem[]) => (links && links.length ? links : fallbackLegalLinks);
const resolveSocialLinks = (links?: SocialLink[]) => (links && links.length ? links : fallbackSocialLinks);

const getFallbackSocialIcon = (platform?: string) => {
  const normalized = platform?.toLowerCase() || "";
  if (normalized.includes("mail")) return "/images/mail-icon.svg";
  if (normalized.includes("facebook")) return "/images/facebook-icon.svg";
  if (normalized.includes("instagram")) return "/images/instagram-icon.svg";
  return "/images/mail-icon.svg";
};

export async function Footer() {
  const settings = await getSiteSettings();
  const footer = settings?.footer;
  const footerLogoUrl = getMediaUrl(footer?.footerLogo);
  const navigation = resolveLinks(footer?.navigation);
  const columns = resolveColumns(footer?.columns);
  const legalLinks = resolveLegalLinks(footer?.legalLinks);
  const socialLinks = resolveSocialLinks(footer?.socialLinks);
  const copyrightText = footer?.copyrightText || fallbackCopyright;
  const logoAlt = footer?.footerLogoAlt || "Amedicase";
  const logoIsRemote = footerLogoUrl ? /^https?:\/\//i.test(footerLogoUrl) : false;

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
                  {navigation.map((item, index) => {
                    const href = item.url || "#";
                    const external = item.isExternal || isExternal(href);
                    return (
                      <li key={`${item.label || "nav"}-${index}`}>
                        <Link
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="font-sans font-medium text-[#0b1737] text-[13px] leading-none tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Right Side - Logo and Social Icons */}
              <div className="flex flex-col items-end gap-[15px]">
                {/* Logo - Same as Header */}
                <Link href="/" className="w-[180px] h-auto cursor-pointer">
                  {footerLogoUrl ? (
                    <Image
                      alt={logoAlt}
                      className="w-full h-auto"
                      src={footerLogoUrl}
                      width={261}
                      height={60}
                      unoptimized={logoIsRemote}
                    />
                  ) : (
                    <svg className="w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 261 60">
                      <g>
                        <path d={svgPaths.p35dee300} fill="#D01127" />
                        <path d={svgPaths.p3dbfe200} fill="#1E3A8A" />
                        <path d={svgPaths.p2ad3e180} fill="#1E3A8A" />
                        <path d={svgPaths.p3f849240} fill="#1E3A8A" />
                        <path d={svgPaths.p36641b00} fill="#D01127" />
                      </g>
                    </svg>
                  )}
                </Link>

                {/* Social Icons - Only icons, no text */}
                <div className="flex items-center gap-[8px]">
                  {socialLinks.map((link, index) => {
                    const href = link.url || "#";
                    const iconUrl = getMediaUrl(link.icon) || getFallbackSocialIcon(link.platform);
                    const external = isExternal(href);
                    const iconIsRemote = /^https?:\/\//i.test(iconUrl);
                    return (
                      <a
                        key={`${link.platform || "social"}-${index}`}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="w-[24px] h-[24px] hover:opacity-70 transition-opacity"
                      >
                        <Image
                          alt={link.platform || "Social"}
                          className="w-full h-full object-contain"
                          src={iconUrl}
                          width={24}
                          height={24}
                          unoptimized={iconIsRemote}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap gap-[20px] items-center justify-center mt-[15px]">
            <ul className="flex flex-wrap gap-[20px] items-center justify-center list-none m-0 p-0">
              {legalLinks.map((item, index) => {
                const href = item.url || "#";
                const external = item.isExternal || isExternal(href);
                return (
                  <li key={`${item.label || "legal"}-${index}`}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="font-sans font-normal text-[#6175ad] text-[13px] leading-[1.1] tracking-[-0.26px] hover:text-[#d01127] transition-colors"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="flex items-center justify-center mt-[10px] py-[10px] w-full">
            <p 
              className="font-sans font-normal text-[#6175ad] text-[13px] leading-[1.1] text-center tracking-[-0.26px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {copyrightText}
            </p>
          </div>
        </div>

        {/* Desktop & Tablet Layout - Exact Figma Design */}
        <div className="hidden md:flex flex-col gap-[120px] items-center relative w-full">
          {/* Top Section - 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[60px] lg:gap-[80px] items-start justify-center w-full">
            {columns.map((column, columnIndex) => {
              const links = column.links || [];
              const primary = links[0];
              const secondary = links.slice(1);

              return (
                <div key={`footer-column-${columnIndex}`} className="flex flex-col gap-[60px] items-start justify-center">
                  {primary ? (
                    (() => {
                      const href = primary.url || "#";
                      const external = primary.isExternal || isExternal(href);
                      return (
                        <Link
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {primary.label}
                        </Link>
                      );
                    })()
                  ) : null}
                  <div className="flex flex-col gap-[60px] items-start justify-center">
                    {secondary.map((link, linkIndex) => {
                      const href = link.url || "#";
                      const external = link.isExternal || isExternal(href);
                      return (
                        <Link
                          key={`${link.label || "link"}-${linkIndex}`}
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="font-sans font-medium leading-none text-[#0b1737] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Section - Copyright, Logo, Policy Links */}
          <div className="flex flex-wrap md:gap-[40px] lg:gap-[120px] items-center justify-center w-full">
            {/* Copyright */}
            <p className="font-sans font-normal leading-[1.1] text-[#6175ad] text-[20px] text-center tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {copyrightText}
            </p>

            {/* Logo */}
            <div className="h-[40px] w-[176px] relative shrink-0 flex items-center justify-center">
              {footerLogoUrl ? (
                <Image
                  alt={logoAlt}
                  className="w-full h-full object-contain"
                  src={footerLogoUrl}
                  width={261}
                  height={60}
                  unoptimized={logoIsRemote}
                />
              ) : (
                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 261 60">
                  <g>
                    <path d={svgPaths.p35dee300} fill="#D01127" />
                    <path d={svgPaths.p3dbfe200} fill="#1E3A8A" />
                    <path d={svgPaths.p2ad3e180} fill="#1E3A8A" />
                    <path d={svgPaths.p3f849240} fill="#1E3A8A" />
                    <path d={svgPaths.p36641b00} fill="#D01127" />
                  </g>
                </svg>
              )}
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap gap-[60px] items-center justify-center">
              {legalLinks.map((item, index) => {
                const href = item.url || "#";
                const external = item.isExternal || isExternal(href);
                return (
                  <a
                    key={`${item.label || "legal"}-${index}`}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="font-sans font-normal leading-[1.1] text-[#6175ad] text-[20px] tracking-[-0.4px] hover:text-[#d01127] transition-colors"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
