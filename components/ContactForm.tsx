"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { siteConfig } from "@/lib/config";

export default function ContactForm({
  defaultService,
  defaultPackage,
}: {
  defaultService?: string;
  defaultPackage?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-md)] border border-accent/30 bg-accent-soft p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-ink">Preview form — not yet connected</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft/80">
          This inquiry form is a frontend preview and isn&rsquo;t connected to email or order processing yet. In the
          meantime, please send your project details directly to{" "}
          {siteConfig.email ? (
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-accent hover:text-accent-dark">
              {siteConfig.email}
            </a>
          ) : (
            "our team"
          )}
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" required>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Jordan Miles"
          />
        </Field>

        <Field label="Email Address" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Service" htmlFor="service">
          <select id="service" name="service" defaultValue={defaultService ?? ""} className={inputClasses}>
            <option value="">Select a service (optional)</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Package" htmlFor="package">
          <select id="package" name="package" defaultValue={defaultPackage ?? ""} className={inputClasses}>
            <option value="">Select a package (optional)</option>
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>
                {pkg.name} — ${pkg.price}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Description" htmlFor="description" required>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your business and what you'd like designed."
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Preferred Deadline" htmlFor="deadline">
          <input id="deadline" name="deadline" type="date" className={inputClasses} />
        </Field>

        <Field label="Additional Requirements" htmlFor="requirements">
          <input
            id="requirements"
            name="requirements"
            type="text"
            className={inputClasses}
            placeholder="Brand colors, file formats, references…"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-base font-medium text-paper transition-colors hover:bg-accent sm:w-auto"
      >
        Submit Project Inquiry
      </button>
    </form>
  );
}

const inputClasses =
  "w-full rounded-[var(--radius-sm)] border border-stone-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-stone-500 transition-colors focus:border-accent";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
