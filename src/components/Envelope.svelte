<script>
  import { formatMoney } from '../js/helpers';
  import { scale } from 'svelte/transition';

  export let _id;
  export let emoji = '💵';
  export let name = 'Envelope';
  export let value = 0;
  export let transactions = [];
</script>

<div
  id="{_id}"
  class="bg-primary border-box flex space-x-2 rounded-3xl bg-primary shadow p-2"
  on:click
>
  <div class="text-5xl">
    {emoji}
  </div>
  <div class="text-dark flex flex-col">
    <div class="text-2xl">
      {name}
    </div>
    <div class="font-mono text-base">
      {formatMoney(value)}
    </div>
  </div>
</div>
