<script>
  import TopBar from '../components/TopBar.svelte';
  import { PlusIcon } from 'svelte-feather-icons';
  import Envelope from '../components/Envelope.svelte';
  import { envelopes, actions } from '../js/stores';
  import { goto } from '@sapper/app';
  import Page from '../components/Page.svelte';
  import { dndzone, TRIGGERS } from 'svelte-dnd-action';
  import { ROUTES } from '../js/constants';
  import { longpress } from '../js/longpress';

  const handleEnvelopeClicked = envelope => {
    goto(`${ROUTES.ENVELOPE}/${envelope._id}`);
  };
  const handleDnd = ({ detail }) => {
    $envelopes = detail.items;

    if (detail.info.trigger === TRIGGERS.DROPPED_INTO_ZONE) {
      $actions.reorderEnvelopes(detail.items);
    }
  };
</script>

<Page>
  <TopBar>
    LOPY
    <div on:click="{() => goto(`${ROUTES.EDIT}/new`)}" class="cursor-pointer">
      <PlusIcon size="20" />
    </div>
  </TopBar>

  <div
    class="w-full p-4 flex flex-col space-y-3"
    use:dndzone="{{
      items: $envelopes,
      flipDurationMs: 200,
      dropTargetStyle: { opacity: '50%' },
      customStartEvent: 'longpress',
    }}"
    on:consider="{handleDnd}"
    on:finalize="{handleDnd}"
  >
    {#each $envelopes as envelope (envelope._id)}
      <span class="outline-none cursor-unset" use:longpress>
        <Envelope
          envelope="{envelope}"
          on:click="{() => handleEnvelopeClicked(envelope)}"
        />
      </span>
    {/each}
  </div>
</Page>
