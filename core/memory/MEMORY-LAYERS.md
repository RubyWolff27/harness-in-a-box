# Choosing your memory home

Your harness needs one place where its memory lives: your Telos, about-me, open loops, decisions log and capture inbox. This page calls that place your **memory home**. The skills don't care which tool it is. They say "my memory home", and you pick one option below.

Checked against Grok Bot's, Anthropic's and OpenAI's pages and the tools' own docs as of **October 2026**.

## The short answer

**Use Option B: Google Docs in a `Harness` folder in your Google Drive, whichever path you choose.** It's the one memory home all three assistants can read and write.

- **All three paths can update it** (details per path below). If a write ever fails, the skill gives you paste-ready text instead.
- **No weekly copy-paste or re-upload.**
- **Nothing new to learn or pay for.** If you have a Google account you already have Drive, and the money tracker lives there as a Google Sheet.
- **Works on your phone** through the Google Docs app, and from ChatGPT on web and mobile.
- **It's portable.** File > Download > Markdown (.md) turns any Doc into plain text if you ever move to Obsidian, Claude or Grok Bot.

Obsidian is still in the kit (`vault-template/`) as an option if you fall in love with linked notes later.

## Your memory home with Option B

```text
My Drive/
  Harness/
    Telos                 (Google Doc: mission, goals, 90-day priorities, habits)
    About me              (Google Doc)
    Open loops            (Google Doc)
    Decisions log         (Google Doc)
    Inbox                 (Google Doc: captures land here, newest at the top)
    Board personas        (Google Doc)
  1 Projects/  2 Areas/  3 Resources/  4 Archive/   (your PARA folders)
```

To set it up: in Drive, create the `Harness` folder, then for each file in this kit's `memory/` folder create a Google Doc with the same name and paste the template in. (Or upload the `.md` file and choose File > Open with > Google Docs.) Ten minutes.

## The four options

| | A. Notion | **B. Google Docs in Drive (default)** | C. Obsidian + manual sync | D. Grok Bot as memory writer |
|---|---|---|---|---|
| ChatGPT reads it | Yes, through the Notion app | Yes, live, through the Google Drive app | Only what you upload or paste (or the desktop app with a local folder) | Yes, if the Bot keeps the files in Google Drive (as Docs) or GitHub |
| ChatGPT writes it | **Maybe.** OpenAI says it "may be able to create or update Notion pages, depending on the app or plugin". Fuller writes need Notion's MCP server in developer mode, and write support on Plus is unclear | **Yes**, within your Google permissions; it may ask you to confirm | No. You paste | No. Grok Bot writes; ChatGPT reads |
| Claude writes it | **Yes** (Notion connector: create and update pages) | **Yes** (Google Docs connector, beta; Drive connector creates files) | Yes in Claude Desktop with the folder connected, while the app is open | Not needed: Claude can write itself |
| Grok Bot writes it | Yes, through a connector or its browser | **Yes, hands-free in routines** | Yes, as plain files on its computer or in Drive | Yes: this is the option |
| Maintenance | Low once set up | **Lowest** | Highest: paste and re-upload weekly | Medium: two tools, two subscriptions |
| Cost | Free Notion plan works | Free (your Google storage) | Free (Obsidian Sync is paid if you want phone access) | Grok Bot needs a qualifying plan |
| Phone | Notion app | Google Docs app | Obsidian app (needs Obsidian Sync on iPhone) | Grok Bot app |
| Best for | People who already live in Notion | **Low maintenance on ChatGPT Plus** | Linked notes, full ownership, offline | People who want an agent that does the filing for them |

## How each path writes to your memory home

Be precise about "confirmation", because it differs:

| Path | How writes happen | Do you confirm each change? | Hands-free? |
|---|---|---|---|
| **Grok Bot** | The Bot edits the Docs through a Drive connector or its browser, in chat or in a routine on its own cloud computer | No, not for editing your own Docs. Grok Bot's docs put approval on sending, buying, deleting, publishing and production changes, and you can add your own rules ("show me first") | **Yes.** Routines run while your laptop is closed and report what changed |
| **Claude** | Google Docs connector (beta) edits Docs; Drive connector creates files and folders. Share, move and trash ask for approval by default | In chat, you approve by saying yes to the update block; for scheduled tasks you pick an **approval mode** when you set up the task | **Probably.** Scheduled tasks run in the cloud with your connectors; I haven't tested a write under each approval mode |
| **ChatGPT** | Google Drive app creates and updates files with your Google permissions | ChatGPT **may** ask you to confirm actions in apps; leave that on | **No.** Writes happen in a chat you're in. Scheduled tasks can't read project files, and I couldn't confirm they can read Drive Docs |

So **Grok Bot is the most hands-free writer, and the only one I've confirmed works with nobody there.** Claude's scheduled tasks may get close; ChatGPT needs you in the chat.

### Per-path notes
- **Grok Bot:** Google Docs is the easiest to share with you on your phone. The Bot can also keep plain Markdown files (an Obsidian vault) on its own computer or in Drive, because it isn't limited to what an app supports.
- **Grok Bot, if you prefer Obsidian:** the Bot can keep the memory as Markdown files in a Drive folder or private GitHub repo, still written hands-free, and you open them in Obsidian (optional, a bit more setup; see "Prefer Obsidian?" in `GROK-BOT.md`).
- **Claude:** Google Docs is best, because scheduled tasks can reach Drive any time. An Obsidian folder works in Claude Desktop, but cloud sessions can reach it only while the desktop app is open. Notion is a strong second here (the connector can create and update pages).
- **ChatGPT:** Google Docs. Notion writes and developer mode aren't confirmed on Plus; Obsidian means manual sync.

## Option A: Notion
**On Claude:** the Notion connector lists search, fetch, create-pages and update-page tools, so writes work. **On ChatGPT:** connect Notion under Settings > Apps (or Plugins). ChatGPT can search and read the pages you authorise. Whether it can create or edit pages depends on the current app and your permissions, so test it: "Add a line to my Open loops page." If it can't, use the paste fallback. Notion's own MCP server (`https://mcp.notion.com/mcp`) offers more tools through ChatGPT's developer mode, but that's a developer feature with real risks (see Option C's warning) and OpenAI's pages disagree on whether Plus gets write actions there.

## Option B: Google Docs in Drive (recommended)
See above. Two honest limits:
- **Use Google Docs, not `.md` files.** OpenAI lists Docs, Sheets and Slides; it doesn't promise to read the contents of plain `.md` files, and it says finding a file isn't the same as reading it.
- **The Drive app can see everything your Google account can open**, not just the `Harness` folder. Keep the red lines (no ID numbers, passwords or account numbers anywhere in that Google account's documents you'd mind it reading).

## Option C: Obsidian with manual sync
The original design. Obsidian is the record; you paste each memory update into the vault and re-upload changed files to the project weekly. ChatGPT on web and phone can't open a local Obsidian folder.

**About connecting Obsidian directly (not recommended for you).** It's technically possible: Obsidian's community Local REST API plugin includes an MCP server on your computer, and ChatGPT's developer mode can connect to it through OpenAI's Secure MCP Tunnel or a public tunnel such as ngrok. But:
- your computer and Obsidian must be **on and running** whenever ChatGPT needs the notes;
- it's a **developer feature**: OpenAI warns developer mode is "powerful but dangerous", with risks of prompt injection and mistaken writes that destroy data;
- community bridges that use "no authentication" and a public URL can expose your whole vault to anyone with the link.
Great for a tinkerer; not low maintenance.

## Option D: Grok Bot as the memory writer
If Grok Bot is your main path, it's already the writer: use Option B and let the Bot own the Docs. This option is for when you think in ChatGPT or Claude but want Grok Bot doing the filing.

Grok Bot has its own always-on cloud computer, so it can keep your memory files tidy without you: run the weekly review, update the files, file captures. Two ways to share with ChatGPT:
- **Google Drive:** the Bot keeps the memory files as Google Docs in your `Harness` folder (through a Drive connector or the browser). ChatGPT reads them through its Google Drive app.
- **GitHub:** the Bot commits Markdown files to a private repo. ChatGPT's GitHub app can read repos you connect, but this is more technical.
The catch: two assistants, two subscriptions, and you must be clear which one is allowed to write (Grok Bot) and which only reads (ChatGPT). See `GROK-BOT.md`.

## Other tools I checked
| Tool | ChatGPT read | ChatGPT write | Notes |
|---|---|---|---|
| Dropbox, Box | Yes (apps, live; in Library on Go and above) | "New write capabilities where supported" (release notes); not confirmed for personal accounts | Fine as file storage; not ideal for living memory notes |
| OneDrive and SharePoint | SharePoint in Library; OneDrive not confirmed for personal accounts | Not verified | |
| OneNote | Plugin (beta) can find, summarise, create and update notes | Yes, through supported actions | Workable if you're a Microsoft person; Microsoft account requirements not checked |
| GitHub | Yes (app) | Through Codex, not plain chat | Technical |
| Evernote | Yes (Evernote's MCP server, beta) | Create notes (not edit existing) | Paid Evernote plans; added as a custom MCP connector |
| Capacities | Yes (connector in the directory) | Yes (create, append, edit) | Its own docs; worth a look if you want a Notion alternative |
| Tana | Official MCP (`https://home.tana.inc/mcp`); Tana says ChatGPT can add it as a custom MCP server | Proposals you approve in Tana | Needs developer mode; not tested on Plus |
| Apple Notes | Only via community Mac bridges | Community only | Not recommended |
| Mem, Coda | No ChatGPT connector found | | |

## Whatever you choose
- **The memory home is the record.** The assistant's own memory is a helpful copy. If they disagree, the memory home wins.
- **Writes need your yes**, once per change in chat, or once up front when you set up a routine or scheduled task. Leave the tools' confirmation prompts on for sending, sharing and deleting.
- **One writer per file.** Don't let two tools edit the same file.
- **Export monthly.** Google Takeout (or Notion export, or your Obsidian backup), plus your assistant's own data export.
