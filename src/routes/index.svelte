<script>
  import TopBar from '../components/TopBar.svelte';
  import { PlusIcon } from 'svelte-feather-icons';
  import Envelope from '../components/Envelope.svelte';
  import { envelopes, actions } from '../js/stores';
  import { goto } from '@sapper/app';
  import Page from '../components/Page.svelte';
  import { dndzone } from 'svelte-dnd-action';

  const handleEnvelopeClicked = envelope => {
    goto(`/envelope/${envelope._id}`);
  };
  const handleDnd = ({ detail }) => {
    $envelopes = detail.items;

    if (detail.info.trigger === 'droppedIntoZone') {
      $actions.reorderEnvelopes(detail.items);
    }
  };
</script>

<Page>
  <TopBar>
    LOPY
    <div on:click="{() => goto('envelope/edit/new')}" class="cursor-pointer">
      <PlusIcon size="20" />
    </div>
  </TopBar>

  <div
    class="w-full p-4 flex flex-col space-y-3"
    use:dndzone="{{
      items: $envelopes,
      flipDurationMs: 200,
      dropTargetStyle: { opacity: '50%' },
    }}"
    on:consider="{handleDnd}"
    on:finalize="{handleDnd}"
  >
    {#each $envelopes as envelope (envelope._id)}
      <span class="outline-none cursor-unset">
        <Envelope
          {...envelope}
          on:click="{() => handleEnvelopeClicked(envelope)}"
        />
      </span>
    {/each}
  </div>
</Page>
