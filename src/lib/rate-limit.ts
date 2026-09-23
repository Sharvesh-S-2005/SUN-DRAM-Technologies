import { createHash } from "crypto";
import { getServiceClient } from "@/lib/db";

const MAX_SUBMISSIONS_PER_HOUR = 5;

export function hashIp(ip: string): string {
  const salt = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "sundram-rate-limit";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Durable, serverless-safe rate limit backed by the enquiries table itself. */
export async function isRateLimited(ipHash: string): Promise<boolean> {
  const client = getServiceClient();
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

  const { count, error } = await client
    .from("enquiries")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", oneHourAgo);

  if (error) {
    // Fail open on infra errors so a DB hiccup never blocks legitimate submissions.
    return false;
  }

  return (count ?? 0) >= MAX_SUBMISSIONS_PER_HOUR;
}
