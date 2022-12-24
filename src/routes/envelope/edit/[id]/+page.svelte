<script>
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import EmojiPicker from '../../../../components/form/EmojiPicker.svelte';
  import { goto } from '$app/navigation';
  import { envelopes, deleteEnvelope, saveEnvelope } from '$lib/stores/envelopes';
  import { ROUTES } from '$lib/constants';
  import { Trash2Icon } from 'svelte-feather-icons';

  // This page creates a new envelope if id === 'new'
  const { id } = $page.params;

  let envelope = {
    emoji: '✉️',
    name: '',
  };

  $: {
    if (browser && id !== 'new') {
      envelope = $envelopes.find(({ _id }) => _id === id) || envelope;
    }
  }

  const handleDeleteClicked = () => {
    deleteEnvelope({ _id: id });
    window.history.back();
  };
</script>

<div class="layout-template-rows grid-layout min-h-full">
  <div class="p-8">
    <button class="text-neutral-content" on:click={handleDeleteClicked}>
      <Trash2Icon size="24" />
    </button>
  </div>
  <div
    class="border-box col-start-2 col-end-12 row-start-2 flex space-x-2 self-end overflow-visible rounded-3xl bg-base-100 p-4"
  >
    <div
      class="flex w-full items-center space-x-2 rounded-3xl border bg-base-200"
    >
      <span class="rounded-l-3xl border-r border-base-content bg-base-300 p-2">
        <EmojiPicker bind:value={envelope.emoji} />
      </span>
      <input
        class="reset-input text-base"
        bind:value={envelope.name}
        placeholder="Name"
      />
    </div>
  </div>

  <div class="col-start-2 col-end-12 row-start-3 my-8 flex justify-around">
    <button
      class="btn"
      on:click={() => {
        window.history.back();
      }}
    >
      Cancel
    </button>
    <button
      class="btn btn-primary"
      on:click={() => {
        if (envelope.name) {
          saveEnvelope({ ...envelope });
          goto(ROUTES.HOME);
        }
      }}
    >
      Save
    </button>
  </div>
</div>

<style>
  .layout-template-rows {
    grid-template-rows: 1fr min-content min-content;
  }
</style>
