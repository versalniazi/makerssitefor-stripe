import Link from "next/link";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { ArrowRightIcon } from "@/components/icons/UIIcons";
import { formatPrice } from "@/lib/utils";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-[var(--radius-md)] border border-stone-200 bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-dark transition-colors group-hover:bg-accent group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft/80">{service.shortDescription}</p>
      <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
        <div>
          <span className="block text-[11px] uppercase tracking-wide text-stone-600">From</span>
          <span className="font-display text-lg font-semibold text-ink">{formatPrice(service.startingPrice)}</span>
        </div>
        <span className="flex items-center gap-1 text-sm font-medium text-accent">
          View Service
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
