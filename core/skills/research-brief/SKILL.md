---
name: research-brief
description: Researches a question and writes a short, sourced brief. Use when I say "research", "look into", "compare", "should I buy" or "help me decide about". Agrees the brief first (question, ideal state, done-when checks), searches the web and my files, separates checked facts from claims, and gives a recommendation with confidence. Saves to the Resources folder in my memory home.
---

# Research brief

Turn "can you look into ..." into a one-page answer I can trust and act on.

## When to use
- Any question that needs more than a quick answer: a purchase, a health or money topic to understand (not advice), a trip, a comparison, a "how does this work".
- For long jobs, give it to Grok Bot as a task, or use Claude's tasks or ChatGPT's Work mode with this skill.

## What you need
- The question.
- Why I'm asking and what I'll do with the answer.
- Any constraints (budget, timing, location, preferences).

## Steps
1. **Agree the brief before searching.** Write it and wait for my OK:
   - Question: one sentence.
   - Why: what decision it feeds.
   - Ideal state: what the finished brief lets me do.
   - Done when: two to four checks (for example "three options compared on price, running cost and warranty", "every number has a source and date").
   - Depth: quick (15 minutes), standard, or deep.
2. **Search.** Prefer original sources (official sites, manufacturers, government, the study itself) over summaries. Use my Drive and memory home if relevant.
3. **Check.** For each key claim, note the source and date. Mark claims you couldn't confirm as "unverified". Note when sources disagree.
4. **Write the brief** in the format below. Plain English. One page.
5. **Recommend.** One recommendation, a confidence level (low, medium or high, with the reason), and what would change your mind.
6. **Verify** against the done-when checks. Say which pass and which don't.
7. **Save.** Save it (or give me the note to paste) to `3 Resources/` in my memory home (or the right project folder), with the brief at the top.

## Never
- Never present health, legal, tax or financial information as personal advice. Say when I should ask a professional.
- Never invent sources, quotes or numbers. If you can't find it, say so.
- Never buy, book or sign up for anything.

## Output format
```text
RESEARCH BRIEF: [question]
Date: [today]  Depth: [quick/standard/deep]
Ideal state: ...
Done when: ...

Bottom line: [two or three sentences]
Recommendation: ... (confidence: ..., because ...)
What would change my mind: ...

Findings:
- [finding] (source, date)
- [finding] (unverified)

Options compared (if relevant): [small table]
Sources: [list with links]
Done-when check: [pass/fail per check]
```

## Done when
- [ ] The brief was agreed before research started.
- [ ] Every key fact has a source and date, or is labelled unverified.
- [ ] There is one recommendation with a confidence level and a reason.
- [ ] Each done-when check is marked pass or fail.
