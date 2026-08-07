import { ShoppingBag } from "lucide-react";
import type { StoreProduct } from "@/lib/storefront.functions";

function formatPrice(price: number, currency: string) {
  return `${price.toLocaleString()} ${currency}`;
}

export function BusinessStore({
  products,
  businessName,
  phone,
}: {
  products: StoreProduct[];
  businessName: string;
  phone: string;
}) {
  if (products.length === 0) {
    return <p className="text-sm text-muted-foreground">This business hasn’t added shop items yet.</p>;
  }

  const groups = products.reduce<Record<string, StoreProduct[]>>((acc, p) => {
    const key = p.category ?? "Items";
    (acc[key] ??= []).push(p);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groups).map(([group, items]) => (
        <div key={group}>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{group}</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {items.map((p) => (
              <div
                key={p.id}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-soft"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={`${p.name} from ${businessName}`}
                    loading="lazy"
                    className="h-32 w-full rounded-xl object-cover"
                  />
                )}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    {p.description && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{p.description}</p>
                    )}
                  </div>
                  <div className="whitespace-nowrap font-semibold text-brand">
                    {formatPrice(p.price, p.currency)}
                  </div>
                </div>
                <a
                  href={`tel:${phone}`}
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground transition hover:bg-brand hover:text-brand-foreground"
                >
                  <ShoppingBag className="h-3.5 w-3.5" /> Order / enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
