<script lang="ts">
  import "$lib/styles/components/user-table.css";
  import StatusBadge from "$lib/components/ui/StatusBadge.svelte";
  import Card from "$lib/components/ui/Card.svelte";

  import { users } from "$lib/mock/users";

  let search = $state("");

  let filteredUsers = $derived(
    users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    ),
  );
</script>

<Card>
  <h2>Users</h2>

  <input
    class="search-input"
    type="text"
    placeholder="Search users..."
    bind:value={search}
  />

  <div class="user-table-wrapper">
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {#each filteredUsers as user}
          <tr>
            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>
              <span class="role-badge">
                {user.role}
              </span>
            </td>
            <td>
              <StatusBadge status={user.status} />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</Card>
