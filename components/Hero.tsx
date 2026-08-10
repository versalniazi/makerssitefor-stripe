import type { ReactNode } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

type CTA = {
  label: string;
  href: string;
};

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  visual?: ReactNode;
}) {
  if (!visual) {
    return (
      <section className="border-b border-stone-200 bg-paper py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow ? (
              <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="animate-fade-up delay-1 text-4xl leading-[1.1] text-ink sm:text-5xl">{title}</h1>
            {description ? (
              <p className="animate-fade-up delay-2 mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {description}
              </p>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center justify-center gap-4">
                {primaryCta ? (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="overflow-hidden border-b border-stone-200 bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            {eyebrow ? (
              <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="animate-fade-up delay-1 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
            {description ? (
              <p className="animate-fade-up delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {description}
              </p>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-4">
                {primaryCta ? (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="animate-fade-in delay-2 flex justify-center lg:justify-end">{visual}</div>
        </div>
      </Container>
    </section>
  );
}
