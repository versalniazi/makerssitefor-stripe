import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Refund and cancellation policy for graphic design services and packages offered by ${siteConfig.legalBusinessName}.`,
  alternates: { canonical: "/refund-policy" },
};

const sections = [
  {
    title: "1. Overview",
    body: `This Refund & Cancellation Policy applies to graphic design services and packages offered by ${siteConfig.legalBusinessName}. This page is a structured placeholder and should be reviewed and customized by ${siteConfig.legalBusinessName} before it is relied on as a binding legal document.`,
  },
  {
    title: "2. Before Work Begins",
    body: "Cancellation requests made before design work has started will be handled on a case-by-case basis.",
  },
  {
    title: "3. Once Design Work Has Started",
    body: "Because design work involves time and effort from the start of a project, refunds once work has begun are generally limited and will depend on how much of the agreed deliverables have been completed.",
  },
  {
    title: "4. Revisions vs. Refunds",
    body: "Each service and package includes a set number of revision rounds. Requests to adjust a design are handled through the included revisions rather than a refund.",
  },
  {
    title: "5. Non-Refundable Circumstances",
    body: "Completed and delivered final files are generally non-refundable, except where required by applicable law.",
  },
  {
    title: "6. How to Request a Cancellation or Refund",
    body: `To request a cancellation or refund, contact ${siteConfig.email || "MakersLuxe Limited"} with your project details.`,
  },
  {
    title: "7. Changes to This Policy",
    body: "MakersLuxe Limited may update this policy from time to time. Continued use of the website constitutes acceptance of the current version.",
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Legal</p>
          <h1 className="text-4xl text-ink sm:text-5xl">Refund & Cancellation Policy</h1>
          <p className="mt-4 text-sm text-stone-600">
            This is a structured placeholder page. It should be reviewed and customized by {siteConfig.legalBusinessName} before launch.
          </p>
        </div>

        <div className="mt-12 max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
