<script lang="ts">
	import '$lib/styles/layout/profile-dropdown.css';

	let open = $state(false);

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}
</script>

<div class="profile-dropdown">
	<button
		class="profile-trigger"
		aria-label="Open profile menu"
		onclick={toggle}
	>
		JP
	</button>

	{#if open}
		<button
			class="dropdown-overlay"
			aria-label="Close profile menu"
			onclick={close}
		></button>

		<div class="dropdown-menu">
			<a
				href="/settings"
				onclick={close}
			>
				Settings
			</a>

			<button onclick={close}>
				Logout
			</button>
		</div>
	{/if}
</div>