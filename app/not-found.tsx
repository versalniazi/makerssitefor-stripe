import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">404</p>
          <h1 className="mt-3 text-3xl text-ink sm:text-4xl">Page Not Found</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
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
