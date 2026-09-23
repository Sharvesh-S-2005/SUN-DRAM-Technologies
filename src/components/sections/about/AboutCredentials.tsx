import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";

const CREDENTIAL_CARDS = [
  {
    title: "MSME Registered",
    body: "SUN-DRAM Technologies is formally registered under India's Ministry of Micro, Small and Medium Enterprises. This recognition confirms our standing as a compliant, verifiable Indian enterprise and allows us to work confidently with organisations that require a registered and accountable technology partner.",
  },
  {
    title: "Government Accelerated",
    body: "SUN-DRAM has been selected into a government-backed acceleration programme supporting the growth of India's technology ecosystem. This backing reflects external validation of our technical capability and our commitment to building enduring, serious software.",
  },
];

export function AboutCredentials() {
  return (
    <Section className="pt-4">
      <Container size="lg" className="text-center">
        <FadeIn>
          <Eyebrow>RECOGNITION AND STANDING</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Formally recognised. Nationally supported.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {CREDENTIAL_CARDS.map((credential, index) => (
            <FadeIn key={credential.title} delay={index * 0.1}>
              <Card variant="strong" className="h-full">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{credential.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-300">{credential.body}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  TODO: registration / programme number — add once supplied by the owner.
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
