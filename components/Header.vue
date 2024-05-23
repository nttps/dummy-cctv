<template>
    <div :class="fixed !== undefined ? `fixed top-0 w-auto z-[1]`: ``">
        <div class="px-2 lg:px-4 flex items-center w-full mb-2">
            <div class="header flex items-center justify-between mt-5 w-full">
                <div class="flex items-center space-x-4">
                        <UButton
                            :ui="{ rounded: 'rounded-3xl', size: { xl: 'text-3xl'} }"
                            size="xl"
                            square
                            @click="isOpen = true"
                        >
                            <UIcon name="i-iconamoon-menu-burger-horizontal-bold" dynamic />
                        </UButton>

                        <div
                            class="title text-xl font-kanit text-center lg:text-left bg-black/20 py-2 px-5 rounded-full"
                        >
                            <p class="orange-text text-xl lg:text-2xl font-semibold text-white">
                                ระบบติดตามสถานการณ์น้ำผ่านกล้องโทรทัศน์วงจรปิด
                            </p>
                        </div>

                </div>
    

                <USlideover v-model="isOpen" side="left">
                    <UCard  :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                        <template #header>
                            <div class="flex items-center justify-between">
                                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                    เมนู
                                </h3>
                                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                            </div>
                        </template>

                        <nav class="relative">
                            <ul>
                                <template v-for="link in links">
                                    <li v-if="link.permission && auth.user">
                                        <NuxtLink :to="link.to" class="group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-2.5 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-xl text-gray-900 dark:text-white hover:bg-gray-600 hover:text-white">
                                            <Icon :name="link.icon" class="flex-shrink-0 w-5 h-5 relative text-gray-400 " />
                                            <span class="truncate relative">{{ link.label }}</span>
                                        </NuxtLink>
                                    </li>
                                    <li v-if="!link.permission">
                                        <NuxtLink :to="link.to" class="group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-2.5 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-xl text-gray-900 dark:text-white hover:bg-gray-600 hover:text-white">
                                            <Icon :name="link.icon" class="flex-shrink-0 w-5 h-5 relative text-gray-400 "/>
                                            <span class="truncate relative">{{ link.label }}</span>
                                        </NuxtLink>
                                    </li>
                                </template>
                            </ul>
                        </nav>

                        <UButton
                            :ui="{ rounded: 'rounded-3xl' }"
                            size="xl"
                            class="w-full justify-center mt-4"
                            @click="isOpenLogin = true"
                            v-if="!auth.user"
                            >เข้าสู่ระบบ</UButton
                        >
                        <UButton
                            :ui="{ rounded: 'rounded-3xl' }"
                            size="xl"
                            color="red"
                            class="w-full justify-center mt-4"
                            @click="auth.setAuth(null)"
                            v-else
                            >ออกจากระบบ</UButton
                        >
                    </UCard>

                    <UModal v-model="isOpenLogin" prevent-close>
                        <div class="justify-end flex">
                            <UButton
                                :ui="{}"
                                color="red"
                                variant="ghost"
                                icon="i-heroicons-x-mark-20-solid"
                                @click="isOpenLogin = false"
                            />
                        </div>
                        <UCard
                            :ui="{
                                ring: '',
                                background: 'bg-white dark:bg-white',
                                divide: 'divide-y divide-white dark:divide-white',
                            }"
                        >
                            <template #header>
                                <div class="justify-center flex">
                                    <h1
                                        class="text-3xl font-semibold leading-6 text-black dark:text-black"
                                    >
                                        เข้าสู่ระบบ
                                    </h1>
                                </div>
                                <UForm
                                    :validate="validate"
                                    :state="state"
                                    class="space-y-4"
                                >
                                    <UFormGroup
                                        class="mt-5"
                                        label="ชื่อบัญชี"
                                        name="id"
                                        :ui="{
                                            label: {
                                                base: 'block font-medium text-black dark:text-black',
                                            },
                                        }"
                                    >
                                        <UInput v-model="state.id" />
                                    </UFormGroup>
                                    <UFormGroup
                                        label="รหัสผ่าน"
                                        name="password"
                                        :ui="{
                                            label: {
                                                base: 'block font-medium text-black dark:text-black',
                                            },
                                        }"
                                    >
                                        <UInput
                                            v-model="state.password"
                                            type="password"
                                        />
                                    </UFormGroup>
                                    <div class="justify-center flex">
                                        <UButton
                                            class="flex justify-center py-2.5"
                                            @click="login"
                                            >เข้าสู่ระบบ</UButton
                                        >
                                    </div>
                                </UForm>
                            </template>
                            <div
                                v-if="loginFailed"
                                class="text-red-600 flex justify-center"
                            >
                                ชื่อบัญชีหรือรหัสผ่านไม่ถูกต้อง
                            </div>
                        </UCard>
                    </UModal>
                </USlideover>
            </div>
        </div>
    </div>

   
</template>

<script setup lang="ts">
    import type { FormError, FormSubmitEvent } from "#ui/types";

    const props = defineProps(['fixed'])

    const isOpen = ref(false);
    const loginFailed = ref(false);
    const loggedIn = ref(false);
    const auth = useAuthStore()
    const isOpenLogin = ref(false);

    const language = ref('th')

    function changeLanguage(lang: string) {
        language.value = lang
    }
    const items = [
        [{
            label: 'LOG OUT',
            color: 'orange',
            click: () => {
                auth.setAuth(null);
            }
        }]
    ]

    const route = useRoute()

    const links = [{
        label: 'หน้าแรก',
        icon: 'i-heroicons-home',
        to: '/',
        permission: false
    }, {
        label: 'สถานี',
        icon: 'i-heroicons-chart-bar',
        to: `/stations`,
        permission: false
    }, {
        label: 'ห้องปฎิบัติการ',
        icon: 'i-heroicons-command-line',
        to: '/war-rooms',
        permission: true
    }, {
        label: 'จัดการสถานี',
        icon: 'i-heroicons-command-line',
        to: '/station-management',
        permission: true
    }, {
        label: 'จัดการผู้ใช้งาน',
        icon: 'i-heroicons-command-line',
        to: '/users',
        permission: true
    }]


    const state = reactive({
        id: undefined,
        password: undefined,
    });

    const validate = (state: any): FormError[] => {
    const errors = [];
        if (!state.id) errors.push({ path: "id", message: "กรุณากรอกชื่อบัญชี" });
        if (!state.password)
            errors.push({ path: "password", message: "กรุณากรอกรหัสผ่าน" });
        return errors;
    };

    const login = async () => {
        const username = "Adminkasizma";
        const password = "Admin12345";

        if (state.id === username && state.password === password) {
            loggedIn.value = true;
            isOpenLogin.value = false;

            auth.setAuth(username)
            loginFailed.value = false;
        } else {
            loginFailed.value = true;
            loggedIn.value = false;
        }
    }
</script>

<style scoped>

</style>