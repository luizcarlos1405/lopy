<script>
  import { formatMoney, stripNonDigits } from '$lib/helpers';
  import { createEventDispatcher } from 'svelte';
  import { PlusIcon, MinusIcon } from 'svelte-feather-icons';
  import TextField from './TextField.svelte';
  import { scale } from 'svelte/transition';
  import { expoOut, expoIn } from 'svelte/easing';

  export let inputRef;
  export let value = 0;
  export let isNegative = false;

  const transitionDuration = 200;
  const dispatch = createEventDispatcher();
  const onKeyUp = ({ key }) => {
    if (key === 'Enter') {
      dispatch('enterPressed');
    }
  };
  const handleChange = event => {
    event.preventDefault();
    const newValue = +`${stripNonDigits(event.target.value)}`;

    value = isNegative ? -newValue : newValue;
    event.target.value = formatMoney(Math.abs(value), { showSign: false });
  };
</script>

<div
  class="flex space-x-2 items-stretch h-8 pl-2 text-dark w-full border border-dark rounded-2xl"
>
  <div
    class="relative cursor-pointer w-6 flex items-center"
    on:click="{() => {
      isNegative = !isNegative;
      value = isNegative ? -Math.abs(value) : Math.abs(value);
      inputRef.focus();
    }}"
  >
    {#if isNegative}
      <span class="absolute" transition:scale|local>
        <MinusIcon size="24" />
      </span>
    {:else}
      <span class="absolute" transition:scale|local>
        <PlusIcon size="24" />
      </span>
    {/if}
  </div>
  <TextField
    class="w-full pl-2 py-2 h-full bg-background border-none rounded-r-full outline-none ring-0 text-light font-mono"
    value="{formatMoney(Math.abs(value))}"
    inputmode="numeric"
    autofocus
    bind:inputRef
    on:input="{handleChange}"
    on:keyup="{onKeyUp}"
  />
</div>
