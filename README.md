# SUN-DRAM Technologies — website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 site for SUN-DRAM Technologies. See `docs/redesign.md` for
the full redesign brief and `AUDIT.md` for the extracted design token contract.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values (never commit `.env.local`):

| Variable | Required for | Notes |
|---|---|---|
| `SUPABASE_URL` | Contact form + `/admin/leads` | Project URL from the Supabase dashboard. |
| `SUPABASE_SERVICE_ROLE_KEY` | Contact form + `/admin/leads` | Service role key — server-only, never expose to the client. |
| `ADMIN_PASSWORD` | `/admin/leads` | Single shared secret gating the leads dashboard. |
| `DATABASE_URL` | — | Reserved if a direct Postgres connection is ever needed; unused by the current code path (Supabase's JS client is used instead). |
| `RESEND_API_KEY` | Email notifications (not implemented) | Only needed if the optional notification email (Section 6.6 of the brief) is built. |
| `NOTIFICATION_EMAIL` | Email notifications (not implemented) | Defaults to `founder@sundram.tech`. |

### Database setup

Run `supabase/schema.sql` once against the project's Supabase Postgres instance (SQL Editor in the dashboard, or
`supabase db push`) to create the `enquiries` table before testing the contact form or `/admin/leads`.

## Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/solutions` | The seven solutions, sourced from `src/content/solutions.ts` |
| `/about` | Credentials, principles, how we work |
| `/contact` | Enquiry form → `POST /api/contact` |
| `/admin/leads` | Password-gated enquiry review (unlisted, `noindex`) |

## Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```
