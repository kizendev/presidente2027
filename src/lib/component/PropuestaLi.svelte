<script lang="ts">
  export let propuesta: any;

  let isOpen: boolean = false;

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<li class="relative rounded-md bg-gray-200 dark:bg-gray-700">
  <button
    class="flex w-full items-center justify-between rounded-md px-4 py-2 text-left font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600"
    on:click={toggle}
  >
    <h2 class="dark:text-gray-200">
      {propuesta.title}
    </h2>
    <span class="flex items-center">
      {#if propuesta.enProgreso}<span
          class="dark:text-gray mr-2 text-xs text-gray-500 dark:text-gray-400"
          >En progreso</span
        >{/if}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right transition-all duration-500 ease-in-out dark:text-gray-200"
        style="transform: rotate({isOpen ? '90deg' : '0deg'})"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 6l6 6l-6 6"></path>
      </svg>
    </span>
  </button>
  <div
    class=" overflow-y-hidden transition-all duration-700 ease-in-out"
    style="max-height: {isOpen ? '1000px' : '0px'}"
  >
    <p class="px-4 py-2 dark:text-gray-300">{propuesta.description}</p>
  </div>
</li>
