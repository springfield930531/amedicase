import type { SeoData, StrapiMedia, CtaData } from "@/lib/page-types";

export type NavItem = {
  label?: string;
  url?: string;
  isExternal?: boolean;
  children?: NavItem[];
};

export type FooterColumn = {
  title?: string;
  links?: NavItem[];
};

export type SocialLink = {
  platform?: string;
  url?: string;
  icon?: StrapiMedia | null;
};

export type SiteHeader = {
  logo?: StrapiMedia | null;
  logoAlt?: string;
  navigation?: NavItem[];
  headerCta?: CtaData | null;
};

export type SiteFooter = {
  footerLogo?: StrapiMedia | null;
  footerLogoAlt?: string;
  navigation?: NavItem[];
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  legalLinks?: NavItem[];
  copyrightText?: string;
};

export type BrandAssets = {
  siteName?: string;
  favicon?: StrapiMedia | null;
  appleTouchIcon?: StrapiMedia | null;
};

export type SiteSettings = {
  title?: string;
  header?: SiteHeader | null;
  footer?: SiteFooter | null;
  brandAssets?: BrandAssets | null;
  defaultSeo?: SeoData | null;
};
