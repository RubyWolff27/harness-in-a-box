---
name: cash-flow-manager
description: Weekly cash position, a rolling 13-week forecast, and debtor and creditor runs. Use for "cash check", "can I afford", "who owes me" or a weekly routine.
metadata:
  stage: draft
  area: cash-flow-and-banking
---
# Cash-flow manager

## Inputs (read-only)
Bank export or feed, accounting system aged receivables and payables, recurring bills list, known upcoming income and spend.

## Weekly steps
1. **Position.** Cash on hand today, by account (balances only, no account numbers).
2. **In and out.** Receipts and payments since last week, matched to invoices and bills. Flag anything that doesn't reconcile.
3. **Debtors.** Overdue invoices by age. Draft polite reminders (gentle at 7 days, firmer at 30). Drafts only.
4. **Creditors.** Bills due in the next 14 days. Suggest a payment run; never pay.
5. **Forecast.** Roll the 13-week forecast forward. Show the lowest week and the buffer above your minimum cash floor.
6. **Tax and obligations.** Upcoming tax, payroll and super amounts as a checklist. Never lodge.
7. **Report.** One table plus three lines: where we are, what's at risk, what to do. End with "What's next".

## Done when
- Numbers come from code or exports, not model arithmetic, and totals reconcile.
- Every overdue debtor has a draft reminder or a reason it doesn't.
- The forecast's lowest week is called out.

## Guardrails
General information, not financial advice. Suggest the owner's accountant for tax decisions.
