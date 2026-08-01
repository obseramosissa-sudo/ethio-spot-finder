import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Star, Bookmark, TrendingUp, Edit, Search, Phone } from "lucide-react";
import { businesses } from "@/data/businesses";
import {
  listingAnalytics,
  sourceTotals,
  topKeywords,
  totals,
  viewSourceLabels,
  viewSources,
  type ViewSource,
} from "@/data/analytics";


export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Owner Analytics Dashboard — Ethio Spot" },
      {
        name: "description",
        content:
          "Track profile views, top search keywords and how often customers save your Ethio Spot listings.",
      },
      { property: "og:title", content: "Owner Analytics Dashboard — Ethio Spot" },
      {
        property: "og:description",
        content: "Views, search keywords and saves for every listing you manage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function Sparkline({ points }: { points: number[] }) {
  const max = Math.max(...points, 1);
  return (
    <div className="flex h-10 items-end gap-1">
      {points.map((p, i) => (
        <div
          key={i}
          className="w-full rounded-sm bg-brand/70"
          style={{ height: `${Math.max(12, (p / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

function Change({ value }: { value: number }) {
  const up = value >= 0;
  return (
    <span className={`text-xs font-semibold ${up ? "text-brand" : "text-destructive"}`}>
      {up ? "+" : ""}
      {value}%
    </span>
  );
}

const sourceColor: Record<ViewSource, string> = {
  search: "bg-brand",
  collections: "bg-gold",
  category: "bg-brand/50",
  direct: "bg-muted-foreground/50",
};

function SourceBreakdown({ sources }: { sources: Record<ViewSource, number> }) {
  const total = viewSources.reduce((a, s) => a + sources[s], 0) || 1;
  return (
    <div>
      <div className="flex h-2.5 overflow-hidden rounded-full bg-secondary">
        {viewSources.map((s) => (
          <div
            key={s}
            className={sourceColor[s]}
            style={{ width: `${(sources[s] / total) * 100}%` }}
            title={`${viewSourceLabels[s]}: ${sources[s].toLocaleString()}`}
          />
        ))}
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        {viewSources.map((s) => (
          <li key={s} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${sourceColor[s]}`} />
            <span className="truncate">{viewSourceLabels[s]}</span>
            <span className="ml-auto shrink-0 text-xs text-muted-foreground">
              {sources[s].toLocaleString()} · {Math.round((sources[s] / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dashboard() {
  const t = totals();
  const keywords = topKeywords();
  const maxKeyword = Math.max(...keywords.map((k) => k.count), 1);
  const allSources = sourceTotals();


  const stats = [
    { label: "Profile views", value: t.views.toLocaleString(), change: 18, icon: Eye },
    { label: "Times saved", value: t.saves.toLocaleString(), change: 12, icon: Bookmark },
    { label: "Directions taps", value: t.directions.toLocaleString(), change: 9, icon: TrendingUp },
    { label: "Calls", value: t.calls.toLocaleString(), change: -3, icon: Phone },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Analytics</div>
          <h1 className="mt-1 font-display text-4xl font-bold">Welcome, Selam 👋</h1>
          <p className="mt-1 text-muted-foreground">
            How people found and engaged with your listings over the last 30 days.
          </p>
        </div>
        <Link
          to="/register"
          className="rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand"
        >
          + Add listing
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-gold-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <Change value={s.change} />
            </div>
            <div className="mt-4 text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <section className="lg:col-span-3">
          <h2 className="font-display text-2xl font-bold">Listing performance</h2>
          <div className="mt-4 space-y-4">
            {listingAnalytics.map((a) => {
              const b = businesses.find((x) => x.id === a.businessId);
              if (!b) return null;
              return (
                <div key={a.businessId} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={b.image ?? undefined} alt="" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-semibold">{b.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {b.category} · {b.city} · <Star className="inline h-3 w-3 text-gold" />{" "}
                          {b.rating.toFixed(1)}
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/business/$id"
                      params={{ id: b.id }}
                      className="inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold"
                    >
                      <Edit className="h-3.5 w-3.5" /> Manage
                    </Link>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Views</div>
                      <div className="text-xl font-bold">{a.views.toLocaleString()}</div>
                      <Change value={a.viewsChange} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Saves</div>
                      <div className="text-xl font-bold">{a.saves.toLocaleString()}</div>
                      <Change value={a.savesChange} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">
                        Last 12 weeks
                      </div>
                      <Sparkline points={a.trend} />
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border pt-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Where these views came from
                    </div>
                    <div className="mt-3">
                      <SourceBreakdown sources={a.sources} />
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border pt-4">

                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Search terms that led here
                    </div>
                    <ul className="mt-3 space-y-2">
                      {a.keywords.map((k) => (
                        <li key={k.term} className="flex items-center justify-between gap-4 text-sm">
                          <span className="truncate">{k.term}</span>
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {k.count} searches · avg. rank #{k.position}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold">Top search keywords</h2>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Search className="h-4 w-4" /> Across all your listings
            </div>
            <ul className="mt-4 space-y-4">
              {keywords.map((k) => (
                <li key={k.term}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{k.term}</span>
                    <span className="text-xs text-muted-foreground">{k.count}</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-secondary">
                    <div
                      className="h-2 rounded-full bg-brand-gradient"
                      style={{ width: `${(k.count / maxKeyword) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
            Demo analytics. Once listings are claimed and live, these numbers come from real visits,
            searches and saves.
          </div>
        </section>
      </div>
    </div>
  );
}
