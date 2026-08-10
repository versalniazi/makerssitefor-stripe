import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ClearCartOnMount from "@/components/ClearCartOnMount";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Order Received",
  robots: { index: false },
};

export default function CheckoutSuccessPage() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <ClearCartOnMount />
        <div className="mx-auto max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Thank You</p>
          <h1 className="mt-3 text-3xl text-ink sm:text-4xl">Your order is in.</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
            We&rsquo;ve received your payment. {siteConfig.legalBusinessName} will follow up by email with next
            steps to start your project.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Back to Homepage
          </Link>
        </div>
      </Container>
    </section>
  );
}
