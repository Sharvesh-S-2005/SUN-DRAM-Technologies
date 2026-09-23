import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import type { ReactNode } from "react";

type ClosingCtaProps = {
  heading: string;
  body?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
};

export function ClosingCta({ heading, body, ctaLabel, ctaHref }: ClosingCtaProps) {
  return (
    <Section className="pb-32">
      <Container size="md" className="text-center">
        <FadeIn>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{heading}</h2>
          {body && <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{body}</p>}
          <div className="mt-8 flex justify-center">
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
