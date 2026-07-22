import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Star, Phone, Globe, Clock, BadgeCheck, ArrowLeft } from "lucide-react";
import { lazy, Suspense } from "react";
import { getBusiness, businesses } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";

const MapPreview = lazy(() => import("@/components/map-preview"));

export const Route = createFileRoute("/business/$id")({
  loader: ({ params }) => {
    const b = getBusiness(params.id);
    if (!b) throw notFound();
    return { business: b };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Ethio Spot" }, { name: "robots", content: "noindex" }] };
    }
    const b = loaderData.business;
    return {
      meta: [
        { title: `${b.name} — Ethio Spot` },
        { name: "description", content: b.description },
        { property: "og:title", content: `${b.name} — Ethio Spot` },
        { property: "og:description", content: b.description },
      ],
    };
  },
  component: BusinessPage,
});

function BusinessPage() {
  const { business: b } = Route.useLoaderData();
  const related = businesses.filter((x) => x.categorySlug === b.categorySlug && x.id !== b.id).slice(0, 3);

  return (
    <div>
      <div className="relative h-72 overflow-hidden sm:h-96">
        <img src={b.image} alt={b.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/directory" search={{ q: "", category: "", city: "" }} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to directory
        </Link>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand">
              <span>{b.category}</span>
              {b.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2 py-0.5 text-brand-foreground">
                  <BadgeCheck className="h-3.5 w-3.5" /> Verified
                </span>
              )}
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{b.name}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-gold text-gold" /> <b className="text-foreground">{b.rating.toFixed(1)}</b> ({b.reviews} reviews)</span>
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {b.address}, {b.city}</span>
              <span className="font-mono">{"$".repeat(b.priceLevel)}</span>
            </div>
            <p className="mt-6 text-base leading-relaxed">{b.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {b.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{t}</span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a href={`tel:${b.phone}`} className="flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm hover:border-brand">
                <Phone className="h-4 w-4 text-brand" /> {b.phone}
              </a>
              <a href={b.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm hover:border-brand">
                <Globe className="h-4 w-4 text-brand" /> Website
              </a>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm">
                <Clock className="h-4 w-4 text-brand" /> {b.hours}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="h-64">
                <Suspense fallback={<div className="h-full w-full animate-pulse bg-muted" />}>
                  <MapPreview points={[b]} center={[b.lat, b.lng]} zoom={14} />
                </Suspense>
              </div>
              <div className="p-4 text-sm">
                <div className="font-semibold">{b.address}</div>
                <div className="text-muted-foreground">{b.city}</div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand"
                >
                  Get directions
                </a>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold">Similar spots</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <BusinessCard key={r.id} b={r} />)}
            </div>
          </section>
        )}
      </div>
      <div className="h-16" />
    </div>
  );
}
