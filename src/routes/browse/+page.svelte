<script lang="ts">
	import { dummyBooks, type Book } from '$lib/data/books';
	import BookCard from '$lib/components/BookCard.svelte';
	import FilterBar from '$lib/components/FilterBar.svelte';

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

	let filteredBooks: Book[] = dummyBooks;

	const applyFilters = (newFilters: FilterState) => {
		filters = newFilters;

		filteredBooks = dummyBooks.filter((book) => {
			const matchesSearch =
				!filters.search ||
				book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
				book.author.toLowerCase().includes(filters.search.toLowerCase()) ||
				book.description.toLowerCase().includes(filters.search.toLowerCase());

			const matchesCategory = !filters.category || book.category === filters.category;
			const matchesSubject = !filters.subject || book.subject === filters.subject;
			const matchesLevel = !filters.level || book.level === filters.level;
			const matchesRating = book.rating >= filters.minRating;

			return matchesSearch && matchesCategory && matchesSubject && matchesLevel && matchesRating;
		});
	};
</script>

<div class="min-h-screen bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Header -->
		<div class="mb-8">
			<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">Browse Library</h1>
			<p class="text-gray-600 dark:text-gray-400">
				Discover {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} in our collection
			</p>
		</div>

		<!-- Filter Bar -->
		<div class="mb-8">
			<FilterBar books={dummyBooks} onFilterChange={applyFilters} />
		</div>

		<!-- Books Grid -->
		{#if filteredBooks.length > 0}
			<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each filteredBooks as book}
					<BookCard {book} />
				{/each}
			</div>
		{:else}
			<div class="text-center py-12">
				<div class="text-6xl mb-4">📭</div>
				<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No books found</h3>
				<p class="text-gray-600 dark:text-gray-400 mb-6">
					Try adjusting your filters or search criteria
				</p>
				<button
					on:click={() => applyFilters({ search: '', category: '', subject: '', level: '', minRating: 0 })}
					class="px-6 py-2 bg-primary dark:bg-indigo-600 text-white rounded-lg font-semibold hover:bg-primary/90 dark:hover:bg-indigo-700 transition"
				>
					Clear All Filters
				</button>
			</div>
		{/if}
	</div>
</div>
