export type StrapiMedia = {
  url?: string;
  data?: {
    attributes?: {
      url?: string;
      alternativeText?: string | null;
    };
  };
  attributes?: {
    url?: string;
    alternativeText?: string | null;
  };
  alternativeText?: string | null;
};

export type SeoData = {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: StrapiMedia | null;
  canonicalUrl?: string;
  noIndex?: boolean;
};

export type CtaData = {
  label?: string;
  url?: string;
  isExternal?: boolean;
};

export type BenefitItem = {
  label?: string;
  description?: string;
};

export type ValueCard = {
  title?: string;
  description?: string;
};

export type FaqItem = {
  question?: string;
  answer?: string;
};

export type InfoCard = {
  title?: string;
  body?: string;
};

export type FormField = {
  name?: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  rows?: number;
};

export type CardGridItem = {
  title?: string;
  description?: string;
  backgroundImage?: StrapiMedia | null;
};

export type IconStep = {
  title?: string;
  description?: string;
  icon?: StrapiMedia | null;
};

export type ProcessStage = {
  stageLabel?: string;
  title?: string;
  description?: string;
};

export type ContactBlockSection = {
  __component: "sections.contact-block";
  enabled?: boolean;
  label?: string;
  title?: string;
  videoTestimonials?: Array<{
    name?: string;
    position?: string;
    quote?: string | null;
    youtubeId?: string;
  }>;
  contactEmail?: string;
  contactPhone?: string | null;
  contactAddress?: string | null;
  formDisclaimer?: string | null;
  socialLinks?: Array<{
    platform?: string;
    url?: string;
  }>;
};

export type PageHeroSection = {
  __component: "sections.page-hero";
  badgeLabel?: string;
  badgeLabelDesktop?: string;
  title?: string;
  titleDesktop?: string;
  subtitle?: string;
  subtitleDesktop?: string;
  backgroundImage?: StrapiMedia | null;
  cta?: CtaData | null;
  ctaDesktop?: CtaData | null;
};

export type AboutHeroSection = {
  __component: "sections.about-hero";
  badgeLabel?: string;
  title?: string;
  titleDesktop?: string;
  subtitle?: string;
  subtitleDesktop?: string;
  backgroundImage?: StrapiMedia | null;
  primaryCta?: CtaData | null;
  secondaryText?: string;
};

export type StoryBlockSection = {
  __component: "sections.story-block";
  label?: string;
  title?: string;
  body?: string;
};

export type MissionValuesSection = {
  __component: "sections.mission-values";
  label?: string;
  cards?: ValueCard[];
  cta?: CtaData | null;
};

export type AboutTeamSection = {
  __component: "sections.about-team";
  label?: string;
  title?: string;
  subtitle?: string;
  teamMembers?: Array<{
    firstName?: string;
    lastName?: string;
    role?: string;
    bio?: string;
    photo?: StrapiMedia | null;
  }>;
  mobileProfilePhoto?: StrapiMedia | null;
  dotImagePrimary?: StrapiMedia | null;
  dotImageSecondary?: StrapiMedia | null;
};

export type VideoEmbedSection = {
  __component: "sections.video-embed";
  label?: string;
  youtubeId?: string;
  title?: string;
};

export type AboutWhyChooseSection = {
  __component: "sections.about-why-choose";
  label?: string;
  title?: string;
  benefits?: BenefitItem[];
  cta?: CtaData | null;
  image?: StrapiMedia | null;
  overlayColor?: string;
};

export type ImageOverlaySection = {
  __component: "sections.image-overlay";
  backgroundImage?: StrapiMedia | null;
  overlayColor?: string;
  overlayImage?: StrapiMedia | null;
};

export type CoordinatingBannerSection = {
  __component: "sections.coordinating-banner";
  enabled?: boolean;
  title?: string;
  backgroundImage?: StrapiMedia | null;
  topIcon?: StrapiMedia | null;
  bottomIcon?: StrapiMedia | null;
};

export type ContactInfoFormSection = {
  __component: "sections.contact-info-form";
  label?: string;
  infoCards?: InfoCard[];
  formTitle?: string;
  fields?: FormField[];
  submitLabel?: string;
};

export type FaqListSection = {
  __component: "sections.faq-list";
  label?: string;
  items?: FaqItem[];
};

export type BenefitCardsSection = {
  __component: "sections.benefit-cards";
  label?: string;
  title?: string;
  cards?: BenefitItem[];
};

export type CardGridSection = {
  __component: "sections.card-grid";
  label?: string;
  title?: string;
  dotIcon?: StrapiMedia | null;
  cards?: CardGridItem[];
};

export type IconStepsSection = {
  __component: "sections.icon-steps";
  label?: string;
  icon?: StrapiMedia | null;
  steps?: IconStep[];
  cta?: CtaData | null;
};

export type ProcessStagesSection = {
  __component: "sections.process-stages";
  label?: string;
  stages?: ProcessStage[];
  arrowImage?: StrapiMedia | null;
  arrowFinalImage?: StrapiMedia | null;
  cta?: CtaData | null;
};

export type ProcessWhySection = {
  __component: "sections.process-why";
  label?: string;
  title?: string;
  body?: string;
};

export type BackgroundPatternSection = {
  __component: "shared.background-pattern";
  enabled?: boolean;
  svgPath?: string;
  viewBox?: string;
  fill?: string;
  opacity?: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
};

export type ServicesHeroSection = {
  __component: "sections.services-page-hero";
  enabled?: boolean;
  badgeLabel?: string;
  title?: string;
  titleDesktop?: string;
  subtitle?: string;
  subtitleDesktop?: string;
  backgroundImage?: StrapiMedia | null;
  primaryCta?: CtaData | null;
  secondaryCta?: CtaData | null;
};

export type ServicesPillarsSection = {
  __component: "sections.services-page-pillars";
  enabled?: boolean;
  label?: string;
  cards?: Array<{
    title?: string;
    titleMobile?: string;
    titleDesktop?: string;
    description?: string;
    descriptionDesktop?: string;
    descriptionMobile?: string;
    image?: StrapiMedia | null;
    imageStyle?: {
      heightPercent?: number;
      widthPercent?: number;
      leftPercent?: number;
      topPercent?: number;
    };
    learnMoreLabel?: string;
    learnMoreUrl?: string;
    learnMoreIcon?: StrapiMedia | null;
  }>;
};

export type ServicesHowWeHelpSection = {
  __component: "sections.services-page-how-we-help";
  enabled?: boolean;
  label?: string;
  title?: string;
  benefits?: BenefitItem[];
  bulletIcon?: StrapiMedia | null;
  bulletIconBlur?: number;
};

export type ServicesQualitySection = {
  __component: "sections.services-page-quality";
  enabled?: boolean;
  title?: string;
  backgroundImage?: StrapiMedia | null;
  overlayColor?: string;
  mobileTopSvgPath?: string;
  mobileBottomSvgPath?: string;
  mobileSvgViewBox?: string;
  desktopTopIcon?: StrapiMedia | null;
  desktopBottomIcon?: StrapiMedia | null;
};

export type ServicesHowItWorksSection = {
  __component: "sections.services-page-how-it-works";
  enabled?: boolean;
  label?: string;
  steps?: Array<{ title?: string; description?: string }>;
  illustration?: StrapiMedia | null;
  cta?: CtaData | null;
};

export type ServicesWhyChooseSection = {
  __component: "sections.services-page-why-choose";
  enabled?: boolean;
  label?: string;
  benefits?: BenefitItem[];
  separatorImage?: StrapiMedia | null;
  mobileSeparatorSvgPath?: string;
  mobileSeparatorViewBox?: string;
  rightImage?: StrapiMedia | null;
  rightOverlay?: StrapiMedia | null;
};

export type PageSection =
  | PageHeroSection
  | AboutHeroSection
  | StoryBlockSection
  | MissionValuesSection
  | AboutTeamSection
  | VideoEmbedSection
  | AboutWhyChooseSection
  | ImageOverlaySection
  | BenefitCardsSection
  | CardGridSection
  | IconStepsSection
  | ProcessStagesSection
  | ProcessWhySection
  | ContactInfoFormSection
  | FaqListSection
  | ContactBlockSection
  | BackgroundPatternSection
  | ServicesHeroSection
  | ServicesPillarsSection
  | ServicesHowWeHelpSection
  | ServicesQualitySection
  | ServicesHowItWorksSection
  | ServicesWhyChooseSection;

export type PageEntry = {
  title?: string;
  slug?: string;
  seo?: SeoData;
  sections?: PageSection[];
  template?: {
    key?: string;
    data?: {
      attributes?: {
        key?: string;
      };
    };
    attributes?: {
      key?: string;
    };
  } | null;
};
