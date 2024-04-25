<template>
  <div class="container flex items-center">
    <div class="header flex items-center justify-between ml-12 mt-5">
        <img src="https://i.ibb.co/d21pGfk/Ndwc-removebg-preview.png" alt="Discover Nuxt 3" class="mr-5" />
        <div class="title text-black text-xl font-kanit  px-10 whitespace-nowrap ">
        <p class="orange-text text-3xl font-semibold text-orange-500">ระบบติดตามสถานการณ์น้ำผ่านกล้องโทรทัศน์วงจรปิด</p>
        <p class="text-lg font-medium">ศูนย์เตือนภัยพิบัติแห่งชาติ</p>
        <p class="text-lg font-medium">National Disaster Warning Center</p>
      </div>
      <div style="margin-left: 750px; display: flex;">
        <UButton  :ui="{ rounded: 'rounded-3xl' }" color="orange" class="rounded-3xl text-white px-4 py-2" @click="isOpen = true">LOG ON</UButton>
      </div>

      <UModal  v-model="isOpen" prevent-close>
             <div class="justify-end  flex ">
                <UButton :ui="{}" color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
             </div>
        <UCard :ui="{ ring: '', background: 'bg-white dark:bg-white', divide: 'divide-y divide-white dark:divide-white' }">
          <template #header>
            <div class="justify-center  flex">
              <h1 class="text-3xl font-semibold leading-6 text-black dark:text-black ">
                เข้าสู่ระบบ
              </h1>              
            </div>
        <UForm :validate="validate" :state="state" class="space-y-4 ">
          <UFormGroup class="mt-5" label="ชื่อบัญชี" name="id" :ui="{ label: { base: 'block font-medium text-black dark:text-black' } }">
            <UInput v-model="state.id" />
              </UFormGroup>
          <UFormGroup label="รหัสผ่าน" name="password" :ui="{ label: { base: 'block font-medium text-black dark:text-black' }, }">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
          <div class="justify-center flex">
             <UButton class="flex justify-center  py-2.5 " color="orange" @click="onSubmit">เข้าสู่ระบบ</UButton>
          </div>
        </UForm>  
          </template>
          <div v-if="loginFailed" class="text-red-600 flex  justify-center " >ชื่อบัญชีหรือรหัสผ่านไม่ถูกต้อง</div>
        </UCard>
      </UModal>
     
    </div>
  </div>
  <div class="menu flex items-center bg-black text-white  py-3">
  <div class="menu-items flex mr-auto">
      <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('HOME')">HOME</div>
    <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('STATION LIST')">STATION LIST</div>
    </div>
    <div class="language-button flex items-center mr-10 ">
   <button @click="changeLanguage('en')" class="flex items-center hover:text-orange-500">
    <img src="https://i.ibb.co/5nLy679/united-kingdom-555417.png" alt="ธงอังกฤษ" class="w-5 h-auto mr-1"> EN
   </button>
    <h1 class="mx-1">│</h1>
   <button @click="changeLanguage('th')" class="flex items-center hover:text-orange-500">
    <img src="https://i.ibb.co/0jG8KPB/thailand-555495.png" alt="ธงไทย" class="w-5 h-auto mr-1"> ไทย
   </button>
   </div>
  </div>

  <div class="flex justify-center text-black font-semibold text-4xl mt-5">
    <div class="text-orange-500">==========================================&nbsp;&nbsp;</div><p >Station List</p><div class="text-orange-500">&nbsp;&nbsp;==========================================</div>
</div>

<div class="flex justify-center text-black text-xl mt-5">
    <p class="mr-2 mt-2">Station Name :</p>
    <input type="text" v-model="searchTerm" placeholder="Search..." class="bg-white px-4 py-2 rounded-md border border-gray-300 w-3/6">
    <button @click="search" class="bg-green-500 rounded-md text-white px-4 py-2 hover:bg-green-600 w-32 ml-2 flex items-center justify-center">
      <span class="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </span>
      Search
    </button>
  </div>

<div class="container flex items-center ml-[165px] text-black">
    <div class="user-cards flex flex-wrap justify-center mt-5">
      <div v-for="product in products" :key="product.id" class="user-card w-[calc(40%-2rem)]  p-4 m-4 border rounded-xl flex items-center shadow-xl shadow-black/20 bg-[#E7E7E7]">
        <div>
          <div class="w-[200px] h-[150px] object-cover overflow-hidden">
            <Button @click="navigateTo('stationdetail', product)">
              <img :src="product.image" :alt="product.title" class="w-full h-full mt-3 object-cover transform hover:border-2 border-red-500">
            </Button>
          </div>
        </div>
        <div class="ml-5">
          <div class="text-lg"> {{ product.id }} </div>
          <div class="text-gray-600 mt-5 flex"><span class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>{{ product.title }}</div>
          <div class="text-gray-600 mt-5 flex"><span class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</span>{{ product.category }}</div>
        </div>
      </div>
    </div>
    
  </div>
  
  <div class="mt-10 mb-10 flex justify-center">
  <UPagination
    v-model:selectedPage="page"
    :page-count="Math.ceil(products.length / pageCount)"
    :total="products.length"
    
    :ui="{
      wrapper: 'flex items-center gap-1',
      rounded: '!rounded-full min-w-[32px] justify-center',
      default: {
        activeButton: {
          variant: 'outline'
        }
      }
    }"
  />
</div>
<div class="mt-10">
    <Footer />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import ArcGISMap from '@/components/ArcGISMap.vue';
import type { FormError, FormSubmitEvent } from '#ui/types'
const products = ref<any>([])
const currentPage = ref(1)
const pageSize = 10
const page = ref(1)
const pageCount = ref(2)
const pageTotal = ref(10)
const searchTerm = ref('')
const filteredProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = currentPage.value * pageSize
  return products.value.filter((product: any) => {
    return product.id.toString().includes(searchTerm.value)
  }).slice(start, end)
})

const fetchData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data 
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

onMounted(() => {
  fetchData()
})

const search = () => {
  currentPage.value = 1
}

const loginFailed = ref(false);
const state = reactive({
  id: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.id) errors.push({ path: 'id', message: 'กรุณากรอกชื่อบัญชี' })
  if (!state.password) errors.push({ path: 'password', message: 'กรุณากรอกรหัสผ่าน' })
  return errors
}

async function onSubmit(event: MouseEvent) {
  event.preventDefault();
  await login(event);
}

const router = useRouter()

const isOpen = ref(false)

function navigateTo(page: string) {
  switch (page) {
    case 'HOME':
      router.push({ name: 'index' }) 
      break
    case 'STATION LIST':
      router.push({ name: 'stationListview' })
      break
  }
}

const loggedIn = ref(false)

async function login(event: MouseEvent) {
  event.preventDefault();

  const username = "Adminkasizma"; 
  const password = "Admin12345"; 

  if (state.id === username && state.password === password) {
    loggedIn.value = true;
    isOpen.value = false;
    router.push({ name: 'Home' });
    loginFailed.value = false; 
  } else {
    loginFailed.value = true; 
    loggedIn.value = false;
  }
}
const language = ref('th')

function changeLanguage(lang: string) {
  language.value = lang
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

body {
  background-color: #F7FAFC;
  font-family: 'Kanit', sans-serif;
}


</style>
