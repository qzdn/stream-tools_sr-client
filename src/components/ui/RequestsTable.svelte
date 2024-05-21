<script lang="ts">
  import { requestsStore, fetchData } from "../../lib/stores.ts";

  fetchData();
  setInterval(fetchData, 60 * 1000);

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

<table>
  <thead>
    <tr>
      <th scope="col">requester</th>
      <th scope="col">title</th>
      <th scope="col">length</th>
    </tr>
  </thead>
  {#if data && data.requests && data.requests.length > 0}
    <tbody>
      {#each data.requests as request}
        <tr>
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
  {/if}
</table>

<style>
  table {
    overflow-x: auto;
    text-align: center;
    width: 640px;
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
