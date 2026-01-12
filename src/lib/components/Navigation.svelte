<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';

	let isDark = false;

	theme.subscribe((value) => {
		isDark = value === 'dark';
	});

	const toggleTheme = () => {
		theme.toggle();
	};
</script>

<nav class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div class="flex justify-between items-center">
			<div class="flex items-center gap-2">
				<div class="text-2xl">📚</div>
				<a href="/" class="text-xl font-bold text-primary dark:text-indigo-400">
					Learnify
				</a>
			</div>

			<div class="flex items-center gap-4">
				<a href="/" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
					Home
				</a>
				<a href="/browse" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
					Browse
				</a>
				<a href="/favorites" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
					♡ Favorites
				</a>
				<button
					on:click={toggleTheme}
					class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
					aria-label="Toggle theme"
				>
					{#if isDark}
						<Sun size={20} class="text-yellow-500" />
					{:else}
						<Moon size={20} class="text-gray-700" />
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>
