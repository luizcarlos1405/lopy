<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
</svelte:head>

<h1 class="text-accent">{$page.error.message}</h1>


<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
