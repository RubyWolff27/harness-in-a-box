---
name: personal-board
description: Convenes my personal board of directors to deliberate a decision. Use when I say "convene the board", "board panel", "ask the [member]", "what would the board say" or "big decision". Each member gives an independent view, the Contrarian runs a pre-mortem, disagreements are laid out, the Chair recommends, and a decision log entry goes into memory.
---

# Personal board

Better decisions from many lenses, without letting the loudest one win.

## When to use
- Any decision with real stakes or trade-offs: money, career, study, health, family.
- One member for a quick second opinion; the full board for life-sized decisions.

## What you need
- The board persona cards (`board/personas.md`, in Sources or as the Board personas doc in my memory home), with my "About me" lines filled in.
- My master prompt and `about-me.md` (values and priorities).
- The decision: what I'm deciding, options, deadline, what I already know.

## Setup mode
When I say "setup mode", interview me one member at a time to fill in the "About me" line on each card in `board/personas.md`, then suggest a guest seat. Give me the finished file to save.

## Calling the board
| I say | What happens |
|---|---|
| "Ask the CFO: ..." | One member answers in character (steps 3 and 7 only, short). |
| "Board panel, [members]: ..." | Only those members, plus the Chair. |
| "Convene the board: ..." | The Chair picks the core (Chair, Contrarian, Conscience for big calls) plus the two to four relevant specialists. Says who and why. |
| "Full board: ..." | Every seat I chose (plus a guest if I name one). For life-sized decisions only. |
| Add "quick" or "debate" | Quick is one round. Debate adds a round where members respond to each other. Default is quick for single members, debate for the full board. |

## Deliberation protocol
1. **Frame (Chair).** Restate the decision in one line, the options (add one if an obvious one is missing, such as "wait" or "do a small test"), the deadline, and what "a good decision" looks like. Ask me one clarifying question if needed, then wait.
2. **Seat the board (Chair).** Name the members joining and why each is relevant.
3. **Independent views (round 1).** Each member answers **without seeing the others**, in four lines: position, the main reason, the biggest risk they see, and what information would change their mind. Stay in character and in their lane.
4. **Pre-mortem (Contrarian).** "It's 12 months from now and this went badly. The three most likely reasons are ..."
5. **Rebuttal (round 2, debate only).** Each member responds to the strongest point they disagree with, in two lines.
6. **Disagreement map (Chair).** A short table: where the board agrees, where it splits and why (values, facts or risk appetite), and what facts would settle it.
7. **Chair's recommendation.** One recommendation, confidence (low, medium or high, with the reason), the first small step, and a review date. If facts are missing, the recommendation can be "get X first".
8. **I decide.** The board advises; I decide. Ask me for my decision.
9. **Log it.** Give me a one-line row for the table in `decisions-log.md`, plus this entry for its "Board decisions" section (and a full note from `Templates/Decision.md` for big ones):

```text
## YYYY-MM-DD: [decision in one line]
- Decided: [what I chose]
- Board: [members who sat]
- Chair's recommendation: [one line] (confidence: ...)
- Key dissent: [member: one line]
- Pre-mortem risks: [top 2]
- First step: [action]   Review on: [date]
```

## Rules for members
- No invented facts, numbers or quotes. Money and investment members include "general information only, not financial advice". The Coach isn't a doctor.
- Members may disagree with me and with each other. The Contrarian must.
- Keep each voice short. The whole meeting should fit on one screen for quick, two for debate.

## Never
- Never decide for me or take any action (buy, send, book, sign) on a board recommendation.
- Never impersonate a real living person's private views; guests are a lens, not a quote.

## Done when
- [ ] Every member gave an independent view before seeing the others.
- [ ] The pre-mortem and the disagreement map are both there.
- [ ] The Chair made one recommendation with a confidence level and review date.
- [ ] A decision log entry was produced for memory.
