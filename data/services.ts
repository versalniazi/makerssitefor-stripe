// Service catalog. Individual /services/[slug] pages are generated from
// this data — add a new service here and its page, metadata, and listing
// entry all follow automatically.

export type ServiceCategory =
  | "Branding"
  | "Marketing Design"
  | "Digital Content"
  | "Product Design"
  | "Creative & Editing";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  shortDescription: string;
  description: string;
  startingPrice: number;
  deliverables: string[];
  revisions: string;
  fileFormats: string[];
  whoItsFor: string[];
}

export const categories: ServiceCategory[] = [
  "Branding",
  "Marketing Design",
  "Digital Content",
  "Product Design",
  "Creative & Editing",
];

export const services: Service[] = [
  // Branding
  {
    slug: "logo-design",
    name: "Logo Design",
    category: "Branding",
    icon: "logo",
    shortDescription: "A custom logo mark built around your business or brand name.",
    description:
      "A custom logo designed to represent your business clearly and professionally. Each concept is built around your name, industry, and the tone you want your brand to carry — from clean wordmarks to simple icon-based marks.",
    startingPrice: 30,
    deliverables: ["Primary logo file", "Transparent-background version", "Color and black/white versions"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG"],
    whoItsFor: ["New businesses that need a first logo", "Rebrands looking for a cleaner mark", "Creators formalizing a personal brand"],
  },
  {
    slug: "brand-identity-design",
    name: "Brand Identity Design",
    category: "Branding",
    icon: "palette",
    shortDescription: "Logo, color palette, and typography that work together as one system.",
    description:
      "A small, consistent visual identity built around a logo, a color palette, and a typography selection — so your business looks intentional across every graphic you use next, not just a single design.",
    startingPrice: 80,
    deliverables: ["Logo design", "Color palette", "Typography selection", "Basic usage guidelines"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Startups preparing to launch", "Businesses standardizing their look", "Personal brands going professional"],
  },
  {
    slug: "business-card-design",
    name: "Business Card Design",
    category: "Branding",
    icon: "card",
    shortDescription: "A print-ready business card design, front and back.",
    description:
      "A professional, print-ready business card layout designed around your existing branding or a fresh look. Delivered front and back, sized correctly for standard printing.",
    startingPrice: 15,
    deliverables: ["Front and back design", "Print-ready layout"],
    revisions: "1–2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Freelancers and consultants", "Small business owners", "Sales and networking professionals"],
  },

  // Marketing Design
  {
    slug: "flyer-design",
    name: "Flyer Design",
    category: "Marketing Design",
    icon: "flyer",
    shortDescription: "A promotional flyer for events, offers, or announcements.",
    description:
      "A single flyer designed to promote an event, sale, or announcement — laid out for print or digital sharing, with clear hierarchy so the offer and details stand out.",
    startingPrice: 20,
    deliverables: ["1 promotional flyer", "Digital or print-ready layout"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Local businesses and events", "Promotions and sales", "Community announcements"],
  },
  {
    slug: "brochure-design",
    name: "Brochure Design",
    category: "Marketing Design",
    icon: "brochure",
    shortDescription: "A multi-page brochure layout for services or products.",
    description:
      "A clean, professional brochure layout used to introduce your business, services, or products in more detail than a single flyer allows.",
    startingPrice: 45,
    deliverables: ["Multi-page brochure layout", "Print-ready PDF"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PDF", "PNG"],
    whoItsFor: ["Service businesses", "Real estate and hospitality", "Trade shows and open houses"],
  },
  {
    slug: "poster-design",
    name: "Poster Design",
    category: "Marketing Design",
    icon: "poster",
    shortDescription: "A large-format poster for events, campaigns, or display.",
    description:
      "A custom poster designed for events, campaigns, or in-store display — built with strong visual hierarchy so it reads clearly from a distance.",
    startingPrice: 35,
    deliverables: ["1 custom poster", "Print-ready design"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Event organizers", "Retail and campaigns", "Studios, gyms, and venues"],
  },
  {
    slug: "social-media-design",
    name: "Social Media Design",
    category: "Marketing Design",
    icon: "social",
    shortDescription: "Branded graphics for Instagram, Facebook, and other platforms.",
    description:
      "Custom social-media graphics — posts, quote graphics, or announcements — designed to match your brand and sized correctly for the platform you need.",
    startingPrice: 10,
    deliverables: ["Branded social-media graphic(s)", "Correct platform sizing"],
    revisions: "1–2 rounds of revisions",
    fileFormats: ["PNG", "JPG"],
    whoItsFor: ["Businesses posting regularly", "Creators and personal brands", "Product and service promotion"],
  },
  {
    slug: "social-media-banner-design",
    name: "Social Media Banner Design",
    category: "Marketing Design",
    icon: "banner",
    shortDescription: "A profile banner or cover image for your social channels.",
    description:
      "A branded cover or banner image designed for your social profile — Facebook, LinkedIn, X, or YouTube — so your page looks finished at first glance.",
    startingPrice: 15,
    deliverables: ["1 profile banner/cover image", "Correct platform sizing"],
    revisions: "1–2 rounds of revisions",
    fileFormats: ["PNG", "JPG"],
    whoItsFor: ["New or refreshed social profiles", "Businesses and personal brands", "Creators and consultants"],
  },
  {
    slug: "advertisement-design",
    name: "Advertisement Design",
    category: "Marketing Design",
    icon: "ad",
    shortDescription: "A digital or print ad creative built around your offer.",
    description:
      "A focused advertisement design for digital or print placement — built to communicate one clear offer or message with strong visual hierarchy.",
    startingPrice: 25,
    deliverables: ["1 advertisement design", "Digital or print-ready layout"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Paid social and display campaigns", "Print advertising placements", "Product and service launches"],
  },

  // Digital Content
  {
    slug: "youtube-thumbnail-design",
    name: "YouTube Thumbnail Design",
    category: "Digital Content",
    icon: "thumbnail",
    shortDescription: "A high-contrast thumbnail designed to stand out in search and suggested feeds.",
    description:
      "A custom YouTube thumbnail designed for clarity and contrast, so your video stands out in a crowded feed while staying true to your channel's look.",
    startingPrice: 15,
    deliverables: ["1 custom thumbnail", "Correct platform sizing"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG"],
    whoItsFor: ["YouTube creators", "Podcasters with video uploads", "Educators and course creators"],
  },
  {
    slug: "youtube-channel-branding",
    name: "YouTube Channel Branding",
    category: "Digital Content",
    icon: "channel",
    shortDescription: "A consistent visual look for your channel banner, icon, and thumbnails.",
    description:
      "A cohesive visual set for your YouTube channel — banner, profile icon, and thumbnail template — so your channel reads as one consistent brand.",
    startingPrice: 40,
    deliverables: ["Channel banner", "Profile icon", "Thumbnail template"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG"],
    whoItsFor: ["Growing YouTube channels", "Rebrands and channel refreshes", "Creators launching a new channel"],
  },
  {
    slug: "presentation-design",
    name: "Presentation Design",
    category: "Digital Content",
    icon: "presentation",
    shortDescription: "A professionally designed slide deck with consistent layout and typography.",
    description:
      "A professional presentation layout with consistent typography, spacing, and structure — built for pitches, proposals, reports, or internal decks.",
    startingPrice: 75,
    deliverables: ["Up to 10 designed slides", "Consistent layout and typography"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PDF", "PPTX-ready design"],
    whoItsFor: ["Pitch decks and proposals", "Internal and client reports", "Course and training material"],
  },
  {
    slug: "infographic-design",
    name: "Infographic Design",
    category: "Digital Content",
    icon: "infographic",
    shortDescription: "A visual breakdown of data, steps, or information.",
    description:
      "An infographic that turns data, steps, or information into a clear visual layout — useful for reports, social sharing, or educational content.",
    startingPrice: 30,
    deliverables: ["1 infographic design", "Digital-ready file"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Content and marketing teams", "Educators and researchers", "Businesses simplifying data"],
  },
  {
    slug: "ebook-pdf-design",
    name: "E-book / PDF Design",
    category: "Digital Content",
    icon: "ebook",
    shortDescription: "A designed layout for guides, e-books, or downloadable PDFs.",
    description:
      "A clean, readable layout for an e-book, guide, or downloadable resource — with consistent typography and structure from cover to final page.",
    startingPrice: 50,
    deliverables: ["Designed PDF layout", "Consistent typography and structure"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PDF"],
    whoItsFor: ["Lead magnets and guides", "Course creators", "Authors and coaches"],
  },

  // Product Design
  {
    slug: "product-packaging-design",
    name: "Product Packaging Design",
    category: "Product Design",
    icon: "packaging",
    shortDescription: "Packaging artwork designed for print production.",
    description:
      "Packaging design for a physical product — built to your dimensions and print requirements, with a look that fits your brand and shelf presence.",
    startingPrice: 65,
    deliverables: ["Packaging design", "Print-ready files"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Product-based businesses", "Small-batch and handmade goods", "New product launches"],
  },
  {
    slug: "product-label-design",
    name: "Product Label Design",
    category: "Product Design",
    icon: "label",
    shortDescription: "A print-ready label for bottles, jars, or packaged goods.",
    description:
      "A custom product label designed for print — sized to your container and built to communicate your brand clearly on shelf or online.",
    startingPrice: 35,
    deliverables: ["Product label design", "Print-ready file"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Food, beverage, and cosmetic brands", "Small-batch producers", "Online product sellers"],
  },
  {
    slug: "menu-design",
    name: "Menu Design",
    category: "Product Design",
    icon: "menu",
    shortDescription: "A restaurant or café menu, laid out for print or digital use.",
    description:
      "A restaurant, café, or event menu designed for clarity and appetite appeal — laid out for easy reading and ready for print or digital display.",
    startingPrice: 40,
    deliverables: ["Menu layout", "Print or digital-ready design"],
    revisions: "2 rounds of revisions",
    fileFormats: ["PDF", "PNG"],
    whoItsFor: ["Restaurants and cafés", "Catering businesses", "Pop-up and event menus"],
  },

  // Creative & Editing
  {
    slug: "certificate-design",
    name: "Certificate Design",
    category: "Creative & Editing",
    icon: "certificate",
    shortDescription: "A formal certificate for courses, events, or recognition.",
    description:
      "A formal certificate design for course completion, event participation, or recognition — with a clean, editable layout for names and dates.",
    startingPrice: 20,
    deliverables: ["Certificate template design", "Print-ready file"],
    revisions: "1–2 rounds of revisions",
    fileFormats: ["PDF", "PNG"],
    whoItsFor: ["Course and training providers", "Event organizers", "Schools and workshops"],
  },
  {
    slug: "invitation-design",
    name: "Invitation Design",
    category: "Creative & Editing",
    icon: "invitation",
    shortDescription: "A custom invitation for personal or business events.",
    description:
      "A custom invitation design for a business or personal event — styled to fit the occasion and ready for print or digital sharing.",
    startingPrice: 20,
    deliverables: ["Invitation design", "Print or digital-ready file"],
    revisions: "1–2 rounds of revisions",
    fileFormats: ["PNG", "JPG", "PDF"],
    whoItsFor: ["Business launch and grand-opening events", "Private celebrations", "Community and studio events"],
  },
  {
    slug: "photo-editing-retouching",
    name: "Photo Editing & Retouching",
    category: "Creative & Editing",
    icon: "photo",
    shortDescription: "Cleanup, color correction, and retouching for existing photos.",
    description:
      "Editing and retouching for existing photography — color correction, background cleanup, and general touch-ups to get an image ready for use.",
    startingPrice: 10,
    deliverables: ["Edited photo file(s)", "Color correction and cleanup"],
    revisions: "1 round of revisions",
    fileFormats: ["JPG", "PNG"],
    whoItsFor: ["Product photography cleanup", "Portrait and headshot touch-ups", "Real estate and listing photos"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  return services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, limit);
}
