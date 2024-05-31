<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fetchData, requestsStore } from "../lib/requestsStore";
  import Player from "./Player.svelte";
  import Button from "./Button.svelte";
  import VolumeSlider from "./VolumeSlider.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import Icon from "@iconify/svelte";

  let videoId: string;
  let src: string;
  let currentTime: number = 0;
  let duration: number;
  let volume: number = 0.25;
  let isPaused: boolean;
  let isVisible: boolean = true;

  export async function getVideoInfo(videoId) {
    await fetch(`https://invidious.darkness.services/api/v1/videos/${videoId}`)
      .then((response) => response.json())
      .then((info) => {
        src = info.formatStreams[0].url;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  let userRequests;
  const unsubscribeRequests = requestsStore.subscribe((value) => {
    userRequests = value;
  });

  function videoSkip() {
    userRequests = {
      ...userRequests,
      requests: userRequests.requests.slice(1),
    };
    requestsStore.update((v) => userRequests);

    videoId = userRequests.requests[0].videoId;
    getVideoInfo(videoId);
  }

  function handlePlayerVisibility() {
    isVisible = !isVisible;
  }

  function handlePlayPause() {
    isPaused = !isPaused;
  }

  onMount(() => {
    fetchData()
      .then(() => {
        videoId = userRequests?.requests[0]?.videoId;
      })
      .then(() => {
        getVideoInfo(videoId);
      });
  });
  onDestroy(unsubscribeRequests);
</script>

<div id="section-player" class="flex gap-2 justify-between">
  <div class="min-w-fit">
    <Button on:click={handlePlayPause} additionalClasses="p-2.5">
      {#if !isPaused}<Icon icon="solar:pause-bold" height="12" />{:else}<Icon
          icon="solar:play-bold"
          height="12"
        />
      {/if}
    </Button>
    <Button on:click={videoSkip} additionalClasses="p-2.5"
      ><Icon icon="solar:skip-next-bold" height="12" /></Button
    >
    <Button on:click={handlePlayerVisibility} additionalClasses="p-2.5">
      {#if isVisible}<Icon icon="mdi:show" height="12" />{:else}<Icon
          icon="mdi:hide"
          height="12"
        />
      {/if}
    </Button>
  </div>
  <ProgressBar {currentTime} {duration} />

  <VolumeSlider bind:volume />
</div>

<div
  id="section-video"
  class="auto w-full aspect-video {!isVisible ? 'hidden' : ''}"
>
  <Player
    bind:src
    bind:volume
    bind:currentTime
    bind:duration
    bind:isPaused
    on:ended={videoSkip}
  />
</div>
