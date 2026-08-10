import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.businessName} website and design services.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. Overview",
    body: `These Terms & Conditions govern the use of the ${siteConfig.businessName} website and the graphic design services offered by ${siteConfig.legalBusinessName}. This page is a structured placeholder and should be reviewed and customized by ${siteConfig.legalBusinessName} before it is relied on as a binding legal document.`,
  },
  {
    title: "2. Services",
    body: "MakersLuxe Limited offers fixed-price graphic design services and packages as described on the Services and Packages pages. Deliverables, revisions, and file formats for each service or package are listed on its individual page.",
  },
  {
    title: "3. Project Inquiries",
    body: "Submitting the project inquiry form does not create a binding order or agreement. It is a request for MakersLuxe Limited to follow up regarding a potential project.",
  },
  {
    title: "4. Revisions",
    body: "Each service or package includes a stated number of revision rounds. Additional revisions beyond what is included may be subject to a separate arrangement.",
  },
  {
    title: "5. Intellectual Property",
    body: "Ownership and usage rights for final design files will be defined as part of the project agreement between MakersLuxe Limited and the client.",
  },
  {
    title: "6. Limitation of Liability",
    body: "MakersLuxe Limited provides design services on an as-described basis and does not guarantee specific business results from any design.",
  },
  {
    title: "7. Changes to These Terms",
    body: "MakersLuxe Limited may update these terms from time to time. Continued use of the website constitutes acceptance of the current version.",
  },
  {
    title: "8. Contact",
    body: `Questions about these terms can be directed to ${siteConfig.email || "MakersLuxe Limited"}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Legal</p>
          <h1 className="text-4xl text-ink sm:text-5xl">Terms & Conditions</h1>
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
