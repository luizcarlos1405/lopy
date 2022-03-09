<script>
  import { HomeIcon, ListIcon } from "svelte-feather-icons";
  import { scale } from "svelte/transition";
  import { ROUTES } from "$lib/constants";
  import { quintOut } from "svelte/easing";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let hideBottomNavigation = false;
</script>

<div class="flex p-4 flex-col align-stretch w-full min-h-screen max-w-lg mx-auto">
  <div
    class="relative max-w-md h-full flex-grow flex flex-col"
    in:scale={{ y: -1000, duration: 500, start: 0.95, easing: quintOut }}
  >
    <slot />
  </div>

  {#if !hideBottomNavigation}
    <div
      class="inline-flex justify-evenly sticky mx-4 bottom-6 p-2 bg-base-100 rounded-3xl"
    >
      <button
        on:click={() => goto(`${ROUTES.HOME}`)}
        class="btn btn-ghost text-base-content relative"
        class:currentButton={$page.url.pathname == ROUTES.HOME}
      >
        <HomeIcon size="30" />
      </button>
      <button
        on:click={() => goto(`${ROUTES.TRANSACTIONS}`)}
        class="btn btn-ghost text-base-content relative"
        class:currentButton={$page.url.pathname == ROUTES.TRANSACTIONS}
      >
        <ListIcon size="30" />
      </button>
    </div>
  {/if}
</div>

<style>
  .currentButton::after {
    content: "";
    @apply text-accent bg-accent w-7 h-1 absolute bottom-0 rounded-full;
  }
</style>
