import Link from "next/link";
import { getPackageBySlug } from "@/data/packages";
import { formatPrice } from "@/lib/utils";

const teaserSlugs = ["quick-design", "logo-starter", "business-branding", "brand-identity", "complete-design-package"];

export default function PricingTeaser() {
  const items = teaserSlugs.map((slug) => getPackageBySlug(slug)).filter((pkg) => pkg !== undefined);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((pkg) => (
        <Link
          key={pkg.slug}
          href={`/packages/${pkg.slug}`}
          className="group flex flex-col rounded-[var(--radius-md)] border border-stone-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-lift)]"
        >
          <span className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {formatPrice(pkg.price, pkg.currency)}
          </span>
          <span className="mt-2 text-sm font-medium text-ink-soft">{pkg.name}</span>
          <span className="mt-3 text-xs font-medium uppercase tracking-wide text-accent opacity-0 transition-opacity group-hover:opacity-100">
            View Package →
          </span>
        </Link>
      ))}
    </div>
  );
}
