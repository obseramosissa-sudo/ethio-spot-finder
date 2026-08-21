import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as SlidersHorizontal, h as Search } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, r as object, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { a as Route$8, c as cities, o as businesses, s as categories, u as searchBusinesses } from "./router-DeRopuGU.mjs";
import { t as BusinessCard } from "./business-card-CVMQEJj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/directory-B8Mgiwpl.js
var import_jsx_runtime = require_jsx_runtime();
object({
	q: fallback(string(), "").default(""),
	category: fallback(string(), "").default(""),
	city: fallback(string(), "").default("")
});
function Directory() {
	const { q, category, city } = Route$8.useSearch();
	const navigate = Route$8.useNavigate();
	const results = searchBusinesses(q, category || void 0, city || void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
						children: "Directory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-bold",
						children: "All businesses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: [
							results.length,
							" of ",
							businesses.length,
							" listings"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-soft sm:grid-cols-[1fr_auto_auto_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-xl bg-muted px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => navigate({ search: (p) => ({
								...p,
								q: e.target.value
							}) }),
							placeholder: "Search businesses…",
							className: "w-full bg-transparent py-2.5 text-sm outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: category,
						onChange: (e) => navigate({ search: (p) => ({
							...p,
							category: e.target.value
						}) }),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All categories"
						}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.slug,
							children: c.name
						}, c.slug))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: city,
						onChange: (e) => navigate({ search: (p) => ({
							...p,
							city: e.target.value
						}) }),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All cities"
						}), cities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => navigate({ search: {
							q: "",
							category: "",
							city: ""
						} }),
						className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }), " Reset"]
					})
				]
			}),
			results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 rounded-2xl border border-dashed border-border bg-card p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-semibold",
						children: "No matches"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Try a different search or clear the filters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/directory",
						search: {
							q: "",
							category: "",
							city: ""
						},
						className: "mt-4 inline-block text-sm font-semibold text-brand hover:underline",
						children: "Clear all →"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: results.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { b }, b.id))
			})
		]
	});
}
//#endregion
export { Directory as component };
