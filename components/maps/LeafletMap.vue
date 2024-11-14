<template>
  <div class="map-container">
    <ClientOnly>
      <l-map ref="map" :zoom="2" :center="[20, 0]" :options="{ minZoom: 2 }">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </l-map>
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// We'll import these dynamically on the client side only
let LMap, LTileLayer;

onMounted(async () => {
  if (process.client) {
    const leaflet = await import('leaflet');
    const vueLeaflet = await import('@vue-leaflet/vue-leaflet');
    
    // Import Leaflet CSS
    import('leaflet/dist/leaflet.css');
    
    LMap = vueLeaflet.LMap;
    LTileLayer = vueLeaflet.LTileLayer;
  }
});

const visitedCountries = ['HR', 'PH', 'AT', 'DE']; // Country codes
</script>

<style scoped>
.map-container {
  height: 500px;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style> 