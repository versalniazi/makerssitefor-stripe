import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import { categories, getServicesByCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description:
    "Browse MakersLuxe Limited's full range of professional graphic design services — branding, marketing materials, digital content, product design, and creative editing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Graphic Design Services for Every Project"
        description="Individual design services for businesses, creators, entrepreneurs, and individuals — each with clear deliverables and a starting price."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          {categories.map((category) => {
            const categoryServices = getServicesByCategory(category);
            return (
              <div key={category}>
                <SectionHeading title={category} as="h2" />
                <div className="mt-8">
                  <ServiceGrid services={categoryServices} />
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection
        title="Not sure which service is right for you?"
        description="Tell us what you need and we'll help you choose the right design service or package."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
