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

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string; // e.g., 'contact-page', 'home-page', etc.
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const strapiUrl = getStrapiUrl();
    
    // Try multiple possible content type names
    const contentTypes = ['contact-form', 'contact-submissions', 'contact-submission', 'contacts', 'contact-forms'];
    
    let lastError: any = null;
    
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
          const result = await response.json();
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
            message: 'Permissions not set. Please enable "create" permission for contact-submission in Strapi Admin → Settings → Users & Permissions → Roles → Public' 
          };
          continue;
        }
        
        // For other errors, save and continue
        lastError = await response.json().catch(() => ({ status: response.status }));
      } catch (err) {
        lastError = err;
        continue;
      }
    }
    
    // If all content types failed, try a generic endpoint or log the error
    console.error('All Strapi content types failed. Last error:', lastError);
    
    // Fallback: Still return success but log for manual processing
    // In production, you might want to send an email notification here
    console.log('Contact form submission (fallback):', data);
    
    // Provide helpful error message
    const errorMessage = lastError?.status === 405 
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
