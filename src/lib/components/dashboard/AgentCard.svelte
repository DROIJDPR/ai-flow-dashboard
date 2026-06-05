<script lang="ts">
	import type { Agent } from '$lib/types/agent';
	import StatusBadge from '$lib/components/ui/StatusBadge.svelte';
	interface Props {
		agent: Agent;
	}

	let { agent }: Props = $props();
</script>

<div class="agent-card">
	<h3>{agent.name}</h3>

	<StatusBadge status={agent.status} />

	<p class="agent-tasks">
		{agent.tasks} tasks completed
	</p>
</div>