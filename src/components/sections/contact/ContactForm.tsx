"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  phone: "",
  description: "",
  company_website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const confirmationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (status === "success") {
      confirmationRef.current?.focus();
    }
  }, [status]);

  function handleBlur(field: keyof ContactFormValues) {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validateContactForm(values));
  }

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched({ name: true, phone: true, description: true });
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("request-failed");

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't submit your enquiry. Please try again, or reach us directly at +91 63697 66990.");
    }
  }

  function resetForm() {
    setValues(INITIAL_VALUES);
    setTouched({});
    setErrors({});
    setStatus("idle");
    setErrorMessage(null);
  }

  if (status === "success") {
    return (
      <Card>
        <div ref={confirmationRef} tabIndex={-1} className="outline-none">
          <p className="text-lg font-semibold text-white">Thank you. Your enquiry has been received.</p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            We will contact you on the number you provided, typically within one business day.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 text-sm text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
          >
            Send another enquiry
          </button>
        </div>
      </Card>
    );
  }

  const nameError = touched.name ? errors.name : undefined;
  const phoneError = touched.phone ? errors.phone : undefined;
  const descriptionError = touched.description ? errors.description : undefined;
  const submitting = status === "submitting";

  return (
    <Card>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        {errorMessage && (
          <p className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300">
            {errorMessage}
          </p>
        )}

        {/* Honeypot — hidden from users and assistive tech */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_website">Company Website</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company_website}
            onChange={(event) => handleChange("company_website", event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="Your name"
            aria-invalid={nameError ? "true" : undefined}
            aria-describedby={nameError ? "name-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
          />
          {nameError && (
            <p id="name-error" className="mt-2 text-sm text-zinc-400">
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-zinc-400">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            onBlur={() => handleBlur("phone")}
            placeholder="Phone number"
            aria-invalid={phoneError ? "true" : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
          />
          {phoneError && (
            <p id="phone-error" className="mt-2 text-sm text-zinc-400">
              {phoneError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm text-zinc-400">
            Description
          </label>
          <textarea
            id="description"
            required
            rows={5}
            value={values.description}
            onChange={(event) => handleChange("description", event.target.value)}
            onBlur={() => handleBlur("description")}
            placeholder="Briefly describe what you need — your business, the problem, and what you'd like to improve."
            aria-invalid={descriptionError ? "true" : undefined}
            aria-describedby={descriptionError ? "description-error" : undefined}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
          />
          {descriptionError && (
            <p id="description-error" className="mt-2 text-sm text-zinc-400">
              {descriptionError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </Card>
  );
}
