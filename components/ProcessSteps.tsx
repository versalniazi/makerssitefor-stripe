export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
      {steps.map((step) => (
        <li key={step.number} className="relative border-t border-stone-300 pt-5">
          <span className="font-display text-3xl font-semibold text-accent">{step.number}</span>
          <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
