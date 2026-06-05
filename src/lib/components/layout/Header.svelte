<script lang="ts">
  import "$lib/styles/layout/header.css";
  import { page } from "$app/state";
  import ThemeToggle from "$lib/components/ui/ThemeToggle.svelte";
  import SearchInput from "$lib/components/ui/SearchInput.svelte";
  import NotificationButton from "$lib/components/ui/NotificationButton.svelte";
  import { sidebarOpen } from "$lib/stores/sidebar.store";
  import Breadcrumbs from "$lib/components/layout/Breadcrumbs.svelte";
  import { derived } from "svelte/store";
  import ProfileDropdown from "$lib/components/layout/ProfileDropdown.svelte";

  let title = $derived(
    page.url.pathname.replace("/", "").replace("-", " ") || "dashboard",
  );

  function toggleSidebar() {
    sidebarOpen.update((value) => !value);
  }
</script>

<header class="header">
  <div class="header-left">
    <button class="menu-toggle" onclick={toggleSidebar}> ☰ </button>

    <div>
      <h1>{title}</h1>

      <Breadcrumbs />
    </div>
  </div>

  <div class="header-actions">
    <ThemeToggle />

    <SearchInput />

    <NotificationButton />

    <div class="header-profile">
      <ProfileDropdown />

      <div class="profile-info">
        <p>Juan</p>

        <small>Administrator</small>
      </div>
    </div>
  </div>
</header>
