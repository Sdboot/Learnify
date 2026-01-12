<script lang="ts">
	import { favorites } from '$lib/stores/favorites';
	import { browser } from '$app/environment';
	import type { Book } from '$lib/data/books';
	import { Heart } from 'lucide-svelte';
	import BookReader from './BookReader.svelte';

	export let book: Book;

	let isFavorite = false;

	if (browser) {
		favorites.subscribe((faves) => {
			isFavorite = faves.some((f) => f.id === book.id);
		});
	}

	const toggleFavorite = () => {
		if (isFavorite) {
			favorites.remove(book.id);
		} else {
			favorites.add({
				id: book.id,
				title: book.title,
				author: book.author,
				coverUrl: book.coverUrl,
				addedAt: 0
			});
		}
	};
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
	<div class="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
		<img
			src={book.coverUrl}
			alt={book.title}
			class="w-full h-full object-cover"
			on:error={(e) => {
				e.currentTarget.src = 'https://via.placeholder.com/400x600?text=No+Cover';
			}}
		/>
		{#if browser}
			<button
				on:click={toggleFavorite}
				class={`absolute top-3 right-3 p-2 rounded-full transition ${
					isFavorite
						? 'bg-red-500 text-white'
						: 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-red-100'
				}`}
				aria-label="Toggle favorite"
			>
				<Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
			</button>
		{/if}
	</div>

	<div class="p-4">
		<h3 class="font-bold text-sm line-clamp-2 text-gray-900 dark:text-white mb-1">
			{book.title}
		</h3>
		<p class="text-xs text-gray-600 dark:text-gray-400 mb-3">
			by {book.author}
		</p>

		<div class="flex items-center justify-between mb-3">
			<div class="flex items-center gap-1">
				<span class="text-yellow-500">★</span>
				<span class="text-sm font-semibold text-gray-900 dark:text-white">
					{book.rating}
				</span>
				<span class="text-xs text-gray-500 dark:text-gray-400">
					({book.reviews})
				</span>
			</div>
		</div>

		<div class="flex gap-2 mb-3 flex-wrap">
			<span class="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded">
				{book.category}
			</span>
			<span class="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded">
				{book.level}
			</span>
		</div>

		<p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
			{book.description}
		</p>

		<div class="space-y-2">
			<a
				href="/book/{book.id}"
				class="block w-full text-center py-2 px-3 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition text-sm"
			>
				View Details
			</a>
			
			<BookReader {book} />
		</div>
	</div>
</div>
