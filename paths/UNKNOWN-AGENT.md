# Path: any other assistant or agent

Status: **Fallback**. Works on any assistant that can follow written instructions, including ones that don't exist yet.

For the assistant: there is no guide written for your platform. Don't pretend there is. Work out what you can do with the probe below, tell the person the result, then run the Lite lane using the defaults in the right-hand column.

## The capability probe (answer honestly, from what you can actually do)

| # | Question to yourself | If yes | If no (default) |
|---|---|---|---|
| 1 | Can I fetch a web page by URL? | Fetch raw files one at a time | Ask the person to upload the ZIP or paste each file |
| 2 | Do I keep memory across separate conversations? | Save identity, style and red lines there | Put them at the top of `My Harness` and ask the person to paste that section at the start of each chat, or into the app's custom instructions |
| 3 | Can I create and later edit a document the person can open (Google Docs, Notion, files)? | Create `My Harness` there | Give it as a paste-ready block; they save it |
| 4 | Can I save reusable instructions (skills, Gems, custom GPTs, saved prompts)? | Save the three playbooks there | Keep them in a **Playbooks** section of `My Harness` |
| 5 | Can I run something on a schedule without being asked? | Create the two `lanes/LITE.md` L6 routines with their risk contracts (each must lack messaging out) | Give the prompts and suggest phone alarms |
| 6 | Can I connect a calendar read-only? | Connect it after a yes | They paste tomorrow's calendar into the morning prompt |
| 7 | Do I ask for approval before sending or buying? | Note where approvals are set | Save the rule "Never send, buy, post, share or delete without my explicit yes" in memory and in `My Harness`, and remind them the rule depends on you following it |

Tell the person in plain words, for example: "On this app I can remember you and fetch the kit, but I can't run things on a schedule. So you'll get the playbooks and memory, and I'll give you two prompts to paste each morning and Sunday."

## Then

- Run `lanes/LITE.md`. Wherever it says "the way your path guide says", use the column above.
- Run `checks/SELF-CHECK.md`. Mark checks that this platform can't support as **N/A (platform)**, not as passes.
- At hand-over, offer to draft a short "new platform" report for the repo (which app, version, probe answers), so a proper guide can be written. Draft it; the person decides whether to submit it.
