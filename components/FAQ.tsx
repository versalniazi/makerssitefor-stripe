import { ChevronDownIcon } from "@/components/icons/UIIcons";

export interface FAQItem {
  question: string;
  answer: string;
}

// Uses the native <details>/<summary> elements — fully keyboard accessible
// and screen-reader friendly without any client-side JavaScript.
export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <span className="text-base font-medium text-ink sm:text-lg">{item.question}</span>
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft/80 sm:text-base">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
