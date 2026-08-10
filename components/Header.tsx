import Link from "next/link";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import CartButton from "@/components/CartButton";
import { navLinks } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-paper/90 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          MAKERSLUXE
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartButton />
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent md:inline-flex"
          >
            Start a Project
          </Link>
          <MobileMenu links={navLinks} />
        </div>
      </Container>
    </header>
  );
}
