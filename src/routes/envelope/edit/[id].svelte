<script>
  import { page } from '$app/stores';
  import EmojiPicker from "../../../components/form/EmojiPicker.svelte";
  import { goto } from "$app/navigation";
  import { envelopes, actions } from "$lib/stores";
  import Page from "../../../components/Page.svelte";
  import { ROUTES } from "$lib/constants";

  // This page creates a new envelope if id === 'new'
  const { id } = $page.params;

  $: envelope = $envelopes.find((envelope) => id === envelope._id);
  $: name = envelope?.name || "";
  $: emoji = envelope?.emoji || undefined;
</script>

<Page hideBottomNavigation>
  <div class="flex flex-col space-y-8 mt-auto justify-end p-4">
    <div
      class="flex overflow-visible bg-base-100 p-4 border-box space-x-2 rounded-3xl"
    >
      <div
        class="flex w-full items-center overflow-clip border rounded-3xl space-x-2"
      >
        <span class="bg-base-300 border-base-content border-r p-2">
          <EmojiPicker bind:value={emoji} />
        </span>
        <input
          class="text-base reset-input"
          bind:value={name}
          placeholder="Name"
        />
      </div>
    </div>

    <div class="flex justify-around">
      <button class="btn btn-outline"
        on:click={() => {
          window.history.back();
        }}
      >
        Cancel
      </button>
      <button class="btn btn-primary"
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
</Page>
