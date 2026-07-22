import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { Link } from "@tanstack/react-router";
import type { Business } from "@/data/businesses";

// Fix default icon paths without bundling images
const icon = L.divIcon({
  className: "",
  html: `<div style="background:oklch(0.42 0.14 150);border:3px solid white;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 4px 12px rgba(0,0,0,.25)"><div style="width:8px;height:8px;background:white;border-radius:50%;margin:7px auto"></div></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

export default function MapPreview({
  points,
  center,
  zoom = 12,
}: {
  points: Business[];
  center: [number, number];
  zoom?: number;
}) {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={icon}>
          <Popup>
            <div style={{ minWidth: 180 }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "#666" }}>{p.address}</div>
              <Link
                to="/business/$id"
                params={{ id: p.id }}
                style={{ display: "inline-block", marginTop: 8, color: "oklch(0.42 0.14 150)", fontWeight: 600 }}
              >
                View details →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
