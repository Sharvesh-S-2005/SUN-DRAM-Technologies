import { NextResponse } from "next/server";
import { getServiceClient, type EnquiryStatus } from "@/lib/db";
import { isAdminAuthenticated } from "@/lib/admin-auth";

const VALID_STATUSES: EnquiryStatus[] = ["new", "contacted", "closed"];

export async function PATCH(request: Request, ctx: RouteContext<"/api/admin/leads/[id]">) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await ctx.params;
  const body = (await request.json().catch(() => null)) as { status?: unknown } | null;
  const status = body?.status;

  if (typeof status !== "string" || !VALID_STATUSES.includes(status as EnquiryStatus)) {
    return NextResponse.json({ success: false, error: "Invalid status." }, { status: 400 });
  }

  const client = getServiceClient();
  const { error } = await client.from("enquiries").update({ status }).eq("id", id);

  if (error) {
    return NextResponse.json({ success: false, error: "Could not update status." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
