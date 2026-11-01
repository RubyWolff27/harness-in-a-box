# Changelog

Versions follow `MAJOR.MINOR.PATCH`. Minor versions add guides or skills without changing how existing ones work.

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
