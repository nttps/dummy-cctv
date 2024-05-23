<template>
    <div class="px-4">
        <UBreadcrumb :links="links" v-if="breadcrumbs" class="mt-4" />
        <div class=" flex justify-center">
            <div
                class="border-2 bg-white border-black p-1 w-full rounded-xl  mt-4"
            >
                <p class="text-black mb-2 font-bold text-4xl text-center">
                    Station Name
                </p>
                <div class="flex justify-center text-black text-xl">
                    <p>{{ station.code }} - {{ station.name }}</p>
                </div>
            </div> 
        </div>
        <div class="flex justify-center">
            
            <div class="border-2 bg-white border-black p-5 w-[500px] h-[300px]  rounded-xl mt-10">
                    <p class="text-black font-bold text-4xl text-center">
                        Address
                    </p>
                    <div class="mt-10 text-black ">
                        <p><span class="text-black font-semibold  text-xl">ระดับน้ำ :</span> -</p>
                        <p><span class="text-black font-semibold  text-xl">ที่ตั้ง :</span> {{ station.location }}</p> 
                        <p><span class="text-black font-semibold  text-xl">ละติจูด :</span> {{ station.latitude }}</p> 
                        <p><span class="text-black font-semibold  text-xl">ลองจิจูด :</span> {{ station.longitude }}</p> 
                        <p><span class="text-black font-semibold  text-xl">สถานะ :</span> {{ station.status ? 'ออนไลน์' : 'ออฟไลน์' }}</p> 
                    </div>
                </div>
            <div class="border-2 bg-white border-black p-5  rounded-xl  ml-10 mt-10 max-w-min max-h-min">
                <div class="mt-10">
                        <div class="flex justify-center mb-10">
                            <video ref="videoPlayer" src="~assets/gauage.mp4" autoplay muted />
                        </div>
                    <p class="text-black font-bold text-xl text-left">
                        Play back
                    </p>
                    <p class="text-black text-xl mt-2">
                        Date
                        <span class="text-black text-xl text-center ml-[90px]">Time</span >
                    </p>
                    <div class="flex container">
                        <UPopover :popper="{ placement: 'bottom-start' }">
                            <UButton
                                color="white"
                                icon="i-heroicons-calendar-days-20-solid"
                                :label="format(date, 'd MMM, yyy')"
                            />
                            <template #panel="{ close }">
                                <DatePicker v-model="date" @close="close" />
                            </template>
                        </UPopover>
                        <input
                            class="ml-5 bg-black border-1 border-black text-white rounded cursor-pointer hover:bg-gray-500 hover:border-1 hover:border-black"
                            type="time"
                            id="appt"
                            name="appt"
                            min="09:00"
                            max="18:00"
                            required
                        />
                        <button
                            class="bg-green-500 rounded-md text-white hover:bg-green-600 w-32 flex items-center justify-center ml-96"
                        >
                            <span class="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    /></svg
                            ></span>
                            Search
                        </button>
                    </div>
                    <div class="mt-5">
                        <p class="text-black font-bold text-xl text-left">
                            Save
                        </p>
                        <p class="text-black text-xl mt-2">
                            Form
                            <span
                                class="text-black text-xl text-center ml-[90px]"
                            ></span>
                        </p>
                        <div class="flex container">
                            <UPopover :popper="{ placement: 'bottom-start' }">
                                <UButton
                                    color="white"
                                    icon="i-heroicons-calendar-days-20-solid"
                                    :label="format(date2, 'd MMM, yyy')"
                                />
                                <template #panel="{ close }">
                                    <DatePicker
                                        v-model="date2"
                                        @close="close"
                                    />
                                </template>
                            </UPopover>
                            <input
                                class="ml-5 bg-black border-1 border-black text-white rounded cursor-pointer hover:bg-gray-500 hover:border-1 hover:border-black"
                                type="time"
                                id="appt"
                                name="appt"
                                min="09:00"
                                max="18:00"
                                required
                            />
                            <button
                                class="bg-sky-500 rounded-md text-white hover:bg-sky-600 w-32 flex items-center justify-center ml-96"
                            >
                                <span class="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="white"
                                            d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3-10H5V5h10z"
                                        /></svg
                                ></span>
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="mt-5">
                        <p class="text-black font-bold text-xl text-left"></p>
                        <p class="text-black text-xl mt-2">
                            To
                            <span
                                class="text-black text-xl text-center ml-[90px]"
                            ></span>
                        </p>
                        <div class="flex container">
                            <UPopover :popper="{ placement: 'bottom-start' }">
                                <UButton
                                    color="white"
                                    icon="i-heroicons-calendar-days-20-solid"
                                    :label="format(date3, 'd MMM, yyy')"
                                />
                                <template #panel="{ close }">
                                    <DatePicker
                                        v-model="date3"
                                        @close="close"
                                    />
                                </template>
                            </UPopover>
                            <input
                                class="ml-5 bg-black border-1 border-black text-white rounded cursor-pointer hover:bg-gray-500 hover:border-1 hover:border-black"
                                type="time"
                                id="appt"
                                name="appt"
                                min="09:00"
                                max="18:00"
                                required
                            />
                            <button
                                class="bg-blue-700 rounded-md text-white hover:bg-blue-800 w-32 flex items-center justify-center ml-96"
                            >
                                <span class="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        /></svg
                                ></span>
                                Schedule
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { format } from "date-fns";
    const videoPlayer = ref(null);

    onMounted(() => {
        fetchStationData();
    });

    const date = ref(new Date());
    const date2 = ref(new Date());
    const date3 = ref(new Date());
    const route = useRoute();
    const station = ref({});
    const breadcrumbs = ref(false)

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

</script>

<style>
</style>
