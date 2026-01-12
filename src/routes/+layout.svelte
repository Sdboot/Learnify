<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';

	let isDark = false;

	theme.subscribe((value) => {
		isDark = value === 'dark';
	});

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
		if (savedTheme) {
			theme.set(savedTheme);
		}
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	let { children } = $props();
</script>

<Navigation />

{@render children()}
