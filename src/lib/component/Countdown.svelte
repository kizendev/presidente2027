<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import CountdownNumber from "./CountdownNumber.svelte";

  export let start: any = null;

  const dispatch = createEventDispatcher();

  // using luxon
  import { DateTime } from "luxon";

  let diff = start.diff(DateTime.now(), [
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
  ]);

  let values = diff.toObject();

  let countdown = diff.as("seconds");

  let timer: any = null;

  onMount(() => {
    timer = setInterval(() => {
      countdown -= 1;
      if (countdown < 0) {
        countdown = 0;
      }
    }, 1000);
  });

  afterUpdate(() => {
    diff = start.diff(DateTime.now(), [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ]);

    values = diff.toObject();

    countdown = diff.as("seconds");
  });

  onDestroy(() => {
    if (timer !== null) {
      clearInterval(timer);
    }
  });

  $: {
    if (countdown === 0) {
      clearInterval(timer);
      dispatch("completed");
    }
  }
</script>

<div class="flex justify-center gap-4 overflow-y-hidden">
  <!-- Years -->
  <CountdownNumber what={values.years} text=" años" />

  <!-- Months -->
  <CountdownNumber what={values.months} text=" meses" />

  <!-- Days -->
  <CountdownNumber what={values.days} text=" días" />

  <!-- Hours -->
  <span>
    <CountdownNumber what={Math.floor(values.hours / 10)} />
    <CountdownNumber what={Math.floor(values.hours % 10)} text=" horas" />
  </span>

  <!-- Minutes -->
  <span>
    <CountdownNumber what={Math.floor(values.minutes / 10)} />
    <CountdownNumber what={Math.floor(values.minutes % 10)} text=" minutos" />
  </span>

  <!-- Seconds -->
  <span>
    <CountdownNumber what={Math.floor(values.seconds / 10)} />
    <CountdownNumber what={Math.floor(values.seconds % 10)} text=" segundos" />
  </span>
</div>
