import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 text-sm text-zinc-500 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">SUN-DRAM</p>
          <p className="mt-4 max-w-xs text-zinc-400">
            Building software that helps businesses run better.
          </p>
        </div>

        <nav className="flex flex-col gap-3 sm:items-center" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 sm:items-end">
          <a href="tel:+916369766990" className="transition hover:text-white">
            +91 63697 66990
          </a>
          <a href="mailto:founder@sundram.tech" className="transition hover:text-white">
            founder@sundram.tech
          </a>
          <div className="mt-2 flex flex-wrap gap-2 sm:justify-end">
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
              MSME Registered
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
              Government Accelerated
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-600">
        © 2026 SUN-DRAM Technologies. All rights reserved.
      </div>
    </footer>
  );
}
