<template>
    <div class="fixed w-full h-screen top-0 left-0">
        <Leaflet /> 
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'main'
})

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
