import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type StoreProduct = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  currency: string;
  image: string | null;
  category: string | null;
};

export type JobPost = {
  id: string;
  title: string;
  description: string;
  employmentType: string;
  location: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  currency: string;
  applyContact: string | null;
  closesAt: string | null;
  createdAt: string;
};

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const getBusinessStorefront = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => ({ slug: String(data.slug).slice(0, 120) }))
  .handler(async ({ data }): Promise<{ products: StoreProduct[]; jobs: JobPost[] }> => {
    const supabase = publicClient();

    const { data: biz } = await supabase
      .from("businesses")
      .select("id")
      .eq("slug", data.slug)
      .maybeSingle();

    if (!biz) return { products: [], jobs: [] };

    const [{ data: products }, { data: jobs }] = await Promise.all([
      supabase
        .from("products")
        .select("id, name, description, price, currency, image, category")
        .eq("business_id", biz.id)
        .order("sort_order", { ascending: true }),
      supabase
        .from("job_posts")
        .select(
          "id, title, description, employment_type, location, salary_min, salary_max, currency, apply_contact, closes_at, created_at",
        )
        .eq("business_id", biz.id)
        .order("created_at", { ascending: false }),
    ]);

    return {
      products: (products ?? []).map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: Number(p.price),
        currency: p.currency,
        image: p.image,
        category: p.category,
      })),
      jobs: (jobs ?? []).map((j) => ({
        id: j.id,
        title: j.title,
        description: j.description,
        employmentType: j.employment_type,
        location: j.location,
        salaryMin: j.salary_min === null ? null : Number(j.salary_min),
        salaryMax: j.salary_max === null ? null : Number(j.salary_max),
        currency: j.currency,
        applyContact: j.apply_contact,
        closesAt: j.closes_at,
        createdAt: j.created_at,
      })),
    };
  });
