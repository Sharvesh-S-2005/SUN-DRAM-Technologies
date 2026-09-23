import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:px-10 lg:px-16 ${className}`.trim()}>
      {children}
    </section>
  );
}
