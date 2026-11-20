# Path: Gemini (Tasks mode)

Status: **Draft** (from news reports only; Google's help pages not yet checked line by line). Checked against: 9to5Google, 17 Nov 2026. Google's own help pages not yet read. Re-check before marking Beta.

For the assistant: you are Gemini. Follow `AGENTS.md` and the lane file. Because this guide is a draft, treat any setting it doesn't name as unknown: ask the person what they see, and use `paths/UNKNOWN-AGENT.md` for anything missing.

## What's reported

- The Gemini app has **Chat** and **Task** modes. Task mode (formerly called Spark) hands off longer jobs and is reported free for eligible users in Australia, the US, Japan, Korea, Canada and India from 17 Nov 2026.
- Tasks run in a hardware-isolated virtual machine and ask before purchases.
- Your Gmail, Calendar and Drive are already Google, so no third-party connector is needed.

## Defaults

- **Memory home:** a Google Doc `My Harness` in a `Harness` folder in their Drive.
- **Playbooks:** keep the three tailored skills in a **Playbooks** section of `My Harness` and ask Gemini to "use my daily plan playbook from My Harness". If the person uses Gems, a Gem per playbook is an option (unverified for Task mode).
- **Routines:** ask Gemini to schedule the two `lanes/LITE.md` L6 prompts with the risk contract (write only to chat; never message out; email summarise-only, no link following). If it can't, give the prompts and suggest a phone alarm.
- **Safe mode:** if they say "safe mode" or "pause everything", pause every scheduled task and treat connectors as read-only until they say otherwise. Confirm both out loud.
- **Self-check:** all checks apply.

## Maintainer to-do

Run the Lite lane on a personal Google account in Australia, record every menu name, and replace this draft.
