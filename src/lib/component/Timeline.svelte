<script lang="ts">
  import propuestas from "../data/propuestas";

  interface Propuesta {
    title: string;
    description: string;
    date: string;
    link?: string;
    linkDesc?: string;
  }
  const propuestasList: Propuesta[] = propuestas;
</script>

<ol class="relative border-l border-gray-200 dark:border-gray-700">
  {#each propuestasList as propuesta}
    {#if propuesta.date}
      <li class="pb-8 pl-8">
        <!-- Completed mark icon -->
        <span
          class="absolute -left-3 h-6 w-6 rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-calendar-check dark:text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"
            />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
        </span>
        <!-- Title -->
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {propuesta.title}
        </h3>
        <!-- Timestamp -->
        <time
          class="block pb-2 text-sm leading-none text-gray-400 dark:text-gray-500"
          >Completado el {propuesta.date}</time
        >
        <!-- Description -->
        <p
          class={`${
            propuesta.link ? "pb-4" : ""
          } text-gray-500 dark:text-gray-400`}
        >
          {propuesta.description}
        </p>
        <!-- Link? -->
        {#if propuesta.link}
          <a
            href={propuesta.link}
            class="inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10
              focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-[rgb(22_29_44_/_var(--tw-bg-opacity))] dark:hover:text-white dark:focus:ring-gray-800"
            >{propuesta.linkDesc || "Ver"}<svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-external-link ml-3 h-4 w-4"
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
              <path
                d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
              ></path>
              <path d="M11 13l9 -9"></path>
              <path d="M15 4h5v5"></path>
            </svg></a
          >
        {/if}
      </li>
    {/if}
  {/each}
</ol>
