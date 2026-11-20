---
name: daily-plan
description: Plans my day. Use when I say "plan my day", "daily plan", "morning plan" or "evening check". Reads today's calendar, my Open loops and anything I've captured, picks the three things that matter most, flags what might slip, and at night runs the evening check (pick, show, return). Drafts only; never changes my calendar.
---

# Daily plan

**Pick, show, return.** Each morning pick three things, put them where I'll see them, and at night put back whatever didn't get done.

## Memory map

Use logical section names. Look them up in this table for the lane I'm on. Do not invent other files.

| Section | Lite (My Harness) | Full (separate docs) |
|---|---|---|
| [About me] | Heading **About me** | `about-me.md` |
| [Now] | Heading **Now** | `telos.md` (90-day priorities and habits) |
| [Open loops] | Heading **Open loops** | `open-loops.md` |
| [Decisions] | Heading **Decisions** | `decisions-log.md` |
| [Inbox] | Heading **Inbox** under Playbooks, or a short list I paste | Inbox in the memory home |

## When to use
- Every morning, by hand or as a scheduled task.
- "Evening check" at the end of the day.
- Not for weekly planning. Use the weekly-review skill for that.

## What you need
- Today's and tomorrow's calendar: from the calendar connector if connected, otherwise I'll paste it.
- [Open loops] from my memory home.
- [Now] for my 90-day priorities and habits.
- Anything I've captured since yesterday (I may paste it).

If something's missing, say so and carry on with what you have. Don't invent appointments.

## Steps (morning)
1. **Brief.** One line: "Ideal state: a day where [the most important thing] moves forward and nothing urgent is missed."
2. **Look.** List today's fixed commitments with times. Note anything tomorrow that needs prep today.
3. **Pick three.** Choose the three things that matter most today. At least one should move a 90-day priority from [Now]. Say why for each, in one line.
4. **Fit.** Suggest when each of the three fits around the fixed commitments. Flag if the day is overloaded.
5. **Flag what might slip.** [Open loops] that are overdue or due in the next two days. Meetings with no prep. Clashes.
6. **One thing to drop or defer.** Be honest. Suggest who or when.
7. **Show.** Give me a short block I can paste into today's daily note.

## Steps (evening check)
1. Ask what got done of the three.
2. For anything not done: carry it to tomorrow, schedule it, delegate it or drop it. Ask me which.
3. Anything new that came up goes into [Open loops]. Give me the lines to paste.
4. Habits: which of today's habits happened? (A tick list for the daily note.)
5. One sentence: what made today easier or harder? If it's a pattern, suggest a note for [Decisions] or a skill tweak.

## Never
- Never add, move or decline calendar events, or reply to anyone. Suggest; I act.
- Never pick more than three. If I push for more, ask which of the current three gives way.

## Output format
```text
TODAY: [day, date]
Fixed: [time] [event] ...
Top three:
1. [thing] (why: ...) [suggested slot]
2. ...
3. ...
Might slip: ...
Drop or defer: ...
```

## Inputs
- Calendar (connector or pasted) and timezone
- Memory sections per the Memory map: [Now], [Open loops], and any pasted captures
- Autonomy rung: draft (Lite default)

## Output
- The skill's output format block below
- Optional ship's-log line: `ship: daily-plan | YYYY-MM-DD | ok|skip | note`

## Done when
- [ ] Exactly three priorities, each with a one-line reason.
- [ ] At least one links to a 90-day priority in [Now], or you've said why none does today.
- [ ] Every overdue or due-soon open loop is either in the plan or named under "might slip".
- [ ] No calendar or email changes were made.
- [ ] (Evening) every unfinished item has a decision: carry, schedule, delegate or drop.
