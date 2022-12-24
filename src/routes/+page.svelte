<script>
  import Envelope from '../components/atoms/Envelope.svelte';
  import BottomNavigation from '../components/atoms/BottomNavigation.svelte';
  import { envelopes, reorderEnvelopes } from '$lib/stores/envelopes';
  import { goto } from '$app/navigation';
  import { PlusIcon } from 'svelte-feather-icons';
  import Logo from '../components/atoms/Logo.svelte';
  import { ROUTES } from '$lib/constants';
  import { longpress } from '$lib/longpress';
  import { onMount } from 'svelte';
  import { orderableChildren } from '../lib/orderableChildren.js';
  import { moveArrayItem } from '$lib/helpers';
  import { theme } from '../lib/stores/themes';

  export const ssr = false;
  let isDragging = false;

  const handleEnvelopeClicked = envelope => {
    goto(`${ROUTES.ENVELOPE}/${envelope._id}`);
  };

  const handleOnDragStart = ({ itemNodeCopy, itemNode }) => {
    itemNodeCopy.style['box-shadow'] = '0px 4px 6px -2px rgba(0,0,0,0.8)';
    itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
    itemNode.style.opacity = '10%';
    document.getElementById("main").style['overflow-y'] = 'hidden';
  };

  const handleOnDragMove = ({ itemNodeCopy, fromIndex, toIndex }) => {
    isDragging = true;
    const newOrder = moveArrayItem($envelopes, fromIndex, toIndex);
    itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;

    reorderEnvelopes(newOrder);
  };

  const handleOnDragEnd = async ({ itemNode }) => {
    setTimeout(() => {
      isDragging = false;
    }, 0);
    itemNode.style.opacity = '100%';
    document.getElementById("main").style['overflow-y'] = 'scroll';
  };
</script>

<div class="layout-template-rows grid-layout min-h-full bg-transparent">
  <div
    class="font-base col-start-2 col-end-12 flex flex-nowrap items-center justify-around self-start py-14 text-neutral-content md:col-start-6"
  >
    <span
      class="w-14 cursor-pointer fill-current"
      on:click={() => {
        theme.next()
      }}
    >
      <Logo />
    </span>
    <span class="flex items-center space-x-2 whitespace-nowrap">
      <button
        class="btn glass btn-circle btn-sm"
        on:click={() => goto(`${ROUTES.EDIT}/new`)}
      >
        <PlusIcon strokeWidth="2.6" size="28" />
      </button>
      <span class="text-4xl font-normal">lopy</span>
    </span>
  </div>

  <div
    class="col-span-full col-start-2 col-end-12 flex w-full flex-col space-y-3 md:col-start-6"
    use:orderableChildren={{
      startEvent: 'longpress',
      onStart: handleOnDragStart,
      onMove: handleOnDragMove,
      onEnd: handleOnDragEnd,
    }}
  >
    {#each $envelopes as envelope (envelope._id)}
      <span class="cursor-unset outline-none" use:longpress>
        <Envelope
          {envelope}
          on:click={() => !isDragging && handleEnvelopeClicked(envelope)}
        />
      </span>
    {/each}
  </div>

  <div
    class="sticky bottom-0 col-span-full mt-8 md:col-span-3 md:col-start-2 md:row-start-1"
  >
    <BottomNavigation />
  </div>
</div>

<style>
  .layout-template-rows {
    grid-template-rows: min-content 1fr min-content;
  }
</style>
