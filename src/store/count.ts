import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCountStore = defineStore(
	'count',
	() => {
		const count = ref(0);

		const increment = () => {
			count.value++;
		};

		return { count, increment };
	},
	{
		persist: true,
	},
);
