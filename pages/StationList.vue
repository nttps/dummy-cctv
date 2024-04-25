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
      <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" @click="navigateTo('HOME')">HOME</div>
      <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" @click="navigateTo('STATION LIST')">STATION LIST</div>
      <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" @click="navigateTo('WARROOM')">WARROOM</div>
      <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" @click="navigateTo('STATION MANAGEMENT')">STATION MANAGEMENT</div>
      <div class="menu-item ml-32 cursor-pointer hover:text-orange-500 text-3xl" @click="navigateTo('USER MANAGEMENT')">USER MANAGEMENT</div>
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
    <div class="text-orange-500">==========================================&nbsp;&nbsp;</div><p>Station List</p><div class="text-orange-500">&nbsp;&nbsp;==========================================</div>
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

  <div class="container flex items-center ml-[165px]">
    <div class="user-cards flex flex-wrap justify-center mt-5">
      <div v-for="(product, index) in products.slice((page - 1) * pageCount, page * pageCount)" :key="index" class="user-card w-[calc(40%-2rem)]  p-4 m-4 border rounded-xl flex items-center shadow-xl shadow-black/20 bg-[#E7E7E7]">
        <div>
          <div class="w-[200px] h-[150px] object-cover overflow-hidden">
            <Button @click="navigateTo('stationdetail', product)">
              <img :src="product.image" :alt="product.title" class="w-full h-full mt-3 object-cover transform hover:border-2 border-red-500">
            </Button>
          </div>
        </div>
        <div class="ml-5">
          <div class="text-lg text-black">{{ product.id }}</div>
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
    @change="handlePageChange"
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

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const products = ref([])
const searchTerm = ref('')
const sort = ref({ column: 'id', direction: 'asc' })
const page = ref(1)
const pageCount = ref(10)
const pageTotal = ref(20)

const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

const fetchData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;
    pageTotal.value = response.data.length;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

onMounted(() => {
  fetchData()
})

const router = useRouter()

const navigateTo = (page, product) => {
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
    case 'stationdetail':
      router.push({ name: 'stationdetail', params: { product: JSON.stringify(product) } })
      break
  }
}

const search = () => {
  page.value = 1
}

const items = [
  [{
    label: 'LOG OUT',
    color: 'orange',
    click: () => {
      window.location.href = '/';
    }
  }]
]
const language = ref('th')

const changeLanguage = (lang) => {
  language.value = lang
}

const handlePageChange = (newPage) => {
  page.value = newPage;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

body {
  background-color: #F7FAFC;
  font-family: 'Kanit', sans-serif;
}
</style>
