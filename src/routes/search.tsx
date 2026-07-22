import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search as SearchIcon } from "lucide-react";
import { searchBusinesses } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";

const schema = z.object({ q: fallback(z.string(), "").default("") });

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [
      { title: "Search — Ethio Spot" },
      { name: "description", content: "Search Ethiopian businesses across categories and cities." },
      { property: "og:title", content: "Search — Ethio Spot" },
      { property: "og:description", content: "Find any business in seconds." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const results = searchBusinesses(q);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Search</div>
      <h1 className="mt-1 font-display text-4xl font-bold">Find what you're looking for</h1>

      <div className="mt-6 flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => navigate({ search: { q: e.target.value } })}
            placeholder="Search coffee, injera, spa, boutique…"
            className="w-full bg-transparent py-3 text-base outline-none"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        {q ? `${results.length} results for "${q}"` : "Start typing to search"}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((b) => <BusinessCard key={b.id} b={b} />)}
      </div>
    </div>
  );
}
