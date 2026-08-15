// Centralized business/site configuration.
// Update these values in one place to change brand, contact, and social details
// site-wide. Do not hard-code these values inside components or pages.

export const siteConfig = {
  businessName: "MakersLuxe",
  legalBusinessName: "MakersLuxe Limited",
  tagline: "Professional Graphic Design, Made Simple.",
  businessDescription:
    "MakersLuxe Limited provides professional graphic design services for businesses, entrepreneurs, creators, and individuals — from individual design tasks to complete branding packages.",

  // Contact details for MakersLuxe Limited.
  email: "makersluxelimited0@gmail.com",
  phone: "",

  // Official registration details, per Companies House (Scotland).
  companyNumber: "SC845813",
  companyJurisdiction: "Scotland, United Kingdom",
  registeredOfficeAddress: "289 Kings Park Avenue, Rutherglen, Glasgow, Scotland, G73 2AF",
  incorporatedOn: "22 April 2025",

  websiteUrl: "https://www.makersluxe.com",
  currency: "USD" as const,

  // Placeholder social links — point these at real profiles when available.
  socialLinks: {
    instagram: "#",
    pinterest: "#",
    behance: "#",
    x: "#",
  },

  priceRange: {
    min: 10,
    max: 100,
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
];
