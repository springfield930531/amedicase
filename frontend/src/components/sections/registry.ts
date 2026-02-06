import type { ComponentType } from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackgroundPatternSection } from "@/components/sections/cms/BackgroundPatternSection";
import { AboutHeroSection } from "@/components/sections/cms/AboutHeroSection";
import { MissionValuesSection } from "@/components/sections/cms/MissionValuesSection";
import { AboutTeamSection } from "@/components/sections/cms/AboutTeamSection";
import { VideoEmbedSection } from "@/components/sections/cms/VideoEmbedSection";
import { AboutWhyChooseSection } from "@/components/sections/cms/AboutWhyChooseSection";
import { PageHeroSection } from "@/components/sections/cms/PageHeroSection";
import { StoryBlockSection } from "@/components/sections/cms/StoryBlockSection";
import { ImageOverlaySection } from "@/components/sections/cms/ImageOverlaySection";
import { BenefitCardsSection } from "@/components/sections/cms/BenefitCardsSection";
import { IconStepsSection } from "@/components/sections/cms/IconStepsSection";
import { CardGridSection } from "@/components/sections/cms/CardGridSection";
import { ProcessStagesSection } from "@/components/sections/cms/ProcessStagesSection";
import { ProcessWhySection } from "@/components/sections/cms/ProcessWhySection";
import { ContactInfoFormSection } from "@/components/sections/cms/ContactInfoFormSection";
import { FaqListSection } from "@/components/sections/cms/FaqListSection";
import { ServicesPageHeroSection } from "@/components/sections/cms/ServicesPageHeroSection";
import { ServicesPillarsSection } from "@/components/sections/cms/ServicesPillarsSection";
import { ServicesHowWeHelpSection } from "@/components/sections/cms/ServicesHowWeHelpSection";
import { ServicesQualitySection } from "@/components/sections/cms/ServicesQualitySection";
import { ServicesHowItWorksSection } from "@/components/sections/cms/ServicesHowItWorksSection";
import { ServicesWhyChooseSection } from "@/components/sections/cms/ServicesWhyChooseSection";

export type PageRenderKind =
  | "about"
  | "services"
  | "service-style-b"
  | "service-style-c"
  | "process"
  | "contact"
  | "legal"
  | "generic";

export const inferPageRenderKind = (
  sections: Array<{ __component?: string } | null | undefined> | undefined
): PageRenderKind => {
  const types = new Set(
    (sections || [])
      .map((section) => section?.__component)
      .filter((component): component is string => Boolean(component))
  );

  if (types.has("sections.about-hero")) return "about";
  if (types.has("sections.services-page-hero")) return "services";
  if (types.has("sections.contact-info-form")) return "contact";
  if (types.has("sections.process-why")) return "process";
  if (types.has("sections.benefit-cards") || types.has("sections.icon-steps")) {
    return "service-style-b";
  }
  if (types.has("sections.card-grid") || types.has("sections.process-stages")) {
    return "service-style-c";
  }
  if (types.has("sections.page-hero") && types.has("sections.story-block")) {
    return "legal";
  }
  return "generic";
};

export type SectionRendererPageContext = {
  title?: string;
  slug?: string;
  kind?: PageRenderKind;
  contact?: {
    email?: string;
    phone?: string | null;
    address?: string | null;
  } | null;
} | null;

// Strapi dynamic zone component -> React component mapping lives here.
// `data` is the raw Strapi section object; each renderer can narrow it as needed.
export type SectionComponent = ComponentType<any>;

export const SECTION_REGISTRY: Record<string, SectionComponent> = {
  "shared.background-pattern": BackgroundPatternSection,
  "sections.services-page-hero": ServicesPageHeroSection,
  "sections.services-page-pillars": ServicesPillarsSection,
  "sections.services-page-how-we-help": ServicesHowWeHelpSection,
  "sections.services-page-quality": ServicesQualitySection,
  "sections.services-page-how-it-works": ServicesHowItWorksSection,
  "sections.services-page-why-choose": ServicesWhyChooseSection,
  "sections.about-hero": AboutHeroSection,
  "sections.mission-values": MissionValuesSection,
  "sections.about-team": AboutTeamSection,
  "sections.video-embed": VideoEmbedSection,
  "sections.about-why-choose": AboutWhyChooseSection,
  "sections.page-hero": PageHeroSection,
  "sections.story-block": StoryBlockSection,
  "sections.image-overlay": ImageOverlaySection,
  "sections.benefit-cards": BenefitCardsSection,
  "sections.icon-steps": IconStepsSection,
  "sections.card-grid": CardGridSection,
  "sections.process-stages": ProcessStagesSection,
  "sections.process-why": ProcessWhySection,
  "sections.contact-info-form": ContactInfoFormSection,
  "sections.faq-list": FaqListSection,
  "sections.contact-block": ContactSection,
};
