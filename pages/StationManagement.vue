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
          <UButton  :ui="{ rounded: 'rounded-3xl' }" color="orange" class="rounded-3xl text-white px-4 py-2" label="ADMIN" trailing-icon="i-heroicons-chevron-down-20-solid" />
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
  
  
<div>
  <editstation />
</div>

<div class="mt-10">
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'


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
