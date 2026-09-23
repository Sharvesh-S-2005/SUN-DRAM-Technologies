import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function FounderNote() {
  return (
    <Section>
      <Container size="lg">
        <FadeIn>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl lg:p-14">
            <Eyebrow tone="muted">FROM THE FOUNDER</Eyebrow>
            <blockquote className="mt-10 max-w-4xl text-3xl font-light leading-[1.2] tracking-[-0.02em] text-white sm:text-4xl">
              &ldquo;Most businesses we meet are not short on discipline or effort. They are held back by
              systems that were never designed for them. Our work is to close that gap — with software that is
              dependable, understood by the people using it, and built to last longer than the problem it was
              hired to solve.&rdquo;
            </blockquote>
            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-lg font-medium text-white">Sharvesh Senthilkumar</p>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-zinc-500">
                Founder &amp; CEO, SUN-DRAM Technologies
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
