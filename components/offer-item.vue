<template>
  <div class="mt-1 shadow-xs rounded-16 shadow-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
    <div>
      <span class="text-yellow-800 text-sm">Engineering</span>
      <h3 class="font-bold mt-px">Senior Full Stack Backend Engineer</h3>
      <div class="flex items-center gap-3 mt-2">
         <span class="bg-yellow-100 text-grey-700 rounded-full px-3 py-1 text-sm">Full-time</span>
         <span class="text-slate-600 text-sm flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Remote, UK
         </span>
      </div>
    </div>
    <div>
      <button class="btn-yellow-bg btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4 rounded-md flex gap-1 items-center" data-splitbee-event="Aplikuj">
         Aplikuj
         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
         </svg>
      </button>
    </div>
  </div>

</template>

<script>
export default {
  props: ['item']
}
</script>