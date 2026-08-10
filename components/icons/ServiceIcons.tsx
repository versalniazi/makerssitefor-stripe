import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

// A small, consistent set of line icons used across service cards.
// Purely decorative geometric marks — kept simple so they read clearly
// at small sizes without relying on stock imagery or brand glyphs.

export function LogoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="10.5" r="6.5" />
      <circle cx="15" cy="14.5" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 4.5 0 1 0 0 9 2.2 2.2 0 0 0 0-4.4h1a2.6 2.6 0 0 0 2.6-2.6A4.5 9 0 0 0 12 3Z" />
      <circle cx="8.3" cy="8.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M6.5 15h4M6.5 12.2h2.5" />
      <circle cx="16.5" cy="11" r="1.6" />
    </svg>
  );
}

export function FlyerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
    </svg>
  );
}

export function BrochureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5 12 4l8 1.5v14L12 20l-8 1.5Z" />
      <path d="M12 4v16" />
    </svg>
  );
}

export function PosterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <circle cx="12" cy="9" r="2.6" />
      <path d="M8.5 16.5 11 13l1.5 1.7L15 12l1 2" />
    </svg>
  );
}

export function SocialIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BannerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="18" height="10" rx="1.5" />
      <path d="M3 10.5h18" />
    </svg>
  );
}

export function AdIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M7 9h6M7 12h10M7 15h4" />
    </svg>
  );
}

export function ThumbnailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M10 9.2 15 12l-5 2.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChannelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="10" rx="2" />
      <circle cx="12" cy="18" r="1.4" />
      <path d="M9.5 10 13.5 12l-4 2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PresentationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4" width="17" height="11" rx="1.5" />
      <path d="M12 15v4M9 21.5h6" />
      <path d="M7 11.5 10 8.5l2.2 2 3.3-3.3" />
    </svg>
  );
}

export function InfographicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 20V10M12 20V4M19 20v-7" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function EbookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.2c-1.6-1-4-1.4-7-1.2v13c3 -0.2 5.4 0.2 7 1.2 1.6-1 4-1.4 7-1.2v-13c-3-0.2-5.4 0.2-7 1.2Z" />
      <path d="M12 6.2v13" />
    </svg>
  );
}

export function PackagingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 20 7.5v9L12 20.5 4 16.5v-9Z" />
      <path d="M4 7.5 12 11.5l8-4M12 11.5v9" />
    </svg>
  );
}

export function LabelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 4h4.5L20 8.5V13L13 20l-9-9V4Z" />
      <circle cx="14.3" cy="9.7" r="1.1" />
    </svg>
  );
}

export function MenuCardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 7.5h8M8 11h8M8 14.5h5" />
    </svg>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M6.5 7.5h11M6.5 10.5h7" />
      <circle cx="12" cy="18.3" r="2.2" />
      <path d="M10.4 20 9.8 22.5 12 21.2l2.2 1.3-0.6-2.5" />
    </svg>
  );
}

export function InvitationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function PhotoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10.5" r="1.7" />
      <path d="M4 17.5 9 13l3 2.6 3.5-3.5L20 16" />
    </svg>
  );
}

export const serviceIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  logo: LogoIcon,
  palette: PaletteIcon,
  card: CardIcon,
  flyer: FlyerIcon,
  brochure: BrochureIcon,
  poster: PosterIcon,
  social: SocialIcon,
  banner: BannerIcon,
  ad: AdIcon,
  thumbnail: ThumbnailIcon,
  channel: ChannelIcon,
  presentation: PresentationIcon,
  infographic: InfographicIcon,
  ebook: EbookIcon,
  packaging: PackagingIcon,
  label: LabelIcon,
  menu: MenuCardIcon,
  certificate: CertificateIcon,
  invitation: InvitationIcon,
  photo: PhotoIcon,
};

export function ServiceIcon({ name, ...props }: { name: string } & IconProps) {
  const Icon = serviceIconMap[name] ?? LogoIcon;
  return <Icon {...props} />;
}
