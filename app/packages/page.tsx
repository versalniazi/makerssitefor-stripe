import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import PackageGrid from "@/components/PackageGrid";
import CTASection from "@/components/CTASection";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Design Packages",
  description:
    "Fixed-price graphic design packages from $10 to $100 — logo design, branding, business cards, flyers, social media graphics, and complete design bundles.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <Hero
        eyebrow="Packages"
        title="Fixed-Price Design Packages"
        description="Every package has a clear price, a defined set of deliverables, and a set number of revisions — from a single quick graphic to a complete design bundle."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <PackageGrid packages={packages} />
        </Container>
      </section>

      <CTASection
        title="Not sure which package fits your project?"
        description="Tell us what you need and we'll help you choose the right design service or package."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
