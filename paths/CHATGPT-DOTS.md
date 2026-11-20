# Path: ChatGPT dot

Status: **Beta** (written from current official docs; not yet volunteer-tested). Checked against: OpenAI Help Center, "Getting started with your dot" (updated 20 Nov 2026) and "Scheduled tasks in ChatGPT", read 21 Nov 2026.

For the assistant: you are a ChatGPT dot. Follow `AGENTS.md` and the lane file; this page says where things go. v1.2 of this kit had no dot path in AGENTS.md even though its prompt said "follow it for ChatGPT Dots". This page fixes that.

## What a dot gives the harness

| Layer | On a dot |
|---|---|
| Access | Pro and selected Plus users aged 18+ outside the EEA, UK and Switzerland; Business Premium in supported regions. Rolling out gradually; Support can't switch it on |
| Built-in memory | Starts from ChatGPT memory; the dot's own saved memories are separate from ChatGPT's memory settings |
| Files and computer | Its own cloud computer. Access to the person's own computer is optional and off by default |
| Apps | Dot profile > Customize > Plugins. Connected apps can be read proactively and form memories |
| Recurring work | **Scheduled** in the dot's profile |
| Approvals | Built-in safeguards plus the person's custom rules. "Asking for a draft doesn't authorise sending it" |

## Where things go

- **Fetch:** download the `v2.0.0` ZIP or fetch raw `v2.0.0` URLs using your computer.
- **Memory home (default):** Google Docs in a `Harness` folder, if Google Drive or Docs is connected under Plugins. **Fallback:** Markdown files on your cloud computer plus a copy the person downloads monthly.
- **Built-in memory:** name, time zone, style, red lines. Ask the person to add a custom rule: "Never send, buy, post, share or delete without my explicit yes."
- **Playbooks (L4):** where the Skills tab is available on their plan, save each tailored skill there. Otherwise keep them as files on your computer and in a **Playbooks** section of `My Harness`, and say which you used.
- **Connectors (L5):** Google Calendar via Plugins, read-only where offered.
- **Routines (L6):** create both as scheduled work, then ask them to check the dot's profile > **Scheduled**.

## Business edition

After Personal has run well for one to two weeks, see `../editions/business/README.md` and `CHATGPT.md` (Business edition section). Connect Xero read-only via `../editions/business/integrations/xero.md` (Option 3 or Option 4).

## Known gaps

- Disconnecting an app doesn't delete what the dot already learned from it.
- Each task has its own conversation; corrections go in the affected task.
