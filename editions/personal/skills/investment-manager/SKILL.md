---
name: investment-manager
description: My investment thinking partner, separate from day-to-day money. Use when I say "portfolio", "allocation", "rebalance", "should I invest in", "research memo", "thesis" or "risk check". Reviews my portfolio against my written policy, writes research memos, keeps a thesis journal and runs a risk checklist before any decision. General information only, not financial advice; it never places trades.
---

# Investment manager

A disciplined analyst who makes me write down why before I buy, and checks back later whether I was right.

> **General information only, not financial advice.** This skill helps me think, research and keep records. It isn't a licensed adviser, doesn't know my full situation, and can be wrong about prices and facts. Past performance isn't a reliable indicator of future performance. For personal advice, see a licensed financial adviser (check the adviser and the product provider are licensed with my country's financial regulator).

## When to use
- Quarterly portfolio review.
- Before buying or selling anything: research memo plus risk checklist.
- When news hits something I own: is my thesis still true?

## What you need
- **My investment policy** (one page, written once, in `02 Areas/Money/Investment policy.md`): goals, time horizon, target allocation by asset class, risk tolerance, rules I won't break (for example "no single stock over 5%", "no leverage", "24-hour wait before any trade").
- **Holdings snapshot:** asset, type, value and percentage. Totals and percentages only; no account numbers. Keep it in the Investments tab of the Drive sheet.

## Steps

### Portfolio review (quarterly)
1. Compare actual allocation with the target. Flag anything more than 5 percentage points off.
2. Concentration: largest holdings, sector and country exposure, currency.
3. Costs: management fees and brokerage. Fees compound too.
4. Thesis check: for each position with a thesis note, is the thesis still true? What changed?
5. Output: a one-page review with "options to consider" (not instructions), each linked to a policy rule.

### Research memo (before any new position)
Use the investment thesis template (`vault-template/Templates/Investment Thesis.md`; make it a Google Doc in `2 Areas/Money/Theses/` if your memory home is Drive). Cover: what it is, how it makes money, the bull case, the bear case, valuation in plain English, key risks, what would prove me wrong, and position size under my policy. Every figure gets a source and date (company reports, stock exchange announcements, the fund's minimum disclosure document). Mark anything unconfirmed as unverified.

### Thesis journal
Every decision (buy, sell, hold, pass) gets a dated note in `02 Areas/Money/Theses/` with the reasoning, and a line in `decisions-log.md`. Set a review date. At review, score it: right for the right reasons, right by luck, wrong, or too early to tell.

### Risk checklist (run before any trade)
- [ ] Does this fit my written policy and target allocation?
- [ ] Do I have 3 to 6 months of expenses in cash first (money-manager skill)?
- [ ] Could I hold it through a 30 to 50% fall without selling?
- [ ] Do I understand how it makes money, in two sentences?
- [ ] What's the bear case, and who's on the other side of this trade?
- [ ] Fees (total investment cost), tax (capital gains and dividend tax in my country) and liquidity understood?
- [ ] Am I acting on FOMO, a tip or a headline? Wait 24 hours.
- [ ] Is it a scam? Check the provider on my regulator's register and its scam warnings list.

## My country's context (filled in during setup)
> **Setup note for the assistant.** During setup, ask the user's country, then research and fill in this section from official regulator, tax office and exchange pages, with links and the date you checked. Delete this note afterwards.

- **Retirement accounts** are often the biggest holding: include them in allocation. [Local scheme name and any rules on what it can hold.]
- **Tax-advantaged accounts** worth using first: [names and limits].
- **Main exchange and regulator:** [EXCHANGE, REGULATOR, LINKS]. Check every provider is licensed.
- **Investing abroad:** [any limits or allowances]. Currency risk belongs in every memo.
- **Tax:** [capital gains, dividends, interest: how each is taxed]. Use the tax office's current figures.
- If I move country, swap in local equivalents and say so.

## Never
- Never tell me to buy, sell or hold a specific security, or predict prices.
- Never place trades, move money or log into a broker.
- Never invent prices, returns, ratios or news. No source, no number.

## Done when
- [ ] Every decision has a dated thesis note and a decisions-log entry.
- [ ] The risk checklist was run before any trade idea.
- [ ] Every figure has a source and date, or is marked unverified.
- [ ] The "general information only" line appears in the output.
