<template>
    <div class="flex justify-center text-black font-semibold text-4xl mt-5">
        <div class="text-orange-500">
            ==========================================&nbsp;&nbsp;
        </div>
        <p>Station List</p>
        <div class="text-orange-500">
            &nbsp;&nbsp;==========================================
        </div>
    </div>

    <div class="flex justify-center text-black text-xl mt-5">
        <p class="mr-2 mt-2">Station Name :</p>
        <input
            type="text"
            v-model="searchTerm"
            placeholder="Search..."
            class="bg-white px-4 py-2 rounded-md border border-gray-300 w-3/6"
        />
        <button
            @click="search"
            class="bg-green-500 rounded-md text-white px-4 py-2 hover:bg-green-600 w-32 ml-2 flex items-center justify-center"
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
                    />
                </svg>
            </span>
            Search
        </button>
    </div>

    <div class="container flex items-center ml-[165px]">
        <div class="user-cards flex flex-wrap justify-center mt-5">
            <div
                v-for="(station, index) in stations.slice(
                    (page - 1) * pageCount,
                    page * pageCount
                )"
                :key="index"
                class="user-card w-[calc(40%-2rem)] p-4 m-4 border rounded-xl flex items-center shadow-xl shadow-black/20 bg-[#E7E7E7]"
            >
                <div>
                    <div
                        class="w-[200px] h-[150px] object-cover overflow-hidden"
                    >
                        <Button
                            @click="navigateTo(`/stations/${station.code}`)"
                        >
                            <img
                                src="~/assets/image.png"
                                :alt="station.title"
                                class="w-full h-full mt-3 object-cover transform hover:border-2 border-red-500"
                            />
                        </Button>
                    </div>
                </div>
                <div class="ml-5">
                    <div class="text-lg text-black">
                        {{ station.code }} - {{ station.name }}
                    </div>
                    <div class="text-gray-600 mt-5 flex">
                        <span class="mr-2"
                            ><svg
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
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg> </span
                        >{{ station.location }}
                    </div>
                    <div class="text-gray-600 mt-5 flex">
                        <span class="mr-2"
                            ><svg
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
                                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                            </svg>
                        </span>
                        <div class="flex items-center space-x-2">
                            <div
                                class="bg-green-600 p-2 block w-5 h-5 rounded-full"
                            ></div>
                            <div>
                                {{ station.status ? "ออนไลน์" : "ออฟไลน์" }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-10 mb-10 flex justify-center">
        <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="pageTotal"
            @change="handlePageChange"
            :ui="{
                wrapper: 'flex items-center gap-1',
                rounded: '!rounded-full min-w-[32px] justify-center',
                default: {
                    activeButton: {
                        variant: 'outline',
                    },
                },
            }"
        />
    </div>
</template>

<script setup>
const stations = ref([]);
const searchTerm = ref("");
const page = ref(1);
const pageCount = ref(10);
const pageTotal = ref(20);

const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1);
const pageTo = computed(() =>
    Math.min(page.value * pageCount.value, pageTotal.value)
);

const fetchData = async () => {
    try {
        const response = await $fetch("/api/v1/stations");
        stations.value = response.data;
        pageTotal.value = response.count;
    } catch (error) {
        console.error("Error fetching station:", error);
    }
};

onMounted(() => {
    fetchData();
});

const search = () => {
    page.value = 1;
};

const handlePageChange = (newPage) => {
    page.value = newPage;
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
