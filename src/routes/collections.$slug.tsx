import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark, ArrowLeft } from "lucide-react";
import { getCollection, getCollectionBusinesses, type Business } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const c = getCollection(params.slug);
    if (!c) throw notFound();
    return { collection: c, businesses: getCollectionBusinesses(c) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Ethio Spot" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.collection;
    return {
      meta: [
        { title: `${c.title} — Ethio Spot` },
        { name: "description", content: c.description },
        { property: "og:title", content: `${c.title} — Ethio Spot` },
        { property: "og:description", content: c.description },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { collection: c, businesses: items } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/collections"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to collections
      </Link>

      <div className="relative mt-4 overflow-hidden rounded-3xl">
        <img src={c.coverImage} alt={c.title} className="h-64 w-full object-cover sm:h-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-10">
          <div className="inline-flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-gold-foreground">
            <Bookmark className="h-3.5 w-3.5" /> {items.length} places
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-5xl">{c.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{c.description}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((b) => (
          <BusinessCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  );
}
