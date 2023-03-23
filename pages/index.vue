<script setup lang="ts">
const supabase = useSupabaseClient()
const { data } = await supabase
  .from('offers')
  .select('id, title')
  .order('created_at', { ascending: false })
</script>

<template>
  <div v-for="item in data"> 
    <OfferItem :item=item />
  </div>
</template>