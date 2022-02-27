<script>
  import TopBar from '../components/TopBar.svelte';
  import { PlusIcon } from 'svelte-feather-icons';
  import Envelope from '../components/Envelope.svelte';
  import { envelopes, actions } from '$lib/stores';
  import { goto } from '$app/navigation';
  import Page from '../components/Page.svelte';
  import { ROUTES } from '$lib/constants';
  import { longpress } from '$lib/longpress';
  import { onMount } from 'svelte';
  import logo from '../../static/logo-transparent.svg';
  import { orderableChildren } from '../lib/orderableChildren.js';
  import { moveArrayItem } from '$lib/helpers';

  let isDragging = false;

  const handleEnvelopeClicked = envelope => {
    goto(`${ROUTES.ENVELOPE}/${envelope._id}`);
  };

  const handleOnDragStart = ({ itemNodeCopy, itemNode }) => {
    itemNodeCopy.style['box-shadow'] = '0px 4px 6px -2px rgba(0,0,0,0.8)';
    itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
    itemNode.style.opacity = '10%';
    main.style['overflow-y'] = 'hidden';
  };

  const handleOnDragMove = ({ itemNodeCopy, fromIndex, toIndex }) => {
    isDragging = true;
    const newOrder = moveArrayItem($envelopes, fromIndex, toIndex);
    itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;

    $actions.reorderEnvelopes(newOrder);
  };

  const handleOnDragEnd = async ({ itemNode }) => {
    setTimeout(() => {
      isDragging = false;
    }, 0);
    itemNode.style.opacity = '100%';
    main.style['overflow-y'] = 'scroll';
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
    use:orderableChildren="{{
      startEvent: 'longpress',
      onStart: handleOnDragStart,
      onMove: handleOnDragMove,
      onEnd: handleOnDragEnd,
    }}"
  >
    {#each $envelopes as envelope (envelope._id)}
      <span class="outline-none cursor-unset" use:longpress>
        <Envelope
          envelope="{envelope}"
          on:click="{() => !isDragging && handleEnvelopeClicked(envelope)}"
        />
      </span>
    {/each}
  </div>
</Page>
