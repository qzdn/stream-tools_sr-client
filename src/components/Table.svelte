<script lang="ts">
  import { requestsStore, fetchData } from "../lib/requestsStore";
  import LoadingIcon from "./LoadingIcon.svelte";

  fetchData();
  setInterval(fetchData, 180 * 1000);

  let data;
  requestsStore.subscribe((value) => {
    data = value;
  });

  function timeFormatter(videoLength: number) {
    const minutes = Math.floor(videoLength / 60);
    const seconds = videoLength % 60;

    // Pad minutes and seconds with leading zeros if necessary
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }
</script>

{#if data && data.requests && data.requests.length > 0}
  <table class="text-sm w-full text-left dark:text-white text-gray-400">
    <thead
      class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
    >
      <tr>
        <th scope="col" class="px-6 py-4">requester</th>
        <th scope="col" class="py-4">title</th>
        <th scope="col" class="py-4">length</th>
      </tr>
    </thead>
    <tbody>
      {#each data.requests as request}
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td
            class="px-7 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >{request.requester}</td
          >
          <td
            ><a href="https://www.youtube.com/watch?v={request.videoId}"
              >{request.title}</a
            ></td
          >
          <td>{timeFormatter(request.length)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <p class="text-center">No requests found</p>
{/if}
