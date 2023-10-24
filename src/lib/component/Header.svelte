<script lang="ts">
  import { DateTime } from "luxon";

  const start = DateTime.local(2026, 10, 18, 0, 0, 0, 0);

  import { fly } from "svelte/transition";
  import Countdown from "./Countdown.svelte";
  let done: boolean = false;
</script>

<header class="h-28 py-4">
  {#if done}
    <h1 in:fly class="text-center text-4xl font-bold dark:text-gray-100">
      Kevin Zanzi
    </h1>
  {:else}
    <span class="text-center text-base dark:text-gray-100"
      ><Countdown {start} on:completed={() => (done = true)} /></span
    >
  {/if}
  <h2
    class="dark:text-grey-500 pt-2 text-center text-2xl font-semibold text-gray-300"
  >
    Presidente 2027
  </h2>
</header>
