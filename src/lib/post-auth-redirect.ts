import { supabase } from "@/integrations/supabase/client";

export type PostAuthDestination = "/admin" | "/dashboard" | "/register";

/**
 * Decide where a user lands right after signing in:
 * - admins go to the admin dashboard
 * - owners with at least one listing go to their dashboard
 * - everyone else goes to the business registration/editor flow
 */
export async function resolvePostAuthDestination(
  userId: string,
): Promise<PostAuthDestination> {
  try {
    const [roles, businesses] = await Promise.all([
      supabase.from("user_roles").select("role").eq("user_id", userId),
      supabase.from("businesses").select("id").eq("owner_id", userId).limit(1),
    ]);

    if (roles.data?.some((r) => r.role === "admin")) return "/admin";
    if (businesses.data && businesses.data.length > 0) return "/dashboard";
    return "/register";
  } catch {
    return "/dashboard";
  }
}
