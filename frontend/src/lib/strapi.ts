// Helper function to submit contact forms to Strapi
// In browser, we need to use the public URL, not the internal Docker network URL
const getStrapiUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side: prefer explicit Strapi public URL
    const publicUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_SITE_URL;
    return publicUrl || window.location.origin;
  }
  // Server-side: can use internal Docker network
  return process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
};

const getPublicStrapiUrl = () => {
  const explicitPublic =
    process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof window !== 'undefined') {
    return explicitPublic || window.location.origin;
  }
  return explicitPublic || 'http://localhost:1337';
};

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
  const baseUrl = getPublicStrapiUrl();
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
    const response = await fetch(`${baseUrl}/api/services-page?${params.toString()}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    const payload = await response.json();
    return payload?.data?.attributes || payload?.data || null;
  } catch (error) {
    console.error("Failed to fetch services page from Strapi:", error);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  const baseUrl = getPublicStrapiUrl();
  try {
    const params = new URLSearchParams();
    params.set("filters[slug][$eq]", slug);
    params.set("populate[sections][populate]", "*");
    params.set("populate[sections][on][sections.services-page-hero][populate]", "*");
    params.set("populate[sections][on][sections.services-page-pillars][populate][cards][populate]", "*");
    params.set("populate[sections][on][sections.card-grid][populate][cards][populate]", "*");
    params.set("populate[sections][on][sections.icon-steps][populate][steps][populate]", "*");
    params.set("populate[sections][on][sections.team-showcase][populate][members][populate]", "*");
    params.set("populate[sections][on][sections.about-team][populate][teamMembers][populate]", "*");
    params.set("populate[sections][on][sections.service-grid][populate][services][populate]", "*");
    params.set("populate[sections][on][sections.testimonials][populate][items][populate]", "*");
    params.set("populate[template][populate]", "*");
    const response = await fetch(`${baseUrl}/api/pages?${params.toString()}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    const payload = await response.json();
    const entry = payload?.data?.[0];
    return entry?.attributes || entry || null;
  } catch (error) {
    console.error("Failed to fetch page from Strapi:", error);
    return null;
  }
}

export async function getSiteSettings() {
  const baseUrl = getPublicStrapiUrl();
  try {
    const params = new URLSearchParams();
    params.set("populate[header][populate]", "*");
    params.set("populate[header][populate][navigation][populate]", "*");
    params.set("populate[header][populate][navigation][populate][children][populate]", "*");
    params.set("populate[footer][populate]", "*");
    params.set("populate[footer][populate][columns][populate]", "*");
    params.set("populate[footer][populate][socialLinks][populate]", "*");
    params.set("populate[footer][populate][legalLinks][populate]", "*");
    params.set("populate[brandAssets][populate]", "*");
    params.set("populate[defaultSeo][populate]", "*");
    const response = await fetch(`${baseUrl}/api/site-setting?${params.toString()}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    const payload = await response.json();
    return payload?.data?.attributes || payload?.data || null;
  } catch (error) {
    console.error("Failed to fetch site settings from Strapi:", error);
    return null;
  }
}
