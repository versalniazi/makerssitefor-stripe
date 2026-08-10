export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  const Heading = as;
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      ) : null}
      <Heading className="text-3xl leading-tight text-ink sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-relaxed text-ink-soft/80 sm:text-lg">{description}</p> : null}
    </div>
  );
}
