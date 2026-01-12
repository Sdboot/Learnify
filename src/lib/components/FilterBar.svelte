<script lang="ts">
	import type { Book } from '$lib/data/books';
	import { Search, X } from 'lucide-svelte';

	export let books: Book[];
	export let onFilterChange: (filters: FilterState) => void;

	interface FilterState {
		search: string;
		category: string;
		subject: string;
		level: string;
		minRating: number;
	}

	let filters: FilterState = {
		search: '',
		category: '',
		subject: '',
		level: '',
		minRating: 0
	};

	let showFilters = false;

	const categories = [...new Set(books.map((b) => b.category))].sort();
	const subjects = [...new Set(books.map((b) => b.subject))].sort();
	const levels = ['beginner', 'intermediate', 'advanced'];

	const updateFilters = () => {
		onFilterChange(filters);
	};

	const clearFilters = () => {
		filters = {
			search: '',
			category: '',
			subject: '',
			level: '',
			minRating: 0
		};
		updateFilters();
	};
</script>

<div class="space-y-4">
	<!-- Search Bar -->
	<div class="relative">
		<Search
			size={20}
			class="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
		/>
		<input
			type="text"
			placeholder="Search books by title, author..."
			bind:value={filters.search}
			on:input={updateFilters}
			class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
		/>
	</div>

	<!-- Mobile Filter Toggle -->
	<button
		on:click={() => (showFilters = !showFilters)}
		class="md:hidden w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
	>
		{showFilters ? 'Hide Filters' : 'Show Filters'}
	</button>

	<!-- Filter Panel -->
	<div
		class={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 ${
			showFilters ? 'block' : 'hidden md:grid'
		}`}
	>
		<!-- Category Filter -->
		<select
			bind:value={filters.category}
			on:change={updateFilters}
			class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
		>
			<option value="">All Categories</option>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>

		<!-- Subject Filter -->
		<select
			bind:value={filters.subject}
			on:change={updateFilters}
			class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
		>
			<option value="">All Subjects</option>
			{#each subjects as subject}
				<option value={subject}>{subject}</option>
			{/each}
		</select>

		<!-- Level Filter -->
		<select
			bind:value={filters.level}
			on:change={updateFilters}
			class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
		>
			<option value="">All Levels</option>
			{#each levels as level}
				<option value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</option>
			{/each}
		</select>

		<!-- Rating Filter -->
		<input
			type="number"
			min="0"
			max="5"
			step="0.5"
			bind:value={filters.minRating}
			on:change={updateFilters}
			placeholder="Min Rating"
			class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
		/>

		<!-- Clear Filters -->
		<button
			on:click={clearFilters}
			class="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center gap-2"
		>
			<X size={18} />
			<span class="hidden sm:inline">Clear</span>
		</button>
	</div>
</div>
