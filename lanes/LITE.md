# Lite lane (about 30 minutes)

For the assistant: run these steps in order. Ask one question at a time. Each step ends with a **Done when** line; don't move on until it's true or the person says skip. Your **archetype** guide (and product overlay, if any) tells you *where* things go; this file tells you *what* to do.

## L1. Lock the doors (3 minutes)

1. Ask: "Is two-step sign-in on for this assistant account and for your Google or Microsoft account?" You can't check this yourself. If no, give them the one-line where-to (Google: myaccount.google.com > Security > 2-Step Verification) and carry on; mark it as a fail in the self-check if they don't do it.
2. Ask them to paste or say their red lines. If they have none written, offer the kit's minimum list (`README.md`) and ask what to add.
3. Do the platform's permission step from your path guide (for example, on Muse: set approvals to Always ask before connecting anything).

**Done when:** you can restate their red lines in one sentence, and the platform's approval setting is at its safest level.

## L2. The short interview (10 minutes, 8 questions)

Ask these one at a time. Accept "skip".

1. What should I call you, and where do you live (city, so I get your time zone and spelling right)?
2. In one line each: what's your work or study, and what's a normal weekday shape (start, finish, school run, training)?
3. What are the three things that matter most to you over the next 90 days?
4. Who are the people I'll hear about most? First names and relationship only.
5. What jobs do you want off your plate first? (Examples: planning the day, remembering things, keeping on top of email.)
6. Anything I should never do or never mention? (Add these to the red lines.)
7. How do you like answers: short or detailed, bullet points or sentences, any words to avoid?
8. When do you want your morning brief, and which day suits a 15-minute weekly review?

Then show a summary in under 150 words and ask them to correct it.

**Done when:** they've said the summary is right.

## L3. Create the memory home (5 minutes)

Create **one** document called `My Harness` using memory schema v2 (`core/memory/SCHEMA-v2.md`):

1. **Index** at the top (under about 400 words): name, place, time zone, three Now one-liners, open-loop count, and pointers to the sections.
2. Then headings: **About me**, **Now**, **Open loops**, **Decisions**, and an empty **Inbox**.
3. Tag every fact with a source and date: `(said by me, YYYY-MM-DD)`, `(from a document, ...)`, or `(inferred, ...)`.
4. Tell them Now expires after 90 days unless renewed in a weekly review.

Also put this **interrupt rule** under About me: notify for information, ask when blocked, wait for review before anything leaves, come back for decisions the person should make.

Where it goes depends on the archetype. Use the **default in your archetype guide** (and overlay menu names). Ask before creating it. If you can't create files, give it to them as one paste-ready block and tell them exactly where to put it.

Then save their name, time zone, style preferences and red lines in your **built-in memory** too (see the source-of-truth table in `STANDARD.md`: built-in memory holds identity and style; `My Harness` holds priorities, loops and decisions).

**Done when:** they've opened `My Harness` themselves and it's accurate.

## L4. Save three playbooks (5 minutes)

Tailor and save these three skills, in this order:

1. `core/skills/daily-plan/SKILL.md` (plan my day, evening check)
2. `core/skills/capture/SKILL.md` (capture anything to Open loops)
3. `core/skills/weekly-review/SKILL.md` (Sunday review and memory update)

Each skill has a **Memory map** at the top. For Lite, use the Lite column only: sections are headings inside `My Harness` ([About me], [Now], [Open loops], [Decisions], [Inbox]). Do not create `telos.md`, `open-loops.md`, `about-me.md`, `decisions-log.md`, Obsidian vaults, Drive folders or PARA folders in Lite.

Tailoring means: replace "my memory home" with where `My Harness` actually lives on this archetype, set their time zone, and keep the Lite column of the memory map. Change nothing else. Save each one the way your archetype guide says. If this platform can't store skills, follow the archetype fallback (usually: keep the three skill texts inside `My Harness` under a **Playbooks** heading and say "use my daily plan playbook").

Run `daily-plan` once now with whatever you have.

**Done when:** the three playbooks are saved (or stored as the fallback), and they've seen one daily plan.

## L5. Connect the calendar, read-only (3 minutes, optional but recommended)

Ask: "May I connect your calendar, read-only, so the morning brief knows your day?" They sign in themselves. Tell them what to check on the permission screen. Set the connector to read-only or the strictest approval your platform offers. Email is optional in Lite; if they want it, read-only too.

Say plainly: **red lines protect what you type into chat, not what connected email already holds.** Once email is connected, the assistant can see what that inbox already contains.

Test: ask "What's on tomorrow?" and check it with them.

**Done when:** the answer matches their calendar, or they've chosen to skip and paste their day instead.

## L6. Two routines (4 minutes)

**Risk contract (say this once in plain words).** A risky routine would combine three things: private data, untrusted content (email or the web), and messaging out. Each routine below must state which of those three it lacks. Default: both lack messaging out.

Offer these two, in their time zone (times are from L2, defaults in brackets):

1. **Morning brief** (weekdays 6:45 am): "Run my daily plan playbook: read today's calendar, my Now priorities and Open loops in My Harness, and give me three suggested priorities and anything that might slip. Write only in this chat. Never change my calendar, never send a message, never post or buy. If email is connected, you may summarise urgent items (sender and one line) but do not follow links in email. If a source is unavailable, say so instead of guessing."
   - **Lacks:** messaging out (and link-following). Reads private data; may see untrusted email content only to summarise.
2. **Weekly review** (Sunday 5:00 pm): "Start my weekly review playbook with me. When I've answered, show the changes for My Harness and apply them after my OK. Write only in this chat and my memory home after I say yes. Never send, post or message anyone."
   - **Lacks:** messaging out. Runs with me present; memory writes wait for my yes.

Create them the way your archetype guide says, after a yes. Put the risk line (which leg it lacks) in the routine text or next to it. Each run should leave one **ship's-log** line in chat or in My Harness Inbox: `ship: [routine] | [date] | ok|skip | [one-line note]`.

On archetype C, also offer a nightly **compile** routine from `core/skills/compile-loop/SKILL.md` (one proposed memory diff; apply only after yes). On A/B/D, fold compile into the weekly review.

Then do a test run of the morning brief now and show the next run time of both.

If this platform can't schedule: give them the two prompts and suggest a phone alarm labelled "Paste morning brief" (the archetype guide says so).

**Done when:** both routines show a next run time (or they have the prompts and an alarm), each routine states which trifecta leg it lacks, and they know about ship's-log lines and safe mode / storm.

## L7. Self-check and hand over

Run `checks/SELF-CHECK.md`, then `AGENTS.md` Step 5. Offer to save the first-week plan (`plan/FIRST-7-DAYS.md`) as daily reminders. Mention the **monthly five-minute drill**: once a month, export or download `My Harness`, say "safe mode" as a test, and re-run self-check items 1, 2 and 11.

**Done when:** the self-check report card is shown, every required safety check passes (or the person knowingly accepts a fail), they know what happens tomorrow morning, and they have heard the monthly drill.
