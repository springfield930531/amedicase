import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContentUnavailable } from "@/components/shared/ContentUnavailable";
import { SectionsRenderer } from "@/components/sections/SectionsRenderer";
import { getPageBySlugDynamic } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import type { PageEntry } from "@/lib/page-types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getPageBySlugDynamic("home-health")) as PageEntry | null;
  const seo = page?.seo;
  const ogImage = seo?.ogImage ? getMediaUrl(seo.ogImage) : undefined;
  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    alternates: seo?.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
    robots: seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: seo
      ? {
          title: seo.ogTitle || seo.metaTitle,
          description: seo.ogDescription || seo.metaDescription,
          images: ogImage ? [ogImage] : undefined,
        }
      : undefined,
  };
}

export default async function HomeHealthPage() {
  const page = (await getPageBySlugDynamic("home-health")) as PageEntry | null;

  if (!page) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[strapi] Home health page content not available");
    }
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
