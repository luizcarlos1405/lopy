<script>
  import { formatMoney } from "$lib/helpers";
  import { goto } from "$app/navigation";
  import { Edit2Icon } from "svelte-feather-icons";
  import { ROUTES } from "$lib/constants";

  export let envelope;

  $: ({ _id, emoji, name, value } = envelope);

  const handleEditClick = () => {
    goto(`${ROUTES.EDIT}/${_id}`);
  }
</script>

<div
  id={_id}
  class="flex overflow-visible bg-base-100 text-base-content items-center p-2 border-box rounded-3xl"
  on:click
>
  <div
    class="flex items-center justify-center text-2xl flex-shrink-0 self-center bg-base-200 rounded-2xl p-1 h-12 w-12 bg-opacity-80"
  >
    {emoji}
  </div>
  <div class="font-semibold flex flex-col truncate justify-center mx-2">
    <div class="text-base truncate">
      {name}
    </div>
    <div class="font-mono text-sm opacity-70">
      {formatMoney(value)}
    </div>
  </div>
  <button
    on:click|stopPropagation={handleEditClick}
    class="ml-auto btn btn-sm btn-ghost btn-circle"
  >
    <Edit2Icon size="16" />
  </button>
</div>
