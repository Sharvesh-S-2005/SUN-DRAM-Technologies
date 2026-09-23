-- Run this once against the project's Supabase Postgres instance
-- (SQL Editor in the Supabase dashboard, or `supabase db push`).
-- See docs/redesign.md Section 6.3.

create extension if not exists "pgcrypto";

create type enquiry_status as enum ('new', 'contacted', 'closed');

create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text not null,
  description text not null,
  status enquiry_status not null default 'new',
  source_page text not null default '/contact',
  ip_hash text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on enquiries (created_at desc);
create index if not exists enquiries_status_idx on enquiries (status);

-- Row Level Security: the app talks to this table exclusively through the
-- service role key (server-side only), so no public policies are defined.
alter table enquiries enable row level security;
