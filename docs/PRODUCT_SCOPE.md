# Product Scope

## Core modules
- Dashboard
- Authentication and business profile
- Customers and dedicated customer detail pages
- Daily delivery entries and returned/empty jars
- Payments, advances/deposits and receipts
- Customer ledger / outstanding balance
- Expenses
- Products, jar types, pricing and stock
- Groups, routes and delivery schedules
- Monthly spreadsheet import
- Invoices and PDF bills
- WhatsApp bill/reminder center
- Reports and exports
- Employees and permissions
- Settings, language, audit trail

## Customer detail page
Each customer should have tabs/sections for:
- Profile and contact details
- Rate plan and active/inactive status
- Delivery history with date, quantity, price and status
- Payment history with method, receipt/reference and amount
- Ledger: opening balance, charges, payments, adjustments and running balance
- Jar balance/deposit information
- Monthly invoices and payment status
- Notes and change history
- Actions: edit profile, add delivery, record payment, generate/share bill

## Monthly import workflow
1. Upload CSV/XLSX and select month.
2. Map columns and match customer by stable customer code; phone matching is a fallback requiring review.
3. Preview parsed daily quantities and monthly totals.
4. Validate dates, quantities, rates, unknown customers, duplicate rows and totals.
5. Reconcile row-level daily totals with declared monthly totals.
6. Show a row-by-row error/warning report.
7. Require explicit confirmation before posting.
8. Post atomically, with idempotency/duplicate protection.
9. Create delivery records, invoice and ledger charges; do not create payment records unless payment data is explicitly supplied.
10. Provide import report and rollback/correction workflow.

## Later / optional
- Offline queue and conflict resolution
- QR-based customer/jar workflows
- Customer portal, membership and subscriptions
- Multi-branch operations
- Advanced inventory, route optimization and storefront
