---
name: ecosystem-audit
description: Map the business's tools, data, channels and handoffs, and find where time and money leak. Use at onboarding, yearly, or when "things feel messy".
metadata:
  stage: draft
---
# Ecosystem audit

## Steps
1. **Inventory tools.** For each: what it does, who uses it, cost per month, which area it serves, whether it's the system of record. Observe from connected accounts first, then confirm.
2. **Map channels.** Where work, orders and documents come in, and where they go next.
3. **Trace handoffs.** For the three biggest workflows, write the steps from arrival to done. Mark each step: manual, automated, re-keyed, or "in someone's head".
4. **Find leaks.** Double entry, overlapping tools, unused subscriptions, steps with no owner, data stuck in personal inboxes, missing backups, shared logins.
5. **Risk check.** Where client data lives, who has access, offboarding gaps, which tools hold money or identity.
6. **Score.** For each finding: hours lost per week, cost, risk (low, medium, high), effort to fix.
7. **Recommend.** Top five fixes, cheapest change first (a checklist or a setting before a new tool). Feed hand-off candidates into digital-employee-mapping.

## Output
`03 Resources/ecosystem-audit-YYYY-MM-DD.md`: tool table, workflow maps, findings table, top five fixes, "What's next".

## Done when
- Every tool has an owner and an area, or is marked for removal.
- The top five fixes each have an estimated hours or dollars saved.

## Acceptance checklist

Before promoting this skill from shadow to active, confirm:

- [ ] Tested on synthetic data (`editions/business/tests/ecosystem-audit/`) with all overlaps identified
- [ ] Tested on your real tool inventory (at least 15 tools) with all subscriptions and costs listed
- [ ] All duplicate or overlapping tools identified (for example two project management tools, two communication platforms)
- [ ] All re-keying steps found in top 3 workflows (manual data entry from one system to another)
- [ ] All "in someone's head" steps identified (tasks with no written procedure or system)
- [ ] Unused tools flagged (for example free plans with no activity, subscriptions no one logs into)
- [ ] Tool access audit complete: who has admin rights, are there shared logins, offboarding gaps
- [ ] Client data locations mapped: which tools hold client names, documents, payment details
- [ ] Risk scoring includes: data exposure, single points of failure, tools holding money or identity
- [ ] Top 5 fixes ranked by cheapest or easiest first (a checklist or setting before buying a new tool)
- [ ] Each fix has an estimated hours saved per week or dollars saved per month
- [ ] Hand-off candidates fed into digital-employee-mapping skill for role design
- [ ] Output saved to `03 Resources/ecosystem-audit-YYYY-MM-DD.md` in your memory home
- [ ] Audit run annually or when "things feel messy"

Use this skill at onboarding, yearly, or after significant changes (new hires, new tools, workflow complaints). The output guides your tool and process improvements.
