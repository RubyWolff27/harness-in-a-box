# Business harness architecture

Design guidance for building AI harnesses for solopreneurs and small businesses. This document provides patterns for onboarding, skill management, self-healing, memory and tool-making workflows.

## Overview: Recommended shape

```
Owner (approves everything outbound, financial or irreversible)
  |
Grok Bot / Claude / ChatGPT: Chief of Staff = orchestrator and front door
  |   house-rules.md, profile/, approvals queue, day-close digest, weekly review
  |
  +-- onboarding skill (permanent)
  +-- 7 core skills, each a skill folder with scripts, memory and evals,
  |     owned by 3 to 5 capabilities or areas (not personas)
  +-- classifier layer (rules first, then typed-choice or small model): intake routing and gate checks
  +-- subagents: read-only sweeps (inbox, scans, long PDFs)
  |
  +-- delegates builds --> Cursor cloud agents (tool makers)
          validators, import-file generators, eval runners
          code + tests + preview; owner approves any deploy
  |
Systems of record: your accounting system (file in, file out, a person imports), email, calendar, Drive, operations DB
```

This keeps the "few roles" principle and the "drafts never send" rule, and follows the one-front-door-plus-skills pattern. A suggested mapping of skills to capabilities for a small business:

| Capability (owner of skills) | Skills it loads |
|---|---|
| Chief of Staff | onboarding, office admin, operations planning (Monday plan, Friday summary) |
| Finance Clerk | finance and bookkeeping, stock take (count into accounting system) |
| Materials and Dispatch | dispatch and receiving, stock take (reorder side) |
| Customer Desk | customer service |
| People (later) | people and culture |

## 1. The permanent onboarding skill

**Purpose.** Build and maintain one structured business profile, decide which skills to unlock and at what autonomy level, and keep the profile true as the business changes. It is the harness's initialiser and never retires.

**Outputs (all files, so any session can resume):**

- `profile/business.yaml`: the interview beats as fields. Each field has `value`, `provenance` (asked, observed or inferred), `confidence`, `last_confirmed` and `ttl_days`. Use YAML or JSON rather than prose.
- `profile/boundaries.yaml`: beat 6 answers (never do X without OK, data not to see). Only the owner edits this.
- `profile/connectors.yaml`: what is connected, with what scope, and what the harness observed from each.
- `profile/unlocks.yaml`: per-skill eligibility, score, autonomy level and the reason.
- `profile/interviews/<date>.md`: summary and the playback the owner confirmed.

**States.**

| State | What happens | Exit condition |
|---|---|---|
| `new` | Account created, nothing known | Owner starts onboarding |
| `observing` | Connect tools; read-only scan of calendar, inbox headers and folders to infer channels, volumes and tools | Scan done or owner skips |
| `interviewing` | Interview beats, one at a time, skipping anything already observed with high confidence | Required fields filled or explicitly "unknown" |
| `proposing` | Score candidate skills; show the table, north-star measure and first skill | Owner confirms |
| `baselining` | Owner logs minutes on chosen tasks for one normal week | Baseline recorded |
| `active` | Skills run; onboarding watches for triggers | A re-interview trigger fires |
| `reinterviewing` | Targeted partial interview on changed areas only, then re-score | Owner confirms changes |
| `paused` | Owner away or business closed | Owner resumes |

**How answers unlock skills.** Each core skill declares prerequisites in its SKILL.md frontmatter metadata: required profile fields, required connectors or file sources, and required boundary answers. The onboarding skill checks these with code, not judgement:

- **Locked**: prerequisites not met. It lists exactly what is missing ("Connect Drive, or tell me where supplier invoices arrive").
- **L1 shadow**: runs on real inputs; outputs go only to a review folder and are compared with what the owner did. No routine yet.
- **L2 draft**: routine runs; every output is a draft in the approvals queue.
- **L3 prepared**: internal, reversible preparation happens without asking (filing, renaming, building a variance report). Anything outbound, financial or irreversible still waits for approval. There is no L4: the harness never sends.

L1 to L2 needs the skill's evals passing and at least 3 shadow runs the owner accepted with minor or no edits. L2 to L3 needs a sustained low edit rate (for example under 10% of items materially edited over 4 weeks) and the owner's explicit yes. Demotion is automatic when failure patterns emerge (see section 3). These thresholds are starting suggestions to tune, not evidence-based numbers.

**Example unlock rules (sample):**

| Skill | Unlocks when |
|---|---|
| Stock take | Accounting system known; item list exportable; count method known (paper or app); count frequency known; the person who imports is named |
| Finance and bookkeeping | Accounting system known; where bills arrive known; boundaries confirm "no payments, no journals" |
| Customer service | Inbound channels known; key accounts listed; 5+ sent emails available as voice samples |
| Dispatch and receiving | Order source known; delivery note template available; PO source known |
| People and culture | Staff count above 0; roster or time source known; privacy law recorded (Privacy Act or GDPR or equivalent) |

**Re-interview triggers.** Combine time, events and signals so the harness asks only when something has changed:

- **Time**: a light check every quarter (five questions: anything new in staff, products, channels, tools, boundaries?) and a full re-interview yearly.
- **Events**: new connector or tool; new staff member or role; new product line or supplier; new inbound channel; new jurisdiction; owner says "things have changed".
- **Signals**: a profile fact passes its `ttl_days`; a fact is contradicted by a system of record; the classifier's "other" or low-confidence rate for a stream rises (for example above 15% for two weeks), suggesting new document types; a skill's edit or rejection rate rises; a skill sits unused for 6 weeks; the owner keeps doing a task by hand that no skill covers (a skill-spawning candidate).
- **Just in time**: a skill needs a field that is missing or stale. Ask one question, say why it is needed, and write the answer back with provenance.

**Interview rules.** One beat at a time. Look before asking. Always play back and confirm. Record "unknown" rather than guessing. Never store staff or customer personal information in the profile; store where it lives instead.

## 2. The seven core skills

**Common packaging** (follows the Agent Skills spec):

```
skills/<skill-name>/
  SKILL.md          # frontmatter: name, description (when to use), metadata: prerequisites, autonomy, version
  scripts/          # deterministic code: validators, formatters, calculators (built by Cursor cloud agents)
  references/       # templates, formats (e.g. accounting system import layout), jurisdiction notes
  memory/           # see section 4
  episodes/
  evals/
  CHANGELOG.md
```

Keep each SKILL.md short: when to use it, inputs, steps, the verify step, what to return, and what needs approval.

**Per-skill design.** "Engine" says what should do the work: **R** = rules or deterministic code, **C** = classifier, **L** = LLM.

| Skill | Triggers | Tools (read / draft / write) | Approval gates | Engine |
|---|---|---|---|---|
| **Office admin** | Inbox routine 2 to 3 times a day; new calendar invites; files landing in an intake folder | Read email and calendar; draft replies; rename and file documents (reversible, logged) | Sending any email; accepting, moving or creating events with outside guests; deleting anything | **C** for inbox labels (needs you, handled, FYI) and document type; **R** for naming and filing; **L** for reply drafts and to-do extraction |
| **People and culture** | Weekly roster day; licence or certificate expiry dates; new starter | Read roster and time source; draft rosters, job ads, checklists | Anything to staff or candidates; any pay, award or leave decision; no personal data in memory | **R** for expiry reminders and leave balances; **R** lookups for award rates (flag for checking, never compute pay unverified); **L** for job ads and checklists |
| **Finance and bookkeeping** | Classifier labels an arrival as invoice, credit note, tax document or statement; weekly debtor run; count completed | Read attachments and bank and accounting exports; write import files and reports to a review folder | A person imports files into the books; no payments, journals or credit notes; any customer reminder | **C** for document type; **L** for extraction from messy PDFs, then **R** validation (lines sum to total, tax rate matches jurisdiction, supplier known); **R** for bank matching; **L** for reminder drafts |
| **Customer service** | Inbound message on any channel; order-status event | Read inbox and order data; draft replies; log complaints | A person sends every reply; pricing, complaints, credit and key accounts go to the owner | **C** in one pass: intent, urgency, complaint yes/no, key account yes/no; **R** key-account routing; **L** reply drafts in the owner's voice, learning from edits |
| **Operations planning** | Monday plan; Friday summary; new order confirmed | Read orders, stock, bill of materials, staff availability | Plan is internal; any PO or schedule sent to others needs approval | **R** for net requirements (demand minus stock minus on order) and capacity; **L** for the short narrative and flagging gaps |
| **Dispatch and receiving** | Order confirmed; delivery arrives (photo or scan of supplier delivery note) | Read orders and POs; draft delivery notes, packing lists, ETA messages, courier bookings | Courier bookings (spend); any customer or supplier message; stock adjustments | **C** delivery note vs invoice; **L** (vision) to read the supplier's note, then **R** line-by-line comparison with the PO; **L** for chase-up drafts |
| **Stock take and counts** | Scheduled count; count submitted from the floor surface | Read snapshot export and item list; write import file, variance report and reorder draft to a review folder | A person imports the count into the accounting system; variances above threshold need a reason first; the harness posts no adjustments | **R** for everything numeric (variance, value, reorder point); **L** only to transcribe paper sheets (transitional), ask "why" about big variances, and summarise |

**What should not be LLM-based at all.** Import-file formatting, totals and reconciliations, reorder calculations, expiry reminders, date maths, and routing by known sender addresses. Use code, with the agent calling the script. Where a classifier or rule is accurate enough, the LLM never needs to see the raw input, which also reduces prompt-injection exposure.

**Jurisdiction note.** "GST document" is an Australian label. Some businesses use VAT or sales tax. Label the class "tax document" and let `references/jurisdiction.md` set the local name and rate.

## 3. Self-healing per skill

**Detect.** Every run writes a run record, whatever happens.

- *Hard checks*: a script validation fails (for example, the accounting system would reject the import), totals do not reconcile, a required field is missing.
- *Operational*: a routine did not run, a connector's authorisation expired, a source feed is stale ("no data from X", never "all green").
- *Human signal*: the owner rejects a draft, edits it materially (measure how much changed), or does the task by hand anyway.
- *Classifier signal*: low confidence, a rising "other" rate, or confusion between two labels.

**Diagnose** against a fixed taxonomy. Each failure gets one primary code:

| Code | Meaning | Example |
|---|---|---|
| `INPUT` | Bad or unexpected data | Leading zeros dropped from item codes; new supplier layout |
| `TOOL` | Connector or script failed | Drive authorisation expired; script crashed |
| `SPEC` | Skill instructions wrong or incomplete | Skill does not handle serialised items |
| `CONTEXT` | Missing or stale facts | Lead time changed; profile field past its TTL |
| `JUDGEMENT` | Model chose badly despite good inputs | Wrong tone; wrong urgency |
| `VERIFY` | Check missing, superficial or wrong | Variance report passed but totals were off |
| `STOP` | Stopped early or looped | Declared done without producing the import file |

**Repair ladder** (stop at the first rung that works; log every rung):

1. **Retry** with backoff, at most 3 times, for transient `TOOL` errors.
2. **Alternative path** already written into the skill (for example, ask the owner to drop the export in a folder if the connector fails).
3. **Self-correct with evidence**: put the validator message back into context and re-run that step once.
4. **Micro-interview**: for `CONTEXT` or `INPUT` gaps, ask one targeted question.
5. **Degrade honestly**: deliver the partial result with clear "not done" and "no data" markers.
6. **Escalate** to the owner with the failure code, what was tried, and one specific decision needed.

**Daily reflection** (a background routine after the day-close digest):

- Read today's episodes for each active skill.
- For each failure or owner edit, write a short lesson and propose **delta bullets** for `playbook.md` (new bullets, or helpful/harmful increments on existing ones), marked `candidate`.
- Infer preference candidates from owner edits into `preferences.md`.
- Update run metrics: pass rate, edit rate, time to approval, cost.

**Weekly reflection** (feeds the owner's weekly review):

- Code merges and de-duplicates candidates, retires bullets whose harmful count exceeds helpful, and flags repeated patterns.
- Propose at most **one** change per skill per week: a SKILL.md edit, a new script, a threshold, or a new skill candidate.
- Run the skill's evals with and without the proposed change and show the diff and results to the owner.
- Report skills that should be demoted, deprecated or re-interviewed.

**What may self-modify, and what needs a human.**

| Artefact | Self-modify? | Rule |
|---|---|---|
| `episodes/` | Yes | Append-only; never edited |
| Metrics and counters | Yes | Code-only updates |
| `facts.md` entries observed from a system of record | Yes | With source and timestamps; contradictions invalidate, never delete |
| `facts.md` entries inferred or taken from inbound documents | Candidate only | Promoted after owner confirmation or a second independent source |
| `playbook.md` bullets | Candidate automatically; active after weekly review | Delta-only merges by code |
| `preferences.md` | Candidate automatically; active once the owner has seen it | Owner can edit or delete any time |
| SKILL.md body, `scripts/`, thresholds, schedules, classifier label sets | **No**: proposal plus eval results, owner approves | Versioned in CHANGELOG |
| New skill, deprecation, autonomy level | **No**: owner approves | Recorded in `unlocks.yaml` |
| `house-rules.md`, `boundaries.yaml`, approval gates, Bot descriptions, credentials, connector scopes | **Never** by the harness | Owner edits by hand only |

Keep the whole `harness/` folder in a git repository, commit after each run, and show a readable diff in the weekly review. That makes every self-modification visible and reversible.

## 4. Structured per-skill memory

**Folder layout**

```
harness/
  house-rules.md                 # principles agents cannot edit (drafts never send, gates, privacy)
  profile/                       # owned by onboarding (section 1)
  shared/
    entities.yaml                # pointers only: item codes, supplier and customer IDs -> system of record
    glossary.md                  # business terms ("zone", "batch", product families)
  skills/<skill>/
    SKILL.md
    scripts/  references/
    memory/
      facts.md                   # semantic
      playbook.md                # procedural (ACE-style bullets)
      preferences.md             # owner preferences learned from edits
    episodes/YYYY/MM/<date>_<run-id>.md
    evals/
      cases/<case-id>.yaml       # input refs, expected outcome, graders
      results/<date>.json
    CHANGELOG.md
  runs/<date>/<run-id>.json      # harness-level run log (trace)
  approvals/                     # pending drafts, linked to artefacts
```

**Entry formats (sample data)**

`facts.md`, one entry per fact:

```
- id: F-0142
  statement: "Supplier Example Supplies lead time is 21 days"
  scope: [stock-take, operations-planning]
  source: "PO history export 2026-09-01 (exports/po_history.csv)"
  provenance: observed        # observed | asked | inferred
  confidence: high
  valid_from: 2026-09-01
  valid_to: null              # set when contradicted, never deleted
  last_confirmed: 2026-09-01
  ttl_days: 90
```

`playbook.md`, one bullet per lesson:

```
- id: P-0031
  text: "Count sheet item codes lose leading zeros; pad to item-master length before matching."
  helpful: 4
  harmful: 0
  status: active              # candidate | active | retired
  evidence: [E-2026-09-12-01, E-2026-09-19-02]
  added: 2026-09-12
  last_used: 2026-09-26
```

`episodes/...md`, one per run: trigger, input references (file paths, not contents), steps and tool calls, validator results, failure code if any, owner decision (approved, edited, rejected) with a diff summary, time and cost.

**Write rules**

1. Episodes are written by code at the end of every run, append-only.
2. Facts use delta operations: for each candidate fact, retrieve similar entries and choose ADD, UPDATE, INVALIDATE (set `valid_to`, used instead of DELETE) or NOOP.
3. Facts from untrusted inbound content (emails, supplier PDFs) are never auto-promoted, which blocks memory poisoning through injected text.
4. Playbook changes are delta bullets proposed by the reflection routine and merged by code, never full rewrites.
5. No personal information in memory. Store IDs and pointers to the system of record.

**Read rules**

1. On activation load SKILL.md, active playbook bullets (top 30 by helpful count, then recency), active preferences, and in-scope facts that are not stale.
2. Retrieve episodes just in time by searching on a key (item code, supplier, customer), not by loading history.
3. For any consequential number (quantity, price, amount, date), re-read the system of record and cite it. Memory is a hint, not the truth.
4. Stale facts (past TTL) are shown as stale and trigger a re-check or micro-interview, never used silently.

**Decay rules** (starting values to tune)

| Item | Rule |
|---|---|
| Facts | TTL by type: prices 30 days; lead times and reorder points 90 days; profile facts 180 days. Past TTL means stale until re-confirmed |
| Playbook bullets | Retire when harmful > helpful, or unused for 90 days. Keep them in the file with status `retired` |
| Preferences | Re-confirm after 180 days or when edits contradict them |
| Episodes | Keep raw for 12 months, then keep monthly summaries; follow retention rules for regulated records (for example batch records) |
| Evals | Never decay. Failing cases stay; passing capability cases graduate into the regression set |

## 5. Where the classifier and Cursor cloud agents fit

**Classifier: three jobs**

1. **Intake router.** Every inbound document or message gets typed labels before any LLM sees it. Suggested document labels: invoice, credit note, tax document, delivery note or goods received note, statement, purchase order, remittance, quote, other. Ask several questions in one pass: urgency, complaint yes/no, key account yes/no, and page boundaries for multi-document PDFs.
2. **Gate check.** Before a drafted action enters the approvals queue, score its risk class and whether it matches what was asked. This is a second line of defence only. It never replaces approvals, because classifier guardrails cannot reliably stop injection.
3. **Self-healing triage.** Label owner edits (cosmetic or meaning-changing) and failure codes, so reflection focuses on what matters.

**Confidence policy.** High confidence: route automatically. Medium: route and flag in the digest. Low: label "other" and send to the human queue. Log every low-confidence case as an eval candidate and a re-interview signal.

**Order of preference.** Rules first (known sender to supplier mapping), then the classifier, then an LLM only when categories are open-ended.

**Classifier specifics.** Choose a typed-choice classifier (returns choices, scores or yes/no probabilities instead of generated text) or a small model. Put the classifier behind a small interface (`classify(doc, labels) -> {label, confidence}`) so it is swappable. See the document classifier pattern document for detailed guidance.

**Cursor cloud agents: the tool makers.** Cloud agents run in isolated VMs, can start without a repo, test their own work, produce artefacts such as screenshots, and support MCP and hooks. They are the "tool maker" to your harness's "tool user":

- **Build** the deterministic `scripts/` each skill relies on (import-file generator, validators, variance calculator), with unit tests.
- **Build** staff surfaces (floor count screen, goods-in screen).
- **Build** the eval runner that executes each skill's `evals/`.
- **Brief with a spec, not a chat.** Use the interview pattern: onboarding output plus a short interview produces `SPEC.md`, then a fresh cloud agent session builds it.
- **Rules.** Sample data only in cloud agent environments; secrets via the secrets store, not files; a spend limit set; no deploy to staff without owner approval.

## 6. Minimal v0 build order: stock count into accounting system

Everything below uses sample or synthetic data until the owner approves real data handling.

**Step 0: Confirm the target (1 to 2 days).**
- Confirm the accounting system product and version and which modules are on (for example multi-store, serial numbers, batches). The count import layout depends on these.
- Mirror two behaviours in the validator: if any line has an error, **nothing imports**; and the operator chooses "replace" (one line per item) or "add" (several lines per item).
- Get a sample item list and snapshot layout with synthetic values.

**Step 1: Skeleton and house rules (1 day).** Create `harness/` with `house-rules.md`, `profile/` and `skills/stock-take/` as in section 4. Put the approval rules in the assistant's description too. Initialise git.

**Step 2: Evals first (1 to 2 days).** Write 20 to 30 cases: happy path; unknown item code; leading zeros lost; duplicate lines for one item (tests replace vs add); more than 4 decimals; negative quantity; item not on the snapshot; codes over 15 characters; serialised lines; missing zone; blank rows; text in the quantity column. Include cases where the right answer is to stop and ask.

**Step 3: Deterministic scripts via a Cursor cloud agent (2 to 4 days).**
- `counts_to_accounting.py`: count CSV in, accounting system import file out, in the layout for the confirmed modules.
- `validate_import.py`: mirrors the accounting system's rules and all-or-nothing behaviour; returns plain-language errors.
- `variance_report.py`: counted vs snapshot, value at unit cost, flags above the owner's threshold.
- Unit tests pass on the eval cases; the owner reviews the code diff.

**Step 4: Stock-take SKILL.md (1 day).** Steps: get the snapshot export, get counts, run the scripts, verify (validator plus a totals check), write the variance report with "why" questions for big variances, put the import file and report in `approvals/`, log the episode. Gate: the owner imports. No adjustments by the harness.

**Step 5: Capture path (in parallel).**
- Interim: a photo or scan of the paper count sheet, read by a vision-capable subagent with read-only tools, output as a table that a person checks line by line.
- Target: the one-zone count on a floor surface app, exporting CSV directly. This removes the LLM from transcription entirely.

**Step 6: Onboarding v0 (half a day).** Run the business onboarding interview with the owner. Fill only the fields stock take needs, plus boundaries. Unlock stock take at L1 shadow. Start the week-0 baseline of minutes per count.

**Step 7: Shadow runs (2 counts).** Run the skill alongside the manual process and compare the import file with what the owner keyed. Each difference becomes an eval case or a playbook bullet.

**Step 8: Minimal self-healing.** Run records, failure codes, the repair ladder, and a weekly review section listing edits, failures and one proposed change. Daily reflection can wait until there are daily runs.

**Step 9: Promote to L2** once evals pass and 3 shadow runs are accepted. Measure minutes saved against the baseline.

**Then, in order:** the document classifier for finance intake (supplier invoices and delivery notes, with 50+ sample documents as the eval set); dispatch and receiving (goods-in against PO, reusing the classifier); customer service drafts; operations planning; office admin; people and culture last.
