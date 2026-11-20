# Audit: Harness in a Box v2.1.0

Date: 21 Nov 2026. Branch: `release/v2.1`. Base: v2.0.0 (`3ab50bd`). Auditor: cloud agent implementing the research board review. This file is for maintainers; it is not on the Lite reader path.

## Scope

File-by-file pass over every file the Lite lane loads:

| File | Words (approx) | Result |
|---|---|---|
| `AGENTS.md` | 1262 | Pass |
| `README.md` | 1120 | Pass |
| `CHOOSER.md` | 693 | Pass |
| `lanes/LITE.md` | 1220 | Pass (L7 Done when added in audit fix) |
| `plan/FIRST-7-DAYS.md` | 413 | Pass |
| `plan/SETUP-SPRINT.md` | 356 | Pass (Full sprint; no Lite contradiction) |
| `checks/SELF-CHECK.md` | 707 | Pass |
| `checks/fixtures/*` | n/a | Pass |
| `core/skills/daily-plan/SKILL.md` | 635 | Pass |
| `core/skills/capture/SKILL.md` | 519 | Pass |
| `core/skills/weekly-review/SKILL.md` | 689 | Pass |
| Every `paths/*.md` (8 guides) | 471 to 1736 | Pass |
| `CHECKSUMS.sha256` | 155 files | Pass after final regenerate |

## Checklist

| Check | Result | Notes |
|---|---|---|
| No Lite step references a Full-only file as something to create | Pass | L4 forbids `telos.md`, `open-loops.md`, `about-me.md`, `decisions-log.md`, Obsidian, Drive folders, PARA. Skills use logical sections; Full names only in the Memory map Full column. |
| No leftover "three assistants" / "all three assistants" / stale Sources framing | Pass | Swept in change 9. Remaining "all three texts" = the three playbooks. ChatGPT UI name "Sources" kept where it is the real menu. |
| No author traces (Ruby / Sage / Maxwell) on the reader path | Pass | Author name removed from `SOURCES.md` and personal template. `RubyWolff27` remains only as the GitHub owner in URLs. Historical CHANGELOG lines unchanged. |
| No em dashes (U+2014) or en dashes used as dashes | Pass | Scanned all `.md` files. |
| Australian spelling | Pass | Lite reader files use organise/summarise forms; no US organize in those files. |
| Every Lite step has a **Done when** | Pass | L1 to L7. L7 Done when added during this audit. |
| Every internal link resolves | Pass | Template refs `paths/<platform>.md` are intentional placeholders, not files. Relative skill folder mentions in Claude path are instructions, not repo links. |
| Checksums match | Pass | `./scripts/generate-checksums.sh` then `sha256sum -c CHECKSUMS.sha256`: 155/155 OK. |
| Commit pin | Noted | Prompts still say `pending-after-merge` until the merge commit is known; follow-up sets the pin before or with the tag. Never move an existing tag. |

## Findings and fixes

| # | Finding | Fix |
|---|---|---|
| A1 | L7 had no **Done when** line | Added Done when requiring the report card, safety passes, and tomorrow-morning clarity. |
| A2 | CHECKSUMS.sha256 stale after the 12 change commits | Regenerated with `scripts/generate-checksums.sh` as part of this audit commit (155 tracked files). |
| A3 | Automated link checker flagged `paths/<platform>.md` | False positive; documented. No file change. |

## Re-run

After A1 and A2: checklist all Pass. Audit clean for merge.

## Deliberately out of scope

- Full-lane skills still use Full file names outside the three Lite playbooks (expected until those skills gain memory maps).
- Website `/harness` updates (separate stage after merge).
- v3.0 items (evals, memory schema v2, archetypes, autonomy ladder).
