<template>
  <div class="map-container">
    <div ref="mapDiv" class="map"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'ArcGISMap',
  mounted() {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/GraphicsLayer', 'esri/symbols/PictureMarkerSymbol', 'esri/Graphic'], { css: true })
      .then(([Map, MapView, GraphicsLayer, PictureMarkerSymbol, Graphic]) => {
        const map = new Map({
          basemap: 'topo-vector',
        });

        const view = new MapView({
          container: this.$refs.mapDiv,
          map: map,
          center: [100.53880218352005, 14.026473979411982],
          zoom: 5,
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        const bridgePoint = {
          type: 'point',
          longitude: 100.53880218352005,
          latitude: 14.026473979411982
        };

        const bridgeMarker = new PictureMarkerSymbol({
          url: 'https://i.ibb.co/sQxTX9w/cctv-camera.png',
          width: '24px',
          height: '24px'
        });

        const bridgeGraphic = new Graphic({
  geometry: {
    type: 'point',
    longitude: 100.53880218352005,
    latitude: 14.026473979411982
  },
  symbol: bridgeMarker,
  attributes: {
    ชื่อ: 'สะพานปทุมธานี 1',
    ที่ตั้ง: '2GGQ+9GW ถนน รังสิต-ปทุมธานี ตำบล บางปรอก อำเภอเมืองปทุมธานี ปทุมธานี 12000 ',
    ละติจูด: 14.026473979411982, // ใช้ภาษาไทยในชื่อ attribute
    ลองจิจูด: 100.53880218352005, // ใช้ภาษาไทยในชื่อ attribute
    สถานะ: 'ออนไลน์',
  },
  popupTemplate: {
    title: '{ชื่อ}',
    content: `
      <div class="custom-tooltip">
        <p>ที่ตั้ง: {ที่ตั้ง}</p> 
        <p>ละติจูด: {ละติจูด}</p> <!-- ใช้ชื่อ attribute ภาษาไทย -->
        <p>ลองจิจูด: {ลองจิจูด}</p> <!-- ใช้ชื่อ attribute ภาษาไทย -->
        <p>สถานะ: {สถานะ}</p> 
      </div>
    `,
    actions: [{
      id: 'viewButton',
      title: 'View',
      className: 'esri-icon-right-arrow-circled'
    }]
  }
});

        graphicsLayer.add(bridgeGraphic);

        view.when(() => {
          view.popup.dockOptions = {
            buttonEnabled: true,
            position: 'auto'
          };
        });

        view.popup.on('trigger-action', (event) => {
          if (event.action.id === 'viewButton') {
            this.goTostationdetail();
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  beforeDestroy() {
    if (this.mapView) {
      this.mapView.destroy();
    }
  },
  methods: {
    goTostationdetail() {
      console.log('Go to station detail clicked');
       navigateTo('/stations/view')
    }
  }
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.map {
  width: 1700px;
  height: 650px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.custom-tooltip {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* จัดตำแหน่งสำหรับปุ่มและเนื้อหาอยู่ตรงกลาง */
}

.custom-tooltip p {
  margin: 5px 0;
}

.custom-tooltip button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: auto; /* ให้ปุ่มเลื่อนไปอยู่ด้านล่างของเนื้อหา */
  align-self: center; /* จัดให้ปุ่มอยู่ตรงกลาง */
}
</style>
