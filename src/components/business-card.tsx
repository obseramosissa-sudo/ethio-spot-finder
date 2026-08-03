import { Link } from "@tanstack/react-router";
import { MapPin, Star, BadgeCheck } from "lucide-react";
import type { Business } from "@/data/businesses";

export function BusinessCard({ b }: { b: Business }) {
  return (
    <Link
      to="/business/$id"
      params={{ id: b.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-brand focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={b.image}
          alt={b.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold shadow">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          {b.rating.toFixed(1)}
          <span className="text-muted-foreground">· {b.reviews}</span>
        </div>
        {b.verified && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-1 text-xs font-semibold text-brand-foreground shadow">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand">
          {b.category}
        </div>
        <h3 className="line-clamp-1 font-display text-lg font-bold">{b.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{b.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {b.address}
          </span>
          <span className="font-mono">{"$".repeat(b.priceLevel)}</span>
        </div>
      </div>
    </Link>
  );
}
