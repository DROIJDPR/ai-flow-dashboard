<script lang="ts">
  import "$lib/styles/pages/dashboard.css";
  import AnalyticsCard from "$lib/components/dashboard/AnalyticsCard.svelte";
  import ActivityFeed from "$lib/components/dashboard/ActivityFeed.svelte";
  import StatsCard from "$lib/components/dashboard/StatsCard.svelte";
  import UserTable from "$lib/components/dashboard/UserTable.svelte";
</script>



<div class="stats-grid">
	<StatsCard title="Revenue" value="$128,430" />

	<StatsCard title="Users" value="8,420" />

	<StatsCard title="Agents" value="125" />

	<StatsCard title="Growth" value="+18%" />
</div>

<div class="dashboard-grid">
	<AnalyticsCard />

	<ActivityFeed />
</div>

<UserTable />
