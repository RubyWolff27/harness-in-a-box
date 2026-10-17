---
name: daily-interest-brief
description: TEMPLATE. A short daily brief on [INTEREST, e.g. a sport, team, hobby or topic], set up once as a routine or scheduled task. Use when I say "[INTEREST] brief", "what's happening in [INTEREST]" or "set up my brief". Gives what's coming up (with times in my time zone), recent results or news, and one thing to watch, with sources.
---

# Daily interest brief (template)

> **Setup note for the assistant.** This is a template. During setup (`AGENTS.md` Step 4), ask what the user follows closely (a sport, a team, a hobby, a market, a topic), then fill in every [BRACKET]: the official and trusted sources, the sections that make sense (fixtures and results for a sport; releases and news for a topic), and where to watch or follow in their country. Check the sources exist. Save it with a clear name (for example `football-brief`, `cycling-brief`, `space-news-brief`) and delete this note. Make one brief per interest; two at most to start.

Two minutes on the thing I love, with my morning coffee.

## When to use
- Every morning, automatically, as a routine or scheduled task.
- By hand: "Run my [INTEREST] brief" any time.

## Set it up (10 minutes, Week 2 or later)
- **Grok Bot (path 1):** say "Every day at [TIME] [MY CITY] time, run /[SKILL NAME] and post it here. If a source is unavailable, say so." Use **Test run** first. See `GROK-BOT.md`.
- **Claude (path 2):** on the **Scheduled** page, New task: paste the prompt below, set it daily at [TIME] in my time zone, and pick an approval mode that doesn't need me (it only reads and reports). See `CLAUDE.md`.
- **ChatGPT (path 3):** open a new chat, paste the prompt below, and add "Schedule this every day at [TIME] [MY CITY] time." As of October 2026, Plus gets 5 active tasks, and a task inside a project can't read that project's files, so the prompt is self-contained. Turn on notifications in Settings > Notifications. See `CHATGPT.md`.

## The scheduled prompt (fill in the brackets)

```text
You are my [INTEREST] briefer. I live in [CITY, COUNTRY]. Give all times in my
local time zone, with the day of the week. Today's date is the date this task runs.

Search the web now for current information. Use [OFFICIAL SOURCES] first, then
reputable outlets such as [TRUSTED OUTLETS]. Never guess or reuse old information.
If you can't confirm something, say "unconfirmed" or leave it out. Give a link for
every result and story.

Write a brief under 250 words in this format:
1. NEXT UP: the next [EVENT / MATCH / RELEASE], where, and how many days away.
2. THIS WEEK (only if something is within 4 days): times in my local time, and
   where to watch or follow in [COUNTRY] (say "unconfirmed" if you can't check).
3. RESULTS OR NEWS (last 24 hours only).
4. [STANDINGS / PRICES / LEADERBOARD], if it applies.
5. HEADLINES: three stories from the last 24 hours, one line each with a link.
   Prioritise [MY FAVOURITES].
6. ONE THING TO WATCH: one sentence.

If nothing new has happened and nothing is close, say so in two lines and stop.
No betting odds or tips.
```

## Never
- Never invent results, times, prices or quotes.
- Never give betting tips or odds.

## Done when
- [ ] The routine or task exists with the right local time.
- [ ] Two briefs in a row had correct, sourced times and results.
- [ ] Quiet-day briefs are short.
