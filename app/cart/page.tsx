import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the design packages in your cart before checkout.",
  alternates: { canonical: "/cart" },
  robots: { index: false },
};

export default function CartPage() {
  return (
    <>
      <Hero
        eyebrow="Cart"
        title="Your Cart"
        description="Review your selected packages, then continue to secure checkout."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Suspense fallback={<div className="h-40" />}>
            <CartView />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
