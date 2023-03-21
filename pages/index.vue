<script setup lang="ts">
const supabase = useSupabaseClient()
const { data } = await supabase.from('offers').select('id')
</script>

<template>
  <div v-for="item in data">
    <OfferItem />
  </div>
</template>