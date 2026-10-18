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

## Acceptance checklist

Before promoting this skill from shadow to active, confirm:

- [ ] Tested on synthetic data (`editions/business/tests/cash-flow-manager/`) with position within $500 of expected
- [ ] Tested on 4 weeks of real bank data with position reconciling to your accounting system
- [ ] All calculations performed by code or spreadsheet formulas, not model arithmetic
- [ ] Totals reconcile: receipts minus payments equals change in balance
- [ ] All overdue debtors (invoices past due date) identified correctly
- [ ] All creditors due within 14 days identified correctly
- [ ] Draft reminders are polite and escalate appropriately (gentle at 7 days, firmer at 30 days)
- [ ] Reminders are drafts only: nothing is sent without your explicit approval
- [ ] No payment runs are executed automatically: skill suggests only
- [ ] 13-week forecast rolls forward each week with updated actuals
- [ ] Forecast includes recurring items: rent, wages, super, insurance, tax obligations
- [ ] Lowest forecast week is highlighted with buffer above your minimum cash floor
- [ ] Access is read-only to start: bank exports and accounting data are imported, not accessed live
- [ ] Tax and super obligations are checklists only: skill never lodges or pays
- [ ] One week of shadow runs logged: forecasts compared to actual results
- [ ] Your accountant has reviewed the tax obligation checklist format

Promote to active only when all items are ticked. Review monthly: are forecasts within 10% of actuals? Adjust recurring estimates based on actual patterns.
