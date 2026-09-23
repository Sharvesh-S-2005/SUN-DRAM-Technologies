import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "accent" | "muted";
  className?: string;
  as?: "p" | "span";
};

const TONE_CLASSES = {
  accent: "text-cyan-300/70",
  muted: "text-zinc-500",
};

export function Eyebrow({ children, tone = "accent", className = "", as = "p" }: EyebrowProps) {
  const Tag = as;
  return (
    <Tag className={`text-sm uppercase tracking-[0.45em] ${TONE_CLASSES[tone]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
