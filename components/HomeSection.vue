<template>
  <section id="home" class="relative h-screen w-full">
    <!-- Hero Image -->
    <img src="/assets/img/hero-bg.jpg" alt="Hero Image" class="absolute inset-0 object-cover w-full h-full z-0">

    <!-- Overlay for Tint -->
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

    <!-- Text Overlay -->
    <div class="relative z-20 flex items-start justify-center h-full pt-20"> <!-- Moved text up by 25% -->
      <h2 class="text-white text-4xl font-bold">I'm this guy < 1% of the time</h2>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Ensure the hero image fills the available space */
section {
  margin: 0;
  padding: 0;
}
</style>
