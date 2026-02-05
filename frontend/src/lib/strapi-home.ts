import { getMediaUrl, strapiFetchStatic } from "@/lib/strapi-client";

export type HomePageData = {
  contentSections?: Array<Record<string, unknown>>;
};

export { getMediaUrl };

export const fetchHomePage = async (): Promise<HomePageData | null> => {
  try {
    const params = new URLSearchParams();
    params.set("populate[contentSections][populate]", "*");

    const addMediaPopulate = (component: string, field: string) => {
      params.set(
        `populate[contentSections][on][${component}][populate][${field}]`,
        "true"
      );
    };
    const addNestedPopulate = (component: string, field: string) => {
      params.set(
        `populate[contentSections][on][${component}][populate][${field}][populate]`,
        "*"
      );
    };

    addMediaPopulate("sections.hero-section", "desktopBackground");
    addMediaPopulate("sections.hero-section", "mobileBackground");
    addMediaPopulate("sections.hero-section", "logoImage");
    addMediaPopulate("sections.hero-section", "overlayIcon");
    addNestedPopulate("sections.hero-section", "primaryCta");

    addNestedPopulate("sections.service-grid", "services");
    addNestedPopulate("sections.service-grid", "cta");

    addMediaPopulate("sections.image-highlight", "backgroundImage");
    addMediaPopulate("sections.image-highlight", "logoImage");
    addMediaPopulate("sections.image-highlight", "topIcon");
    addMediaPopulate("sections.image-highlight", "bottomIcon");

    addMediaPopulate("sections.coordinating-banner", "backgroundImage");
    addMediaPopulate("sections.coordinating-banner", "topIcon");
    addMediaPopulate("sections.coordinating-banner", "bottomIcon");

    addMediaPopulate("sections.why-choose", "supportImage");
    addNestedPopulate("sections.why-choose", "cta");

    addMediaPopulate("sections.process-steps", "illustration");
    addNestedPopulate("sections.process-steps", "cta");

    addMediaPopulate("sections.team-showcase", "supportGraphic");
    addNestedPopulate("sections.team-showcase", "members");
    addNestedPopulate("sections.team-showcase", "cta");

    addNestedPopulate("sections.testimonials", "items");
    addNestedPopulate("sections.contact-block", "videoTestimonials");

    const payload = await strapiFetchStatic<{ data?: { attributes?: HomePageData } }>(
      "/api/home-page",
      { params }
    );
    return (payload?.data?.attributes || payload?.data || {
      contentSections: [],
    }) as HomePageData | null;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to fetch home page from Strapi:", error);
    }
    return { contentSections: [] };
  }
};
