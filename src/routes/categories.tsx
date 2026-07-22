import { createFileRoute, Link } from "@tanstack/react-router";
import { businesses, categories } from "@/data/businesses";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Ethio Spot" },
      { name: "description", content: "Browse Ethiopian businesses by category — restaurants, cafés, shopping, spa and more." },
      { property: "og:title", content: "Categories — Ethio Spot" },
      { property: "og:description", content: "Every category, one place." },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Categories</div>
      <h1 className="mt-1 font-display text-4xl font-bold">What are you looking for?</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">
        Pick a category to jump straight into the directory, filtered and ready.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const sample = businesses.filter((b) => b.categorySlug === c.slug).slice(0, 3);
          return (
            <Link
              key={c.slug}
              to="/directory"
              search={{ category: c.slug, q: "", city: "" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-brand"
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-2xl">{c.icon}</div>
                  <div>
                    <div className="font-display text-lg font-bold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.count} places</div>
                  </div>
                </div>
                <span className="text-brand transition group-hover:translate-x-1">→</span>
              </div>
              {sample.length > 0 && (
                <div className="grid grid-cols-3 gap-0.5 bg-border/60">
                  {sample.map((s) => (
                    <img key={s.id} src={s.image} alt="" className="aspect-square h-full w-full object-cover" loading="lazy" />
                  ))}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
