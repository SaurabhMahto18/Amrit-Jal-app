# Architecture

## Frontend
Feature-oriented React application. Pages use shared layout/components and feature-specific hooks/services. Keep business rules out of UI components.

## Backend
Supabase Auth for identity; PostgreSQL for relational data; RLS for tenant isolation; SQL migrations for schema; database functions/RPC for atomic posting and ledger operations; Edge Functions for secret-bearing integrations.

## Suggested layers
- `pages/`: route-level screens
- `features/<module>/`: components, hooks, schemas, services and types for each module
- `services/`: shared Supabase client and external adapters
- `lib/`: validation, formatting, errors, permissions and utilities
- `supabase/migrations/`: versioned database schema
- `supabase/functions/`: secure server-side endpoints
- `tests/`: unit, integration and end-to-end tests

## Financial integrity
Use a ledger as the source of truth. Avoid storing a manually editable outstanding total without reconcilable ledger entries. Use transactions for payment posting, invoice posting and monthly import. Keep audit records for material changes.
