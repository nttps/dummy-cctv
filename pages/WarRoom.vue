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
    <div class="text-orange-500">==========================================&nbsp;&nbsp;</div><p >WARROOM</p><div class="text-orange-500">&nbsp;&nbsp;==========================================</div>
</div>


<div class="flex justify-center  text-black  mt-10  "> 
  <div class="text-3xl">Profile</div>
  
  <USelectMenu v-model="selected" :options="people" size="xl" class=" px-6 mx-20 " />

  <button class="bg-blue-500 rounded-md text-white px-4 py-2 hover:bg-blue-600 w-32 ml-2 flex items-center justify-center mx-20 " @click="navigateTo('Add')">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

      </span>
    ADD
  </button>

  <button class="bg-green-500 rounded-md text-white px-4 py-2 hover:bg-green-600 w-32 ml-2 flex items-center justify-center mx-20">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

      </span>
    EDIT
  </button>
  <button class="bg-red-500 rounded-md text-white px-4 py-2 hover:bg-red-600 w-32 ml-2 flex items-center justify-center mx-20">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

      </span>
    DELETE
  </button>
  <button class="bg-yellow-500 rounded-md text-white px-4 py-2 hover:bg-yellow-600 w-70 ml-2 flex items-center justify-center mx-20">
    <span class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

      </span>
    FullScreen
  </button>
</div>
<div class="showview">
  <twinview v-if="$route.query.content === 'twinview'"></twinview>
  <threeview v-if="$route.query.content === 'threeview'"></threeview>
  <fourview v-if="$route.query.content === 'fourview'"></fourview>
  <sixview v-if="$route.query.content === 'sixview'"></sixview>
  <gutterview v-if="$route.query.content === 'gutterview'"></gutterview>
  <eightview v-if="$route.query.content === 'eightview'"></eightview>
  <nineview v-if="$route.query.content === 'nineview'"></nineview>
  <twogutterview v-if="$route.query.content === 'twogutterview'"></twogutterview>
</div>
<div class="mt-[535px]">
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted  } from 'vue'
import { useRouter } from 'vue-router'
const content = ref<string>('');
const router = useRouter()
const people = ['Profile 1', 'Profile 2', 'Profile 3', 'Profile 4', 'Profile 5']
const currentView = ref('')

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

onMounted(() => {
  const queryContent = router.currentRoute.value.query.content;

  if (typeof queryContent === 'string' && queryContent !== '') {
    
    content.value = queryContent;
  } else {
    content.value = ''; 
  }
});

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
