import type { Schema, Struct } from '@strapi/strapi';

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
      'sections.contact-block': SectionsContactBlock;
      'sections.coordinating-banner': SectionsCoordinatingBanner;
      'sections.hero-section': SectionsHeroSection;
      'sections.image-highlight': SectionsImageHighlight;
      'sections.process-steps': SectionsProcessSteps;
      'sections.service-grid': SectionsServiceGrid;
      'sections.team-showcase': SectionsTeamShowcase;
      'sections.testimonials': SectionsTestimonials;
      'sections.why-choose': SectionsWhyChoose;
      'shared.benefit': SharedBenefit;
      'shared.cta': SharedCta;
      'shared.navigation-link': SharedNavigationLink;
      'shared.process-step': SharedProcessStep;
      'shared.service-card': SharedServiceCard;
      'shared.social-link': SharedSocialLink;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
