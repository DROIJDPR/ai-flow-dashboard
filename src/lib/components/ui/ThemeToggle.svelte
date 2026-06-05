<script lang="ts">
	import '$lib/styles/components/theme-toggle.css';

	import { theme } from '$lib/stores/theme.store';

	function toggleTheme() {
		theme.update((current) =>
			current === 'dark'
				? 'light'
				: 'dark'
		);
	}
</script>

<button
	class="theme-toggle"
	onclick={toggleTheme}
>
	Toggle Theme
</button>