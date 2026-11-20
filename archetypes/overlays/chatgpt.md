# Overlay: ChatGPT (chat or Project, no dot)

Status: **Beta**. Checked against: OpenAI Help Center ("Scheduled tasks in ChatGPT", "Skills in ChatGPT"), 21 Nov 2026. Archetype: **B**.

## Menu names (Lite)

| Step | Where |
|---|---|
| MFA | Settings > Security and login |
| Memory | Settings > Personalization > Memory |
| Project | Create Project `My Harness` (default memory, not project-only) |
| Skills on Free/Plus/Pro | Upload `skill-*.md` to Project files (Sources) |
| Skills on eligible business plans | Skills tab under Plugins |
| Connectors | Settings > Apps |
| Routines | Create in a normal chat (not inside the Project); check **Scheduled** |
| Safe mode / storm | Pause every item under Scheduled; Apps read-only |

**L6 note:** a scheduled task cannot read project files, so prompts must be self-contained (include their three priorities in the text).

## Known gaps

- Drive app on a personal account can see everything that Google account can open, not one folder.
- Scheduled tasks may not update Docs unattended; prefer chat-with-you for memory writes.
- Feature table: `core/CHATGPT-FEATURES.md`.
