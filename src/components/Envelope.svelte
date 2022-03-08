<script>
  import { formatMoney } from "$lib/helpers";

  export let envelope;

  let { _id, emoji, name, value } = envelope;
</script>

<div
  id={_id}
  class="card overflow-visible flex-row bg-base-100 pl-5 border-box space-x-4 rounded-full p-2"
  on:click
>
  <div class="text-3xl self-center rounded-full">
    {emoji}
  </div>
  <div class="text-dark flex flex-col">
    <div class="text-2xl truncate">
      {name}
    </div>
    <div class="font-mono text-base text-content opacity-75">
      {formatMoney(value)}
    </div>
  </div>
</div>
