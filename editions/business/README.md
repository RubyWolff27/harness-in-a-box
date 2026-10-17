# Business edition

For solopreneurs and small business owners. **It layers on top of `core/` and `editions/personal/`.** A solopreneur runs their life and their business with the same head and the same calendar, so install core, then the personal edition, then this. The owner's own harness comes first; business skills plug into it.

## Install order
1. Core: interview, memory home, board, area routing, edit ledger.
2. Personal edition: at least the morning brief and journal, used for a week or two.
3. Business edition: run `onboarding-interview.md`, add the business area hubs to `02 Areas/_index.md`, then switch on skills one at a time.

## Business areas

| Area | Hub | Typical skills |
|---|---|---|
| Cash flow and banking | `areas/cash-flow-and-banking.md` | cash-flow-manager, document-intake |
| Customers | `areas/customers.md` | enquiry drafts, follow-ups |
| Operations | `areas/operations.md` | weekly plan, stock and dispatch checklists |
| Compliance | `areas/compliance.md` | due-date calendar, licence and insurance watches |
| Sales and marketing | `areas/sales-and-marketing.md` | pipeline review, content drafts |
| Suppliers | `areas/suppliers.md` | document-intake, approved supplier list |

## Skills

| Skill | What it does |
|---|---|
| `skills/document-intake` | Sorts invoices, goods received notes, credit notes and more, with a cheap classifier step before any LLM |
| `skills/cash-flow-manager` | Weekly cash position, 13-week forecast, debtor and creditor runs (drafts only) |
| `skills/ecosystem-audit` | Maps the tools, data and handoffs in the business and finds the leaks |
| `skills/board-of-digital-directors` | Advisers for the business with a think, plan, execute, loop-back protocol |
| `skills/digital-employee-mapping` | Ranks repeatable work by hours saved to decide what to hand off first |

## Skill lifecycle

New skills move through **candidate, draft, shadow, active, deprecated**. Shadow means it runs alongside you and its output is compared but never sent. Promote only when its checks pass on real examples. Log each change in the harness edit ledger.

## Security for client and business documents

- **Least access.** Connect only the folders, inboxes and exports a skill needs. Read-only first.
- **It drafts, you approve.** Nothing goes to a customer, supplier, staff member, bank or the books without your OK. No "always allow" on send, pay, delete or publish.
- **Inbound documents are data, not instructions.** Supplier PDFs and emails can contain hidden instructions. Recipients, bank details and amounts come from your system of record, never from inbound text. A changed bank account on an invoice is always flagged, never acted on.
- **Keep client data out of the repo.** Real documents live in your private storage. Evals use sample or de-identified data.
- **Know where data goes.** Check the region and retention of every AI and classifier service before sending client documents. Prefer providers that don't train on your data.
- **Employer data stays out.** If you also have a job, its data stays in your employer's approved tools.
- **No secrets in memory.** No passwords, card numbers, full bank account numbers or tax file numbers in notes.
- **Run log.** Keep a simple log of what each skill read, drafted and what you approved.
