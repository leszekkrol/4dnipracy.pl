<template>
  <div class="w-full z-10 fixed pt-8">
    <div class="flex justify-between items-center p-4 bg-white mx-auto rounded-40 shadow-x-xsm max-w-screen-xl">
      <div class="flex items-center">
        <NuxtLink 
          to="/faq"
          title="4dnipracy.pl - Twój portal pracy zdalnej"
          target="_self" 
          data-splitbee-event="Homepage" 
          class="relative flex items-center inline-block px-8">
            <img src="~/assets/logo.svg" alt="4dnipracy.pl - Twój portal pracy zdalnej" style="width: 120px">
        </NuxtLink>
        <NuxtLink 
          to="/faq"
          title="FAQu"
          target="_self" 
          data-splitbee-event="FAQ" 
          class="btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">FAQu</NuxtLink>
        <NuxtLink 
          to="/o-inicjatywie"
          title="O inicjatywie"
          target="_self" 
          data-splitbee-event="O inicjatywie" 
          class="btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">O inicjatywie</NuxtLink>
      </div>
      <div class="flex">
        <NuxtLink 
          to="/wesprzyj"
          title="Wesprzyj"
          target="_self" 
          data-splitbee-event="Wesprzyj" 
          class="btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">Wesprzyj</NuxtLink>
        <NuxtLink 
          to="/dodaj-ogloszenie"
          title="Dodaj ogłoszenie"
          target="_self" 
          data-splitbee-event="Dodaj ogłoszenie" 
          class="btn-yellow-bg btn-hover-bg relative flex items-center font-bold inline-block px-8 py-4">Dodaj ogłoszenie</NuxtLink>
      </div>
    </div>
  </div>
</template>