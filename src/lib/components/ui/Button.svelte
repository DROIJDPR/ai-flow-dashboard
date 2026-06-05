<script lang="ts">
	import '$lib/styles/components/button.css';

	interface Props {
		text: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
	}

	let {
		text,
		type = 'button',
		disabled = false
	}: Props = $props();
</script>

<button
	class="btn"
	{type}
	{disabled}
>
	{text}
</button>