/// <reference types="@cloudflare/workers-types" />

export interface Env {
	AI: Ai;
	DB: D1Database;
	GATEWAY_KEY: string;
}

interface JevQuestion {
	type: 'choice' | 'noul' | 'score';
	instructions: string | object;
	criteria?: Record<string, string | null> | string[];
}

interface JevRequest {
	state: string | object;
	questions: Record<string, JevQuestion>;
	meta?: {
		run_id?: string;
		item_id?: string;
	};
}

interface ChoiceAnswer {
	type: 'choice';
	choice: string;
	probabilities: Record<string, number>;
	confidence: number;
}

interface NoulAnswer {
	type: 'noul';
	noul: number;
}

interface ScoreAnswer {
	type: 'score';
	score: number;
	legend: Record<string, string>;
	probabilities: Record<string, number>;
	confidence: number;
}

type Answer = ChoiceAnswer | NoulAnswer | ScoreAnswer;

interface JevResponse {
	model: string;
	answers: Record<string, Answer>;
	usage?: {
		input_tokens: number;
		output_tokens: number;
	};
}

interface BaselineResponse {
	response: string;
	answers?: Record<string, { choice?: string; noul?: number; score?: number }>;
	usage?: {
		input_tokens?: number;
		output_tokens?: number;
	};
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const path = url.pathname;

		// Health check - no auth required
		if (path === '/health' && request.method === 'GET') {
			return new Response(JSON.stringify({ status: 'ok' }), {
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Auth check for all other routes
		const authHeader = request.headers.get('x-gateway-key');
		if (!authHeader || authHeader !== env.GATEWAY_KEY) {
			return new Response(JSON.stringify({ error: 'Unauthorized' }), {
				status: 401,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Route handling
		if (path === '/judge' && request.method === 'POST') {
			return handleJudge(request, env);
		}

		if (path === '/baseline' && request.method === 'POST') {
			return handleBaseline(request, env);
		}

		const runMatch = path.match(/^\/runs\/([^\/]+)$/);
		if (runMatch && request.method === 'GET') {
			return handleGetRun(runMatch[1], env);
		}

		return new Response(JSON.stringify({ error: 'Not found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	},
};

function redactSensitiveData(text: string): string {
	// Redact Australian BSB and account numbers (6 digits, space/dash, 6-10 digits)
	text = text.replace(/\b\d{6}[-\s]?\d{6,10}\b/g, '[REDACTED_BANK_ACCOUNT]');
	
	// Redact credit card numbers (13-19 digits with optional spaces/dashes)
	text = text.replace(/\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{3,7}\b/g, '[REDACTED_CARD]');
	
	// Redact Australian TFN (9 digits with optional spaces/dashes)
	text = text.replace(/\b\d{3}[-\s]?\d{3}[-\s]?\d{3}\b/g, '[REDACTED_TFN]');
	
	return text;
}

function hashState(state: string | object): string {
	const stateStr = typeof state === 'string' ? state : JSON.stringify(state);
	const encoder = new TextEncoder();
	const data = encoder.encode(stateStr);
	return crypto.subtle.digest('SHA-256', data).then(hash => {
		return Array.from(new Uint8Array(hash))
			.map(b => b.toString(16).padStart(2, '0'))
			.join('');
	}) as any;
}

function estimateTokens(text: string): number {
	// Rough estimate: ~4 characters per token
	return Math.ceil(text.length / 4);
}

function getTopConfidence(answer: Answer): number | null {
	if (answer.type === 'choice' || answer.type === 'score') {
		return answer.confidence;
	}
	// Noul doesn't have separate confidence
	return null;
}

async function logRequest(
	env: Env,
	route: string,
	model: string,
	meta: { run_id?: string; item_id?: string } | undefined,
	questionIds: string[],
	answers: Record<string, Answer>,
	latencyMs: number,
	inputTokens: number,
	costUsd: number,
	stateHash: string
): Promise<void> {
	const topConfidence = Math.max(
		...Object.values(answers)
			.map(getTopConfidence)
			.filter((c): c is number => c !== null),
		0
	);

	await env.DB.prepare(
		`INSERT INTO logs (
			timestamp, route, model, run_id, item_id, state_hash,
			question_ids, answers_json, top_confidence,
			latency_ms, input_tokens, cost_usd
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
	)
		.bind(
			new Date().toISOString(),
			route,
			model,
			meta?.run_id || null,
			meta?.item_id || null,
			stateHash,
			JSON.stringify(questionIds),
			JSON.stringify(answers),
			topConfidence,
			latencyMs,
			inputTokens,
			costUsd
		)
		.run();
}

async function handleJudge(request: Request, env: Env): Promise<Response> {
	let body: JevRequest;
	try {
		body = await request.json();
	} catch {
		return new Response(
			JSON.stringify({ error: 'Invalid JSON in request body' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	// Validate request shape
	if (!body.state || typeof body.state !== 'string' && typeof body.state !== 'object') {
		return new Response(
			JSON.stringify({ error: 'Missing or invalid "state" field' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	if (!body.questions || typeof body.questions !== 'object') {
		return new Response(
			JSON.stringify({ error: 'Missing or invalid "questions" field' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	// Redact sensitive data from state
	let redactedState = body.state;
	if (typeof body.state === 'string') {
		redactedState = redactSensitiveData(body.state);
	} else {
		redactedState = JSON.parse(redactSensitiveData(JSON.stringify(body.state)));
	}

	const start = Date.now();
	
	let response: JevResponse;
	try {
		response = (await env.AI.run('typesafe/jev', {
			state: redactedState,
			questions: body.questions,
		})) as unknown as JevResponse;
	} catch (error: any) {
		return new Response(
			JSON.stringify({ error: 'AI inference failed', details: error.message }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}

	const latencyMs = Date.now() - start;

	// Calculate cost for Jev: $0.042 per 1M input tokens, output free
	const inputTokens = response.usage?.input_tokens || estimateTokens(JSON.stringify({ state: redactedState, questions: body.questions }));
	const costUsd = (inputTokens / 1_000_000) * 0.042;

	// Hash state for privacy
	const stateHash = await hashState(body.state);

	// Log to D1
	await logRequest(
		env,
		'judge',
		response.model,
		body.meta,
		Object.keys(body.questions),
		response.answers,
		latencyMs,
		inputTokens,
		costUsd,
		stateHash
	);

	// Add computed fields to response
	const result = {
		...response,
		probabilities: {} as Record<string, Record<string, number> | null>,
		confidence: {} as Record<string, number | null>,
		latency_ms: latencyMs,
		cost_usd: costUsd,
	};

	// Extract probabilities and confidence for easy access
	for (const [qid, answer] of Object.entries(response.answers)) {
		if (answer.type === 'choice' || answer.type === 'score') {
			result.probabilities[qid] = answer.probabilities;
			result.confidence[qid] = answer.confidence;
		} else {
			result.probabilities[qid] = null;
			result.confidence[qid] = null;
		}
	}

	return new Response(JSON.stringify(result, null, 2), {
		headers: { 'Content-Type': 'application/json' },
	});
}

async function handleBaseline(request: Request, env: Env): Promise<Response> {
	let body: JevRequest;
	try {
		body = await request.json();
	} catch {
		return new Response(
			JSON.stringify({ error: 'Invalid JSON in request body' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	// Validate request shape
	if (!body.state || typeof body.state !== 'string' && typeof body.state !== 'object') {
		return new Response(
			JSON.stringify({ error: 'Missing or invalid "state" field' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	if (!body.questions || typeof body.questions !== 'object') {
		return new Response(
			JSON.stringify({ error: 'Missing or invalid "questions" field' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	// Redact sensitive data from state
	let redactedState = body.state;
	if (typeof body.state === 'string') {
		redactedState = redactSensitiveData(body.state);
	} else {
		redactedState = JSON.parse(redactSensitiveData(JSON.stringify(body.state)));
	}

	// Build a prompt for the baseline model to answer the questions
	const stateText = typeof redactedState === 'string' ? redactedState : JSON.stringify(redactedState);
	
	const prompt = `You are answering structured questions about the following state:

${stateText}

Answer these questions and return ONLY a JSON object with the answers:

${Object.entries(body.questions)
	.map(([qid, q]) => {
		if (q.type === 'choice') {
			const options = Object.keys(q.criteria as Record<string, any>).join(', ');
			return `${qid}: Choose one of: ${options}`;
		} else if (q.type === 'noul') {
			return `${qid}: Answer yes (1) or no (0): ${q.instructions}`;
		} else if (q.type === 'score') {
			const levels = (q.criteria as string[]).join(', ');
			return `${qid}: Rate from 0-${(q.criteria as string[]).length - 1}: ${q.instructions} (${levels})`;
		}
		return '';
	})
	.join('\n')}

Return JSON like: {"${Object.keys(body.questions)[0]}": "answer", ...}`;

	const start = Date.now();
	
	let response: BaselineResponse;
	try {
		const aiResponse = await env.AI.run('@cf/meta/llama-3.2-3b-instruct', {
			messages: [
				{
					role: 'system',
					content: 'You are a helpful assistant that answers questions in JSON format.',
				},
				{
					role: 'user',
					content: prompt,
				},
			],
			max_tokens: 512,
			temperature: 0.1,
		}) as any;

		response = {
			response: aiResponse.response || JSON.stringify(aiResponse),
			usage: aiResponse.usage,
		};

		// Try to parse answers from JSON response
		try {
			const jsonMatch = response.response.match(/\{[^}]+\}/);
			if (jsonMatch) {
				response.answers = JSON.parse(jsonMatch[0]);
			}
		} catch {
			// If parsing fails, return raw response
		}
	} catch (error: any) {
		return new Response(
			JSON.stringify({ error: 'AI inference failed', details: error.message }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}

	const latencyMs = Date.now() - start;

	// Calculate cost for llama-3.2-3b-instruct: $0.0509 per M input tokens, $0.335 per M output tokens
	const inputTokens = response.usage?.input_tokens || estimateTokens(prompt);
	const outputTokens = response.usage?.output_tokens || estimateTokens(response.response);
	const costUsd = (inputTokens / 1_000_000) * 0.0509 + (outputTokens / 1_000_000) * 0.335;

	// Hash state for privacy
	const stateHash = await hashState(body.state);

	// Convert answers to simplified format for logging
	const answersForLog: Record<string, Answer> = {};
	if (response.answers) {
		for (const [qid, ans] of Object.entries(response.answers)) {
			if (typeof ans === 'string') {
				answersForLog[qid] = { type: 'choice', choice: ans, probabilities: {}, confidence: 0 };
			} else if (typeof ans === 'number') {
				answersForLog[qid] = { type: 'noul', noul: ans };
			}
		}
	}

	// Log to D1
	await logRequest(
		env,
		'baseline',
		'@cf/meta/llama-3.2-3b-instruct',
		body.meta,
		Object.keys(body.questions),
		answersForLog,
		latencyMs,
		inputTokens,
		costUsd,
		stateHash
	);

	return new Response(
		JSON.stringify(
			{
				model: '@cf/meta/llama-3.2-3b-instruct',
				raw_response: response.response,
				parsed_answers: response.answers,
				latency_ms: latencyMs,
				cost_usd: costUsd,
				usage: {
					input_tokens: inputTokens,
					output_tokens: outputTokens,
				},
			},
			null,
			2
		),
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
}

async function handleGetRun(runId: string, env: Env): Promise<Response> {
	const results = await env.DB.prepare(
		`SELECT * FROM logs WHERE run_id = ? ORDER BY timestamp ASC`
	)
		.bind(runId)
		.all();

	if (!results.results || results.results.length === 0) {
		return new Response(
			JSON.stringify({ error: 'Run not found', run_id: runId }),
			{ status: 404, headers: { 'Content-Type': 'application/json' } }
		);
	}

	// Parse JSON fields
	const logs = results.results.map((row: any) => ({
		...row,
		question_ids: JSON.parse(row.question_ids),
		answers_json: JSON.parse(row.answers_json),
	}));

	return new Response(
		JSON.stringify(
			{
				run_id: runId,
				log_count: logs.length,
				logs,
			},
			null,
			2
		),
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
}
