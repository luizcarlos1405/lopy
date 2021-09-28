<script context="module">
  export const load = async ({ page }) => {
    return { props: page.params };
  };
</script>

<script>
  import TextField from '../../../components/form/TextField.svelte';
  import EmojiPicker from '../../../components/form/EmojiPicker.svelte';
  import Button from '../../../components/Button.svelte';
  import { goto } from '$app/navigation';
  import { envelopes, actions } from '$lib/stores';
  import TopBar from '../../../components/TopBar.svelte';
  import { TrashIcon } from 'svelte-feather-icons';
  import Page from '../../../components/Page.svelte';
  import { ROUTES } from '$lib/constants';

  // This page creates a new envelope if id === 'new'
  export let id;

  const envelope = $envelopes.find(envelope => id === envelope._id);

  let name = envelope?.name || '';
  let emoji = envelope?.emoji || undefined;
</script>

<Page>
  <TopBar>
    LOPY

    {#if envelope}
      <div
        class="cursor-pointer ml-auto"
        on:click="{() => {
          $actions.deleteEnvelope(envelope);
          goto(ROUTES.HOME);
        }}"
      >
        <TrashIcon size="20" />
      </div>
    {/if}
  </TopBar>

  <div class="flex flex-col space-y-2 mt-auto justify-end p-4">
    <div
      class="bg-primary border-box flex p-4 rounded-full space-x-2 space-y-1 "
    >
      <div
        class="flex w-full items-center pl-2 border rounded-3xl space-x-2 border-background"
      >
        <EmojiPicker bind:value="{emoji}" />
        <TextField
          class="bg-transparent placeholder-dark placeholder-opacity-70 resize-none border-0 border-l border-dotted border-background outline-none pl-2 text-dark text-3xl w-full"
          bind:value="{name}"
          placeholder="Name"
        />
      </div>
    </div>

    <div class="text-light flex justify-around">
      <Button
        on:click="{() => {
          if (id !== 'new') {
            goto(`${ROUTES.ENVELOPE}/${id}`);
            return;
          }
          goto(ROUTES.HOME);
        }}"
      >
        Cancel
      </Button>
      <Button
        on:click="{() => {
          if (name) {
            $actions.saveEnvelope({ ...envelope, name, emoji });
            goto(ROUTES.HOME);
          }
        }}"
      >
        Save
      </Button>
    </div>
  </div>
</Page>
