<script lang="ts">
	import '$lib/styles/components/card.css';

	interface Props {
		title: string;
		value: string;
	}

	let { title, value }: Props = $props();
</script>

<div class="card">
	<h3>{title}</h3>

	<p class="stat-value">
		{value}
	</p>
</div>