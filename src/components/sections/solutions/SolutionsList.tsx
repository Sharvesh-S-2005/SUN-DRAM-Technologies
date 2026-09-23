import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SolutionEntry } from "@/components/sections/solutions/SolutionEntry";
import { solutions } from "@/content/solutions";

export function SolutionsList() {
  return (
    <Section className="pt-0">
      <Container size="xl" className="flex flex-col gap-6">
        {solutions.map((solution) => (
          <SolutionEntry key={solution.slug} solution={solution} />
        ))}
      </Container>
    </Section>
  );
}
