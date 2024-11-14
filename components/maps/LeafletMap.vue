<template>
  <div class="map-container">
    <l-map ref="map" :zoom="2" :center="[20, 0]" :options="{ minZoom: 2 }">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <l-geo-json
        :geojson="countriesGeoJSON"
        :options="geoJSONOptions"
      />
    </l-map>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet';

const visitedCountries = ['HR', 'PH', 'AT', 'DE']; // Country codes

const geoJSONOptions = {
  style: (feature) => ({
    fillColor: visitedCountries.includes(feature.properties.ISO_A2) ? '#f5576c' : '#ccc',
    weight: 1,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.7
  })
};
</script>

<style scoped>
.map-container {
  height: 500px;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style> 