import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, Store, Flag, CheckCircle2, XCircle } from "lucide-react";
import { businesses } from "@/data/businesses";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Ethio Spot" },
      { name: "description", content: "Ethio Spot admin dashboard: approve listings, manage users and moderate reviews." },
      { property: "og:title", content: "Admin — Ethio Spot" },
      { property: "og:description", content: "Moderate the Ethio Spot platform." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const pending = businesses.slice(4, 8);
  const kpis = [
    { label: "Total businesses", value: "512", icon: Store },
    { label: "Verified owners", value: "347", icon: ShieldCheck },
    { label: "Registered users", value: "8,942", icon: Users },
    { label: "Open reports", value: "6", icon: Flag },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient shadow-brand">
          <ShieldCheck className="h-5 w-5 text-brand-foreground" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Admin</div>
          <h1 className="font-display text-3xl font-bold">Platform overview</h1>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-gold-foreground">
              <k.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-2xl font-bold">{k.value}</div>
            <div className="text-sm text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex items-center justify-between border-b border-border p-4">
            <h2 className="font-display text-lg font-bold">Pending approvals</h2>
            <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-gold-foreground">{pending.length} new</span>
          </div>
          <ul className="divide-y divide-border">
            {pending.map((b) => (
              <li key={b.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-4">
                <img src={b.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                <div className="min-w-0">
                  <div className="truncate font-semibold">{b.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{b.category} · {b.city}</div>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-1 rounded-lg bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-brand">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Approve
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold">
                    <XCircle className="h-3.5 w-3.5" /> Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h2 className="font-display text-lg font-bold">Reports</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { t: "Fake reviews", who: "Sishu Restaurant", when: "2h ago" },
              { t: "Wrong address", who: "Muya Ethiopia Boutique", when: "5h ago" },
              { t: "Duplicate listing", who: "Kaldi's Coffee", when: "yesterday" },
            ].map((r) => (
              <li key={r.t + r.who} className="flex items-start justify-between gap-3 rounded-xl bg-secondary/60 p-3">
                <div>
                  <div className="font-semibold">{r.t}</div>
                  <div className="text-xs text-muted-foreground">{r.who}</div>
                </div>
                <span className="text-xs text-muted-foreground">{r.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
