-- Vortex Labs project enquiries.
-- Run this in the Supabase SQL editor before enabling the application endpoint.

create table if not exists public.project_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  organization text,
  service_type text not null,
  project_summary text not null,
  budget_range text,
  desired_timeline text,
  referral_source text,
  status text not null default 'new'
    check (status in ('new', 'reviewing', 'contacted', 'accepted', 'declined', 'completed'))
);

alter table public.project_applications enable row level security;

-- No public policies are created. Inserts are performed by the server using
-- the service-role key, which must never be exposed to the browser.
revoke all on public.project_applications from anon, authenticated;
grant all on public.project_applications to service_role;

create index if not exists project_applications_created_at_idx
  on public.project_applications (created_at desc);

create index if not exists project_applications_status_idx
  on public.project_applications (status);
