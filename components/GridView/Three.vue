<template>
    <div class="threeview">
        <div class="flex justify-center">
            <div
                class="flex flex-row border-2 border-black p-5 w-5/12 mt-10 bg-orange-500"
            >
                <!-- First section -->
                <div
                    class="border-2 border-black p-5 w-1/2 bg-black-500"
                    :class="{ 'bg-black border-black': isAddClicked }"
                ></div>
                <div
                    class="border-2 border-white p-5 w-1/2 bg-black text-white"
                    :class="{ 'bg-black border-black': isAddClicked }"
                >
                    <button
                        class="bg-orange-500 rounded-full text-white hover:bg-orange-600 flex items-center justify-center"
                        v-if="!isAddClicked"
                        @click="handleAddClick"
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-10 h-10"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </span>
                    </button>
                    <div class="ml-1 mt-1" v-if="!isAddClicked">ADD</div>
                </div>

                <!-- Second section -->
                <div
                    class="border-2 border-white p-5 w-1/2 bg-black text-white"
                    :class="{ 'bg-black border-black': isAddClicked2 }"
                >
                    <button
                        class="bg-orange-500 rounded-full text-white hover:bg-orange-600 flex items-center justify-center"
                        v-if="!isAddClicked2"
                        @click="handleAddClick2"
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-10 h-10"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </span>
                    </button>
                    <div class="ml-1 mt-1" v-if="!isAddClicked2">ADD</div>
                </div>
            </div>
        </div>

        <div
            style="margin-left: 535px"
            class="flex text-black mb-10 mt-10"
            v-if="!isWarRoomPage"
        >
            <button
                class="bg-green-500 rounded-md text-white px-4 py-2 hover:bg-green-600 w-32 ml-2 flex items-center justify-center mx-20"
                @click="saveDataAndNavigate()"
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
                            d="m4.5 12.75 6 6 9-13.5"
                        />
                    </svg>
                </span>
                Save
            </button>
            <button
                class="bg-gray-500 rounded-md text-white px-4 py-2 hover:bg-gray-600 w-70 ml-2 flex items-center justify-center mx-20"
                @click="navigateTo('goback')"
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
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </span>
                Cancel
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import store from "~/stores";
const route = useRoute();
const router = useRouter();
const isWarRoomPage = ref(false);
const isAddClicked = ref(false);
const isAddClicked2 = ref(false);

onMounted(() => {
    isWarRoomPage.value = route.name === "WarRoom";
    const isAddClickedFromQuery = route.query.isAddClicked;
    isAddClicked.value = isAddClickedFromQuery === "true";
    const isAddClicked2FromQuery = route.query.isAddClicked2;
    isAddClicked2.value = isAddClicked2FromQuery === "true";
});
function saveDataAndNavigate() {
    router.push({
        name: "WarRoom",
        query: {
            content: "threeview",
            isAddClicked: isAddClicked.value.toString(),
            isAddClicked2: isAddClicked2.value.toString(),
        },
    });
}

function navigateTo(page: string) {
    switch (page) {
        case "WarRoom":
            router.push({ name: "WarRoom" });
            break;
        case "goback":
            router.push({ name: "WarRoom" });
            break;
    }
}

function handleAddClick() {
    isAddClicked.value = true;
    store.dispatch("toggleAddClicked", true);
}

function handleAddClick2() {
    isAddClicked2.value = true;
    store.dispatch("toggleAddClicked2", true);
}
</script>

<style scoped>
.threeview .border-black {
    border-color: black;
}

.threeview .bg-black {
    background-color: black;
}
</style>
