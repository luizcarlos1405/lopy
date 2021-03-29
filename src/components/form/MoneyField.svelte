<script>
  import { formatMoney, stripNonDigits } from '../../js/helpers';
  import { createEventDispatcher } from 'svelte';
  import { PlusIcon, MinusIcon } from 'svelte-feather-icons';
  import TextField from './TextField.svelte';

  export let value = 0;
  export let isNegative = false;

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
  class="flex space-x-2 items-center h-8 pl-2 text-dark w-full border border-dark rounded-2xl overflow-hidden"
>
  <div
    on:click="{() => {
      isNegative = !isNegative;
      value = isNegative ? -Math.abs(value) : Math.abs(value);
    }}"
  >
    {#if isNegative}
      <MinusIcon size="24" />
    {:else}
      <PlusIcon size="24" />
    {/if}
  </div>
  <TextField
    class="w-full pl-2 h-full bg-background border-none outline-none ring-0 text-light font-mono"
    on:keyup="{onKeyUp}"
    value="{formatMoney(Math.abs(value))}"
    on:input="{handleChange}"
    inputmode="numeric"
    autofocus
  />
</div>
