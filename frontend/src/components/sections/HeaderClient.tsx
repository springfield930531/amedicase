"use client";

import svgPaths from "@/lib/imports/svg-v80ao031r3";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "@/lib/site-settings-types";

type HeaderClientProps = {
  logoUrl?: string | null;
  logoAlt?: string;
  navigation?: NavItem[];
  cta?: { label?: string; url?: string; isExternal?: boolean } | null;
};

const fallbackNavigation: NavItem[] = [
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Process", url: "/process" },
  { label: "Case Studies", url: "/case-studies" },
  { label: "Contact", url: "/contact" },
];

const fallbackCta = { label: "Book a Call", url: "/contact", isExternal: false };

const isExternal = (url?: string) => /^https?:\/\//i.test(url || "") || /^mailto:/i.test(url || "");

const normalizeLinks = (links?: NavItem[]) =>
  links && links.length ? links : fallbackNavigation;

export function HeaderClient({ logoUrl, logoAlt, navigation, cta }: HeaderClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = normalizeLinks(navigation);
  const ctaData = cta?.label ? cta : fallbackCta;
  const ctaHref = ctaData?.url || fallbackCta.url;
  const ctaExternal = ctaData?.isExternal || isExternal(ctaHref);
  const logoAltText = logoAlt || "Amedicase";
  const logoIsRemote = logoUrl ? /^https?:\/\//i.test(logoUrl) : false;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm overflow-x-hidden pt-[10px] pb-[10px]">
        <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-[1440px] w-full">
          {/* Mobile Layout - Unchanged */}
          <div className="flex md:hidden items-center justify-between h-20">
            {/* Logo - Mobile */}
            <Link href="/" className="w-[180px] h-auto cursor-pointer">
              {logoUrl ? (
                <Image
                  alt={logoAltText}
                  src={logoUrl}
                  width={261}
                  height={60}
                  className="w-full h-auto"
                  unoptimized={logoIsRemote}
                  priority
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex w-[41.4px] h-[41.4px] rounded-lg backdrop-blur-md bg-gradient-to-b from-[rgba(183,198,243,0.15)] to-[rgba(84,100,145,0.075)] border border-[rgba(188,193,246,0.8)] shadow-[0px_2px_8px_0px_rgba(179,184,251,0.2)] items-center justify-center z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-[23px] h-[23px] text-[#0b1737]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-[23px] h-[23px]" fill="none" viewBox="0 0 22 11">
                  <path d="M0.5 0.5H21.5" stroke="#0B1737" strokeLinecap="round" strokeWidth="1" />
                  <path d="M0.5 5.5H21.5" stroke="#0B1737" strokeLinecap="round" strokeWidth="1" />
                  <path d="M0.5 10.5H21.5" stroke="#0B1737" strokeLinecap="round" strokeWidth="1" />
                </svg>
              )}
            </button>
          </div>

          {/* Tablet Layout - Unchanged */}
          <div className="hidden md:flex lg:hidden items-center justify-between h-20">
            {/* Logo - Tablet */}
            <Link href="/" className="w-[261px] h-auto cursor-pointer">
              {logoUrl ? (
                <Image
                  alt={logoAltText}
                  src={logoUrl}
                  width={261}
                  height={60}
                  className="w-full h-auto"
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

            {/* Tablet Navigation */}
            <nav className="flex items-center gap-6">
              {navItems.map((item, index) => {
                const href = item.url || "#";
                const external = item.isExternal || isExternal(href);
                return (
                  <Link
                    key={`${item.label || "nav"}-${index}`}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="text-[#0b1737] hover:text-[#d01127] transition-colors font-sans font-medium text-[20px] tracking-[-0.4px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Book a Call Button - Tablet */}
            <Link
              href={ctaHref || "#"}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
              className="backdrop-blur-[7px] bg-gradient-to-b from-[rgba(219,53,74,0.8)] to-[rgba(153,26,43,0.6)] px-6 py-4 rounded-xl border border-[rgba(113,12,25,0.8)] shadow-[0px_2px_4px_0px_rgba(180,98,108,0.6)] font-sans font-semibold text-[18px] text-[#f1f5ff] tracking-[-0.48px] hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {ctaData?.label}
            </Link>
          </div>

          {/* Desktop Layout - Exact Figma Design */}
          <div className="hidden lg:flex items-center justify-center gap-[61px] h-[60px] px-[60px]">
            {/* Logo - Desktop - Exact Figma: 260.98px width, 60px height */}
            <Link href="/" className="w-[260.98px] h-[60px] cursor-pointer shrink-0">
              {logoUrl ? (
                <Image
                  alt={logoAltText}
                  src={logoUrl}
                  width={261}
                  height={60}
                  className="w-full h-full"
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
            </Link>

            {/* Navigation Container - Exact Figma: backdrop-blur-[6px], px-[40px] py-[20px], rounded-[12px], gap-[40px] */}
            <nav className="backdrop-blur-[6px] backdrop-filter px-[40px] py-[20px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(255,255,255,0.1)] flex items-center gap-[40px] shrink-0">
              {navItems.map((item, index) => {
                const href = item.url || "#";
                const external = item.isExternal || isExternal(href);
                return (
                  <Link
                    key={`${item.label || "nav"}-${index}`}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="text-[#0b1737] hover:text-[#d01127] transition-colors font-sans font-medium text-[20px] tracking-[-0.4px] leading-none"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Book a Call Button - Desktop - Exact Figma: backdrop-blur-[7px], px-[40px] py-[20px], rounded-[8px] */}
            <Link
              href={ctaHref || "#"}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
              className="backdrop-blur-[7px] backdrop-filter bg-gradient-to-b border border-[rgba(113,12,25,0.8)] from-[rgba(219,53,74,0.8)] to-[rgba(153,26,43,0.6)] px-[40px] py-[20px] rounded-[8px] font-sans font-semibold text-[20px] text-[#f1f5ff] tracking-[-0.4px] leading-[1.2] hover:opacity-90 transition-opacity shrink-0"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {ctaData?.label}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-20 right-0 left-0 bg-white shadow-lg p-6 m-4 rounded-lg">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const href = item.url || "#";
                const external = item.isExternal || isExternal(href);
                return (
                  <Link
                    key={`${item.label || "nav"}-${index}`}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#0b1737] hover:text-[#d01127] transition-colors font-sans font-medium text-[16px] py-2"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={ctaHref || "#"}
                target={ctaExternal ? "_blank" : undefined}
                rel={ctaExternal ? "noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 rounded-lg bg-gradient-to-b from-[rgba(219,53,74,0.8)] to-[rgba(153,26,43,0.6)] text-[#f1f5ff] font-sans font-semibold text-[16px] text-center mt-2"
              >
                {ctaData?.label}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
