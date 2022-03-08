<script>
  export let autofocus = false;
  export let value = "";
  export let textarea = false;

  export let inputRef = null;

  const focus = (el) => {
    if (autofocus) {
      // You gotta put it in a timeout so it runs in an idle time and works...
      let timer = setTimeout(() => {
        el.focus();

        return () => clearTimeout(timer);
      }, 0);
    }
  };
</script>

{#if textarea}
  <label class="h-full w-full block">
    <textarea
      {...$$restProps}
      bind:value
      bind:this={inputRef}
      use:focus
      on:keyup
      on:input
    />
  </label>
{:else}
  <label class="h-full w-full block">
    <input
      {...$$restProps}
      size="1"
      type="text"
      bind:this={inputRef}
      bind:value
      use:focus
      on:keyup
      on:input
    />
  </label>
{/if}
