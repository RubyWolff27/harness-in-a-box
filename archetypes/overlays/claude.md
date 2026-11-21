# Overlay: Claude (and Claude Duet)

Status: **Beta**. Checked against: Claude Help Center (scheduled tasks, Plugins, Duet), 21 Nov 2026. Archetype: **B**. Duet itself: **Watch** (US research preview).

## Menu names (Lite)

| Step | Where |
|---|---|
| Project | Project `My Harness` |
| Memory | Settings > Memory; Search and reference chats on paid plans |
| Skills | **Plugins** > Skills (upload ZIP per skill folder); needs cloud code execution |
| Connectors | `+` > Connectors or Plugins |
| Routines | **Scheduled** in the left sidebar (paid plans) |
| Safe mode / storm | Pause every Scheduled item; connectors read-only |
| Duet | Separate phone app when available; keep weekly review |

## Full lane notes

- Project instructions: paste the copy block from `archetypes/overlays/chatgpt.md`, changing `files named skill-*.md` to `my skills`.
- F5: create the Full routines from `archetypes/overlays/grok-bot.md` on the **Scheduled** page (morning brief, optional interest brief, evening check-in, Sunday inbox tidy, weekly review). Set the time zone; start write tasks asking for approval until they trust them.
- Free plans: no scheduled tasks; give the prompts and suggest phone alarms. If a connector is "Always ask", a scheduled run may wait or skip that tool; for read-and-report tasks only, they may allow it for scheduled runs.

## Known gaps

- Free plans have no scheduled tasks: give prompts and phone alarms.
- Hands-free Doc writes in scheduled tasks are not fully tested.
- Menu rename Customize to Plugins (Oct-Nov 2026); ask if a label moved.
