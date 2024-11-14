<template>
  <div class="map-container">
    <GoogleMap
      :api-key="apiKey"
      :center="center"
      :zoom="2"
      :styles="mapStyles"
    >
      <template v-for="country in visitedCountries" :key="country">
        <GoogleMapPolygon
          :paths="getCountryBoundaries(country)"
          :options="{
            fillColor: '#f5576c',
            fillOpacity: 0.7,
            strokeWeight: 1
          }"
        />
      </template>
    </GoogleMap>
  </div>
</template>

<script setup>
import { GoogleMap, GoogleMapPolygon } from 'vue3-google-map';

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
const center = { lat: 20, lng: 0 };
const visitedCountries = ['HR', 'PH', 'AT', 'DE'];

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