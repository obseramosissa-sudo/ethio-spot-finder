import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { A as CalendarClock, C as Globe, D as Clock, F as BadgeCheck, L as ArrowLeft, M as Briefcase, P as Banknote, S as Languages, _ as MessageSquare, b as MapPin, c as Star, f as ShoppingBag, g as Phone, n as Wallet, o as ThumbsUp, r as Utensils, u as Sparkles, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as businesses, r as Route$2 } from "./router-DeRopuGU.mjs";
import { t as BusinessCard } from "./business-card-CVMQEJj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business._id-CL78LTDa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReviewList({ reviews }) {
	if (reviews.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-dashed border-border bg-card p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-semibold",
				children: "No reviews yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Be the first to share your experience."
			})
		]
	});
	const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 rounded-xl bg-gold-gradient px-3 py-1.5 text-sm font-bold text-gold-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }),
					" ",
					average.toFixed(1)
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted-foreground",
				children: [reviews.length, " reviews"]
			})]
		}), reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-brand-foreground",
							children: r.avatar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: r.author
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: r.date
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-0.5 text-gold",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < r.rating ? "fill-current" : "text-muted"}` }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed",
					children: r.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center gap-2",
					children: [r.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground",
						children: t
					}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "ml-auto inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "h-3.5 w-3.5" }),
							" Helpful (",
							r.helpful,
							")"
						]
					})]
				})
			]
		}, r.id))]
	});
}
function BusinessPhotos({ photos, name }) {
	if (photos.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[4/3] overflow-hidden rounded-2xl sm:row-span-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos[0],
				alt: name,
				className: "h-full w-full object-cover",
				loading: "lazy"
			})
		}), photos.slice(1, 3).map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[4/3] overflow-hidden rounded-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo,
				alt: `${name} ${i + 2}`,
				className: "h-full w-full object-cover",
				loading: "lazy"
			})
		}, i))]
	});
}
function formatPrice(price, currency) {
	return `${price.toLocaleString()} ${currency}`;
}
function BusinessStore({ products, businessName, phone }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "This business hasn’t added shop items yet."
	});
	const groups = products.reduce((acc, p) => {
		const key = p.category ?? "Items";
		(acc[key] ??= []).push(p);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: Object.entries(groups).map(([group, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
			children: group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 rounded-2xl border border-border bg-background p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-soft",
				children: [
					p.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: `${p.name} from ${businessName}`,
						loading: "lazy",
						className: "h-32 w-full rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: p.name
						}), p.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: p.description
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "whitespace-nowrap font-semibold text-brand",
							children: formatPrice(p.price, p.currency)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${phone}`,
						className: "mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground transition hover:bg-brand hover:text-brand-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Order / enquire"]
					})
				]
			}, p.id))
		})] }, group))
	});
}
var typeLabels = {
	full_time: "Full-time",
	part_time: "Part-time",
	contract: "Contract",
	internship: "Internship",
	temporary: "Temporary"
};
function salary(j) {
	if (j.salaryMin === null && j.salaryMax === null) return null;
	if (j.salaryMin !== null && j.salaryMax !== null) return `${j.salaryMin.toLocaleString()}–${j.salaryMax.toLocaleString()} ${j.currency}/mo`;
	return `${(j.salaryMin ?? j.salaryMax).toLocaleString()} ${j.currency}/mo`;
}
function BusinessJobs({ jobs, businessName }) {
	if (jobs.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm text-muted-foreground",
		children: [
			"No open positions at ",
			businessName,
			" right now."
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: jobs.map((j) => {
			const pay = salary(j);
			const contactHref = j.applyContact ? j.applyContact.includes("@") ? `mailto:${j.applyContact}?subject=${encodeURIComponent(`Application: ${j.title}`)}` : `tel:${j.applyContact.replace(/\s/g, "")}` : null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-border bg-background p-4 transition duration-300 hover:border-brand/50 hover:shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-0.5 text-xs font-semibold text-brand-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3 w-3" }),
									" ",
									typeLabels[j.employmentType] ?? j.employmentType
								]
							}),
							j.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
									" ",
									j.location
								]
							}),
							pay && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banknote, { className: "h-3 w-3" }),
									" ",
									pay
								]
							}),
							j.closesAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-3 w-3" }),
									" Closes ",
									j.closesAt
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-lg font-bold",
						children: j.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: j.description
					}),
					contactHref && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: contactHref,
						className: "mt-3 inline-flex items-center justify-center rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition hover:bg-brand hover:text-brand-foreground",
						children: "Apply now"
					})
				]
			}, j.id);
		})
	});
}
var MapPreview = (0, import_react.lazy)(() => import("./map-preview-Cqu-yTPT.mjs"));
function BusinessPage() {
	const { business: b, reviews, storefront } = Route$2.useLoaderData();
	const related = businesses.filter((x) => x.categorySlug === b.categorySlug && x.id !== b.id).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-72 overflow-hidden sm:h-96",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: b.image,
				alt: b.name,
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/directory",
					search: {
						q: "",
						category: "",
						city: ""
					},
					className: "inline-flex items-center gap-1 text-sm text-white/90 hover:text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to directory"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-6 lg:grid-cols-[1fr_360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.category }), b.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2 py-0.5 text-brand-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5" }), " Verified"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
										children: b.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold text-gold" }),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
														className: "text-foreground",
														children: b.rating.toFixed(1)
													}),
													" (",
													b.reviews,
													" reviews)"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
													" ",
													b.address,
													", ",
													b.city
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono",
												children: "$".repeat(b.priceLevel)
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-base leading-relaxed",
										children: b.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-2",
										children: b.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
											children: t
										}, t))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold",
									children: "Photos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessPhotos, {
										photos: b.photos,
										name: b.name
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold",
									children: "Opening hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-2 text-sm",
									children: b.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-xl bg-secondary/40 px-4 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: h.day
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: h.time === "Closed" ? "text-muted-foreground" : "text-foreground",
											children: h.time
										})]
									}, h.day))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl font-bold",
											children: "Shop & services"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [
											"Items and treatments ",
											b.name,
											" offers — call or message to order."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessStore, {
											products: storefront.products,
											businessName: b.name,
											phone: b.phone
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: b.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "h-3 w-3" }),
												" ",
												s
											]
										}, s))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "font-display text-xl font-bold",
											children: ["Jobs at ", b.name]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Open positions posted by this business."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessJobs, {
											jobs: storefront.jobs,
											businessName: b.name
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl font-bold",
										children: "Reviews"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewList, { reviews })
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-64",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
										fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full animate-pulse bg-muted" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPreview, {
											points: [b],
											center: [b.lat, b.lng],
											zoom: 14
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: b.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted-foreground",
											children: b.city
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`,
											target: "_blank",
											rel: "noreferrer",
											className: "mt-3 inline-flex w-full items-center justify-center rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand",
											children: "Get directions"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-bold uppercase tracking-wide text-muted-foreground",
									children: "Contact"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:${b.phone}`,
											className: "flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm hover:border-brand",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }),
												" ",
												b.phone
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: b.website,
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm hover:border-brand",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-brand" }), " Website"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-brand" }),
												" ",
												b.hours[0].time,
												" today"
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-bold uppercase tracking-wide text-muted-foreground",
									children: "Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "mt-0.5 h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "Payment"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: b.paymentMethods.join(" · ")
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "mt-0.5 h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "Languages"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: b.languages.join(" · ")
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "Amenities"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: b.amenities.join(" · ")
											})] })]
										})
									]
								})]
							})
						]
					})]
				}),
				related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Similar spots"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { b: r }, r.id))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16" })
	] });
}
//#endregion
export { BusinessPage as component };
