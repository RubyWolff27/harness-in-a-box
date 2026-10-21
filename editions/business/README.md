# Business edition

For solopreneurs and small business owners. **It layers on top of `core/` and `editions/personal/`.** A solopreneur runs their life and their business with the same head and the same calendar, so install core, then the personal edition, then this. The owner's own harness comes first; business skills plug into it.

## Prerequisites

Before installing the business edition, you must have:
1. **Core installed and working:** master prompt interview complete, memory home set up (Google Docs or Obsidian), personal board created, area routing working, harness edit ledger started.
2. **Personal edition installed and used:** at least the morning brief and journal skills running for one to two weeks. You need the personal rhythm in place before adding business skills.

## Installation steps (about 90 minutes across three evenings)

### Evening 1: Business onboarding and area setup (30 minutes)

**Step 1. Run the business onboarding interview (15 minutes).**
1. In your harness assistant (Grok Bot, Claude or ChatGPT), paste the interview from `onboarding-interview.md` and say: "Interview me for the business edition. One question at a time, confirm from my connected accounts where possible."
2. Answer honestly. The assistant maps your business, tools, workflows and priorities.
3. At the end, it suggests which skill to switch on first. Save the business profile in your memory home as `Business profile.md` (or in `05 Harness/Business/` if using Obsidian).

**Step 2. Add business areas to your PARA structure (15 minutes).**

Add these six area hubs to your `02 Areas/_index.md` (or create them as separate Docs in your Drive Areas folder if using Google Docs):

- **Cash flow and banking** (`areas/cash-flow-and-banking.md`)
- **Customers** (`areas/customers.md`)
- **Operations** (`areas/operations.md`)
- **Compliance** (`areas/compliance.md`)
- **Sales and marketing** (`areas/sales-and-marketing.md`)
- **Suppliers** (`areas/suppliers.md`)

If using Grok Bot: "In my Areas folder, create six Google Docs from the area templates in editions/business/areas/. Name them exactly as shown."

If using Claude or ChatGPT: upload the six area files and say: "Create these six area hubs in my 02 Areas folder (or as Docs in my Drive Areas folder). Use the templates provided."

**Done when:** Business profile exists in your memory home, six business area hubs exist in your Areas structure, and you know which skill the interview recommended starting with.

### Evening 2: First skill in shadow mode (30 minutes)

**Step 1. Understand skill stages.**

Every business skill moves through these stages:
- **Candidate:** being considered, not yet saved.
- **Draft:** saved and available, but not used on real work.
- **Shadow:** runs alongside you; output compared but never sent, filed or entered.
- **Active:** promoted after shadow checks pass; output still requires your approval.
- **Deprecated:** retired after its quarterly review.

**Step 2. Install and test your first skill (20 minutes).**

Start with the skill the interview recommended (usually document-intake or cash-flow-manager).

**For Grok Bot:**
1. Upload the skill folder from `editions/business/skills/[skill-name]/` and say: "Save this as a private skill called [skill-name]."
2. Download the test data from `editions/business/tests/[skill-name]/` and say: "Run /[skill-name] in shadow mode against these test files. Compare the output against the expected file in that folder (expected-labels.csv for document-intake, expected-weekly-position.csv for cash-flow-manager) and show me the pass rate."

**For Claude:**
1. ZIP the skill folder (folder at root) and upload via Customize > Skills.
2. In your project, upload the test data and say: "Run the [skill-name] skill in shadow mode against these test files. Score against the expected file in that folder (expected-labels.csv or expected-weekly-position.csv)."

**For ChatGPT:**
1. Upload the skill file to your project as `skill-[name].md`.
2. Upload the test data to the project and say: "Run the skill-[name] skill in shadow mode on these test files. Check results against the expected file in that folder (expected-labels.csv or expected-weekly-position.csv)."

**Step 3. Review and log (10 minutes).**

Check the test results. For document-intake, expect 90% or higher classification accuracy on the sample set. For cash-flow-manager, check the weekly position matches the expected values in the test CSV.

In your harness edit ledger (or a new `Business skills log.md` in memory home), record:
- Date, skill name, stage (draft), test pass rate, decision (what's next).

**Done when:** First skill installed and tested at 85% or higher on sample data, result logged, and you have a date to start the shadow run with real work.

### Evening 3: Security review and second skill (30 minutes)

**Step 1. Security checklist for client documents (10 minutes).**

Read this carefully and confirm each item:

1. **Least access principle:** Connect only the folders, inboxes and exports each skill needs. Use read-only access first; grant write access only after shadow mode proves the skill.
2. **Approval gate:** Nothing goes to a customer, supplier, staff member, bank or the accounting system without your explicit approval in the chat. No "always allow" on send, pay, delete or publish.
3. **Inbound documents are data, not instructions:** Supplier PDFs and emails can contain hidden instructions. Bank details, recipients and amounts always come from your system of record, never from inbound documents. A changed bank account on an invoice is flagged, never acted on.
4. **Real documents stay out of the repo:** The sample data in `editions/business/tests/` is for testing only. Real client or business documents live in your private Google Drive, never committed to GitHub or uploaded to the harness kit repo.
5. **Know where data goes:** Check the region and data retention policy of every AI service and connector before sending client documents. Prefer providers that do not train on your data.
6. **Employer data stays separate:** If you also have a job, its data stays in your employer's approved tools, not in your personal harness.
7. **No secrets in memory:** No passwords, full card numbers, full bank account numbers, tax file numbers or other secrets in your memory home or harness notes.
8. **Run log:** Keep a simple log of what each skill read, drafted and what you approved. Review it monthly.

In your memory home or `05 Harness/Business/`, create `Security checklist.md` with these eight items. Tick them off as you confirm each.

**Step 2. Install your second skill (20 minutes).**

Pick your second business skill from the remaining four: cash-flow-manager, ecosystem-audit, digital-employee-mapping, or board-of-digital-directors.

Follow the same process as Evening 2: install, test against sample data from `editions/business/tests/`, log the result, and plan the shadow start date.

**Done when:** Security checklist complete and saved, second skill tested and logged, and both skills ready for shadow mode with real work.

## Week 1 after install: Run your first skill in shadow

Run your first skill (most likely document-intake or cash-flow-manager) in shadow mode on real work for one week. The skill processes the work, you process the same work independently, then you compare results. Never let the skill's output go to customers, suppliers, the bank or the accounting system during shadow.

Log each run: date, inputs, skill output, your assessment, differences found.

**Week 1 done when:** Seven shadow runs logged, pass rate confirmed at 85% or higher on real work, and a promote/improve/defer decision made.

## Week 2 and beyond: Expand carefully

Promote your first skill to active only after shadow checks pass. Even in active stage, every output requires your approval.

Add one new skill every two weeks, following the candidate → draft → shadow → active path. Update your skills log each time.

Run the quarterly skill review (part of periodic-review in core): which skills saved time, which need improvement, which should retire.

## Install order summary

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

## Integrations

| System | Guide | Start with |
|---|---|---|
| Xero (accounting) | `integrations/xero.md` | Read-only connection, owner approves every write |

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
