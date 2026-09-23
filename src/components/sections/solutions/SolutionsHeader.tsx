import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function SolutionsHeader() {
  return (
    <Section className="pb-12 pt-20">
      <Container size="md" className="text-center">
        <FadeIn>
          <Eyebrow>SOLUTIONS</Eyebrow>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Systems that carry the weight of daily operations.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Each capability can be delivered on its own or combined into a single connected platform. Every
            module shares one data layer, so your business runs on one version of the truth.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
