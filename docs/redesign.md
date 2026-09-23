# SUN-DRAM Technologies — Website Redesign Brief

**Version:** 1.0
**Owner:** Sharvesh Senthilkumar (Founder & CEO)
**Repository:** existing Next.js site currently deployed at `https://company.sundram.tech/`
**Status:** Ready for implementation

---

## 0. How to use this document

This is the single source of truth for the redesign. Read Sections 1–3 fully before writing any code. Do not begin implementation until you have completed the codebase audit in Section 3.1 and confirmed the design tokens.

Work in the order given in Section 9. Commit after each phase.

---

## 1. Context and objective

### 1.1 What changed

SUN-DRAM Technologies has pivoted. The current site presents the company as a deep-infrastructure research venture building an "Infrastructure Intelligence" layer and a product called **Flint**. That positioning is being retired.

The company now operates as a **SaaS and business-software company** that builds and deploys operational systems for businesses — ERP, inventory, payroll, learning management, digital presence, marketing automation, and AI integration.

### 1.2 Objective of this redesign

Convert the existing single-page cinematic launch site into a **four-page SaaS company website** that:

1. Communicates a clear, commercial value proposition rather than a research thesis.
2. Presents seven concrete service offerings in a scannable, credible format.
3. Establishes trust through MSME registration and government acceleration credentials.
4. Captures inbound enquiries through a working contact form backed by a queryable data store.

### 1.3 Audience shift

| | Before | After |
|---|---|---|
| Reader | Investors, infrastructure engineers | Business owners, operations heads, MSME decision-makers |
| Tone | Visionary, manifesto-driven | Confident, plain-spoken, outcome-focused |
| Proof | Conceptual roadmap | Credentials, delivery capability, direct contact |
| Goal | Signal ambition | Generate qualified enquiries |

**Copy rule:** every claim on the new site must describe something the company can deliver today. Remove all forward-looking product speculation.

---

## 2. Non-negotiable constraints

These are hard constraints. Violating any of them requires stopping and asking the owner.

### 2.1 Visual identity is frozen

> **The existing background design and theme must not be changed.**

Specifically, the following are **read-only**:

- The background layer — gradients, mesh, grain/noise overlay, particle or canvas effects, ambient glow, and any scroll-linked background motion.
- The colour palette. No new hues. Only existing tokens, or opacity/alpha variations of existing tokens.
- Typography — font families, weight scale, and letter-spacing rules.
- The dark/light mode (whichever the site currently uses) and its base surface colours.
- Border-radius scale, border treatment, and shadow/glow style.
- The easing curves and animation timing language already in use.

You may **reuse and recompose** existing components. You may **not** introduce a new aesthetic.

### 2.2 What must be removed

Delete all content and components tied to the retired positioning:

- "Infrastructure Intelligence" as a concept and all supporting copy.
- The **Flint** product section, capability cards, and roadmap.
- The computing-layers evolution sequence (Operating Systems → Internet → Cloud → AI → II).
- The Applications / Infrastructure Intelligence / AWS–Azure–GCP architecture diagram.
- The three-part ENGINE / BOTTLENECK / AUTONOMY narrative.
- The founder's manifesto quote in its current wording (a revised founder note is specified in Section 5.3).
- The footer tagline "Building Infrastructure Intelligence."

**Do not delete the files outright in the first pass.** Move retired sections to `/src/components/_archive/` so they remain recoverable, then remove them from the page tree. Clean up in the final phase once the new site is approved.

### 2.3 Engineering constraints

- Stay on the current framework and version. Do not migrate, upgrade major versions, or swap the styling system.
- Do not add a UI component library if one is not already installed.
- Do not add an animation library if one is already present — use what exists.
- Keep the existing project structure, path aliases, and naming conventions.
- No new runtime dependency without a one-line justification in the PR description.

---

## 3. Preparation

### 3.1 Codebase audit (do this first)

Before writing code, produce a short written summary covering:

1. **Framework and router** — Next.js version; App Router or Pages Router; TypeScript or JavaScript.
2. **Styling system** — Tailwind, CSS Modules, styled-components, or plain CSS. Locate the token source (`tailwind.config.*`, `globals.css`, theme file).
3. **Design tokens** — extract and list every colour, font family, font size, spacing value, radius, and shadow currently defined. Record exact hex/HSL values.
4. **Background implementation** — identify the exact component/file that renders the background and note it as protected.
5. **Animation stack** — Framer Motion, GSAP, CSS-only, or other. Note the standard easing and duration values in use.
6. **Reusable primitives** — existing buttons, cards, section wrappers, containers, eyebrow labels, headings.
7. **Current routing** — is the site one page with anchor scroll, or already multi-route?
8. **Backend surface** — are there any existing API routes, environment variables, or database clients?

Write this to `AUDIT.md` at the repo root. It is the reference for every later decision.

### 3.2 Token contract

After the audit, record the resolved tokens here so the rest of the build is consistent:

```
Surface / background base : <fill from audit>
Primary text              : <fill from audit>
Secondary / muted text    : <fill from audit>
Accent                    : <fill from audit>
Border / hairline         : <fill from audit>
Display font              : <fill from audit>
Body font                 : <fill from audit>
Section vertical rhythm   : <fill from audit>
Container max-width       : <fill from audit>
Standard easing           : <fill from audit>
```

Every new component must draw exclusively from this contract.

---

## 4. Information architecture

### 4.1 Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Position the company and route visitors to Solutions or Contact |
| `/solutions` | Solutions | Present the seven offerings in depth |
| `/about` | About | Establish credibility, credentials, and approach |
| `/contact` | Contact | Capture enquiries and expose direct channels |
| `/admin/leads` | Admin (unlisted) | Internal view of submitted enquiries — not linked in navigation |

### 4.2 Navigation

**Primary navigation (left to right):** Home · Solutions · About · Contact

Requirements:

- The wordmark **SUN-DRAM** sits at the far left and links to `/`.
- A single primary call-to-action button sits at the far right: **Get in Touch** → `/contact`.
- The active route is visually indicated using an existing accent token — an underline, dot, or subtle background. Do not invent a new highlight treatment.
- The navbar is sticky, with the same backdrop/blur treatment already used on the site if one exists.
- Below the mobile breakpoint, collapse to a hamburger that opens a full-height overlay menu using the existing background and easing. Lock body scroll while open; close on route change and on Escape.
- Keyboard accessible: visible focus rings, logical tab order, `aria-current="page"` on the active link.

### 4.3 Footer

Three-part footer, consistent across all pages:

- **Left:** SUN-DRAM wordmark and the line *Building software that helps businesses run better.*
- **Centre:** navigation mirror — Home, Solutions, About, Contact.
- **Right:** contact shortcuts — `+91 63697 66990` and `founder@sundram.tech`, plus credential badges (MSME Registered · Government Accelerated).
- **Bottom bar:** `© 2026 SUN-DRAM Technologies. All rights reserved.`

---

## 5. Page specifications and approved copy

The copy below is final and approved. Use it as written. Where a section allows flexibility it is marked *(flexible)*.

---

### 5.1 Home — `/`

#### Section 1 — Hero

- **Eyebrow:** `SUN-DRAM TECHNOLOGIES`
- **Headline (H1):** `Building Software That Helps Businesses Run Better`
- **Subheadline:** `We design and deploy centralised digital systems — ERP, inventory, payroll, learning, and AI — that replace scattered tools and manual processes with one dependable platform.`
- **Primary CTA:** `Explore Solutions` → `/solutions`
- **Secondary CTA:** `Talk to Us` → `/contact`
- **Credential strip** (directly beneath the CTAs, small, muted, separated by hairline dividers):
  `MSME Registered` · `Government Accelerated` · `Designed and Built in India`

Layout: retain the existing hero composition, spacing, and entrance animation. Replace text only. The headline should be the single largest type element on the site.

#### Section 2 — The problem we solve

- **Eyebrow:** `THE PROBLEM`
- **Heading (H2):** `Most businesses don't lack effort. They lack systems.`
- **Body:** `Operations are spread across spreadsheets, message threads, paper registers, and disconnected tools. Information is entered more than once, reports are assembled by hand, and decisions wait on someone to compile the numbers. The cost is rarely visible on a balance sheet, but it compounds every single day.`

#### Section 3 — What we do

- **Eyebrow:** `OUR APPROACH`
- **Heading (H2):** `One connected system, built around how your business actually works.`
- Three supporting cards, reusing the existing card component:

| Card | Title | Body |
|---|---|---|
| 01 | `Understand before building` | `We map your existing workflow, identify where time and accuracy are lost, and define the system around your operations rather than forcing your operations into generic software.` |
| 02 | `Build on a single foundation` | `Every module — inventory, payroll, learning, reporting — runs on one shared data layer, so a figure entered once is accurate everywhere it appears.` |
| 03 | `Deploy, train, and support` | `We handle migration, train your team on the system they will actually use, and stay engaged after launch to refine it as your business grows.` |

#### Section 4 — Solutions preview

- **Eyebrow:** `WHAT WE BUILD`
- **Heading (H2):** `Seven capabilities. One platform.`
- A compact grid listing all seven solution names with a one-line descriptor each (use the "One-line promise" from Section 5.2).
- **CTA:** `View All Solutions` → `/solutions`

#### Section 5 — Credentials

- **Eyebrow:** `RECOGNITION`
- **Heading (H2):** `Recognised and supported by national programmes.`
- Two prominent badge cards:
  - **MSME Registered** — `Formally registered under India's Ministry of Micro, Small and Medium Enterprises, operating within a recognised and compliant framework.`
  - **Government Accelerated** — `Selected for a government-backed acceleration programme supporting the development of India's technology ecosystem.`

These two cards must be the visually strongest elements on the page after the hero headline. Give them the heaviest available border/glow treatment from the existing system.

#### Section 6 — Closing call to action

- **Heading (H2):** `Tell us what slows your business down.`
- **Body:** `Share a short description of your operations and we will respond with a clear view of what can be improved, what it would take, and where to begin.`
- **CTA:** `Start a Conversation` → `/contact`

---

### 5.2 Solutions — `/solutions`

#### Page header

- **Eyebrow:** `SOLUTIONS`
- **Heading (H1):** `Systems that carry the weight of daily operations.`
- **Subheading:** `Each capability can be delivered on its own or combined into a single connected platform. Every module shares one data layer, so your business runs on one version of the truth.`

#### The seven solutions

Render as a consistent grid. Each entry uses an identical structure: index number, title, one-line promise, capability list, and outcome statement. Do not vary the layout between entries — consistency is the credibility signal here.

---

**01 — Centralised ERP Development**

*One-line promise:* `A single operating system for your entire business.`

*Description:* `We build enterprise resource planning systems tailored to your organisation, unifying finance, operations, procurement, human resources, and reporting into one environment. Instead of reconciling figures across departments, your teams work from a shared and continuously accurate record.`

*Capabilities:*
- Custom module design mapped to existing departmental workflows
- Role-based access control and approval hierarchies
- Consolidated dashboards and automated management reporting
- Migration of existing records from spreadsheets and legacy systems

*Outcome:* `Decisions made on current data instead of last month's summary.`

---

**02 — Inventory Management**

*One-line promise:* `Know exactly what you hold, where it is, and what it is worth.`

*Description:* `Real-time inventory control across stores, warehouses, and branches. Stock movement is recorded as it happens, reorder points are enforced automatically, and valuation stays accurate without a manual count.`

*Capabilities:*
- Live stock levels across multiple locations
- Automated reorder thresholds and low-stock alerting
- Batch, serial, and expiry tracking
- Goods inward, dispatch, and stock-transfer workflows
- Barcode and QR-based entry
- Stock valuation and movement reporting

*Outcome:* `Fewer stock-outs, less dead capital, and an audit trail that holds up.`

---

**03 — Digital Presence**

*One-line promise:* `A credible public face that converts interest into enquiries.`

*Description:* `Websites, customer portals, and brand systems built to perform. We focus on speed, clarity, search visibility, and a structure that turns visitors into measurable enquiries rather than passive traffic.`

*Capabilities:*
- Corporate websites and product landing pages
- Customer and partner portals
- Search engine optimisation and performance tuning
- Analytics instrumentation and enquiry tracking
- Content structure and brand consistency across channels

*Outcome:* `A presence that reflects the standard of the business behind it.`

---

**04 — Learning Management System**

*One-line promise:* `Train your team once and deliver it consistently thereafter.`

*Description:* `A structured platform for onboarding, skills training, compliance, and certification. Knowledge that currently lives with senior staff becomes an institutional asset that survives attrition.`

*Capabilities:*
- Course authoring with video, document, and assessment modules
- Learner progress tracking and completion reporting
- Assessments, scoring, and certificate issuance
- Role-based learning paths for departments and designations
- Compliance and mandatory-training records

*Outcome:* `Faster onboarding and training quality that does not depend on who is delivering it.`

---

**05 — Payroll**

*One-line promise:* `Accurate salaries, processed on time, with compliance built in.`

*Description:* `End-to-end payroll covering attendance, earnings, deductions, statutory compliance, and disbursement. Payroll stops being a monthly scramble and becomes a scheduled, verifiable process.`

*Capabilities:*
- Attendance and leave integration
- Automated salary computation with earnings and deduction structures
- Statutory handling for PF, ESI, professional tax, and TDS
- Digital payslip generation and distribution
- Full-and-final settlement and reimbursement workflows
- Payroll registers and statutory reports

*Outcome:* `A payroll cycle that closes predictably, with a record for every figure.`

---

**06 — Marketing & Communication Automation**

*One-line promise:* `Reach the right customer at the right moment, without manual effort.`

*Description:* `Automated customer communication across email, SMS, and WhatsApp, driven by real events in your business rather than manually triggered sends. Campaigns, follow-ups, and reminders run on defined rules.`

*Capabilities:*
- Multi-channel campaign delivery across email, SMS, and WhatsApp
- Event-triggered sequences for follow-ups, reminders, and renewals
- Customer segmentation and lifecycle stages
- Lead capture and CRM pipeline integration
- Delivery, open, and response reporting

*Outcome:* `Consistent customer communication that continues when the team is busy.`

---

**07 — AI Integration**

*One-line promise:* `Practical intelligence applied to the work you already do.`

*Description:* `We embed AI into existing workflows where it produces measurable returns — document processing, forecasting, support automation, and decision assistance. Applied to defined problems, not added for its own sake.`

*Capabilities:*
- Document and invoice data extraction
- Demand and inventory forecasting
- Customer support assistants trained on your own knowledge base
- Intelligent search across internal records and documents
- Anomaly detection and exception reporting
- Integration of AI capability into existing ERP and operational modules

*Outcome:* `Hours returned to the team, applied where judgement actually matters.`

---

#### Closing section

- **Heading (H2):** `Not sure which of these you need?`
- **Body:** `Most organisations begin with a single module and expand as the benefit becomes clear. Describe your current operations and we will recommend a practical starting point.`
- **CTA:** `Contact Us` → `/contact`

---

### 5.3 About — `/about`

#### Page header

- **Eyebrow:** `ABOUT SUN-DRAM`
- **Heading (H1):** `A technology company built around the way businesses actually operate.`
- **Subheading:** `SUN-DRAM Technologies builds software for organisations that have outgrown spreadsheets and manual processes but have not found a system that fits the way they work.`

#### Section — Credentials (highest visual priority on this page)

This section must be **prominent and unmissable**. Place it immediately after the page header, before any narrative content. Use the strongest border, glow, or elevation treatment available in the existing design system.

- **Eyebrow:** `RECOGNITION AND STANDING`
- **Heading (H2):** `Formally recognised. Nationally supported.`

Two feature cards:

**MSME Registered**
`SUN-DRAM Technologies is formally registered under India's Ministry of Micro, Small and Medium Enterprises. This recognition confirms our standing as a compliant, verifiable Indian enterprise and allows us to work confidently with organisations that require a registered and accountable technology partner.`

**Government Accelerated**
`SUN-DRAM has been selected into a government-backed acceleration programme supporting the growth of India's technology ecosystem. This backing reflects external validation of our technical capability and our commitment to building enduring, serious software.`

> **Accuracy note for the implementer:** state only what is verifiable. If the exact programme name and registration number are supplied, include them beneath each card in small muted text. Do not fabricate programme names, dates, certificate numbers, or issuing authorities. Leave a clearly marked `TODO` placeholder if the details are not yet provided.

#### Section — Who we are

- **Eyebrow:** `WHO WE ARE`
- **Heading (H2):** `Engineers who start with the operation, not the software.`
- **Body:** `We are a team of engineers and designers who build operational software for Indian businesses. Our work begins on the floor — with the registers, the spreadsheets, the handovers, and the workarounds that keep an organisation moving. Only once we understand the operation do we design the system that supports it.`
- **Body:** `That sequence matters. Software that ignores how work is genuinely done gets abandoned within months, regardless of how capable it looks in a demonstration. We build systems that teams choose to use.`

#### Section — What we believe *(flexible in layout, fixed in copy)*

- **Eyebrow:** `WHAT WE BELIEVE`
- **Heading (H2):** `Four principles that shape everything we deliver.`

| # | Principle | Body |
|---|---|---|
| 01 | `Clarity over complexity` | `A system is successful when the person using it every day finds it obvious. Sophistication belongs in the engineering, not in the interface.` |
| 02 | `One source of truth` | `Data entered once should be correct everywhere. Every module we build shares a single foundation, so reports never contradict each other.` |
| 03 | `Built to be owned` | `You own your data, your processes, and your system. We build for independence, not dependency.` |
| 04 | `Support past launch` | `Deployment is the beginning of the relationship. We stay engaged as the business changes and the system evolves with it.` |

#### Section — How we work

- **Eyebrow:** `HOW WE WORK`
- **Heading (H2):** `A defined path from first conversation to working system.`

Four steps, rendered as a horizontal sequence on desktop and a vertical timeline on mobile:

1. **Discover** — `We study your current operations, document existing workflows, and identify where time, accuracy, and money are being lost.`
2. **Design** — `We define the system architecture, module scope, and delivery plan, with the commercial and time commitment stated clearly upfront.`
3. **Deliver** — `We build and deploy in defined stages, so value arrives early and the system is validated against reality as it grows.`
4. **Support** — `We migrate your records, train your team, and remain available as your operations evolve.`

#### Section — Founder note

- **Eyebrow:** `FROM THE FOUNDER`
- **Quote:** `Most businesses we meet are not short on discipline or effort. They are held back by systems that were never designed for them. Our work is to close that gap — with software that is dependable, understood by the people using it, and built to last longer than the problem it was hired to solve.`
- **Attribution:** `Sharvesh Senthilkumar — Founder & CEO, SUN-DRAM Technologies`

Reuse the existing quote/manifesto component styling. Replace the text only.

#### Closing call to action

- **Heading (H2):** `Let's look at your operations together.`
- **CTA:** `Get in Touch` → `/contact`

---

### 5.4 Contact — `/contact`

#### Page header

- **Eyebrow:** `CONTACT`
- **Heading (H1):** `Tell us what you're trying to fix.`
- **Subheading:** `Share your phone number and a short description of your requirement. We review every enquiry directly and respond with a practical assessment.`

#### Layout

Two-column on desktop, stacked on mobile with the form appearing **first** on mobile.

**Left column — direct channels**

Two contact cards, each with an icon drawn from the icon set already installed in the project (do not introduce a new icon library):

| Icon | Label | Value | Behaviour |
|---|---|---|---|
| Phone | `Call us` | `+91 63697 66990` | `href="tel:+916369766990"` |
| Envelope | `Email us` | `founder@sundram.tech` | `href="mailto:founder@sundram.tech"` |

Beneath the cards, a small muted response-time note: `We typically respond within one business day.`

**Right column — enquiry form**

| Field | Type | Required | Validation | Placeholder |
|---|---|---|---|---|
| Name | text | Optional | 2–80 characters | `Your name` |
| Phone Number | tel | **Required** | 10–15 digits after stripping spaces, hyphens, and an optional leading `+`. Reject anything else. | `Phone number` |
| Description | textarea | **Required** | 10–1000 characters, 5 rows | `Briefly describe what you need — your business, the problem, and what you'd like to improve.` |

Submit button label: `Send Enquiry`

#### Form behaviour

- Validate on blur and again on submit. Show inline field-level errors in the existing error/muted colour — do not introduce a new red unless one already exists in the token set.
- While submitting: disable the button, show an inline loading state, and prevent double submission.
- **Success:** replace the form with a confirmation panel reading `Thank you. Your enquiry has been received.` followed by `We will contact you on the number you provided, typically within one business day.` Include a `Send another enquiry` link that resets the form.
- **Failure:** keep the entered values intact and display `We couldn't submit your enquiry. Please try again, or reach us directly at +91 63697 66990.`
- Include an invisible honeypot field (for example `company_website`) that is hidden from users and screen readers. Silently discard any submission where it is filled.
- Full keyboard accessibility: associated `<label>` elements, `aria-invalid` on failing fields, `aria-describedby` linking to error text, and focus moved to the confirmation panel on success.

---

## 6. Backend — enquiry capture

### 6.1 Requirement

> Submissions from the contact form must be stored durably so the founder can review incoming enquiries at any time.

This means three things must exist: an **API endpoint**, a **persistent store**, and a **private review interface**.

### 6.2 API endpoint

`POST /api/contact`

**Request body**

```json
{
  "name": "string | null",
  "phone": "string",
  "description": "string",
  "company_website": "string"
}
```

**Server-side behaviour (in order):**

1. Reject any method other than `POST` with `405`.
2. If `company_website` is non-empty, return `200` with a success payload but persist nothing. (Silent honeypot rejection.)
3. Re-validate every field on the server. Never trust client validation.
4. Apply rate limiting — a maximum of 5 submissions per IP address per hour. Return `429` when exceeded.
5. Normalise the phone number to digits only, retaining any country-code prefix.
6. Persist the record.
7. Return `201` with `{ "success": true }`. On failure, return `500` with `{ "success": false, "error": "<safe message>" }`.

Never return internal error details, stack traces, or database messages to the client.

### 6.3 Data model

Table / collection: `enquiries`

| Field | Type | Notes |
|---|---|---|
| `id` | uuid / auto-increment | Primary key |
| `name` | text, nullable | As submitted |
| `phone` | text, not null | Normalised digits |
| `description` | text, not null | As submitted |
| `status` | enum | `new` \| `contacted` \| `closed` — defaults to `new` |
| `source_page` | text | Defaults to `/contact` |
| `ip_hash` | text, nullable | Hashed, for rate limiting only — never store raw IPs |
| `user_agent` | text, nullable | Truncated to 255 characters |
| `created_at` | timestamp | Server-generated, UTC |

Index `created_at` descending and `status`.

### 6.4 Storage choice

**Recommended:** Supabase (hosted Postgres) — free tier, a built-in table viewer that satisfies the review requirement immediately, and a straightforward Next.js client.

**Acceptable alternatives:** Neon, PlanetScale, MongoDB Atlas, or Firebase Firestore.

**Not acceptable:** writing to a local JSON file or SQLite file on disk. The site is deployed on a serverless platform where the filesystem is ephemeral and submissions would be silently lost.

> **Decision required from the owner before Phase 4.** Do not select a provider unilaterally — confirm the choice, then implement.

### 6.5 Review interface

Route: `/admin/leads` — unlisted, and excluded from `sitemap.xml` and search indexing via `robots` meta.

Requirements:

- Protected by a shared secret held in `ADMIN_PASSWORD`. A single password gate is sufficient; do not build a user-account system.
- Table view sorted newest first, showing date/time (rendered in IST), name, phone, description, and status.
- Each phone number is a `tel:` link so it is callable directly from a mobile device.
- Status can be changed between `new`, `contacted`, and `closed`.
- Filter by status and a simple text search across name, phone, and description.
- Export visible rows to CSV.
- Display an unread count of `new` enquiries at the top.

### 6.6 Notification (optional, implement only if requested)

On successful submission, send a notification email to `founder@sundram.tech` containing the submitted fields and a link to `/admin/leads`. Use Resend or a comparable transactional provider. **A notification failure must never cause the submission to fail** — wrap it in its own try/catch and log the error only.

### 6.7 Environment variables

Add to `.env.example` with placeholder values. Never commit real credentials.

```
DATABASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
RESEND_API_KEY=            # only if notifications are enabled
NOTIFICATION_EMAIL=founder@sundram.tech
```

Confirm `.env*` is listed in `.gitignore` before writing any secrets locally.

---

## 7. Proposed file structure

Adapt to match the conventions found during the audit — this is a guide, not a mandate.

```
src/
├── app/
│   ├── layout.tsx                 # Root layout: background, navbar, footer
│   ├── page.tsx                   # Home
│   ├── solutions/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── admin/leads/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── admin/leads/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── home/
│   │   ├── solutions/
│   │   ├── about/
│   │   └── contact/
│   ├── ui/                        # Existing primitives — extend, do not replace
│   └── _archive/                  # Retired Flint / Infrastructure Intelligence sections
├── content/
│   └── solutions.ts               # The seven solutions as structured data
├── lib/
│   ├── db.ts
│   ├── validation.ts
│   └── rate-limit.ts
└── styles/                        # PROTECTED — background and theme
```

Store the seven solutions in `content/solutions.ts` as a typed array and render both the Home preview grid and the Solutions page from that single source. The list must never be duplicated in two places.

---

## 8. Quality requirements

### 8.1 Responsiveness

Verify every page at 360px, 768px, 1024px, 1440px, and 1920px. No horizontal scroll at any width. Tap targets are at least 44×44px.

### 8.2 Accessibility

- One `<h1>` per page; heading levels descend without skipping.
- Text contrast meets WCAG AA against the existing background. If a current token fails, report it rather than changing the palette.
- All interactive elements are keyboard reachable with a visible focus state.
- Icons that convey meaning carry `aria-label`; decorative icons carry `aria-hidden="true"`.
- Animations are suppressed under `prefers-reduced-motion: reduce`.

### 8.3 Performance

- Lighthouse Performance ≥ 90 on desktop, ≥ 80 on mobile.
- Images use `next/image` with explicit dimensions.
- Fonts continue to use the existing loading strategy — do not add font requests.
- No layout shift from animated entrances; reserve space.

### 8.4 SEO

Per-page metadata:

| Route | Title | Description |
|---|---|---|
| `/` | `SUN-DRAM Technologies — Building Software That Helps Businesses Run Better` | `We build centralised ERP, inventory, payroll, LMS, and AI systems for businesses. MSME registered and government accelerated.` |
| `/solutions` | `Solutions — SUN-DRAM Technologies` | `ERP development, inventory management, digital presence, LMS, payroll, marketing automation, and AI integration.` |
| `/about` | `About — SUN-DRAM Technologies` | `An MSME-registered, government-accelerated technology company building operational software for Indian businesses.` |
| `/contact` | `Contact — SUN-DRAM Technologies` | `Speak to SUN-DRAM Technologies about your operational software requirements. Call +91 63697 66990.` |

Also add: Open Graph and Twitter card tags, `sitemap.xml` covering the four public routes, `robots.txt` disallowing `/admin`, and `Organization` + `ContactPoint` JSON-LD structured data on the Home page.

---

## 9. Execution plan

Complete each phase fully and commit before moving to the next.

**Phase 1 — Audit**
Produce `AUDIT.md`. Fill in the token contract in Section 3.2. Confirm the background component and mark it protected. *No code changes.*

**Phase 2 — Structure**
Convert to a four-route structure. Build `Navbar`, `MobileMenu`, and `Footer`. Wire the root layout so the background renders once and persists across routes. Move retired sections to `_archive/`. Create empty, correctly routed pages.

**Phase 3 — Content build**
Build Home, then Solutions, then About, using the approved copy in Section 5. Create `content/solutions.ts` first and render both the preview grid and the detail page from it.

**Phase 4 — Contact and backend**
Confirm the storage provider with the owner. Build the form UI, the API route, validation, rate limiting, and persistence. Then build `/admin/leads`. Test end to end with real submissions.

**Phase 5 — Polish**
Responsive pass across all breakpoints. Accessibility pass. Metadata, sitemap, robots, and structured data. Lighthouse run and remediation.

**Phase 6 — Cleanup**
Delete `_archive/` once the new site is approved. Remove unused dependencies, assets, and dead code. Update `README.md` with setup instructions and the environment variable list.

---

## 10. Definition of done

- [ ] Four public routes live, with working navigation on desktop and mobile
- [ ] All Flint and Infrastructure Intelligence content removed from the rendered site
- [ ] The background, palette, and typography are visually identical to the current site
- [ ] All seven solutions are rendered from a single data source
- [ ] MSME and Government Accelerated credentials are prominent on both Home and About
- [ ] Phone `+91 63697 66990` and email `founder@sundram.tech` are present and clickable on Contact and in the footer
- [ ] The contact form validates, submits, and persists to the database
- [ ] A submission made from the live site is visible at `/admin/leads` within seconds
- [ ] `/admin/leads` is password-protected and excluded from indexing
- [ ] No horizontal scroll at any tested breakpoint
- [ ] Lighthouse targets met
- [ ] No secrets committed to the repository

---

## 11. Open items requiring the owner's input

1. **Database provider** — Supabase is recommended. 
2. **Notifications** — admin dashboard sufficient
3. **Logo asset** — No logo
4. **Social links** — the footer currently references GitHub and LinkedIn with placeholder links, please remove them.
5. **Legal pages** — Privacy Policy and Terms pages are not needed

---

*End of brief.*
