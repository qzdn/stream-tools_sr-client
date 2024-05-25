<script lang="ts">
  export let volume: number = 0.25;
</script>

<!-- <div class="flex w-5 bg-gray-300 cursor-pointer rounded rotate-180">
  <div
    class="w-full bg-orange-700 hover:bg-orange-800 active:bg-orange-900 rounded"
    style="height: {volume}%"
    on:click={() => {}}
  />
</div> -->

<input
  class="flex w-12"
  type="range"
  min="0"
  max="1"
  step="0.05"
  bind:value={volume}
/>

<!-- 
gray rgb(209 213 219);
700 - rgb(194 65 12);
800 - rgb(154 52 18);
900 - rgb(124 45 18);
 -->

<style lang="postcss">
</style>
