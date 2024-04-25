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
    
  
  
  <div class="flex ml-32 text-black  mt-10  "> 
    <div class="text-3xl">Profile :</div>
    
    <USelectMenu v-model="selected" :options="people" size="xl" class=" px-6 mx-20 " />
  </div>

  
  <div class="text-3xl  mt-10 flex ml-32 text-black">Layout Template :</div>

  <div class="flex justify-center gap-10">
    <button class="bg-white-500 border-2 border-black text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0 " @click="showTwinView">
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
  </button>

  <button class="bg-white-500 border-2 border-black text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0" @click="showThreeView">
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
  </button>

  <button class="bg-white-500 grid grid-cols-2 border-2 border-black text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2  items-center justify-center mx-0 m-0" @click="showFourView">
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>   
  </button>

  <button class="bg-white-500 border-2 border-black grid grid-cols-3 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0" @click="showSixView">
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
    <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>   
  </button>
</div>

<div class="flex justify-center mt-5 ">
  <button class="bg-white-500 border-2 border-black grid grid-cols-3 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0" @click="showGutterView">
      <div class="border-2 border-black p-5 w-full h-full col-span-2 row-span-2 bg-orange-500"></div>  
      <div class="border-2 border-black p-5 w-1/2  bg-orange-500"></div>
      <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
      <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
      <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>  
      <div class="border-2 border-black p-5 w-1/2 bg-orange-500"></div>
    </button>

    <div>
    <button class="bg-white-500 border-2 border-black grid grid-cols-4 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0" @click="showEightView">
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

  <button class="bg-white-500 border-2 border-black grid grid-cols-3 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0" @click="showNineView">
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

    <button class="bg-white-500 border-2 border-black grid grid-cols-4 text-white px-4 py-2 hover:bg-orange-500 w-70 ml-2 flex items-center justify-center mx-0 m-0" @click="showTwogutterView">
      <div class="border-2 border-black p-5 w-full h-full col-span-2 row-span-2 bg-orange-500"></div>  
      <div class="border-2 border-black p-5 w-full h-full col-span-2 row-span-2 bg-orange-500"></div>
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


  
  <div class="text-3xl mt-20 flex ml-32 text-black ">Manage CCTV :</div>
  
  <div>
  <twinview v-if="currentView === 'twinview'" />
  <threeview v-else-if="currentView === 'threeview'" />
  <fourview v-else-if="currentView === 'fourview'" />
  <sixview v-else-if="currentView === 'sixview'" />
  <gutterview v-else-if="currentView === 'gutterview'" />
  <eightview v-else-if="currentView === 'eightview'" />
  <nineview v-else-if="currentView === 'nineview'" />
  <twogutterview v-else-if="currentView === 'twogutterview'" />
</div>

<div class="mt-[200px]">
    <Footer />
  </div>

  </template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import twinview from '@/components/twinview.vue'
import threeview from '@/components/threeview.vue'
import fourview from '@/components/fourview.vue'
import sixview from '@/components/sixview.vue'
import gutterview from '@/components/gutterview.vue'
import eightview from '@/components/eightview.vue'
import nineview from '@/components/nineview.vue'
import twogutterview from '@/components/twogutterview.vue'


const people = ['Profile 1', 'Profile 2', 'Profile 3', 'Profile 4', 'Profile 5']



const currentView = ref('')

function showTwinView() {
  currentView.value = 'twinview'
}
function showThreeView() {
  currentView.value = 'threeview'
}
function showFourView() {
  currentView.value = 'fourview'
}
function showSixView() {
  currentView.value = 'sixview'
}
function showGutterView() {
  currentView.value = 'gutterview'
}
function showEightView() {
  currentView.value = 'eightview'
}
function showNineView() {
  currentView.value = 'nineview'
}
function showTwogutterView() {
  currentView.value = 'twogutterview'
}

const selected = ref(people[0])
const items = [
  [{
    label: 'LOG OUT',
    color: 'orange',
    click: () => {
      window.location.href = '/';
    }
  }]
]

const router = useRouter()
  
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
        case 'Add':
  router.push({ name: 'Add' })
  currentView.value = 'manageCCTV'
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
  