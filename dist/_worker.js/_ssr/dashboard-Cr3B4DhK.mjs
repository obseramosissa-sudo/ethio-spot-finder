import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as Bookmark, T as Eye, a as TrendingUp, c as Star, g as Phone, h as Search, l as SquarePen } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as businesses } from "./router-DeRopuGU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-Cr3B4DhK.js
var import_jsx_runtime = require_jsx_runtime();
var viewSourceLabels = {
	search: "Search",
	collections: "Collections",
	category: "Category pages",
	direct: "Direct links"
};
function seeded(seed, index) {
	let h = 2166136261;
	const s = `${seed}:${index}`;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0) % 1e3 / 1e3;
}
var keywordPool = [
	"ethiopian coffee near me",
	"buna ceremony addis",
	"best injera",
	"traditional restaurant bole",
	"habesha kemis shop",
	"ethiopian spa",
	"vegan fasting food",
	"cultural dining addis",
	"open now near me",
	"telebirr accepted"
];
var listingAnalytics = businesses.slice(0, 2).map((b, bi) => {
	const base = 600 + Math.round(seeded(b.id, 1) * 3200);
	const rawWeights = [
		.9 + seeded(b.id, 71),
		.4 + seeded(b.id, 72) * .7,
		.3 + seeded(b.id, 73) * .6,
		.2 + seeded(b.id, 74) * .5
	];
	const weightSum = rawWeights.reduce((a, c) => a + c, 0);
	const parts = rawWeights.map((w) => Math.round(w / weightSum * base));
	parts[0] += base - parts.reduce((a, c) => a + c, 0);
	return {
		businessId: b.id,
		sources: {
			search: parts[0],
			collections: parts[1],
			category: parts[2],
			direct: parts[3]
		},
		views: base,
		viewsChange: Math.round((seeded(b.id, 2) * 40 - 8) * 10) / 10,
		saves: 40 + Math.round(seeded(b.id, 3) * 260),
		savesChange: Math.round((seeded(b.id, 4) * 30 - 5) * 10) / 10,
		directions: 80 + Math.round(seeded(b.id, 5) * 900),
		calls: 20 + Math.round(seeded(b.id, 6) * 300),
		trend: Array.from({ length: 12 }, (_, i) => Math.round(base / 12 + seeded(b.id, 20 + i) * (base / 8))),
		keywords: keywordPool.slice(bi * 3, bi * 3 + 5).map((term, i) => ({
			term,
			count: 20 + Math.round(seeded(b.id + term, i) * 400),
			position: 1 + Math.round(seeded(b.id + term, i + 50) * 12)
		})).sort((a, c) => c.count - a.count)
	};
});
function totals() {
	return listingAnalytics.reduce((acc, a) => ({
		views: acc.views + a.views,
		saves: acc.saves + a.saves,
		directions: acc.directions + a.directions,
		calls: acc.calls + a.calls
	}), {
		views: 0,
		saves: 0,
		directions: 0,
		calls: 0
	});
}
var viewSources = [
	"search",
	"collections",
	"category",
	"direct"
];
function sourceTotals() {
	return listingAnalytics.reduce((acc, a) => {
		for (const s of viewSources) acc[s] += a.sources[s];
		return acc;
	}, {
		search: 0,
		collections: 0,
		category: 0,
		direct: 0
	});
}
function topKeywords(limit = 6) {
	const map = /* @__PURE__ */ new Map();
	for (const a of listingAnalytics) for (const k of a.keywords) {
		const prev = map.get(k.term);
		if (prev) {
			prev.count += k.count;
			prev.position = Math.min(prev.position, k.position);
		} else map.set(k.term, { ...k });
	}
	return Array.from(map.values()).sort((a, b) => b.count - a.count).slice(0, limit);
}
function Sparkline({ points }) {
	const max = Math.max(...points, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-10 items-end gap-1",
		children: points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full rounded-sm bg-brand/70",
			style: { height: `${Math.max(12, p / max * 100)}%` }
		}, i))
	});
}
function Change({ value }) {
	const up = value >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `text-xs font-semibold ${up ? "text-brand" : "text-destructive"}`,
		children: [
			up ? "+" : "",
			value,
			"%"
		]
	});
}
var sourceColor = {
	search: "bg-brand",
	collections: "bg-gold",
	category: "bg-brand/50",
	direct: "bg-muted-foreground/50"
};
function SourceBreakdown({ sources }) {
	const total = viewSources.reduce((a, s) => a + sources[s], 0) || 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-2.5 overflow-hidden rounded-full bg-secondary",
		children: viewSources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: sourceColor[s],
			style: { width: `${sources[s] / total * 100}%` },
			title: `${viewSourceLabels[s]}: ${sources[s].toLocaleString()}`
		}, s))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
		children: viewSources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2.5 w-2.5 shrink-0 rounded-full ${sourceColor[s]}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: viewSourceLabels[s]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto shrink-0 text-xs text-muted-foreground",
					children: [
						sources[s].toLocaleString(),
						" · ",
						Math.round(sources[s] / total * 100),
						"%"
					]
				})
			]
		}, s))
	})] });
}
function Dashboard() {
	const t = totals();
	const keywords = topKeywords();
	const maxKeyword = Math.max(...keywords.map((k) => k.count), 1);
	const allSources = sourceTotals();
	const stats = [
		{
			label: "Profile views",
			value: t.views.toLocaleString(),
			change: 18,
			icon: Eye
		},
		{
			label: "Times saved",
			value: t.saves.toLocaleString(),
			change: 12,
			icon: Bookmark
		},
		{
			label: "Directions taps",
			value: t.directions.toLocaleString(),
			change: 9,
			icon: TrendingUp
		},
		{
			label: "Calls",
			value: t.calls.toLocaleString(),
			change: -3,
			icon: Phone
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
						children: "Analytics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl font-bold",
						children: "Welcome, Selam 👋"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: "How people found and engaged with your listings over the last 30 days."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					className: "rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand",
					children: "+ Add listing"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-gold-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: s.change })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-2xl font-bold",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: s.label
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Listing performance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4",
						children: listingAnalytics.map((a) => {
							const b = businesses.find((x) => x.id === a.businessId);
							if (!b) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: b.image ?? void 0,
												alt: "",
												className: "h-12 w-12 rounded-xl object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: b.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs text-muted-foreground",
												children: [
													b.category,
													" · ",
													b.city,
													" · ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "inline h-3 w-3 text-gold" }),
													" ",
													b.rating.toFixed(1)
												]
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/business/$id",
											params: { id: b.id },
											className: "inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3.5 w-3.5" }), " Manage"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid gap-4 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wide text-muted-foreground",
													children: "Views"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xl font-bold",
													children: a.views.toLocaleString()
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: a.viewsChange })
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wide text-muted-foreground",
													children: "Saves"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xl font-bold",
													children: a.saves.toLocaleString()
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: a.savesChange })
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs uppercase tracking-wide text-muted-foreground",
												children: "Last 12 weeks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, { points: a.trend })] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 border-t border-border pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
											children: "Where these views came from"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBreakdown, { sources: a.sources })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 border-t border-border pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
											children: "Search terms that led here"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2",
											children: a.keywords.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center justify-between gap-4 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: k.term
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "shrink-0 text-xs text-muted-foreground",
													children: [
														k.count,
														" searches · avg. rank #",
														k.position
													]
												})]
											}, k.term))
										})]
									})
								]
							}, a.businessId);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: "Views by source"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-border bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground",
								children: [t.views.toLocaleString(), " profile views across all listings"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBreakdown, { sources: allSources })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 font-display text-2xl font-bold",
							children: "Top search keywords"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-border bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), " Across all your listings"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-4",
								children: keywords.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: k.term
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: k.count
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 h-2 rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-2 rounded-full bg-brand-gradient",
										style: { width: `${k.count / maxKeyword * 100}%` }
									})
								})] }, k.term))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 rounded-2xl border border-border bg-secondary/40 p-5 text-sm text-muted-foreground",
							children: "Demo analytics. Once listings are claimed and live, these numbers come from real visits, searches and saves."
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
