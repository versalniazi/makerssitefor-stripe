"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { CartIcon, CheckIcon } from "@/components/icons/UIIcons";

type Variant = "primary" | "secondary" | "inverted";

export default function AddToCartButton({
  slug,
  name,
  price,
  currency = "USD",
  variant = "primary",
  size = "md",
  className = "",
}: {
  slug: string;
  name: string;
  price: number;
  currency?: "USD";
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem({ slug, name, price, currency });
    setAdded(true);
    // React 18+ safely no-ops a setState call after unmount, so no cleanup
    // is needed here for this purely cosmetic confirmation state.
    setTimeout(() => setAdded(false), 1800);
  }

  const variantClasses =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent focus-visible:bg-accent"
      : variant === "inverted"
        ? "bg-paper text-ink hover:bg-accent hover:text-white"
        : "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper";
  const sizeClasses = size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 ${variantClasses} ${sizeClasses} ${className}`}
    >
      {added ? (
        <>
          <CheckIcon className="h-4 w-4" />
          Added to Cart
        </>
      ) : (
        <>
          <CartIcon className="h-4 w-4" />
          Add to Cart
        </>
      )}
    </button>
  );
}
