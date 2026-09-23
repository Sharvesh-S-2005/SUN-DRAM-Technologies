"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const CREDENTIALS = ["MSME Registered", "Government Accelerated", "Designed and Built in India"];

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        });
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ x: pointer.x * 24, y: pointer.y * 24, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.4 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1200 800" className="h-full w-full opacity-40">
          <g stroke="rgba(255,255,255,0.14)" strokeWidth="1">
            <path d="M120 180 C300 80, 480 120, 620 260 S900 420, 1080 320" />
            <path d="M170 600 C320 470, 470 480, 610 590 S930 700, 1100 550" />
            <path d="M250 120 L380 280" />
            <path d="M760 140 L900 260" />
            <path d="M520 420 L720 520" />
          </g>
          {[...Array(18)].map((_, index) => (
            <circle key={index} cx={120 + index * 60} cy={120 + ((index * 37) % 280)} r="2.2" fill="#6ee7f9" opacity="0.75" />
          ))}
        </svg>
      </motion.div>

      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(18)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(110,231,249,0.8)]"
            style={{ left: `${8 + index * 5}%`, top: `${16 + ((index * 7) % 70)}%` }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 2.6 + (index % 5) * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl text-center sm:text-left">
        <motion.p
          className="mb-5 text-[0.7rem] uppercase tracking-[0.55em] text-cyan-300/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          SUN-DRAM Technologies
        </motion.p>
        <motion.h1
          className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
          initial={{ opacity: 0, y: 30, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Building Software That Helps Businesses Run Better
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We design and deploy centralised digital systems — ERP, inventory, payroll, learning, and AI — that
          replace scattered tools and manual processes with one dependable platform.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button href="/solutions" variant="primary">
            Explore Solutions
          </Button>
          <Button href="/contact" variant="secondary">
            Talk to Us
          </Button>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {CREDENTIALS.map((credential, index) => (
            <span key={credential} className="flex items-center gap-5">
              {index > 0 && <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />}
              {credential}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
