<script>
  import { formatMoney, stripNonDigits } from "$lib/helpers";
  import { createEventDispatcher } from "svelte";
  import { PlusIcon, MinusIcon } from "svelte-feather-icons";

  export let inputRef = null;
  export let value = formatMoney(0);
  export let isNegative = false;

  const dispatch = createEventDispatcher();
  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      dispatch("enterPressed");
    }
  };
  const handleChange = () => {
    event.preventDefault();
    const newValue = +`${stripNonDigits(value)}`;

    value = isNegative ? -newValue : newValue;
    value = formatMoney(Math.abs(value), { showSign: false });
  };
</script>

<div
  class="flex items-center overflow-clip text-neutral-content w-full min-h-max bg-base-100 rounded-full"
>
  <div
    class="swap swap-rotate relative cursor-pointer p-1"
    class:minus={isNegative}
    class:plus={!isNegative}
    on:click={() => {
      isNegative = !isNegative;
      value = isNegative ? -Math.abs(value) : Math.abs(value);
      inputRef?.focus();
    }}
  >
    <MinusIcon class="swap-on" size="24" />
    <PlusIcon class="swap-off" size="24" />
  </div>
  <input
    class="input-xs reset-input font-mono flex-grow"
    on:change={handleChange}
    bind:value={value}
    autofocus
    inputmode="numeric"
    bind:this={inputRef}
    on:input={handleChange}
    on:keyup={handleKeyUp}
  />
</div>

<style>
  .minus {
    @apply bg-error text-error-content swap-active;
  }

  .plus {
    @apply bg-success text-success-content;
  }
</style>
