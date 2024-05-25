<script lang="ts">
  export let additionalClasses: string = "";
</script>

<button
  type="button"
  class="
  text-white font-bold
  bg-orange-700
  hover:bg-orange-800
  active:bg-orange-900
  rounded {additionalClasses}"
  on:click
  on:load
>
  <slot />
</button>
