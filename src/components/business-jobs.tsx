import { Briefcase, MapPin, CalendarClock, Banknote } from "lucide-react";
import type { JobPost } from "@/lib/storefront.functions";

const typeLabels: Record<string, string> = {
  full_time: "Full-time",
  part_time: "Part-time",
  contract: "Contract",
  internship: "Internship",
  temporary: "Temporary",
};

function salary(j: JobPost) {
  if (j.salaryMin === null && j.salaryMax === null) return null;
  if (j.salaryMin !== null && j.salaryMax !== null)
    return `${j.salaryMin.toLocaleString()}–${j.salaryMax.toLocaleString()} ${j.currency}/mo`;
  const one = (j.salaryMin ?? j.salaryMax) as number;
  return `${one.toLocaleString()} ${j.currency}/mo`;
}

export function BusinessJobs({ jobs, businessName }: { jobs: JobPost[]; businessName: string }) {
  if (jobs.length === 0) {
    return <p className="text-sm text-muted-foreground">No open positions at {businessName} right now.</p>;
  }

  return (
    <div className="space-y-3">
      {jobs.map((j) => {
        const pay = salary(j);
        const contactHref = j.applyContact
          ? j.applyContact.includes("@")
            ? `mailto:${j.applyContact}?subject=${encodeURIComponent(`Application: ${j.title}`)}`
            : `tel:${j.applyContact.replace(/\s/g, "")}`
          : null;

        return (
          <article
            key={j.id}
            className="rounded-2xl border border-border bg-background p-4 transition duration-300 hover:border-brand/50 hover:shadow-soft"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-0.5 text-xs font-semibold text-brand-foreground">
                <Briefcase className="h-3 w-3" /> {typeLabels[j.employmentType] ?? j.employmentType}
              </span>
              {j.location && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {j.location}
                </span>
              )}
              {pay && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Banknote className="h-3 w-3" /> {pay}
                </span>
              )}
              {j.closesAt && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarClock className="h-3 w-3" /> Closes {j.closesAt}
                </span>
              )}
            </div>
            <h3 className="mt-2 font-display text-lg font-bold">{j.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{j.description}</p>
            {contactHref && (
              <a
                href={contactHref}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition hover:bg-brand hover:text-brand-foreground"
              >
                Apply now
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}
