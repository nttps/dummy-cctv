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
onMounted(() => {
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
    windyInit(options, windyAPI => {
        // windyAPI is ready, and contain 'map', 'store',
        // 'picker' and other usefull stuff

        const { map, picker, utils, broadcast, store  } = windyAPI;
        // .map is instance of Leaflet map


        const MARKER_ICON_URL = 'https://i.ibb.co/sQxTX9w/cctv-camera.png'

        const CameraIcon = L.icon({
            iconUrl: MARKER_ICON_URL,
            iconSize: dynamicSize,
            iconAnchor: [12, 12],
            popupAnchor: [0, 0],
        });


        const markers = [];

        const updateIconStyle = () => {
            for (const marker of markers) {
                const icon = marker._icon;
                if (!icon) {
                    continue;
                }
                const heading = icon.getAttribute('data-heading');
                if (icon.style.transform.indexOf('rotateZ') === -1) {
                    icon.style.transform = `${
                        icon.style.transform
                    } rotateZ(${heading || 0}deg)`;
                    icon.style.transformOrigin = 'center';
                }
            }
        };

        $fetch('/api/v1/stations')
            .then(response => response.json())
            .then(result => result.result)
            .then(result => {
                try {
                    let hue = 0;
                    for (const station of result) {
                        hue = (hue + 60) % 360;
                        const marker = L.marker([station.latitude, station.longitude], {
                            icon: CameraIcon,
                        }).addTo(map);

                        markers.push(marker);
                        marker._icon.setAttribute('data-heading', station.name);
                        marker.bindPopup(station);

                        updateIconStyle();
                    }
                } catch (error) {
                    console.error(`Error querying boats: ${error.message}`);
                }
            })
            .catch(error => {
                console.error(`Error querying boats: ${error.message}`);
            });

        map.on('zoom', updateIconStyle);
        map.on('zoomend', updateIconStyle);
        map.on('viewreset', updateIconStyle);

         // Change overlays programatically
        const overlays = ['rain', 'wind', 'temp', 'clouds'];
        let iOver = 0;

        setInterval(() => {
            iOver = iOver === 3 ? 0 : iOver + 1;
            store.set('overlay', overlays[iOver]);
        }, 800);


        const levels = store.getAllowed('availLevels');

        let i = 0;
        setInterval(() => {
            i = i === levels.length - 1 ? 0 : i + 1;

            // Changing Windy params at runtime
            store.set('level', levels[i]);
        }, 500);

        // Observing change of .store value
        store.on('level', level => {
            console.log(`Level was changed: ${level}`);
        });

        picker.on('pickerOpened', ({ lat, lon, values, overlay }) => {
            // -> 48.4, 14.3, [ U,V, ], 'wind'
            console.log('opened', lat, lon, values, overlay);

            const windObject = utils.wind2obj(values);
            console.log(windObject);
        });

        picker.on('pickerMoved', ({ lat, lon, values, overlay }) => {
            // picker was dragged by user to latLon coords
            console.log('moved', lat, lon, values, overlay);
        });

        picker.on('pickerClosed', () => {
            // picker was closed
        });

        store.on('pickerLocation', ({ lat, lon }) => {
            console.log(lat, lon);

            const { values, overlay } = picker.getParams();
            console.log('location changed', lat, lon, values, overlay);
        });

        // Wait since wather is rendered
        broadcast.once('redrawFinished', () => {
            // Opening of a picker (async)
            picker.open({ lat: 13.736717, lon: 100.523186 });
        });

        

    });
})

</script>

<style scoped>

#windy {
    width: 100%;
    height: 650px;
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
