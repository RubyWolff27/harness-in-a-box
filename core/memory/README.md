# Memory

Your harness remembers four kinds of things. Keep them in four small files.

| File | Remembers | Changes |
|---|---|---|
| `telos.md` | Your mission, goals (each with a "done when"), 90-day priorities and habits | Quarterly, with habit scores weekly |
| `about-me.md` | Who you are: facts, preferences, people, routines | Slowly. Check it monthly. |
| `decisions-log.md` | What you decided, why, and what happened | Grows a few lines a week |
| `open-loops.md` | Everything unfinished that's on your mind | Every day |

The fourth kind of memory, *how to do things*, lives in your skills.

## Where memory lives

Pick your **memory home** first: see `MEMORY-LAYERS.md`. The kit's default is Google Docs in a `Harness` folder in Google Drive (all three paths can read and update them). Obsidian is the optional alternative.

- **The record:** these files, in your memory home (default: Google Docs in `My Drive/Harness/`; or Obsidian at `05 Harness/Memory/`). You own them, and they export to plain text, so they'll work with any AI tool.
- **How your assistant sees them:** live through Google Drive (Grok Bot's connector or browser, Claude's Drive connector, ChatGPT's Drive app), or as copies uploaded to the project (Obsidian on ChatGPT). Each assistant's own memory is only a helpful copy.

If they disagree, the memory home wins.

## The memory loop: what gets written where, and when

Nothing is written to your memory home that you haven't approved. Each skill proposes the update and you approve it, either each time or once, when you set up a routine. **Grok Bot:** routines update the Docs and report what changed. **Claude:** updates Docs in chat after your yes; scheduled tasks follow the approval mode you chose. **ChatGPT:** updates the Doc in a chat you're in (it may ask you to confirm). **Obsidian on ChatGPT:** paste-ready text; you paste it in and re-upload changed files.

| When | Skill | Writes to | You do |
|---|---|---|---|
| Any time | capture | `00 Inbox` note, `open-loops.md` line, or a scheduled reminder | Approve or paste (10 seconds) |
| Every evening | daily-plan (evening check) | Daily note (done, carried, habits); new lines for `open-loops.md` | Approve or paste (2 minutes) |
| After a big decision | personal-board | `decisions-log.md` row and board entry | Paste |
| Weekly | weekly-review | Memory update block: `open-loops.md`, `decisions-log.md`, `about-me.md`, habit scores in `telos.md` | Approve the update (Docs) or paste and re-upload (Obsidian). 20 minutes |
| Monthly | periodic-review (monthly) | Money tracker row, habit trend, archive list; you clean the assistant's own memory | 30 minutes |
| Quarterly | periodic-review (quarterly) | `telos.md`: goal scores, new 90-day priorities | 60 to 90 minutes |

## Finding things (retrieval): how your assistant reads your memory home

- **Grok Bot:** reads the Docs through its Drive connector or browser, any time, including in routines.
- **Claude:** add the Harness Docs to the project's knowledge (they refresh from Drive), or let it search Drive. Claude Desktop can read an Obsidian folder you connect, while the app is open.

On ChatGPT:


- **Google Docs (default):** ChatGPT finds and reads them live through the Google Drive app, or you @mention a Doc from Library. Ask "Open my Open loops doc" or "What did I decide about the car?". Scheduled tasks can use connected apps, but OpenAI's page names Gmail, Slack and GitHub as examples; test whether your morning brief can read the Open loops doc.
- **Project Sources:** your master prompt, skills and board cards (they rarely change) live here. Always works.
- **Obsidian:** ChatGPT on web and phone **can't open the Obsidian folder on your computer**. Upload changed files weekly, paste notes, or use Work or Codex in the desktop app with the vault folder ("read only").

Search in Drive (or Obsidian) is still the fastest way to find a specific note. The AI is for thinking with what you find.

## Never put in memory

Passwords, PINs and recovery codes. Card and bank account numbers. National ID, tax reference, passport and licence numbers. Other people's health, money or private details without their OK. Anything you'd be upset to see on a screen in a café.

Refer to sensitive things in general terms instead: "car insurance with [insurer], renews March", not the policy number.
