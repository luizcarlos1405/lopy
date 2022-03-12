<script>
  import { page } from '$app/stores';
  import EmojiPicker from '../../../components/form/EmojiPicker.svelte';
  import { goto } from '$app/navigation';
  import { envelopes, actions } from '$lib/stores';
  import { ROUTES } from '$lib/constants';

  // This page creates a new envelope if id === 'new'
  const { id } = $page.params;

  $: envelope = $envelopes.find(envelope => id === envelope._id);
  $: name = envelope?.name || '';
  $: emoji = envelope?.emoji || undefined;
</script>

<div class="layout-template-rows grid-layout min-h-full">
  <div
    class="col-start-2 col-end-12 row-start-2 self-end border-box flex space-x-2 overflow-visible rounded-3xl bg-base-100 p-4"
  >
    <div
      class="flex w-full items-center space-x-2 overflow-clip rounded-3xl border"
    >
      <span class="border-r border-base-content bg-base-300 p-2">
        <EmojiPicker bind:value={emoji} />
      </span>
      <input
        class="reset-input text-base"
        bind:value={name}
        placeholder="Name"
      />
    </div>
  </div>

  <div class="col-start-2 col-end-12 row-start-3 flex justify-around my-8">
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
        if (name) {
          $actions?.saveEnvelope({ ...envelope, name, emoji });
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
