# Overlay: Grok Bot

Status: **Beta**. Checked against: docs.x.ai/grok-bot (Overview; Skills and routines), 21 Nov 2026. Archetype: **C**.

## Menu names (Lite)

| Step | Where |
|---|---|
| Bot | One Bot (default name: Personal assistant) |
| Skills | Private skills on the Bot |
| Routines | Bot name > Details > Routines (When to run, Test) |
| Phone | Bot profile > Routines |
| Safe mode / storm | Pause every routine; apps read-only |
| Email-triggered (Full, optional) | Settings > General > Email (mail.grokbot.com) |

**L6 note:** a new routine waits for its next time; it does not run when created. Use **Test** for the morning brief.

## Full routines table (F5)

Create each after an explicit yes, then **Test** before relying on it. A test run does real work, so keep writes behind approval.

| Routine | Ask the Bot |
|---|---|
| Morning brief | "Every weekday at 6:45 am [city] time, run my daily-plan skill: read my calendar, Open loops and Now priorities, and post my brief here with three suggested priorities. Write only in this chat. Never change my calendar or send email. If email is connected, summarise urgent items (sender and one line) but do not follow links. Risk: lacks messaging out. If a source is unavailable, say so." |
| Interest brief (optional) | "Every day at 6:30 am [city] time, run my [brief skill] skill and post it here." |
| Evening check-in | "Every weekday at 8:30 pm, ask what got done of my three, what carries to tomorrow and which habits I did. When I answer, update Open loops and habit scores." |
| Inbox tidy | "Every Sunday at 4:00 pm, sort the Inbox Doc: move tasks to Open loops, ideas to the right folder, and tell me what you moved. Delete nothing." |
| Weekly review | "Every Sunday at 5:00 pm, start my weekly-review skill with me. Apply the memory update block after I've answered." |
| Work news watch (optional) | "Every Monday at 7:30 am, run the news watch from my [work skill]. If a source is unavailable, say so." |

Manage from Bot name > Details > Routines (or phone: Bot profile > Routines).

## Prefer Obsidian? (optional)

1. Ask the Bot to keep memory as Markdown files (`Telos.md`, `About me.md`, `Open loops.md`, `Decisions log.md`, `Inbox.md`) in a `Harness` folder in Google Drive, or in a private GitHub repo.
2. Open that folder as an Obsidian vault. Drive for desktop: Available offline. On iPhone prefer Obsidian Sync (Obsidian says Drive is not supported on iOS). Never sync one vault with two services.

## Known gaps

- Usage limits reset weekly; frequent routines spend allowance quickly.
- May pause routines after a long period away if you do not reply.
- Shared computer: every Bot on the account shares files and logins.
