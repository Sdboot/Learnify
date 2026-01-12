<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon, Menu, X } from 'lucide-svelte';

	let isDark = false;
	let isMenuOpen = false;

	theme.subscribe((value) => {
		isDark = value === 'dark';
	});

	const toggleTheme = () => {
		theme.toggle();
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false;
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

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-4">
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

			<!-- Mobile Menu Button -->
			<div class="md:hidden flex items-center gap-2">
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
				<button
					on:click={toggleMenu}
					class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<X size={24} class="text-gray-700 dark:text-white" />
					{:else}
						<Menu size={24} class="text-gray-700 dark:text-white" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-200 dark:border-gray-800 pt-4">
				<a href="/" on:click={closeMenu} class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
					Home
				</a>
				<a href="/browse" on:click={closeMenu} class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
					Browse
				</a>
				<a href="/favorites" on:click={closeMenu} class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
					♡ Favorites
				</a>
			</div>
		{/if}
	</div>
</nav>
