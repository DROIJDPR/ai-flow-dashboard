<script lang="ts">
	import '$lib/styles/pages/analytics.css';

	import PageTitle from '$lib/components/ui/PageTitle.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<PageTitle
	title="Analytics"
	description="Platform performance overview."
/>

<div class="analytics-grid">
	<Card>
		<h2>Total Revenue</h2>
		<h1>$128,430</h1>
	</Card>

	<Card>
		<h2>Growth</h2>
		<h1>+18%</h1>
	</Card>

	<Card>
		<h2>Active Agents</h2>
		<h1>125</h1>
	</Card>

	<Card>
		<h2>Users</h2>
		<h1>8,420</h1>
	</Card>
</div>