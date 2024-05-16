<script lang="ts">
  import { requestsStore } from "../lib/stores";

  let requests: string | any[];
  requestsStore.subscribe((value) => {
    requests = value;
  });

  function skipRequest() {
    if (requests.length > 0) requestsStore.update((v) => v.slice(1));
  }

  function timeFormatter(videoLength: number) {
    const minutes = Math.floor(videoLength / 60);
    const seconds = videoLength % 60;

    // Pad minutes and seconds with leading zeros if necessary
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }
</script>

{#if requests && requests.length > 0}
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">requester</th>
        <th scope="col">title</th>
        <th scope="col">length</th>
      </tr>
    </thead>
    <tbody>
      {#each requests as request}
        <tr>
          <td>{request.id}</td>
          <td>{request.requester}</td>
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
{/if}

<button on:click={skipRequest}>Skip</button>

<style>
  table {
    overflow-x: auto;
    text-align: center;
  }

  th {
    background-color: #ccc;
  }

  td a {
    white-space: word-wrap;
  }

  tr:hover {
    background-color: #eee;
  }
</style>
