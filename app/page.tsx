import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Hero from "@/components/Hero";
import HeroCollage from "@/components/HeroCollage";
import PricingTeaser from "@/components/PricingTeaser";
import ServiceGrid from "@/components/ServiceGrid";
import PortfolioGrid from "@/components/PortfolioGrid";
import ProcessSteps, { type ProcessStep } from "@/components/ProcessSteps";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { ArrowRightIcon, CheckIcon } from "@/components/icons/UIIcons";
import { getServiceBySlug } from "@/data/services";
import { getFeaturedPackage } from "@/data/packages";
import { formatPrice } from "@/lib/utils";

const featuredServiceSlugs = [
  "logo-design",
  "social-media-design",
  "youtube-thumbnail-design",
  "product-packaging-design",
  "photo-editing-retouching",
  "business-card-design",
];

const processSteps: ProcessStep[] = [
  { number: "01", title: "Choose", description: "Select a service or package that fits your project." },
  {
    number: "02",
    title: "Tell Us What You Need",
    description: "Provide content, dimensions, branding, references, and requirements.",
  },
  { number: "03", title: "Design", description: "MakersLuxe develops the requested design." },
  {
    number: "04",
    title: "Review",
    description: "Review the design and request the revisions included in the package.",
  },
  { number: "05", title: "Final Delivery", description: "Receive the agreed final design files." },
];

const faqItems = [
  {
    question: "How do I order a service or package?",
    answer:
      "Browse Services or Packages, choose the one that fits your project, and submit a project inquiry. We'll follow up to confirm details before design work begins.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Each service and package lists its included number of revision rounds. You'll always know how many revisions are included before starting.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "File formats vary by service and package — commonly JPG, PNG, and PDF. Exact formats are listed on each service and package page.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Yes. If your project needs more than one service, mention this in your project inquiry and we'll help you choose the right combination or package.",
  },
];

export default function Home() {
  const featuredServices = featuredServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service) => service !== undefined);
  const featuredPackage = getFeaturedPackage();

  return (
    <>
      <Hero
        eyebrow="MakersLuxe Limited"
        title="Professional Graphic Design, Made Simple."
        description="MakersLuxe provides professional graphic design services for businesses, creators, entrepreneurs, and individuals — from individual design tasks to complete branding packages."
        primaryCta={{ label: "Explore Packages", href: "/packages" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        visual={<HeroCollage />}
      />

      {/* Quick value / pricing */}
      <section className="border-b border-stone-200 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Simple, Fixed Pricing"
            title="Design Services From $10"
            description="Choose a simple individual design service or a complete design package up to $100."
          />
          <div className="mt-10">
            <PricingTeaser />
          </div>
          <div className="mt-10">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              View All Packages
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="border-b border-stone-200 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="What We Design"
            description="From individual marketing graphics to complete visual identities, MakersLuxe offers practical design services for everyday business and creative needs."
          />
          <div className="mt-10">
            <ServiceGrid services={featuredServices} />
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              View All Services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured package */}
      {featuredPackage ? (
        <section className="border-b border-stone-200 py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 rounded-[var(--radius-lg)] border border-stone-200 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Featured Package
                </p>
                <h2 className="text-3xl text-ink sm:text-4xl">
                  {featuredPackage.name} — {formatPrice(featuredPackage.price, featuredPackage.currency)}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft/80">
                  {featuredPackage.shortDescription}
                </p>
                <Link
                  href={`/packages/${featuredPackage.slug}`}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  View Package
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <ul className="grid gap-4 sm:grid-cols-1">
                {featuredPackage.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-stone-200 bg-paper-dim px-5 py-4"
                  >
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Portfolio */}
      <section className="border-b border-stone-200 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Design Samples"
            title="Selected Design Work"
            description="A look at the kind of graphic design MakersLuxe creates — presented as design samples, not client projects."
          />
          <div className="mt-10">
            <PortfolioGrid />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-b border-stone-200 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Simple Process" title="How It Works" align="center" />
          <div className="mt-12">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* Why MakersLuxe */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why MakersLuxe" title="Design Made Straightforward" />
          <div className="mt-12">
            <Benefits />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-200 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQ items={faqItems} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to start your project?"
        description="Tell us what you need and we'll help you choose the right design service or package."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Packages", href: "/packages" }}
      />
    </>
  );
}
