<script>
  export let states = [];
  export let current = null;
</script>

<div class="flex rounded border border-dark ">
  {#each states as state, index}
    {#if current === state}
      <div
        class="px-3 py-2 border-dark bg-dark text-light {index && 'border-l'}"
        on:click={() => {
          current = state;
        }}
      >
        {state}
      </div>
    {:else}
      <div
        class="px-3 py-2 border-dark bg-transparent text-dark {index &&
          'border-l'}"
        on:click={() => {
          current = state;
        }}
      >
        {state}
      </div>
    {/if}
  {/each}
</div>
