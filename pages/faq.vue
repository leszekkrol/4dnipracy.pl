<template>
  <section class="px-4 mx-auto max-w-7xl md:px-2">
    <h1 class="mb-12 text-xl font-bold text-left md:text-3xl md:text-center">Najczęściej zadawane pytania</h1>
    <div class="flex items-start justify-start mb-12" v-for="item in faqList">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-none w-6 h-6 mr-4 text-gray-700" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <div>
        <p class="mt-0 mb-3 font-semibold text-gray-900">{{ item.title }}</p>
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useDataStore } from '~/store/data'
export default defineComponent({
  setup() {
    const dataStore = useDataStore()
    const faqList = dataStore.faqList
    return { faqList }
  },
})
</script>
