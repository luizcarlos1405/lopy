<script>
  import { HomeIcon, ListIcon } from 'svelte-feather-icons';
  import { ROUTES } from '$lib/constants';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
</script>

<div
  class="sticky bottom-0 flex justify-evenly rounded-t-3xl bg-base-100"
>
  <button
    on:click="{() => goto(`${ROUTES.HOME}`)}"
    class="btn btn-ghost relative text-base-content"
    class:currentButton="{$page.url.pathname == ROUTES.HOME}"
  >
    <HomeIcon size="30" />
  </button>
  <button
    on:click="{() => goto(`${ROUTES.TRANSACTIONS}`)}"
    class="btn btn-ghost relative text-base-content"
    class:currentButton="{$page.url.pathname == ROUTES.TRANSACTIONS}"
  >
    <ListIcon size="30" />
  </button>
</div>

<style>
  .currentButton::after {
    content: "";
    @apply text-accent bg-accent w-7 h-1 absolute bottom-1 rounded-full;
  }
</style>
