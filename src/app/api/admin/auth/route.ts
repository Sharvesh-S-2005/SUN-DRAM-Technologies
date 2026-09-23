import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_MAX_AGE, ADMIN_COOKIE_NAME, adminCookieValue, verifyAdminPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: unknown } | null;
  const password = typeof body?.password === "string" ? body.password : "";

  if (!password || !verifyAdminPassword(password)) {
    return NextResponse.json({ success: false, error: "Incorrect password." }, { status: 401 });
  }

  const cookieValue = adminCookieValue();
  if (!cookieValue) {
    return NextResponse.json({ success: false, error: "Admin access is not configured." }, { status: 500 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });

  return NextResponse.json({ success: true });
}
