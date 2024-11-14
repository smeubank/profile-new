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
            
            <!-- World Map Component Placeholder -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-12">
              <h3 class="text-xl font-semibold mb-4">Countries Visited</h3>
              <GoogleMap />
            </div>

            <!-- Trips Section -->
            <div class="mt-12">
              <h3 class="text-2xl font-semibold text-gray-800 mb-8">Trips</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Croatia Trip Card -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://via.placeholder.com/400x300"
                    alt="Croatia Sailing"
                    class="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div class="p-6">
                    <h4 class="text-xl font-bold mb-2">Croatia Sailing Trip</h4>
                    <p class="text-gray-600 mb-4">Placeholder text for the Croatia sailing trip description...</p>
                    <div class="flex items-center text-sm text-gray-500">
                      <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
                      <span>Summer 2023</span>
                    </div>
                  </div>
                </div>

                <!-- Coron Philippines Card -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://img.youtube.com/vi/ni486nez8pw/maxresdefault.jpg"
                    alt="Coron Philippines"
                    class="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div class="p-6">
                    <h4 class="text-xl font-bold mb-2">NOT the Coron Philippines You've Seen Before 🇵🇭</h4>
                    <p class="text-gray-600 mb-4">Traveling with my travel vlogger buddy</p>
                    <a 
                      href="https://www.youtube.com/watch?v=ni486nez8pw"
                      target="_blank"
                      class="inline-flex items-center text-blue-500 hover:text-blue-700"
                    >
                      Watch on YouTube
                      <font-awesome-icon :icon="['fas', 'external-link-alt']" class="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
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