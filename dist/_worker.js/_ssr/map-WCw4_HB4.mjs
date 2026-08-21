import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { x as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as businesses, s as categories } from "./router-DeRopuGU.mjs";
import { t as BusinessCard } from "./business-card-CVMQEJj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-WCw4_HB4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MapPage() {
	const [cat, setCat] = (0, import_react.useState)("");
	const [hoveredId, setHoveredId] = (0, import_react.useState)(null);
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const filtered = cat ? businesses.filter((b) => b.categorySlug === cat) : businesses;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:flex sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
				children: "Map"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl font-bold",
				children: "Explore on the map"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(""),
					className: `rounded-full px-3 py-1.5 text-xs font-semibold ${cat === "" ? "bg-brand-gradient text-brand-foreground shadow-brand" : "bg-secondary text-secondary-foreground"}`,
					children: "All"
				}), categories.slice(0, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setCat(c.slug),
					className: `rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c.slug ? "bg-brand-gradient text-brand-foreground shadow-brand" : "bg-secondary text-secondary-foreground"}`,
					children: [
						c.icon,
						" ",
						c.name
					]
				}, c.slug))]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-5 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-[70vh] overflow-hidden rounded-3xl border border-border shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full animate-pulse bg-muted" }) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[70vh] space-y-3 overflow-y-auto pr-1",
				children: filtered.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onMouseEnter: () => setHoveredId(b.id),
					onMouseLeave: () => setHoveredId((id) => id === b.id ? null : id),
					onFocusCapture: () => setHoveredId(b.id),
					onClick: () => setActiveId(b.id),
					className: `rounded-2xl transition duration-300 ${activeId === b.id ? "ring-2 ring-brand ring-offset-2 ring-offset-background" : hoveredId === b.id ? "ring-1 ring-brand/50" : "ring-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { b })
				}, b.id))
			})]
		})]
	});
}
//#endregion
export { MapPage as component };
