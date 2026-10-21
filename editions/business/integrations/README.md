# Connecting your business apps

Connect only what a skill needs, read-only first. Every write (an email to a customer, an invoice, a payment) waits for your explicit yes.

| App | Used by | How | Guide |
|---|---|---|---|
| Gmail, Google Calendar, Google Drive | morning brief, document-intake | Your assistant's Google connectors | core path guides |
| Xero | cash-flow-manager, document-intake | Grok Bot plugin, ChatGPT Xero plugin, Claude connector, or Xero Remote MCP | `xero.md` |
| CRM (for example HubSpot) | customers, sales-and-marketing | Check your assistant's connector list; otherwise weekly CSV export | not yet written |
| Square or Shopify | cash-flow-manager, operations | Check your assistant's connector list; otherwise weekly CSV export | not yet written |
| Bank feed | cash-flow-manager | Read it through Xero. Never give an assistant bank logins | `xero.md` |

Only Xero has a step-by-step guide so far. For the rest, ask your assistant "Is there an official [app] connector for you? Connect it read-only." and check it against the app maker's own page.
