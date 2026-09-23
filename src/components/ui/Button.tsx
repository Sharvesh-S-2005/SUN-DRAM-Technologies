import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105",
  secondary:
    "rounded-full border border-cyan-400/40 bg-white/5 px-7 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.14)] backdrop-blur transition hover:scale-105",
};

export function Button({ href, children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const classes = `${VARIANT_CLASSES[variant]} ${className}`.trim();
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
