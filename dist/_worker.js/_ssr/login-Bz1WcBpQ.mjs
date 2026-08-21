import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { x as LogIn } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Bz1WcBpQ.js
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-3xl border border-border bg-card p-8 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-6 w-6 text-brand-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-2xl font-bold",
					children: "Welcome back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Log in to manage your business."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						alert("Login is a preview only. Enable Lovable Cloud to add real authentication.");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "password",
								className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand",
							children: "Log in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 text-center text-sm text-muted-foreground",
					children: ["New here? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "font-semibold text-brand hover:underline",
						children: "Create an account"
					})]
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
