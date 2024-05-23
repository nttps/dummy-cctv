<template>
  <div class="px-10">
    <UBreadcrumb :links="links" class="my-4" />
    <EditStation />
  </div>
</template>

<script setup lang="ts">

const links = [{
    label: 'หน้าแรก',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'จัดการสถานี',
    icon: 'i-heroicons-square-3-stack-3d',
}]

</script>



<style>

</style>
