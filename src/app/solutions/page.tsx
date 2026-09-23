import type { Metadata } from "next";
import { SolutionsHeader } from "@/components/sections/solutions/SolutionsHeader";
import { SolutionsList } from "@/components/sections/solutions/SolutionsList";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "ERP development, inventory management, digital presence, LMS, payroll, marketing automation, and AI integration.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHeader />
      <SolutionsList />
      <ClosingCta
        heading="Not sure which of these you need?"
        body="Most organisations begin with a single module and expand as the benefit becomes clear. Describe your current operations and we will recommend a practical starting point."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
