<button {...$$props} type="button" style="color: inherit" on:click>
  <slot />
</button>

<style>
  button {
    border: none;
    outline: none;
    background: unset;

    color: var(--color-text-dark);
    padding: 0.5em;

    font-size: 1em;
    text-transform: uppercase;
  }
</style>
