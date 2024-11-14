<template>
  <div class="map-container">
    <GoogleMap
      :api-key="apiKey"
      :center="center"
      :zoom="2"
      :styles="mapStyles"
    >
    </GoogleMap>
  </div>
</template>

<script setup>
import { GoogleMap } from 'vue3-google-map';

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
const center = { lat: 20, lng: 0 };

const mapStyles = [
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }]
  }
];
</script>

<style scoped>
.map-container {
  height: 500px;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style> 