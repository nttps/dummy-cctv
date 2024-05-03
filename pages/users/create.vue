<template>
    <div class="flex justify-center text-black font-semibold text-4xl mt-5">
        <div class="text-orange-500">
            ==========================================&nbsp;&nbsp;
        </div>
        <p>Create User</p>
        <div class="text-orange-500">
            &nbsp;&nbsp;==========================================
        </div>
    </div>
    <div class="flex justify-center">
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
                            Create User
                        </p>
                    </div>
                </div>
                <!-- Message input -->
                <div class="grid grid-cols-[auto,1fr] gap-x-4 p-4 py-6">
                    <div class="flex items-center text-black">
                        <div>Name</div>
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
                        <div>Surname</div>
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
                        <div>Username</div>
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
                        <div>Password</div>
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
                        <div>Confirm password</div>
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
                    <div class="items-center mt-5 text-black">
                        <div>Email</div>
                    </div>
                    <div class="items-center">
                        <UTextarea
                            size="xl"
                            :rows="1"
                            type="text"
                            maxlength="140"
                            class="w-full px-2 py-2 rounded-xl text-xl border-none text-black"
                        />
                        <div class="flex justify-start">
                            <div class="flex-col ml-3 mt-1 text-black">
                                <UCheckbox
                                    v-model="selectedWarroom"
                                    name="Warroom"
                                    label="Warroom"
                                    class="mt-5"
                                />
                                <UCheckbox
                                    v-model="selectedStation"
                                    name="Station"
                                    label="Station"
                                    class="mt-5"
                                />
                                <UCheckbox
                                    v-model="selectedUser"
                                    name="User"
                                    label="User"
                                    class="mt-5"
                                />
                            </div>
                        </div>
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
                @click="navigateTo('USER MANAGEMENT')"
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
                @click="navigateTo('/users')"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const searchTerm = ref("");
const selectedWarroom = ref(false);
const selectedStation = ref(false);
const selectedUser = ref(false);


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

body {
    background-color: #f7fafc;
    font-family: "Kanit", sans-serif;
}
</style>
