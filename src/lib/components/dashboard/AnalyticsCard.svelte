<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
</script>

<Card>
	<h2>Performance Analytics</h2>

	<div class="fake-chart">
		<div class="bar" style="height:40%" ></div>
		<div class="bar" style="height:70%" ></div>
		<div class="bar" style="height:55%" ></div>
		<div class="bar" style="height:85%" ></div>
		<div class="bar" style="height:65%" ></div>
		<div class="bar" style="height:100%"></div>
	</div>
</Card>

<style>
	.fake-chart {
		height: 250px;

		display: flex;

		align-items: flex-end;

		gap: 1rem;

		margin-top: 2rem;
	}

	.bar {
		flex: 1;

		background: var(--accent);

		border-radius: 12px 12px 0 0;
	}
</style>