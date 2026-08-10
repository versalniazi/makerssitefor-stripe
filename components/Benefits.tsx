const benefits = [
  {
    title: "Clear Pricing",
    description: "Fixed-price packages from $10 to $100 — no quotes, no guessing.",
  },
  {
    title: "Professional Design",
    description: "Thoughtful visual design for business and creative projects.",
  },
  {
    title: "Multiple Services",
    description: "Branding, marketing materials, digital graphics, packaging, and more.",
  },
  {
    title: "Flexible Packages",
    description: "Choose individual services or bundled design packages.",
  },
  {
    title: "Digital Delivery",
    description: "Receive final files in appropriate digital formats.",
  },
  {
    title: "Straightforward Process",
    description: "Simple project submission, design, review, and delivery workflow.",
  },
];

export default function Benefits() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <div key={benefit.title} className="flex gap-4">
          <span className="font-display text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="text-base font-semibold text-ink">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
