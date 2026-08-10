"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { ArrowRightIcon, MinusIcon, PlusIcon, TrashIcon } from "@/components/icons/UIIcons";

export default function CartView() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const searchParams = useSearchParams();
  const canceled = searchParams.get("canceled") === "1";
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function handleCheckout() {
    setCheckoutError(null);
    setIsCheckingOut(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        setCheckoutError(data.error ?? "Something went wrong starting checkout. Please try again.");
        setIsCheckingOut(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setCheckoutError("Couldn't reach checkout. Check your connection and try again.");
      setIsCheckingOut(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--radius-md)] border border-stone-200 bg-white p-12 text-center">
        <h2 className="text-xl text-ink">Your cart is empty</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft/80">
          Browse our fixed-price design packages and add one to get started.
        </p>
        <Link
          href="/packages"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Browse Packages
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
      <div>
        {canceled ? (
          <p className="mb-6 rounded-[var(--radius-sm)] border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-ink">
            Checkout was canceled — your cart is still saved.
          </p>
        ) : null}

        <ul className="divide-y divide-stone-200 border-y border-stone-200">
          {items.map((item) => (
            <li key={item.slug} className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div className="min-w-0">
                <Link href={`/packages/${item.slug}`} className="font-medium text-ink hover:text-accent">
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-stone-600">{formatPrice(item.price, item.currency)} each</p>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex items-center rounded-full border border-stone-300">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center text-ink-soft transition-colors hover:text-accent"
                  >
                    <MinusIcon className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-ink" aria-live="polite">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center text-ink-soft transition-colors hover:text-accent"
                  >
                    <PlusIcon className="h-3.5 w-3.5" />
                  </button>
                </div>

                <p className="w-20 text-right font-medium text-ink">{formatPrice(item.price * item.quantity)}</p>

                <button
                  type="button"
                  onClick={() => removeItem(item.slug)}
                  aria-label={`Remove ${item.name} from cart`}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-accent"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Link href="/packages" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark">
          ← Continue Browsing
        </Link>
      </div>

      <div className="rounded-[var(--radius-md)] border border-stone-200 bg-white p-7 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-ink">Order Summary</h2>

        <div className="mt-5 flex justify-between text-sm">
          <span className="text-stone-600">Subtotal</span>
          <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-2 text-xs text-stone-600">Any applicable taxes are calculated at checkout.</p>

        <div className="mt-6 flex justify-between border-t border-stone-200 pt-6 text-base">
          <span className="font-medium text-ink">Total</span>
          <span className="font-display text-2xl font-semibold text-ink">{formatPrice(subtotal)}</span>
        </div>

        {checkoutError ? (
          <p role="alert" className="mt-5 rounded-[var(--radius-sm)] bg-accent-soft px-4 py-3 text-sm text-ink">
            {checkoutError}
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isCheckingOut ? "Redirecting to checkout…" : "Proceed to Checkout"}
        </button>

        <p className="mt-4 text-center text-xs text-stone-600">Secure checkout powered by Stripe.</p>
      </div>
    </div>
  );
}
