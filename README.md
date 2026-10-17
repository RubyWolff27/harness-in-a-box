# Harness in a box

One AI harness, two editions. A practical setup for running your life, and if you have one, your business, with **one main AI assistant**, a **written-down memory** and a **library of playbooks (skills)**. Everything is plain text files, so it moves with you to whatever tool comes next.

- **Core** (`core/`): the shared harness everyone gets. Vault conventions, the about-me interview, your personal board, area routing, watches, the harness edit ledger and the rules for changing the harness safely.
- **Personal edition** (`editions/personal/`): life areas and personal skills such as a journal, a morning brief and a health coach.
- **Business edition** (`editions/business/`): for solopreneurs and small business owners. Business areas plus skills for document intake, cash flow, an ecosystem audit, a board of digital directors and digital-employee mapping.

## Who it's for

- **Individuals** who want one assistant that knows them, plans with them and remembers what matters. Use core plus the personal edition.
- **Solopreneurs and small business owners.** You run your life and your business with the same head, so you run both editions: core, then personal, then business on top. See `editions/business/README.md`.

## The principle: change starts with the owner

Frontier change starts at the top. The owner sets up their own harness first, uses it daily and gets good at briefing, reviewing and correcting it. Only then do business skills plug in, and only later are skills shared with a team. A harness the owner doesn't use personally will not survive contact with the business.

## Set up (pick your path)

The install guide is `core/AGENTS.md`. Paste the repo link and this prompt into your assistant, swapping in your name, city and edition.

**1. Grok Bot (recommended)**
```text
Set up my AI harness from https://github.com/RubyWolff27/harness-in-a-box. Clone it, read core/AGENTS.md first and follow it. Install core plus the [personal | personal and business] edition. Interview me, create my memory home, save the skills and create my routines. Ask before connecting accounts, writing documents or scheduling anything. I'm [name] in [city].
```

**2. Claude**
```text
Set up my AI harness from https://github.com/RubyWolff27/harness-in-a-box. Read core/AGENTS.md first (raw: https://raw.githubusercontent.com/RubyWolff27/harness-in-a-box/main/core/AGENTS.md) and follow it for Claude. Install core plus the [personal | personal and business] edition. Ask before connecting accounts, writing documents or scheduling anything. I'm [name] in [city].
```

**3. ChatGPT**
```text
Set up my AI harness from https://github.com/RubyWolff27/harness-in-a-box. Read core/AGENTS.md first (raw: https://raw.githubusercontent.com/RubyWolff27/harness-in-a-box/main/core/AGENTS.md) and follow it for ChatGPT. Install core plus the [personal | personal and business] edition. Ask before connecting accounts, writing documents or scheduling anything. I'm [name] in [city].
```

If the assistant can't open the link, download the ZIP (**Code > Download ZIP**) and upload it to the chat. Path guides: `core/GROK-BOT.md`, `core/CLAUDE.md`, `core/CHATGPT.md`. The fuller personal walkthrough is `core/README-personal-template.md`.

## Layout

```text
README.md                 this file
LICENSE                   MIT
core/                     the shared harness
  AGENTS.md               install guide for your assistant
  SETUP.md, GROK-BOT.md, CLAUDE.md, CHATGPT.md, CHATGPT-FEATURES.md
  MASTER-PROMPT.md        the about-me interview and master prompt
  memory/                 about me, telos, decisions log, open loops, memory layers
  board/                  your personal board of advisers
  harness/                vault conventions, why plain files, what's next rule
  skills/                 core skills, incl. area-interview, harness-change, personal-board
  vault-template/         PARA vault, area hubs, watches, harness edit ledger
editions/
  personal/               life areas and personal skills
  business/               business areas and skills (layers on top of personal)
```

## Rules of thumb

- **One assistant, many skills.** Most "new agent" ideas are a missing playbook.
- **Brief before work.** Ideal state and "done when" checks first.
- **It drafts, you send.** Nothing goes out, gets paid or gets deleted without you.
- **You own the memory.** Plain files you can read, move and correct.
- **Change the harness one change at a time,** logged in the edit ledger (`core/skills/harness-change/SKILL.md`).

## Roadmap

- **Now (phase 1):** one owner, one harness. Core plus personal, plus business for solopreneurs and owners.
- **Phase 2 (not now):** shared team skills across users in a business, once the owner's harness is working. This needs shared access, approval logging per person and keeping company data in approved tools. It will be designed separately rather than bolted on.

## Licence

MIT. See `LICENSE`.
