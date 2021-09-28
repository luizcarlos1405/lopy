<script>
  import { formatMoney } from '$lib/helpers';

  export let envelope;

  let { _id, emoji, name, value } = envelope;
</script>

<div
  id="{_id}"
  class="bg-primary border-box flex space-x-2 rounded-3xl bg-primary shadow p-2"
  on:click
>
  <div class="text-5xl">
    {emoji}
  </div>
  <div class="text-dark flex flex-col overflow-hidden">
    <div class="text-2xl truncate">
      {name}
    </div>
    <div class="font-mono text-base">
      {formatMoney(value)}
    </div>
  </div>
</div>
