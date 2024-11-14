<template>
  <div class="map-container">
    <vue-jvectormap
      :map="'world_mill'"
      :series="series"
      :markers="markers"
      :options="options"
    />
  </div>
</template>

<script setup>
import { VueJvectormap } from 'jvectormap-next';

const visitedCountries = {
  HR: '#f5576c',
  PH: '#f5576c',
  AT: '#f5576c',
  DE: '#f5576c'
};

const options = {
  backgroundColor: '#fff',
  regionStyle: {
    initial: {
      fill: '#ccc',
      stroke: '#fff',
      'stroke-width': 1
    },
    hover: {
      fill: '#f093fb'
    }
  }
};

const series = {
  regions: [{
    values: visitedCountries,
    attribute: 'fill'
  }]
};
</script>

<style scoped>
.map-container {
  height: 500px;
  width: 100%;
  border-radius: 0.5rem;
  background: white;
}
</style> 