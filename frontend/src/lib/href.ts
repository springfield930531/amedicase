const HAS_SCHEME = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

export const normalizeHref = (value?: string | null): string | undefined => {
  if (!value) return undefined;
  const href = value.trim();
  if (!href) return undefined;

  // Keep already-normalized internal anchors/paths and any explicit schemes.
  if (href.startsWith("/") || href.startsWith("#") || HAS_SCHEME.test(href)) {
    return href;
  }

  // If it looks like a domain (e.g. calendly.com/..., www.example.com/...),
  // assume https. This prevents broken relative navigation.
  if (href.includes(".")) {
    return `https://${href}`;
  }

  // Treat anything else as an internal path segment.
  return `/${href}`;
};

export const isExternalHref = (href?: string | null): boolean => {
  const normalized = normalizeHref(href);
  if (!normalized) return false;
  return (
    /^https?:\/\//i.test(normalized) ||
    /^mailto:/i.test(normalized) ||
    /^tel:/i.test(normalized)
  );
};

