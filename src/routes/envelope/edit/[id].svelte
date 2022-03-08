<script>
  import { page } from '$app/stores';
  import TextField from "../../../components/form/TextField.svelte";
  import EmojiPicker from "../../../components/form/EmojiPicker.svelte";
  import { goto } from "$app/navigation";
  import { envelopes, actions } from "$lib/stores";
  import Page from "../../../components/Page.svelte";
  import { ROUTES } from "$lib/constants";

  // This page creates a new envelope if id === 'new'
  const { id } = $page.params;

  const envelope = $envelopes.find((envelope) => id === envelope._id);


  let name = envelope?.name || "";
  let emoji = envelope?.emoji || undefined;
</script>

<Page hideBottomNavigation>
  <div class="flex flex-col space-y-2 mt-auto justify-end p-4">
    <div
      class="border-box flex p-4 rounded-full space-x-2 space-y-1 bg-base-100"
    >
      <div
        class="flex w-full items-center pl-2 border rounded-3xl space-x-2"
      >
        <EmojiPicker bind:value={emoji} />
        <TextField
          class="bg-transparent placeholder-opacity-70 resize-none border-0 border-l border-dotted border-background outline-none pl-2 text-dark text-3xl w-full"
          bind:value={name}
          placeholder="Name"
        />
      </div>
    </div>

    <div class="text-light flex justify-around">
      <button class="btn btn-ghost"
        on:click={() => {
          window.history.back();
        }}
      >
        Cancel
      </button>
      <button class="btn btn-ghost"
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
