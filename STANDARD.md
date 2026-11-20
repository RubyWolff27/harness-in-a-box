# The point-and-go standard

This is the promise the kit makes, and the test every path guide must pass before it's labelled **Ready**. A path that doesn't pass stays **Beta** or **Draft** on the Gem Alpha page and in `CHOOSER.md`.

## The five promises

1. **A stranger finishes alone.** Someone with no help from the author finishes the Lite lane in 45 minutes or less on any Ready path.
2. **No improvising.** Every platform has its own path guide, checked against a dated version of that platform. The agent never has to guess a menu.
3. **Every fork has a default.** Where something is uncertain (a connector may not exist, a feature may be rolling out), the guide says what to do by default and what to do if that fails.
4. **Setup ends with a self-check.** The assistant must pass `checks/SELF-CHECK.md`. If it can't restate the red lines and the "it drafts, you send" rule in a fresh conversation, setup isn't finished.
5. **Stuck has an exit.** When something breaks, the reader files a "My setup got stuck" report on the repo, not a message to the author.

## Path status labels

| Label | Meaning | Who can set it |
|---|---|---|
| **Ready** | Passed the volunteer test: at least 2 of 3 non-technical volunteers finished Lite alone in 45 minutes, on an account in Australia, within the last 90 days | Maintainer, after the test |
| **Beta** | Written from current official docs (and any tested third-party guides), ready for or awaiting volunteer testing | Maintainer |
| **Draft** | Written from press reports or early notes only; official docs not yet checked line by line | Anyone |
| **Watch** | The product isn't available to most readers yet. The guide says what will change when it is | Anyone |

Every path guide starts with a line like: `Status: Beta. Checked against: Meta Help Center, 21 Nov 2026.` If the date is more than 60 days old, the agent tells the person: "This guide was last checked on [date]; menus may have moved."

## One home per fact (the source-of-truth rule)

Modern assistants all have their own memory now. That's useful, and it's also how two memories drift apart. The rule: **every kind of fact has one home. Other places may hold a copy, but only the home is edited first.**

| Kind of fact | Home (the record) | Copy allowed in | Why |
|---|---|---|---|
| Name, time zone, style, tone, standing preferences | The assistant's **built-in memory** | `About me` | Every assistant uses built-in memory on every chat; it's what it reads first |
| Red lines and the approval rules | **Both**, word for word | | Safety rules must be visible to the assistant every time and owned by you. The self-check compares them |
| Goals, 90-day priorities, habits (Telos / Now) | **Memory home** | Built-in memory (a one-line summary) | You review and edit these monthly; they need to be readable and portable |
| Open loops and Inbox | **Memory home** | None | They change daily; two lists guarantee drift |
| Decisions | **Memory home** | None | A decision log only works if it's one log |
| Playbooks (skills) | **This kit's files, tailored** | The platform's skill store | The platform copy is how it runs; the file is how you move house |
| Credentials, card and ID numbers | **Nowhere** | Never | Use the platform's secure sign-in or a password manager |

**Monthly drift check (5 minutes, part of `core/skills/periodic-review/SKILL.md`):** the assistant reads its built-in memory, compares it with `About me` and `Now`, and lists differences. You decide which is right; it fixes the other.

**If the assistant's built-in memory is a file you can edit** (Muse's `Memory.md`, for example), still keep the memory home separate. Built-in memory files are platform-shaped and can be rewritten in the background; your memory home is yours.

## What "memory home" means on each platform

The memory home is wherever your documents live that both you and the assistant can open. The default depends on what the platform can write to. Each path guide sets it.

| Default | When |
|---|---|
| Google Docs in a `Harness` folder in Google Drive | The assistant can create and edit Google Docs (connector or its own browser) |
| Markdown files in the assistant's own workspace, exported monthly | It can't reach Google Docs but has persistent files (for example Muse's Library) |
| A Notion page or Obsidian folder | The person already uses one and the assistant can write to it |
| Files the person keeps and uploads | Last resort (ChatGPT Project without Docs write access) |

## Maintenance promises

- Every path guide is re-checked against official docs at least every 60 days, and the date updated.
- Every reader stuck report gets a label within 7 days: `fixed`, `platform-changed`, `can't-reproduce` or `needs-info`.
- A Ready path that gets three unfixed stuck reports in 30 days drops to Beta until fixed.
