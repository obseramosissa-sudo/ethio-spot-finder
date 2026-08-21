import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_leaflet_src } from "../_libs/leaflet.mjs";
import { a as useMap, i as MapContainer, n as Popup, r as Marker, t as TileLayer } from "../_libs/react-leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-preview-Cqu-yTPT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_leaflet_src = /* @__PURE__ */ __toESM(require_leaflet_src());
function makeIcon(state) {
	const size = state === "idle" ? 28 : 36;
	return import_leaflet_src.default.divIcon({
		className: "es-pin-wrap",
		html: `<div class="es-pin es-pin-${state}"><div class="es-pin-dot"></div></div>`,
		iconSize: [size, size],
		iconAnchor: [size / 2, size],
		popupAnchor: [0, -size]
	});
}
var icons = {
	idle: makeIcon("idle"),
	hover: makeIcon("hover"),
	active: makeIcon("active")
};
function FlyTo({ point }) {
	const map = useMap();
	(0, import_react.useEffect)(() => {
		if (!point) return;
		map.flyTo(point, Math.max(map.getZoom(), 14), { duration: .8 });
	}, [point?.[0], point?.[1]]);
	return null;
}
function MapPreview({ points, center, zoom = 12, hoveredId, activeId, onMarkerHover, onMarkerSelect }) {
	const activePoint = (0, import_react.useMemo)(() => {
		const b = points.find((p) => p.id === activeId);
		return b ? [b.lat, b.lng] : null;
	}, [activeId, points]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MapContainer, {
		center,
		zoom,
		scrollWheelZoom: false,
		style: {
			height: "100%",
			width: "100%"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileLayer, {
				attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
				url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlyTo, { point: activePoint }),
			points.map((p) => {
				const state = p.id === activeId ? "active" : p.id === hoveredId ? "hover" : "idle";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marker, {
					position: [p.lat, p.lng],
					icon: icons[state],
					zIndexOffset: state === "idle" ? 0 : 1e3,
					eventHandlers: {
						mouseover: () => onMarkerHover?.(p.id),
						mouseout: () => onMarkerHover?.(null),
						click: () => onMarkerSelect?.(p.id)
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { minWidth: 180 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 700,
									marginBottom: 4
								},
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 12,
									color: "#666"
								},
								children: p.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/business/$id",
								params: { id: p.id },
								style: {
									display: "inline-block",
									marginTop: 8,
									color: "var(--brand)",
									fontWeight: 600
								},
								children: "View details →"
							})
						]
					}) })
				}, p.id);
			})
		]
	});
}
//#endregion
export { MapPreview as default };
