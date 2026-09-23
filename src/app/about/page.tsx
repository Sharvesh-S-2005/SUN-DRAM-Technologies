import type { Metadata } from "next";
import { AboutHeader } from "@/components/sections/about/AboutHeader";
import { AboutCredentials } from "@/components/sections/about/AboutCredentials";
import { WhoWeAre } from "@/components/sections/about/WhoWeAre";
import { Beliefs } from "@/components/sections/about/Beliefs";
import { HowWeWork } from "@/components/sections/about/HowWeWork";
import { FounderNote } from "@/components/sections/about/FounderNote";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "An MSME-registered, government-accelerated technology company building operational software for Indian businesses.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutCredentials />
      <WhoWeAre />
      <Beliefs />
      <HowWeWork />
      <FounderNote />
      <ClosingCta heading="Let's look at your operations together." ctaLabel="Get in Touch" ctaHref="/contact" />
    </>
  );
}
