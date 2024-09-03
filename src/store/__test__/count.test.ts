import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCountStore } from '../count';

describe('count', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('should increment count', () => {
		const store = useCountStore();
		expect(store.count).toBe(0);
		store.increment();
		expect(store.count).toBe(1);
	});
});
