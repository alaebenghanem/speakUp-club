-- Run this in the Supabase SQL Editor to create the table for the registration form

create table public.registrations (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  age integer not null,
  email text not null,
  phone text not null,
  level text not null,
  about_me text,
  goals text,
  instagram text,
  tiktok text,
  agreement boolean default false,
  discovery text,
  other_discovery text
);

-- Note: Since the web app inserts directly from the frontend without user authentication,
-- we need to enable Row Level Security (RLS) but allow anonymous inserts.
alter table public.registrations enable row level security;

-- Allow anyone to insert rows (so the public website form works)
create policy "Allow public inserts"
on "public"."registrations"
as PERMISSIVE
for INSERT
to anon, authenticated
with check (
  true
);

-- Only allow authenticated admin users to read the data
create policy "Allow authenticated read"
on "public"."registrations"
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);

-- IMPORTANT: Grant explicit Postgres permissions to both anon and authenticated roles
-- Without this, users get a "permission denied" error before RLS is even checked.
grant usage on schema public to anon, authenticated;
grant insert on table public.registrations to anon, authenticated;
grant select on table public.registrations to authenticated;
