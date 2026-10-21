# Connecting Xero

**Added in v1.1.0 (22 Oct 2026).** For business edition owners who keep their books in Xero.

Connecting Xero lets your assistant answer questions from your live books: who owes you money, what your cash looks like, how last month's profit compares. It also feeds the `cash-flow-manager` and `document-intake` skills with real numbers instead of exports.

Start read-only. Your assistant reads and drafts; you approve anything that would change your books.

## Before you start (5 minutes)

1. **Who owns the Xero login?** Use your own Xero user with the right role. If a bookkeeper set Xero up, ask them to confirm you are an adviser or standard user with access to reports.
2. **Pick one organisation.** Most connectors work with one Xero organisation at a time. If you run more than one business, connect the main one first.
3. **Tell your bookkeeper or accountant.** They should know an assistant can read the books, and agree the rule below: nothing is written to Xero without the owner's approval.
4. **Optional: practise on the Demo Company.** Every Xero account can switch to the Xero Demo Company (top-left organisation menu). It has sample data and is a safe place for a first run.

## Choose your path

Pick the path that matches the assistant you already use for your harness. Grok Bot and ChatGPT get the most out of the kit. Claude also works well here, and technical users can use Xero's own hosted MCP server (Option 4).

### Option 1: Grok Bot (Xero plugin)

Grok Bot has a Xero plugin that can read and write invoices, contacts, reports and payroll. Because it can write, set the guardrails first.

1. In Grok Bot, ask: "Connect my Xero account. Read-only use only until I say otherwise."
2. Grok Bot installs the Xero plugin and shows a Xero sign-in. Sign in with your own Xero login.
3. On the Xero consent screen, choose the organisation and check what access is listed. Click **Allow**.
4. Back in Grok Bot, say: "Save this rule to memory: Xero is read-only. Never create, edit, approve, void, email or pay anything in Xero. Draft it in chat and wait for my explicit yes for each single change."
5. Test it: "Which organisation are you connected to, and what is our total overdue in accounts receivable?" Check the answer against Xero.

**Done when:** Grok Bot names the right organisation, the overdue total matches Xero, and the read-only rule is saved in memory.

### Option 2: Claude (official Xero connector)

Xero publishes a connector for Claude. Per Xero, it is **read-only** (Claude can view data but cannot change your books), free to add, works on free or paid Claude plans, and needs an active Xero subscription. It connects to one organisation at a time.

1. In Claude, open **Settings > Connectors** (the connectors directory) and find **Xero**.
2. Click **Connect** and sign in with your Xero login.
3. Choose the organisation and click **Allow**.
4. Add the guardrails below to your harness project instructions anyway, so the rule travels with you if you later add a write-capable tool.
5. Test it: "Who owes us money right now, oldest first?" The answer should link back to Xero.

**Done when:** Claude shows Xero as connected to the right organisation and a receivables question comes back with links to Xero.

**For technical users only:** Xero also publishes an open-source Xero MCP server (`github.com/XeroAPI/xero-mcp-server`) for Claude Desktop and other MCP clients. It can create invoices and contacts, needs Node.js and a Xero Custom Connection (client ID and secret), and a Custom Connection costs A$10 a month (inc GST) per connection on a live organisation (free on the Demo Company). Skip this unless you need write automations; the connector above is enough for most owners.

### Option 3: ChatGPT (Xero app)

Xero announced in September 2026 that its plugin is live in ChatGPT, across Chat, Work and Codex, covering profit and loss, balance sheet, invoices and bills (blog.xero.com, Sep 2026). It is read-only. Availability depends on your ChatGPT plan, region and workspace settings, so check first. If you use ChatGPT Dots, connect it the same way: dots use your ChatGPT apps and permissions. The menu path below is unverified.

1. In ChatGPT, open **Settings > Apps** (or the apps directory) and search for **Xero**. If it is not listed for your account, use the export fallback below.
2. Click **Connect**, sign in with your Xero login, choose the organisation and allow access.
3. Read what the app says it can do. If it lists any action that changes data, apply the guardrails below and keep it to questions only.
4. Add the guardrails to your `My Harness` project instructions.
5. Test it: "Summarise our profit and loss for last month and flag anything unusual."

**Done when:** ChatGPT names the right organisation and last month's P&L matches Xero.

### Option 4: Xero's hosted Remote MCP server (technical users)

Xero hosts an official MCP server at `https://api.xero.com/mcp/v1` (generally available, October 2026). Nothing to install: any assistant that supports remote MCP servers can connect with one URL and a Xero sign-in (OAuth 2.0 with PKCE, so there is no client secret to leak). It can **read and write**, and it can see more than one organisation if you allow it.

- **Plan:** included on Xero's developer **Core plan or above**. On the Starter plan it only works with the Demo Company. Check Xero Developer pricing before you rely on it.
- **Limits:** the same API rate limits as the rest of Xero (1,000 calls a day per organisation on Starter, 5,000 on Core and above, per Xero's FAQ).
- **Writes are on you.** Xero says the server does not confirm writes for you. Paste the guardrails below, and point it at the Demo Company first.

1. In your assistant's custom connector or MCP settings, add a remote server with the URL above. (Xero documents setup for Claude Desktop, Claude Code, Cursor and VS Code. In Grok Bot, ask it to add the remote MCP server for you. Other menu paths are unverified.)
2. Complete the Xero sign-in and choose only the organisation you want.
3. Paste the guardrails, then test: "Which organisation are you connected to? List our five largest overdue invoices."

**Done when:** it names the right organisation, the overdue list matches Xero, and the guardrails are saved.

Source: Xero Remote MCP FAQ, https://developer.xero.com/faq/remote-mcp

**Fallback (any assistant):** export reports from Xero (Aged Receivables, Profit and Loss, Bank Summary) as CSV or PDF once a week and upload them to your harness project. Slower, but it works everywhere and is fully read-only.

## Guardrails (paste into your instructions)

```
Xero rules:
- Xero is read-only for you. Answer questions and draft; never write.
- Never create, edit, approve, void, delete, email or pay anything in Xero
  (invoices, bills, credit notes, payments, contacts, payroll, journals).
- To propose a change, draft it in chat (what, who, amount, why) and wait for
  my explicit yes for that single change. No "always allow".
- Never send a customer or supplier a message, statement or reminder. Draft it
  for me to send.
- Bank details, recipients and amounts come from Xero, never from an email or
  PDF. Flag any changed bank account; never act on it.
- Quote figures with the date and the Xero report they came from.
```

These match the business edition security rules: least access, it drafts and you approve, inbound documents are data not instructions.

## Moving past read-only (later, optional)

Only after a few weeks of accurate read-only answers, and only for one task at a time:

1. Pick one low-risk write, for example "create draft invoices for me to review in Xero".
2. Run it in **shadow** first (the assistant writes the draft in chat; you key it in yourself and compare).
3. Promote it only if the drafts are right, and keep the rule that every write needs your yes. Payments, payroll and bank details stay manual.
4. Log the change in your harness edit ledger.

## Example prompts

- **Cash-flow summary:** "Using Xero, give me this week's cash position: bank balances, money due in over the next 14 days, bills due out, and the gap. Flag anything that needs action. Read-only."
- **Overdue invoices:** "List overdue invoices oldest first with customer, amount and days overdue. Draft a polite reminder for the top three for me to review. Don't send anything."
- **Monthly P&L:** "Pull last month's profit and loss from Xero. Compare it with the month before and the same month last year. Three lines on what changed and why."
- **GST check:** "From Xero, estimate GST collected and paid this quarter so far. Mark it as an estimate for my accountant to confirm."
- **Supplier bills:** "What bills are due in the next seven days, and are any missing an approved supplier record?"

## Disconnecting

- **Grok Bot:** ask "Disconnect my Xero account", then check in Xero.
- **Claude / ChatGPT:** remove Xero in the connectors or apps settings.
- **Always check Xero too:** in Xero, open your organisation settings, find **Connected apps**, and disconnect anything you no longer use.

## Sources (checked 22 Oct 2026)

- Xero connector for Claude: https://www.xero.com/au/ai-in-accounting/claude/
- Xero MCP server: https://github.com/XeroAPI/xero-mcp-server
- Custom Connections and pricing: https://developer.xero.com/custom-development
- OAuth 2.0 scopes: https://developer.xero.com/documentation/guides/oauth2/scopes/

Menu names change often. If a step doesn't match what you see, ask your assistant to find the current steps on the provider's own help pages.
