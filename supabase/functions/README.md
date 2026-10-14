# Supabase Edge Functions

Planned functions:
- post-monthly-import: validate authorization and atomically post import batch
- send-whatsapp-message: provider API call with server-side secrets
- whatsapp-webhook: verify provider signature and update delivery status
- generate-invoice: optional server-side invoice/PDF workflow

Implement authorization, idempotency, input validation, rate limits and safe logging before deployment.
