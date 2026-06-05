<script lang="ts">
	import '$lib/styles/pages/agents.css';

	import PageTitle from '$lib/components/ui/PageTitle.svelte';
	import AgentCard from '$lib/components/dashboard/AgentCard.svelte';

	import { agents } from '$lib/mock/agents';
</script>

<PageTitle
	title="Agents"
	description="Manage and monitor AI agents."
/>

<div class="agents-grid">
	{#each agents as agent}
		<AgentCard {agent} />
	{/each}
</div>