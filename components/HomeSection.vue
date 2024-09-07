<template>
  <section id="home" class="relative h-screen w-full">
    <!-- Hero Image -->
    <img src="/assets/img/hero-bg.jpg" alt="Hero Image" class="absolute inset-0 object-cover w-full h-full z-0">

    <!-- Overlay for Tint -->
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

    <!-- Text Overlay -->
    <div class="relative z-20 flex items-start justify-center h-full pt-20">
      <h2 class="text-white text-4xl font-bold">I'm this guy < 1% of the time</h2>
    </div>

    <!-- Pulsing Text and Arrow at the Bottom -->
    <div
      class="absolute bottom-16 left-0 ml-4 text-left cursor-pointer text-gray-300 pulse-text z-30"
      @click="scrollToSection"
      v-show="isVisible"
    >
      <span class="text-2xl">Scroll down</span>
      <span class="text-2xl ml-2">▼</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// State to control the visibility of the pulsing text and arrow
const isVisible = ref(true);

// Function to scroll to the About section
const scrollToSection = () => {
  const aboutSection = document.querySelector('#about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Function to handle the scroll event for fading the text and arrow
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  // Show on mobile by default, fade only on desktop when scrolling
  isVisible.value = window.innerWidth <= 768 || scrollPosition < windowHeight * 0.8;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Pulsing animation for the text and arrow */
.pulse-text {
  animation: pulse 2s infinite;
  transition: opacity 0.5s ease-in-out;
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

/* Ensure the hero image fills the available space */
section {
  margin: 0;
  padding: 0;
}

/* Fix alignment for mobile devices */
@media (max-width: 768px) {
  .scroll-down-text {
    left: 0; /* Align to the left */
  }
}
</style>
