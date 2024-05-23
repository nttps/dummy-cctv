<template>
    <div class="flex items-center justify-between mt-2">
        <div class="flex items-center gap-1.5">
            <span class="text-xl leading-5 text-black">แสดง</span>

            <USelect
                v-model="pageCount"
                :options="[3, 5, 10, 20, 30, 40]"
                class="me-2 w-20"
                size="xl"
            /><span class="text-xl leading-5 text-black">รายการ</span>
        </div>
        <div>
            <UButton
                color="blue"
                size="xl"
                variant="solid"
                @click="navigateTo('/station-management/create')"
                >เพิ่มสถานี</UButton
            >
        </div>
    </div>
    <UCard
        class="rounded-none"
        :ui="{
            base: '',
            ring: '',
            divide: 'divide-y divide-gray-200 dark:divide-gray-700',
            header: { padding: 'px-4 py-5 ' },
            body: {
                padding: '',
                base: 'divide-y divide-gray-200 dark:divide-gray-700',
            },
            footer: { padding: 'p-4' },
        }"
    >
        <UTable
            :rows="stations.data"
            :columns="columnsTable"
            :loading="pending"
            sort-asc-icon="i-heroicons-arrow-up "
            sort-desc-icon="i-heroicons-arrow-down"
            :sort-button="{
                color: 'white',
                variant: '',
                size: '2xl',
                square: false,
                ui: { rounded: 'rounded-full', font: 'font-bold' },
            }"
            sort-mode="manual"
            class="w-full mt-5 bg-white"
            :ui="{ td: { base: 'max-w-[0] truncate  ' } }"
        >
            <template #status-data="{ row }">
                <UBadge
                    size="xs"
                    :label="row.status ? 'ออนไลน์' : 'ออฟไลน์'"
                    :color="row.status ? 'green' : 'red'"
                    variant="subtle"
                />
            </template>

            <template #actions-data="{ row }">
                <UButton
                    color="purple"
                    size="xl"
                    variant="solid"
                    :to="`/station-management/${row.code}`"
                    ><span class="mr-2">
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                        </svg>
                    </span>
                    Edit</UButton
                >

                <UButton class="ml-5" color="red" size="xl" variant="solid">
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
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </span>
                    Delete</UButton
                >
            </template>
        </UTable>
    </UCard>

    <div class="flex flex-wrap justify-between items-center mt-5 mb-10">
        
        <div>
            <span class="text-sm leading-5">
                กำลังแสดง
                <span class="font-medium">{{ pageFrom }}</span>
                ถึง
                <span class="font-medium">{{ pageTo }}</span>
                จาก
                <span class="font-medium">{{ pageTotal }}</span>
                รายการ
            </span>
        </div>

        <UPagination
            class="mr-24"
            :prev-button="{ label: 'ก่อนหน้า', color: 'gray' }"
            :next-button="{ trailing: true, label: 'ถัดไป', color: 'gray' }"
            v-model="page"
            :page-count="pageCount"
            :total="pageTotal"
            :ui="{
                wrapper: 'flex items-center gap-1',

                default: {
                    activeButton: {
                        variant: 'outline',
                    },
                },
            }"
        />
    </div>
</template>

<script lang="ts" setup>
const columns = [
    {
        key: "code",
        label: "NO.",
        class: "bg-orange-500 text-xl font-semibold text-white",
    },
    {
        key: "name",
        label: "Station Name",
        class: "bg-orange-500 text-xl font-semibold text-white",
    },
    {
        key: "location",
        label: "Location",
        class: "bg-orange-500 text-xl text-white",
    },
    {
        key: "status",
        label: "Status",
        class: "bg-orange-500 text-xl text-white",
    },
    {
        key: "actions",
        label: "Manage",
        class: "bg-orange-500 text-xl text-white",
        sortable: false,
    },
];

const selectedColumns = ref(columns);
const columnsTable = computed(() =>
    columns.filter((column) => selectedColumns.value.includes(column))
);

const search = ref("");
const selectedStatus = ref([]);

const resetFilters = () => {
    search.value = "";
    selectedStatus.value = [];
};

const sort = ref({ column: "id", direction: "asc" as const });
const page = ref(1);
const pageCount = ref(10);

const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1);
const pageTo = computed(() =>
    Math.min(page.value * pageCount.value, pageTotal.value)
);

const { data: stations, pending } = await useLazyAsyncData<
    {
        id: number;
        name: string;
        code: string;
    }[]
>(
    "stations",
    () =>
        ($fetch as any)(`/api/v1/stations`, {
            query: {
                q: search.value,
                _page: page.value,
                _limit: pageCount.value,
                _sort: sort.value.column,
                _order: sort.value.direction,
            },
        }),
    {
        default: () => [],
        watch: [page, search, pageCount, sort],
    }
);

const pageTotal = computed(() => stations.value.total);
</script>
