<template>
  <section id="about" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- About Header -->
      <div class="text-left mb-8">
        <h2 class="text-3xl font-bold text-gray-800">About</h2>
        <!-- Orange underline -->
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
      </div>

      <!-- Profile Image and Text Side-by-Side on Larger Screens -->
      <div class="flex flex-wrap lg:flex-nowrap items-start mt-8">
        <!-- Profile Image (Takes full width on smaller screens) -->
        <div class="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img src="/assets/img/profile-img.png" alt="Steven Eubank" class="rounded-lg w-full h-auto object-cover">
        </div>

        <!-- About Text (Next to the image on larger screens) -->
        <div class="w-full lg:w-2/3 lg:ml-8">
          <p class="text-lg text-gray-700">
            Welcome to my personal website. Here, you can learn more about my professional experience, skills, and interests.
            This site serves as a portfolio and a platform to showcase my work and accomplishments. I have worked across various industries, and my journey has led me to specialize in project management and solution architecture.
            With a strong technical foundation, I enjoy leading teams and implementing innovative solutions. I am currently based in Vienna, Austria, but my work and interests span across borders.
          </p>
        </div>
      </div>

      <!-- Grid Layout (Certifications and Permits) -->
      <div class="mt-16">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Certifications and Permits</h3>
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'cloud']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">AWS Solution Architect Associate</span>
              <span class="text-xs block">2020</span>
            </div>
          </div>
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'user-tie']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">Allianz Business Analyst Certification</span>
              <span class="text-xs block">2018</span>
            </div>
          </div>
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'database']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">Allianz Business System Certification Levels 1 & 2</span>
              <span class="text-xs block">2016 & 2017</span>
            </div>
          </div>
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'comments']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">Native English & B1 German (ÖIF)</span>
              <span class="text-xs block">2020</span>
            </div>
          </div>
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'flag']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">US Citizen</span>
              <span class="text-xs block">Birth</span>
            </div>
          </div>
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'id-card']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">Permanent Austrian Residence Permit "Daueraufenthalt – EU"</span>
              <span class="text-xs block">2019-</span>
            </div>
          </div>
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'car']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">EU A/AM/B Class Driving License</span>
            </div>
          </div>
          <!-- New Item: Other Misc Certs -->
          <div class="p-4 bg-white shadow-md rounded-lg flex items-center">
            <font-awesome-icon :icon="['fas', 'file-alt']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <div>
              <span class="text-sm font-bold block">Other Misc Certs Corpos Made Me Do</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Add custom styles if needed */
</style>
