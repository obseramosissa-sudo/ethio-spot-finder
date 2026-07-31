import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/ethio-spot-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/directory", label: "Directory" },
  { to: "/categories", label: "Categories" },
  { to: "/collections", label: "Collections" },
  { to: "/map", label: "Map" },
  { to: "/search", label: "Search" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Ethio Spot logo"
            className="h-9 w-auto shrink-0"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-bold tracking-tight">
              Ethio <span className="text-brand">Spot</span>
            </div>
            <div className="-mt-0.5 truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Find · Connect · Grow
            </div>
          </div>
        </Link>


        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand transition hover:opacity-95"
          >
            List your business
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-border px-3 py-2 text-center text-sm font-medium"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-brand-gradient px-3 py-2 text-center text-sm font-semibold text-brand-foreground"
              >
                List business
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
