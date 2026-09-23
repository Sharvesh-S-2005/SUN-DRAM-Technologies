import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getServiceClient, type Enquiry } from "@/lib/db";
import { LoginForm } from "@/components/admin/LoginForm";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return <LoginForm />;
  }

  const leads = await fetchLeads();

  if (leads === null) {
    return (
      <Section>
        <Container size="md" className="text-center text-zinc-400">
          <p>
            Database is not configured yet. Set <code className="text-cyan-300">SUPABASE_URL</code> and{" "}
            <code className="text-cyan-300">SUPABASE_SERVICE_ROLE_KEY</code> to view enquiries.
          </p>
        </Container>
      </Section>
    );
  }

  return <LeadsTable initialLeads={leads} />;
}

async function fetchLeads(): Promise<Enquiry[] | null> {
  try {
    const client = getServiceClient();
    const { data, error } = await client
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return (data ?? []) as Enquiry[];
  } catch {
    return null;
  }
}
