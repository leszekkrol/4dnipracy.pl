<template>
  <div class="w-full z-10 fixed pt-8">
    <div class="flex justify-between items-center p-4 bg-white mx-auto rounded-40 shadow-x-xsm lg:w-5/12">
      <div class="flex">
        <NuxtLink 
          to="/faq"
          title="FAQu"
          target="_self" 
          class="btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">FAQu</NuxtLink>
        <NuxtLink 
          to="/o-inicjatywie"
          title="FAQu"
          target="_self" 
          class="btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">O inicjatywie</NuxtLink>
        <NuxtLink 
          to="https://buycoffee.to/leszekkrol"
          title="FAQu"
          target="_self" 
          class="btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">Wesprzyj</NuxtLink>
      </div>
      <div class="flex">
        <NuxtLink 
          to="/dodaj-ogloszenie"
          title="FAQu"
          target="_self" 
          class="btn-yellow-bg btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">Dodaj ogłoszenie</NuxtLink>
      </div>
    </div>
  </div>
</template>