import { getStripeClient } from "@/lib/stripe";
import { siteConfig } from "@/lib/config";

interface CheckoutItem {
  slug: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
}

function isCheckoutItem(value: unknown): value is CheckoutItem {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.slug === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    item.price > 0 &&
    typeof item.currency === "string" &&
    typeof item.quantity === "number" &&
    item.quantity > 0
  );
}

// Creates a Stripe Checkout Session from the cart sent by the client and
// returns its hosted URL. Requires STRIPE_SECRET_KEY — see .env.example.
export async function POST(request: Request) {
  let items: unknown;

  try {
    const body = await request.json();
    items = body?.items;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!Array.isArray(items) || items.length === 0 || !items.every(isCheckoutItem)) {
    return Response.json({ error: "Your cart is empty or invalid." }, { status: 400 });
  }

  let stripe;
  try {
    stripe = getStripeClient();
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Stripe is not configured." },
      { status: 500 }
    );
  }

  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.websiteUrl;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: item.currency.toLowerCase(),
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: item.name,
            metadata: { slug: item.slug },
          },
        },
      })),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?canceled=1`,
    });

    if (!session.url) {
      return Response.json({ error: "Stripe did not return a checkout URL." }, { status: 502 });
    }

    return Response.json({ url: session.url });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to start checkout." },
      { status: 500 }
    );
  }
}
