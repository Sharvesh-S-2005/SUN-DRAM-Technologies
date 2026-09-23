import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** "strong" is reserved for the credential cards — the heaviest glow in the system. */
  variant?: "default" | "strong";
};

const VARIANT_CLASSES = {
  default: "border-white/10 bg-white/5 backdrop-blur-xl",
  strong:
    "border-cyan-400/30 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.16)]",
};

export function Card({ children, className = "", variant = "default" }: CardProps) {
  return (
    <div className={`rounded-[2rem] border p-8 ${VARIANT_CLASSES[variant]} ${className}`.trim()}>
      {children}
    </div>
  );
}
