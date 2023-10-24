<script lang="ts">
  import Propuestas from "../component/Propuestas.svelte";
  import Timeline from "../component/Timeline.svelte";
</script>

<main
  class="mdlg:flex-row mdlg:items-start mdlg:gap-4 flex flex-col items-center gap-16 pt-4"
>
  <section class="mdlg:w-1/2 w-full">
    <Propuestas />
  </section>
  <section class="mdlg:w-1/2 w-full pl-[16px]">
    <Timeline />
  </section>
</main>
