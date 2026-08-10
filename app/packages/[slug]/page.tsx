import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PackageGrid from "@/components/PackageGrid";
import ProcessSteps, { type ProcessStep } from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/icons/UIIcons";
import { packages, getPackageBySlug } from "@/data/packages";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  return {
    title: `${pkg.name} — ${formatPrice(pkg.price, pkg.currency)}`,
    description: `${pkg.shortDescription} A fixed-price package from MakersLuxe Limited.`,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: {
      title: `${pkg.name} — ${formatPrice(pkg.price, pkg.currency)} | MakersLuxe`,
      description: pkg.shortDescription,
    },
  };
}

const processSteps: ProcessStep[] = [
  { number: "01", title: "Submit project details", description: "Share your requirements, references, and brand details." },
  { number: "02", title: "Design development", description: "MakersLuxe develops the design for your package." },
  { number: "03", title: "Review", description: "You review the design and share feedback." },
  { number: "04", title: "Revisions", description: "Requested revisions are applied within the included rounds." },
  { number: "05", title: "Final delivery", description: "You receive the agreed final design files." },
];

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const otherPackages = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-stone-200 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <div>
              {pkg.featured ? (
                <span className="mb-4 inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-dark">
                  Featured Package
                </span>
              ) : (
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Package</p>
              )}
              <h1 className="text-4xl leading-tight text-ink sm:text-5xl">{pkg.name}</h1>
              <p className="font-display mt-4 text-4xl font-semibold text-ink">
                {formatPrice(pkg.price, pkg.currency)}
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {pkg.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/contact?package=${pkg.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-accent"
                >
                  Request This Package
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center rounded-full border border-ink/20 px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  View All Packages
                </Link>
              </div>
            </div>

            <div className="rounded-[var(--radius-md)] border border-stone-200 bg-white p-7 shadow-[var(--shadow-soft)]">
              <h2 className="text-lg font-semibold text-ink">What&rsquo;s Included</h2>
              <ul className="mt-5 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <dl className="mt-6 space-y-4 border-t border-stone-200 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Deliverables</dt>
                  <dd className="text-right font-medium text-ink">{pkg.deliverables.join(", ")}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Revisions</dt>
                  <dd className="text-right font-medium text-ink">{pkg.revisions}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">Estimated turnaround</dt>
                  <dd className="text-right font-medium text-ink">{pkg.turnaround}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-600">File formats</dt>
                  <dd className="text-right font-medium text-ink">{pkg.fileFormats.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-paper-dim py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Simple Process" title="How It Works" />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="More Options" title="Other Packages" />
          <div className="mt-10">
            <PackageGrid packages={otherPackages} />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to request ${pkg.name}?`}
        description="Submit your project details and we'll follow up to get started."
        primaryCta={{ label: "Request This Package", href: `/contact?package=${pkg.slug}` }}
        secondaryCta={{ label: "View All Packages", href: "/packages" }}
      />
    </>
  );
}
