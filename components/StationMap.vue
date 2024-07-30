<template>
  <div>
    <div class="map-container relative w-[500px] h-[500px]" ref="mapContainer">
      <div class="absolute left-0 right-0 top-0">
        <div id="mapCapture" class="w-[500px] h-[500px]" v-if="!successCapture" ></div>
      </div>
      <div id="windy"></div>
    </div>
  </div>
</template>

<script setup>
import leafletImage from 'leaflet-image';
const props = defineProps(['station'])
const emit = defineEmits(['init', 'capture'])
const dynamicSize = [38, 38];
const mapReady = ref(false);
const mapContainer = ref();
const successCapture = ref(false);
const zoom = ref(16);

const MARKER_ICON_URL = 'https://i.ibb.co/sQxTX9w/cctv-camera.png';
const cameraIcon = ref();

onMounted(async () => {

  loadWindyAPI({
      lat: props.station.latitude,
      lon: props.station.longitude,
      zoom: zoom.value,
      attributionControl: false,
      zoomControl: false,
      fadeAnimation: false,
      zoomAnimation: false
  }).then(async () => {

    cameraIcon.value = L.icon({
      iconUrl: MARKER_ICON_URL,
      iconSize: dynamicSize,
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
    })
    await initMapCapture()
    initMap().then((e) => {
      mapReady.value = true;
    });
  });
 
});
const initMapCapture = async () => {
  var map = L.map('mapCapture').setView([props.station.latitude, props.station.longitude], zoom.value);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([props.station.latitude, props.station.longitude]).addTo(map);

  leafletImage(map, (err, canvas) => {
    if (err) reject(err);
    emit('init', canvas.toDataURL("image/png"));
  });

  successCapture.value = true;
      
}
const initMap = async () => {
  const windyAPI = getWindyAPI();
  const { map } = windyAPI;
  try {

    L.marker([props.station.latitude, props.station.longitude], {
      icon: cameraIcon.value,
    }).addTo(map);
  
  } catch (error) {
    console.error(`Error querying boats: ${error.message}`);
  }

  
};

</script>

<style scoped>
#windy {
  width: 100%;
  height: 100%;
}

.map-container {
  display: block;
  margin: 0 auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

/* Absolute Center Spinner */
.loading {
  position: absolute;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */


/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
