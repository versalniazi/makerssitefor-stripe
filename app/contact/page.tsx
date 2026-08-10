import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a graphic design project with MakersLuxe Limited. Tell us what you need and we'll help you choose the right service or package.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; package?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Start a Project"
        description="Tell us what you need and we'll help you choose the right design service."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-2xl text-ink">Project Inquiry</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft/80">
                Share a few details about your project below. This helps us understand your business, your goals,
                and which service or package fits best.
              </p>

              <div className="mt-8 space-y-5 rounded-[var(--radius-md)] border border-stone-200 bg-paper-dim p-6 text-sm text-ink-soft">
                <p>
                  Prefer email? Reach us directly at{" "}
                  {siteConfig.email ? (
                    <a href={`mailto:${siteConfig.email}`} className="font-medium text-accent hover:text-accent-dark">
                      {siteConfig.email}
                    </a>
                  ) : (
                    "our contact email"
                  )}
                  .
                </p>
              </div>
            </div>

            <div>
              <ContactForm defaultService={params.service} defaultPackage={params.package} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
