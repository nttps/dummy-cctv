<template>
    <div class="container flex items-center">
        <div class="header flex items-center justify-between ml-12 mt-5">
            <img
                src="https://i.ibb.co/d21pGfk/Ndwc-removebg-preview.png"
                alt="Discover Nuxt 3"
                class="mr-5"
            />
            <div
                class="title text-black text-xl font-kanit px-10 whitespace-nowrap"
            >
                <p class="orange-text text-3xl font-semibold text-orange-500">
                    ระบบติดตามสถานการณ์น้ำผ่านกล้องโทรทัศน์วงจรปิด
                </p>
                <p class="text-lg font-medium">ศูนย์เตือนภัยพิบัติแห่งชาติ</p>
                <p class="text-lg font-medium">
                    National Disaster Warning Center
                </p>
            </div>
            <div style="margin-left: 750px; display: flex">
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }"v-if="auth.user">
                    <UButton :ui="{ rounded: 'rounded-3xl' }" color="orange" class="rounded-3xl text-white px-4 py-2" label="ADMIN" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
                <UButton
                    v-else
                    :ui="{ rounded: 'rounded-3xl' }"
                    color="orange"
                    class="rounded-3xl text-white px-4 py-2"
                    @click="isOpen = true"
                    >LOG ON</UButton
                >
            </div>

            <UModal v-model="isOpen" prevent-close>
                <div class="justify-end flex">
                    <UButton
                        :ui="{}"
                        color="red"
                        variant="ghost"
                        icon="i-heroicons-x-mark-20-solid"
                        @click="isOpen = false"
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
                                    color="orange"
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
        </div>
    </div>
    <div class="menu flex items-center bg-black text-white py-3">
        <div class="menu-items flex mr-auto">
            <NuxtLink
                class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl"
                to="/"
                exactActiveClass="text-orange-500 font-bold"
            >
                HOME
            </NuxtLink>
            <NuxtLink
                class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl"
                to="/stations"
                exactActiveClass="text-orange-500 font-bold"
            >
                STATION LIST
            </NuxtLink>
            <NuxtLink class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" exactActiveClass="text-orange-500 font-bold" v-if="auth.user" to="/war-rooms">WARROOM</NuxtLink>
            <NuxtLink class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" exactActiveClass="text-orange-500 font-bold" v-if="auth.user" to="/station-management">STATION MANAGEMENT</NuxtLink>
            <NuxtLink class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" exactActiveClass="text-orange-500 font-bold" v-if="auth.user" to="/users">USER MANAGEMENT</NuxtLink>
        </div>
        <div class="language-button flex items-center mr-10">
            <button
                @click="changeLanguage('en')"
                class="flex items-center hover:text-orange-500"
            >
                <img
                    src="https://i.ibb.co/5nLy679/united-kingdom-555417.png"
                    alt="ธงอังกฤษ"
                    class="w-5 h-auto mr-1"
                />
                EN
            </button>
            <h1 class="mx-1">│</h1>
            <button
                @click="changeLanguage('th')"
                class="flex items-center hover:text-orange-500"
            >
                <img
                    src="https://i.ibb.co/0jG8KPB/thailand-555495.png"
                    alt="ธงไทย"
                    class="w-5 h-auto mr-1"
                />
                ไทย
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { FormError, FormSubmitEvent } from "#ui/types";


    const isOpen = ref(false);
    const loginFailed = ref(false);
    const loggedIn = ref(false);
    const auth = useAuthStore()

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
            isOpen.value = false;

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