import { Hero } from "@/components/sections/home/Hero";
import { Problem } from "@/components/sections/home/Problem";
import { Approach } from "@/components/sections/home/Approach";
import { SolutionsPreview } from "@/components/sections/home/SolutionsPreview";
import { Credentials } from "@/components/sections/home/Credentials";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { OrganizationJsonLd } from "@/components/sections/home/OrganizationJsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <Problem />
      <Approach />
      <SolutionsPreview />
      <Credentials />
      <ClosingCta
        heading="Tell us what slows your business down."
        body="Share a short description of your operations and we will respond with a clear view of what can be improved, what it would take, and where to begin."
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
