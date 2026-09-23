import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center text-zinc-500">
      <p>Admin — content pending Phase 4.</p>
    </div>
  );
}
