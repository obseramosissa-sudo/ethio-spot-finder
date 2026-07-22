import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search, SlidersHorizontal } from "lucide-react";
import { businesses, categories, cities, searchBusinesses } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";

const schema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "").default(""),
  city: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/directory")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [
      { title: "Business Directory — Ethio Spot" },
      { name: "description", content: "Browse all Ethiopian businesses on Ethio Spot. Filter by category and city." },
      { property: "og:title", content: "Business Directory — Ethio Spot" },
      { property: "og:description", content: "Every Ethiopian business, one directory." },
    ],
  }),
  component: Directory,
});

function Directory() {
  const { q, category, city } = Route.useSearch();
  const navigate = Route.useNavigate();
  const results = searchBusinesses(q, category || undefined, city || undefined);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Directory</div>
        <h1 className="font-display text-4xl font-bold">All businesses</h1>
        <p className="text-muted-foreground">{results.length} of {businesses.length} listings</p>
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-soft sm:grid-cols-[1fr_auto_auto_auto]">
        <div className="flex items-center gap-2 rounded-xl bg-muted px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => navigate({ search: (p) => ({ ...p, q: e.target.value }) })}
            placeholder="Search businesses…"
            className="w-full bg-transparent py-2.5 text-sm outline-none"
          />
        </div>
        <select
          value={category}
          onChange={(e) => navigate({ search: (p) => ({ ...p, category: e.target.value }) })}
          className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <select
          value={city}
          onChange={(e) => navigate({ search: (p) => ({ ...p, city: e.target.value }) })}
          className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm"
        >
          <option value="">All cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button
          onClick={() => navigate({ search: { q: "", category: "", city: "" } })}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground"
        >
          <SlidersHorizontal className="h-4 w-4" /> Reset
        </button>
      </div>

      {results.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <div className="text-lg font-semibold">No matches</div>
          <p className="mt-1 text-sm text-muted-foreground">Try a different search or clear the filters.</p>
          <Link to="/directory" search={{ q: "", category: "", city: "" }} className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
            Clear all →
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((b) => <BusinessCard key={b.id} b={b} />)}
        </div>
      )}
    </div>
  );
}
