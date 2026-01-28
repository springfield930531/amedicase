type StrapiMedia = {
  url?: string;
  data?: {
    attributes?: {
      url?: string;
    };
  };
  attributes?: {
    url?: string;
  };
};

const getPublicStrapiUrl = () => {
  const explicitPublic =
    process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof window !== 'undefined') {
    return explicitPublic || window.location.origin;
  }
  return explicitPublic || 'http://localhost:1337';
};

export const getMediaUrl = (media?: StrapiMedia | null) => {
  if (!media) return null;
  const url =
    media.url || media.data?.attributes?.url || media.attributes?.url || null;
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `${getPublicStrapiUrl()}${url}`;
};

export const fetchHomePage = async () => {
  const baseUrl = getPublicStrapiUrl();
  try {
    const params = new URLSearchParams();
    params.set("populate[contentSections][populate]", "*");
    const response = await fetch(`${baseUrl}/api/home-page?${params.toString()}`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      return null;
    }
    const payload = await response.json();
    const data = payload?.data?.attributes || payload?.data || null;
    return data;
  } catch (error) {
    console.error('Failed to fetch home page from Strapi:', error);
    return null;
  }
};
