import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy describing how ${siteConfig.legalBusinessName} handles information submitted through this website and processed at checkout.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Overview",
    body: `This Privacy Policy explains what information ${siteConfig.legalBusinessName} ("MakersLuxe," "we," "us") collects through this website, and how it is used.`,
  },
  {
    title: "2. Information We Collect",
    body: "Project Inquiry form: name, email address, selected service or package, project description, preferred deadline, and any additional requirements you enter. Checkout: if you complete a purchase, your name, email, billing details, and payment information are collected directly by Stripe, our payment processor — MakersLuxe does not see or store your full card details. Cart: the items you add to your cart are stored locally in your browser (not on our servers) so your selection is there when you return.",
  },
  {
    title: "3. How Information Is Used",
    body: "Information submitted through the project inquiry form or collected at checkout is used only to respond to your inquiry, process your order, and deliver the requested design services — including contacting you about a project you've purchased.",
  },
  {
    title: "4. Payment Processing",
    body: "All payments are processed by Stripe, Inc., a PCI-DSS-compliant payment processor. When you check out, you are transacting directly with Stripe on a Stripe-hosted page; MakersLuxe never receives or stores your full card number. Stripe's use of your information is governed by Stripe's own privacy policy.",
  },
  {
    title: "5. Cookies",
    body: "This website does not set its own tracking or analytics cookies. Stripe's checkout page, which lives on Stripe's domain, may set cookies necessary for processing your payment, under Stripe's own policy.",
  },
  {
    title: "6. Data Sharing",
    body: "MakersLuxe does not sell personal information. Stripe processes payment data as described above. We do not share your information with any other third party except where required by law.",
  },
  {
    title: "7. Data Retention",
    body: "Cart data lives only in your browser's local storage and is cleared automatically after a successful checkout, or can be cleared at any time by clearing your browser data. MakersLuxe retains records of completed orders (as shown in our Stripe dashboard) and project inquiry submissions only as long as needed to deliver your project and meet accounting or legal obligations.",
  },
  {
    title: "8. Your Choices",
    body: "You may contact us at any time with questions about information you've submitted, or to request that we delete project details we hold that are no longer needed to fulfill an order.",
  },
  {
    title: "9. Children's Privacy",
    body: "This website is intended for business use and is not directed at, or knowingly collecting information from, children under 13.",
  },
  {
    title: "10. Changes to This Policy",
    body: "MakersLuxe may update this policy from time to time; material changes will be reflected by an updated date on this page.",
  },
  {
    title: "11. Contact",
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
          this policy tailored to specific data-protection laws that apply to you (such as GDPR or CCPA), consult a
          qualified professional.
        </p>
      </Container>
    </section>
  );
}
