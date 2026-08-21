import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { L as ArrowLeft, N as Bookmark } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-DeRopuGU.mjs";
import { t as BusinessCard } from "./business-card-CVMQEJj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-CxUBMqux.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const { collection: c, businesses: items } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/collections",
				className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to collections"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 overflow-hidden rounded-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.coverImage,
						alt: c.title,
						className: "h-64 w-full object-cover sm:h-80"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 p-6 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-gold-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5" }),
									" ",
									items.length,
									" places"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-bold sm:text-5xl",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base",
								children: c.description
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { b }, b.id))
			})
		]
	});
}
//#endregion
export { CollectionPage as component };
