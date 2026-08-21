globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"19b4-uASI8wNNeFEKXrMRRbkZGLMMfN4\"",
		"mtime": "2026-08-21T11:06:02.723Z",
		"size": 6580,
		"path": "../favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-21T11:06:02.723Z",
		"size": 23,
		"path": "../robots.txt"
	},
	"/assets/admin-6hVjhqvm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1381-yjqSXbD4dYuVpKvBDf9x6JRyVJI\"",
		"mtime": "2026-08-21T11:06:00.522Z",
		"size": 4993,
		"path": "../assets/admin-6hVjhqvm.js"
	},
	"/assets/arrow-left-QqHcpZ2O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-mU+1a1jTSaBzuet/DnGGoyl1pcI\"",
		"mtime": "2026-08-21T11:06:00.522Z",
		"size": 154,
		"path": "../assets/arrow-left-QqHcpZ2O.js"
	},
	"/assets/biz-boutique-By3H3M11.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b141-QPTsU835zuIimzmxLv2EpS16KqQ\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 176449,
		"path": "../assets/biz-boutique-By3H3M11.jpg"
	},
	"/assets/biz-coffee-0ZG_mJ2T.jpg": {
		"type": "image/jpeg",
		"etag": "\"23bb3-aW3FXAQeaVOuHdAJkfMwLEtcgo4\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 146355,
		"path": "../assets/biz-coffee-0ZG_mJ2T.jpg"
	},
	"/assets/biz-restaurant-Bk1JiutV.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b976-0dmru/CF6ofSnC9NIEdG3AWoGZI\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 178550,
		"path": "../assets/biz-restaurant-Bk1JiutV.jpg"
	},
	"/assets/biz-spa-DUoeMQJZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"24413-3bJ08Ny8+nwTTqJ4Xvakfr5dtEY\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 148499,
		"path": "../assets/biz-spa-DUoeMQJZ.jpg"
	},
	"/assets/bookmark-XSq4NDcu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db-POEwO1UqFX6K57jOyyednjFBdvk\"",
		"mtime": "2026-08-21T11:06:00.522Z",
		"size": 219,
		"path": "../assets/bookmark-XSq4NDcu.js"
	},
	"/assets/business-card-CW2eIYPd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ab2-P9NqqApDSN87WNrRqW1QDJJmfxI\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 2738,
		"path": "../assets/business-card-CW2eIYPd.js"
	},
	"/assets/business._id-D9rHxGiI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cc-0t39zhb6JSTUbDRfDu8vCDsMPGk\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 460,
		"path": "../assets/business._id-D9rHxGiI.js"
	},
	"/assets/business._id-D_O3-TSE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4851-hXddapPGsPwc5FcwJsa/nUNVy/A\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 18513,
		"path": "../assets/business._id-D_O3-TSE.js"
	},
	"/assets/business._id-DewaxTuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-ehgTmUYyG39w/UUi9wGDG9aseZU\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 373,
		"path": "../assets/business._id-DewaxTuf.js"
	},
	"/assets/categories-DP4a0oBq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f3-tMimnORIaQzuDp5EN/PPDf35AzY\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 1779,
		"path": "../assets/categories-DP4a0oBq.js"
	},
	"/assets/circle-check-CuioZhQR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-KTv8c1W1C8lYVYE0nXaHbTv+dpw\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 167,
		"path": "../assets/circle-check-CuioZhQR.js"
	},
	"/assets/collections-BQ-bMdBx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-zm2ITuCxw85lj7a4reiFjsW9rYA\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 154,
		"path": "../assets/collections-BQ-bMdBx.js"
	},
	"/assets/collections._slug-C471dMXm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"615-3CylrFZRp7aGEMw89Ntj56Nvp0I\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 1557,
		"path": "../assets/collections._slug-C471dMXm.js"
	},
	"/assets/collections.index-BH04TXJf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a9-IFSYPf/VoFcuQKOJNm7fPWqcTU4\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 1961,
		"path": "../assets/collections.index-BH04TXJf.js"
	},
	"/assets/dashboard-C6KU6R6U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e8-tP8g4y4bSK0o+AIp/v2b4/FNCeA\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 9960,
		"path": "../assets/dashboard-C6KU6R6U.js"
	},
	"/assets/directory-BjfjSuVc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb9-sO8F5exuRVYA2ugu+jcdp3jd3JY\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 3257,
		"path": "../assets/directory-BjfjSuVc.js"
	},
	"/assets/hero-9o3dXXrt.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b125-VY8I0Xo3xvmSOP+g+sPWyN0iiK0\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 307493,
		"path": "../assets/hero-9o3dXXrt.jpg"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 961,
		"path": "../assets/jsx-runtime-BkSabwWG.js"
	},
	"/assets/link-BuyFvMT9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c44-7IBZe52Uu/7qo9XcwnTKxJZ4tDE\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 19524,
		"path": "../assets/link-BuyFvMT9.js"
	},
	"/assets/login-CITKRF6w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"862-mIG3CD4y2C7yyk1fM+smFBEuoI0\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 2146,
		"path": "../assets/login-CITKRF6w.js"
	},
	"/assets/index-D7wEJ5PW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9634b-43Md2V4HFCmJGHoCQP6ci/FnMwI\"",
		"mtime": "2026-08-21T11:06:00.522Z",
		"size": 615243,
		"path": "../assets/index-D7wEJ5PW.js"
	},
	"/assets/map-DxapbNiM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa8-wwCOX51Ae4x0euRSX9fetUbsdBU\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 2728,
		"path": "../assets/map-DxapbNiM.js"
	},
	"/assets/map-preview-DWKogCOx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25c73-KgY0L0nyWKzmSM3P0uo/O7eJoOA\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 154739,
		"path": "../assets/map-preview-DWKogCOx.js"
	},
	"/assets/matchContext-CNtDuwuZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be-8VWXVf5lxQu1z8iKP40KvX+FQMc\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 190,
		"path": "../assets/matchContext-CNtDuwuZ.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 118,
		"path": "../assets/not-found-i5RsCZif.js"
	},
	"/assets/phone-By2rtXK7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"137-QP/GPnZLtWvuYBdVm1wb8iRex5Y\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 311,
		"path": "../assets/phone-By2rtXK7.js"
	},
	"/assets/react-DHmoMYoq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-nufvvndhXtiz6VWh8XcPEWVqP1g\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 7527,
		"path": "../assets/react-DHmoMYoq.js"
	},
	"/assets/register-BfvgZXjm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f12-bJ8VyJKEb908/qGdwj5pSB+LRw0\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 3858,
		"path": "../assets/register-BfvgZXjm.js"
	},
	"/assets/routes-CGsyoTVw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94c5-Cst9IehBv1nRhTe5IMzb6QtWeI0\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 38085,
		"path": "../assets/routes-CGsyoTVw.js"
	},
	"/assets/search-CZtLgsB9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-1E+/Z7kmjYa6kifDS1Hmx4yxZBU\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 163,
		"path": "../assets/search-CZtLgsB9.js"
	},
	"/assets/search-DeUjNPcG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"514-QRtJ0k5ip0iNkriBLsGfDjwQfpg\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 1300,
		"path": "../assets/search-DeUjNPcG.js"
	},
	"/assets/star-CAqk3wqt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-8K/EKOo71DmUBDvGzGDJDdiHjxc\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 461,
		"path": "../assets/star-CAqk3wqt.js"
	},
	"/assets/styles-BYPaighp.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16110-0Z+HnvoCjTDBRe1xuzKst3s/GFA\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 90384,
		"path": "../assets/styles-BYPaighp.css"
	},
	"/assets/trending-up-Di6txW36.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-hK9zCSSWMS5Py4/QQsnUY097uns\"",
		"mtime": "2026-08-21T11:06:00.523Z",
		"size": 164,
		"path": "../assets/trending-up-Di6txW36.js"
	},
	"/assets/useStore-B8eqOrFY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"89a-1J6o5vfXBXgUyMUkaRHFl4zUzMI\"",
		"mtime": "2026-08-21T11:06:00.524Z",
		"size": 2202,
		"path": "../assets/useStore-B8eqOrFY.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-pages.mjs
var nitroApp = useNitroApp();
var cloudflare_pages_default = {
	async fetch(cfReq, env, context) {
		augmentReq(cfReq, {
			env,
			context
		});
		const url = new URL(cfReq.url);
		if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfReq);
		return nitroApp.fetch(cfReq);
	},
	scheduled(event, env, context) {}
};
//#endregion
export { cloudflare_pages_default as default };
