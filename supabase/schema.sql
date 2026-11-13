-- Vortex Labs project application inbox
-- Run this in the Supabase SQL Editor before enabling the application form.

create table if not exists public.project_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organization text,
  service text not null,
  budget text,
  details text not null,
  status text not null default 'new' check (status in ('new', 'reviewing', 'accepted', 'declined', 'completed')),
  created_at timestamptz not null default now()
);

alter table public.project_applications enable row level security;

-- No anon/authenticated policies are intentionally created.
-- Inserts are performed by the server API using the Supabase service-role key.
-- Never expose SUPABASE_SERVICE_ROLE_KEY in client-side code.