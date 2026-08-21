import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { E as Compass, I as ArrowRight, N as Bookmark, a as TrendingUp, b as MapPin, c as Star, h as Search, p as Shield } from "../_libs/lucide-react.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as collections, o as businesses, s as categories } from "./router-DeRopuGU.mjs";
import { t as BusinessCard } from "./business-card-CVMQEJj7.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C8KmChaE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-9o3dXXrt.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", shown && "reveal-in", className),
		children
	});
}
function Index() {
	const [q, setQ] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const featured = businesses.filter((b) => b.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Ethiopian city street with green hills",
					className: "absolute inset-0 h-full w-full animate-slow-zoom object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-gradient" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-gold" }), "Ethiopia's business finder"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 animate-fade-up font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl",
								style: { animationDelay: "90ms" },
								children: [
									"Find every great ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "Ethiopian business"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									" right on the map."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl animate-fade-up text-base text-white/85 sm:text-lg",
								style: { animationDelay: "180ms" },
								children: "From Tomoca coffee to Yod Abyssinia — Ethio Spot helps you discover, locate and visit the places you'll love, in seconds."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									navigate({
										to: "/search",
										search: { q }
									});
								},
								style: { animationDelay: "270ms" },
								className: "mt-8 flex animate-fade-up flex-col gap-2 rounded-2xl bg-white p-2 shadow-brand transition-shadow duration-300 focus-within:shadow-[0_25px_60px_-20px_rgb(15_122_58/0.6)] sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 items-center gap-2 rounded-xl px-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: q,
										onChange: (e) => setQ(e.target.value),
										placeholder: "Try 'coffee', 'injera', 'spa in Bole'…",
										className: "w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "group inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition duration-300 hover:scale-[1.03] active:scale-95",
									children: [
										"Search",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80",
								style: { animationDelay: "360ms" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold text-gold" }), " 4.8 avg rating"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), " 500+ places mapped"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-gold" }), " Verified owners"]
									})
								]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
					children: "Browse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl font-bold sm:text-4xl",
					children: "Explore by category"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/categories",
					className: "story-link hidden text-sm font-semibold text-brand sm:inline",
					children: "View all →"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/directory",
						search: {
							category: c.slug,
							city: "",
							q: ""
						},
						className: "group flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:border-brand hover:shadow-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient text-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
							children: c.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-semibold",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [c.count, " places"]
							})]
						})]
					})
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
					children: "Handpicked"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl font-bold sm:text-4xl",
					children: "Featured this week"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/directory",
					className: "story-link hidden text-sm font-semibold text-brand sm:inline",
					children: "All businesses →"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: featured.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { b })
				}, b.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
					children: "Curated"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl font-bold sm:text-4xl",
					children: "Collections"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collections",
					className: "story-link hidden text-sm font-semibold text-brand sm:inline",
					children: "All collections →"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: collections.filter((c) => c.featured).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/collections/$slug",
						params: { slug: c.slug },
						className: "group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-40 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.coverImage,
									alt: c.title,
									className: "h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 left-3 right-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-xs font-semibold text-white",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" }),
											" ",
											c.businessIds.length,
											" places"
										]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base font-bold",
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
								children: c.description
							})]
						})]
					})
				}, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl bg-brand-gradient p-8 text-brand-foreground shadow-brand sm:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
							children: "For owners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-3xl font-bold sm:text-4xl",
							children: "Put your business on the map."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-white/90",
							children: "Free listing, verified badge, and analytics on who's viewing your spot. Reach thousands of locals and travelers every week."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/register",
								className: "rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-gold-foreground shadow transition duration-300 hover:scale-105 active:scale-95",
								children: "List your business"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition duration-300 hover:scale-105 hover:bg-white/20 active:scale-95",
								children: "Owner login"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3",
						children: [
							{
								icon: TrendingUp,
								t: "Reach",
								d: "10k+ monthly visitors"
							},
							{
								icon: Compass,
								t: "Discover",
								d: "Map + search built-in"
							},
							{
								icon: Shield,
								t: "Trust",
								d: "Verified owner badge"
							}
						].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animationDelay: `${i * 120}ms` },
							className: "group animate-float rounded-2xl bg-white/10 p-5 backdrop-blur transition duration-300 hover:bg-white/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-display text-lg font-bold",
									children: f.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-white/80",
									children: f.d
								})
							]
						}, f.t))
					})]
				})
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8" })
	] });
}
//#endregion
export { Index as component };
