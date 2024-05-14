<template>
    <div class="flex justify-center text-black font-semibold text-4xl mt-5">
        <div class="text-orange-500">
            ==========================================&nbsp;&nbsp;
        </div>
        <p>Edit CCTV</p>
        <div class="text-orange-500">
            &nbsp;&nbsp;==========================================
        </div>
    </div>
    <div class="flex justify-center">
        <div>
            <div
                class="w-full max-w-[90vw] rounded-xl overflow-hidden shadow-xl shadow-black/20 bg-white mt-5 mr-96"
            >
                <!-- Header and close button -->
                <div
                    class="h-20 p-5 flex items-center justify-between gap-4 bg-orange-500"
                >
                    <div class="flex items-center gap-3">
                        <p class="text-[30px] font-medium text-white">
                            Station Detail
                        </p>
                    </div>
                </div>
                <!-- Message input -->
                <div class="grid grid-cols-[auto,1fr] gap-x-4 p-4 py-6">
                    <div class="flex items-center text-black">
                        <div>CCTV ON.</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>Name (Thai)</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            v-model="station.name"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>Name (English)</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>Address (Thai)</div>
                    </div>
                    <div>
                        <UTextarea
                            resize
                            type="text"
                            size="xl"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-cente text-black mt-10">
                        <div>Address (English)</div>
                    </div>
                    <div>
                        <UTextarea
                            resize
                            type="text"
                            size="xl"
                            v-model="station.location"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div
                class="w-full max-w-[90vw] rounded-xl overflow-hidden shadow-xl shadow-black/20 bg-white mt-5 ml-5 mr-96"
            >
                <!-- Header and close button -->
                <div
                    class="h-20 p-5 flex items-center justify-between gap-4 bg-orange-500"
                >
                    <div class="flex items-center gap-3">
                        <p class="text-[30px] font-medium text-white">
                            Location
                        </p>
                    </div>
                </div>
                <!-- Message input -->
                <div class="grid grid-cols-[auto,1fr] gap-x-4 p-4 py-6">
                    <div class="flex items-center text-black">
                        <div>Latitude</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                            v-model="station.latitude"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>Longitude</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            v-model="station.longitude"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>UTM Northing</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>UTM Easting</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>UTM Zone</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>CCTV URL</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>CCTV Path File</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            placeholder="F:\ImageRecord\LiveJpegimages\C38"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                    <div class="flex items-center text-black">
                        <div>Water Guage</div>
                    </div>
                    <div>
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-10 mb-10">
        <div>
            <UButton
                icon="i-heroicons-check"
                size="xl"
                color="primary"
                variant="solid"
                label="Summit"
                :trailing="false"
                class="w-44 justify-center"
                @click="navigateTo('/station-management')"
            />
        </div>

        <div>
            <UButton
                icon="i-heroicons-x-mark"
                size="xl"
                variant="solid"
                label="Cancel"
                :trailing="false"
                color="grey"
                class="ml-10 bg-gray-500 hover:bg-gray-600 w-44 justify-center"
                @click="navigateTo('/station-management')"
            />
        </div>
    </div>
</template>

<script setup>

const route = useRoute();

const station = ref({
    name: "",
    location: "",
    latitude:"",
    longitude:""
})
const fetchStationData = async () => {
    try {
        const response = await $fetch(`/api/v1/stations/${route.params.id}`);
        station.value = response;
    } catch (error) {
        console.error("Error fetching station data:", error);
    }
};

onMounted(() => {
    fetchStationData();
});

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
