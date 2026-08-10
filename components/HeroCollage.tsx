// A hand-built SVG "moodboard" of design samples used in the homepage hero.
// These are illustrative concepts, not real client work — kept as vector
// shapes (no stock photography) to stay lightweight and on-brand.
export default function HeroCollage() {
  return (
    <svg
      viewBox="0 0 600 660"
      className="h-auto w-full max-w-[560px]"
      role="img"
      aria-label="A collage of graphic design samples: a logo mark, a business card, social media graphics, a poster, and a color palette."
    >
      <defs>
        <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#1b1812" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Card: business card mockup (back layer) */}
      <g transform="rotate(4 452 128)" filter="url(#cardShadow)">
        <rect x="302" y="58" width="300" height="172" rx="14" fill="var(--color-white)" stroke="var(--color-stone-300)" />
        <circle cx="336" cy="96" r="14" fill="var(--color-accent)" />
        <rect x="336" y="128" width="150" height="8" rx="4" fill="var(--color-ink)" opacity="0.85" />
        <rect x="336" y="146" width="100" height="6" rx="3" fill="var(--color-stone-500)" />
        <rect x="336" y="188" width="220" height="1" fill="var(--color-stone-300)" />
        <rect x="336" y="200" width="90" height="6" rx="3" fill="var(--color-stone-500)" />
      </g>

      {/* Card: logo concept */}
      <g transform="rotate(-5 154 178)" filter="url(#cardShadow)">
        <rect x="16" y="46" width="232" height="232" rx="18" fill="var(--color-ink)" />
        <circle cx="112" cy="150" r="56" fill="none" stroke="var(--color-paper)" strokeWidth="3" />
        <circle cx="156" cy="178" r="34" fill="var(--color-accent-light)" />
        <text x="42" y="248" fontSize="13" letterSpacing="2" fill="var(--color-stone-300)">LOGO CONCEPT</text>
      </g>

      {/* Card: color palette strip */}
      <g transform="rotate(-2 400 340)" filter="url(#cardShadow)">
        <rect x="270" y="270" width="340" height="112" rx="16" fill="var(--color-white)" stroke="var(--color-stone-300)" />
        <circle cx="316" cy="326" r="24" fill="var(--color-ink)" />
        <circle cx="368" cy="326" r="24" fill="var(--color-accent)" />
        <circle cx="420" cy="326" r="24" fill="var(--color-accent-light)" />
        <circle cx="472" cy="326" r="24" fill="var(--color-stone-300)" />
        <circle cx="524" cy="326" r="24" fill="var(--color-paper-dim)" stroke="var(--color-stone-300)" />
        <text x="316" y="366" fontSize="12" letterSpacing="2" fill="var(--color-stone-600)">BRAND PALETTE</text>
      </g>

      {/* Card: poster / typography sample */}
      <g transform="rotate(3 140 470)" filter="url(#cardShadow)">
        <rect x="30" y="330" width="220" height="290" rx="18" fill="var(--color-accent)" />
        <text x="58" y="470" fontSize="120" style={{ fontFamily: "var(--font-display)" }} fill="var(--color-paper)">Aa</text>
        <rect x="58" y="500" width="120" height="7" rx="3.5" fill="var(--color-paper)" opacity="0.85" />
        <rect x="58" y="520" width="80" height="6" rx="3" fill="var(--color-paper)" opacity="0.6" />
        <text x="58" y="588" fontSize="12" letterSpacing="2" fill="var(--color-paper)" opacity="0.85">POSTER SAMPLE</text>
      </g>

      {/* Card: social media grid */}
      <g transform="rotate(-3 452 470)" filter="url(#cardShadow)">
        <rect x="312" y="410" width="230" height="230" rx="18" fill="var(--color-paper-dim)" stroke="var(--color-stone-300)" />
        <rect x="336" y="434" width="86" height="86" rx="12" fill="var(--color-ink)" />
        <rect x="432" y="434" width="86" height="86" rx="12" fill="var(--color-accent)" />
        <rect x="336" y="530" width="86" height="86" rx="12" fill="var(--color-white)" stroke="var(--color-stone-300)" />
        <rect x="432" y="530" width="86" height="86" rx="12" fill="var(--color-accent-light)" />
      </g>
    </svg>
  );
}
