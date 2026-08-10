"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { CartIcon } from "@/components/icons/UIIcons";

export default function CartButton({ className = "" }: { className?: string }) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Cart${itemCount > 0 ? `, ${itemCount} item${itemCount === 1 ? "" : "s"}` : ""}`}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-stone-200/60 ${className}`}
    >
      <CartIcon className="h-5 w-5" />
      {itemCount > 0 ? (
        <span
          aria-hidden="true"
          className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white"
        >
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      ) : null}
    </Link>
  );
}
