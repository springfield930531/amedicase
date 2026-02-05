import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceStyleA } from "@/components/page-templates/ServiceStyleA";
import { ServiceStyleB } from "@/components/page-templates/ServiceStyleB";
import { ServiceStyleC } from "@/components/page-templates/ServiceStyleC";
import { LegalStyle } from "@/components/page-templates/LegalStyle";
import { getPageBySlugDynamic } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type { PageEntry } from "@/lib/page-types";

type DynamicPageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

const getTemplateKey = (page: PageEntry | null) =>
  page?.template?.key ||
  page?.template?.attributes?.key ||
  page?.template?.data?.attributes?.key ||
  null;

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const page = (await getPageBySlugDynamic(params.slug)) as PageEntry | null;
  if (!page?.seo) {
    return {};
  }
  const ogImage = page.seo?.ogImage ? getMediaUrl(page.seo.ogImage) : undefined;
  return {
    title: page.seo?.metaTitle,
    description: page.seo?.metaDescription,
    alternates: page.seo?.canonicalUrl ? { canonical: page.seo.canonicalUrl } : undefined,
    robots: page.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: page.seo
      ? {
          title: page.seo.ogTitle || page.seo.metaTitle,
          description: page.seo.ogDescription || page.seo.metaDescription,
          images: ogImage ? [ogImage] : undefined,
        }
      : undefined,
  };
}

export default async function DynamicServicePage({ params }: DynamicPageProps) {
  const page = (await getPageBySlugDynamic(params.slug)) as PageEntry | null;
  if (!page) {
    notFound();
  }

  const templateKey = getTemplateKey(page);
  if (!templateKey) {
    notFound();
  }

  switch (templateKey) {
    case "service-style-a":
      return <ServiceStyleA page={page} />;
    case "service-style-b":
      return <ServiceStyleB page={page} />;
    case "service-style-c":
      return <ServiceStyleC page={page} />;
    case "legal-style":
      return <LegalStyle page={page} />;
    default:
      notFound();
  }
}
