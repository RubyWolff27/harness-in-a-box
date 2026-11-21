# Changelog

Versions follow `MAJOR.MINOR.PATCH`. Minor versions add guides or skills without changing how existing ones work.

## v3.0.1 (21 Nov 2026)

Patch: Full lane overlay pointers, restored Muse / Allow-for-this-task detail, tag-only pin, honest "untested" timing, CI path-ref and pin checks, weekly error-log wiring.

- **Full lane:** every former `paths/` guide reference now points at the matching archetype or product overlay (ChatGPT / Claude / Grok Bot Full content lives in overlays).
- **Muse overlay:** restores operational L1 approvals including **Allow for this task**, memory-home / Playbooks fallback, Full notes, self-check notes (kept concise).
- **Pin:** drop the separate content-commit SHA. Reader prompts pin to tag `v3.0.1` only; the release step must cut the tag on the merge commit so tag == what the setup link opens.
- **Timing:** reader text says **about 30 minutes (untested)** until volunteer runs are logged.
- **CI:** fail on any `paths/<name>.md` reference outside `paths/`; fail if README/AGENTS keep a stale commit-SHA pin or a tag that disagrees with `VERSION`.
- **Error log:** weekly review step and Lite hand-over point at `core/harness/error-log.md`.
- Lite stays about 30 minutes (untested).

## v3.0.0 (21 Nov 2026)

Major: capability archetypes, memory schema v2, compile loop, playbook contracts, autonomy ladder, portable export. Lite claimed about 30 minutes (no volunteer timing yet). Older paths-folder prompts keep working via redirect stubs.

- **Archetypes A-D** replace path-first setup: chat-only, chat+memory+schedules, always-on cloud computer, messaging-native. One-page dated product overlays hold menu names and known gaps. Capability probe in `AGENTS.md` Step 0. Archetype D keeps Instinct week-one rules.
- **Memory schema v2:** always-loaded Index (~400 words), provenance tags on every line, Now expires after 90 days, section budgets and archive rule (`core/memory/SCHEMA-v2.md`).
- **Compile loop:** weekly (nightly on C) proposes one memory diff; apply only after yes.
- **Playbook contracts:** Inputs/Output on Lite skills; `evals/` with three samples each; weekly error log.
- **Autonomy ladder:** shadow → draft → act-with-approval → act-and-report; promote after evals + yes; drop after failure; Rule-of-Two shape per rung.
- **Export + seed:** single-file export; self-check import for checks 1, 4, 6; plain-text seed under ~1,500 words.
- **Also:** storm alias for safe mode; ship's-log line per routine; monthly five-minute drill; household/children note.
- Audit: `docs/audits/AUDIT-v3.0.md` (includes cold Lite runs on B, C, D).

## v2.1.0 (21 Nov 2026)

Non-breaking hardening from the research board review. Reader prompts change by version number and commit pin only.

- **Memory map (D1):** Lite playbooks use logical sections `[Now]`, `[Open loops]`, `[Decisions]`, `[Inbox]` with a Lite/Full lookup table. L4 forbids Full-only files, Obsidian and PARA.
- **Pin + checksums (D2):** prompts cite tag `v2.1.0` and a commit pin; `CHECKSUMS.sha256` plus `scripts/generate-checksums.sh`; agents verify when they can. Self-limiting line in `AGENTS.md`.
- **Behavioural safety (D3):** `checks/fixtures/` sample email and web note; self-check 8 runs capture on them.
- **Rules only from the person (D4):** new rules quoted back word for word with a date; self-check 10; day 5 and harness-change updated.
- **Routine risk contracts (D8):** each Lite routine states which trifecta leg it lacks; morning brief writes only to chat; email summarise-only, no link following.
- **Safe mode:** one phrase pauses every routine and drops connectors to read-only (README and every path).
- **Messaging-native path (D12):** messaging-native archetype D (Watch) with Instinct notes; wired into Step 0 and `CHOOSER.md`.
- **Stale text sweep (D5, D14):** no "three assistants" leftovers; author name neutralised on the reader path.
- **Business prerequisites (D6):** Full lane plus two weeks of personal use.
- **Drift check (D7):** periodic-review step 5 is the STANDARD five-minute compare on every platform.
- **Interrupt rule (D13):** master prompt section 10 and Lite memory; who's-the-boss self-check; kit is for adults; L5 notes red lines cover what you type, not connected email contents.
- Audit: `docs/audits/AUDIT-v2.1.md`.

## v2.0.0 (21 Nov 2026)

- **One entry point, pinned to `v2.0.0`.** `AGENTS.md` moves to the repo root and works for any assistant. `core/AGENTS.md` is a redirect stub so v1 prompts keep working. Reader prompts and raw links target release tag `v2.0.0`.
- **Step 0 detects the platform** from what the assistant can do: ChatGPT dot, ChatGPT, Grok Bot, Claude (and Duet), Muse, Gemini, or an unknown agent (unknown-agent stub under the paths folder).
- **One guide per platform in `paths/`**, each with a status (`Ready`, `Beta`, `Draft`, `Watch`) and a "checked against" date. Merged the long guides from `core/` (`GROK-BOT.md`, `CLAUDE.md`, `CHATGPT.md`) into `paths/` and left redirect stubs at the old `core/` paths. Added `MUSE.md` (Beta, awaiting maintainer test), `CHATGPT-DOTS.md` (Beta), `GEMINI.md` (Draft) and `UNKNOWN-AGENT.md`.
- **Lite is the default for everyone** (`lanes/LITE.md`): about 30 minutes, three playbooks, two routines, one memory document. `lanes/FULL.md` holds the full v1.2 install as F1 to F8.
- **Neutral chooser** (`CHOOSER.md`) replaces `core/SETUP.md` and drops the author preference line. Removed "Built and tested by Ruby" from the repo.
- **Neutral Grok Bot default name** (`Personal assistant`, replacing `Chief of staff`).
- **Business edition** (`editions/business/README.md`) skips Muse and Gemini for now; supports Grok Bot, Claude and ChatGPT.
- **Point-and-go standard and one-home-per-fact rule** (`STANDARD.md`), so built-in memory and the memory home don't drift.
- **Required self-check** (`checks/SELF-CHECK.md`) with a trap test and a prompt-injection test.
- **Setup sprint and first seven days** (`plan/`), plus a "My setup got stuck" GitHub issue template (`.github/ISSUE_TEMPLATE/setup-stuck.yml`).
- Fix: `VERSION` (`2.0.0`) matches `CHANGELOG.md`; single default morning brief time (`6:45 am`).

## v1.2.1 (1 Nov 2026)

- CHATGPT-FEATURES.md: fix Dots reference to point to SETUP.md instead of non-existent section in CHATGPT.md.
- CLAUDE.md: add Claude Duet context (announced 21 October 2026, US-only research preview for Pro, Max and Ultra with waitlist); note under 'What you need'.
- GROK-BOT.md: add Import Memory (optional shortcut in Evening 2), Vault and 1Password integration (Evening 1 Step 1), Shared Bots (Honest trade-offs), and email-triggered routines (Week 2 routines table).
- SOURCES.md: add Claude Duet announcement and expanded Grok Bot sources (bots, settings, Vault, computer and apps, Shared Bots, agent email).
- Update Grok Bot 'checked against' date to November 2026.

## v1.2.0 (22 Oct 2026)

- Xero guide: add Option 4, Xero's hosted Remote MCP server (Core plan or above); confirm ChatGPT Xero plugin is live and read-only.
- Recommend Grok Bot or ChatGPT Dots for most value (Ruby's current preference is Grok Bot); Claude and ChatGPT Plus as alternatives.
- Fix SETUP.md prompts to point at core/AGENTS.md.
- Fix business test file names (expected-labels.csv, expected-weekly-position.csv).
- Add connectors map and mark classifier-gateway as advanced.
- Refresh Grok Bot and ChatGPT feature notes for October 2026 (Dots, Connect apps).

## v1.1.0 (22 Oct 2026)

### Added
- Business edition: **Connecting Xero** guide (`editions/business/integrations/xero.md`). Three paths in kit order (Grok Bot Xero plugin, Claude's official Xero connector, ChatGPT's Xero app) plus an export fallback. Read-only first, paste-in guardrails (draft never send or post, every write needs the owner's yes), a path to careful write access, example prompts for cash flow, overdue invoices and monthly P&L, and disconnect steps.
- Business edition README: new Integrations section linking the guide.
- `VERSION` file and this changelog.

## v1.0.0 (18 Oct 2026)

- Initial release: one core, personal and business editions.
- Business edition setup documentation and synthetic test data (#1).
