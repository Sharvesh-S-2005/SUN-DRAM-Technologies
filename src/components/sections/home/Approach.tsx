import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";

const APPROACH_CARDS = [
  {
    id: "01",
    title: "Understand before building",
    body: "We map your existing workflow, identify where time and accuracy are lost, and define the system around your operations rather than forcing your operations into generic software.",
  },
  {
    id: "02",
    title: "Build on a single foundation",
    body: "Every module — inventory, payroll, learning, reporting — runs on one shared data layer, so a figure entered once is accurate everywhere it appears.",
  },
  {
    id: "03",
    title: "Deploy, train, and support",
    body: "We handle migration, train your team on the system they will actually use, and stay engaged after launch to refine it as your business grows.",
  },
];

export function Approach() {
  return (
    <Section>
      <Container size="xl">
        <FadeIn className="max-w-2xl">
          <Eyebrow>OUR APPROACH</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            One connected system, built around how your business actually works.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {APPROACH_CARDS.map((card, index) => (
            <FadeIn key={card.id} delay={index * 0.1}>
              <Card className="h-full">
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">{card.id}</p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{card.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
