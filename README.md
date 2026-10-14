# Amrit Jal — Full Project Structure

This repository is a **development scaffold / file structure**, not a finished or runnable application. It is organized so implementation can be added module by module.

## Planned stack
- Frontend: React + Vite + JavaScript (mobile-first responsive web app)
- UI: CSS modules/global styles and reusable components
- Backend: Supabase Auth + PostgreSQL + Row Level Security (RLS)
- Data import: CSV first; XLSX support can be added
- Bills: PDF generation module
- Messaging: WhatsApp Business API/provider adapter (credentials required)
- Languages: Hindi and English

## First implementation order
1. Project setup, environment validation, routing and shared layout
2. Authentication and protected routes
3. Customers + dedicated customer detail page
4. Daily deliveries
5. Payments and customer ledger
6. Expenses
7. Products/jars and jar balances
8. Monthly CSV/XLSX import with preview, validation, reconciliation and duplicate protection
9. Invoices/PDF, WhatsApp sending integration, reports
10. Employees/roles, settings and hardening

## Important design rules
- Do not mark a feature as working until its UI, validation, database persistence, error states and tests are implemented.
- All customer records must be scoped to the correct business/tenant.
- Use database transactions/RPC for monthly import posting and financial ledger mutations.
- Never infer a payment from a delivery/import row.
- Preview imports before posting; detect duplicates; reconcile daily quantity/amount against monthly totals.
- Store secrets only in server-side environment variables, never in frontend code.
- Real WhatsApp delivery requires provider credentials, approved templates where applicable, customer consent/opt-out handling, and delivery-status webhooks.
- Demo/sample data must be clearly labelled and must not be confused with live records.

## Getting started
This scaffold intentionally does not include a complete `package.json` or working application logic yet. Implementation will be added in later steps. See `docs/IMPLEMENTATION_PLAN.md`.
