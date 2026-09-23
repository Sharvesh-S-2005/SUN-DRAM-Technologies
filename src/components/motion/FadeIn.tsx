"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * The site's existing whileInView fade-up pattern, extracted so it isn't
 * hand-copied per section. Honors prefers-reduced-motion (Section 8.2).
 */
export function FadeIn({ children, className = "", delay = 0, y = 24 }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
