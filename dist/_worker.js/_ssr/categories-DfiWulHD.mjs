import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as businesses, s as categories } from "./router-DeRopuGU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-DfiWulHD.js
var import_jsx_runtime = require_jsx_runtime();
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
				children: "Categories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl font-bold",
				children: "What are you looking for?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-muted-foreground",
				children: "Pick a category to jump straight into the directory, filtered and ready."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: categories.map((c) => {
					const sample = businesses.filter((b) => b.categorySlug === c.slug).slice(0, 3);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/directory",
						search: {
							category: c.slug,
							q: "",
							city: ""
						},
						className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-2xl",
									children: c.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-bold",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [c.count, " places"]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand transition group-hover:translate-x-1",
								children: "→"
							})]
						}), sample.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-0.5 bg-border/60",
							children: sample.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: "",
								className: "aspect-square h-full w-full object-cover",
								loading: "lazy"
							}, s.id))
						})]
					}, c.slug);
				})
			})
		]
	});
}
//#endregion
export { Categories as component };
