<template>
    <div class="map-container">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="center"
        @mounted="handleMapMounted"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />

      
      <LMarker :lat-lng="[14.026473979411982, 100.53880218352005]">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://i.ibb.co/sQxTX9w/cctv-camera.png"
        />
        <LPopup class="font-bold">
          <p>1 - สะพานปทุมธานี 1</p>
          <p>ที่ตั้ง: ถนน รังสิต-ปทุมธานี ตำบล บางปรอก อำเภอ เมืองปทุมธานี จังหวัด ปทุมธานี 12000</p> 
          <p>ละติจูด: 14.026473979411982</p> 
          <p>ลองจิจูด: 100.53880218352005</p> 
          <p>สถานะ: ออนไลน์</p> 
          <UButton class="ml-[120px]" to="stations/1" color="white">View</UButton>
        </LPopup>
      </LMarker>

      <LMarker :lat-lng="[13.814394156403473, 100.51414694640218]">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://i.ibb.co/sQxTX9w/cctv-camera.png"
        />
        <LPopup class="font-bold">
          <p>2 - สะพานพระราม 7</p>
          <p>ที่ตั้ง: ถนน วงศ์สว่าง แขวงวงศ์สว่าง เขต บางซื่อ จังหวัด กรุงเทพมหานคร 10800</p> 
          <p>ละติจูด: 13.814394156403473</p> 
          <p>ลองจิจูด: 100.51414694640218</p> 
          <p>สถานะ: ออนไลน์</p> 
          <UButton class="ml-[120px]" to="stations/2" color="white">View</UButton>
        </LPopup>
      </LMarker>

      <LMarker :lat-lng="[13.633130188993283, 100.53822982182666]">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://i.ibb.co/sQxTX9w/cctv-camera.png"
        />
        <LPopup class="font-bold">
          <p>3 - สะพานกาญจนาภิเษก</p>
          <p>ที่ตั้ง: อำเภอ พระประแดง จังหวัด สมุทรปราการ 10130</p> 
          <p>ละติจูด: 13.633130188993283</p> 
          <p>ลองจิจูด: 100.53822982182666</p> 
          <p>สถานะ: ออนไลน์</p> 
          <UButton class="ml-[120px]" to="stations/3" color="white">View</UButton>
        </LPopup>
      </LMarker>
      
      <LMarker :lat-lng="[13.71927716076404, 100.51192613117395]">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://i.ibb.co/sQxTX9w/cctv-camera.png"
        />
        <LPopup class="font-bold">
          <p>4 - สะพานสมเด็จพระเจ้าตากสินมหาราช</p>
          <p>ที่ตั้ง: ถนน กรุงธนบุรี แขวง คลองต้นไทร เขต คลองสาน จังหวัด กรุงเทพมหานคร 10600</p> 
          <p>ละติจูด: 13.71927716076404</p> 
          <p>ลองจิจูด: 100.51192613117395</p> 
          <p>สถานะ: ออนไลน์</p> 
          <UButton class="ml-[120px]" to="stations/4" color="white">View</UButton>
        </LPopup>
      </LMarker>

      <LMarker :lat-lng="[13.73817795231806, 100.59857500749013]">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://i.ibb.co/sQxTX9w/cctv-camera.png"
        />
        <LPopup class="font-bold">
          <p>5 - สะพานคลองตัน</p>
          <p>ที่ตั้ง: ถนน สุขุมวิท 71 แขวง คลองตันเหนือ เขต วัฒนา จังหวัด กรุงเทพมหานคร 10110</p> 
          <p>ละติจูด: 13.73817795231806</p> 
          <p>ลองจิจูด: 100.59857500749013</p> 
          <p>สถานะ: ออนไลน์</p> 
          <UButton class="ml-[120px]" to="stations/5" color="white">View</UButton>
        </LPopup>
      </LMarker>


      </LMap>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const zoom = ref(9)
  const center = ref([13.736717, 100.523186])
  const dynamicSize = [38, 38]; 
  
  </script>
  
  <style scoped>
  .map-container {
    display: flex;
    justify-content: center;
    margin-left: 100px;
    margin-top: 30px;
    width: 1700px;
    height: 650px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
  </style>
  