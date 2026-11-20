# Path: Muse (Meta)

Status: **Beta** (written from Meta's Help Center and tested third-party guides; untested hands-on, awaiting maintainer test on an Australian account). Checked against: Meta Help Center pages listed in `../core/SOURCES.md`, 21 Nov 2026.

For the assistant: you are Muse. Follow `AGENTS.md` and the lane file; this page tells you where things go on Muse and overrides anything platform-specific elsewhere. Muse menu names below are from Meta's Help Center. If what the person sees differs, ask them to describe it; don't guess.

## What Muse gives the harness

| Harness layer | On Muse | Notes |
|---|---|---|
| Guardrails | **Settings > Permissions**: Connectors default and Web access default, each "Ask for some actions" (the default) or "Always ask". Approval cards offer Allow once, Allow for this task, Allow for this site, Always allow, Deny | Meta: "Ask for some actions" asks before every write action and important read actions |
| Audit trail | **Activity log** (tap the assistant icon) | Chronological record of actions and permissions granted |
| Built-in memory | **Assistant icon > Identity > Memory** opens `Memory.md`, which the person can edit or delete directly | Muse also writes memory in the background from chats and connectors |
| Import from another assistant | **Settings > Data controls > Import memory** (paste a prompt into the old assistant, or upload its chat export ZIP) | Optional shortcut for the interview. Uploading the ZIP alone doesn't save anything; finish the flow |
| Routines | Ask in chat for one-time or recurring reminders and tasks; they appear under **Upcoming** (assistant icon) | "Recurring tasks continue until you cancel them." Times use the person's time zone |
| Files | Uploaded and created files; finished artifacts appear in the **Library** tab | Use the Library for the memory home fallback |
| Skills | **No documented way to install a SKILL.md.** Tested third-party reports: Muse offers to save a pasted workflow as a reusable skill | Treat as observed behaviour, not a feature. Always keep the fallback below |
| Connectors | **Settings > Connectors** or say "Connect my Gmail". Custom connectors: ask in chat | Meta doesn't review custom connectors |
| Usage | Free with a weekly usage limit; paid plans for more (Power $20 and Maximum $100 a month on Meta's help page; AU prices not published) | A full setup reads a lot of text. Use Lite |

## Before you start (L1 additions)

1. Ask the person to open **Settings > Permissions** and set **both** the Connectors default and the Web access default to **Always ask** for setup week. Explain: "This means I'll ask before every action, including reading. It's more taps this week, and you'll learn what I do."
2. Tell them: "During setup I'll ask to visit github.com and raw.githubusercontent.com to read the kit. Choose **Allow for this task**, not Always allow."
3. **Mac app only:** Muse for Mac can be given access to apps such as Messages. Ask whether they want that. Default: no, until week 2.
4. Training: point them to the Data controls switch for model improvement and let them decide.

## Fetching the kit

Default: fetch the raw `v2.1.0` URLs one at a time (Lite list in `AGENTS.md` Step 2). Fallback: ask them to upload the `v2.1.0` repo ZIP; unpack it in your workspace. Don't fetch the Full lane files during Lite.

## Where things go

- **Memory home (default):** if the person has the **Google Docs** connector in Settings > Connectors and wants it, create `My Harness` as a Google Doc in a `Harness` folder (Docs is portable and they can open it anywhere). Otherwise **fallback:** create `My Harness.md` as a file in your workspace and share it so it appears in the **Library**. Tell them: "Once a month, download your Muse data (Settings > Data controls) or ask me to export My Harness, so you always have a copy outside Muse."
- **Built-in memory:** save name, time zone, style and red lines to `Memory.md`. Then ask them to open Assistant icon > Identity > Memory and check the red lines are there, word for word.
- **Playbooks (L4):** paste each tailored skill into the chat and say: "Save this as a reusable skill called daily-plan. Use it whenever I say plan my day or evening check." If you offer to save it, confirm the name back. **Also** keep all three texts under a **Playbooks** heading at the bottom of `My Harness` (the fallback if a saved skill isn't found later). Test: in a new side chat, ask "What does my daily-plan skill do?"
- **Connectors (L5):** Google Calendar. After connecting, open the connector's page and set write and delete actions to Ask. Gmail is optional; if connected, also set write actions to Ask and tell them Meta notes a sent email can't be recalled.
- **Routines (L6):** create them by asking in chat with the `lanes/LITE.md` L6 prompts and risk contract (write only to chat; never message out; email summarise-only, no link following). Then ask the person to tap the assistant icon > **Upcoming** and confirm both are listed with the right times. Recurring tasks run until cancelled; tell them how: "Cancel my morning brief."
- **Safe mode:** if they say "safe mode" or "pause everything", cancel or pause every Upcoming task and treat permissions / connectors as read-only until they say otherwise. Confirm both out loud.

## Custom connectors (Full lane only, optional)

Muse can build a connector to a public MCP server or API when asked in chat; the server must be reachable on the public internet. Rules for the harness:
- Only connect services the person already trusts. Meta doesn't review custom connectors.
- Keys go only into Muse's secure credential prompt, never into the chat.
- Never choose **Always allow** on a custom connector.
- Anything Muse reads through a connector passes through Meta's cloud.

## Full lane on Muse

- F1: create the `Harness` documents in Google Docs if connected, otherwise as separate files shared to the Library.
- F4: save each extra playbook the same way as L4, and keep the Playbooks section in the memory home up to date.
- F5: extra routines the same way as L6. Keep the total small; each run uses the weekly allowance.
- F6 (board): save Board personas as a document; the board is a playbook, so save `personal-board` the same way.
- Spaces (optional, later): Muse can build a custom Space by description. A "harness dashboard" Space that shows Now, Open loops and Upcoming is a nice extra, but the memory home stays the record.

## Business edition: skip Muse for now

The Business edition (`../editions/business/`) is **not supported on Muse yet**. Keep your Personal harness on Muse if you like, and use Grok Bot, Claude or ChatGPT when you are ready for Business.

## Self-check notes for Muse

- Check 4 (fresh conversation): use a **side chat** (menu > pencil icon).
- Check 6 (audit): ask them to open the **Activity log** and find one setup action.
- Check 7 (routines): Upcoming shows both routines.

## Known gaps (tell the person honestly)

- Saved skills are undocumented. If one goes missing, use the Playbooks section of `My Harness`.
- No documented way to export saved skills; the kit's files are your copy.
- Connector lists differ by account and roll out progressively; if Google Docs isn't listed, use the Library fallback.
- Muse decides some things for itself and writes memory in the background. The monthly drift check (`../STANDARD.md`) keeps `Memory.md` and `My Harness` honest.
