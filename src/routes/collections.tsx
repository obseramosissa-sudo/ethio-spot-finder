import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Ethio Spot" },
      { name: "description", content: "Curated collections of the best Ethiopian businesses — best coffee, cultural dining, ethical gifts, and more." },
      { property: "og:title", content: "Collections — Ethio Spot" },
      { property: "og:description", content: "Handpicked Ethiopian business collections." },
    ],
  }),
  component: CollectionsLayout,
});

function CollectionsLayout() {
  return <Outlet />;
}
