import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Search } from "../_libs/lucide-react.mjs";
import { i as Route$4, u as searchBusinesses } from "./router-DeRopuGU.mjs";
import { t as BusinessCard } from "./business-card-CVMQEJj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-7ip94UNT.js
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q } = Route$4.useSearch();
	const navigate = Route$4.useNavigate();
	const results = searchBusinesses(q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl font-bold",
				children: "Find what you're looking for"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center gap-2 px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: q,
						onChange: (e) => navigate({ search: { q: e.target.value } }),
						placeholder: "Search coffee, injera, spa, boutique…",
						className: "w-full bg-transparent py-3 text-base outline-none"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-sm text-muted-foreground",
				children: q ? `${results.length} results for "${q}"` : "Start typing to search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: results.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { b }, b.id))
			})
		]
	});
}
//#endregion
export { SearchPage as component };
