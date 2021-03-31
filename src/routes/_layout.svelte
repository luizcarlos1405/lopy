<script>
  import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';

  overrideItemIdKeyNameBeforeInitialisingDndZones('_id');
</script>

<svelte:head>
  <link
    href="http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
    rel="stylesheet"
    type="text/css"
  />

  <title>Lopy</title>
</svelte:head>

<main
  class="border-box w-screen h-screen overflow-x-hidden overflow-y-scroll text-light bg-background"
>
  <slot />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    line-height: 1em;
  }
</style>
