import { businesses } from "./businesses";

export type ViewSource = "search" | "collections" | "category" | "direct";

export const viewSourceLabels: Record<ViewSource, string> = {
  search: "Search",
  collections: "Collections",
  category: "Category pages",
  direct: "Direct links",
};

export type ListingAnalytics = {
  businessId: string;
  views: number;
  viewsChange: number;
  saves: number;
  savesChange: number;
  directions: number;
  calls: number;
  trend: number[];
  sources: Record<ViewSource, number>;
  keywords: { term: string; count: number; position: number }[];
};

// Deterministic pseudo-random so demo numbers stay stable between renders.
function seeded(seed: string, index: number) {
  let h = 2166136261;
  const s = `${seed}:${index}`;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) / 1000;
}

const keywordPool = [
  "ethiopian coffee near me",
  "buna ceremony addis",
  "best injera",
  "traditional restaurant bole",
  "habesha kemis shop",
  "ethiopian spa",
  "vegan fasting food",
  "cultural dining addis",
  "open now near me",
  "telebirr accepted",
];

export const listingAnalytics: ListingAnalytics[] = businesses.slice(0, 2).map((b, bi) => {
  const base = 600 + Math.round(seeded(b.id, 1) * 3200);
  // Split total views across acquisition sources (weights sum to 1).
  const rawWeights = [
    0.9 + seeded(b.id, 71),
    0.4 + seeded(b.id, 72) * 0.7,
    0.3 + seeded(b.id, 73) * 0.6,
    0.2 + seeded(b.id, 74) * 0.5,
  ];
  const weightSum = rawWeights.reduce((a, c) => a + c, 0);
  const parts = rawWeights.map((w) => Math.round((w / weightSum) * base));
  parts[0] += base - parts.reduce((a, c) => a + c, 0);
  return {
    businessId: b.id,
    sources: {
      search: parts[0],
      collections: parts[1],
      category: parts[2],
      direct: parts[3],
    },
    views: base,
    viewsChange: Math.round((seeded(b.id, 2) * 40 - 8) * 10) / 10,
    saves: 40 + Math.round(seeded(b.id, 3) * 260),
    savesChange: Math.round((seeded(b.id, 4) * 30 - 5) * 10) / 10,
    directions: 80 + Math.round(seeded(b.id, 5) * 900),
    calls: 20 + Math.round(seeded(b.id, 6) * 300),
    trend: Array.from({ length: 12 }, (_, i) =>
      Math.round(base / 12 + seeded(b.id, 20 + i) * (base / 8)),
    ),
    keywords: keywordPool
      .slice(bi * 3, bi * 3 + 5)
      .map((term, i) => ({
        term,
        count: 20 + Math.round(seeded(b.id + term, i) * 400),
        position: 1 + Math.round(seeded(b.id + term, i + 50) * 12),
      }))
      .sort((a, c) => c.count - a.count),
  };
});

export function totals() {
  return listingAnalytics.reduce(
    (acc, a) => ({
      views: acc.views + a.views,
      saves: acc.saves + a.saves,
      directions: acc.directions + a.directions,
      calls: acc.calls + a.calls,
    }),
    { views: 0, saves: 0, directions: 0, calls: 0 },
  );
}

export function topKeywords(limit = 6) {
  const map = new Map<string, { term: string; count: number; position: number }>();
  for (const a of listingAnalytics) {
    for (const k of a.keywords) {
      const prev = map.get(k.term);
      if (prev) {
        prev.count += k.count;
        prev.position = Math.min(prev.position, k.position);
      } else {
        map.set(k.term, { ...k });
      }
    }
  }
  return Array.from(map.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
