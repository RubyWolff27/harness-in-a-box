# Changelog

Versions follow `MAJOR.MINOR.PATCH`. Minor versions add guides or skills without changing how existing ones work.

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
