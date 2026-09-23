"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Makes every Framer Motion component in the tree honor
 * prefers-reduced-motion automatically (Section 8.2), without needing a
 * useReducedMotion() check hand-added to each animated component.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
