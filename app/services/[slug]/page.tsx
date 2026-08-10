import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessSteps, { type ProcessStep } from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { CheckIcon } from "@/components/icons/UIIcons";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: `${service.shortDescription} Starting at ${formatPrice(service.startingPrice)} from MakersLuxe Limited.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | MakersLuxe`,
      description: service.shortDescription,
    },
  };
}

const processSteps: ProcessStep[] = [
  { number: "01", title: "Submit project details", description: "Share your requirements, references, and brand details." },
  { number: "02", title: "Design development", description: "MakersLuxe develops the design based on what you've shared." },
  { number: "03", title: "Review", description: "You review the design and share feedback." },
  { number: "04", title: "Revisions", description: "Requested revisions are applied within the included rounds." },
  { number: "05", title: "Final delivery", description: "You receive the agreed final files." },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service);

  return (
    <>
      <Hero
        eyebrow={service.category}
        title={service.name}
        description={service.shortDescription}
        primaryCta={{ label: "Start Your Project", href: `/contact?service=${service.slug}` }}
        secondaryCta={{ label: "View Packages", href: "/packages" }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <SectionHeading title="About This Service" as="h2" />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft/80">{service.description}</p>

              <div className="mt-12">
                <h3 className="text-xl text-ink">What&rsquo;s Included</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="text-xl text-ink">Who It&rsquo;s For</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="h-fit rounded-[var(--radius-md)] border border-stone-200 bg-white p-7 shadow-[var(--shadow-soft)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-wide text-stone-600">Starting at</p>
              <p className="font-display text-4xl font-semibold text-ink">{formatPrice(service.startingPrice)}</p>

              <dl className="mt-6 space-y-4 border-t border-stone-200 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Revisions</dt>
                  <dd className="text-right font-medium text-ink">{service.revisions}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">File formats</dt>
                  <dd className="text-right font-medium text-ink">{service.fileFormats.join(", ")}</dd>
                </div>
              </dl>

              <Link
                href={`/contact?service=${service.slug}`}
                className="mt-7 flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Start Your Project
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-paper-dim py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Simple Process" title="How It Works" />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related" title="Related Services" />
            <div className="mt-10">
              <ServiceGrid services={related} />
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title={`Ready to start your ${service.name.toLowerCase()} project?`}
        description="Tell us what you need and we'll help you choose the right design service."
        primaryCta={{ label: "Start Your Project", href: `/contact?service=${service.slug}` }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
