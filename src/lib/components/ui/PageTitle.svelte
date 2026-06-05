<script lang="ts">

import '$lib/styles/components/page-title.css';

	interface Props {
		title: string;
		description?: string;
	}

	let {
		title,
		description = ''
	}: Props = $props();
</script>

<div class="page-title">
	<h1>{title}</h1>

	{#if description}
		<p>{description}</p>
	{/if}
</div>