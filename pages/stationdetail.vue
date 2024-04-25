<template>
  <div class="container flex items-center">
    <div class="header flex items-center justify-between ml-12 mt-5">
        <img src="https://i.ibb.co/d21pGfk/Ndwc-removebg-preview.png" alt="Discover Nuxt 3" class="mr-5" />
        <div class="title text-black text-xl font-kanit  px-10 whitespace-nowrap ">
        <p class="orange-text text-3xl font-semibold text-orange-500">ระบบติดตามสถานการณ์น้ำผ่านกล้องโทรทัศน์วงจรปิด</p>
        <p class="text-lg font-medium">ศูนย์เตือนภัยพิบัติแห่งชาติ</p>
        <p class="text-lg font-medium">National Disaster Warning Center</p>
      </div>
      <div style="margin-left: 780px; display: flex;">
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton :ui="{ rounded: 'rounded-3xl' }" color="orange" class="rounded-3xl text-white px-4 py-2" label="ADMIN" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
      </div>
    </div>
  </div>
  <div class="menu flex items-center bg-black text-white  py-3">
  <div class="menu-items flex mr-auto">
    <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('HOME')">HOME</div>
    <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('STATION LIST')">STATION LIST</div>
    <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('WARROOM')">WARROOM</div>
    <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('STATION MANAGEMENT')">STATION MANAGEMENT</div>
    <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl	" @click="navigateTo('USER MANAGEMENT')">USER MANAGEMENT</div>
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
    <div class="text-orange-500">==========================================&nbsp;&nbsp;</div><p >Station Detail</p><div class="text-orange-500">&nbsp;&nbsp;==========================================</div>
</div>

<div class="flex justify-center">
  <div class="border-2 bg-white border-black p-1 w-5/12 rounded-xl h-10 mt-10">
    <p class="text-black font-bold text-xl text-center">Station Name</p>
    <div  class="mt-10">
      {{ product ? product.id : 'Loading...' }}
    </div>
    <div class="border-2 bg-white border-black p-5 w-12/12 h-96 rounded-xl mt-10">
    <p class="text-black font-bold text-xl text-center">Address</p>
    <div  class="mt-10">
    </div>
  </div>
  </div>
   
  <div class="border-2 bg-white border-black p-5  w-5/12  rounded-xl h-[400px] ml-10 mt-10">
    
    <div  class="mt-10">
      <img v-if="product && product.image" :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
      <p class="text-black font-bold text-xl  text-left">Play back</p>
      <p class="text-black  text-xl mt-2 ">Date <span class="text-black  text-xl text-center ml-[90px] ">Time</span></p>
      <div class="flex container">
        <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton color="white" icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />
    <template #panel="{ close }">
      <DatePicker v-model="date" @close="close" />
    </template>
  </UPopover>
  <input class="ml-5 bg-black border-1 border-black text-white rounded cursor-pointer hover:bg-gray-500 hover:border-1   hover:border-black" type="time" id="appt" name="appt" min="09:00" max="18:00" required />
  <button class="bg-green-500 rounded-md text-white  hover:bg-green-600 w-32  flex items-center justify-center  ml-96">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></span>
      Search
  </button>

      </div>
      <div  class="mt-10">
      <img v-if="product && product.image" :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
      <p class="text-black font-bold text-xl  text-left">Save</p>
      <p class="text-black  text-xl mt-2 ">Form <span class="text-black  text-xl text-center ml-[90px] "></span></p>
      <div class="flex container">
        <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton color="white" icon="i-heroicons-calendar-days-20-solid" :label="format(date2, 'd MMM, yyy')" />
    <template #panel="{ close }">
      <DatePicker v-model="date2" @close="close" />
    </template>
  </UPopover>
  <input class="ml-5 bg-black border-1 border-black text-white rounded cursor-pointer hover:bg-gray-500 hover:border-1   hover:border-black" type="time" id="appt" name="appt" min="09:00" max="18:00" required />
  <button class="bg-sky-500 rounded-md text-white hover:bg-sky-600 w-32  flex items-center justify-center  ml-96">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3-10H5V5h10z"/></svg></span>
      Save
  </button>

      </div>
    </div>
    <div  class="mt-5">
      <img v-if="product && product.image" :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
      <p class="text-black font-bold text-xl  text-left"></p>
      <p class="text-black  text-xl mt-2 ">To <span class="text-black  text-xl text-center ml-[90px] "></span></p>
      <div class="flex container">
        <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton color="white" icon="i-heroicons-calendar-days-20-solid" :label="format(date3, 'd MMM, yyy')" />
    <template #panel="{ close }">
      <DatePicker v-model="date3" @close="close" />
    </template>
  </UPopover>
  <input class="ml-5 bg-black border-1 border-black text-white rounded cursor-pointer hover:bg-gray-500 hover:border-1   hover:border-black" type="time" id="appt" name="appt" min="09:00" max="18:00" required />
  <button class="bg-blue-700 rounded-md text-white hover:bg-blue-800 w-32  flex items-center justify-center  ml-96">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
      Schedule
  </button>
</div>
    </div>       
    </div>
    
  </div>
</div>
<div class="mt-[178px]">
    <Footer />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { format } from 'date-fns'
import DatePicker from '/components/Datepicker.vue';
const date = ref(new Date())
const date2 = ref(new Date())
const date3 = ref(new Date())
const router = useRouter()
const product = ref<any>(null)

const fetchProductData = async () => {
  try {
    const productId = typeof router.currentRoute.value.params.product === 'string' ? router.currentRoute.value.params.product : ''
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    product.value = response.data 
  } catch (error) {
    console.error('Error fetching product data:', error)
  }
}

onMounted(() => {
  fetchProductData()
})

const items = [
  [{
    label: 'LOG OUT',
    color: 'orange',
    click: () => {
      window.location.href = '/';
    }
  }]
]

function navigateTo(page: string) {
  switch (page) {
    case 'HOME':
      router.push({ name: 'Home' }) 
      break
    case 'STATION LIST':
      router.push({ name: 'StationList' })
      break
    case 'WARROOM':
      router.push({ name: 'WarRoom' })
      break
    case 'STATION MANAGEMENT':
      router.push({ name: 'StationManagement' })
      break
    case 'USER MANAGEMENT':
      router.push({ name: 'UserManagement' })
      break
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
