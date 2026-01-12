<script lang="ts">
	import { browser } from '$app/environment';
	import { dummyBooks } from '$lib/data/books';
	import { favorites } from '$lib/stores/favorites';
	import { page } from '$app/stores';
	import { Heart } from 'lucide-svelte';

	let book = dummyBooks.find((b) => b.id === $page.params.id);

	let isFavorite = false;

	if (browser && book) {
		favorites.subscribe((faves) => {
			isFavorite = faves.some((f) => f.id === book.id);
		});
	}

	const toggleFavorite = () => {
		if (!book) return;

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

<div class="min-h-screen bg-white dark:bg-gray-900">
	{#if book}
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<!-- Breadcrumb -->
			<div class="mb-8">
				<a href="/browse" class="text-primary dark:text-indigo-400 hover:underline">
					← Back to Browse
				</a>
			</div>

			<!-- Book Details -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Cover Image -->
				<div class="md:col-span-1">
					<div class="sticky top-24">
						<div class="relative h-96 rounded-lg overflow-hidden shadow-lg mb-6">
							<img
								src={book.coverUrl}
								alt={book.title}
								class="w-full h-full object-cover"
								on:error={(e) => {
									e.currentTarget.src = 'https://via.placeholder.com/300x450?text=No+Cover';
								}}
							/>
						</div>

						<button
							on:click={toggleFavorite}
							class={`w-full py-3 px-4 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
								isFavorite
									? 'bg-red-500 text-white hover:bg-red-600'
									: 'bg-primary dark:bg-indigo-600 text-white hover:bg-primary/90 dark:hover:bg-indigo-700'
							}`}
						>
							<Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
							{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
						</button>
					</div>
				</div>

				<!-- Book Info -->
				<div class="md:col-span-2">
					<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
						{book.title}
					</h1>

					<p class="text-xl text-gray-600 dark:text-gray-300 mb-4">
						by <span class="font-semibold">{book.author}</span>
					</p>

					<!-- Rating -->
					<div class="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
						<div class="flex items-center gap-2">
							<span class="text-3xl text-yellow-500">★</span>
							<span class="text-2xl font-bold text-gray-900 dark:text-white">
								{book.rating}
							</span>
						</div>
						<span class="text-gray-600 dark:text-gray-400">
							({book.reviews} reviews)
						</span>
					</div>

					<!-- Description -->
					<div class="mb-8">
						<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About this book</h2>
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
							{book.description}
						</p>
					</div>

					<!-- Book Details -->
					<div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
						<div>
							<p class="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase">Category</p>
							<p class="text-lg text-gray-900 dark:text-white">{book.category}</p>
						</div>
						<div>
							<p class="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase">Subject</p>
							<p class="text-lg text-gray-900 dark:text-white">{book.subject}</p>
						</div>
						<div>
							<p class="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase">Level</p>
							<p class="text-lg text-gray-900 dark:text-white capitalize">{book.level}</p>
						</div>
						<div>
							<p class="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase">Pages</p>
							<p class="text-lg text-gray-900 dark:text-white">{book.pages}</p>
						</div>
						<div>
							<p class="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase">Published</p>
							<p class="text-lg text-gray-900 dark:text-white">{book.publishYear}</p>
						</div>
						<div>
							<p class="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase">ISBN</p>
							<p class="text-lg text-gray-900 dark:text-white font-mono">{book.isbn}</p>
						</div>
					</div>

					<!-- Related Books -->
					<div>
						<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							More from {book.author}
						</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Explore other books by this author in the library.
						</p>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div class="text-center">
				<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Book not found</h1>
				<p class="text-gray-600 dark:text-gray-400 mb-6">
					The book you're looking for doesn't exist.
				</p>
				<a
					href="/browse"
					class="inline-block px-6 py-3 bg-primary dark:bg-indigo-600 text-white rounded-lg font-bold hover:bg-primary/90 dark:hover:bg-indigo-700 transition"
				>
					Back to Browse
				</a>
			</div>
		</div>
	{/if}
</div>
