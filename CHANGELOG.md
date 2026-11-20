# Changelog

Versions follow `MAJOR.MINOR.PATCH`. Minor versions add guides or skills without changing how existing ones work.

## v2.0.0 (21 Nov 2026)

- **One entry point, pinned to `v2.0.0`.** `AGENTS.md` moves to the repo root and works for any assistant. `core/AGENTS.md` is a redirect stub so v1 prompts keep working. Reader prompts and raw links target release tag `v2.0.0`.
- **Step 0 detects the platform** from what the assistant can do: ChatGPT dot, ChatGPT, Grok Bot, Claude (and Duet), Muse, Gemini, or an unknown agent (`paths/UNKNOWN-AGENT.md`).
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
