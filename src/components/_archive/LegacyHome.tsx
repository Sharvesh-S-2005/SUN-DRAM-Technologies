"use client";

// Archived: the pre-redesign "Infrastructure Intelligence" cinematic
// single-page site (docs/redesign.md Section 2.2). Unrouted — kept for
// recovery only. Delete in Phase 6 once the new site is approved.

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const timelineNodes = [
  "Operating Systems",
  "Internet",
  "Cloud",
  "Artificial Intelligence",
  "Infrastructure Intelligence",
];

const cards = [
  {
    id: "01 / ENGINE",
    title: "AI Builds Software.",
    copy:
      "The frontier of intelligence is shifting from creation to control, where every deployment needs a living operating layer.",
  },
  {
    id: "02 / BOTTLENECK",
    title: "Humans Operate Infrastructure.",
    copy:
      "The complexity of production environments has outgrown human-scale orchestration and cannot be managed by intuition alone.",
  },
  {
    id: "03 / AUTONOMY",
    title: "Infrastructure Intelligence Operates Infrastructure Autonomously.",
    copy:
      "The next platform layer will reason, adapt, and govern runtime systems before incidents become visible to the business.",
  },
];

const capabilities = [
  { title: "NGINX / Reverse Proxy", label: "Edge routing" },
  { title: "Load Balancing / Policies", label: "Traffic control" },
  { title: "TLS / Certificates", label: "Secure trust" },
];

const roadmap = [
  "Flint V1",
  "Application Load Balancers",
  "WAF",
  "Networking",
  "Traffic Engineering",
  "Compliance",
  "Multi Cloud",
  "Self Healing",
  "Infrastructure Intelligence",
];

const convictionLines = [
  "Operating Systems abstracted hardware.",
  "Cloud abstracted servers.",
  "Artificial Intelligence abstracts software creation.",
  "Infrastructure Intelligence abstracts software operations.",
  "This is why SUN-DRAM exists.",
];

export default function LegacyHome() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const roadmapRef = useRef<HTMLDivElement | null>(null);
  const convictionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const timelineLine = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress: roadmapProgress } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end start"],
  });
  const roadmapFill = useTransform(roadmapProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress: convictionProgress } = useScroll({
    target: convictionRef,
    offset: ["start end", "end start"],
  });
  const convictionOpacity = useTransform(convictionProgress, [0, 0.2, 0.8, 1], [0.15, 1, 1, 0.2]);

  return (
    <main
      className="min-h-screen bg-black text-white"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({ x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 });
      }}
    >
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(76,201,240,0.16),transparent_45%)]" />
        <motion.div
          className="absolute inset-0"
          animate={{ x: pointer.x * 24, y: pointer.y * 24, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.4 }}
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
        <div className="absolute inset-0">
          {[...Array(18)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(110,231,249,0.8)]"
              style={{ left: `${8 + index * 5}%`, top: `${16 + (index * 7) % 70}%` }}
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
            className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 30, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We&apos;re Building Infrastructure Intelligence.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The next major computing layer after Artificial Intelligence.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#vision" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105">
              Read the Vision
            </a>
            <a href="#flint" className="rounded-full border border-cyan-400/40 bg-white/5 px-7 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.14)] backdrop-blur transition hover:scale-105">
              Explore Flint
            </a>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-5xl text-center">
          <motion.p
            className="mb-8 text-sm uppercase tracking-[0.45em] text-zinc-500"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            The paradigm shift
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl font-light uppercase tracking-[0.4em] text-zinc-500 sm:text-4xl">
              AI changed software development.
            </p>
            <div className="my-7 text-5xl text-cyan-300 sm:text-6xl">↓</div>
            <p className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
              Infrastructure Intelligence will change software operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={timelineRef} className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">The macro evolution</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Computing layers now converge into a new operating frontier.
            </h2>
          </div>
          <div className="relative mt-8 flex flex-col gap-8 sm:gap-6">
            <motion.div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-6" style={{ scaleY: timelineLine }} />
            {timelineNodes.map((node, index) => {
              const active = index <= Math.round(timelineProgress.get() * (timelineNodes.length - 1));
              return (
                <motion.div
                  key={node}
                  className="relative flex items-center gap-5"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border ${active ? "border-cyan-300 bg-cyan-300/20 text-cyan-300" : "border-white/20 bg-black text-white/50"}`}>
                    <span className="text-[0.65rem]">0{index + 1}</span>
                  </div>
                  <div className={`rounded-full border px-4 py-2 text-sm backdrop-blur ${active ? "border-cyan-400/40 bg-cyan-400/10 text-white" : "border-white/10 bg-white/5 text-zinc-400"}`}>
                    {node}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">Architecture over raw code</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                A new layer sits between applications and infrastructure.
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_60%)]" />
              <div className="relative flex flex-col items-center gap-6 text-center">
                <div className="text-xs uppercase tracking-[0.5em] text-zinc-400">Applications</div>
                <div className="h-12 w-full rounded-full border border-white/10 bg-black/40" />
                <div className="relative w-full rounded-[1.5rem] border border-cyan-400/30 bg-black/60 px-6 py-8 shadow-[0_0_80px_rgba(34,211,238,0.16)]">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.12),transparent)]" />
                  <p className="text-xs uppercase tracking-[0.45em] text-cyan-300/70">Infrastructure Intelligence</p>
                  <div className="mt-5 h-20 rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10" />
                  <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
                    <span className="rounded-full border border-white/10 px-3 py-2">AWS</span>
                    <span className="rounded-full border border-white/10 px-3 py-2">Azure</span>
                    <span className="rounded-full border border-white/10 px-3 py-2">Google Cloud</span>
                  </div>
                </div>
                <div className="h-4 w-24 rounded-full bg-white/10" />
                <div className="text-xs uppercase tracking-[0.5em] text-zinc-400">Production Infrastructure</div>
                <div className="mt-2 flex w-full justify-center gap-3">
                  {[...Array(8)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="h-2.5 w-2.5 rounded-full bg-cyan-300/70"
                      animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.6 + index * 0.1, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {cards.map((card, index) => (
              <motion.article
                key={card.id}
                className={`rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl ${index === 2 ? "shadow-[0_0_70px_rgba(34,211,238,0.15)]" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.12, type: "spring", stiffness: 60, damping: 18 }}
              >
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">{card.id}</p>
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{card.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="flint" className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">Flint</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                The first Infrastructure Intelligence platform.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                A living control grid that senses production conditions, orchestrates policy, and turns every edge dependency into a programmable route.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 p-5"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 70, damping: 18 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)]"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500">Capability {index + 1}</p>
                  <h3 className="mt-6 text-xl font-semibold text-white">{capability.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400">{capability.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={roadmapRef} className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">The uncompromising roadmap</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              A deliberate build toward autonomous infrastructure.
            </h2>
          </div>
          <div className="relative mx-auto max-w-3xl">
            <motion.div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" style={{ scaleY: roadmapFill }} />
            <div className="space-y-5">
              {roadmap.map((milestone, index) => (
                <motion.div
                  key={milestone}
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0.3, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-300/60 bg-cyan-300/80" />
                  <div className={`rounded-full border px-5 py-3 text-sm ${index < 4 ? "border-cyan-400/30 bg-cyan-400/10 text-white" : "border-white/10 bg-white/5 text-zinc-400"}`}>
                    {milestone}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-6xl text-center">
          <motion.p
            className="text-4xl font-light leading-[1.1] text-zinc-300 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            The cloud made infrastructure programmable.
          </motion.p>
          <motion.p
            className="mt-6 text-5xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Infrastructure Intelligence makes it autonomous.
          </motion.p>
        </div>
      </section>

      <section ref={convictionRef} className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-5xl">
          <div className="space-y-8">
            {convictionLines.map((line, index) => {
              const isLast = index === convictionLines.length - 1;
              return (
                <motion.div
                  key={line}
                  className={`text-3xl leading-tight sm:text-5xl ${isLast ? "font-semibold text-cyan-300" : "font-light text-zinc-400"}`}
                  initial={{ opacity: 0.2, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  style={{ opacity: isLast ? convictionOpacity : 1 }}
                >
                  {line}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl lg:p-14">
          <p className="text-sm uppercase tracking-[0.45em] text-zinc-500">Founder&apos;s manifesto</p>
          <blockquote className="mt-10 max-w-4xl text-4xl font-light leading-[1.15] tracking-[-0.03em] text-white sm:text-6xl">
            We aren&apos;t building another DevOps platform. We&apos;re building Infrastructure Intelligence.
          </blockquote>
          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-lg font-medium text-white">Sharvesh Senthilkumar</p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-zinc-500">Founder &amp; CEO, SUN-DRAM Technologies</p>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="w-full max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">The inevitable future</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
            Developers build with AI. Operations teams run with Infrastructure Intelligence.
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-3xl font-light leading-tight text-zinc-300 sm:text-5xl">
            The future isn&apos;t AI-generated software. It&apos;s AI-built software running on Infrastructure Intelligence.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-zinc-500 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p> SUN-DRAM Technologies — Building Infrastructure Intelligence. (2026 Edition)</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">GitHub</a>
            <a href="#" className="transition hover:text-white">LinkedIn</a>
            <a href="#" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
