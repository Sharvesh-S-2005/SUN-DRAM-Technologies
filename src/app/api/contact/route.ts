import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/db";
import { validateContactForm, normalizePhone } from "@/lib/validation";
import { getClientIp, hashIp, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  let body: {
    name?: unknown;
    phone?: unknown;
    description?: unknown;
    company_website?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const honeypot = typeof body.company_website === "string" ? body.company_website : "";
  if (honeypot.trim().length > 0) {
    // Silent honeypot rejection: report success, persist nothing.
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";

  const errors = validateContactForm({ name, phone, description, company_website: "" });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, error: "Please check the fields and try again." }, { status: 400 });
  }

  const ip = getClientIp(request);
  const ipHash = hashIp(ip);

  if (await isRateLimited(ipHash)) {
    return NextResponse.json({ success: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const normalizedPhone = normalizePhone(phone).replace(/^\+/, "");
  const userAgent = (request.headers.get("user-agent") ?? "").slice(0, 255);

  try {
    const client = getServiceClient();
    const { error } = await client.from("enquiries").insert({
      name: name || null,
      phone: normalizedPhone,
      description,
      status: "new",
      source_page: "/contact",
      ip_hash: ipHash,
      user_agent: userAgent || null,
    });

    if (error) {
      return NextResponse.json({ success: false, error: "Could not save your enquiry." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, error: "Could not save your enquiry." }, { status: 500 });
  }
}
