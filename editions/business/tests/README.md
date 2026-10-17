# Business edition test data

This directory contains synthetic test data for the four main business skills. All examples use the fictional company **Example Co Pty Ltd** with fictional suppliers, customers and transactions. No real people or companies are represented.

## Purpose

Test data serves two purposes:
1. **Pre-deployment validation:** Test each skill in shadow mode against known examples before using it on real business data.
2. **Skill improvement:** When a skill produces unexpected results on real work, add a de-identified version of that case to the test set and re-run to measure improvement.

## Test data sets

| Skill | Test directory | What's included | Pass threshold |
|---|---|---|---|
| document-intake | `document-intake/` | 12 sample documents (invoices, credit notes, delivery notes, statements, quotes, remittance advice, plus 2 ambiguous cases) and expected-labels.csv | 90% classification accuracy |
| cash-flow-manager | `cash-flow-manager/` | Bank transaction CSV, aged receivables, aged payables, and expected weekly cash position for 13 weeks | Position matches within $500, all overdue items identified |
| ecosystem-audit | `ecosystem-audit/` | Tool inventory CSV (20 tools), workflow map CSV (5 workflows) | All overlaps found, top 5 fixes ranked by hours or dollars saved |
| digital-employee-mapping | `digital-employee-mapping/` | Task list CSV (15 repeatable tasks with frequency, time, fit scores) | Tasks ranked correctly by hours saved × fit, high-risk items flagged |

## How to run tests

### General approach

1. **Install the skill** following the instructions in `editions/business/README.md` (Evening 2).
2. **Upload or reference the test data** from the appropriate subdirectory.
3. **Run the skill in shadow mode** against the test files.
4. **Compare the output** to the expected results file.
5. **Log the result** in your Business skills log: date, skill name, pass rate, decision.

### Skill-specific instructions

#### document-intake

**What to test:** Classification accuracy and flagging of exceptions.

**Run command (adjust for your assistant):**
```
Run the document-intake skill in shadow mode against the 12 test files in editions/business/tests/document-intake/. For each document, output: filename, classified label, confidence score, and any flags. Compare against expected-labels.csv.
```

**Pass criteria:**
- 10 out of 12 documents (83%) classified correctly with confidence ≥ 0.85, OR
- 11 out of 12 documents (92%) classified correctly at any confidence level
- Files 011 and 012 (ambiguous cases) correctly flagged for review or marked as "other"
- File 012 (changed bank details) flagged with "flag_bank_change" or equivalent

**What counts as a pass for each document:**
- Correct label match (for example "invoice" matches "invoice")
- Confidence score meets or exceeds the threshold in expected-labels.csv
- Required flags are present (for example file 003 should flag quantity_discrepancy, file 012 must flag bank change)

**Interpreting results:**
- 90% or higher: Promote to shadow mode with real documents
- 80-89%: Improve classifier rules or threshold, retest
- Below 80%: Review skill logic, check if documents match your business type

#### cash-flow-manager

**What to test:** Weekly cash position calculation, debtor and creditor identification, forecast accuracy.

**Run command:**
```
Run the cash-flow-manager skill against bank-transactions-november.csv, aged-receivables.csv and aged-payables.csv. Produce a 13-week cash flow forecast starting from week ending 15 November 2026. Output the weekly position table showing opening balance, receipts, payments, closing balance, debtors over 30 days, and creditors due within 14 days.
```

**Pass criteria:**
- Week ending 15/11/2026 closing balance within $500 of expected ($50,424.50)
- All overdue debtors identified (INV-2026-1156 in aged-receivables.csv is 1 day overdue)
- All creditors due within 14 days identified (INV-MO-88892 and ABC-2026-8821 in aged-payables.csv)
- Forecast shows 13 weeks of projections
- Lowest forecast week is identified with buffer calculation

**What counts as a pass:**
- Opening and closing balances reconcile (receipts minus payments = change in balance)
- Calculations are performed by code or spreadsheet formulas, not model arithmetic
- Debtors and creditors correctly sorted by due date
- Draft reminders produced for overdue items (skill should draft, not send)

**Interpreting results:**
- Pass: Promote to shadow mode with real bank data (read-only access first)
- Balance off by more than $500: Check transaction categorisation logic
- Missing debtors or creditors: Review aged analysis date filtering

#### ecosystem-audit

**What to test:** Tool inventory accuracy, workflow mapping, leak identification, prioritisation of fixes.

**Run command:**
```
Run the ecosystem-audit skill using tool-inventory.csv and workflow-map.csv as inputs. Produce: (1) tool table with overlaps identified, (2) workflow maps showing handoff types, (3) findings table with leaks scored by hours/dollars saved and effort, (4) top 5 recommended fixes ranked by impact.
```

**Pass criteria:**
- All tool overlaps identified: Trello/Asana (project management), Canva/Adobe (design), Dropbox/Google Drive (storage), Slack/Teams (communication)
- All re-keying steps identified in workflows: online orders (Shopify to Xero), supplier invoices (email to Xero), staff timesheets (QuickBooks Time to Deputy to Xero)
- Unused or underused tools flagged: Asana (owner only), Slack free (no history), Microsoft Teams (minimal use)
- Top 5 fixes ranked with estimated hours or dollars saved per week or month
- At least 3 findings scored as medium or high risk

**What counts as a pass:**
- Every duplicate tool pair is identified
- Every workflow with "re-keyed" or "in someone's head" is flagged as a leak
- Recommendations are specific (for example "integrate Shopify and Xero to eliminate double entry" not "improve systems")
- Fixes are ranked cheapest or easiest first

**Interpreting results:**
- Pass: Use the output to prioritise real business improvements
- Overlaps missed: Check the tool categorisation logic
- Workflows unclear: Add more detail to real workflow observations before running the skill

#### digital-employee-mapping

**What to test:** Task ranking, hours saved calculation, fit scoring, risk assessment, role grouping.

**Run command:**
```
Run the digital-employee-mapping skill using task-list.csv as input. Calculate hours per week for each task (frequency × minutes / 60), score fit (repeatable × inputs_digital × checkable), adjust for risk, and rank tasks by hours saved × fit. Group the top tasks into digital employee roles (office admin, bookkeeping assistant, operations planner).
```

**Pass criteria:**
- Hours per week calculated correctly for all 15 tasks
- Tasks ranked by (hours per week × fit score) with high-risk tasks deprioritised
- Top 3 tasks are high-volume, high-fit, low-risk (expect: "File supplier invoices", "Reconcile bank transactions", "Prepare weekly cash flow summary" near the top, but "Reconcile bank transactions" pushed down due to high risk until shadow proven)
- Tasks grouped into at least 3 distinct roles
- Output includes baseline plan for the top-ranked task

**What counts as a pass:**
- Ranking formula is transparent and documented
- High-risk tasks are not recommended as the first to automate without a shadow run
- Each recommended role has 3-5 related tasks grouped by area and workflow
- The top task has a "done when" statement and suggested shadow start date

**Interpreting results:**
- Pass: Use the ranked list to choose your first business skill to promote to active
- Ranking seems wrong: Check the fit scoring weights (repeatable should be highest)
- Hours saved overstated: Review the frequency and minutes estimates for real work

## Pass/fail summary table

After running all four skills against test data, record results in your Business skills log:

| Skill | Test date | Pass rate | Result | Decision |
|---|---|---|---|---|
| document-intake | [date] | 11/12 (92%) | Pass | Promote to shadow with real invoices |
| cash-flow-manager | [date] | Position within $200 | Pass | Promote to shadow, read-only access |
| ecosystem-audit | [date] | All overlaps found | Pass | Run against real tool list |
| digital-employee-mapping | [date] | Top 3 ranked correctly | Pass | Baseline top task for 1 week |

## Adding your own test cases

When a skill produces an unexpected result on real work:
1. **De-identify the data:** Remove real names, amounts, account numbers, and confidential details. Replace with fictional equivalents (use Example Co Pty Ltd, fictional suppliers from the existing samples).
2. **Add to the test set:** Save the de-identified case as a new file in the appropriate test directory.
3. **Update expected results:** Add the new case to the expected-labels.csv, expected-weekly-position.csv, or equivalent file with the correct expected output.
4. **Re-run the test:** Check whether the skill now handles the case correctly.
5. **Iterate:** If it fails, update the skill logic (rules, thresholds, or extraction), re-run the full test set, and promote only when pass rate is restored.

## Security reminder

- **Real business data never goes in this repo.** Test files are synthetic and safe to commit.
- **De-identify before adding.** Remove all real names, amounts over $10k, account numbers, ABNs, and confidential terms.
- **Client documents stay in your private storage.** Real invoices, contracts, and financial records belong in Google Drive, Dropbox, or your accounting system, not in the harness repo.

## Next steps

After testing:
1. Log results in your Business skills log (create as a Doc in your memory home).
2. Promote passing skills to shadow mode with real work for 1 week.
3. Log each shadow run: date, inputs, output, differences from your manual work.
4. Promote to active only after 7 shadow runs pass at 85% or higher.
5. Even in active mode, nothing sends, pays, or posts to the books without your explicit approval.
