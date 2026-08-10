"use client";

import { useSyncExternalStore } from "react";

// A minimal external store for the cart, persisted to localStorage.
// Using useSyncExternalStore (rather than Context + useState/useEffect)
// avoids any SSR/client hydration mismatch — getServerSnapshot returns an
// empty cart for the server-rendered markup, and React reconciles to the
// real client snapshot right after hydration, with no extra effect needed.

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  currency: "USD";
  quantity: number;
}

const STORAGE_KEY = "makersluxe:cart";

let items: CartItem[] = [];
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage can be unavailable (private browsing, quota) — fail silently.
  }
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) items = JSON.parse(raw) as CartItem[];
  } catch {
    items = [];
  }
}

function getSnapshot(): CartItem[] {
  hydrate();
  return items;
}

function getServerSnapshot(): CartItem[] {
  return [];
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export const cartActions = {
  addItem(item: Omit<CartItem, "quantity">, quantity = 1) {
    hydrate();
    const existing = items.find((i) => i.slug === item.slug);
    items = existing
      ? items.map((i) => (i.slug === item.slug ? { ...i, quantity: i.quantity + quantity } : i))
      : [...items, { ...item, quantity }];
    persist();
    emit();
  },
  updateQuantity(slug: string, quantity: number) {
    hydrate();
    items = quantity <= 0 ? items.filter((i) => i.slug !== slug) : items.map((i) => (i.slug === slug ? { ...i, quantity } : i));
    persist();
    emit();
  },
  removeItem(slug: string) {
    hydrate();
    items = items.filter((i) => i.slug !== slug);
    persist();
    emit();
  },
  clear() {
    items = [];
    persist();
    emit();
  },
};

export function useCart() {
  const cartItems = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    items: cartItems,
    itemCount,
    subtotal,
    addItem: cartActions.addItem,
    updateQuantity: cartActions.updateQuantity,
    removeItem: cartActions.removeItem,
    clear: cartActions.clear,
  };
}
