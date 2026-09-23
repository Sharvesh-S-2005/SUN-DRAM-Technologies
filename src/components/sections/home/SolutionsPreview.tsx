import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { solutions } from "@/content/solutions";

export function SolutionsPreview() {
  return (
    <Section>
      <Container size="xl">
        <FadeIn className="max-w-2xl">
          <Eyebrow>WHAT WE BUILD</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Seven capabilities. One platform.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <FadeIn key={solution.slug} delay={(index % 3) * 0.08}>
              <Card className="h-full !p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">{solution.index}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{solution.promise}</p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:justify-start">
          <Button href="/solutions" variant="secondary">
            View All Solutions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
