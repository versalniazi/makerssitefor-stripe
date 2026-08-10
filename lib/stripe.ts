// Server-only Stripe client. Never import this from a "use client" file —
// it reads a secret key from the environment and must not reach the browser.
import Stripe from "stripe";

let cachedClient: Stripe | null = null;

export function getStripeClient(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to your environment (see .env.example) to enable checkout."
    );
  }

  if (!cachedClient) {
    cachedClient = new Stripe(secretKey);
  }

  return cachedClient;
}
