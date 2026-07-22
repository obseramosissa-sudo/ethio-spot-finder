import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Star, MessageSquare, TrendingUp, Edit } from "lucide-react";
import { businesses } from "@/data/businesses";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Owner Dashboard — Ethio Spot" },
      { name: "description", content: "Manage your Ethio Spot listing, track views and respond to reviews." },
      { property: "og:title", content: "Owner Dashboard — Ethio Spot" },
      { property: "og:description", content: "Track performance and update your listing." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const mine = businesses.slice(0, 2);
  const stats = [
    { label: "Profile views", value: "12,480", change: "+18%", icon: Eye },
    { label: "Avg rating", value: "4.7", change: "+0.2", icon: Star },
    { label: "New reviews", value: "34", change: "+12", icon: MessageSquare },
    { label: "Directions", value: "1,204", change: "+9%", icon: TrendingUp },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Dashboard</div>
          <h1 className="mt-1 font-display text-4xl font-bold">Welcome, Selam 👋</h1>
          <p className="mt-1 text-muted-foreground">Here's how your listings are doing this month.</p>
        </div>
        <Link to="/register" className="rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand">
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
              <span className="text-xs font-semibold text-brand">{s.change}</span>
            </div>
            <div className="mt-4 text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Your listings</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="p-4">Business</th>
              <th className="p-4">Category</th>
              <th className="hidden p-4 sm:table-cell">Views</th>
              <th className="hidden p-4 sm:table-cell">Rating</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mine.map((b) => (
              <tr key={b.id} className="border-t border-border">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={b.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                    <div>
                      <div className="font-semibold">{b.name}</div>
                      <div className="text-xs text-muted-foreground">{b.city}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-muted-foreground">{b.category}</td>
                <td className="hidden p-4 sm:table-cell">{Math.floor(Math.random() * 4000 + 1000)}</td>
                <td className="hidden p-4 sm:table-cell">⭐ {b.rating.toFixed(1)}</td>
                <td className="p-4 text-right">
                  <button className="inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold">
                    <Edit className="h-3.5 w-3.5" /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
