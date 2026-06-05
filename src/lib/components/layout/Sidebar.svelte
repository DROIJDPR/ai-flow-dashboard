<script lang="ts">
  import "$lib/styles/layout/sidebar.css";
  import { page } from "$app/state";
  import { sidebarOpen } from "$lib/stores/sidebar.store";
  import {
    LayoutDashboard,
    Bot,
    BarChart3,
    Users,
    Settings,
  } from "lucide-svelte";

  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Agents",
      href: "/agents",
      icon: Bot,
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: BarChart3,
    },
    {
      label: "Users",
      href: "/users",
      icon: Users,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];
</script>

{#if $sidebarOpen}
	<button
		class="sidebar-overlay"
		aria-label="Close sidebar"
		onclick={() => sidebarOpen.set(false)}
	></button>
{/if}

<aside class="sidebar" class:open={$sidebarOpen}>
  <div class="sidebar-logo">
    <div class="logo-circle">AI</div>

    <h2>AIFlow</h2>
  </div>

  <nav>
    {#each menuItems as item}
      <a
        href={item.href}
        class:active={page.url.pathname === item.href}
        class="menu-item"
        onclick={() => sidebarOpen.set(false)}
      >
        <item.icon size={18} />

        <span>{item.label}</span>
      </a>
    {/each}
  </nav>
</aside>
