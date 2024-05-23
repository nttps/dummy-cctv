<template>
    <div class="px-4">
        <UBreadcrumb :links="links" class="mt-4" />

        <div class=" text-black font-semibold text-4xl mt-5">
            ห้องปฎิบัติการ
        </div>

        <div>
            <div class="flex space-x-4 items-center  text-black mt-5">
                <div class="text-3xl">Profile</div>

                <USelectMenu
                    v-model="selected"
                    :options="people"
                    size="xl"
                    class="px-6 mx-20"
                />
                <UButton icon="i-heroicons-plus" size="xl" color="blue" label="เพิ่ม" to="/war-rooms/create" />

                <UButton icon="i-heroicons-pencil" size="xl" label="แก้ไข" to="/war-rooms/create" />

                <UButton icon="i-heroicons-minus" size="xl" color="red" label="ลบ" />

                <UButton icon="i-heroicons-minus" size="xl" color="yellow" label="FullScreen" />
            </div>
            <div class="showview">
                <twinview v-if="$route.query.content === 'twinview'"></twinview>
                <threeview v-if="$route.query.content === 'threeview'"></threeview>
                <fourview v-if="$route.query.content === 'fourview'"></fourview>
                <sixview v-if="$route.query.content === 'sixview'"></sixview>
                <gutterview v-if="$route.query.content === 'gutterview'"></gutterview>
                <eightview v-if="$route.query.content === 'eightview'"></eightview>
                <nineview v-if="$route.query.content === 'nineview'"></nineview>
                <twogutterview
                    v-if="$route.query.content === 'twogutterview'"
                ></twogutterview>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const content = ref<string>("");
const router = useRouter();
const people = [
    "Profile 1",
    "Profile 2",
    "Profile 3",
    "Profile 4",
    "Profile 5",
];
const currentView = ref("");

const selected = ref(people[0]);

onMounted(() => {
    const queryContent = router.currentRoute.value.query.content;

    if (typeof queryContent === "string" && queryContent !== "") {
        content.value = queryContent;
    } else {
        content.value = "";
    }
});

const links = [{
    label: 'หน้าแรก',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'ห้องปฎิบัติการ',
    icon: 'i-heroicons-square-3-stack-3d',
}]

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
