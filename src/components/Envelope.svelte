<script>
  import { formatMoney } from "$lib/helpers";

  export let envelope;

  let { _id, emoji, name, value } = envelope;
</script>

<div
  id={_id}
  class="card overflow-visible flex-row bg-base-100 p-4 border-box space-x-2 rounded-3xl"
  on:click
>
  <div class="text-3xl self-center">
    {emoji}
  </div>
  <div class="text-dark font-semibold flex flex-col truncate">
    <div class="text-base truncate">
      {name}
    </div>
    <div class="font-mono text-sm text-content opacity-70">
      {formatMoney(value)}
    </div>
  </div>
</div>
