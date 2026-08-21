import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as Bookmark } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as collections } from "./router-DeRopuGU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections.index-BAX7f8tC.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
					children: "Curated"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl font-bold",
					children: "Collections"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Handpicked lists of Ethiopian businesses — from the best buna to cultural dining and ethical gifts."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: collections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/collections/$slug",
				params: { slug: c.slug },
				className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/10] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.coverImage,
							alt: c.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-gold-gradient px-2.5 py-1 text-xs font-bold text-gold-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5" }),
								" ",
								c.businessIds.length,
								" places"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: ["Curated by ", c.curatedBy]
						})
					]
				})]
			}, c.slug))
		})]
	});
}
//#endregion
export { CollectionsIndex as component };
