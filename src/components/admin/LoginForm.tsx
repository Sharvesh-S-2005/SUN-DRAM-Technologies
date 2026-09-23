"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Incorrect password.");
        setSubmitting(false);
        return;
      }

      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <Section>
      <Container size="md" className="flex justify-center">
        <Card className="w-full max-w-sm">
          <h1 className="text-xl font-semibold text-white">Admin access</h1>
          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoFocus
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? "password-error" : undefined}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
                placeholder="Password"
              />
              {error && (
                <p id="password-error" className="mt-2 text-sm text-zinc-400">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105 disabled:opacity-60"
            >
              {submitting ? "Checking…" : "Sign in"}
            </button>
          </form>
        </Card>
      </Container>
    </Section>
  );
}
