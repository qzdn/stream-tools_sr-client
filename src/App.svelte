<script lang="ts">
  import Header from "./components/ui/Header.svelte";
  import RequestsPlayer from "./components/ui/RequestsPlayer.svelte";
  import RequestsTable from "./components/ui/RequestsTable.svelte";
</script>

<div class="container">
  <Header />
  <main>
    <RequestsPlayer />
    <RequestsTable />
  </main>
</div>
