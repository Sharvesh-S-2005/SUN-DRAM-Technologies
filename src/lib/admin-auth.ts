import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "sundram_admin";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function expectedCookieValue(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(password).digest("hex");
}

export function verifyAdminPassword(candidate: string): boolean {
  const expected = expectedCookieValue();
  if (!expected) return false;

  const candidateHash = createHash("sha256").update(candidate).digest("hex");
  const a = Buffer.from(candidateHash);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function adminCookieValue(): string | null {
  return expectedCookieValue();
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const expected = expectedCookieValue();
  if (!expected) return false;

  const cookieStore = await cookies();
  const cookie = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!cookie) return false;

  const a = Buffer.from(cookie);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const ADMIN_COOKIE_MAX_AGE = COOKIE_MAX_AGE_SECONDS;
