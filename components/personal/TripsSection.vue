<template>
  <div class="mt-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Austria -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gray-200 w-full h-48"></div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">Austria</h4>
          <p class="text-gray-600 mb-4">Living in Vienna and exploring the Alps.</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>2015 - Present</span>
          </div>
        </div>
      </div>

      <!-- Macedonia Wedding -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gray-200 w-full h-48"></div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">Macedonian Wedding</h4>
          <p class="text-gray-600 mb-4">Traditional wedding celebration in Macedonia.</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>2016</span>
          </div>
        </div>
      </div>

      <!-- Croatia & Bosnia Road Trip -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gray-200 w-full h-48"></div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">Croatia & Bosnia Road Trip</h4>
          <p class="text-gray-600 mb-4">Exploring the Balkans by car, discovering hidden gems.</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>2018</span>
          </div>
        </div>
      </div>

      <!-- Slovenia Road Trip -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gray-200 w-full h-48"></div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">Slovenia Road Trip</h4>
          <p class="text-gray-600 mb-4">Discovering the natural beauty of Slovenia.</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>2019</span>
          </div>
        </div>
      </div>

      <!-- Philippines Trip 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="relative">
          <img 
            :src="`https://img.youtube.com/vi/ni486nez8pw/maxresdefault.jpg`"
            alt="Video thumbnail"
            class="w-full h-48 object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
            <font-awesome-icon :icon="['fab', 'youtube']" class="text-white text-4xl opacity-80" />
          </div>
        </div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">NOT the Coron Philippines You've Seen Before 🇵🇭</h4>
          <p class="text-gray-600 mb-4">Traveling with a vlogger friend</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>Winter 2022</span>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=ni486nez8pw" 
            target="_blank"
            class="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" class="mr-2" />
            Watch the trip video
          </a>
        </div>
      </div>

      <!-- Philippines Trip 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="relative">
          <img 
            :src="`https://img.youtube.com/vi/aVPDX7fYBvs/maxresdefault.jpg`"
            alt="Video thumbnail"
            class="w-full h-48 object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
            <font-awesome-icon :icon="['fab', 'youtube']" class="text-white text-4xl opacity-80" />
          </div>
        </div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">I Decided to Leave The Group 🇵🇭</h4>
          <p class="text-gray-600 mb-4">2nd video from travel vlogger friend</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>Winter 2022</span>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=aVPDX7fYBvs" 
            target="_blank"
            class="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" class="mr-2" />
            Watch the trip video
          </a>
        </div>
      </div>

      <!-- Maidult Beerfest -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gray-200 w-full h-48"></div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">Maidult Beerfest</h4>
          <p class="text-gray-600 mb-4">Traditional beer festival in Passau, Germany.</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>2023</span>
          </div>
        </div>
      </div>

      <!-- Croatia Summer -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="bg-gray-200 w-full h-48"></div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-2">Croatia</h4>
          <p class="text-gray-600 mb-4">Exploring the beautiful Dalmatian Coast and ancient cities.</p>
          <div class="flex items-center text-sm text-gray-500">
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            <span>Summer 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional setup needed
</script> 