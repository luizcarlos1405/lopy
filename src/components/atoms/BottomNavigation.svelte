<script>
  import { HomeIcon, ListIcon, SettingsIcon } from 'svelte-feather-icons';
  import { ROUTES } from '$lib/constants';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
</script>

<div
  class="sticky bottom-0 flex justify-evenly rounded-t-3xl bg-base-100 py-1 md:top-0 md:flex-col md:overflow-clip md:rounded-b-3xl md:py-0"
>
  <button
    on:click={() => goto(`${ROUTES.HOME}`)}
    class="btn btn-ghost relative text-base-content md:justify-start md:gap-2 md:pl-4"
    class:currentButton={$page.url.pathname == ROUTES.HOME}
  >
    <HomeIcon size="30" />
    <span class="hidden md:inline">Home</span>
  </button>
  <button
    on:click={() => goto(`${ROUTES.TRANSACTIONS}`)}
    class="btn btn-ghost relative text-base-content md:justify-start md:gap-2 md:pl-4"
    class:currentButton={$page.url.pathname == ROUTES.TRANSACTIONS}
  >
    <ListIcon size="30" />
    <span class="hidden md:inline">Transactions</span>
  </button>
  <button
    on:click={() => goto(`${ROUTES.SETTINGS}`)}
    class="btn btn-ghost relative text-base-content md:justify-start md:gap-2 md:pl-4"
    class:currentButton={$page.url.pathname == ROUTES.SETTINGS}
  >
    <SettingsIcon size="30" />
    <span class="hidden md:inline">Settings</span>
  </button>
</div>

<style>
  .currentButton::after {
    content: '';
    @apply absolute bottom-1 h-1 w-7 rounded-full bg-accent text-accent;
  }
</style>
