<template>
    <div class="px-4">
        <UBreadcrumb :links="links" class="mt-4" />
        <div class="flex text-black mt-10">
            <div class="text-3xl">Profile :</div>

            <USelectMenu
                v-model="selected"
                :options="people"
                size="xl"
                class="px-6 mx-20"
            />
        </div>

        <div class="text-3xl mt-10 flex text-black">Layout Template :</div>

        <div class="flex justify-center gap-10">
            <button
                class="bg-white-500 border-2 border-black text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0"
                @click="showTwinView"
            >
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>

            <button
                class="bg-white-500 border-2 border-black text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0"
                @click="showThreeView"
            >
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>

            <button
                class="bg-white-500 grid grid-cols-2 border-2 border-black text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 items-center justify-center mx-0 m-0"
                @click="showFourView"
            >
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>

            <button
                class="bg-white-500 border-2 border-black grid grid-cols-3 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 items-center justify-center mx-0 m-0"
                @click="showSixView"
            >
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>
        </div>

        <div class="flex justify-center mt-5">
            <button
                class="bg-white-500 border-2 border-black grid grid-cols-3 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 items-center justify-center mx-0 m-0"
                @click="showGutterView"
            >
                <div
                    class="border-2 border-black p-5 w-full h-full col-span-2 row-span-2 bg-orange-500"
                ></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>

            <div>
                <button
                    class="bg-white-500 border-2 border-black grid grid-cols-4 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 items-center justify-center mx-0 m-0"
                    @click="showEightView"
                >
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                    <div
                        class="border-2 border-black p-5 w-1/2 bg-orange-500"
                    ></div>
                </button>
            </div>

            <button
                class="bg-white-500 border-2 border-black grid grid-cols-3 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 items-center justify-center mx-0 m-0"
                @click="showNineView"
            >
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>

            <button
                class="bg-white-500 border-2 border-black grid grid-cols-4 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 items-center justify-center mx-0 m-0"
                @click="showTwogutterView"
            >
                <div
                    class="border-2 border-black p-5 w-full h-full col-span-2 row-span-2 bg-orange-500"
                ></div>
                <div
                    class="border-2 border-black p-5 w-full h-full col-span-2 row-span-2 bg-orange-500"
                ></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
                <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
            </button>
        </div>

        <div class="text-3xl mt-20 flex text-black">Manage CCTV :</div>

        <div>
            <GridViewTwin v-if="currentView === 'twinview'" />
            <GridViewThree v-else-if="currentView === 'threeview'" />
            <GridViewFour v-else-if="currentView === 'fourview'" />
            <GridViewSix v-else-if="currentView === 'sixview'" />
            <GridViewGutter v-else-if="currentView === 'gutterview'" />
            <GridViewEight v-else-if="currentView === 'eightview'" />
            <GridViewNine v-else-if="currentView === 'nineview'" />
            <GridViewTwo v-else-if="currentView === 'twogutterview'" />
        </div>
    </div>
</template>

<script setup lang="ts">


    const links = [{
        label: 'หน้าแรก',
        icon: 'i-heroicons-home',
        to: '/'
    }, {
        label: 'รายการห้องปฎิบัติการ',
        icon: 'i-heroicons-square-3-stack-3d',
        to: '/war-rooms'
    }, {
        label: 'เพิ่มห้องปฎิบัติการ',
    }]

const people = [
    "Profile 1",
    "Profile 2",
    "Profile 3",
    "Profile 4",
    "Profile 5",
];

const currentView = ref("");

function showTwinView() {
    currentView.value = "twinview";
}
function showThreeView() {
    currentView.value = "threeview";
}
function showFourView() {
    currentView.value = "fourview";
}
function showSixView() {
    currentView.value = "sixview";
}
function showGutterView() {
    currentView.value = "gutterview";
}
function showEightView() {
    currentView.value = "eightview";
}
function showNineView() {
    currentView.value = "nineview";
}
function showTwogutterView() {
    currentView.value = "twogutterview";
}

const selected = ref(people[0]);


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
