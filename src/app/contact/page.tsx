import type { Metadata } from "next";
import { ContactHeader } from "@/components/sections/contact/ContactHeader";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak to SUN-DRAM Technologies about your operational software requirements. Call +91 63697 66990.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <Section className="pt-0 pb-32">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <ContactChannels />
            </div>
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
