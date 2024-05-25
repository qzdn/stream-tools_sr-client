<script lang="ts">
  export let currentTime: number = 0; // Stores the current progress (percentage)
  export let duration: number;
</script>

<!-- <div class="flex w-2/3 h-8 bg-gray-300 rounded min-w-fit">
  <div
    class="w-full h-8 bg-orange-700 hover:bg-orange-800 active:bg-orange-900 rounded"
    style="width: {currentTime}%"
  ></div>
</div> -->

<progress
  class="flex w-2/3 h-8 rounded min-w-fit"
  value={currentTime}
  max={duration}
>
</progress>

<!-- 
gray rgb(209 213 219);
700 - rgb(194 65 12);
800 - rgb(154 52 18);
900 - rgb(124 45 18);
 -->

<style lang="postcss">
  /* background */
  progress {
    background-color: rgb(209 213 219);
    border-radius: 0.25rem;
  }
  progress::-webkit-progress-bar {
    background-color: rgb(209 213 219);
    border-radius: 0.25rem;
  }

  progress::-webkit-progress-value {
    background-color: rgb(194 65 12);
    border-radius: 0.25rem;
  }
  progress::-webkit-progress-value:hover {
    background-color: rgb(154 52 18);
    border-radius: 0.25rem;
  }
  progress::-webkit-progress-value:active {
    background-color: rgb(124 45 18);
    border-radius: 0.25rem;
  }

  progress::-moz-progress-bar {
    background-color: rgb(194 65 12);
    border-radius: 0.25rem;
  }
  progress::-moz-progress-bar:hover {
    background-color: rgb(154 52 18);
    border-radius: 0.25rem;
  }
  progress::-moz-progress-bar:active {
    background-color: rgb(124 45 18);
    border-radius: 0.25rem;
  }
</style>
