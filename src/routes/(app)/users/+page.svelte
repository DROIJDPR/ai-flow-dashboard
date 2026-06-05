<script lang="ts">
	import PageTitle from '$lib/components/ui/PageTitle.svelte';
	import UserTable from '$lib/components/dashboard/UserTable.svelte';
</script>

<PageTitle
	title="Users"
	description="Manage platform users."
/>

<UserTable />