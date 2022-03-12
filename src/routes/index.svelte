<script>
  import Envelope from "../components/atoms/Envelope.svelte";
  import { envelopes, actions } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { PlusIcon } from "svelte-feather-icons";
  import Page from "../components/Page.svelte";
  import Logo from "../components/atoms/Logo.svelte";
  import { ROUTES } from "$lib/constants";
  import { longpress } from "$lib/longpress";
  import { onMount } from "svelte";
  import { orderableChildren } from "../lib/orderableChildren.js";
  import { moveArrayItem } from "$lib/helpers";
  import { getContext } from "svelte";

  const themeStore = getContext("themeStore");
  let isDragging = false;

  const handleEnvelopeClicked = (envelope) => {
    goto(`${ROUTES.ENVELOPE}/${envelope._id}`);
  };

  const handleOnDragStart = ({ itemNodeCopy, itemNode }) => {
    itemNodeCopy.style["box-shadow"] = "0px 4px 6px -2px rgba(0,0,0,0.8)";
    itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
    itemNode.style.opacity = "10%";
    main.style["overflow-y"] = "hidden";
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
    itemNode.style.opacity = "100%";
    main.style["overflow-y"] = "scroll";
  };

  let main;

  onMount(() => {
    main = document.getElementsByTagName("main")[0];
  });
</script>

<Page>
  <div
    class="flex items-center text-neutral-content justify-around flex-nowrap font-base mx-4 py-14"
  >
    <span
      class="cursor-pointer w-14 fill-current"
      on:click={() => {
        const { currentTheme, themes } = $themeStore;
        const themeIndex = themes.findIndex(
          (themeName) => currentTheme === themeName
        );
        themeStore.set({
          themes,
          currentTheme: themes[themeIndex + 1] || themes[0],
        });
      }}
    >
      <Logo />
    </span>
    <span class="whitespace-nowrap flex space-x-2 items-center">
      <button
        class="btn btn-circle btn-sm glass"
        on:click={() => goto(`${ROUTES.EDIT}/new`)}
      >
        <PlusIcon strokeWidth="2.6" size="28" />
      </button>
      <span class="text-4xl font-normal">lopy</span>
    </span>
  </div>

  <div
    class="w-full flex flex-col space-y-3 mb-4 px-8"
    use:orderableChildren={{
      startEvent: "longpress",
      onStart: handleOnDragStart,
      onMove: handleOnDragMove,
      onEnd: handleOnDragEnd,
    }}
  >
    {#each $envelopes as envelope (envelope._id)}
      <span class="outline-none cursor-unset" use:longpress>
        <Envelope
          {envelope}
          on:click={() => !isDragging && handleEnvelopeClicked(envelope)}
        />
      </span>
    {/each}
  </div>
</Page>
