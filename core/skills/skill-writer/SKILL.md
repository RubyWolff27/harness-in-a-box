---
name: skill-writer
description: Writes a new skill (a markdown playbook) for my harness, or improves an existing one. Use when I say "write a skill", "make this a skill", "turn this into a playbook", "improve the X skill" or after I've explained the same job more than twice. Runs the skill-first check, interviews me, drafts a SKILL.md in the house format, tests it once, and tells me where to save it.
---

# Skill writer

A skill is a written playbook for a job I repeat. Writing one takes 20 minutes and saves that every week after. This skill writes skills.

## When to use
- I've explained the same job to you more than twice.
- A chat went well and I say "make this a skill".
- An existing skill keeps missing something ("improve the meeting-prep skill").

## The skill-first check (ask first, in under five minutes)
1. **Could an existing skill do this with a small change?** If yes, improve that one instead.
2. **Is this a real repeat job?** If I'll do it fewer than once a month, a saved prompt in a note may be enough.
3. **When do we review it?** Set a review date within 90 days. Skills that aren't used get retired.

## Steps
1. **Brief.** "Ideal state: a skill that does [job] the same good way every time. Done when: it passes one real test and has clear done-when checks."
2. **Interview me** (one question at a time):
   - What's the job, in one sentence?
   - When should the skill be used? What words would I say to trigger it? When should it not be used?
   - What do you need from me or my tools to do it?
   - Walk me through how you'd do it well, step by step. (Or: use the chat we just had.)
   - What should it never do?
   - What does "done" look like? How would we check?
3. **Draft the SKILL.md** in the format below. Keep it under about 500 words. Write steps as instructions ("List...", "Ask...", "Draft..."). Describe the outcome you want more than every little step.
4. **Test once.** Run the new skill on a real, low-stakes example in this chat. Check the result against its done-when list.
5. **Fix** anything the test showed. Show me the final version.
6. **Tell me where to save it:** a copy in my memory home (`Harness/Skills/` in Drive, or `05 Harness/Skills/[skill-name]/SKILL.md` if I use Obsidian), and upload a copy to the project's Sources as `skill-[skill-name].md`. Add a line to my decisions log: "[date] Added skill [name]. Review by [date]."

## The house format
```text
---
name: [lowercase-with-hyphens, same as the folder name]
description: [What it does and when to use it, with trigger phrases. One to three sentences.]
---

# [Skill title]
[One line on what this is for.]

## When to use
## What you need
## Steps
1. Brief. [ideal state and done-when for this job]
...
## Never
## Output format
## Done when
- [ ] [checkable statement]
```

## Never
- Never write a skill that sends, buys, deletes, shares or books without my OK.
- Never put passwords, account numbers or personal ID numbers in a skill.
- Never write more than one skill at a time.

## Done when
- [ ] The skill-first check was done and recorded.
- [ ] The draft follows the house format, with a name that matches its folder.
- [ ] It has three to five done-when checks that can actually be tested.
- [ ] It was tested once on a real example and fixed.
- [ ] I know where to save it, and it has a review date.
