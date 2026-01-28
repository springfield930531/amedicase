import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  preload: true,
});

export const metadata: Metadata = {
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
