# Database Model — Planning Notes

Likely core tables (final schema to be designed in migrations):
- businesses
- profiles
- business_members
- customers
- customer_rate_plans
- products
- delivery_routes
- route_customers
- delivery_entries
- payments
- payment_allocations
- customer_ledger_entries
- expenses
- invoices
- invoice_lines
- import_batches
- import_rows
- employees (or business_members with employee metadata)
- jar_transactions / customer_jar_balances
- message_jobs
- message_delivery_events
- audit_logs

Every tenant-owned record should include `business_id` and suitable foreign keys. Define constraints, indexes, RLS policies, and delete/archive rules in migrations. This file is a planning guide, not an implemented schema.
