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

<main class="flex flex-col overflow-hidden">
  <slot />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    position: absolute;

    height: 100%;
    width: 100%;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    color: var(--color-text-light);
    line-height: 1em;
    background-color: var(--color-main);

    /* Include margin and padding to calculate the size */
    box-sizing: border-box;
  }
</style>
