<script>
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<div
  class="relative max-w-md min-h-full flex-grow mx-auto flex flex-col"
  in:scale="{{ y: -1000, duration: 800, start: 0.95, easing: quintOut }}"
>
  <slot />
</div>
