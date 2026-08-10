// Fixed-price package catalog. Individual /packages/[slug] pages are
// generated from this data.
//
// Every package carries a unique id, slug, exact price, and currency so
// payment processing (e.g. Stripe) can be wired up later without changing
// this data shape.

export interface DesignPackage {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: "USD";
  shortDescription: string;
  description: string;
  features: string[];
  deliverables: string[];
  revisions: string;
  turnaround: string;
  fileFormats: string[];
  featured?: boolean;
}

export const packages: DesignPackage[] = [
  {
    id: "quick-design",
    slug: "quick-design",
    name: "Quick Design",
    price: 10,
    currency: "USD",
    shortDescription:
      "A simple graphic-design service for a single social-media graphic, announcement, quote graphic, or promotional visual.",
    description:
      "A simple graphic-design service for a single social-media graphic, announcement, quote graphic, or promotional visual. Ideal when you need one clean design without a full package.",
    features: ["1 simple graphic", "JPG/PNG", "1 revision"],
    deliverables: ["1 simple graphic"],
    revisions: "1 revision",
    turnaround: "1–2 business days",
    fileFormats: ["JPG", "PNG"],
  },
  {
    id: "business-card-design",
    slug: "business-card-design",
    name: "Business Card Design",
    price: 15,
    currency: "USD",
    shortDescription: "A professional business card design, front and back, ready for print.",
    description:
      "A professional, print-ready business card design covering both the front and back — sized correctly and ready to send to any printer.",
    features: ["Front and back design", "Print-ready layout", "JPG/PNG/PDF", "1–2 revisions"],
    deliverables: ["Front and back design", "Print-ready layout"],
    revisions: "1–2 revisions",
    turnaround: "1–2 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "flyer-starter",
    slug: "flyer-starter",
    name: "Flyer Starter",
    price: 20,
    currency: "USD",
    shortDescription: "A single promotional flyer, designed for digital sharing or print.",
    description:
      "A single promotional flyer designed for an event, offer, or announcement — delivered ready for digital sharing or print.",
    features: ["1 promotional flyer", "Digital or print-ready design", "2 revisions"],
    deliverables: ["1 promotional flyer"],
    revisions: "2 revisions",
    turnaround: "1–2 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "social-media-pack",
    slug: "social-media-pack",
    name: "Social Media Pack",
    price: 25,
    currency: "USD",
    shortDescription: "Three branded social-media graphics designed together.",
    description:
      "Three branded social-media graphics designed together for a consistent look across your feed, launch, or promotion.",
    features: ["3 branded social-media graphics", "JPG/PNG", "2 revisions"],
    deliverables: ["3 branded social-media graphics"],
    revisions: "2 revisions",
    turnaround: "1–2 business days",
    fileFormats: ["JPG", "PNG"],
  },
  {
    id: "logo-starter",
    slug: "logo-starter",
    name: "Logo Starter",
    price: 30,
    currency: "USD",
    shortDescription: "A professional starter logo design package.",
    description:
      "A custom starter logo built around your business or brand name, delivered with a transparent-background version for use across your website and marketing.",
    features: ["Custom logo design", "Transparent-background version", "JPG and PNG files", "2 revisions"],
    deliverables: ["Custom logo design", "Transparent-background version"],
    revisions: "2 revisions",
    turnaround: "2–4 business days",
    fileFormats: ["JPG", "PNG"],
  },
  {
    id: "poster-design",
    slug: "poster-design",
    name: "Poster Design",
    price: 35,
    currency: "USD",
    shortDescription: "A custom, print-ready poster for events or display.",
    description:
      "A custom poster designed for an event, campaign, or in-store display, delivered print-ready with strong visual hierarchy.",
    features: ["1 custom poster", "Print-ready design", "JPG/PNG/PDF", "2 revisions"],
    deliverables: ["1 custom poster"],
    revisions: "2 revisions",
    turnaround: "2–4 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "youtube-pack",
    slug: "youtube-pack",
    name: "YouTube Pack",
    price: 40,
    currency: "USD",
    shortDescription: "Three custom YouTube thumbnails with a consistent style.",
    description:
      "Three custom YouTube thumbnails designed with a consistent, high-contrast style built to stand out in a crowded feed.",
    features: ["3 custom YouTube thumbnails", "JPG/PNG", "2 revisions"],
    deliverables: ["3 custom YouTube thumbnails"],
    revisions: "2 revisions",
    turnaround: "2–4 business days",
    fileFormats: ["JPG", "PNG"],
  },
  {
    id: "brand-starter",
    slug: "brand-starter",
    name: "Brand Starter",
    price: 45,
    currency: "USD",
    shortDescription: "A logo, color palette, and typography selection to start your brand.",
    description:
      "A starting point for a new brand — a custom logo, a basic color palette, and a typography selection designed to work together.",
    features: ["Logo design", "Basic color palette", "Typography selection", "JPG/PNG/PDF"],
    deliverables: ["Logo design", "Basic color palette", "Typography selection"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "business-branding",
    slug: "business-branding",
    name: "Business Branding",
    price: 50,
    currency: "USD",
    shortDescription: "A logo, business card, and matching social profile graphic.",
    description:
      "A practical branding starter for a small business — a logo, a business card, and a matching social profile graphic designed together.",
    features: ["Logo", "Business card", "Social profile graphic", "2 revisions"],
    deliverables: ["Logo", "Business card", "Social profile graphic"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
    featured: true,
  },
  {
    id: "brochure-starter",
    slug: "brochure-starter",
    name: "Brochure Starter",
    price: 55,
    currency: "USD",
    shortDescription: "A 2-page brochure with a professional, print-ready layout.",
    description:
      "A 2-page brochure with a professional layout, designed to introduce your business or services and delivered as a print-ready PDF.",
    features: ["2-page brochure", "Professional layout", "Print-ready PDF", "2 revisions"],
    deliverables: ["2-page brochure", "Professional layout"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["PDF"],
  },
  {
    id: "marketing-pack",
    slug: "marketing-pack",
    name: "Marketing Pack",
    price: 60,
    currency: "USD",
    shortDescription: "A flyer, promotional banner, and social-media graphics.",
    description:
      "A small marketing bundle — a flyer, a promotional banner, and social-media graphics designed together for a consistent campaign.",
    features: ["Flyer", "Promotional banner", "Social-media graphics", "2 revisions"],
    deliverables: ["Flyer", "Promotional banner", "Social-media graphics"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "product-design",
    slug: "product-design",
    name: "Product Design",
    price: 65,
    currency: "USD",
    shortDescription: "A product label or packaging design, delivered print-ready.",
    description:
      "A product label or packaging design — your choice — delivered print-ready and built to fit your container or product dimensions.",
    features: ["Product label OR packaging design", "Print-ready files", "JPG/PNG/PDF"],
    deliverables: ["Product label or packaging design"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "social-branding",
    slug: "social-branding",
    name: "Social Branding",
    price: 70,
    currency: "USD",
    shortDescription: "A social profile graphic, banner, and five branded posts.",
    description:
      "A social-media branding set built for consistency — a profile graphic, a banner, and five branded posts ready to publish.",
    features: ["Social profile graphic", "Social banner", "5 branded social posts"],
    deliverables: ["Social profile graphic", "Social banner", "5 branded social posts"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["JPG", "PNG"],
  },
  {
    id: "presentation-design",
    slug: "presentation-design",
    name: "Presentation Design",
    price: 75,
    currency: "USD",
    shortDescription: "A professional slide deck of up to 10 slides.",
    description:
      "A professional presentation of up to 10 slides, with a consistent layout and typography built for pitches, proposals, or reports.",
    features: ["Up to 10 slides", "Professional layout", "Consistent typography", "PDF/PPTX-ready design"],
    deliverables: ["Up to 10 slides", "Professional layout", "Consistent typography"],
    revisions: "2 revisions",
    turnaround: "3–5 business days",
    fileFormats: ["PDF", "PPTX-ready design"],
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    name: "Brand Identity",
    price: 80,
    currency: "USD",
    shortDescription: "A logo, color palette, typography, and basic brand guidelines.",
    description:
      "A small, cohesive brand identity — a logo, color palette, typography selection, and basic guidelines for using them consistently.",
    features: ["Logo", "Color palette", "Typography", "Basic brand guidelines"],
    deliverables: ["Logo", "Color palette", "Typography", "Basic brand guidelines"],
    revisions: "2 revisions",
    turnaround: "5–7 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "business-promo-pack",
    slug: "business-promo-pack",
    name: "Business Promo Pack",
    price: 85,
    currency: "USD",
    shortDescription: "A flyer, brochure, business card, and social-media graphic.",
    description:
      "A bundle of core promotional materials — a flyer, a brochure, a business card, and a social-media graphic, designed to work together.",
    features: ["Flyer", "Brochure", "Business card", "Social-media graphic"],
    deliverables: ["Flyer", "Brochure", "Business card", "Social-media graphic"],
    revisions: "2 revisions",
    turnaround: "5–7 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "complete-social-pack",
    slug: "complete-social-pack",
    name: "Complete Social Pack",
    price: 90,
    currency: "USD",
    shortDescription: "Ten branded social-media graphics in a consistent visual style.",
    description:
      "Ten branded social-media graphics designed together, giving your feed a consistent visual style across a full content batch.",
    features: ["10 branded social-media graphics", "Consistent visual style", "JPG/PNG"],
    deliverables: ["10 branded social-media graphics", "Consistent visual style"],
    revisions: "2 revisions",
    turnaround: "5–7 business days",
    fileFormats: ["JPG", "PNG"],
  },
  {
    id: "brand-marketing-pack",
    slug: "brand-marketing-pack",
    name: "Brand & Marketing Pack",
    price: 95,
    currency: "USD",
    shortDescription: "A logo, business card, flyer, and social-media graphics.",
    description:
      "A combined branding and marketing bundle — a logo, business card, flyer, and social-media graphics designed as one consistent set.",
    features: ["Logo", "Business card", "Flyer", "Social-media graphics"],
    deliverables: ["Logo", "Business card", "Flyer", "Social-media graphics"],
    revisions: "2 revisions",
    turnaround: "5–7 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
  {
    id: "complete-design-package",
    slug: "complete-design-package",
    name: "Complete Design Package",
    price: 100,
    currency: "USD",
    shortDescription: "Logo, basic brand identity, business card, flyer, and social-media graphics.",
    description:
      "The most complete package — a logo, basic brand identity, business card, flyer, and social-media graphics, delivered as professional final files.",
    features: [
      "Logo",
      "Basic brand identity",
      "Business card",
      "Flyer",
      "Social-media graphics",
      "Professional final files",
    ],
    deliverables: ["Logo", "Basic brand identity", "Business card", "Flyer", "Social-media graphics"],
    revisions: "2 revisions",
    turnaround: "5–7 business days",
    fileFormats: ["JPG", "PNG", "PDF"],
  },
];

export function getPackageBySlug(slug: string): DesignPackage | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getFeaturedPackage(): DesignPackage | undefined {
  return packages.find((pkg) => pkg.featured);
}
