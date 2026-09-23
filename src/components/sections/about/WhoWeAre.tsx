import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function WhoWeAre() {
  return (
    <Section>
      <Container size="md" className="text-center">
        <FadeIn>
          <Eyebrow>WHO WE ARE</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Engineers who start with the operation, not the software.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            We are a team of engineers and designers who build operational software for Indian businesses. Our
            work begins on the floor — with the registers, the spreadsheets, the handovers, and the workarounds
            that keep an organisation moving. Only once we understand the operation do we design the system that
            supports it.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            That sequence matters. Software that ignores how work is genuinely done gets abandoned within
            months, regardless of how capable it looks in a demonstration. We build systems that teams choose to
            use.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
