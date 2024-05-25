<script lang="ts">
  import Table from "./Table.svelte";
  import PlayerBlock from "./PlayerBlock.svelte";
</script>

<main id="main" class="container mx-auto">
  <div class="flex flex-wrap justify-between">
    <div id="section-player" class="w-full sm:w-1/2 px-4 pt-4">
      <PlayerBlock />
    </div>

    <div id="section-requests" class="w-full sm:w-1/2 p-4">
      <Table />
    </div>
  </div>
</main>
