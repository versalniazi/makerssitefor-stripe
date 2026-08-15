import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Refund and cancellation policy for graphic design services and packages purchased from ${siteConfig.legalBusinessName}.`,
  alternates: { canonical: "/refund-policy" },
};

const sections = [
  {
    title: "1. Overview",
    body: `This Refund & Cancellation Policy applies to all graphic design services and packages purchased from ${siteConfig.legalBusinessName} ("MakersLuxe," "we," "us") through this website.`,
  },
  {
    title: "2. How Payment Works",
    body: "Payment is collected in full, in USD, at checkout, through our payment processor Stripe. MakersLuxe does not store your card details — refunds, when approved, are issued back to the original payment method through Stripe.",
  },
  {
    title: "3. Before Work Begins",
    body: "If you request a cancellation shortly after purchase and before design work has started, you're eligible for a full refund. Contact us as soon as possible after checkout if you need to cancel.",
  },
  {
    title: "4. Once Design Work Has Started",
    body: "Because design work involves time and effort from the moment it begins, refund requests made after work has started are handled on a case-by-case basis and are generally limited to the portion of work not yet completed.",
  },
  {
    title: "5. Revisions vs. Refunds",
    body: "Each service and package includes a set number of revision rounds. If a delivered draft doesn't match your brief, please use the included revisions first — this is the fastest way to get a design you're happy with. Refund requests based on creative preference alone, where the included revisions haven't been used, may not be eligible.",
  },
  {
    title: "6. Non-Refundable Circumstances",
    body: "Completed and delivered final files are non-refundable once all included revisions have been used and the project has been marked complete, except where required by applicable law.",
  },
  {
    title: "7. Processing Time",
    body: "Approved refunds are issued to your original payment method via Stripe. Once issued, funds typically appear within 5–10 business days, depending on your bank or card provider.",
  },
  {
    title: "8. How to Request a Cancellation or Refund",
    body: `To request a cancellation or refund, contact ${siteConfig.email || "MakersLuxe Limited"} with your order details and the reason for your request.`,
  },
  {
    title: "9. Changes to This Policy",
    body: "MakersLuxe may update this policy from time to time; material changes will be reflected by an updated date on this page.",
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Legal</p>
          <h1 className="text-4xl text-ink sm:text-5xl">Refund & Cancellation Policy</h1>
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
          this policy tailored to a specific jurisdiction or reviewed for legal compliance, consult a qualified
          professional.
        </p>
      </Container>
    </section>
  );
}
