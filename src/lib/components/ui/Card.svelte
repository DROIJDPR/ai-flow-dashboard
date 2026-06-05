<script lang="ts">
	import '$lib/styles/components/card.css';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="card">
	{@render children()}
</div>