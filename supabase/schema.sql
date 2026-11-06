-- Run in Supabase SQL Editor. Demo schema: authenticated users only.
create extension if not exists pgcrypto;
create table if not exists public.profiles (id uuid primary key references auth.users(id) on delete cascade, display_name text, role text not null default 'researcher' check (role in ('researcher','lab_manager','admin')), created_at timestamptz default now());
create table if not exists public.research_experiments (id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id), material text not null, formula text not null, silver numeric not null check(silver between 0 and 100), temperature numeric not null, conductivity numeric not null check(conductivity>=0), adhesion numeric not null check(adhesion between 0 and 5), status text not null default 'Running', notes text default '', created_at timestamptz default now());
create table if not exists public.research_knowledge (id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id), experiment_id uuid references public.research_experiments(id) on delete set null, title text not null, body text not null, created_at timestamptz default now());
alter table public.profiles enable row level security;
alter table public.research_experiments enable row level security;
alter table public.research_knowledge enable row level security;
create policy "profiles read own" on public.profiles for select to authenticated using(id=auth.uid());
create policy "profiles insert own" on public.profiles for insert to authenticated with check(id=auth.uid() and role='researcher');
create policy "experiments read own" on public.research_experiments for select to authenticated using(owner_id=auth.uid());
create policy "experiments insert own" on public.research_experiments for insert to authenticated with check(owner_id=auth.uid());
create policy "experiments update own" on public.research_experiments for update to authenticated using(owner_id=auth.uid()) with check(owner_id=auth.uid());
create policy "knowledge read own" on public.research_knowledge for select to authenticated using(owner_id=auth.uid());
create policy "knowledge insert own" on public.research_knowledge for insert to authenticated with check(owner_id=auth.uid());
-- Do not expose a service_role key in the browser.
-- Roles are not self-assignable; admin promotions require a trusted server-side workflow.
