# Single-file harness export

**One sentence:** One portable file holds your Index, sections, playbook names, rung levels and red lines so a fresh chat can reload you.

## Format (plain text)

```text
HARNESS EXPORT v3
Exported: YYYY-MM-DD
Kit: 3.0.1
Archetype: A|B|C|D
Product: [name or unknown]

## Index
[under ~400 words]

## About me
...

## Now
...

## Open loops
...

## Decisions
...

## Playbooks
- daily-plan (rung: draft)
- capture (rung: draft)
- weekly-review (rung: draft)

## Red lines
...

## Interrupt rule
notify / ask when blocked / wait before anything leaves / come back for decisions
```

## Self-check import

In a fresh chat, paste the export and say: "Import this harness export and run self-check items 1, 4 and 6." Pass when red lines match, priorities and memory home location are right, and the three playbooks are named.
