<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';


	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="dashboard-layout">
	<Sidebar />

	<div class="dashboard-content">
		<Header />

		<main class="dashboard-main">
			{@render children()}
		</main>

		<Footer />
	</div>
</div>