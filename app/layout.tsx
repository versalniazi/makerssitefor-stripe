import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: `${siteConfig.legalBusinessName} | Professional Graphic Design Services`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    "MakersLuxe Limited provides professional graphic design services including logo design, branding, flyers, brochures, social media graphics, packaging, presentations, and custom design packages.",
  openGraph: {
    type: "website",
    siteName: siteConfig.businessName,
    title: `${siteConfig.legalBusinessName} | Professional Graphic Design Services`,
    description:
      "Professional graphic design services and fixed-price design packages from $10 to $100 — branding, marketing materials, social media graphics, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalBusinessName} | Professional Graphic Design Services`,
    description: "Professional graphic design services and fixed-price design packages from $10 to $100.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
