<template>
    <div class="relative bg-gray-100">
      <!-- Content Wrapper with toggle for expanded state -->
      <div :class="{'max-h-48 overflow-hidden': !isExpanded}" class="transition-all duration-500 ease-in-out">
        <slot></slot>
      </div>
  
      <!-- Gradient overlay to obscure content when collapsed -->
      <div
        v-if="!isExpanded"
        class="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        :style="gradientStyle"
      ></div>
  
      <!-- Toggle Button for View More / View Less -->
      <div :class="{'bg-gray-200': !isExpanded, 'bg-gray-100': isExpanded}" class="flex justify-center mt-4 cursor-pointer py-2" @click="toggleExpanded">
        <div class="text-center">
          <span class="inline-block text-blue-600 font-medium hover:font-bold transition-transform duration-300 pulse">
            {{ isExpanded ? 'View Less' : 'View More' }}
          </span>
          <span class="ml-2 text-blue-600 pulse">
            {{ isExpanded ? '▲' : '▼' }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // State for expanded or collapsed
  const isExpanded = ref(false);
  
  // Toggle the expanded state
  const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value;
  };
  
  // Define the linear gradient styling for the plastic film effect
  const gradientStyle = computed(() => {
    return {
      backgroundImage: 'linear-gradient(to top, rgba(243,244,246, 0),rgba(243,244,246, 1))',
    };
  });
  </script>
  
  <style scoped>
  .pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Smooth rotation animation for the arrow */
  .rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.5s ease;
  }
  </style>
  