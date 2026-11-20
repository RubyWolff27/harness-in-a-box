# Audit: Harness in a Box v3.0.0

Date: 21 Nov 2026. Branch: `release/v3.0`. Base: v2.1.0 tip on main. Auditor: cloud agent. Maintainer-only path (`docs/audits/`).

## Scope

- All Lite-loaded files after the archetype move
- Simulated cold Lite runs on archetypes **B**, **C** and **D** (read files as a fresh agent; follow literally; log improvisation)

## Automated checks

| Check | Result |
|---|---|
| No em/en dashes in `.md` | Pass (fixed A–D en dash in README during audit) |
| `paths/*.md` are stubs pointing to archetype + overlay | Pass |
| Archetypes A–D exist; D has week-one strict rules | Pass |
| Memory schema v2 referenced from L3 | Pass |
| Compile-loop skill present | Pass |
| Lite three have Inputs/Output and `evals/` | Pass |
| Autonomy ladder + export + seed present | Pass |
| Storm / ship's-log / monthly drill / household note | Pass |
| Every L1–L7 has Done when | Pass |

## Cold Lite simulation

Method: read only `AGENTS.md` → Step 0 → archetype + overlay → `lanes/LITE.md` → three skills → `SELF-CHECK.md`. No improvisation beyond "ask the person what they see" when an overlay says so.

### Archetype B (ChatGPT Project overlay)

| Step | Followed | Improvised? |
|---|---|---|
| Probe → B + chatgpt overlay | Yes | No |
| L3 schema v2 Index + tags | Yes | No |
| L4 Lite memory map only | Yes | No |
| L6 risk + ship's-log | Yes | No |
| Safe mode / storm | Yes | No |

Finding: none. Overlay menu names sufficient for Lite.

### Archetype C (Muse overlay)

| Step | Followed | Improvised? |
|---|---|---|
| Probe → C + muse overlay | Yes | No |
| L1 Always ask permissions | Yes (overlay) | No |
| L4 Playbooks fallback required | Yes | No |
| Nightly compile offered | Yes (L6) | No |

Finding: none. Background memory on Muse is named as a known gap; agent told to keep My Harness as record.

### Archetype D (Instinct overlay)

| Step | Followed | Improvised? |
|---|---|---|
| Probe → D + instinct overlay | Yes | No |
| Week-one no email/payments | Yes | No |
| Seed under ~1,500 chars | Yes | No |
| Menu names | Ask person (overlay) | No inventing |

Finding: none. AU availability left undocumented as specified.

## Findings and fixes

| # | Finding | Fix |
|---|---|---|
| A1 | README used Unicode en dash in "A–D" | Replaced with ASCII `A-D` |
| A2 | CHECKSUMS stale across v3 commits | Regenerated in audit commit |

## Re-run

Clean for merge after A1/A2.

## Deliberately out of scope

- No new editions, no extra skills beyond compile-loop, no multi-agent, no dashboard
- Full-lane long guides remain thin; overlays are one-page by design
- Website update after tag
