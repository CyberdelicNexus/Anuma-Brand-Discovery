-- Run once in the Supabase SQL Editor.
-- Public visitors may INSERT a response, but cannot read, edit, or delete responses.

create table if not exists public.brand_discovery_responses (
  id uuid primary key,
  created_at timestamptz not null default now(),
  schema_version text not null check (char_length(schema_version) between 1 and 20),
  respondent_name text not null default '' check (char_length(respondent_name) <= 120),
  respondent_role text not null default '' check (char_length(respondent_role) <= 160),
  completion_percent smallint not null check (completion_percent between 0 and 100),
  responses jsonb not null check (
    jsonb_typeof(responses) = 'object'
    and octet_length(responses::text) <= 100000
  )
);

alter table public.brand_discovery_responses enable row level security;

revoke all on table public.brand_discovery_responses from anon, authenticated;
grant insert on table public.brand_discovery_responses to anon;

drop policy if exists "public_can_submit_brand_discovery" on public.brand_discovery_responses;
create policy "public_can_submit_brand_discovery"
on public.brand_discovery_responses
for insert
to anon
with check (
  schema_version = '2.0'
  and completion_percent between 0 and 100
  and jsonb_typeof(responses) = 'object'
  and octet_length(responses::text) <= 100000
);

comment on table public.brand_discovery_responses is
  'Private aNUma team discovery responses. Client access is insert-only.';
