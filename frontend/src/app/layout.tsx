import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { getSiteSettings } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  preload: true,
});

const baseMetadata: Metadata = {
  title: "Amedicase - Optimize Your Healthcare & Medical Operations",
  description: "Delegate your billing, intake, and back-office operations to U.S.-trained healthcare professionals, so you can focus on patient care.",
  keywords: ["healthcare", "medical", "outsourcing", "home health", "billing", "back office"],
  authors: [{ name: "Amedicase" }],
  openGraph: {
    title: "Amedicase - Optimize Your Healthcare Operations",
    description: "Delegate your billing, intake, and back-office operations to U.S.-trained healthcare professionals.",
    type: "website",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const faviconUrl =
    getMediaUrl(settings?.brandAssets?.favicon) ||
    "https://amedicase.com/uploads/Vector_b7131a7800.png";
  const appleIconUrl = getMediaUrl(settings?.brandAssets?.appleTouchIcon);
  const seo = settings?.defaultSeo;
  const ogImageUrl = seo?.ogImage ? getMediaUrl(seo.ogImage) : null;

  return {
    ...baseMetadata,
    title: seo?.metaTitle || baseMetadata.title,
    description: seo?.metaDescription || baseMetadata.description,
    openGraph: {
      ...(baseMetadata.openGraph || {}),
      title: seo?.ogTitle || baseMetadata.openGraph?.title,
      description: seo?.ogDescription || baseMetadata.openGraph?.description,
      images: ogImageUrl ? [ogImageUrl] : baseMetadata.openGraph?.images,
    },
    icons: {
      icon: faviconUrl ? [{ url: faviconUrl }] : undefined,
      apple: appleIconUrl ? [{ url: appleIconUrl }] : undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body
        className="font-sans antialiased bg-[#F1F5FF]"
      >
        {children}
      </body>
    </html>
  );
}
