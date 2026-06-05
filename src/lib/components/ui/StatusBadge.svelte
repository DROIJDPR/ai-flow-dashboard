<script lang="ts">
	import '$lib/styles/components/status-badge.css';
	
	interface Props {
		status: string;
	}

	let { status }: Props = $props();

	let normalized = $derived(
	status.toLowerCase()
);
</script>

<span
	class={`status-badge status-${normalized}`}
>
	{status}
</span>