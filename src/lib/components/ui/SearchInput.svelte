<script lang="ts">
	import '$lib/styles/components/search-input.css';

	interface Props {
		placeholder?: string;
	}

	let {
		placeholder = 'Search...'
	}: Props = $props();
</script>

<input
	class="search-input"
	type="text"
	{placeholder}
/>