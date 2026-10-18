# Document classifier pattern

For the document-intake skill: a typed-choice classifier that labels each incoming document quickly before any LLM sees it.

## Purpose

Classification is the ceiling. The classifier chooses one label from a fixed set plus "other". It never performs calculations, arithmetic, totals, reconciliation, extraction of figures, validation of amounts or any other computation on the data. Any computation is done by deterministic code or by a person.

## Approved labels (fixed set)

| Label | Meaning |
|---|---|
| `invoice` | An invoice or tax invoice |
| `delivery_note` | A delivery note or goods received note |
| `credit_note` | A credit note |
| `statement` | A statement of account |
| `purchase_order` | A purchase order |
| `remittance` | A remittance advice |
| `quote` | A quotation or quote |
| `tax_document` | BAS, tax return, tax payment receipt (jurisdiction-specific) |
| `other` | None of the above |

Adding a label requires updating this document, the classifier configuration, and the skill's evals.

## Review queue

Anything that does not fit one of the defined labels (`other`) goes to the review queue for a person and is never routed automatically. The following also go to review:

- any item below the confidence threshold, starting at 0.85, or 0.90 for `invoice` and `credit_note` because they can affect payments
- any item whose label changes when the option order is reversed (the stability check applies to every answer below 0.90)

The owner's label is recorded and becomes an eval candidate.

## Confidence thresholds by document type

| Document type | Threshold | Reason |
|---|---|---|
| `invoice` | 0.90 | Affects payments |
| `credit_note` | 0.90 | Affects payments and account balances |
| `delivery_note` | 0.85 | Affects inventory |
| `statement` | 0.85 | For reconciliation only |
| `purchase_order` | 0.85 | Reference document |
| `remittance` | 0.85 | Payment confirmation |
| `quote` | 0.85 | Pre-approval stage |
| `tax_document` | 0.90 | Compliance and lodgement |
| `other` | Always review | Unknown document type |

## Option-order stability check

For any classification with confidence below 0.90, run the classifier twice: once with options in alphabetical order, once in reverse order. If the label changes, send to review. This catches cases where the model is guessing rather than classifying with certainty.

## Logging

Log every call: timestamp, model version, a hash of the input (never the document text), the label, the confidence and the cost. Keep the log for at least 12 months for audit and eval purposes.

Pin the model version in production. Log when the model version changes so classification changes can be traced.

## Pilot gate

Nothing runs unattended until the classifier passes a shadow pilot on about 50 real business documents labelled beforehand by the owner or their bookkeeper. Test set must include:
- At least 5 examples of each common document type
- At least 5 ambiguous cases (for example payment reminders, informal confirmations, quotes that look like invoices)
- At least 2 examples with changed bank details or other fraud indicators (should be flagged by downstream checks, not the classifier)

The owner signs off before it goes live.

## Withdrawn uses

Classification only. The classifier is not used for:
- Extraction of figures, amounts, dates or supplier names
- Validation of totals or reconciliation
- Checks after extraction before the accounting system
- Urgency scoring or request routing to handlers
- Any computation or yes/no checks on content

## Implementation notes

### Choice of classifier

Options:
1. **Typed-choice classifier** (for example TypeSafe Jev): returns choices, scores or yes/no probabilities instead of generated text. Fast (70-500ms claimed), cheap, calibrated confidence scores.
2. **Small local model** (for example Llama 3.2 3B): runs locally or on Workers AI. Slower but no external dependency.
3. **LLM with structured output**: slowest and most expensive. Use as baseline to measure classifier accuracy.

Put the classifier behind a small interface (`classify(doc, labels) -> {label, confidence}`) so it is swappable.

### Rules layer first

Before calling the classifier, check rules:
- Known sender email to supplier mapping
- Subject line patterns (for example "Remittance advice" in subject)
- File naming patterns (for example "INV-2026-1234.pdf" is likely an invoice)

Rules are free, instant and never wrong (if the rule is correct). Only call the classifier for documents that don't match any rule.

### Multi-question classification

For email triage, ask several questions in one pass:
- Document type (the labels above)
- Urgency (low, medium, high, critical)
- Complaint (yes/no)
- Key account (yes/no, checked against your key account list)

Each question gets its own confidence score. Route to review if any score is below threshold.

### Cross-border and privacy

Check the classifier service's region and data retention policy before sending business documents. Documents often contain personal information (names, addresses, emails). Ensure cross-border processing complies with applicable privacy law (Privacy Act, GDPR, POPIA or equivalent).

Prefer services that:
- Do not train on your data
- Keep data in your jurisdiction or under adequate protection
- Delete processed data promptly

### Cost and performance targets

Target performance (adjust based on your actual tests):
- **Latency**: under 500ms per document at p95
- **Cost**: under $0.001 per classification
- **Accuracy**: 95% or higher on your eval set (compared to owner labels)
- **Review rate**: under 10% sent to review after rules (excludes legitimate "other")

Track these weekly. A rising review rate or declining accuracy signals new document types or model drift.

## Testing approach

1. **Baseline**: run your LLM on 50 labelled documents and record accuracy
2. **Classifier**: run the typed-choice classifier on the same 50 documents
3. **Compare**: classifier must match or exceed LLM accuracy to be promoted
4. **Monitor**: re-run monthly on a growing eval set (add misclassified documents to the set)

## Integration with document-intake skill

The document-intake skill calls the classifier as its first step:

```
1. Collect new documents from the approved inbox or folder
2. Check rules (sender mapping, subject patterns, filename patterns)
3. If no rule matches, call classifier with document text or OCR
4. If confidence < threshold or label is "other", add to review queue
5. If confidence >= threshold, route to appropriate handler
6. Log the classification (hash only, not document text)
7. Extract fields (only for documents that passed classification)
8. Validate with deterministic code
9. Flag exceptions, produce import file
10. Owner approves import before it goes to accounting system
```

See `editions/business/skills/document-intake/SKILL.md` for the full skill specification.

## When to add a new label

Add a new label when:
- The "other" rate for a specific document type exceeds 10% over two weeks
- The owner requests it explicitly
- A new business process introduces a new document type

Before adding:
1. Collect at least 10 real examples of the new type
2. Update this document with the new label and threshold
3. Add examples to the eval set
4. Re-run evals to ensure existing labels are not affected
5. Owner approves the change
6. Update the classifier configuration
7. Monitor for one week in shadow mode before promoting

## Reference implementation

See `editions/business/reference/classifier-gateway/` for an optional reference implementation of a typed-choice classifier gateway (Cloudflare Worker with TypeSafe Jev). This is a starting point only; adapt it to your chosen classifier service and requirements.
