import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "An MSME-registered, government-accelerated technology company building operational software for Indian businesses.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center text-zinc-500">
      <p>About — content pending Phase 3.</p>
    </div>
  );
}
