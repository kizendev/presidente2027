<script lang="ts">
  export let what: number;
  export let text: string = "";
</script>

<div class="inline-block h-fit">
  <span class="text-4xl"
    >{what}{#if text}<small class=" text-sm">{text}</small>{/if}</span
  >
</div>
