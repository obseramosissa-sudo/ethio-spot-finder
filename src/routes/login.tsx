import { createFileRoute, Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Ethio Spot" },
      { name: "description", content: "Log in to your Ethio Spot owner account." },
      { property: "og:title", content: "Log in — Ethio Spot" },
      { property: "og:description", content: "Manage your business listing." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 py-16">
      <div className="w-full rounded-3xl border border-border bg-card p-8 shadow-soft">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-brand">
          <LogIn className="h-6 w-6 text-brand-foreground" />
        </div>
        <h1 className="mt-5 font-display text-2xl font-bold">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">Log in to manage your business.</p>

        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login is a preview only. Enable Lovable Cloud to add real authentication.");
          }}
        >
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span>
            <input required type="email" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Password</span>
            <input required type="password" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand" />
          </label>
          <button className="w-full rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand">
            Log in
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-muted-foreground">
          New here? <Link to="/register" className="font-semibold text-brand hover:underline">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
