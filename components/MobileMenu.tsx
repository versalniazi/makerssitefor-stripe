"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { NavLink } from "@/lib/config";
import { MenuIcon, CloseIcon } from "@/components/icons/UIIcons";

const subscribeNoop = () => () => {};

// True only once mounted in the browser — lets us portal to document.body
// without a server/client markup mismatch.
function useMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  // The panel is portaled to <body> so it isn't constrained by the sticky,
  // backdrop-blurred header's containing block (backdrop-filter creates a
  // new containing block for fixed-position descendants).
  const mounted = useMounted();

  // Close on Escape, and lock background scroll while open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-stone-200/60"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open && mounted
        ? createPortal(
            <div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-0 z-50 flex flex-col bg-paper"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-display text-xl font-semibold tracking-tight text-ink"
                >
                  MAKERSLUXE
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-stone-200/60"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
                {links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="animate-fade-up border-b border-stone-200 py-4 font-display text-3xl text-ink transition-colors hover:text-accent"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="px-8 pb-10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 text-base font-medium text-paper transition-colors hover:bg-accent"
                >
                  Start a Project
                </Link>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
