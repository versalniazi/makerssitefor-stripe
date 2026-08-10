import Link from "next/link";
import type { DesignPackage } from "@/data/packages";
import { CheckIcon } from "@/components/icons/UIIcons";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice } from "@/lib/utils";

export default function PackageCard({ pkg }: { pkg: DesignPackage }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[var(--radius-md)] border p-7 transition-all duration-300 hover:-translate-y-1 ${
        pkg.featured
          ? "border-accent bg-ink text-paper shadow-[var(--shadow-lift)]"
          : "border-stone-200 bg-white text-ink shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]"
      }`}
    >
      {pkg.featured ? (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          Featured Package
        </span>
      ) : null}

      <h3 className="text-lg font-semibold">{pkg.name}</h3>
      <p className={`mt-3 font-display text-4xl font-semibold ${pkg.featured ? "text-paper" : "text-ink"}`}>
        {formatPrice(pkg.price, pkg.currency)}
      </p>
      <p className={`mt-3 text-sm leading-relaxed ${pkg.featured ? "text-paper/75" : "text-ink-soft/80"}`}>
        {pkg.shortDescription}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <CheckIcon
              className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? "text-accent-light" : "text-accent"}`}
            />
            <span className={pkg.featured ? "text-paper/90" : "text-ink-soft"}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-2.5">
        <AddToCartButton
          slug={pkg.slug}
          name={pkg.name}
          price={pkg.price}
          currency={pkg.currency}
          variant={pkg.featured ? "inverted" : "primary"}
          className="w-full"
        />
        <Link
          href={`/packages/${pkg.slug}`}
          className={`text-center text-sm font-medium underline-offset-4 hover:underline ${
            pkg.featured ? "text-paper/80" : "text-ink-soft"
          }`}
        >
          View Package Details
        </Link>
      </div>
    </div>
  );
}
