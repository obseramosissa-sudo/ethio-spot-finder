import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import type { Business } from "@/data/businesses";

type PinState = "idle" | "hover" | "active";

function makeIcon(state: PinState) {
  const size = state === "idle" ? 28 : 36;
  return L.divIcon({
    className: "es-pin-wrap",
    html: `<div class="es-pin es-pin-${state}"><div class="es-pin-dot"></div></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

const icons: Record<PinState, L.DivIcon> = {
  idle: makeIcon("idle"),
  hover: makeIcon("hover"),
  active: makeIcon("active"),
};

function FlyTo({ point }: { point: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (!point) return;
    map.flyTo(point, Math.max(map.getZoom(), 14), { duration: 0.8 });
  }, [point?.[0], point?.[1]]);
  return null;
}

export default function MapPreview({
  points,
  center,
  zoom = 12,
  hoveredId,
  activeId,
  onMarkerHover,
  onMarkerSelect,
}: {
  points: Business[];
  center: [number, number];
  zoom?: number;
  hoveredId?: string | null;
  activeId?: string | null;
  onMarkerHover?: (id: string | null) => void;
  onMarkerSelect?: (id: string) => void;
}) {
  const activePoint = useMemo(() => {
    const b = points.find((p) => p.id === activeId);
    return b ? ([b.lat, b.lng] as [number, number]) : null;
  }, [activeId, points]);

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo point={activePoint} />
      {points.map((p) => {
        const state: PinState = p.id === activeId ? "active" : p.id === hoveredId ? "hover" : "idle";
        return (
          <Marker
            key={p.id}
            position={[p.lat, p.lng]}
            icon={icons[state]}
            zIndexOffset={state === "idle" ? 0 : 1000}
            eventHandlers={{
              mouseover: () => onMarkerHover?.(p.id),
              mouseout: () => onMarkerHover?.(null),
              click: () => onMarkerSelect?.(p.id),
            }}
          >
            <Popup>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{p.address}</div>
                <Link
                  to="/business/$id"
                  params={{ id: p.id }}
                  style={{ display: "inline-block", marginTop: 8, color: "var(--brand)", fontWeight: 600 }}
                >
                  View details →
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
