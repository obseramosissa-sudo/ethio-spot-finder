import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, MapPin, Star, ArrowRight, TrendingUp, Shield, Compass, Bookmark } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import { businesses, categories, collections } from "@/data/businesses";
import { BusinessCard } from "@/components/business-card";
import { Reveal } from "@/components/reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ethio Spot — Discover Ethiopian businesses on the map" },
      {
        name: "description",
        content:
          "Find restaurants, cafés, shops, spas and services near you. Ethio Spot maps the best Ethiopian businesses in one place.",
      },
      { property: "og:title", content: "Ethio Spot — Discover Ethiopian businesses" },
      {
        property: "og:description",
        content: "Find, locate and visit trusted Ethiopian businesses.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const featured = businesses.filter((b) => b.featured);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Ethiopian city street with green hills"
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Ethiopia's business finder
            </div>
            <h1
              className="mt-5 animate-fade-up font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "90ms" }}
            >
              Find every great <span className="text-gold">Ethiopian business</span>
              <br className="hidden sm:block" /> right on the map.
            </h1>
            <p
              className="mt-5 max-w-xl animate-fade-up text-base text-white/85 sm:text-lg"
              style={{ animationDelay: "180ms" }}
            >
              From Tomoca coffee to Yod Abyssinia — Ethio Spot helps you discover,
              locate and visit the places you'll love, in seconds.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate({ to: "/search", search: { q } });
              }}
              style={{ animationDelay: "270ms" }}
              className="mt-8 flex animate-fade-up flex-col gap-2 rounded-2xl bg-white p-2 shadow-brand transition-shadow duration-300 focus-within:shadow-[0_25px_60px_-20px_rgb(15_122_58/0.6)] sm:flex-row sm:items-center"
            >
              <div className="flex flex-1 items-center gap-2 rounded-xl px-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Try 'coffee', 'injera', 'spa in Bole'…"
                  className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition duration-300 hover:scale-[1.03] active:scale-95"
              >
                Search{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            <div
              className="mt-5 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80"
              style={{ animationDelay: "360ms" }}
            >
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-gold text-gold" /> 4.8 avg rating</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" /> 500+ places mapped</span>
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-gold" /> Verified owners</span>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Browse</div>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Explore by category</h2>
          </div>
          <Link to="/categories" className="hidden text-sm font-semibold text-brand hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/directory"
              search={{ category: c.slug, city: "", q: "" }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:border-brand hover:shadow-brand"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient text-xl">
                {c.icon}
              </div>
              <div className="min-w-0">
                <div className="truncate font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.count} places</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Handpicked</div>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Featured this week</h2>
          </div>
          <Link to="/directory" className="hidden text-sm font-semibold text-brand hover:underline sm:inline">
            All businesses →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((b) => (
            <BusinessCard key={b.id} b={b} />
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Curated</div>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Collections</h2>
          </div>
          <Link to="/collections" className="hidden text-sm font-semibold text-brand hover:underline sm:inline">
            All collections →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collections.filter((c) => c.featured).map((c) => (
            <Link
              key={c.id}
              to="/collections/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-brand"
            >
              <div className="relative h-40">
                <img src={c.coverImage} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 text-xs font-semibold text-white">
                    <Bookmark className="h-3.5 w-3.5" /> {c.businessIds.length} places
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-display text-base font-bold">{c.title}</div>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-brand-gradient p-8 text-brand-foreground shadow-brand sm:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                For owners
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Put your business on the map.
              </h3>
              <p className="mt-3 max-w-md text-white/90">
                Free listing, verified badge, and analytics on who's viewing your spot.
                Reach thousands of locals and travelers every week.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-gold-foreground shadow"
                >
                  List your business
                </Link>
                <Link
                  to="/login"
                  className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/20"
                >
                  Owner login
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {[
                { icon: TrendingUp, t: "Reach", d: "10k+ monthly visitors" },
                { icon: Compass, t: "Discover", d: "Map + search built-in" },
                { icon: Shield, t: "Trust", d: "Verified owner badge" },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <f.icon className="h-6 w-6 text-gold" />
                  <div className="mt-3 font-display text-lg font-bold">{f.t}</div>
                  <div className="text-sm text-white/80">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
}
