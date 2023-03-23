<script setup lang="ts">
const supabase = useSupabaseClient()
const { data } = await supabase
  .from('offers')
  .select('id')
  .order('created_at', { ascending: false })
</script>

<template>
  <div v-for="item in data"> 
    {{ item.id }}
    <OfferItem />
  </div>
</template>