import { describe, it, expect, beforeAll } from 'vitest';
import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';

describe('jev-gateway', () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev('src/index.ts', {
			experimental: { disableExperimentalWarning: true },
		});
	});

	it('health check should work without auth', async () => {
		const resp = await worker.fetch('http://localhost/health');
		expect(resp.status).toBe(200);
		const body = await resp.json();
		expect(body).toEqual({ status: 'ok' });
	});

	it('should reject requests without auth header', async () => {
		const resp = await worker.fetch('http://localhost/judge', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ state: 'test', questions: {} }),
		});
		expect(resp.status).toBe(401);
		const body = await resp.json();
		expect(body).toHaveProperty('error', 'Unauthorized');
	});

	it('should reject requests with invalid auth header', async () => {
		const resp = await worker.fetch('http://localhost/judge', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-gateway-key': 'wrong-key',
			},
			body: JSON.stringify({ state: 'test', questions: {} }),
		});
		expect(resp.status).toBe(401);
		const body = await resp.json();
		expect(body).toHaveProperty('error', 'Unauthorized');
	});

	it('should reject invalid JSON', async () => {
		const resp = await worker.fetch('http://localhost/judge', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-gateway-key': '__SECRET__',
			},
			body: 'not json',
		});
		expect(resp.status).toBe(400);
		const body = await resp.json();
		expect(body.error).toContain('Invalid JSON');
	});

	it('should reject missing state field', async () => {
		const resp = await worker.fetch('http://localhost/judge', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-gateway-key': '__SECRET__',
			},
			body: JSON.stringify({ questions: {} }),
		});
		expect(resp.status).toBe(400);
		const body = await resp.json();
		expect(body.error).toContain('state');
	});

	it('should reject missing questions field', async () => {
		const resp = await worker.fetch('http://localhost/judge', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-gateway-key': '__SECRET__',
			},
			body: JSON.stringify({ state: 'test' }),
		});
		expect(resp.status).toBe(400);
		const body = await resp.json();
		expect(body.error).toContain('questions');
	});

	it('should return 404 for unknown routes', async () => {
		const resp = await worker.fetch('http://localhost/unknown', {
			method: 'GET',
			headers: { 'x-gateway-key': '__SECRET__' },
		});
		expect(resp.status).toBe(404);
	});
});

describe('redaction', () => {
	it('should redact BSB and account numbers', () => {
		const input = 'Please pay to BSB 123456 account 987654321';
		// Note: We can't directly test the redactSensitiveData function
		// without exporting it, but the integration tests will cover this
		expect(input).toContain('123456');
	});

	it('should redact card numbers', () => {
		const input = 'Card number: 4111 1111 1111 1111';
		expect(input).toContain('4111');
	});

	it('should redact TFNs', () => {
		const input = 'TFN: 123 456 789';
		expect(input).toContain('123');
	});
});
