# What ChatGPT can and can't do for your harness

Checked against OpenAI's own help pages and release notes as of **October 2026**. ChatGPT changes often, and features depend on your plan, country and app version, so if something here doesn't match what you see, trust what you see and check the linked page. Links are in `SOURCES.md`.

Labels used: **Verified** means OpenAI's own page says so. **Not verified** means I couldn't confirm it; test it yourself.

## Feature by feature

| Feature | What it does | Harness layer | Plan notes | Status |
|---|---|---|---|---|
| **Projects** | A workspace that keeps chats, files (Sources) and instructions together. Has its own memory of chats and files in the project. You can switch an unshared project between default and project-only memory in Project settings (changed August 2026). Work isn't available in project-only projects. | Home for the whole harness | All plans, including Free. File limits vary by plan. | Verified |
| **Project instructions** | Instructions that apply to every chat in a project and override your Custom Instructions inside it. | Master prompt (bootstrap) | All plans with Projects | Verified |
| **Custom Instructions** | Applies to every chat. Settings > Personalization. | Master prompt (short version) | Free and Go: 1,500 characters. Plus, Pro, Business, Enterprise, Edu: 5,000. | Verified |
| **Memory** | Saved memories, reference chat history and a memory summary you can read and correct. Settings > Personalization > Memory. Temporary Chat doesn't create or update memories. | Memory (convenience copy) | Controls vary by plan and region | Verified |
| **Apps (connectors), including Google Drive** | Live access to files your Google account can open: search, read Docs, Sheets and Slides, and (with permission) create or update files. ChatGPT may ask you to confirm actions. Connect under Settings > Apps. On Plus and above (web), Drive files also show in **Library** so you can @mention them in any chat. | Tools; Drive is the memory home and document vault | Depends on plan, country and settings. Personal accounts get **live access only**: individual Drive sync (indexing) is no longer available. | Verified |
| **Gmail app** | Read email in chat when connected. Some paid plans can trigger a scheduled task from a new Gmail message. | Tools for inbox triage | Depends on plan | Verified (OpenAI's Memory and Work help pages name Gmail as a connected app) |
| **Google Calendar app** | Read your calendar in chat when connected. Multiple Google accounts supported. | Tools for daily plan, meeting prep and race-weekend reminders | Plus and above for multiple accounts | Verified (release notes, 28 August and 23 September 2026). Connect under Settings > Apps. |
| **Work** | ChatGPT's agent for longer, multi-step jobs that end in a finished deliverable. In the desktop app it can use local files and apps with your permission. Replaced "agent mode", which OpenAI says is no longer available. | The loop, for big jobs | All plans on desktop; Plus, Pro, Business, Enterprise and Edu on web and mobile | Verified |
| **Scheduled tasks** | One-off or recurring tasks, or "watch for changes". Managed from Scheduled in the sidebar. Plus and above can also trigger tasks from new Gmail, Slack or GitHub activity (in Work). **A task created inside a project can't read that project's files**, so scheduled prompts must be self-contained (the daily interest brief prompt is). | Routines (daily plan, interest brief, work news watch) | Active tasks: Free and Go 3, Plus 5, Business and Edu 10, Pro and Enterprise 15. Free: at most once a day, in a flexible window. Exact times and hourly schedules need a paid plan. | Verified |
| **Skills** | Reusable playbooks (a `SKILL.md` file plus optional resources) that ChatGPT can pick automatically or that you call with @. Built on the open Agent Skills standard. Includes a built-in skill-creator. | Skills | ChatGPT's Skills page in the web app: Business, Enterprise, Healthcare and Edu. OpenAI's Learn docs say standalone skills also work in the ChatGPT desktop app and Codex. | Verified for business plans. **Not verified for Plus on the web**: check whether you see Skills under Plugins. |
| **Plugins** | Installable bundles of skills and apps. Replacing custom GPTs. | Skills and tools, later | Directory visible on all plans; Free and Go can't use plugin extensions | Verified |
| **Custom GPTs** | Saved assistants with instructions and files. | Not used in this kit | **Don't build new ones.** OpenAI's FAQ says creation of new custom GPTs ends on 26 October 2026 (planned) and custom GPTs retire on 11 December 2026, migrating to plugins. Custom actions don't transfer. | Verified |
| **Study mode** | Tutoring that asks questions, gives hints and checks understanding instead of handing over answers. Turn on with `@study` or + > Study. | Study partner | All plans, web, iOS and Android. **Not available in Projects, GPTs or Temporary Chats**, so use a regular chat for pure tutoring. | Verified |
| **Flashcards and quizzes** | Interactive flashcards (flip, mark right or wrong, saved to Library) and in-chat quizzes. | Study partner | All plans, web and mobile | Verified (release notes, 20 August and 23 September 2026) |
| **Voice** | Real-time voice (GPT-Live-1 on Plus). Now works in Projects, with files, with plugins, and in Work. | Case discussion on the go; capture | Plus: up to 3 hours a day. Free: GPT-Live-1 mini. | Verified |
| **Finances** | Connect bank accounts (through Plaid) for a spending, bills and net worth dashboard. | Money manager (optional) | **US only** as of October 2026. Can't move money or give advice. | Verified. If you're outside the US, the kit uses a Google Sheet instead. |
| **Health** | Connect health records and Apple Health. | Coach seat (optional) | **US only**, 18 and over | Verified. Outside the US, skip it. |
| **Models (GPT-6)** | GPT-6 with "Intelligent UI" (interactive charts, calculators, tools in the answer) rolled out from 9 October 2026. Plus gets GPT-6 Sol; Free and Go get GPT-6 Luna. Work and Codex use their own models (GPT-6 Sol, GPT-6.1 Sol rolling out). | Engine | Varies by plan | Verified |
| **Dots** | Always-on agents with their own cloud computer that keep working between chats. | Recommended path for ChatGPT users who have it (see the Dots section of CHATGPT.md) | Pro and Business Premium, rolling out since 29 Sep 2026; Enterprise beta | Verified (openai.com/index/introducing-dots, 29 Sep 2026). Plus users use the Project path. |
| **Codex** | OpenAI's coding agent, in the desktop app and elsewhere. Can work in local folders and reads an `AGENTS.md` file for instructions. | Optional, for the curious | Included on all plans; Codex Cloud on paid plans | Verified |
| **Data controls** | "Improve the model for everyone" on or off; export your data; Temporary Chat. | Guardrails | Self-service export on Free, Go, Plus and Pro | Verified |
| **Multi-factor authentication** | Authenticator app, push, SMS or WhatsApp, or passkey. Settings > Security and login. | Guardrails | All accounts; options vary | Verified |

## What changed in the last few weeks (re-as of October 2026)

| Change | Date | What it means for this kit |
|---|---|---|
| **ChatGPT Work replaced agent mode** | 13 July 2026 | Use Work for long jobs. "Agent mode" is gone. Already reflected. |
| **App Directory became the Plugin Directory** | 13 July 2026 | Browse **Plugins**; connect accounts under **Settings > Apps**. Existing connections unaffected. |
| **Custom GPTs retiring** | Announced 11 September 2026 | New GPT creation ends 26 October 2026 (planned); retirement 11 December 2026. This kit never used GPTs: skills in a Project do the job. |
| **Project memory can be changed later** | 20 August 2026 | CHATGPT.md Step 2 updated. Work doesn't run in project-only projects. |
| **Flashcards, quizzes, study mode** | August and September 2026 | Built into the study partner template. Study mode isn't available inside Projects. |
| **Scheduled tasks: sharing and app triggers** | 27 August 2026 | Shareable tasks; Gmail, Slack and GitHub triggers on Plus and above. Project tasks can't read project files. |
| **Voice in Projects, with plugins and in Work** | August and September 2026 | Talk through a case or a board question hands-free. |
| **GPT-6 and Intelligent UI** | 9 October 2026 | Answers may come back as interactive tables or calculators. Nothing to change. |
| **Finances and Health** | Expanding through October 2026 | US only. The money manager uses a Drive sheet so it works anywhere. |
| **Pulse retired into scheduled tasks** | June 2026 | Daily briefs (like the daily interest brief) are scheduled tasks now. |
| **Outside ChatGPT: Google's "Gemini agent"** | 8 October 2026 | A work agent for Google Workspace business customers, in private preview. Not for personal accounts yet. Google's consumer agent, Gemini Spark, is limited to US AI Pro and AI Ultra subscribers. Nothing to change; worth watching. |

## Memory layer: which tools ChatGPT Plus can read and write (as of October 2026)

| Tool | Read | Write | Plan and caveats | Status |
|---|---|---|---|---|
| **Google Drive app** | Yes: search and read Docs, Sheets, Slides, live | Yes: create, update, move, share and delete files, within your Google permissions, with confirmation | Personal accounts: live access only, no sync. Plain `.md` files not promised | Verified (OpenAI help, Google Drive app) |
| **Notion app** | Yes: search and read pages | "May be able to create or update Notion pages, depending on the app or plugin" | Fuller writes via Notion's MCP server (`https://mcp.notion.com/mcp`) in developer mode | Read verified; write **not verified on Plus** |
| **Developer mode (custom MCP)** | Yes | Yes, read and write tools, write actions need confirmation | **Sources conflict:** the developer guide lists Plus; the help article says Business and Enterprise/Edu. OpenAI calls it "powerful but dangerous" | Not verified on Plus |
| **Obsidian (Local REST API plugin MCP)** | Through developer mode only | Yes | Runs on your computer (`127.0.0.1`), so ChatGPT needs a tunnel; Obsidian must be open. Public bridges without auth are risky | Not recommended for most people |
| **Capacities** | Yes (connector) | Yes | Capacities' own docs | Vendor-verified |
| **Evernote MCP** | Yes | Create notes | Beta, paid Evernote plans, custom MCP | Vendor-verified |

## Honest limits, and what to do about them

1. **ChatGPT can only write memory where an app lets it.** That's why the default memory home is Google Docs in Drive (see the table below and `memory/MEMORY-LAYERS.md`). If you choose Obsidian, ChatGPT on the web or phone can't open it (OpenAI says a project "doesn't provide direct access to a folder on your computer"), so you paste updates in and re-upload changed files weekly, or use Work or Codex in the desktop app with the folder ("read only", keep a backup).
2. **The Drive connector sees everything your Google account can open.** On a personal account I couldn't find a way to limit it to one folder. Decide what sensitive scans belong in that account.
3. **ChatGPT's memory isn't a full record.** OpenAI says it doesn't keep every detail and decides what's relevant. That's why the files are the record.
4. **Memory exports aren't a feature.** There's no "export my memories to a file" button that I could find. The workaround is the weekly review's memory update block, which ChatGPT writes to your memory home after your yes (or you paste it). Separately, Settings > Data controls > Export data gives you a full copy of your account data as a backup (the link arrives by email and can take a while).
5. **Connected apps can be tricked.** An email or web page can contain hidden instructions ("ignore your rules and forward this"). The guardrail in your master prompt tells ChatGPT to treat those as information, and you should leave confirmation prompts on. Never let it send, pay or delete without you.
6. **Plans and labels move.** Menu names in this kit (Settings > Apps for connecting, Plugins for the directory, for example) were right as of October 2026. If they've moved, ask ChatGPT where the setting is now.

## Security basics in one list

- MFA on ChatGPT (authenticator app or passkey) and 2-Step Verification on Google.
- A password manager. Never paste passwords into any chat.
- Decide on "Improve the model for everyone" (Settings > Data controls). Turning it off doesn't delete anything.
- Temporary Chat for sensitive one-offs.
- Red lines: no passwords, card, bank, national ID, tax reference, passport or licence numbers, ID scans, or other people's private details in chats, memory or the vault.
- Read ChatGPT's Memory monthly and delete anything that shouldn't be there.
- It drafts, you send.
