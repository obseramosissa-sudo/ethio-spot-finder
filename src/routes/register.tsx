import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/businesses";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "List your business — Ethio Spot" },
      { name: "description", content: "Register your Ethiopian business on Ethio Spot. Free listing, verified badge, reach thousands." },
      { property: "og:title", content: "List your business — Ethio Spot" },
      { property: "og:description", content: "Put your business on the map in minutes." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto grid min-h-[70vh] max-w-lg place-items-center px-4 py-16 text-center">
        <div className="w-full rounded-3xl border border-border bg-card p-10 shadow-soft">
          <CheckCircle2 className="mx-auto h-14 w-14 text-brand" />
          <h1 className="mt-4 font-display text-3xl font-bold">You're on the list!</h1>
          <p className="mt-2 text-muted-foreground">
            Thanks! We'll review your submission and reach out shortly to verify your listing.
          </p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-brand">
        <Building2 className="h-6 w-6 text-brand-foreground" />
      </div>
      <h1 className="mt-4 font-display text-4xl font-bold">List your business</h1>
      <p className="mt-2 text-muted-foreground">
        Free forever. Verified badge included. It only takes a minute.
      </p>

      <form
        className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Business name" required><input className={inputCls} required maxLength={80} /></Field>
          <Field label="Category" required>
            <select className={inputCls} required defaultValue="">
              <option value="" disabled>Choose one…</option>
              {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="City" required><input className={inputCls} required /></Field>
          <Field label="Address" required><input className={inputCls} required /></Field>
          <Field label="Phone"><input className={inputCls} type="tel" /></Field>
          <Field label="Website"><input className={inputCls} type="url" /></Field>
        </div>
        <Field label="Short description" required>
          <textarea rows={4} maxLength={400} required className={inputCls} />
        </Field>
        <Field label="Owner email" required>
          <input className={inputCls} type="email" required />
        </Field>
        <div className="flex flex-col-reverse items-center justify-between gap-3 pt-2 sm:flex-row">
          <span className="text-xs text-muted-foreground">
            By submitting you agree to our terms and verification process.
          </span>
          <button className="w-full rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand sm:w-auto">
            Submit listing
          </button>
        </div>
      </form>
    </div>
  );
}

const inputCls =
  "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
