export type StrapiMedia = {
  url?: string;
  alternativeText?: string;
  data?: {
    attributes?: {
      url?: string;
      alternativeText?: string;
    };
  };
  attributes?: {
    url?: string;
    alternativeText?: string;
  };
};

export type ServicePageData = {
  title?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    ogImage?: StrapiMedia;
  };
  backgroundPattern?: {
    enabled?: boolean;
    svgPath?: string;
    viewBox?: string;
    fill?: string;
    opacity?: number | string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
  };
  hero?: {
    enabled?: boolean;
    badgeLabel?: string;
    title?: string;
    titleDesktop?: string;
    subtitle?: string;
    subtitleDesktop?: string;
    backgroundImage?: StrapiMedia;
    primaryCta?: { label?: string; url?: string; isExternal?: boolean };
    secondaryCta?: { label?: string; url?: string; isExternal?: boolean };
  };
  servicePillars?: {
    enabled?: boolean;
    label?: string;
    cards?: Array<{
      title?: string;
      titleDesktop?: string;
      titleMobile?: string;
      description?: string;
      descriptionDesktop?: string;
      descriptionMobile?: string;
      image?: StrapiMedia;
      imageStyle?: {
        heightPercent?: number | string;
        widthPercent?: number | string;
        leftPercent?: number | string;
        topPercent?: number | string;
      };
      learnMoreLabel?: string;
      learnMoreUrl?: string;
      learnMoreIcon?: StrapiMedia;
    }>;
  };
  howWeHelp?: {
    enabled?: boolean;
    label?: string;
    title?: string;
    benefits?: Array<{ label?: string; description?: string }>;
    bulletIcon?: StrapiMedia;
    bulletIconBlur?: number | string;
  };
  weDeliverQuality?: {
    enabled?: boolean;
    title?: string;
    backgroundImage?: StrapiMedia;
    overlayColor?: string;
    mobileTopSvgPath?: string;
    mobileBottomSvgPath?: string;
    mobileSvgViewBox?: string;
    desktopTopIcon?: StrapiMedia;
    desktopBottomIcon?: StrapiMedia;
  };
  howItWorks?: {
    enabled?: boolean;
    label?: string;
    steps?: Array<{ title?: string; description?: string }>;
    illustration?: StrapiMedia;
    cta?: { label?: string; url?: string; isExternal?: boolean };
  };
  whyChoose?: {
    enabled?: boolean;
    label?: string;
    benefits?: Array<{ label?: string; description?: string }>;
    separatorImage?: StrapiMedia;
    mobileSeparatorSvgPath?: string;
    mobileSeparatorViewBox?: string;
    rightImage?: StrapiMedia;
    rightOverlay?: StrapiMedia;
  };
};
