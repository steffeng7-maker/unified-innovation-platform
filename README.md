# Unified Innovation Platform — Standalone Demo

Public interactive proof of concept for R&D, laboratory experimentation, materials intelligence, knowledge management and enterprise integration architecture.

## Live demo
https://unified-innovation-platform.vercel.app/

## Quick start
```bash
npm install
npm run dev
```
Build: `npm run build`.

## Modules
- Dashboard, Experiment Explorer, Unified Data Foundation, Materials Intelligence, Recommendations and Digital Thread
- Full R&D Workspace: create/edit experiments, knowledge records, experiment planning, local import/export
- Enterprise Platform: simulated AI Research Agent, central data platform, demo login and role switching, SAP/LIMS/MES/Historian connector simulator

## No external dependencies or keys
No Supabase project, OpenAI API key, enterprise credentials or real SAP connections are needed. All data and integration events are synthetic. The agent uses deterministic rules, **not a real LLM**. Demo login is **not real authentication**, and the role selector **does not enforce access controls**. The simulated central data platform uses browser localStorage, **not a shared database**. Data are not shared between devices.

This is a presentation prototype, not production software. Do not enter sensitive or confidential data.

## Future production path
Secure authentication, managed database, tenant isolation, audited APIs, actual connectors, RAG and LLM integration can be added later.
