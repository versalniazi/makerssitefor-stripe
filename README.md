# MakersLuxe Limited — Website

A premium, static marketing site for **MakersLuxe Limited**, a professional graphic-design services business. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

This is a **frontend-only** build. There is intentionally no payment processing, backend, database, authentication, or CMS — see [Scope](#scope) below.

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

## Project Structure

```
app/                    Routes (App Router)
  services/[slug]       Individual service pages, generated from data/services.ts
  packages/[slug]       Individual package pages, generated from data/packages.ts
components/             Reusable UI components
data/
  services.ts           The 20-service catalog
  packages.ts           The 19 fixed-price packages ($10–$100)
lib/
  config.ts             Centralized business info, nav links, and placeholders
  utils.ts              Shared helpers (currency formatting, etc.)
```

## Design System

Color, radius, and shadow tokens live in `app/globals.css` as CSS custom properties, mapped into Tailwind v4 via `@theme inline`. Update the values there to re-theme the whole site — components reference tokens (`bg-ink`, `text-accent`, etc.), not hard-coded colors.

Typography: **Fraunces** (display/headings) + **Inter** (body), loaded via `next/font/google`.

## Scope

This build intentionally does **not** include:

- Stripe, PayPal, or any payment processing
- A checkout flow or shopping cart
- A backend, database, or CMS
- Authentication or customer accounts

Every service and package has a stable `slug`/`id` and an exact `price`/`currency` in its data file, so a payment integration can be layered on later without reshaping the data. All package/service CTAs currently route to `/contact` (optionally pre-filled via `?service=` / `?package=` query params), and the contact form is a frontend-only preview — it does not submit anywhere.

## Business Configuration

Business name, description, and placeholder contact/social details are centralized in `lib/config.ts`. Update that file before launch — the email address and social links currently in place are placeholders.
