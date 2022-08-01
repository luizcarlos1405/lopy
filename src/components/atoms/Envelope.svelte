<script>
  import { formatMoney } from '$lib/helpers';
  import { goto } from '$app/navigation';
  import { Edit2Icon } from 'svelte-feather-icons';
  import { ROUTES } from '$lib/constants';

  export let envelope;

  $: ({ _id, emoji, name, value } = envelope);

  const handleEditClick = () => {
    goto(`${ROUTES.EDIT}/${_id}`);
  };
</script>

<div
  id={_id}
  class="border-box flex items-center overflow-visible rounded-3xl bg-base-100 p-2 text-base-content"
  on:click
>
  <div
    class="flex h-12 w-12 flex-shrink-0 items-center justify-center self-center rounded-2xl bg-base-200 bg-opacity-80 p-1 text-4xl"
  >
    {emoji || '✉️'}
  </div>
  <div class="mx-2 flex flex-col justify-center truncate font-semibold">
    <div class="truncate text-base">
      {name}
    </div>
    <div class="font-mono text-sm opacity-70">
      {formatMoney(value)}
    </div>
  </div>
    <!-- Checking if it comes from Notion then we do not edit it in the app -->
  {#if !envelope.url}
    <button
      on:click|stopPropagation={handleEditClick}
      class="btn btn-ghost btn-circle btn-sm ml-auto opacity-80"
    >
      <Edit2Icon size="16" />
    </button>
  {/if}
</div>
