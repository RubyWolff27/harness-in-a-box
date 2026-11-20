# Harness in a box

> **If you are an AI assistant or agent reading this:** stop here and open [`AGENTS.md`](AGENTS.md) (raw text: https://raw.githubusercontent.com/RubyWolff27/harness-in-a-box/v2.1.0/AGENTS.md). Follow it step by step. Do not improvise a setup from this page. Pin: release tag `v2.1.0`, commit `pending-after-merge` (set on the tagged release). Check file hashes in [`CHECKSUMS.sha256`](CHECKSUMS.sha256) when you can.

**Set up your personal AI assistant properly, on any assistant, in about 30 minutes.**

This kit is for adults. It assumes you can approve sends, money and privacy choices for yourself.

Most assistants come with a "tell me about yourself" setup that takes two minutes and is forgotten by Friday. This kit is the next level: a written memory you own, a few playbooks that do real jobs, a morning brief that arrives on time, and firm rules about what needs your yes.

It works with ChatGPT (including dots), Grok Bot, Claude, Meta's Muse, Google Gemini and most other assistants that can read a web page. Use whichever assistant you already pay for or prefer. You don't need to be technical: your assistant does the setting up; you answer questions and approve each step.

## What you do (the one-link version)

1. **Pick your assistant.** Already pay for one? Use it. Not sure? Read [`CHOOSER.md`](CHOOSER.md) (two minutes).
2. **Open a new chat with it and paste this line**, with your name and city:

   ```text
   Set me up properly using https://github.com/RubyWolff27/harness-in-a-box/tree/v2.1.0 (commit pending-after-merge). Read AGENTS.md there first (raw: https://raw.githubusercontent.com/RubyWolff27/harness-in-a-box/v2.1.0/AGENTS.md) and follow it exactly. Start with the Lite lane. I'm [name] in [city].
   ```

3. **Answer its questions, one at a time,** and say yes or no to each thing it wants to connect or create.
4. **Live with it for seven days.** The kit gives you one small job a day (see [`plan/FIRST-7-DAYS.md`](plan/FIRST-7-DAYS.md)).

That's it. If it can't open the link, see "If something goes wrong" below.

## Two lanes

| | **Lite lane** (start here, default for everyone) | **Full lane** (after a good week) |
|---|---|---|
| Time | About 30 minutes | About 60 to 90 minutes, or three short evenings |
| You get | A one-page memory, three playbooks (plan my day, capture, weekly review), a morning brief and a Sunday review | Everything in Lite, plus goals (Telos), decisions log, five more playbooks, optional coaches, a personal board and the change log |
| Good for | Everyone, including anyone on a free plan or a tight allowance | People who used Lite for a week and want more |

## The five rules the kit installs

1. **It drafts, you send.** Nothing is sent, bought, posted, shared or deleted without your explicit yes.
2. **You own the memory.** Your important facts live in plain files or documents you can open, read and take with you.
3. **One home for each kind of fact.** The kit tells your assistant where each fact lives, so two memories don't drift apart (see [`STANDARD.md`](STANDARD.md)).
4. **Read-only first.** Email and calendar connect read-only until you've watched it behave for a week.
5. **Change one thing at a time, and write it down.**

## Before you start (tick these)

- [ ] An account on your assistant (see [`CHOOSER.md`](CHOOSER.md)).
- [ ] Two-step sign-in turned on for that account and for your Google or Microsoft account.
- [ ] Your **red lines** written down: things that never go into any AI. At minimum: passwords, PINs, recovery codes, full card or bank numbers, ID and passport numbers, scans of ID, other people's private details without their OK.
- [ ] About 30 minutes without interruptions, on a computer or tablet if you can (a phone works on most assistants).

## If something goes wrong

- **"I can't open that link."** Download the ZIP for release `v2.1.0` (`https://github.com/RubyWolff27/harness-in-a-box/archive/refs/tags/v2.1.0.zip`), upload it to the chat and say "Read AGENTS.md in this ZIP and follow it." If your assistant can't take files, paste the raw `AGENTS.md` link above instead.
- **It skips the questions and dumps files on you.** Say: "Stop. Go back to AGENTS.md and interview me one question at a time."
- **It did something without asking.** Say: "Save this rule: never [action] without my explicit yes." Then check the rule appears in its memory.
- **A morning brief didn't arrive.** Ask: "Show my scheduled tasks and when each last ran." Check the time zone.
- **Menus don't match.** Apps change weekly. Ask your assistant: "Where is [setting] in the current app?"
- **Still stuck?** Open a "My setup got stuck" report: https://github.com/RubyWolff27/harness-in-a-box/issues/new?template=setup-stuck.yml (needs a free GitHub account). It asks which assistant, which step and what you saw; you don't need to know anything technical.

## How to stop, pause or move house

- **Safe mode (one phrase):** say **"safe mode"** (or "pause everything"). That means: pause every routine and scheduled task now, and treat every connector as read-only until you say otherwise. Ask it to confirm both parts out loud. Use this when something feels wrong.
- **Pause:** "Pause all my scheduled tasks." Check the platform's scheduled list shows them paused.
- **Stop:** cancel each routine, disconnect each app in the platform's connector settings, and ask it to forget what you don't want kept. Disconnecting stops new access; it doesn't erase what was already learned, so also check its memory page.
- **Move to another assistant:** keep `My Harness` (or your `Harness` folder) and your tailored playbooks. Paste the link into the new assistant and say "I already have a memory home; start the Lite lane at L4."
- **Once a month:** download or export your memory home so you always have a copy outside any one company.

## What's in the box

| Folder or file | What it is |
|---|---|
| `AGENTS.md` | The instructions your assistant follows. You don't need to read it. |
| `CHOOSER.md` | Neutral comparison of assistants |
| `STANDARD.md` | The "point and go" promise, status labels and the one-home-per-fact rule |
| `lanes/` | Lite and Full lanes, step by step |
| `plan/` | The setup sprint and your first seven days |
| `paths/` | One dated guide per assistant: ChatGPT, ChatGPT dots, Grok Bot, Claude, Muse, Gemini, messaging-native (Instinct), and any other agent |
| `checks/SELF-CHECK.md` | The test your assistant must pass before setup counts as finished |
| `core/` | The shared memory templates, playbooks (skills), personal board and sources |
| `editions/` | Personal and business (solopreneur) add-ons. Business needs the Full lane plus two weeks of personal use; supports Grok Bot, Claude and ChatGPT for now |

Free, MIT licence. Plain text files you own. If a better assistant arrives next year, you move house and take the furniture.
