<script lang="ts">
	import { browser } from '$app/environment';
	import { favorites } from '$lib/stores/favorites';
	import { dummyBooks } from '$lib/data/books';
	import type { Book } from '$lib/data/books';
	import BookCard from '$lib/components/BookCard.svelte';

	let favoriteBooks: Book[] = [];
	let favoriteIds: string[] = [];

	if (browser) {
		favorites.subscribe((faves) => {
			favoriteIds = faves.map((f) => f.id);
			favoriteBooks = dummyBooks.filter((book) => favoriteIds.includes(book.id));
		});
	}
</script>

<div class="min-h-screen bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Header -->
		<div class="mb-8">
			<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Favorites</h1>
			<p class="text-gray-600 dark:text-gray-400">
				You have {favoriteBooks.length} favorite book{favoriteBooks.length !== 1 ? 's' : ''}
			</p>
		</div>

		<!-- Books Grid -->
		{#if favoriteBooks.length > 0}
			<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each favoriteBooks as book}
					<BookCard {book} />
				{/each}
			</div>
		{:else}
			<div class="text-center py-16">
				<div class="text-8xl mb-4">💔</div>
				<h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
					No favorites yet
				</h3>
				<p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
					Start exploring and add your favorite books to build your personal collection!
				</p>
				<a
					href="/browse"
					class="inline-block px-8 py-3 bg-primary dark:bg-indigo-600 text-white rounded-lg font-bold hover:bg-primary/90 dark:hover:bg-indigo-700 transition"
				>
					Browse Books
				</a>
			</div>
		{/if}
	</div>
</div>
