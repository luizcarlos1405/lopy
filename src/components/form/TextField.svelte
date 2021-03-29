<script>
  export let autofocus = false;
  export let value = '';
  export let textarea = false;

  let node;

  const focus = el => {
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
  <label class="h-full w-full">
    <textarea
      {...$$restProps}
      bind:value
      bind:this="{node}"
      use:focus
      on:keyup
      on:input></textarea>
  </label>
{:else}
  <label class="h-full w-full">
    <input
      {...$$restProps}
      size="1"
      type="text"
      bind:this="{node}"
      bind:value
      use:focus
      on:keyup
      on:input
    />
  </label>
{/if}
