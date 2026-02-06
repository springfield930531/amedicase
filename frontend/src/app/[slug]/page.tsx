import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContentUnavailable } from "@/components/shared/ContentUnavailable";
import { SectionsRenderer } from "@/components/sections/SectionsRenderer";
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

export default async function DynamicPage({ params }: DynamicPageProps) {
  const page = (await getPageBySlugDynamic(params.slug)) as PageEntry | null;
  if (!page) {
    notFound();
  }

  if (!page.sections?.length) {
    return (
      <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
        <Header />
        <main className="flex flex-col items-start w-full overflow-x-hidden">
          <ContentUnavailable />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5ff] relative overflow-x-hidden">
      <Header />
      <main className="relative z-10 overflow-x-hidden">
        <SectionsRenderer sections={page.sections} page={{ title: page.title, slug: page.slug }} />
      </main>
      <Footer />
    </div>
  );
}
