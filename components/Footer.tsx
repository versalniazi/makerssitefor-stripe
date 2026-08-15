import Link from "next/link";
import Container from "@/components/Container";
import { footerLinks, siteConfig } from "@/lib/config";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-paper-dim">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-xl font-semibold tracking-tight text-ink">MAKERSLUXE</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft/80">
            {siteConfig.legalBusinessName}
            <br />
            Professional Graphic Design Services
          </p>
          {siteConfig.email ? (
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-dark"
            >
              {siteConfig.email}
            </a>
          ) : null}
          {siteConfig.companyNumber ? (
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-stone-600">
              {siteConfig.legalBusinessName} is registered in {siteConfig.companyJurisdiction}, Company No.{" "}
              {siteConfig.companyNumber}.
              {siteConfig.registeredOfficeAddress ? (
                <>
                  <br />
                  Registered office: {siteConfig.registeredOfficeAddress}.
                </>
              ) : null}
            </p>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">Navigate</p>
          <ul className="mt-4 space-y-3">
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-soft transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">Legal</p>
          <ul className="mt-4 space-y-3">
            {footerLinks.slice(5).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-soft transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-stone-200">
        <Container className="flex flex-col items-center gap-3 py-6 text-xs text-stone-600 sm:flex-row sm:justify-between">
          <p>© {year} {siteConfig.legalBusinessName}. All rights reserved.</p>
          <p>Designed for businesses, creators, and individuals.</p>
        </Container>
      </div>
    </footer>
  );
}
