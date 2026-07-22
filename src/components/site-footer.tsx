import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-brand">
              <MapPin className="h-5 w-5 text-brand-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-bold">Ethio Spot</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Discover Ethiopian businesses on the map — restaurants, cafés, shops, spas and more.
            Locate what you love in seconds.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/directory" className="hover:text-foreground">Directory</Link></li>
            <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
            <li><Link to="/map" className="hover:text-foreground">Map</Link></li>
            <li><Link to="/search" className="hover:text-foreground">Search</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">For Owners</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/register" className="hover:text-foreground">List your business</Link></li>
            <li><Link to="/login" className="hover:text-foreground">Owner login</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            <li><Link to="/admin" className="hover:text-foreground">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Ethio Spot. All rights reserved.</span>
          <span>Made with <span className="text-brand">green</span> & <span className="text-gold">gold</span> in Addis Ababa.</span>
        </div>
      </div>
    </footer>
  );
}
