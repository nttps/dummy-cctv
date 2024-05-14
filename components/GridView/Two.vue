<template>
    <div class="twogutterview">
      <div class="flex justify-center">
            <div class="flex flex-row border-2 gap-x-0 gap-y-0  border-black p-5 w-5/12 mt-10 grid grid-cols-4  bg-orange-500">
              <div class="border-2 border-black p-5 w-2/2 w-full h-full col-span-2 row-span-2 bg-orange-500" :class="{ 'bg-black border-black': isAddClicked }"></div>   
              <div class="border-2 border-white p-5 w-2/2 w-full h-full col-span-2 row-span-2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked }">
                <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked" @click="handleAddClick">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked">ADD</div>
              </div> 
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked2 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked2 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked2" @click="handleAddClick2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked2">ADD</div>
        </div>   
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked3 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked3 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked3" @click="handleAddClick3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked3">ADD</div>
        </div> 
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked4 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked4 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked4" @click="handleAddClick4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked4">ADD</div>
        </div> 
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked5 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked5 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked5" @click="handleAddClick5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked5">ADD</div>
        </div>   
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked6 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked6 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked6" @click="handleAddClick6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked6">ADD</div>
        </div> 
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked7 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked7 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked7" @click="handleAddClick7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked7">ADD</div>
        </div> 
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked8 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked8 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked8" @click="handleAddClick8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked8">ADD</div>
        </div> 
              <div class="border-2 border-white p-5 w-2/2 bg-black text-white" :class="{ 'bg-black border-black': isAddClicked9 }">
          <button class="bg-orange-500 rounded-full text-white  hover:bg-orange-600    flex items-center justify-center " :class="{ 'bg-black border-black': isAddClicked9 }">
          <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" v-if="!isAddClicked9" @click="handleAddClick9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span></button>
          <div class="ml-1 mt-1" v-if="!isAddClicked9">ADD</div>
        </div>   
            </div>
          </div>
        
          <div style="margin-left: 535px;" class="flex text-black mb-10  mt-10 " v-if="!isWarRoomPage"> 
    
          <button class="bg-green-500 rounded-md text-white px-4 py-2 hover:bg-green-600 w-32 ml-2 flex items-center justify-center mx-20" @click="saveDataAndNavigate()">
      <span class="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

  
        </span>
      Save
    </button>
    <button class="bg-gray-500 rounded-md text-white px-4 py-2 hover:bg-gray-600 w-70 ml-2 flex items-center justify-center mx-20" @click="navigateTo('goback')">
      <span class="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </span>
      Cancel
    </button>
  </div>
</div> 


</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import store from '~/stores'
const route = useRoute()
const router = useRouter()
const isWarRoomPage = ref(false)
const isAddClicked = ref(false)
const isAddClicked2 = ref(false)
const isAddClicked3 = ref(false)
const isAddClicked4 = ref(false)
const isAddClicked5 = ref(false)
const isAddClicked6 = ref(false)
const isAddClicked7 = ref(false)
const isAddClicked8 = ref(false)
const isAddClicked9 = ref(false)



onMounted(() => {
  isWarRoomPage.value = route.name === 'WarRoom'
  const isAddClickedFromQuery = route.query.isAddClicked;
  isAddClicked.value = isAddClickedFromQuery === 'true';
  const isAddClicked2FromQuery = route.query.isAddClicked2;
  isAddClicked2.value = isAddClicked2FromQuery === 'true';
  const isAddClicked3FromQuery = route.query.isAddClicked3;
  isAddClicked3.value = isAddClicked3FromQuery === 'true';
  const isAddClicked4FromQuery = route.query.isAddClicked4;
  isAddClicked4.value = isAddClicked4FromQuery === 'true';
  const isAddClicked5FromQuery = route.query.isAddClicked5;
  isAddClicked5.value = isAddClicked5FromQuery === 'true';
  const isAddClicked6FromQuery = route.query.isAddClicked6;
  isAddClicked6.value = isAddClicked6FromQuery === 'true';
  const isAddClicked7FromQuery = route.query.isAddClicked7;
  isAddClicked7.value = isAddClicked7FromQuery === 'true';
  const isAddClicked8FromQuery = route.query.isAddClicked8;
  isAddClicked8.value = isAddClicked8FromQuery === 'true';
  const isAddClicked9FromQuery = route.query.isAddClicked9;
  isAddClicked9.value = isAddClicked9FromQuery === 'true';
});
function saveDataAndNavigate() {
  router.push({ name: 'WarRoom', query: 
  { content: 'twogutterview', isAddClicked: isAddClicked.value.toString() ,
   isAddClicked2: isAddClicked2.value.toString(),
   isAddClicked3: isAddClicked3.value.toString(),
   isAddClicked4: isAddClicked4.value.toString(),
   isAddClicked5: isAddClicked5.value.toString(),
   isAddClicked6: isAddClicked6.value.toString(),
   isAddClicked7: isAddClicked7.value.toString(),
   isAddClicked8: isAddClicked8.value.toString(),
   isAddClicked9: isAddClicked9.value.toString(),
    } });

}


function navigateTo(page: string) {
  switch (page) {
    case 'WarRoom':
      router.push({ name: 'WarRoom' });
      break;
    case 'goback':
      router.push({ name: 'WarRoom' });
      break;
  }
}


function handleAddClick() {
  isAddClicked.value = true;
  store.dispatch('toggleAddClicked', true);
}

function handleAddClick2() {
  isAddClicked2.value = true;
  store.dispatch('toggleAddClicked2', true);
}

function handleAddClick3() {
  isAddClicked3.value = true;
  store.dispatch('toggleAddClicked3', true);
}

function handleAddClick4() {
  isAddClicked4.value = true;
  store.dispatch('toggleAddClicked4', true);
}

function handleAddClick5() {
  isAddClicked5.value = true;
  store.dispatch('toggleAddClicked5', true);
}

function handleAddClick6() {
  isAddClicked6.value = true;
  store.dispatch('toggleAddClicked6', true);
}

function handleAddClick7() {
  isAddClicked7.value = true;
  store.dispatch('toggleAddClicked7', true);
}

function handleAddClick8() {
  isAddClicked8.value = true;
  store.dispatch('toggleAddClicked8', true);
}

function handleAddClick9() {
  isAddClicked9.value = true;
  store.dispatch('toggleAddClicked9', true);
}
</script>

<style scoped>
.twogutterview .border-black {
  border-color: black;
}

.twogutterview .bg-black {
  background-color: black;
}
</style>