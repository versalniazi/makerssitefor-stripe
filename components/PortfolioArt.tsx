export type PortfolioCategory =
  | "Branding"
  | "Print Design"
  | "Social Media"
  | "Packaging"
  | "Digital Design";

// Abstract vector "design sample" tiles used on the portfolio/showcase
// section. These represent the kind of work in each category — they are
// not renderings of real client projects.
export default function PortfolioArt({ category }: { category: PortfolioCategory }) {
  switch (category) {
    case "Branding":
      return (
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <rect width="400" height="400" fill="var(--color-ink)" />
          <circle cx="168" cy="172" r="66" fill="none" stroke="var(--color-paper)" strokeWidth="4" />
          <circle cx="222" cy="216" r="40" fill="var(--color-accent-light)" />
          <rect x="80" y="300" width="140" height="8" rx="4" fill="var(--color-paper)" opacity="0.7" />
          <rect x="80" y="320" width="90" height="6" rx="3" fill="var(--color-paper)" opacity="0.4" />
        </svg>
      );
    case "Print Design":
      return (
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <rect width="400" height="400" fill="var(--color-accent)" />
          <rect x="60" y="60" width="200" height="280" rx="10" fill="var(--color-paper)" />
          <rect x="86" y="100" width="148" height="12" rx="6" fill="var(--color-ink)" />
          <rect x="86" y="128" width="110" height="8" rx="4" fill="var(--color-stone-500)" />
          <rect x="86" y="150" width="130" height="8" rx="4" fill="var(--color-stone-500)" />
          <rect x="86" y="230" width="148" height="90" rx="8" fill="var(--color-accent-soft)" />
        </svg>
      );
    case "Social Media":
      return (
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <rect width="400" height="400" fill="var(--color-paper-dim)" />
          <rect x="40" y="40" width="150" height="150" rx="20" fill="var(--color-ink)" />
          <rect x="210" y="40" width="150" height="150" rx="20" fill="var(--color-accent)" />
          <rect x="40" y="210" width="150" height="150" rx="20" fill="var(--color-white)" stroke="var(--color-stone-300)" />
          <rect x="210" y="210" width="150" height="150" rx="20" fill="var(--color-accent-light)" />
        </svg>
      );
    case "Packaging":
      return (
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <rect width="400" height="400" fill="var(--color-accent-soft)" />
          <path d="M200 60 L320 120 V280 L200 340 L80 280 V120 Z" fill="var(--color-white)" stroke="var(--color-ink)" strokeOpacity="0.15" />
          <path d="M80 120 L200 180 L320 120" fill="none" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="3" />
          <path d="M200 180 V340" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="3" />
          <circle cx="200" cy="150" r="26" fill="var(--color-accent)" />
        </svg>
      );
    case "Digital Design":
    default:
      return (
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <rect width="400" height="400" fill="var(--color-ink)" />
          <rect x="60" y="80" width="280" height="180" rx="12" fill="var(--color-paper)" />
          <path d="M110 210 150 160 190 195 260 130" fill="none" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="260" cy="130" r="7" fill="var(--color-accent)" />
          <rect x="150" y="300" width="100" height="10" rx="5" fill="var(--color-paper)" opacity="0.8" />
        </svg>
      );
  }
}
