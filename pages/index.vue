<template>
    <div>
        <leaflet /> 
         
    </div>
    
</template>

<script setup lang="ts">

useHead({
    script: [{ 
        src: 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js'
    },{
        src: 'https://api.windy.com/assets/map-forecast/libBoot.js'
    }]
})

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
