import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Solution } from "@/content/solutions";

export function SolutionEntry({ solution }: { solution: Solution }) {
  return (
    <FadeIn>
      <Card className="!p-8 sm:!p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">{solution.index}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white">{solution.title}</h2>
            <p className="mt-3 text-lg leading-7 text-zinc-300">{solution.promise}</p>
            <p className="mt-4 text-base leading-7 text-zinc-400">{solution.description}</p>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-6 text-cyan-100/90">
              {solution.outcome}
            </p>
          </div>

          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {solution.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-zinc-300"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </FadeIn>
  );
}
