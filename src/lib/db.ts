import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client using the service role key — never import this from
 * a "use client" file. Enquiry writes/reads go through API routes only.
 */
export function getServiceClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).");
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export type EnquiryStatus = "new" | "contacted" | "closed";

export type Enquiry = {
  id: string;
  name: string | null;
  phone: string;
  description: string;
  status: EnquiryStatus;
  source_page: string;
  ip_hash: string | null;
  user_agent: string | null;
  created_at: string;
};
