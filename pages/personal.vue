<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-grow lg:ml-64 p-4">
      <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto px-4 py-16">
          <!-- Section Title -->
          <h1 class="text-4xl font-bold text-gray-800 mb-8">Personal Life</h1>
          <div class="mt-2 h-1 bg-orange-500 w-3/4 mb-12"></div>

          <!-- Travel Section -->
          <section class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8">Travel</h2>
            
            <!-- Map Component -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
              <h3 class="text-xl font-semibold mb-4">Countries Visited</h3>
              <ClientOnly>
                <VectorMap />
              </ClientOnly>
            </div>

            <!-- Trips Section -->
            <TripsSection />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import VectorMap from '~/components/maps/VectorMap.vue'
import TripsSection from '~/components/personal/TripsSection.vue'
</script>

<style scoped>
/* Ensure the layout takes the full height of the screen */
.flex {
  min-height: 100vh;
}

@media (max-width: 1024px) {
  .flex-grow {
    margin-left: 0; /* Override large screen margin-left for small screens */
  }
}

.container {
  max-width: 1400px;
}
</style> 