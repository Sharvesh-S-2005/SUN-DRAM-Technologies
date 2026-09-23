"use client";

import { useMemo, useState } from "react";
import type { Enquiry, EnquiryStatus } from "@/lib/db";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const STATUS_OPTIONS: EnquiryStatus[] = ["new", "contacted", "closed"];

function formatIst(isoDate: string) {
  return new Date(isoDate).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function toCsv(rows: Enquiry[]) {
  const header = ["Date (IST)", "Name", "Phone", "Description", "Status"];
  const lines = rows.map((row) =>
    [formatIst(row.created_at), row.name ?? "", row.phone, row.description, row.status]
      .map((value) => `"${String(value).replace(/"/g, '""')}"`)
      .join(",")
  );
  return [header.join(","), ...lines].join("\n");
}

export function LeadsTable({ initialLeads }: { initialLeads: Enquiry[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [statusFilter, setStatusFilter] = useState<"all" | EnquiryStatus>("all");
  const [search, setSearch] = useState("");
  const [pendingId, setPendingId] = useState<string | null>(null);

  const unreadCount = useMemo(() => leads.filter((lead) => lead.status === "new").length, [leads]);

  const visibleLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (!query) return true;
      return (
        (lead.name ?? "").toLowerCase().includes(query) ||
        lead.phone.toLowerCase().includes(query) ||
        lead.description.toLowerCase().includes(query)
      );
    });
  }, [leads, statusFilter, search]);

  async function updateStatus(id: string, status: EnquiryStatus) {
    setPendingId(id);
    const previous = leads;
    setLeads((current) => current.map((lead) => (lead.id === id ? { ...lead, status } : lead)));

    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("failed");
    } catch {
      setLeads(previous);
    } finally {
      setPendingId(null);
    }
  }

  function exportCsv() {
    const csv = toCsv(visibleLeads);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Section>
      <Container size="xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">Enquiries</h1>
            <p className="mt-1 text-sm text-zinc-400">
              <span className="text-cyan-300">{unreadCount}</span> new
            </p>
          </div>
          <button
            type="button"
            onClick={exportCsv}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-cyan-400/40"
          >
            Export CSV
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as "all" | EnquiryStatus)}
            className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400/60"
          >
            <option value="all">All statuses</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name, phone, description"
            className="min-w-[240px] flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400/60"
          />
        </div>

        <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-white/10">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-zinc-500">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {visibleLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-white/5 align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-zinc-400">{formatIst(lead.created_at)}</td>
                  <td className="px-4 py-3 text-white">{lead.name || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <a href={`tel:${lead.phone}`} className="text-cyan-300 hover:underline">
                      {lead.phone}
                    </a>
                  </td>
                  <td className="max-w-md px-4 py-3 text-zinc-300">{lead.description}</td>
                  <td className="px-4 py-3">
                    <select
                      value={lead.status}
                      disabled={pendingId === lead.id}
                      onChange={(event) => updateStatus(lead.id, event.target.value as EnquiryStatus)}
                      className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white outline-none focus:border-cyan-400/60 disabled:opacity-50"
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {visibleLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-zinc-500">
                    No enquiries match the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
