<script>
  import TopBar from "../components/TopBar.svelte";
  import { HomeIcon, ListIcon, PlusIcon } from "svelte-feather-icons";
  import { scale } from "svelte/transition";
  import { ROUTES } from "$lib/constants";
  import { quintOut } from "svelte/easing";
  import { goto } from "$app/navigation";
  import logo from "../../static/logo-transparent.svg";

  export let hideBottomNavigation = false;
</script>

<div class="flex flex-col align-stretch flex-grow h-full w-full">
  <TopBar>
    <img class="mr-1 h-5 w-5" src={logo} alt="Lopy" />
    Lopy
    <div
      on:click={() => goto(`${ROUTES.EDIT}/new`)}
      class="cursor-pointer ml-auto"
    >
      <PlusIcon size="20" />
    </div>
  </TopBar>

  <div
    class="relative max-w-md h-full flex-grow flex flex-col"
    in:scale={{ y: -1000, duration: 800, start: 0.95, easing: quintOut }}
  >
    <slot />
  </div>

  {#if !hideBottomNavigation}
    <div
      class="inline-flex justify-evenly sticky mx-4 bottom-4 p-2 bg-base-100 rounded-3xl"
    >
      <button
        on:click={() => goto(`${ROUTES.HOME}`)}
        class="btn btn-ghost text-base-content"
      >
        <HomeIcon size="30" />
      </button>
      <button
        on:click={() => goto(`${ROUTES.TRANSACTIONS}`)}
        class="btn btn-ghost text-base-content"
      >
        <ListIcon size="30" />
      </button>
    </div>
  {/if}
</div>
