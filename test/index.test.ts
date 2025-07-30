import { describe, expect, test } from '@jest/globals';
import mod from './mod';

describe('test', () => {
	test('tests jest', () => {
		expect('jest').toBe('jest');
	});

	test('1 + 1', () => {
		expect(mod.sum(1, 1)).toBe(2);
	});
});
