<script lang="ts">
	import '$lib/styles/layout/profile-dropdown.css';

	let open = $state(false);

	function toggle() {
		open = !open;
	}
</script>

<div class="profile-dropdown">
	<button
		class="profile-trigger"
		onclick={toggle}
	>
		JP
	</button>

	{#if open}
		<div class="dropdown-menu">
			<a href="/settings">
				Settings
			</a>

			<button>
				Logout
			</button>
		</div>
	{/if}
</div>