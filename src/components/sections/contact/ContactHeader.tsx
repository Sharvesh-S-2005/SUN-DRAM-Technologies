import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactHeader() {
  return (
    <Section className="pb-8 pt-20">
      <Container size="md" className="text-center">
        <FadeIn>
          <Eyebrow>CONTACT</Eyebrow>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Tell us what you&apos;re trying to fix.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Share your phone number and a short description of your requirement. We review every enquiry
            directly and respond with a practical assessment.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
