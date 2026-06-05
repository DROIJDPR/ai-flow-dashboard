<script lang="ts">
	import '$lib/styles/components/input.css';

	interface Props {
		label: string;
		type?: string;
		value?: string;
		id?: string;
	}

	let {
		label,
		type = 'text',
		value = $bindable(''),
		id = crypto.randomUUID()
	}: Props = $props();
</script>

<div class="input-group">
	<label for={id}>{label}</label>

	<input
		id={id}
		type={type}
		bind:value
	/>
</div>