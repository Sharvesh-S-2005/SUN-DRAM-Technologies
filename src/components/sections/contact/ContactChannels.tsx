import { Card } from "@/components/ui/Card";
import { PhoneIcon, EnvelopeIcon } from "@/components/sections/contact/icons";

export function ContactChannels() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="!p-6">
        <a href="tel:+916369766990" className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
          >
            <PhoneIcon />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.3em] text-zinc-500">Call us</span>
            <span className="block text-lg text-white">+91 63697 66990</span>
          </span>
        </a>
      </Card>

      <Card className="!p-6">
        <a href="mailto:founder@sundram.tech" className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
          >
            <EnvelopeIcon />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.3em] text-zinc-500">Email us</span>
            <span className="block text-lg text-white">founder@sundram.tech</span>
          </span>
        </a>
      </Card>

      <p className="px-2 text-sm text-zinc-500">We typically respond within one business day.</p>
    </div>
  );
}
