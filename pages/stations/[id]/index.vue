<template>
    <div class="px-4">
        <UBreadcrumb :links="links" v-if="breadcrumbs" class="mt-4 mb-2" />
        
        <div class=" border-2 bg-white border-black p-8 w-full rounded-xl max-h-min ">
            <div class="flex flex-col items-center justify-center text-black text-xl mb-8">
                <div class="flex items-center gap-4">
                    <UButton @click="openPrint" :padded="false" icon="i-heroicons-printer" variant="link" size="xl" />
                    <h2 class="text-4xl font-bold">{{ station.code }} - {{ station.name }}</h2>
                    <div class="rounded-full block w-5 h-5" :class="{ 'bg-red-600': cameraStatus.alertLevel == 'DANGER', 'bg-orange-500': cameraStatus.alertLevel == 'WARNING', 'bg-green-400': cameraStatus.alertLevel == 'NORMAL'}"></div> 
                   
                </div>
                <div class="text-sm text-center">เวลา {{ cameraStatus.timestamp }}</div>
               
            </div>
            <div class="flex justify-between ">
                <div
                class="w-1/2"
            >
                <div class="">
                    <StationMap ref="mapComponent" @init="initMap" :station="station" />
                </div>
                <div class="mt-10 text-black ">
                    <p><span class="text-black font-semibold  text-xl">ระดับน้ำ :</span> {{ cameraStatus.waterLevelM }}</p>
                    <p><span class="text-black font-semibold  text-xl">ที่ตั้ง :</span> {{ station.location }}</p> 
                    <p><span class="text-black font-semibold  text-xl">ละติจูด :</span> {{ station.latitude }}</p> 
                    <p><span class="text-black font-semibold  text-xl">ลองจิจูด :</span> {{ station.longitude }}</p> 
                    <p><span class="text-black font-semibold  text-xl">สถานะ :</span> {{ station.status ? 'ออนไลน์' : 'ออฟไลน์' }}</p> 
                </div>
                 
            </div> 
            <div class="w-1/2 ">
                <iframe src="https://live.server97.cloud/stream.html?src=poccam" ref="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0" class="w-full h-[500px] mb-4"></iframe>
                <img :src="previewScr" alt="">
                <div class="flex justify-between">
                    <div>
                        <div>Play back</div>
                        <UPopover :popper="{ placement: 'bottom-start' }">
                            <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />
                            <template #panel="{ close }">
                                <DatePicker v-model="date" is-required @close="close" />
                            </template>
                        </UPopover>
                    </div>
                    <div>
                        <div>Search</div>
                        <UPopover :popper="{ placement: 'bottom-start' }">
                            <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />
                            <template #panel="{ close }">
                                <DatePicker v-model="date" is-required @close="close" />
                            </template>
                        </UPopover>
                    </div>
                    <div>
                        <div>Save</div>
                        <UPopover :popper="{ placement: 'bottom-start' }">
                            <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />
                            <template #panel="{ close }">
                                <DatePicker v-model="date" is-required @close="close" />
                            </template>
                        </UPopover>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <UModal v-model="printModal"  :ui="{ width: 'sm:max-w-6xl'}">
        <UCard :ui="{ base: '' , divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex justify-between">
                    <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight w">
                        Export
                    </h2>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="printModal = false" />
                </div>
            </template>
            <StationPrint :id="route.params.id" :image="imageMap" :cameraStatus="cameraStatus"  v-if="imageMap" />
        </UCard>
    </UModal>
</template>

<script setup>
    import { format } from "date-fns";
    import { io } from "socket.io-client";

    onMounted(() => {
        fetchStationData();
    });

    const date = ref(new Date());
    const date2 = ref(new Date());
    const date3 = ref(new Date());
    const route = useRoute();
    const station = ref({});
    const breadcrumbs = ref(false)
    const printModal = ref(false)

    const cameraStatus = ref({
        waterLevelM: '0',
        timestamp: format(new Date(), 'yyyy-MM-dd HH:mm'),
        alertLevel: 'NORMAL'
    });

    const imageMap = ref()
    const initMap = (value) => {
        imageMap.value = value
    }

    const video = ref()
    const previewScr = ref('')

    const openPrint = () => {

        printModal.value = true
        html2canvas(video.value).then(function(canvas) {
            // Convert the canvas to a data URL and set it as the src of an image element
            previewScr.value = canvas.toDataURL();
        });
    }
    const fetchStationData = async () => {
        try {
            const response = await $fetch(`/api/v1/stations/${route.params.id}`);
            station.value = response;

            breadcrumbs.value = true
        } catch (error) {
            console.error("Error fetching station data:", error);
        }
    };



    const links = [{
        label: 'หน้าแรก',
        icon: 'i-heroicons-home',
        to: '/'
    }, {
        label: 'รายการสถานี',
        icon: 'i-heroicons-square-3-stack-3d',
        to: '/stations'
    }, {
        label: station.value.name,
    }]


    const socket = io();
    const isConnected = ref(false);
    const transport = ref("N/A");
    if (socket.connected) {
        onConnect();
    }

    function onConnect() {
        isConnected.value = true;
        transport.value = socket.io.engine.transport.name;

        socket.io.engine.on("upgrade", (rawTransport) => {
            transport.value = rawTransport.name;
        });
    }

    function onDisconnect() {
        isConnected.value = false;
        transport.value = "N/A";
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("hello", (value) => {

        cameraStatus.value = value;

        if(value.alertLevel === 'DANGER'){
            toast.add({
                title: `แจ้งเตือนระดับ ${value.alertLevel}`,
                description: `ระดับน้ำสูง ${value.waterLevelM} เวลา ${value.timestamp}`,
                icon: "i-heroicons-exclamation-triangle-solid",
                timeout: 59000,
                color: "red"
            });
        }
    });

    onBeforeUnmount(() => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
    });

</script>

<style>
</style>
