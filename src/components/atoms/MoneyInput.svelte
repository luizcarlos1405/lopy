<script>
  import { formatMoney, stripNonDigits } from '$lib/helpers';
  import { createEventDispatcher } from 'svelte';
  import { PlusIcon, MinusIcon } from 'svelte-feather-icons';

  export let inputRef = null;
  export let value = 0;
  export let isNegative = false;

  const dispatch = createEventDispatcher();

  let inputValue = formatMoney(value);

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      dispatch('enterPressed');
    }
  };

  const handleChange = event => {
    event.preventDefault();
    const newValue = +`${stripNonDigits(inputValue)}`;

    value = isNegative ? -newValue : newValue;
    inputValue = formatMoney(Math.abs(value), { showSign: false });
  };

  const handleSelectionHange = event => {
    const valueLength = event.target.value.length;
    event.target.selectionEnd = valueLength;
    event.target.selectionStart = valueLength;
  };
</script>

<div
  class="flex min-h-max  w-full items-center overflow-clip rounded-full bg-base-200 text-neutral-content"
>
  <div
    class="swap swap-rotate relative cursor-pointer p-1"
    class:minus="{isNegative}"
    class:plus="{!isNegative}"
    on:click="{() => {
      isNegative = !isNegative;
      value = isNegative ? -Math.abs(value) : Math.abs(value);
      inputRef?.focus();
    }}"
  >
    <MinusIcon class="swap-on" size="24" />
    <PlusIcon class="swap-off" size="24" />
  </div>
  <input
    class="reset-input font-mono input-xs flex-grow text-base-content"
    on:change="{handleChange}"
    on:selectionchange="{handleSelectionHange}"
    bind:value="{inputValue}"
    autofocus
    inputmode="numeric"
    bind:this="{inputRef}"
    on:input="{handleChange}"
    on:keyup="{handleKeyUp}"
  />
</div>

<style>
  .minus {
    @apply swap-active bg-error text-error-content;
  }

  .plus {
    @apply bg-success text-success-content;
  }
</style>
