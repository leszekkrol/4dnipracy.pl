<template>
  <div class="mt-5 bg-page-theme shadow-xs rounded-16 px-48 py-10">
    <div class="flex xs:flex-wrap">
      <div class="text-grey-v1 xs:w-full xs:text-center">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>