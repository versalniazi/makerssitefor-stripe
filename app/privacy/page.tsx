import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy describing how ${siteConfig.legalBusinessName} handles information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Overview",
    body: `This Privacy Policy explains how ${siteConfig.legalBusinessName} handles information submitted through this website. This page is a structured placeholder and should be reviewed and customized by ${siteConfig.legalBusinessName} before it is relied on as a binding legal document.`,
  },
  {
    title: "2. Information We Collect",
    body: "The project inquiry form on the Contact page requests information such as name, email address, project description, and preferred deadline. In its current form, this website does not connect the form to a backend or send this information anywhere.",
  },
  {
    title: "3. How Information Is Used",
    body: "Once submission is connected, information provided through the contact form would be used only to respond to project inquiries and to deliver the requested design services.",
  },
  {
    title: "4. Cookies and Analytics",
    body: "This website does not currently use cookies or third-party analytics tracking.",
  },
  {
    title: "5. Data Sharing",
    body: "MakersLuxe Limited does not sell personal information. Any future third-party processing (such as payment or email delivery providers) would be disclosed here before use.",
  },
  {
    title: "6. Your Choices",
    body: "You may contact MakersLuxe Limited at any time with questions about information you have submitted.",
  },
  {
    title: "7. Changes to This Policy",
    body: "MakersLuxe Limited may update this policy from time to time. Continued use of the website constitutes acceptance of the current version.",
  },
  {
    title: "8. Contact",
    body: `Questions about this policy can be directed to ${siteConfig.email || "MakersLuxe Limited"}.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Legal</p>
          <h1 className="text-4xl text-ink sm:text-5xl">Privacy Policy</h1>
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
