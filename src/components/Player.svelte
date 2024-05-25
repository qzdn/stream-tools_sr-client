<script lang="ts">
  export let video: HTMLVideoElement;
  export let src: string;
  export let currentTime: number = 0;
  export let duration: number;
  export let volume: number = 0.25;
  export let isPaused: boolean = true;

  $: {
    if (video) {
      video.src = src;
    }
  }
</script>

<video
  class="mt-3 w-full bg-black aspect-video"
  id="player"
  bind:this={video}
  bind:volume
  bind:currentTime
  bind:duration
  bind:paused={isPaused}
  on:ended
  on:play
  on:pause
  on:progress
  autoplay
  controlsList="nodownload nofullscreen"
>
  <track kind="captions" />
</video>
