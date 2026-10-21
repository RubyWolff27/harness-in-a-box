> **Advanced and optional.** This is developer reference code (a Cloudflare Worker). You do not need it to use the business edition.

# jev-gateway

**Optional reference implementation** of a typed-choice classifier gateway for business document classification. This Worker provides authenticated access to TypeSafe's Jev model via Cloudflare Workers AI.

## Status

This is a reference implementation only. It is optional and depends on:
- Cloudflare Workers account
- Cloudflare Workers AI binding
- Cloudflare D1 database for logging
- TypeSafe Jev model access via Workers AI

You do not need to deploy this to use the business edition. It is provided as a starting point for those who want a typed-choice classifier with privacy protections and structured logging.

## Overview

This Worker provides authenticated access to TypeSafe's Jev System One model (`typesafe/jev`) through Cloudflare Workers AI. It offers two endpoints for classification:

1. **Judge** (`/judge`): Uses Jev for structured, calibrated decisions with probabilities and confidence
2. **Baseline** (`/baseline`): Uses Llama 3.2 3B for comparative benchmarking

All requests are logged to a D1 database for analysis, with privacy protections applied.

## Before you deploy

1. **No node_modules included.** Run `npm ci` to install dependencies from `package-lock.json`.
2. **Update wrangler.jsonc** with your D1 database ID.
3. **Set GATEWAY_KEY secret:** `wrangler secret put GATEWAY_KEY`
4. **Pin the Jev model version** in `src/index.ts` before deploying.
5. **Review the redaction patterns** in `src/index.ts` to match your jurisdiction (currently Australian BSB, TFN, card numbers).

## Privacy notes

- Raw document text is never stored in D1; only a SHA-256 hash for deduplication
- Bank accounts, card numbers and tax file numbers are redacted before sending to AI models
- All endpoints except `/health` require authentication
- See the main README below for full details

## Overview

This Worker provides authenticated access to TypeSafe's Jev System One model (`typesafe/jev`) through Cloudflare Workers AI. It offers two endpoints for classification:

1. **Judge** (`/judge`): Uses Jev for structured, calibrated decisions with probabilities and confidence
2. **Baseline** (`/baseline`): Uses Llama 3.2 3B for comparative benchmarking

All requests are logged to a D1 database for analysis, with privacy protections applied.

## Endpoints

### POST /judge

Sends questions to TypeSafe's Jev model via Workers AI.

**Request:**

```json
{
  "state": "Tax invoice INV-001 from Acme Supplies, total $120 incl GST, due in 14 days",
  "questions": {
    "doc_type": {
      "type": "choice",
      "instructions": "What type of document is this?",
      "criteria": {
        "invoice": "A bill for goods or services",
        "delivery_note": "Shipping confirmation",
        "purchase_order": "Order request",
        "statement": "Account summary",
        "other": "None of the above"
      }
    }
  },
  "meta": {
    "run_id": "test-run-001",
    "item_id": "email-42"
  }
}
```

**Response:**

```json
{
  "model": "jev-1.13.0",
  "answers": {
    "doc_type": {
      "type": "choice",
      "choice": "invoice",
      "probabilities": {
        "invoice": 0.95,
        "delivery_note": 0.02,
        "purchase_order": 0.01,
        "statement": 0.01,
        "other": 0.01
      },
      "confidence": 0.92
    }
  },
  "probabilities": { ... },
  "confidence": { ... },
  "latency_ms": 245,
  "cost_usd": 0.000012,
  "usage": {
    "input_tokens": 285,
    "output_tokens": 18
  }
}
```

### POST /baseline

Uses Llama 3.2 3B Instruct to answer the same question format for comparison.

**Request:** Same as `/judge`

**Response:**

```json
{
  "model": "@cf/meta/llama-3.2-3b-instruct",
  "raw_response": "{\"doc_type\": \"invoice\"}",
  "parsed_answers": {
    "doc_type": "invoice"
  },
  "latency_ms": 180,
  "cost_usd": 0.000035,
  "usage": {
    "input_tokens": 320,
    "output_tokens": 15
  }
}
```

### GET /runs/:run_id

Retrieve all logged requests for a specific run.

**Response:**

```json
{
  "run_id": "test-run-001",
  "log_count": 2,
  "logs": [
    {
      "id": 1,
      "timestamp": "2026-09-28T09:15:30.000Z",
      "route": "judge",
      "model": "jev-1.13.0",
      "run_id": "test-run-001",
      "item_id": "email-42",
      "state_hash": "a3f8...",
      "question_ids": "[\"doc_type\"]",
      "answers_json": "{...}",
      "top_confidence": 0.92,
      "latency_ms": 245,
      "input_tokens": 285,
      "cost_usd": 0.000012
    }
  ]
}
```

### GET /health

Health check endpoint (no authentication required).

**Response:**

```json
{
  "status": "ok"
}
```

## Authentication

All endpoints except `/health` require an `x-gateway-key` header matching the `GATEWAY_KEY` secret.

```bash
curl https://jev-gateway.your-account.workers.dev/judge \
  -H "x-gateway-key: YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{"state": "...", "questions": {...}}'
```

## Privacy & Security

### Data Redaction

Before sending state to AI models, the Worker automatically redacts:

- **Bank accounts**: Australian BSB and account numbers (e.g., `123456-987654321`)
- **Card numbers**: Credit/debit card numbers (13-19 digits)
- **TFNs**: Australian Tax File Numbers (e.g., `123-456-789`)

Redacted values are replaced with `[REDACTED_BANK_ACCOUNT]`, `[REDACTED_CARD]`, or `[REDACTED_TFN]`.

### State Hashing

Raw `state` content is never stored in D1. Instead, we store only a SHA-256 hash for deduplication and correlation purposes.

### Secrets

The `GATEWAY_KEY` secret is stored in Cloudflare and never committed to code or logged.

## Cost Estimates

### Jev (typesafe/jev)
- Input: **$0.042 per 1M tokens**
- Output: **Free**
- Typical email classification: ~300 input tokens = **$0.000013** per call

### Baseline (llama-3.2-3b-instruct)
- Input: **$0.0509 per 1M tokens**
- Output: **$0.335 per 1M tokens**
- Typical email classification: ~350 input + 20 output = **$0.000025** per call

## Important: No Actions Taken

This gateway **only returns judgments**. It does not:
- Send emails
- Process payments
- Modify records
- Take any automated action

Downstream systems are responsible for interpreting and acting on the returned judgments.

## Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Run tests
npm test

# Deploy
npm run deploy
```

## Deployment

Deployed to Cloudflare Workers at:
- Account: `57c072a2a40c3377475f075287fc2398`
- Database: `jev-gateway-log` (D1)
- Binding: Workers AI (`env.AI`)

## Question Types

Jev supports three question primitives:

### Choice
Select one option from a defined set. Returns the chosen option, full probability distribution, and confidence.

### Noul
Yes/no questions. Returns a probability from 0 (no) to 1 (yes).

### Score
Rate along ordered levels. Returns a probability-weighted score and confidence.

See [TypeSafe documentation](https://docs.typesafe.ai/primitives.md) for detailed guidance on crafting effective questions.
