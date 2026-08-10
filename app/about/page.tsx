import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "MakersLuxe Limited provides professional graphic design services for businesses, entrepreneurs, creators, and individuals.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About MakersLuxe"
        title="Design That Helps Businesses Look Their Best."
        description={siteConfig.businessDescription}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading title="What We Do" as="h2" />
              <div className="mt-5 max-w-2xl space-y-5 text-base leading-relaxed text-ink-soft/80">
                <p>
                  {siteConfig.legalBusinessName} provides professional graphic-design services for businesses,
                  entrepreneurs, creators, and individuals. The company focuses on practical visual design, from
                  individual marketing materials and social-media graphics to logos, branding, packaging,
                  presentations, and complete design packages.
                </p>
                <p>
                  Every project is offered as a fixed-price service or package, so you know the deliverables,
                  revisions, and cost before you start — whether that&rsquo;s a single graphic or a complete brand
                  identity.
                </p>
              </div>
            </div>

            <div className="rounded-[var(--radius-md)] border border-stone-200 bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="text-lg font-semibold text-ink">Who We Work With</h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                <li>Businesses</li>
                <li>Entrepreneurs and startups</li>
                <li>Creators and personal brands</li>
                <li>Online businesses</li>
                <li>Freelancers</li>
                <li>Individuals with a one-off design need</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-paper-dim py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Why MakersLuxe" title="A Straightforward Approach to Design" />
          <div className="mt-12">
            <Benefits />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to start your project?"
        description="Tell us what you need and we'll help you choose the right design service or package."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
