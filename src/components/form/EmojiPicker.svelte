<script>
  import * as dataByEmoji from 'unicode-emoji-json';
  import { clickOutside } from '../../js/clickOutside';

  export const close = () => {
    open = false;
  };
  export let value = '✉️';

  const emojisData = Object.entries(dataByEmoji.default)
    .filter(([, { emoji_version }]) => +emoji_version <= 12)
    .map(([emoji, { group }]) => ({ emoji, group }));

  let open = false;
  let currentGroup = 'Smileys & Emotion';
</script>

<div
  class="relative cursor-pointer text-2xl overflow-x-visible text-center cursor-pointer"
>
  {#if open}
    <div
      class="absolute bottom-full left-0 h-60 w-max "
      use:clickOutside
      on:clickedOutside="{close}"
    >
      <div class="absolute left-full top-0 bg-white text-black text-base">
        {currentGroup}
      </div>

      <div
        class="z-30 grid grid-cols-5 gap-2 p-2 w-full h-full rounded bg-white overflow-y-scroll shadow-lg"
      >
        {#each emojisData as { emoji, group }}
          {#if currentGroup === group}
            <div
              on:click="{() => {
                value = emoji;
                close();
              }}"
            >
              {emoji}
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}

  <div
    on:click="{() => {
      open = !open;
    }}"
  >
    {value}
  </div>
</div>
