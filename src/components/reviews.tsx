import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import type { Review } from "@/data/businesses";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <MessageCircle className="mx-auto h-8 w-8 text-muted-foreground" />
        <div className="mt-2 font-semibold">No reviews yet</div>
        <p className="text-sm text-muted-foreground">Be the first to share your experience.</p>
      </div>
    );
  }

  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-xl bg-gold-gradient px-3 py-1.5 text-sm font-bold text-gold-foreground">
          <Star className="h-4 w-4 fill-current" /> {average.toFixed(1)}
        </div>
        <span className="text-sm text-muted-foreground">{reviews.length} reviews</span>
      </div>

      {reviews.map((r) => (
        <div key={r.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-brand-foreground">
                {r.avatar}
              </div>
              <div>
                <div className="font-semibold">{r.author}</div>
                <div className="text-xs text-muted-foreground">{r.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-current" : "text-muted"}`} />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {r.tags.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                {t}
              </span>
            ))}
            <button className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
              <ThumbsUp className="h-3.5 w-3.5" /> Helpful ({r.helpful})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
