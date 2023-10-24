<script lang="ts">
  import Header from "./lib/component/Header.svelte";
  import HeroImage from "./lib/component/HeroImage.svelte";
  import TheDivider from "./lib/layout/TheDivider.svelte";
</script>

<div class="mx-auto max-w-[1416px] px-4">
  <Header />
  <HeroImage />
  <TheDivider />

  <footer>
    <small class="flex flex-col items-center justify-center py-8">
      <span class="text-sm text-gray-400 dark:text-gray-500"
        >© 2023 Kevin Zanzi.</span
      >
      <span class="text-sm text-gray-400 dark:text-gray-500">
        <a href="." class="hover:underline"> Enviar Propuesta </a>
        ·
        <a href="." class="hover:underline"> Boleta Oficial </a>
      </span>
      <span class="text-center text-sm text-gray-400 dark:text-gray-500">
        Todas las propuestas fueron generadas por inteligencia artificial y no
        deben ser tomadas en serio.
      </span>
    </small>
  </footer>
</div>
