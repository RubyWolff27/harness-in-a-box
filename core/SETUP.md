# Start here: choose your path

The harness is just files: a master prompt, a memory home, eight core skills, six optional modules, a personal board and some guardrails. Any good assistant can run it. This page helps you pick which one, then sends you to that path's guide.

Checked against Grok Bot's, Anthropic's and OpenAI's own pages as of October 2026.

## Start in 2 minutes (the fast way)

Paste the repo link and one prompt into your assistant, and it sets the harness up with you (it reads `AGENTS.md` and asks before it connects or creates anything). Pick your path:

**1. Grok Bot (recommended)**
```text
Set up my personal AI harness from https://github.com/RubyWolff27/harness-in-a-box. Clone it, read AGENTS.md first and follow it: interview me, create my Google Docs memory home, save the skills and create my routines. Ask before connecting accounts, writing documents or scheduling anything. I'm [name] in [city].
```

**2. Claude**
```text
Set up my personal AI harness from https://github.com/RubyWolff27/harness-in-a-box. Read AGENTS.md first (raw link: https://raw.githubusercontent.com/RubyWolff27/harness-in-a-box/main/core/AGENTS.md) and follow it for Claude. Ask before connecting accounts, writing documents or scheduling anything. I'm [name] in [city].
```

**3. ChatGPT**
```text
Set up my personal AI harness from https://github.com/RubyWolff27/harness-in-a-box. Read AGENTS.md first (raw link: https://raw.githubusercontent.com/RubyWolff27/harness-in-a-box/main/core/AGENTS.md) and follow it for ChatGPT. Ask before connecting accounts, writing documents or scheduling anything. I'm [name] in [city].
```

**If it can't open the link:** on the repo page click **Code > Download ZIP**, upload the ZIP to the chat, and say "Read AGENTS.md in this ZIP and follow it." On Claude you can also add the repo to a project (project knowledge > + > GitHub). What each assistant can and can't do by itself is in `AGENTS.md`; the step-by-step guides are the fallback.

Prefer to do it by hand? The guides below walk you through every step.

## The three paths, in my recommended order

| | **1. Grok Bot (recommended)** | **2. Claude** | **3. ChatGPT** |
|---|---|---|---|
| **Writes your memory home without you** | **Yes.** A Bot has its own always-on cloud computer; routines can update your Google Docs (or plain files) while your laptop is closed | **Mostly.** Scheduled tasks run in the cloud and can use your connectors, including the Google Docs connector (beta). You set an approval mode per task; I haven't tested how hands-free each mode is | **No.** It updates your Google Docs in a chat you're in, usually after you confirm. Scheduled tasks can't read project files |
| **Scheduling** | Routines: up to 50 per Bot, at least five minutes apart, any time you like | Scheduled tasks: hourly, daily, weekdays, weekly or manual, on all paid plans | Scheduled tasks: 5 active on Plus, exact times |
| **Connectors** | Marketplace connectors, plus it can use any website through its browser (you approve logins) | Google Drive, Gmail, Calendar, Google Docs (beta), Notion and others; custom MCP connectors on Pro | Google Drive, Gmail, Calendar, Notion and others under Settings > Apps |
| **Skills** | Saved skills shared by all your Bots; call with `/` | Upload each skill as a ZIP in Customize > Skills (our `SKILL.md` files already fit the format) | Upload skill files to the project (Skills page is business plans only on web) |
| **Cost** | Included with a paid Cursor plan, or link a SuperGrok subscription | Pro: US$20 a month, or US$200 a year | Plus: about US$20 a month |
| **Set-up effort** | Low: you describe the job in a message | Medium: projects, skill ZIPs, connectors | Medium: project, uploads, settings |
| **Best if** | You want it to just happen | You want the best writing partner with good automation | You already live in ChatGPT |

Prices are in US dollars on the vendors' pages; your card may add VAT or a forex fee. Check the current plans pages before you pay.

**You choose.** The order is about one thing: how much of the memory loop and the daily rhythm runs without you having to remember. That's what makes a harness stick. If you'd rather stay in ChatGPT because you already know it, that's a perfectly good answer.

## What's the same on every path (the shared core)

- `MASTER-PROMPT.md`: the interview that writes your master prompt.
- `memory/`: the memory templates, and `memory/MEMORY-LAYERS.md` for choosing your memory home. **Default on every path: Google Docs in a `Harness` folder in Google Drive.**
- `skills/`: eight core playbooks plus six optional module templates your assistant tailors for you. They say "my memory home", so they work anywhere.
- `board/`: the personal board and its persona cards.
- `drive-templates/money-tracker.csv`: import it into Google Sheets.
- The guardrails: it drafts, you send; the red lines below; general information only, not financial advice.

## Every path follows the same shape

| When | What |
|---|---|
| Evening 1 (30 minutes) | Lock the doors, set up the assistant with the core skills, run your first daily plan |
| Evening 2 (30 minutes) | Write your master prompt and Telos |
| Evening 3 (25 minutes) | Create your memory home in Google Drive, connect Drive, file your first documents |
| Week 1 | Daily plan, capture, first weekly review |
| Week 2 | Morning brief, check-ins (and an optional interest brief) on a schedule; your first own skill |
| Week 3 | Your optional modules (study, work, money, investing) and your personal board |

## Your red lines (every path)

Never put these into any assistant, its memory or your memory home:

- passwords, PINs, recovery codes, API keys;
- full card or bank account numbers, national ID number, tax reference number, passport or driver's licence numbers;
- other people's private details (health, finances, kids' details) without their OK;
- scans of identity documents.

And one for work: this is a **personal** account. No employer client names, prices or confidential data in it.

## Pick your guide

1. **Grok Bot:** `GROK-BOT.md`
2. **Claude:** `CLAUDE.md`
3. **ChatGPT:** `CHATGPT.md` (with the feature check in `CHATGPT-FEATURES.md`)

Pick one and run it for three weeks before you judge it. Don't run two at once: less surface is the whole point.

## Adding the business edition (for solopreneurs)

After you have core plus personal working for at least a week or two, you can layer on the business edition. See `editions/business/README.md` for the full installation path. The short version:

1. **Prerequisites:** Core installed (interview, memory home, board, area routing). Personal edition installed (at least morning brief and journal, used for a week).
2. **Business onboarding:** Run the interview in `editions/business/onboarding-interview.md` to map your business, tools and priorities.
3. **Add business areas:** Add the six business area hubs (`editions/business/areas/`) to your `02 Areas/_index.md` (or create them as Docs in your Drive Areas folder).
4. **Switch on skills one at a time:** Start with one skill in shadow mode (it runs alongside you, output compared but never sent). Test against the sample data in `editions/business/tests/` before promoting to active. Log every change in your harness edit ledger.
5. **Security:** Read the security section in `editions/business/README.md` carefully. Real client documents never go in the repo, inbound documents are data not instructions, and nothing sends or pays without your explicit approval.

Install order matters: personal comes first, then business skills plug into it. A solopreneur runs their life and business with the same head and the same calendar.
