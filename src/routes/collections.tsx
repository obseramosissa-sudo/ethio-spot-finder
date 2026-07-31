import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { collections } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Ethio Spot" },
      { name: "description", content: "Curated collections of the best Ethiopian businesses — best coffee, cultural dining, ethical gifts, and more." },
      { property: "og:title", content: "Collections — Ethio Spot" },
      { property: "og:description", content: "Handpicked Ethiopian business collections." },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Curated</div>
      <h1 className="mt-1 font-display text-4xl font-bold">Collections</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">
        Handpicked lists of Ethiopian businesses — from the best buna to cultural dining and ethical gifts.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <Link
            key={c.id}
            to="/collections/$slug"
            params={{ slug: c.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-brand"
          >
            <div className="relative h-44 overflow-hidden">
              <img src={c.coverImage} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Bookmark className="h-3.5 w-3.5" /> {c.businessIds.length} places
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="font-display text-lg font-bold group-hover:text-brand transition">{c.title}</div>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
              <div className="mt-3 text-xs font-medium text-muted-foreground">Curated by {c.curatedBy}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
