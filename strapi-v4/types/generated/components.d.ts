import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBenefitCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefit_cards';
  info: {
    displayName: 'Benefit cards';
    icon: 'th-large';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.benefit', true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_grids';
  info: {
    displayName: 'Card grid';
    icon: 'border-all';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card-grid-item', true>;
    dotIcon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_blocks';
  info: {
    displayName: 'Contact block';
    icon: 'envelope';
  };
  attributes: {
    contactAddress: Schema.Attribute.Text;
    contactEmail: Schema.Attribute.String;
    contactPhone: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    formDisclaimer: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoTestimonials: Schema.Attribute.Component<'shared.testimonial', true>;
  };
}

export interface SectionsCoordinatingBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_coordinating_banners';
  info: {
    displayName: 'Coordinating banner';
    icon: 'image';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    bottomIcon: Schema.Attribute.Media<'images' | 'files'>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero section';
    icon: 'bullhorn';
  };
  attributes: {
    desktopBackground: Schema.Attribute.Media<'images'>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    eyebrow: Schema.Attribute.String;
    logoImage: Schema.Attribute.Media<'images' | 'files'>;
    mobileBackground: Schema.Attribute.Media<'images'>;
    overlayIcon: Schema.Attribute.Media<'images' | 'files'>;
    primaryCta: Schema.Attribute.Component<'shared.cta', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsIconSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_icon_steps';
  info: {
    displayName: 'Icon steps';
    icon: 'list';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.icon-step', true>;
  };
}

export interface SectionsImageHighlight extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_highlights';
  info: {
    displayName: 'Image highlight';
    icon: 'image';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    bottomIcon: Schema.Attribute.Media<'images' | 'files'>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    logoImage: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsImageOverlay extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_overlays';
  info: {
    displayName: 'Image overlay';
    icon: 'images';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    overlayColor: Schema.Attribute.String;
    overlayImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsPageHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_page_heroes';
  info: {
    displayName: 'Page hero';
    icon: 'image';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    badgeLabel: Schema.Attribute.String;
    badgeLabelDesktop: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    ctaDesktop: Schema.Attribute.Component<'shared.cta', false>;
    subtitle: Schema.Attribute.Text;
    subtitleDesktop: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    titleDesktop: Schema.Attribute.Text;
  };
}

export interface SectionsProcessStages extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_stages';
  info: {
    displayName: 'Process stages';
    icon: 'tasks';
  };
  attributes: {
    arrowFinalImage: Schema.Attribute.Media<'images' | 'files'>;
    arrowImage: Schema.Attribute.Media<'images' | 'files'>;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    label: Schema.Attribute.String;
    stages: Schema.Attribute.Component<'shared.process-stage', true>;
  };
}

export interface SectionsProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps';
  info: {
    displayName: 'Process steps';
    icon: 'sort-amount-down';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    illustration: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.process-step', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServiceGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_grids';
  info: {
    displayName: 'Service grid';
    icon: 'th-large';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.service-card', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesPageHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_page_heroes';
  info: {
    displayName: 'Services page hero';
    icon: 'bullhorn';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    badgeLabel: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    primaryCta: Schema.Attribute.Component<'shared.cta', false>;
    secondaryCta: Schema.Attribute.Component<'shared.cta', false>;
    subtitle: Schema.Attribute.Text;
    subtitleDesktop: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    titleDesktop: Schema.Attribute.Text;
  };
}

export interface SectionsServicesPageHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_page_how_it_works';
  info: {
    displayName: 'Services page how it works';
    icon: 'project-diagram';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    illustration: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.process-step', true>;
  };
}

export interface SectionsServicesPageHowWeHelp extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_page_how_we_help';
  info: {
    displayName: 'Services page how we help';
    icon: 'hands-helping';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit', true>;
    bulletIcon: Schema.Attribute.Media<'images' | 'files'>;
    bulletIconBlur: Schema.Attribute.Decimal;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesPagePillars extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_page_pillars';
  info: {
    displayName: 'Services page pillars';
    icon: 'th-large';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.service-pillar-card', true>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
  };
}

export interface SectionsServicesPageQuality extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_page_qualities';
  info: {
    displayName: 'Services page quality';
    icon: 'award';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    desktopBottomIcon: Schema.Attribute.Media<'images' | 'files'>;
    desktopTopIcon: Schema.Attribute.Media<'images' | 'files'>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    mobileBottomSvgPath: Schema.Attribute.Text;
    mobileSvgViewBox: Schema.Attribute.String;
    mobileTopSvgPath: Schema.Attribute.Text;
    overlayColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesPageWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_page_why_choose';
  info: {
    displayName: 'Services page why choose';
    icon: 'flag-checkered';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit', true>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    mobileSeparatorSvgPath: Schema.Attribute.Text;
    mobileSeparatorViewBox: Schema.Attribute.String;
    rightImage: Schema.Attribute.Media<'images'>;
    rightOverlay: Schema.Attribute.Media<'images' | 'files'>;
    separatorImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsStoryBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_story_blocks';
  info: {
    displayName: 'Story block';
    icon: 'align-left';
  };
  attributes: {
    body: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsTeamShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_showcases';
  info: {
    displayName: 'Team showcase';
    icon: 'users';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    members: Schema.Attribute.Component<'shared.team-member', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    supportGraphic: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'comments';
  };
  attributes: {
    autoRotate: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'shared.testimonial', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_chooses';
  info: {
    displayName: 'Why choose';
    icon: 'flag-checkered';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    supportImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBackgroundPattern extends Struct.ComponentSchema {
  collectionName: 'components_shared_background_patterns';
  info: {
    displayName: 'Background pattern';
    icon: 'brush';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    fill: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    left: Schema.Attribute.Integer;
    opacity: Schema.Attribute.Decimal;
    svgPath: Schema.Attribute.Text;
    top: Schema.Attribute.Integer;
    viewBox: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
  };
}

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardGridItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_grid_items';
  info: {
    displayName: 'Card grid item';
    icon: 'clone';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: 'Call-to-action button data';
    displayName: 'CTA';
    icon: 'external-link-alt';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_steps';
  info: {
    displayName: 'Icon step';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImageStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_styles';
  info: {
    displayName: 'Image style';
    icon: 'image';
  };
  attributes: {
    heightPercent: Schema.Attribute.Decimal;
    leftPercent: Schema.Attribute.Decimal;
    topPercent: Schema.Attribute.Decimal;
    widthPercent: Schema.Attribute.Decimal;
  };
}

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    displayName: 'Navigation link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProcessStage extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_stages';
  info: {
    displayName: 'Process stage';
    icon: 'stream';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stageLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_steps';
  info: {
    displayName: 'Process step';
    icon: 'level-up-alt';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'Service card';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServicePillarCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_pillar_cards';
  info: {
    displayName: 'Service pillar card';
    icon: 'th-large';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionDesktop: Schema.Attribute.Text;
    descriptionMobile: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageStyle: Schema.Attribute.Component<'shared.image-style', false>;
    learnMoreIcon: Schema.Attribute.Media<'images' | 'files'>;
    learnMoreLabel: Schema.Attribute.String;
    learnMoreUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleDesktop: Schema.Attribute.String;
    titleMobile: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social link';
    icon: 'share-alt';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team member';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    firstName: Schema.Attribute.String & Schema.Attribute.Required;
    lastName: Schema.Attribute.String & Schema.Attribute.Required;
    linkedinUrl: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    photo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote-right';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images'>;
    youtubeId: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.benefit-cards': SectionsBenefitCards;
      'sections.card-grid': SectionsCardGrid;
      'sections.contact-block': SectionsContactBlock;
      'sections.coordinating-banner': SectionsCoordinatingBanner;
      'sections.hero-section': SectionsHeroSection;
      'sections.icon-steps': SectionsIconSteps;
      'sections.image-highlight': SectionsImageHighlight;
      'sections.image-overlay': SectionsImageOverlay;
      'sections.page-hero': SectionsPageHero;
      'sections.process-stages': SectionsProcessStages;
      'sections.process-steps': SectionsProcessSteps;
      'sections.service-grid': SectionsServiceGrid;
      'sections.services-page-hero': SectionsServicesPageHero;
      'sections.services-page-how-it-works': SectionsServicesPageHowItWorks;
      'sections.services-page-how-we-help': SectionsServicesPageHowWeHelp;
      'sections.services-page-pillars': SectionsServicesPagePillars;
      'sections.services-page-quality': SectionsServicesPageQuality;
      'sections.services-page-why-choose': SectionsServicesPageWhyChoose;
      'sections.story-block': SectionsStoryBlock;
      'sections.team-showcase': SectionsTeamShowcase;
      'sections.testimonials': SectionsTestimonials;
      'sections.why-choose': SectionsWhyChoose;
      'shared.background-pattern': SharedBackgroundPattern;
      'shared.benefit': SharedBenefit;
      'shared.card-grid-item': SharedCardGridItem;
      'shared.cta': SharedCta;
      'shared.icon-step': SharedIconStep;
      'shared.image-style': SharedImageStyle;
      'shared.navigation-link': SharedNavigationLink;
      'shared.process-stage': SharedProcessStage;
      'shared.process-step': SharedProcessStep;
      'shared.seo': SharedSeo;
      'shared.service-card': SharedServiceCard;
      'shared.service-pillar-card': SharedServicePillarCard;
      'shared.social-link': SharedSocialLink;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
