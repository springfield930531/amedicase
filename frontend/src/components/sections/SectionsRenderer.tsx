import { inferPageRenderKind, SECTION_REGISTRY } from "@/components/sections/registry";

type SectionLike = {
  __component?: string;
  id?: number;
  enabled?: boolean;
  [key: string]: unknown;
};

type SectionsRendererProps = {
  sections?: Array<SectionLike | null | undefined>;
  page?: {
    title?: string;
    slug?: string;
  } | null;
};

export function SectionsRenderer({ sections, page }: SectionsRendererProps) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  const kind = inferPageRenderKind(sections);
  const contactBlock = sections.find(
    (section) => section?.__component === "sections.contact-block"
  ) as (SectionLike & {
    contactEmail?: unknown;
    contactPhone?: unknown;
    contactAddress?: unknown;
  }) | null | undefined;
  const contact =
    contactBlock && typeof contactBlock === "object"
      ? {
          email:
            typeof contactBlock.contactEmail === "string"
              ? contactBlock.contactEmail
              : undefined,
          phone:
            typeof contactBlock.contactPhone === "string"
              ? contactBlock.contactPhone
              : null,
          address:
            typeof contactBlock.contactAddress === "string"
              ? contactBlock.contactAddress
              : null,
        }
      : null;

  const pageContext = page ? { ...page, kind, contact } : { kind, contact };

  return (
    <>
      {sections.map((section, index) => {
        const component = section?.__component;
        if (!component) return null;

        // Many Strapi sections support an `enabled` toggle. Respect it generically.
        if (section?.enabled === false) return null;

        const Component = SECTION_REGISTRY[component];
        if (!Component) {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.warn(`[SectionsRenderer] Unknown section: ${component}`);
          }
          return null;
        }

        const key = section?.id ? `${component}-${section.id}` : `${component}-${index}`;
        return <Component key={key} data={section} page={pageContext} />;
      })}
    </>
  );
}
