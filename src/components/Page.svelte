<script>
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<span
  class="w-full h-full"
  in:scale="{{ y: -1000, duration: 600, start: 0.9, easing: quintOut }}"
>
  <slot />
</span>
