<script>
  import TopBar from '../components/TopBar.svelte';
  import { PlusIcon } from 'svelte-feather-icons';
  import Envelope from '../components/Envelope.svelte';
  import { envelopes, actions } from '$lib/stores';
  import { goto } from '$app/navigation';
  import Page from '../components/Page.svelte';
  import { dndzone, TRIGGERS } from 'svelte-dnd-action';
  import { ROUTES } from '$lib/constants';
  import { longpress } from '$lib/longpress';
  import { onMount } from 'svelte';
  import logo from '../../static/logo-transparent.svg';

  const handleEnvelopeClicked = envelope => {
    goto(`${ROUTES.ENVELOPE}/${envelope._id}`);
  };
  const handleDnd = ({ detail }) => {
    $envelopes = detail.items;

    if (detail.info.trigger === TRIGGERS.DRAG_STARTED) {
      main.classList.add('overflow-hidden');
      main.classList.remove('overflow-y-scroll');
    }
    if (detail.info.trigger.includes('dropped')) {
      main.classList.add('overflow-y-scroll');
      main.classList.remove('overflow-hidden');
    }
    if (detail.info.trigger === TRIGGERS.DROPPED_INTO_ZONE) {
      $actions.reorderEnvelopes(detail.items);
    }
  };

  let main;

  onMount(() => {
    main = document.getElementsByTagName('main')[0];
  });
</script>

<Page>
  <TopBar>
    <img class="mr-1 h-5 w-5" src="{logo}" alt="Lopy" />
    Lopy
    <div
      on:click="{() => goto(`${ROUTES.EDIT}/new`)}"
      class="cursor-pointer ml-auto"
    >
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
    on:start="{() => console.log('starteeed')}"
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
