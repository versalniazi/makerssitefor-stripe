import Container from "@/components/Container";
import Button from "@/components/Button";

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-paper sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">{description}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                size="lg"
                variant="secondary"
                className="border-paper/25 text-paper hover:bg-paper hover:text-ink"
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
