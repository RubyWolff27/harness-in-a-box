---
name: digital-employee-mapping
description: List the repeatable work in the business, estimate hours per week, and rank what to hand to the harness first by hours saved. Use after onboarding or an ecosystem audit.
metadata:
  stage: draft
---
# Digital-employee mapping

A "digital employee" is a role made of skills and routines, such as an office admin, a bookkeeper's assistant or a customer service desk. It drafts; the owner approves.

## Steps
1. **List tasks** from the interview, the ecosystem audit and a week of calendar and inbox (observed, then confirmed). For each: area, frequency, minutes per go, who does it now.
2. **Hours per week** = frequency x minutes / 60.
3. **Score fit:** repeatable (same steps most times), inputs are digital, checkable (a rule or total can verify it), risk if wrong (low, medium, high).
4. **Rank** by hours saved x fit, with high-risk tasks pushed down until a shadow run proves them.
5. **Group into roles:**

| Role | Typical tasks |
|---|---|
| Office admin | Inbox sorting, calendar, filing, to-do capture |
| Bookkeeping assistant | Document intake, reconciliations, debtor reminders |
| Customer desk | Enquiry drafts, confirmations, follow-ups |
| Operations planner | Weekly plan, stock counts, dispatch and receiving checks |
| People and rosters | Roster drafts, leave tracking, onboarding checklists |
| Compliance clerk | Due dates, renewals, checklists |

6. **Pick the first one.** The top task that is high hours, high fit and low risk. Baseline its minutes for one week before switching it on, so the saving is measured, not guessed.

## Output
A ranked table (task, role, hours per week, fit, risk, next step) and the first skill to build, with its "done when".

## Done when
- The top task has a baseline and a planned shadow start date.
- Total estimated hours saved is stated with its assumptions.

## Acceptance checklist

Before promoting this skill from shadow to active, confirm:

- [ ] Tested on synthetic data (`editions/business/tests/digital-employee-mapping/`) with top 3 tasks ranked correctly
- [ ] Tested on your real task list (at least 20 repeatable tasks from observation, calendar, inbox)
- [ ] Hours per week calculated correctly: frequency × minutes per task / 60
- [ ] Fit scoring considers: repeatable (same steps most times), inputs are digital, checkable by rule or total
- [ ] Risk assessment includes: financial impact if wrong, client relationships, compliance obligations
- [ ] High-risk tasks deprioritised until shadow run proves them (for example bank reconciliation, tax returns)
- [ ] Tasks ranked by hours saved × fit score, with risk adjustment applied
- [ ] Top task has hours per week baseline measured for one week before automation starts
- [ ] Tasks grouped into roles: office admin, bookkeeping assistant, customer desk, operations planner, compliance clerk
- [ ] Each role has 3-5 related tasks grouped by area and workflow
- [ ] First role selected is high hours, high fit, low risk (for example inbox sorting, document filing)
- [ ] "Done when" checks written for the top task (what does good output look like?)
- [ ] Assumptions documented: are frequency and minutes estimates observed or guessed?
- [ ] Total hours saved stated with confidence level (for example "12-15 hours per week, medium confidence")
- [ ] Shadow start date planned for top task within 2 weeks

Run this skill after onboarding or an ecosystem audit. Use the output to decide which business skills to build or promote first. Re-run quarterly to track actual hours saved and adjust priorities.
