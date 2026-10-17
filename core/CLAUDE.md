# Path 2: Claude

Read `SETUP.md` first for the comparison and the shared core. This is the full Claude path: the same three evenings and three weeks, done the Claude way.

Claude is second in my order because it's an excellent thinking and writing partner, it runs scheduled tasks in the cloud on Pro, and its Google connectors can create and edit Google Docs. It's behind Grok Bot only because it doesn't have its own always-on computer, and I haven't tested how hands-free its scheduled memory writes are.

Checked against Anthropic's own pages (claude.com and support.claude.com) as of October 2026. Anthropic is changing Claude quickly: in October 2026 "Chat" and "Cowork" were being merged into one Claude for Pro and Max. If a menu below looks different, ask Claude where the setting is now.

## What you need

- **Claude Pro.** US$20 a month, or US$200 a year (US$17 a month), on Anthropic's pricing page. Check Claude is available in your country (support page in `SOURCES.md`). Your card may add VAT or a forex fee. The Free plan has skills, memory and one custom connector, but not scheduled tasks, Claude in Chrome or unlimited projects.
- **The Claude apps:** web, the **Claude Desktop** app (Mac or Windows) and the phone app.
- **A Google account** with Google Drive.

## What Claude Pro gives the harness (verified)

| Harness layer | In Claude | Notes |
|---|---|---|
| One main assistant | A **Project** called `My Harness` (unlimited projects on Pro) | Each project has its own memory space and summary |
| Master prompt | **Project instructions**, plus your profile preferences in Settings | Anthropic's skills guide says instructions for every conversation belong in preferences or project instructions, not in a skill |
| Memory | **Memory** (on by default on Free, Pro and Max) and **chat search** (paid plans). Project memory is kept separate from other chats | Memory is a helpful copy; your memory home is the record |
| Memory home | **Google Drive connector**: search and read Docs, Sheets, Slides, PDFs; create files and folders; share, move and trash with your approval by default. **Google Docs, Sheets and Slides connectors (beta)**: create and edit Google files from the chat | Ask for a "Google Doc" by name, or Claude makes a downloadable file instead |
| Skills | **Customize > Skills**: upload your own skill as a ZIP | Needs code execution turned on (Settings > Capabilities). Our `SKILL.md` files already have the required `name` and `description` frontmatter, and each folder name matches its skill name |
| Tools | **Connectors**: Google Drive, Gmail, Google Calendar, Notion and others. **Custom connectors** (remote MCP) on Pro, from Customize > Connectors | Custom connectors run from Anthropic's cloud, so the server must be reachable on the internet |
| The loop on a schedule | **Scheduled tasks** on all paid plans: hourly, daily, weekdays, weekly or manual. They run in the cloud with your connectors, skills and plugins, even when your computer is off | Each task has an **approval mode** you pick when you set it up |
| Voice | **Voice mode** (beta) on the phone, desktop and web, all plans. It can use connected tools like Gmail, Calendar and Google Docs | Built to work best on your phone |
| Files on your computer | The **Claude Desktop** app can read and write folders you connect | Only while the desktop app is open |
| Browser | **Claude in Chrome** (Pro and up): reads, clicks and navigates websites with you | Chrome only, not other browsers or phones |

## Which memory home works best on Claude

**Google Docs in Drive (the default) is best.** Scheduled tasks run in the cloud and can reach your Drive connector any time, so your morning brief and weekly memory update work with your laptop closed.

**Obsidian works too, with a catch.** In Claude Desktop you can connect your vault folder and Claude reads and writes the Markdown files directly, which is the nicest Obsidian experience of the three paths. But since 6 October 2026, new Cowork tasks on Pro run in the cloud, and a cloud session can only reach your local folders **while the desktop app is open on your computer**. If it's closed, the task runs but can't see your notes. Also, files Claude opens this way are processed on Anthropic's servers. So: fine if your computer is usually on and you love Obsidian; otherwise use Google Docs.

**Notion** is a good option on Claude: the Notion connector lists tools to search, fetch, create and update pages.

## Evening 1: get going (30 minutes)

**Step 1. Lock the doors (10 minutes).**
1. Secure your Claude sign-in (use a strong Google sign-in or a unique password with two-factor), and turn on Google 2-Step Verification.
2. Decide on model training: Settings > Privacy > "Help improve our AI models". My suggestion: turn it off.
3. Know the switch: for a one-off sensitive chat, start a new chat, open "+" and turn **Memory** off, or use an **incognito chat**.
4. Write down your red lines (see `SETUP.md`).

**Step 2. Project and skills (15 minutes).**
1. Create a project called `My Harness`. Paste the project instructions from `CHATGPT.md` Step 2 into its instructions, with one change: replace "files named skill-*.md" with "my skills".
2. Turn on code execution: Settings > Capabilities > Code execution and file creation.
3. Upload the eight core skills. Each one must be its own ZIP with the **folder** at the top (for example `daily-plan.zip` containing `daily-plan/SKILL.md`). In Customize > Skills, click "+", then "Create skill" > "Upload a skill". Do daily-plan, capture, weekly-review, periodic-review, inbox-triage, meeting-prep, research-brief and skill-writer.
4. Upload `MASTER-PROMPT.md` to the project's files for now.

Tip: if zipping lots of folders sounds dull, ask Claude to do it: upload the kit's zip in a chat and say "Make one ZIP per skill folder, with the folder at the root."

**Step 3. Run your first skill (5 minutes).** In the project: "Run the daily plan skill." Pick three things. If it doesn't pick up the skill, check it's switched on in Customize > Skills.

**Done when:** two-factor is on, the project has its instructions, and the eight skills are switched on.

## Evening 2: your master prompt (30 minutes)

Same as every path: paste the interview from `MASTER-PROMPT.md` into a chat in the project, answer it (voice works), save the full master prompt, put the short version in your personal preferences in Settings, and ask for drafts of your Telos and About me.

**Done when:** a new chat in the project can tell you your mission and top three priorities.

## Evening 3: your memory home (25 minutes)

1. Connect **Google Drive** and the **Google Docs** connector: in a chat, "+" > Connectors, or Customize > Connectors. Review the access Google asks for.
2. Ask: "In my Google Drive, create a folder called Harness and six Google Docs in it: Telos, About me, Open loops, Decisions log, Inbox and Master Prompt. Fill Telos, About me and Master Prompt from our Evening 2 drafts, and use these templates for the rest." Paste the templates from `memory/`. Say "Google Doc" each time.
3. Add the Harness Docs to the project's knowledge (project files > Add from Google Drive). Claude reads them from Drive and refreshes them, so edits reach Claude without re-uploading.
4. Create your PARA folders in Drive (see `CHATGPT.md` Step 6 for the layout) and import `drive-templates/money-tracker.csv` as a Google Sheet.
5. Add to the project instructions: "My memory home is the Harness folder in my Google Drive. Read it. Propose updates and apply them after I say yes."

**Done when:** Claude can read Open loops, and adds a test line to it when you say yes.

## Week 1: build the habit

- **Every day:** "Run the daily plan skill." Capture by voice from your phone ("Capture: ..."); Claude adds it to the Inbox Doc. "Evening check" at night.
- **Optional:** connect **Gmail** and **Google Calendar**. Claude's Gmail connector can send email, so keep the rule: it drafts, you send.
- **End of the week:** "Run the weekly review." Say yes to the memory update block and Claude edits the Docs. Open one and check.

## Week 2: scheduled tasks

Create these from the **Scheduled** page (New task) or just ask in a chat ("Every weekday at 6:45 am, ..."). Use the same prompts as the Grok Bot routines table in `GROK-BOT.md`: morning brief, interest brief (if you made one), evening check-in, inbox tidy and weekly review. Then:

- Set the **time zone** to your city and check the first run's time.
- Choose the **approval mode** carefully. For tasks that only read and report (morning brief, interest brief), a hands-off mode is fine. For tasks that write to your Docs (inbox tidy), start with a mode that asks you, and loosen it once you trust it. I couldn't find Anthropic's list of the modes, so read the options on screen.
- Don't pick a folder on your computer for a scheduled task unless you need to; a task that needs local files only runs locally.
- Review runs on the **Scheduled** page. Pause anything you ignore.

**Write your first own skill:** "Run the skill-writer skill. The job is: [describe it]." Zip the new folder and upload it.

## Week 3: optional modules and your board

Ask Claude to tailor the optional module templates you want (study-partner, work-partner, money-manager, investment-manager, daily-interest-brief, personal-board) from your About me, then upload each as a ZIP. Create a **Board personas** Google Doc from `board/personas.md` with the seats you chose, and fill in the "About me" lines. For money, consider a separate project so the money chats stay out of your main memory. If you're studying, ask the study partner to save reading notes to `3 Resources/[Subject]/` in Drive.

## Honest limits

- **Anthropic is mid-change.** The Chat and Cowork merge was rolling out in October 2026, so some menus may differ from this guide.
- **Hands-free writes aren't tested.** Scheduled tasks can use your connectors and have approval modes, but I haven't confirmed how a write to your Docs behaves with each mode.
- **The Google Docs, Sheets and Slides connectors are beta.**
- **Local folders need the desktop app open.** That's why Google Docs is the default memory home here.
- **Usage limits.** Pro has a five-hour session limit and a weekly limit. Heavy scheduled tasks use the same allowance.
- **The Drive connector sees what your Google account can open**, not just `Harness`. Keep the red lines.
- **Custom connectors** must be reachable from the internet. Don't expose your Obsidian vault with an unauthenticated public tunnel.

Anthropic's pages are listed in `SOURCES.md`.
