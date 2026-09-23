"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/nav";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-30 flex flex-col bg-black/95 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-18 shrink-0" aria-hidden="true" />
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-3xl font-semibold tracking-[-0.02em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded ${
                      isActive ? "text-cyan-300" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <Button href="/contact" variant="primary" className="mt-4">
              Get in Touch
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
