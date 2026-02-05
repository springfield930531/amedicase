import {
  getStrapiPublicBaseUrl,
  strapiFetchDynamic,
  strapiFetchStatic,
} from "@/lib/strapi-client";
import type { PageEntry } from "@/lib/page-types";
import type { SiteSettings } from "@/lib/site-settings-types";

// Helper function to submit contact forms to Strapi
// In browser, we need to use the public URL, not the internal Docker network URL
const getStrapiUrl = () => getStrapiPublicBaseUrl();

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string; // e.g., 'contact-page', 'home-page', etc.
}

type StrapiRequestError = {
  status?: number;
  message?: string;
};

const getErrorStatus = (error: unknown): number | undefined => {
  if (!error || typeof error !== "object") return undefined;
  const candidate = error as { status?: unknown };
  return typeof candidate.status === "number" ? candidate.status : undefined;
};

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const strapiUrl = getStrapiUrl();
    
    // Try multiple possible content type names
    const contentTypes = ['contact-form', 'contact-submissions', 'contact-submission', 'contacts', 'contact-forms'];
    
    let lastError: StrapiRequestError | Error | null = null;
    
    for (const contentType of contentTypes) {
      try {
        const response = await fetch(`${strapiUrl}/api/${contentType}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone || '',
              company: data.company || '',
              message: data.message,
              source: data.source || 'unknown',
            },
          }),
        });

        if (response.ok) {
          await response.json();
          return { success: true };
        }
        
        // If 404, try next content type
        if (response.status === 404) {
          continue;
        }
        
        // If 405 (Method Not Allowed), permissions are not set
        if (response.status === 405) {
          lastError = {
            status: 405,
            message:
              'Permissions not set. Please enable "create" permission for contact-submission in Strapi Admin → Settings → Users & Permissions → Roles → Public',
          };
          continue;
        }
        
        // For other errors, save and continue
        const errorBody = await response.json().catch(() => null);
        lastError =
          errorBody && typeof errorBody === "object"
            ? { status: response.status, ...(errorBody as object) }
            : { status: response.status, message: String(errorBody ?? "") };
      } catch (err) {
        lastError = err instanceof Error ? err : { message: String(err) };
        continue;
      }
    }
    
    // If all content types failed, try a generic endpoint or log the error
    console.error('All Strapi content types failed. Last error:', lastError);
    
    // Fallback: Still return success but log for manual processing
    // In production, you might want to send an email notification here
    console.log('Contact form submission (fallback):', data);
    
    // Provide helpful error message
    const errorMessage = getErrorStatus(lastError) === 405
      ? 'Permissions not configured correctly. Please check: 1) Go to Strapi Admin → Settings → Users & Permissions → Roles → Public, 2) Find "contact-submission" in APPLICATION section, 3) Enable "create" checkbox, 4) Click the gear icon next to "create" to open Advanced settings, 5) In "Allow to perform this action for" dropdown, select "ratelimit" (NOT "None" - "None" blocks access), 6) Save and wait a few seconds, 7) Try submitting again.'
      : 'Contact form endpoint not configured. Please configure a contact-submissions content type in Strapi and set permissions.';
    
    return {
      success: false,
      error: errorMessage,
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export async function getServicePage() {
  try {
    const params = new URLSearchParams();
    // Strapi v5 does not support populate=deep; explicitly populate needed media fields.
    params.append("populate[seo][populate][0]", "ogImage");
    params.append("populate[hero][populate][0]", "backgroundImage");
    params.append("populate[servicePillars][populate][cards][populate][0]", "image");
    params.append("populate[servicePillars][populate][cards][populate][1]", "learnMoreIcon");
    params.append("populate[howWeHelp][populate][0]", "bulletIcon");
    params.append("populate[weDeliverQuality][populate][0]", "backgroundImage");
    params.append("populate[weDeliverQuality][populate][1]", "desktopTopIcon");
    params.append("populate[weDeliverQuality][populate][2]", "desktopBottomIcon");
    params.append("populate[howItWorks][populate][0]", "illustration");
    params.append("populate[whyChoose][populate][0]", "separatorImage");
    params.append("populate[whyChoose][populate][1]", "rightImage");
    params.append("populate[whyChoose][populate][2]", "rightOverlay");
    const payload = await strapiFetchStatic<{ data?: { attributes?: unknown } }>(
      `/api/services-page`,
      { params }
    );
    if (!payload) {
      return null;
    }
    return payload?.data?.attributes || payload?.data || null;
  } catch (error) {
    console.error("Failed to fetch services page from Strapi:", error);
    return null;
  }
}

const fetchPageBySlug = async (
  slug: string,
  fetcher: typeof strapiFetchStatic
) => {
  try {
    const params = new URLSearchParams();
    params.set("filters[slug][$eq]", slug);
    params.set("populate[seo][populate]", "*");
    params.set("populate[sections][populate]", "*");

    const addMediaPopulate = (component: string, field: string) => {
      params.set(
        `populate[sections][on][${component}][populate][${field}]`,
        "true"
      );
    };
    const addNestedPopulate = (component: string, field: string) => {
      params.set(
        `populate[sections][on][${component}][populate][${field}][populate]`,
        "*"
      );
    };

    addMediaPopulate("sections.services-page-hero", "backgroundImage");
    addNestedPopulate("sections.services-page-hero", "primaryCta");
    addNestedPopulate("sections.services-page-hero", "secondaryCta");
    addNestedPopulate("sections.services-page-pillars", "cards");
    addMediaPopulate("sections.services-page-how-we-help", "bulletIcon");
    addMediaPopulate("sections.services-page-quality", "backgroundImage");
    addMediaPopulate("sections.services-page-quality", "desktopTopIcon");
    addMediaPopulate("sections.services-page-quality", "desktopBottomIcon");
    addMediaPopulate("sections.services-page-how-it-works", "illustration");
    addNestedPopulate("sections.services-page-how-it-works", "cta");
    addMediaPopulate("sections.services-page-why-choose", "separatorImage");
    addMediaPopulate("sections.services-page-why-choose", "rightImage");
    addMediaPopulate("sections.services-page-why-choose", "rightOverlay");

    addMediaPopulate("sections.about-hero", "backgroundImage");
    addNestedPopulate("sections.about-hero", "primaryCta");
    addNestedPopulate("sections.about-team", "teamMembers");
    addMediaPopulate("sections.about-team", "mobileProfilePhoto");
    addMediaPopulate("sections.about-team", "dotImagePrimary");
    addMediaPopulate("sections.about-team", "dotImageSecondary");
    addMediaPopulate("sections.about-why-choose", "image");
    addNestedPopulate("sections.about-why-choose", "cta");
    addNestedPopulate("sections.mission-values", "cta");

    addMediaPopulate("sections.page-hero", "backgroundImage");
    addNestedPopulate("sections.page-hero", "cta");
    addNestedPopulate("sections.page-hero", "ctaDesktop");
    addMediaPopulate("sections.image-overlay", "backgroundImage");
    addMediaPopulate("sections.image-overlay", "overlayImage");

    addMediaPopulate("sections.card-grid", "dotIcon");
    addNestedPopulate("sections.card-grid", "cards");

    addMediaPopulate("sections.icon-steps", "icon");
    addNestedPopulate("sections.icon-steps", "steps");
    addNestedPopulate("sections.icon-steps", "cta");

    addMediaPopulate("sections.process-stages", "arrowImage");
    addMediaPopulate("sections.process-stages", "arrowFinalImage");
    addNestedPopulate("sections.process-stages", "cta");

    addMediaPopulate("sections.team-showcase", "supportGraphic");
    addNestedPopulate("sections.team-showcase", "members");
    addNestedPopulate("sections.team-showcase", "cta");

    addNestedPopulate("sections.testimonials", "items");
    addNestedPopulate("sections.contact-block", "videoTestimonials");
    addNestedPopulate("sections.service-grid", "services");
    addNestedPopulate("sections.service-grid", "cta");
    addNestedPopulate("sections.contact-info-form", "infoCards");
    addNestedPopulate("sections.contact-info-form", "fields");
    addNestedPopulate("sections.faq-list", "items");
    addNestedPopulate("sections.process-stages", "stages");
    addNestedPopulate("sections.benefit-cards", "cards");

    params.set("populate[template][populate]", "*");
    const payload = await fetcher<{ data?: Array<PageEntry & { attributes?: PageEntry }> }>(`/api/pages`, {
      params,
    });
    if (!payload) {
      return null;
    }
    const entry = payload?.data?.[0];
    return (entry?.attributes || entry || null) as PageEntry | null;
  } catch (error) {
    console.error("Failed to fetch page from Strapi:", error);
    return null;
  }
};

export async function getPageBySlug(slug: string) {
  return fetchPageBySlug(slug, strapiFetchStatic);
}

export async function getPageBySlugDynamic(slug: string) {
  return fetchPageBySlug(slug, strapiFetchDynamic);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const fallback: SiteSettings = {
    header: { navigation: [] },
    footer: { columns: [], socialLinks: [], legalLinks: [] },
  };
  try {
    const params = new URLSearchParams();
    params.set("populate[header][populate]", "*");
    params.set("populate[footer][populate]", "*");
    params.set("populate[footer][populate][columns][populate]", "*");
    params.set("populate[footer][populate][socialLinks][populate]", "*");
    params.set("populate[footer][populate][legalLinks][populate]", "*");
    params.set("populate[brandAssets][populate]", "*");
    params.set("populate[defaultSeo][populate]", "*");
    const payload = await strapiFetchStatic<{ data?: { attributes?: SiteSettings } }>(
      `/api/site-setting`,
      { params, next: { revalidate: 300 } }
    );
    if (!payload) {
      return fallback;
    }
    return (payload?.data?.attributes || payload?.data || fallback) as SiteSettings | null;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to fetch site settings from Strapi:", error);
    }
    return fallback;
  }
}
