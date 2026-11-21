# Overlay: Muse (Meta)

Status: **Beta** (awaiting maintainer test on an AU account). Checked against: Meta Help Center, 21 Nov 2026. Archetype: **C**.

## Menu names (Lite)

| Step | Where |
|---|---|
| Approvals (L1) | Settings > Permissions: set Connectors and Web access to **Always ask** for setup week |
| Approval cards | Allow once, **Allow for this task**, Allow for this site, Always allow, Deny |
| Memory | Assistant icon > Identity > Memory (`Memory.md`) |
| Files | **Library** tab |
| Connectors | Settings > Connectors |
| Routines | Ask in chat; list under assistant icon > **Upcoming** |
| Activity | Activity log (assistant icon) |
| Safe mode / storm | Cancel/pause every Upcoming task; permissions read-only |
| Side chat (self-check) | Menu > pencil icon |

## L1: Allow for this task

1. Ask them to open **Settings > Permissions** and set both Connectors and Web access defaults to **Always ask** for setup week: "I'll ask before every action, including reading. More taps this week; you'll see what I do."
2. Tell them: "During setup I'll ask to visit github.com and raw.githubusercontent.com to read the kit. Choose **Allow for this task**, not Always allow."
3. Mac app: Messages/WhatsApp access defaults to no until week 2.
4. Point them at Data controls for model-improvement training; let them decide.

## Where things go

- **Memory home:** Google Docs `My Harness` in a `Harness` folder if the Docs connector is available; else `My Harness.md` in the workspace / Library. Once a month: export My Harness or download Muse data (Settings > Data controls).
- **Built-in memory:** name, time zone, style and red lines in `Memory.md`; they confirm red lines word for word.
- **Playbooks (L4):** paste each skill and ask to save it as a reusable skill; also keep the three texts under a **Playbooks** heading in `My Harness` (fallback if a saved skill goes missing). Skills are undocumented: always keep that fallback.
- **Connectors (L5):** Google Calendar; set write/delete to Ask. Gmail optional; Meta notes a sent email can't be recalled.
- **Routines (L6):** create with the Lite prompts; they confirm under Upcoming. Cancel with "Cancel my morning brief."
- **Safe mode / storm:** pause every Upcoming task; connectors read-only until they say otherwise.

## Full lane (short)

F1/F3: Harness docs in Google Docs or Library files. F4/F5: same save and Upcoming pattern as Lite; keep the routine count small (weekly allowance). Custom connectors: only services they already trust; keys only in Muse's secure prompt; never Always allow; data passes through Meta's cloud. Business edition: skip Muse for now.

## Self-check notes

- Check 4: side chat (menu > pencil).
- Check 6: Activity log, one setup action.
- Check 7: Upcoming shows both routines.

## Known gaps

- Saved skills undocumented; Playbooks section is the backup.
- Muse writes memory in the background from chats and connectors; monthly drift check keeps `Memory.md` and My Harness honest.
- Business edition: skip Muse for now.
- Mac app Messages/WhatsApp access: default no until week 2.
