import PortfolioArt, { type PortfolioCategory } from "@/components/PortfolioArt";

export interface PortfolioItem {
  category: PortfolioCategory;
  title: string;
}

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="group overflow-hidden rounded-[var(--radius-md)] border border-stone-200 bg-white shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
      <div className="aspect-square overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <PortfolioArt category={item.category} />
        </div>
      </div>
      <figcaption className="flex items-center justify-between px-5 py-4">
        <span className="text-sm font-medium text-ink">{item.title}</span>
        <span className="text-xs uppercase tracking-wide text-stone-600">Design Sample</span>
      </figcaption>
    </figure>
  );
}
