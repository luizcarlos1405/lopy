<script>
  import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';

  export let segment;

  console.log('segment', segment);

  overrideItemIdKeyNameBeforeInitialisingDndZones('_id');
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
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
