<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	const activities = [
		'Agent Alpha completed 234 tasks',
		'New user registered',
		'Subscription upgraded',
		'Analytics report generated'
	];
</script>

<Card>
	<h2>Recent Activity</h2>

	<ul class="activity-list">
		{#each activities as activity}
			<li>{activity}</li>
		{/each}
	</ul>
</Card>

<style>
	.activity-list {
		margin-top: 1.5rem;

		display: flex;

		flex-direction: column;

		gap: 1rem;

		list-style: none;
	}
</style>