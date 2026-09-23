import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";

const PRINCIPLES = [
  {
    id: "01",
    title: "Clarity over complexity",
    body: "A system is successful when the person using it every day finds it obvious. Sophistication belongs in the engineering, not in the interface.",
  },
  {
    id: "02",
    title: "One source of truth",
    body: "Data entered once should be correct everywhere. Every module we build shares a single foundation, so reports never contradict each other.",
  },
  {
    id: "03",
    title: "Built to be owned",
    body: "You own your data, your processes, and your system. We build for independence, not dependency.",
  },
  {
    id: "04",
    title: "Support past launch",
    body: "Deployment is the beginning of the relationship. We stay engaged as the business changes and the system evolves with it.",
  },
];

export function Beliefs() {
  return (
    <Section>
      <Container size="xl">
        <FadeIn className="max-w-2xl">
          <Eyebrow>WHAT WE BELIEVE</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Four principles that shape everything we deliver.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <FadeIn key={principle.id} delay={(index % 2) * 0.1}>
              <Card className="h-full">
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">{principle.id}</p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white">{principle.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{principle.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
