<script lang="ts">
  import Header from "./components/Header.svelte";
  import RequestsPlayer from "./components/RequestsPlayer.svelte";
  import RequestsTable from "./components/RequestsTable.svelte";

</script>

<div class="container">
  <Header />
  <RequestsPlayer />
  <RequestsTable />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
