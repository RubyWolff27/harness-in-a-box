# Full lane (60 to 90 minutes, or three short evenings)

For the assistant: run this after the Lite lane has worked for about a week, or straight away if the person insists. It **builds on** Lite: `My Harness` becomes a folder of separate documents, and more playbooks are added. Your path guide (`paths/<platform>.md`) still decides where things go and overrides anything platform-specific written below.

**Fetch as you go** (raw base in `AGENTS.md`): `core/MASTER-PROMPT.md`, `core/memory/MEMORY-LAYERS.md`, `core/memory/telos.md`, `core/memory/about-me.md`, `core/memory/open-loops.md`, `core/memory/decisions-log.md`, `core/board/README.md`, `core/board/personas.md`, the five remaining core skills (`periodic-review`, `inbox-triage`, `meeting-prep`, `research-brief`, `skill-writer`), `core/skills/harness-change/SKILL.md`, and only the optional modules they choose from `editions/personal/skills/`. Follow your guide in `paths/` for where files, skills and routines go on this platform.

## F1. Split the memory home

With their yes, turn the one `My Harness` document into a folder called `Harness` with: **Telos**, **About me**, **Open loops**, **Decisions log**, **Inbox**, **Master prompt**, and later **Board personas** and **Edit ledger**. Move the Lite content across; don't retype it. Keep the original `My Harness` until they've checked the new folder, then ask whether to archive it (never delete without a yes).

**Done when:** each document opens and has real content.

## F2. Interview and master prompt (about 20 minutes)

Run the interview in `core/MASTER-PROMPT.md` as a conversation: one question at a time, accept "don't know yet", allow voice answers. Make sure you cover these, because they decide which optional modules to build in F4 (each can be "skip"):

- **Where they live:** city, country, time zone and currency (sets routine times, spelling, and the money and investing context).
- **Work:** role and industry, and what they want to get sharper at.
- **Study:** anything they're studying or learning seriously, key dates, and their institution's AI rules.
- **Money:** their top money goal, and whether they invest (totals only, never account numbers).
- **Interests:** a sport, team, hobby or topic they'd like a short daily brief on.
- **Life areas and people:** which areas matter most (health, family, creativity, a side business), to choose board seats.

Then draft:
1. the **full master prompt**;
2. a **short version** under 1,500 characters for their custom instructions or preferences;
3. **About me** (from `core/memory/about-me.md`);
4. **Telos** (from `core/memory/telos.md`): mission, three 12-month goals each with an ideal state and "done when" checks, three 90-day priorities, two or three habits.

Show them the drafts and fix what they correct.

## F3. Memory home: Google Docs in Drive (default)

Explain in two lines why Google Docs is the default (all three assistants can read and update it; no re-uploading). Ask: "May I connect your Google Drive and create a Harness folder with your memory Docs?"
- **If yes and you can** (Drive connector, Google Docs connector, or your own browser on Grok Bot): create `My Drive/Harness/` with Google Docs **Telos, About me, Open loops, Decisions log, Inbox, Master Prompt** (Board personas comes in F6), filled from F2 and the templates. Also create `0 Inbox`, `1 Projects`, `2 Areas` (Home, Money, Health, Car), `3 Resources`, `4 Archive`. Ask the user to sign in themselves; never handle their password.
- **If you can't create files:** give each Doc as a paste-ready block with its name, and tell them exactly where to make it.
- If they'd rather use Obsidian or Notion, see `core/memory/MEMORY-LAYERS.md` (and "Prefer Obsidian?" in `paths/GROK-BOT.md`).

## F4. Tailor the optional modules, then load the skills

**Tailor first.** The kit has eight core skills that everyone gets (daily-plan, capture, weekly-review, periodic-review, inbox-triage, meeting-prep, research-brief, skill-writer) and six optional module templates. Show the user which modules fit their interview answers and ask which they want:

| Module template | Build it when | What you fill in |
|---|---|---|
| `study-partner` | They're studying or learning something seriously | Course, subjects, dates, AI rules, how they learn |
| `work-partner` | They want a thinking partner for their job | Role, industry, country; key concepts, rules, regulators and trusted sources (research them and link them) |
| `money-manager` | They want a budget, bills, goals and net worth routine | Country, currency, tax year, retirement and tax-advantaged accounts, regulator (from official pages, with links and the date) |
| `investment-manager` | They invest or plan to | Country's accounts, exchange, regulator, tax on gains and dividends. General information only, not advice |
| `daily-interest-brief` | They follow a sport, team, hobby or topic | Interest, favourites, official sources, where to watch or follow in their country, time zone |
| `personal-board` | Always offer it | The seats (see F6) |

For each module they want: fill in every [BRACKET], research the country- or industry-specific facts from official sources (cite them with the date), delete the setup note, give it a clear name (for example `nursing-partner` or `football-brief`), and show them the result before saving. Skip the rest; they can add them later with skill-writer.


> **Platform note.** The per-platform lines below (Grok Bot, Claude, ChatGPT) are kept from v1.2 for reference. For ChatGPT dots, Muse, Gemini or any other agent, use the "Full lane" section of your path guide instead.

**Then load:**

- **Grok Bot:** save each `skills/*/SKILL.md` as a private skill with the same name. Start with the eight core skills (daily-plan, capture, weekly-review, periodic-review, inbox-triage, meeting-prep, research-brief, skill-writer); then add the tailored modules from above. Confirm they are enabled under Connect apps > Private skills.
- **Claude:** you can't install skills yourself. If code execution is on, make one ZIP per skill folder (folder at the root of the ZIP) and give them the files; otherwise tell them to zip each folder. Then tell them: Settings > Capabilities > turn on code execution; Plugins (formerly Customize) > Skills > "+" > Upload a skill, once per ZIP. List the eight core skills and their tailored modules by name. Also create (or tell them to create) a project called `My Harness` with the project instructions from `paths/CHATGPT.md`, adapted ("my skills" instead of "files named skill-*.md").
- **ChatGPT:** you can't create projects or upload files yourself. Tell them: create a project `My Harness`; upload `core/MASTER-PROMPT.md` (or their filled-in version) and the eight core `SKILL.md` files plus their tailored modules (renamed `skill-daily-plan.md` and so on); paste the project instructions from `paths/CHATGPT.md`. Give them the instructions as one copy block.

## F5. Routines and schedules (in their time zone)

Offer this set and ask which they want (all times are suggestions):
- Morning brief: weekdays 6:45 am
- Daily interest brief: daily 6:30 am (only if they built one)
- Work news watch: Monday 7:30 am (only if they built a work partner)
- Evening check-in: weekdays 8:30 pm
- Weekly review: Sunday 5:00 pm

Per platform:
- **Grok Bot:** create the routines yourself after their yes, using the prompts in the routines table in `paths/GROK-BOT.md`. Run **Test run** on each and show the result. You may also offer the Sunday inbox tidy.
- **Claude:** create scheduled tasks yourself if this Claude can (ask in chat; the "Scheduled" page). Otherwise give the exact prompts and steps from `paths/CLAUDE.md`. Suggest a hands-off approval mode only for read-and-report tasks.
- **ChatGPT:** you may be able to create a scheduled task from the chat; if not, give the exact prompts from `paths/CHATGPT.md`. Remind them Plus has 5 tasks and a scheduled task can't read project files, so prompts must be self-contained.

## F6. The personal board

Read `core/board/README.md` and `core/board/personas.md`. **The Chair, the Contrarian and the Conscience always sit.** From the interview, suggest three to seven more seats from the menu (CFO, Investor, Mentor, Professor, Insider, Coach, Partner) or new ones that fit their life (for example "The Creative", "The Parent", "The Founder"), and let them choose. Drop the cards they don't want, write any new cards in the same format, then interview them briefly to fill each card's "About me" line, then save a **Board personas** Doc in `Harness` (with their yes) or give it as a paste-ready block. Demonstrate once: "Ask the Contrarian about [a real decision]."

## F7. First run and hand-over

Run the daily plan skill with them now. Then show this checklist with ticks and crosses:

**Done when:**
- [ ] Two-factor is on for their AI account and Google (ask them; you can't check).
- [ ] Master prompt saved; short version in custom instructions or preferences.
- [ ] Memory home exists with real content in Telos, About me and Open loops.
- [ ] The eight core skills are loaded and the daily plan has run once.
- [ ] Each optional module they chose is tailored (no [BRACKETS] left) and loaded.
- [ ] Chosen routines or scheduled tasks exist (or the user has the exact prompts).
- [ ] Board personas saved, with the Chair, Contrarian and Conscience plus their chosen seats.
- [ ] They know their red lines and the "it drafts, you send" rule.

**Still manual for them** (list only what applies to this platform), for example: turning on two-factor; signing in to Google; Claude skill uploads; ChatGPT project creation and uploads; any schedule you couldn't create; importing `editions/personal/drive-templates/money-tracker.csv` into Google Sheets in Week 3.

Close with what happens next: daily plan every morning for a week, first weekly review on Sunday, any optional modules they skipped can be added in Week 3 (see their path guide).

## Editions

This kit has one core and two editions. Ask the user which they want:
- **Personal:** install core, then `editions/personal/` (life areas, journal, morning brief, health coach and the optional modules in `editions/personal/skills/`).
- **Solopreneur or small business:** install core and personal first, use them for a week or two, then `editions/business/` (run `editions/business/onboarding-interview.md`, add the business area hubs, switch skills on one at a time, shadow first; Business edition currently supports Grok Bot, Claude and ChatGPT, skipping Muse and Gemini for now).
Optional modules referenced above as `skills/<name>` for study, work, money, investing and daily interest briefs live in `editions/personal/skills/`.


## F8. Start the edit ledger

Save `core/skills/harness-change/SKILL.md` and create the **Edit ledger** document from `core/vault-template/05 Harness/harness-edit-ledger.md`. From now on, every change to a playbook, routine or rule gets one line: date, what changed, why, how we'll know it worked.

**Done when:** the ledger has its first line ("Full lane installed").

Then re-run `checks/SELF-CHECK.md` including the Full lane checks.
