import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { businesses, categories } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";
import { ClientOnly } from "@tanstack/react-router";

const MapPreview = lazy(() => import("@/components/map-preview"));

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Map — Ethio Spot" },
      { name: "description", content: "See every Ethiopian business on an interactive map. Pan, zoom and tap a pin to explore." },
      { property: "og:title", content: "Map — Ethio Spot" },
      { property: "og:description", content: "Every business, pinned to the map." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [cat, setCat] = useState<string>("");
  const filtered = cat ? businesses.filter((b) => b.categorySlug === cat) : businesses;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-3 sm:flex sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Map</div>
          <h1 className="mt-1 font-display text-4xl font-bold">Explore on the map</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCat("")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === "" ? "bg-brand-gradient text-brand-foreground shadow-brand" : "bg-secondary text-secondary-foreground"}`}
          >
            All
          </button>
          {categories.slice(0, 5).map((c) => (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c.slug ? "bg-brand-gradient text-brand-foreground shadow-brand" : "bg-secondary text-secondary-foreground"}`}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="h-[70vh] overflow-hidden rounded-3xl border border-border shadow-soft">
          <ClientOnly fallback={<div className="h-full w-full animate-pulse bg-muted" />}>
            <Suspense fallback={<div className="h-full w-full animate-pulse bg-muted" />}>
              <MapPreview points={filtered} center={[9.01, 38.76]} zoom={12} />
            </Suspense>
          </ClientOnly>
        </div>
        <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
          {filtered.map((b) => <BusinessCard key={b.id} b={b} />)}
        </div>
      </div>
    </div>
  );
}
