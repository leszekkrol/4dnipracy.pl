<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <h2 class="mt-20 mb-6 text-4xl text-center font-extrabold leading-80 tracking-normal text-gray-900 md:text-6xl md:tracking-tight"> Dlaczego powinniśmy pracować w 4-dniowym tygodniu pracy?</h2>

    <div class="grid gap-16 md:grid-cols-2">
      <div class="p-4 xs:p-6 md:p-8 bg-gray-100 border border-transparent shadow-md rounded-3xl" v-for="item, index in aboutList">
        <h2 class="mb-2 text-3xl md:text-4xl font-bold tracking-tight text-accent">{{ index + 1 }}.</h2>
        <p class="mb-5 font-light text-justify leading-1">
          {{ item.description }}
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import { useDataStore } from '~/store/data'
export default defineComponent({
  setup() {
    const dataStore = useDataStore()
    const aboutList = dataStore.aboutList
    return { aboutList }
  },
})
</script>
