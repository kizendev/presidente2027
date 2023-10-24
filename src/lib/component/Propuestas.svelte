<script lang="ts">
  import propuestas from "../data/propuestas";
  import PropuestaLi from "./PropuestaLi.svelte";

  interface Propuesta {
    title: string;
    description: string;
    date: string;
    enProgreso: boolean;
  }
  const propuestasList: Propuesta[] = propuestas;
</script>

<ul class=" space-y-4">
  {#each propuestasList as propuesta}
    {#if !propuesta.date}
      <PropuestaLi {propuesta} />
    {/if}
  {/each}
</ul>
