import PortfolioCard, { type PortfolioItem } from "@/components/PortfolioCard";

export const portfolioItems: PortfolioItem[] = [
  { category: "Branding", title: "Logo & Mark Concept" },
  { category: "Print Design", title: "Brochure Layout" },
  { category: "Social Media", title: "Content Grid Concept" },
  { category: "Packaging", title: "Packaging Concept" },
  { category: "Digital Design", title: "Presentation Slide Concept" },
];

export default function PortfolioGrid({ items = portfolioItems }: { items?: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <PortfolioCard key={item.title} item={item} />
      ))}
    </div>
  );
}
