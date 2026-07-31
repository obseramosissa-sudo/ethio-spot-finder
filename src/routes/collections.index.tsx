import { createFileRoute } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { collections } from "@/data/businesses";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Ethio Spot" },
      { name: "description", content: "Curated lists of Ethiopian businesses — best buna, cultural dining, ethical gifts, and more." },
      { property: "og:title", content: "Collections — Ethio Spot" },
      { property: "og:description", content: "Handpicked Ethiopian business lists by local experts." },
    ],
  }),
  component: CollectionsIndex,
});

function CollectionsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Curated</div>
        <h1 className="mt-2 font-display text-4xl font-bold">Collections</h1>
        <p className="mt-3 text-muted-foreground">
          Handpicked lists of Ethiopian businesses — from the best buna to cultural dining and ethical gifts.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <Link
            key={c.slug}
            to="/collections/$slug"
            params={{ slug: c.slug }}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-brand"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={c.coverImage} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-gold-gradient px-2.5 py-1 text-xs font-bold text-gold-foreground">
                <Bookmark className="h-3.5 w-3.5" /> {c.businessIds.length} places
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
              <p className="mt-3 text-xs text-muted-foreground">Curated by {c.curatedBy}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
