# MakersLuxe Limited — Website

A premium marketing + storefront site for **MakersLuxe Limited**, a professional graphic-design services business. Built with Next.js (App Router), TypeScript, and Tailwind CSS, with a cart and Stripe Checkout for the fixed-price packages.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Payments (Stripe)

Checkout is wired to [Stripe Checkout](https://stripe.com/docs/payments/checkout) (a hosted, redirect-based flow — no card data ever touches this app's server).

1. Copy `.env.example` to `.env.local`.
2. Set `STRIPE_SECRET_KEY` to a secret key from your [Stripe dashboard](https://dashboard.stripe.com/apikeys) (use a `sk_test_...` key while developing).
3. Restart the dev server. Add a package to the cart, go to `/cart`, and click **Proceed to Checkout** — you'll be redirected to Stripe's hosted checkout page.

Until a key is set, the checkout button fails gracefully with an inline message instead of crashing.

**How it works:** `app/api/checkout/route.ts` receives the cart contents from the browser and creates a Stripe Checkout Session with dynamic `price_data` line items (no need to pre-create Products/Prices in the Stripe dashboard), then returns the session's hosted URL for the browser to redirect to. On success, Stripe redirects to `/checkout/success`, which clears the local cart. On cancel, it redirects back to `/cart?canceled=1`.

**Not included yet** (add these before taking real orders):
- A webhook handler (`checkout.session.completed`) to reliably confirm and record paid orders — the current success page is a client-side redirect only and isn't proof of payment on its own.
- Order storage/fulfillment (there is no database in this project).
- Tax collection (`automatic_tax`) and address collection, if you need them.

## Cart

The cart is a small client-side store (`lib/cart.ts`) backed by `localStorage` via `useSyncExternalStore` — no Context provider needed, and no backend. `AddToCartButton` writes to it; `CartButton` (header) and `CartView` (`/cart`) read from it. It's scoped to the browser/device, not a persistent per-customer cart.

## Project Structure

```
app/                    Routes (App Router)
  services/[slug]       Individual service pages, generated from data/services.ts
  packages/[slug]       Individual package pages, generated from data/packages.ts
  cart/                 Cart page
  checkout/success/     Post-payment confirmation page
  api/checkout/         Route handler that creates a Stripe Checkout Session
components/             Reusable UI components
data/
  services.ts           The 20-service catalog
  packages.ts           The 19 fixed-price packages ($10–$100)
lib/
  config.ts             Centralized business info, nav links, and placeholders
  cart.ts               Client-side cart store + useCart hook
  stripe.ts             Server-only Stripe client
  utils.ts              Shared helpers (currency formatting, etc.)
```

## Design System

Color, radius, and shadow tokens live in `app/globals.css` as CSS custom properties, mapped into Tailwind v4 via `@theme inline`. Update the values there to re-theme the whole site — components reference tokens (`bg-ink`, `text-accent`, etc.), not hard-coded colors.

Typography: **Fraunces** (display/headings) + **Inter** (body), loaded via `next/font/google`.

## Scope

Still intentionally out of scope: a backend database, customer accounts/authentication, an admin/order-management dashboard, and a CMS. Every service and package has a stable `slug`/`id` and an exact `price`/`currency` in its data file. Service pages still route to `/contact` (optionally pre-filled via `?service=`/`?package=`); the contact form itself is a frontend-only preview and does not submit anywhere.

## Business Configuration

Business name, description, and placeholder contact/social details are centralized in `lib/config.ts`. Update that file before launch — the email address and social links currently in place are placeholders.
