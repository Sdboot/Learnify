<script lang="ts">
	import { dummyBooks, categories } from '$lib/data/books';
	import BookCard from '$lib/components/BookCard.svelte';
	import { Sparkles, BookOpen, Heart, Zap } from 'lucide-svelte';
	import { onMount } from 'svelte';

	const featuredBooks = dummyBooks.slice(0, 6);

	const colors = ['#fbbf24', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f97316', '#ef4444'];
	let currentColorIndex = 0;
	let sparkleColor = colors[0];

	onMount(() => {
		const interval = setInterval(() => {
			currentColorIndex = (currentColorIndex + 1) % colors.length;
			sparkleColor = colors[currentColorIndex];
		}, 500);

		return () => clearInterval(interval);
	});
</script>

<style>
	.hero-section {
		background-image: url('/child-2.jpg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-blend-mode: overlay;
		image-rendering: high-quality;
		image-rendering: -webkit-optimize-contrast;
		background-clip: border-box;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
	}
</style>

<div class="min-h-screen bg-white dark:bg-gray-900">
	<!-- Hero Section -->
	<section class="hero-section relative text-white py-20 sm:py-16 md:py-24 lg:py-32 overflow-hidden min-h-screen">		<!-- Content -->
		<div class="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
			<div class="flex justify-center mb-3 sm:mb-4 animate-bounce">
				<Sparkles size={32} class="sm:w-12 sm:h-12" style="color: {sparkleColor};" />
			</div>
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight pt-16 sm:pt-10 md:pt-12">
				Welcome to <span class="bg-white text-transparent bg-clip-text">Learnify</span>
			</h1>
			<p class="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-100 max-w-2xl mx-auto px-2 leading-relaxed pt-8 sm:pt-5 md:pt-6">
				Discover a magical world of books for kids. Explore, search, and find your next favorite adventure!
			</p>
			<div class="flex gap-2 sm:gap-4 justify-center flex-row px-2">
				<a
					href="/browse"
					class="px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 text-sm sm:text-base"
				>
					Start Exploring
				</a>
				<a
					href="/favorites"
					class="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition text-sm sm:text-base"
				>
					My Favorites
				</a>
			</div>
		</div>
	</section>

	<!-- Reading Benefits Section -->
	<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
		<div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
			<div class="text-center mb-8 sm:mb-12 md:mb-16">
				<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white leading-tight">
					The Joy of Reading Awaits
				</h2>
				<p class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
					Discover why reading is the greatest adventure for young minds
				</p>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
				<div class="bg-white dark:bg-gray-700 p-5 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
					<div class="text-4xl sm:text-5xl mb-3 sm:mb-4 text-indigo-600">📖</div>
					<h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Expand Your Imagination</h3>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
						Travel to magical worlds, meet unforgettable characters, and let your mind soar beyond the ordinary.
					</p>
				</div>

				<div class="bg-white dark:bg-gray-700 p-5 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
					<div class="text-4xl sm:text-5xl mb-3 sm:mb-4 text-purple-600">🧠</div>
					<h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Boost Your Learning</h3>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
						Develop critical thinking, enhance vocabulary, and gain knowledge across countless subjects and topics.
					</p>
				</div>

				<div class="bg-white dark:bg-gray-700 p-5 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
					<div class="text-4xl sm:text-5xl mb-3 sm:mb-4 text-pink-600">🌍</div>
					<h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Discover New Worlds</h3>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
						Experience different cultures, perspectives, and adventures that expand your view of the world.
					</p>
				</div>

				<div class="bg-white dark:bg-gray-700 p-5 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
					<div class="text-4xl sm:text-5xl mb-3 sm:mb-4 text-blue-600">🎓</div>
					<h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Develop Your Skills</h3>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
						Build confidence, improve focus, and cultivate a lifelong love of learning through reading.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Books Section -->
	<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
		<div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
			<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
				<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Books</h2>
				<a href="/browse" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-sm sm:text-base">
					View All →
				</a>
			</div>

			<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
				{#each featuredBooks as book}
					<BookCard {book} />
				{/each}
			</div>
		</div>
    </section>

	<!-- Categories Section -->
	<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
		<div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
				Browse by Category
			</h2>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
				{#each categories as category}
					{@const categoryImage = category === 'Adventure' ? '/adventure.jpg' : category === 'Fantasy' ? '/fantasy.jpg' : category === 'Science' ? '/science.jpg' : category === 'Mystery' ? '/mystery.jpg' : category === 'History' ? '/history.jpg' : category === 'Technology' ? '/technology.jpg' : '/adventure.jpg'}
					<a
						href="/browse?category={category}"
						class="group relative overflow-hidden rounded-lg h-32 flex items-center justify-center text-white font-bold text-center p-4 hover:shadow-lg transition transform hover:scale-105"
						style="background-image: url('{categoryImage}'); background-size: cover; background-position: center;"
					>
						<span class="relative z-10 drop-shadow-lg">{category}</span>
						<div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white">
		<div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Ready to Start Your Journey?</h2>
			<p class="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-100 px-2 max-w-2xl mx-auto">
				Join thousands of kids discovering their favorite books on Learnify today!
			</p>
			<a
				href="/browse"
				class="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 text-sm sm:text-base"
			>
				Explore Books Now
			</a>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 text-gray-300 py-12 sm:py-16 md:py-20">
		<div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-8">
				<!-- About -->
				<div>
					<h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">About Learnify</h3>
					<p class="text-sm sm:text-base leading-relaxed text-gray-400">
						Learnify is a magical library designed to inspire young readers and foster a love of books.
					</p>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h3>
					<ul class="space-y-2 sm:space-y-3">
						<li><a href="/" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Home</a></li>
						<li><a href="/browse" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Browse Books</a></li>
						<li><a href="/favorites" class="text-sm sm:text-base text-gray-400 hover:text-white transition">My Favorites</a></li>
					</ul>
				</div>

				<!-- Support -->
				<div>
					<h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Support</h3>
					<ul class="space-y-2 sm:space-y-3">
						<li><a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Help Center</a></li>
						<li><a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Contact Us</a></li>
						<li><a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition">FAQ</a></li>
					</ul>
				</div>

				<!-- Connect -->
				<div>
					<h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Connect</h3>
					<ul class="space-y-2 sm:space-y-3">
						<li><a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Twitter</a></li>
						<li><a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Facebook</a></li>
						<li><a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition">Instagram</a></li>
					</ul>
				</div>
			</div>

			<!-- Divider -->
			<div class="border-t border-gray-700 my-6 sm:my-8"></div>

			<!-- Bottom Footer -->
			<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
				<p class="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
					&copy; 2026 Learnify. All rights reserved.
				</p>
				<div class="flex gap-4 sm:gap-6">
					<a href="#" class="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition">Privacy Policy</a>
					<a href="#" class="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition">Terms of Service</a>
				</div>
			</div>
		</div>
	</footer>
</div>

