import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function Problem() {
  return (
    <Section>
      <Container size="md" className="text-center">
        <FadeIn>
          <Eyebrow>THE PROBLEM</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Most businesses don&apos;t lack effort. They lack systems.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Operations are spread across spreadsheets, message threads, paper registers, and disconnected tools.
            Information is entered more than once, reports are assembled by hand, and decisions wait on someone
            to compile the numbers. The cost is rarely visible on a balance sheet, but it compounds every single
            day.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
