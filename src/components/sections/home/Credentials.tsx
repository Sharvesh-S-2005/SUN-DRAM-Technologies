import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";

const CREDENTIAL_CARDS = [
  {
    title: "MSME Registered",
    body: "Formally registered under India's Ministry of Micro, Small and Medium Enterprises, operating within a recognised and compliant framework.",
  },
  {
    title: "Government Accelerated",
    body: "Selected for a government-backed acceleration programme supporting the development of India's technology ecosystem.",
  },
];

export function Credentials() {
  return (
    <Section>
      <Container size="lg" className="text-center">
        <FadeIn>
          <Eyebrow>RECOGNITION</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Recognised and supported by national programmes.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {CREDENTIAL_CARDS.map((credential, index) => (
            <FadeIn key={credential.title} delay={index * 0.1}>
              <Card variant="strong" className="h-full">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{credential.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-300">{credential.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
