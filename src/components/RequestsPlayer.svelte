<script lang="ts">
  import { requestsStore } from "../lib/stores";
  import LoadingIcon from "./LoadingIcon.svelte";
</script>

{#if $requestsStore && $requestsStore.length > 0}
  <video src={$requestsStore[0].url} width="684" controls autoplay>
    <track kind="captions" />
  </video>
{:else}
  <LoadingIcon />
  <p>Awaiting song requests...</p>
{/if}

<style>
  video {
    margin-bottom: 0;
  }

  p {
    display: flex;
    justify-content: center;
  }
</style>
