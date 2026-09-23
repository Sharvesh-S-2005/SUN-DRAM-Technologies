# Codebase Audit — Pre-Redesign

Produced per `docs/redesign.md` Section 3.1, before any redesign code was written.

## 1. Framework and router

- **Next.js 16.2.10**, App Router (`src/app/`), TypeScript.
- React 19.2.4 / React DOM 19.2.4.
- No `middleware.ts`, no custom server. Single route today: `/` (`src/app/page.tsx`).
- `node_modules/next/dist/docs/` was consulted for this Next.js version's App Router conventions (route handlers, metadata, async `params`) since it postdates this model's training data, per `AGENTS.md`.

## 2. Styling system

- **Tailwind CSS v4** (`4.3.2`), CSS-first config — there is **no** `tailwind.config.*` file. Theme is declared directly in `src/app/globals.css` via `@theme inline`.
- Utility classes are used inline throughout `page.tsx`; there is no CSS Modules or styled-components usage.
- Token source: `src/app/globals.css`.

## 3. Design tokens (extracted, exact values)

| Token | Value | Source |
|---|---|---|
| Background base | `#000000` (`--background`, also `bg-black`) | globals.css / page.tsx |
| Primary text | `#f5f5f5` (`--foreground`), rendered as `text-white` (`#ffffff`) for headings | globals.css / page.tsx |
| Secondary / muted text | `text-zinc-300` `#d4d4d8`, `text-zinc-400` `#a1a1aa`, `text-zinc-500` `#71717a` (used for eyebrows, body copy, muted labels) | page.tsx |
| Accent | `text-cyan-300` `#67e8f9`, `text-cyan-400` / `border-cyan-400` `#22d3ee`, `text-cyan-100` `#cffafe` — plus alpha variants e.g. `rgba(34,211,238,0.16)`, `rgba(110,231,249,0.8)` | page.tsx |
| Border / hairline | `border-white/10`, `border-white/20`, `border-cyan-400/40`, `border-cyan-400/30` | page.tsx |
| Display font | Geist Sans (`next/font/google`, var `--font-geist-sans`) | layout.tsx |
| Body font | Geist Sans, monospace fallback `--font-geist-mono` (unused in current copy) | layout.tsx |
| Section vertical rhythm | `py-24` (6rem) with `px-6 sm:px-10 lg:px-16` horizontal | page.tsx (every `<section>`) |
| Container max-width | `max-w-2xl` / `max-w-5xl` / `max-w-6xl` / `max-w-7xl`, chosen per section content width | page.tsx |
| Radius scale | `rounded-full` (pills, badges, dots) · `rounded-[1.25rem]`–`rounded-[1.5rem]` (small panels) · `rounded-[2rem]` (cards) · `rounded-[2.5rem]` (large feature panels) | page.tsx |
| Border/shadow-glow | `border border-white/10 bg-white/5 backdrop-blur-xl`, strongest variant adds `shadow-[0_0_70..80px_rgba(34,211,238,0.08–0.16)]` | page.tsx |
| Standard easing | Two families in use: (a) spring — `type: "spring", stiffness: 60–70, damping: 18–20`, used for card/element entrances and hover; (b) cubic-bezier `[0.16, 1, 0.3, 1]` ("expo-out"), used for the hero headline blur-in and hover sheen sweep | page.tsx |
| Standard durations | Entrances 0.5–1.1s (staggered by `index * 0.06–0.12`), hover transitions ~0.6s | page.tsx |

## 4. Background implementation — **protected**

There is **no separate, page-independent background component** — this is a single-page cinematic scroll experience where each `<section>` composes its own local background treatment. Protected elements found:

- Base: `bg-black` on `<body>` and `<main>`.
- Hero section: a radial gradient wash `bg-[radial-gradient(circle_at_top,rgba(76,201,240,0.16),transparent_45%)]`, a pointer-reactive SVG line/dot field, and 18 pulsing `motion.div` particles.
- Recurring ambient device across the page: soft `rgba(34,211,238,…)` radial glows behind feature panels, `backdrop-blur-xl`/`backdrop-blur-2xl` glass panels over the black base.
- No grain/noise texture is present in the current build (brief's wording anticipates one; there isn't one to preserve — none will be added, since 2.1 forbids introducing a new aesthetic).

**Decision for the redesign:** since nothing today renders as a persistent, route-independent background, a new `src/components/layout/Background.tsx` will be introduced in Phase 2 that renders the *existing* black base + the *existing* ambient cyan radial-glow language once in the root layout, so it persists across client-side navigation instead of flashing per page. It reuses only tokens/values already present above — no new hues, blur values, or motion language. The hero-specific pointer-reactive particle field is content, not chrome — it stays local to the Home hero (Section 5.1), reusing its existing implementation verbatim.

## 5. Animation stack

- **Framer Motion** (`framer-motion@^12`) only. No GSAP, no CSS-only fallback layer beyond Tailwind's `transition`. `prefers-reduced-motion` is **not currently handled** — this is a gap to close in Phase 5 (Section 8.2), not a protected behavior.

## 6. Reusable primitives

**None exist as extracted components today.** `page.tsx` is a single 441-line client component with every button, card, eyebrow label, and section shell written inline and duplicated by hand. The redesign's requirement to "reuse the existing card component" etc. is satisfied by *extracting* the inline patterns already catalogued in Section 3 above into `src/components/ui/` primitives (Button, Card, Eyebrow, Heading) — this is a refactor of existing visual patterns, not a new aesthetic.

## 7. Current routing

One page, one route (`/`), anchor-scroll only (`#vision`, `#flint`). No existing multi-route structure, no shared layout content (navbar/footer) beyond the single inline footer at the bottom of `page.tsx`.

## 8. Backend surface

None. No API routes, no `.env` file (`.env*` is already gitignored — confirmed), no database client, no environment variables in use. This is being built from scratch in Phase 4.

## 9. Path aliases / conventions

- `@/*` → `./src/*` (tsconfig.json).
- ESLint: `eslint-config-next` core-web-vitals + typescript, flat config.
- No component library, no icon library installed — Section 5.4 requires icons from "the icon set already installed"; **none is installed**. Plan: hand-roll the two required icons (phone, envelope) as minimal inline SVGs matching the existing stroke-based line-art style used elsewhere (the architecture diagram's thin `stroke="rgba(255,255,255,0.14)"` lines), rather than adding a dependency — consistent with Section 2.3's "no new UI library" constraint.

---

## Token contract (Section 3.2)

```
Surface / background base : #000000 (bg-black / --background)
Primary text               : #ffffff (text-white), #f5f5f5 (--foreground, body default)
Secondary / muted text     : #d4d4d8 (zinc-300), #a1a1aa (zinc-400), #71717a (zinc-500)
Accent                     : #67e8f9 (cyan-300), #22d3ee (cyan-400), #cffafe (cyan-100) + alpha variants
Border / hairline          : white/10, white/20, cyan-400/30, cyan-400/40
Display font                : Geist Sans (--font-geist-sans)
Body font                   : Geist Sans (--font-geist-sans)
Section vertical rhythm    : py-24 (6rem), px-6 sm:px-10 lg:px-16
Container max-width        : max-w-2xl / max-w-5xl / max-w-6xl / max-w-7xl (context-dependent)
Standard easing             : spring(stiffness 60-70, damping 18-20) for entrances/hover; cubic-bezier(0.16, 1, 0.3, 1) for blur-ins and sheen sweeps
```

Every new component in this redesign draws exclusively from this contract.
