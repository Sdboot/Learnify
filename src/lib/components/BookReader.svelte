<script lang="ts">
	import { Download, X } from 'lucide-svelte';

	export let book: { title: string; author: string; description: string };
	let isOpen = false;

	const openReader = () => {
		isOpen = true;
	};

	const closeReader = () => {
		isOpen = false;
	};

	const downloadBook = () => {
		// Create a simple text file download
		const content = `
${book.title}
By ${book.author}

${book.description}

---

This is a sample reader. In a production environment, this would display actual PDF, ePub, or other book formats.

[Book content would be displayed here in the online reader]

Chapter 1: Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit...

[More book content...]
		`;

		const element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
		element.setAttribute('download', `${book.title.replace(/\s+/g, '-')}.txt`);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};
</script>

<div class="flex gap-2 w-full">
	<button
		on:click={openReader}
		class="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition text-xs sm:text-sm"
	>
		📖 Read
	</button>

	<button
		on:click={downloadBook}
		class="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-1"
	>
		<Download size={16} />
		<span class="hidden sm:inline">Download</span>
	</button>

	<!-- Online Reader Modal -->
	{#if isOpen}
		<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
			<div class="bg-white dark:bg-gray-900 rounded-lg w-full max-w-4xl max-h-96 flex flex-col overflow-hidden">
				<!-- Header -->
				<div class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
					<div>
						<h2 class="text-2xl font-bold text-gray-900 dark:text-white">{book.title}</h2>
						<p class="text-gray-600 dark:text-gray-400">by {book.author}</p>
					</div>
					<button
						on:click={closeReader}
						class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
					>
						<X size={24} class="text-gray-600 dark:text-gray-400" />
					</button>
				</div>

				<!-- Content Area -->
				<div class="flex-1 overflow-y-auto p-6">
					<div class="prose prose-sm dark:prose-invert max-w-none">
						<h3>About this book</h3>
						<p>{book.description}</p>

						<h3>Sample Content</h3>
						<p>
							This is a preview of the online reader. In a production environment, this would display:
						</p>
						<ul>
							<li>Full book content (PDF, ePub, or other formats)</li>
							<li>Pagination and navigation controls</li>
							<li>Bookmarks and highlights functionality</li>
							<li>Text-to-speech features</li>
							<li>Search within the book</li>
							<li>Adjustable font size and theme</li>
						</ul>

						<p class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
							<strong>Note:</strong> This is a demonstration interface. To implement a full book reader, you would integrate libraries like PDF.js (for PDFs), EPUB.js (for ePub files), or
							other document viewers.
						</p>
					</div>
				</div>

				<!-- Footer -->
				<div class="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-4">
					<button
						on:click={closeReader}
						class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
					>
						Close
					</button>
					<button
						on:click={downloadBook}
						class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
					>
						<Download size={18} />
						Download
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>
