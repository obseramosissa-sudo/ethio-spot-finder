import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business._id-KbFSoKst.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-24 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-2xl font-bold",
		children: "Business not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/directory",
		search: {
			q: "",
			category: "",
			city: ""
		},
		className: "mt-3 inline-block text-sm font-semibold text-brand",
		children: "Back to directory"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
