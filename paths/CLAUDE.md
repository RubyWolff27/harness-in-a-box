# Path: Claude (and Claude Duet)

Status: **Beta** (written from current official docs; not yet volunteer-tested). Checked against: Claude Help Center ("Schedule recurring tasks in Claude Cowork", "Manage plugins, skills, and connectors from one Plugins page", "Get started with Claude Duet"), 21 Nov 2026.

For the assistant: you are Claude. Follow `AGENTS.md` and the lane file; this page says where things go on Claude. Read the **Lite lane** section first; read **Full lane & ongoing** when running the Full lane or Business edition.

---

## Lite lane: what Claude gives the harness

| Harness layer | In Claude | Notes |
|---|---|---|
| One main assistant | A **Project** called `My Harness` (unlimited projects on Pro), or the unified Claude experience | Each project has its own memory space and summary |
| Master prompt | **Project instructions**, plus personal preferences in Settings | Anthropic's skills guide says standing instructions belong in preferences or project instructions, not in a skill |
| Built-in memory | **Memory** (Free, Pro, Max) and **Search and reference chats** (paid plans) | Memory is a helpful copy; your memory home is the record |
| Memory home | **Google Drive** and **Google Docs (beta)** connectors | Ask for a "Google Doc" by name, or Claude creates a downloadable file instead |
| Skills | **Plugins** in the sidebar (renamed from Customize starting 29 Oct 2026, GA 9 Nov) > Skills: upload each skill as a ZIP | Requires Cloud code execution turned on. Use skills with "+" or "/" |
| Scheduled tasks | **Scheduled** in the left sidebar on all paid plans (Pro US$20/month or US$200/year): hourly, daily, weekdays, weekly or manual | Run in the cloud with your connectors, skills and plugins, even when your computer is asleep |
| Connectors | Google Drive, Gmail, Google Calendar, Notion and others; custom connectors (remote MCP) on Pro | Custom connectors run from Anthropic's cloud, so the server must be reachable on the internet |

## Lite lane: where things go

- **Fetch:** add the repo to the project (`+ > GitHub` in project knowledge, works for public repos on every plan) or fetch the raw `v2.0.0` URLs one at a time. Fallback: upload the `v2.0.0` ZIP.
- **L1 (Lock the doors):** ask the person to confirm two-step sign-in on their Claude sign-in and Google/Microsoft account. Point them to **Settings > Privacy > "Help improve our AI models"** to decide on training, and mention **incognito chat** (or turning Memory off in `+`) for sensitive one-offs.
- **L3 (Memory home, default):** Google Docs (`My Harness` in a `Harness` folder) via the Google Drive and Google Docs connectors (`+ > Connectors` or **Plugins**). Add the Doc to the project's knowledge (`Add from Google Drive`) so edits reach Claude without re-uploading. **Fallback:** a Notion page if they use Notion, or a paste-ready block.
- **L3 (Built-in memory):** save name, time zone, style and red lines in Memory / preferences.
- **L4 (Playbooks):** if code execution is on (**Settings > Capabilities**), make one ZIP per tailored skill folder (`daily-plan.zip` containing `daily-plan/SKILL.md`, folder at the root) and give them the three ZIPs; otherwise tell them to zip each folder. They upload each under **Plugins > Skills > "+"**. Confirm each triggers with `/`.
- **L5 (Connectors):** connect Google Calendar (read-only tasks) via Plugins. Gmail is optional (read-only / draft-only).
- **L6 (Routines):** create from chat using the `lanes/LITE.md` L6 prompts and risk contract (write only to chat; never message out; email summarise-only, no link following), or **Scheduled > New task**, and confirm under **Scheduled**. If a connector tool is set to "Always ask", a scheduled run may wait or skip that tool; for read-and-report tasks only, the person may allow it for scheduled runs. Free plans have no scheduled tasks: give the two prompts and suggest phone alarms.

---

## Claude Duet (Watch)

Status: **Watch.** As of 21 Nov 2026 Claude Duet is a research preview for Pro, Max and Ultra users **in the US only**, by waitlist. When it reaches a reader, nothing in the kit needs redoing: Duet runs on your Claude account, so your existing memory, skills and connectors are there from the first message. Its morning brief can replace the kit's morning brief routine; keep the weekly review.

---

## Full lane & ongoing (Weeks 2 to 4)

Use this section when moving from Lite to `../lanes/FULL.md`.

### Which memory home works best on Claude

- **Google Docs in Drive (default):** scheduled tasks run in the cloud and can reach your Drive connector while your computer is closed.
- **Obsidian (desktop caveat):** Claude Desktop can connect a local vault folder and read/write Markdown directly, but cloud tasks can only reach local folders while the desktop app is open on an awake computer, and opened files are processed on Anthropic's servers. Fine if your computer stays on; otherwise use Google Docs.
- **Notion:** good alternative; the Notion connector supports search, fetch, create and update.

### Full setup steps (F1 to F8)

1. **Project instructions & master prompt (F2):** run `../core/MASTER-PROMPT.md`. Put the short version in Settings preferences; paste the Project instructions from `CHATGPT.md` (Full lane section), replacing `files named skill-*.md` with `my skills`.
2. **Split memory home & PARA (F1/F3):** create `Harness` in Drive with **Telos**, **About me**, **Open loops**, **Decisions log**, **Inbox**, **Master Prompt**, **Board personas** and **Edit ledger** (say "Google Doc" each time), plus the PARA folders (`0 Inbox`, `1 Projects`, `2 Areas`, `3 Resources`, `4 Archive`). Add the `Harness` Docs to project knowledge. Import `../editions/personal/drive-templates/money-tracker.csv` as a Google Sheet.
3. **Remaining skills & modules (F4):** zip and upload the five remaining core skills, `harness-change`, and any tailored modules from `../editions/personal/skills/` via **Plugins > Skills**. For money/investing, consider a separate project so those chats stay out of your main memory.
4. **Scheduled tasks (F5):** create the Full routines table from `GROK-BOT.md` on the **Scheduled** page (morning brief, optional interest brief, evening check-in, Sunday inbox tidy, Sunday weekly review). Set the time zone; start write tasks with an approval mode that asks until you trust them.
5. **Voice & browser:** Voice mode (beta) works on phone, desktop and web with Google connectors. **Claude in Chrome** (Pro+) works in Chrome on desktop.

### Honest limits

- **Anthropic is merging Chat and Cowork and renaming Customize to Plugins** (rolling out Oct to Nov 2026), so menu labels may shift. Ask Claude where a setting moved.
- **Hands-free writes in scheduled tasks aren't tested:** test your Sunday inbox tidy and weekly review once before relying on unattended Doc edits.
- **Google Docs, Sheets and Slides connectors are beta.**
- **Usage limits:** Pro has a five-hour session limit and a weekly limit; scheduled tasks share the same allowance.
- **The Drive connector sees what your Google account can open**, not just `Harness`. Keep the red lines.
- **Custom connectors** must be reachable on the public internet. Don't expose local files with an unauthenticated tunnel.

### Business edition on Claude

After Personal has run well for one to two weeks, follow `../editions/business/README.md`: zip and upload business skills via **Plugins > Skills**, run shadow checks against `../editions/business/tests/` (`expected-labels.csv` or `expected-weekly-position.csv`), and connect Xero read-only via `../editions/business/integrations/xero.md` (Option 2 or Option 4).
