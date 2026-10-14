# Step-by-Step Implementation Plan

## Phase 1 — Foundation
- Add package manifest and Vite scripts
- Configure React Router, design tokens, responsive shell and language provider
- Add Supabase client using public environment variables
- Add linting, formatting and test setup

## Phase 2 — Access and data foundation
- Authentication, session restore, protected routes
- Business profile and membership model
- SQL migrations, RLS policies and seed/test fixtures

## Phase 3 — Core daily operations
- Customers CRUD + customer detail route
- Delivery CRUD, quantities, rate snapshot and empty-jar handling
- Payment entry, receipt and ledger posting
- Expense entry and categories
- Dashboard queries based on persisted data

## Phase 4 — Monthly import and billing
- CSV parser and XLSX parser
- Column mapping, customer matching, preview and validation
- Reconciliation, duplicate/idempotency checks
- Atomic import posting
- Invoice generation and PDF export

## Phase 5 — Messaging and reporting
- WhatsApp provider adapter and secure Edge Function
- Templates, consent/opt-out, retries and delivery webhooks
- Reports, filters and exports

## Phase 6 — Hardening
- Employee permissions, audit log, backups and error monitoring
- Accessibility, mobile testing, security review and end-to-end tests
- Offline support only after core online flows are reliable
