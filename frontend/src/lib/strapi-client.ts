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

type StrapiFetchOptions = {
  params?: URLSearchParams;
  cache?: RequestCache;
  next?: { revalidate?: number };
};

const getStrapiPublicUrl = () => {
  const explicitPublic =
    process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof window !== "undefined") {
    return explicitPublic || window.location.origin;
  }
  return (
    explicitPublic ||
    process.env.STRAPI_PUBLIC_URL ||
    process.env.STRAPI_URL ||
    "http://localhost:1337"
  );
};

const getStrapiBaseUrl = () => {
  const explicitPublic =
    process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof window !== "undefined") {
    return explicitPublic || window.location.origin;
  }
  return process.env.STRAPI_URL || explicitPublic || "http://localhost:1337";
};

const shouldDebugStrapi = () =>
  process.env.NODE_ENV !== "production" &&
  (process.env.STRAPI_DEBUG === "true" ||
    process.env.NEXT_PUBLIC_STRAPI_DEBUG === "true");

const buildStrapiUrl = (path: string, params?: URLSearchParams) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl = getStrapiBaseUrl();
  if (!params || params.toString().length === 0) {
    return `${baseUrl}${normalizedPath}`;
  }
  return `${baseUrl}${normalizedPath}?${params.toString()}`;
};

export const getMediaUrl = (media?: StrapiMedia | null) => {
  if (!media) return null;
  const url =
    media.url || media.data?.attributes?.url || media.attributes?.url || null;
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${getStrapiPublicUrl()}${url}`;
};

const buildFetchOptions = (
  options: StrapiFetchOptions,
  defaults?: { cache?: RequestCache; next?: { revalidate?: number } }
) => {
  const headers: HeadersInit = {};
  const token = process.env.STRAPI_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const fetchOptions: RequestInit & { next?: { revalidate?: number } } = {
    headers,
  };
  if (options.next) {
    fetchOptions.next = options.next;
  } else if (options.cache) {
    fetchOptions.cache = options.cache;
  } else if (defaults?.next) {
    fetchOptions.next = defaults.next;
  } else if (defaults?.cache) {
    fetchOptions.cache = defaults.cache;
  }
  return fetchOptions;
};

const strapiFetchInternal = async <T = unknown>(
  path: string,
  options: StrapiFetchOptions,
  defaults?: { cache?: RequestCache; next?: { revalidate?: number } }
): Promise<T | null> => {
  const url = buildStrapiUrl(path, options.params);
  const fetchOptions = buildFetchOptions(options, defaults);

  const response = await fetch(url, fetchOptions);
  let payload: T | null = null;
  try {
    payload = (await response.json()) as T;
  } catch {
    payload = null;
  }

  if (shouldDebugStrapi()) {
    const keys = payload && typeof payload === "object" ? Object.keys(payload as object) : [];
    console.log(`[strapi] ${response.status} ${url}`);
    console.log("[strapi] response keys", keys);
  }

  if (!response.ok) {
    return null;
  }

  return payload;
};

export const strapiFetchStatic = async <T = unknown>(
  path: string,
  options: StrapiFetchOptions = {}
): Promise<T | null> =>
  strapiFetchInternal<T>(path, options, { next: { revalidate: 300 } });

export const strapiFetchDynamic = async <T = unknown>(
  path: string,
  options: StrapiFetchOptions = {}
): Promise<T | null> =>
  strapiFetchInternal<T>(path, options, { cache: "no-store" });

export const getStrapiPublicBaseUrl = getStrapiPublicUrl;
export const getStrapiServerBaseUrl = getStrapiBaseUrl;
