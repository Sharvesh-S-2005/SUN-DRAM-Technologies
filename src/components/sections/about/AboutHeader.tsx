import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutHeader() {
  return (
    <Section className="pb-8 pt-20">
      <Container size="md" className="text-center">
        <FadeIn>
          <Eyebrow>ABOUT SUN-DRAM</Eyebrow>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            A technology company built around the way businesses actually operate.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            SUN-DRAM Technologies builds software for organisations that have outgrown spreadsheets and manual
            processes but have not found a system that fits the way they work.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
