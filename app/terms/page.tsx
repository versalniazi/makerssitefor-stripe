import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.businessName} website and purchasing design services and packages.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. Agreement to Terms",
    body: `These Terms & Conditions ("Terms") govern your use of the ${siteConfig.businessName} website and your purchase of any graphic design service or package offered by ${siteConfig.legalBusinessName} ("MakersLuxe," "we," "us"). By browsing this site, submitting a project inquiry, or completing a purchase, you agree to these Terms.`,
  },
  {
    title: "2. Services",
    body: "MakersLuxe offers fixed-price graphic design services and packages, as described on the Services and Packages pages. Each service or package listing states its included deliverables, number of revisions, estimated turnaround, and file formats — these details form part of the agreement for that order.",
  },
  {
    title: "3. Orders & Payment",
    body: "Packages may be purchased directly through the site's cart and checkout. Checkout is processed by Stripe, and payment is due in full, in USD, at the time of order unless otherwise agreed in writing. Placing an order through checkout is a binding request for MakersLuxe to perform the described design work; it is not a guarantee of a specific creative outcome beyond what is listed as included.",
  },
  {
    title: "4. Project Inquiries",
    body: "Submitting the project inquiry form on the Contact page is separate from placing an order — it does not create a binding agreement or charge you. It's simply a request for MakersLuxe to follow up about a potential project, custom scope, or question before you purchase.",
  },
  {
    title: "5. Providing Project Details",
    body: "To begin work, MakersLuxe needs accurate project information from you — such as content, brand assets, dimensions, references, and deadlines. Turnaround times are estimates that begin once the required information has been provided; delays in providing details or feedback may delay delivery.",
  },
  {
    title: "6. Revisions",
    body: "Each service or package includes a stated number of revision rounds, to be requested within a reasonable time after a draft is delivered. Requests beyond the included revisions, or substantial changes to the original brief, may require an additional arrangement.",
  },
  {
    title: "7. Intellectual Property",
    body: "Unless otherwise agreed, ownership of final, delivered design files transfers to the client once payment has been received in full. MakersLuxe may retain the right to display completed work as a general design sample unless the client requests otherwise. Any third-party assets (fonts, stock imagery, etc.) used in a project remain subject to their own licenses.",
  },
  {
    title: "8. Cancellations & Refunds",
    body: "Cancellations and refund eligibility are governed by our Refund & Cancellation Policy, which forms part of these Terms.",
  },
  {
    title: "9. Limitation of Liability",
    body: "MakersLuxe provides design services on an as-described basis and makes no guarantee of specific business, marketing, or commercial results from any design. To the fullest extent permitted by law, MakersLuxe's liability for any claim arising from a service or package is limited to the amount paid for that order.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms are governed by the laws applicable to MakersLuxe Limited's place of business, without regard to conflict-of-law principles, except where local consumer protection law requires otherwise.",
  },
  {
    title: "11. Changes to These Terms",
    body: "MakersLuxe may update these Terms from time to time; the current version always applies to new orders. Material changes will be reflected by an updated date on this page.",
  },
  {
    title: "12. Contact",
    body: `Questions about these Terms can be directed to ${siteConfig.email || "MakersLuxe Limited"}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Legal</p>
          <h1 className="text-4xl text-ink sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-4 text-sm text-stone-600">Last updated: August 2026</p>
        </div>

        <div className="mt-12 max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-2xl border-t border-stone-200 pt-6 text-xs leading-relaxed text-stone-600">
          This page is provided for general informational purposes and does not constitute legal advice. If you need
          these Terms tailored to a specific jurisdiction or reviewed for legal compliance, consult a qualified
          professional.
        </p>
      </Container>
    </section>
  );
}
