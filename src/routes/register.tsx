import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Building2, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/businesses";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "List your business — Ethio Spot" },
      { name: "description", content: "Register your Ethiopian business on Ethio Spot. Free listing, verified badge, reach thousands." },
      { property: "og:title", content: "List your business — Ethio Spot" },
      { property: "og:description", content: "Put your business on the map in minutes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ethio-spot-finder.lovable.app/register" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ethio-spot-finder.lovable.app/register" }],
  }),
  component: RegisterPage,
});

/** Rough city centres used until an owner pins the exact spot on the map. */
const CITY_COORDS: Record<string, [number, number]> = {
  "addis ababa": [9.0192, 38.7525],
  adama: [8.5414, 39.2705],
  "bahir dar": [11.5936, 37.3908],
  "dire dawa": [9.5931, 41.8661],
  gondar: [12.603, 37.4521],
  hawassa: [7.0621, 38.4764],
  jimma: [7.6733, 36.8344],
  mekelle: [13.4967, 39.4753],
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function RegisterPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!user) {
      navigate({ to: "/auth" });
      return;
    }

    const form = new FormData(event.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();

    const name = get("name");
    const categorySlug = get("category");
    const city = get("city");
    const category = categories.find((c) => c.slug === categorySlug);
    const [lat, lng] = CITY_COORDS[city.toLowerCase()] ?? CITY_COORDS["addis ababa"];

    setSaving(true);
    const { error: insertError } = await supabase.from("businesses").insert({
      owner_id: user.id,
      name,
      slug: `${slugify(name)}-${Math.random().toString(36).slice(2, 7)}`,
      category: category?.name ?? categorySlug,
      category_slug: categorySlug,
      city,
      address: get("address"),
      description: get("description"),
      phone: get("phone") || null,
      website: get("website") || null,
      email: get("email") || null,
      lat,
      lng,
      status: "pending",
    });
    setSaving(false);

    if (insertError) {
      setError("We couldn't save your listing. Please check the details and try again.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto grid min-h-[70vh] max-w-lg place-items-center px-4 py-16 text-center">
        <div className="w-full rounded-3xl border border-border bg-card p-10 shadow-soft">
          <CheckCircle2 className="mx-auto h-14 w-14 text-brand" />
          <h1 className="mt-4 font-display text-3xl font-bold">Submission received</h1>
          <p className="mt-2 text-muted-foreground">
            Your listing is saved and waiting for review. We'll verify the details and publish it shortly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/dashboard" className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand">
              Go to dashboard
            </Link>
            <Link to="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">
              Back to home
            </Link>
          </div>
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

      {!loading && !user && (
        <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4 text-sm">
          <Link to="/auth" className="font-semibold text-brand underline">
            Sign in or create an account
          </Link>{" "}
          first — your listing is linked to it so you can edit it later.
        </div>
      )}

      <form
        className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Business name" required><input name="name" className={inputCls} required maxLength={80} /></Field>
          <Field label="Category" required>
            <select name="category" className={inputCls} required defaultValue="">
              <option value="" disabled>Choose one…</option>
              {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="City" required><input name="city" className={inputCls} required /></Field>
          <Field label="Address" required><input name="address" className={inputCls} required /></Field>
          <Field label="Phone"><input name="phone" className={inputCls} type="tel" /></Field>
          <Field label="Website"><input name="website" className={inputCls} type="url" /></Field>
        </div>
        <Field label="Short description" required>
          <textarea name="description" rows={4} maxLength={400} required className={inputCls} />
        </Field>
        <Field label="Owner email" required>
          <input name="email" className={inputCls} type="email" required />
        </Field>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex flex-col-reverse items-center justify-between gap-3 pt-2 sm:flex-row">
          <span className="text-xs text-muted-foreground">
            By submitting you agree to our terms and verification process.
          </span>
          <button
            disabled={saving}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand disabled:opacity-60 sm:w-auto"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            {saving ? "Saving…" : "Submit listing"}
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
