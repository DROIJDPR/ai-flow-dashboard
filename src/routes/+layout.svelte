<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';
	import { initializeTheme } from '$lib/utils/theme';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme.store';

	let { children } = $props();

	initializeTheme();

	$effect(() => {
		if (!browser) return;

		const unsubscribe = theme.subscribe((value) => {
			document.documentElement.setAttribute(
				'data-theme',
				value
			);

			localStorage.setItem(
				'theme',
				value
			);
		});

		return unsubscribe;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}