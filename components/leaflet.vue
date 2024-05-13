<template>
    <!-- <div class="map-container">
        <LMap
            ref="map"
            :zoom="zoom"
            :center="center"
            @ready="mapInitialized"
        >
            <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap"
            />



            <LMarker :lat-lng="[station.latitude, station.longitude]" v-for="station in stations">
                <l-icon
                    :icon-size="dynamicSize"
                    icon-url="https://i.ibb.co/sQxTX9w/cctv-camera.png"
                />
                <LPopup class="font-bold">
                    <p>{{ station.code }} - {{ station.name }}</p>
                    <p>
                        ที่ตั้ง: {{ station.location }}
                    </p>
                    <p>ละติจูด: {{ station.latitude }}</p>
                    <p>ลองจิจูด: {{ station.longitude }}</p>
                    <p>สถานะ: {{ station.status ? 'ออนไลน์' : 'ออฟไลน์' }}</p>
                    <UButton class="ml-[120px]" :to="`stations/${station.code}`" color="white"
                        >View</UButton
                    >
                </LPopup>
            </LMarker>
        </LMap>
    </div> -->

    <div class="map-container">
        <div id="windy"></div>
    </div>
</template>

<script setup>


useHead({
    script: [{ 
        src: 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js'
    },{
        src: 'https://api.windy.com/assets/map-forecast/libBoot.js'
    }]
})

onMounted(() => {
    fetchMap();
    console.log(L)
});

const stations = ref([]);
const fetchMap = async () => {
    const data = await $fetch("/api/v1/stations");

    stations.value = data.data;
};
const zoom = ref(9);
const center = ref([13.736717, 100.523186]);
const dynamicSize = [38, 38];


onMounted(() => {

    const options = {
        // Required: API key
        key: 'hsnpVb7cJX8ATE1JRWTOSvbYUi4ErDT3', // REPLACE WITH YOUR KEY !!!

        // Put additional console output
        //verbose: true,

        // Optional: Initial state of the map
        lat: 13.736717,
        lon: 100.523186,
        zoom: 9,
        timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,

        hourFormat: '12h',
    }
    
    // Initialize Windy API
    windyInit(options, () => {});
})

</script>

<style scoped>

#windy {
    width: 100%;
    height: 300px;
}

.map-container {
    display: flex;
    justify-content: center;
    margin-left: 100px;
    margin-top: 30px;
    width: 1700px;
    height: 650px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
