# unified-innovation-platform

## Expanded interactive R&D workspace (v0.2)

Open **Full R&D Workspace** in the sidebar for experiment create/edit, local persistence, knowledge capture and search, evidence-linked deterministic research assistant, experiment planning and status tracking, interactive digital thread, CSV/JSON export and JSON import.

**Demo boundaries:** All example data are synthetic. New data are stored in browser localStorage only, not synchronized across users or devices. The assistant is rule-based and not connected to an LLM. Enterprise integrations, production-grade access control, actual scientific recommendations and cloud persistence require a secured backend and validated connectors. Do not enter confidential data into this public demo.

## Enterprise Demo v0.3

Navigate to **Enterprise Platform** for four demo modules:

1. **AI Agent**: real OpenAI Responses API via server-side Vercel function `api/agent.ts`. Requires `OPENAI_API_KEY` (server-side only). Without it, the UI reports that AI is not configured. Only synthetic seeded records are sent to the model.
2. **Cloud Database**: optional Supabase PostgreSQL table with row-level security, authenticated create/list of synthetic experiments.
3. **User Management**: Supabase email/password sign-up and sign-in. The three roles are displayed as an access-control roadmap; the included RLS policies currently enforce owner-only access, not manager/admin organization-wide permissions.
4. **Enterprise Connectors**: interactive SAP S/4HANA, LIMS, MES and AVEVA Historian mock adapters with example field mappings and simulated sync outcomes. No actual external integration occurs.

### Setup

- In Supabase, create a project and run `supabase/schema.sql` in the SQL editor.
- In Vercel Project → Settings → Environment Variables, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the project's public URL and publishable/anon key.
- Set `OPENAI_API_KEY` as a **server-only** environment variable (never use `VITE_` for it). Optional `OPENAI_MODEL` defaults to `gpt-4.1-mini`.
- Redeploy after adding variables.

### Security limitations

**Not production-ready:** The public `/api/agent` endpoint does not yet enforce user authentication, request quotas or rate limiting, so do not configure a paid API key for an unrestricted public deployment without first adding these protections. The mock connectors do not authenticate to SAP/LIMS/MES. No confidential information should be entered. Browser-local R&D Workspace data are not automatically synchronized with Supabase. Real enterprise role authorization, tenant isolation, audit trails, credential vaulting and connector orchestration remain future work.
