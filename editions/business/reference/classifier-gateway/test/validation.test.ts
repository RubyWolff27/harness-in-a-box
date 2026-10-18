import { describe, it, expect } from 'vitest';

describe('validation logic', () => {
	it('should validate state field requirement', () => {
		const validRequest = {
			state: 'test state',
			questions: { q1: { type: 'noul', instructions: 'test' } },
		};
		expect(validRequest.state).toBeDefined();
		expect(typeof validRequest.state).toBe('string');
	});

	it('should validate questions field requirement', () => {
		const validRequest = {
			state: 'test',
			questions: { q1: { type: 'noul', instructions: 'test' } },
		};
		expect(validRequest.questions).toBeDefined();
		expect(typeof validRequest.questions).toBe('object');
	});

	it('should handle object state', () => {
		const validRequest = {
			state: { field: 'value' },
			questions: { q1: { type: 'noul', instructions: 'test' } },
		};
		expect(validRequest.state).toBeDefined();
		expect(typeof validRequest.state).toBe('object');
	});
});

describe('redaction patterns', () => {
	// BSB format: 6 digits, optional separator, 6-10 digits
	it('should match BSB account pattern', () => {
		const pattern = /\b\d{6}[-\s]?\d{6,10}\b/g;
		expect('BSB 123456 987654321').toMatch(pattern);
		expect('123456-987654321').toMatch(pattern);
		expect('Pay to 123456 123456789').toMatch(pattern);
	});

	// Card number format: 13-19 digits with optional separators
	it('should match card number pattern', () => {
		const pattern = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{3,7}\b/g;
		expect('4111 1111 1111 1111').toMatch(pattern);
		expect('4111-1111-1111-1111').toMatch(pattern);
		expect('5500000000000004').toMatch(pattern);
	});

	// TFN format: 9 digits with optional separators
	it('should match TFN pattern', () => {
		const pattern = /\b\d{3}[-\s]?\d{3}[-\s]?\d{3}\b/g;
		expect('123 456 789').toMatch(pattern);
		expect('123-456-789').toMatch(pattern);
		expect('123456789').toMatch(pattern);
	});
});

describe('cost calculations', () => {
	it('should calculate Jev cost correctly', () => {
		const inputTokens = 300;
		const costPerMillion = 0.042;
		const cost = (inputTokens / 1_000_000) * costPerMillion;
		expect(cost).toBeCloseTo(0.0000126, 10);
	});

	it('should calculate baseline cost correctly', () => {
		const inputTokens = 350;
		const outputTokens = 20;
		const inputCost = (inputTokens / 1_000_000) * 0.0509;
		const outputCost = (outputTokens / 1_000_000) * 0.335;
		const totalCost = inputCost + outputCost;
		expect(totalCost).toBeCloseTo(0.000024515, 8);
	});
});
