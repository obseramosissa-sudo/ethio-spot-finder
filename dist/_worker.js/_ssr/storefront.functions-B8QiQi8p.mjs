import { i as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-CJQVVjBW.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/storefront.functions-B8QiQi8p.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function publicClient() {
	const key = processModule.env["SUPABASE_PUBLISHABLE_KEY"];
	return createClient(processModule.env["SUPABASE_URL"], key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const h = new Headers(init?.headers);
			if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
			h.set("apikey", key);
			return fetch(input, {
				...init,
				headers: h
			});
		} }
	});
}
var getBusinessStorefront_createServerFn_handler = createServerRpc({
	id: "f28b3f7e44324071ab1f777257fd8eb0e4daee10b6e901fb7ac6a58f609cd98e",
	name: "getBusinessStorefront",
	filename: "src/lib/storefront.functions.ts"
}, (opts) => getBusinessStorefront.__executeServer(opts));
var getBusinessStorefront = createServerFn({ method: "GET" }).inputValidator((data) => ({ slug: String(data.slug).slice(0, 120) })).handler(getBusinessStorefront_createServerFn_handler, async ({ data }) => {
	const supabase = publicClient();
	const { data: biz } = await supabase.from("businesses").select("id").eq("slug", data.slug).maybeSingle();
	if (!biz) return {
		products: [],
		jobs: []
	};
	const [{ data: products }, { data: jobs }] = await Promise.all([supabase.from("products").select("id, name, description, price, currency, image, category").eq("business_id", biz.id).order("sort_order", { ascending: true }), supabase.from("job_posts").select("id, title, description, employment_type, location, salary_min, salary_max, currency, apply_contact, closes_at, created_at").eq("business_id", biz.id).order("created_at", { ascending: false })]);
	return {
		products: (products ?? []).map((p) => ({
			id: p.id,
			name: p.name,
			description: p.description,
			price: Number(p.price),
			currency: p.currency,
			image: p.image,
			category: p.category
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
			createdAt: j.created_at
		}))
	};
});
//#endregion
export { getBusinessStorefront_createServerFn_handler };
