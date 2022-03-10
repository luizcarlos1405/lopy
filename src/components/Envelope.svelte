<script>
  import { formatMoney } from "$lib/helpers";

  export let envelope;

  let { _id, emoji, name, value } = envelope;
</script>

<div
  id={_id}
  class="flex overflow-visible bg-base-100 text-base-content p-2 border-box space-x-2 rounded-3xl"
  on:click
>
  <div class="flex items-center justify-center text-2xl flex-shrink-0 self-center bg-base-200 rounded-2xl p-1 h-12 w-12 bg-opacity-80">
    {emoji}
  </div>
  <div class="font-semibold flex flex-col truncate justify-center">
    <div class="text-base truncate">
      {name}
    </div>
    <div class="font-mono text-sm opacity-70">
      {formatMoney(value)}
    </div>
  </div>
</div>
