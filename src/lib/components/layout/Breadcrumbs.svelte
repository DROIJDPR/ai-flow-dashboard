<script lang="ts">
    import '$lib/styles/layout/breadcrumbs.css';
	import { page } from '$app/state';

	let current = $derived(
		page.url.pathname
			.replace('/', '')
			|| 'dashboard'
	);
</script>

<div class="breadcrumbs">
	Dashboard

	{#if current !== 'dashboard'}
		<span>/</span>

		<span>{current}</span>
	{/if}
</div>