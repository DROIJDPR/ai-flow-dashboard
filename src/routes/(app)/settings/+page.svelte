<script lang="ts">
	import '$lib/styles/pages/settings.css';

	import PageTitle from '$lib/components/ui/PageTitle.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<PageTitle
	title="Settings"
	description="Configure your workspace."
/>

<div class="settings-grid">
	<Card>
		<h2>Appearance</h2>

		<p>
			Customize your dashboard theme.
		</p>
	</Card>

	<Card>
		<h2>Notifications</h2>

		<p>
			Manage notification preferences.
		</p>
	</Card>

	<Card>
		<h2>Security</h2>

		<p>
			Update account security settings.
		</p>
	</Card>

	<Card>
		<h2>Profile</h2>

		<p>
			Manage your profile information.
		</p>
	</Card>
</div>