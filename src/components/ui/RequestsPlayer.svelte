<script lang="ts">
  import { requestsStore } from "../../lib/stores.ts";
  import { onDestroy, onMount } from "svelte";
  import LoadingIcon from "./LoadingIcon.svelte";

  // Player stuff
  export let videoPlayer: HTMLVideoElement = null; // Reference to the video element
  export let isVideoPlaying: boolean = true;
  export let videoVolume: number = 0.25; // Set initial volume to 50%

  // Load data from the store
  let userRequests;
  onMount(() =>
    requestsStore.subscribe((value) => {
      userRequests = value;
    }),
  );

  export function videoPlayPause() {
    isVideoPlaying = !isVideoPlaying;

    if (videoPlayer && videoPlayer.current) {
      // Check if videoRef is available before calling play/pause
      if (isVideoPlaying) {
        videoPlayer.current.pause();
      } else {
        videoPlayer.current.play();
      }
    }
  }

  export function videoSkip() {
    if (
      userRequests &&
      userRequests.requests &&
      userRequests.requests.length > 0
    ) {
      userRequests = {
        ...userRequests,
        requests: userRequests.requests.slice(1),
      };
      requestsStore.update((v) => userRequests);
    }
  }

  export function videoVolumeControl(event) {
    if (videoPlayer && videoPlayer.current) {
      videoVolume = event.target.value / 100;
      videoPlayer.current.volume = videoVolume;
      event.target.value = videoVolume * 100; // Update slider value to match actual volume
    }
  }

  export function toggleVideoPlayerVisibility() {
    // Implement logic to hide/show the video player element using CSS
    // For example:
    const playerElement = document.getElementById("player");
    playerElement.style.display =
      playerElement.style.display === "none" ? "block" : "none";
  }

  // Unsubscribe from the store when the component is destroyed
  onDestroy(() => {
    userRequests = null;
  });
</script>

<div class="custom-controls">
  <button on:click={videoPlayPause}>{isVideoPlaying ? "Play" : "Pause"}</button>
  <button on:click={videoSkip}>Skip</button>
  <button on:click={toggleVideoPlayerVisibility}>Hide player</button>
  <input
    type="range"
    min="0"
    max="1"
    step="0.005"
    bind:value={videoVolume}
    on:input={videoVolumeControl}
  />
</div>

{#if userRequests && userRequests.requests && userRequests.requests.length > 0}
  <div class="video-container">
    <video
      bind:this={videoPlayer}
      bind:volume={videoVolume}
      bind:paused={isVideoPlaying}
      id="player"
      src={userRequests.requests[0].url}
      preload="auto"
      autoplay
      controlsList="nodownload nofullscreen"
      on:ended={videoSkip}
    >
      <track kind="captions" />
    </video>
  </div>
{:else}
  <LoadingIcon />
  <p>Awaiting song requests...</p>
{/if}

<style>
  .custom-controls {
    margin-bottom: 16px;
  }

  button {
    background-color: #103055;
    color: white;
    margin: 5px;
  }

  #player {
    width: 640px;
    max-width: 99vw;
    aspect-ratio: 16 / 9;
  }
</style>
