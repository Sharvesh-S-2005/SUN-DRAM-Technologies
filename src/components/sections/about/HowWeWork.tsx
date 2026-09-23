import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

const STEPS = [
  {
    title: "Discover",
    body: "We study your current operations, document existing workflows, and identify where time, accuracy, and money are being lost.",
  },
  {
    title: "Design",
    body: "We define the system architecture, module scope, and delivery plan, with the commercial and time commitment stated clearly upfront.",
  },
  {
    title: "Deliver",
    body: "We build and deploy in defined stages, so value arrives early and the system is validated against reality as it grows.",
  },
  {
    title: "Support",
    body: "We migrate your records, train your team, and remain available as your operations evolve.",
  },
];

export function HowWeWork() {
  return (
    <Section>
      <Container size="xl">
        <FadeIn className="max-w-2xl">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            A defined path from first conversation to working system.
          </h2>
        </FadeIn>

        <div className="relative mt-14 flex flex-col gap-10 lg:flex-row lg:gap-6" role="list">
          <div
            className="absolute left-4 top-0 h-full w-px bg-white/10 lg:left-0 lg:top-4 lg:h-px lg:w-full"
            aria-hidden="true"
          />
          {STEPS.map((step, index) => (
            <FadeIn
              key={step.title}
              delay={index * 0.1}
              className="relative flex-1 pl-12 lg:pl-0 lg:pt-12"
            >
              <div
                role="listitem"
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 bg-cyan-300/20 text-cyan-300 lg:left-1/2 lg:-translate-x-1/2"
              >
                <span className="text-[0.65rem]">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white lg:text-center">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400 lg:text-center">{step.body}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
