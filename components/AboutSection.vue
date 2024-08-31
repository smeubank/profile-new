<template>
  <section id="about" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- About Header -->
      <div class="text-left mb-8">
        <h2 class="text-3xl font-bold text-gray-800">About</h2>
        <p class="mt-4 text-lg text-gray-700">
          Welcome to my personal website. Here, you can learn more about my professional experience, skills, and interests.
          This site serves as a portfolio and a platform to showcase my work and accomplishments.
        </p>
        <!-- Orange underline -->
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
      </div>

      <!-- Profile and Details Section -->
      <div class="flex flex-wrap mt-8">
        <!-- Profile Image -->
        <div class="w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0">
          <img src="/assets/img/profile-img.png" alt="Steven Eubank" class="rounded-lg w-full h-auto object-cover">
        </div>

        <!-- Details -->
        <div class="w-full lg:w-2/3">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Product Manager</h3>
          <div class="flex">
            <ul class="w-1/2 list-disc list-inside text-lg text-gray-700">
              <li>DoB: September 16, 1988</li>
              <li>Current City: Vienna, Austria</li>
              <li>Nationality: American</li>
            </ul>
            <ul class="w-1/2 list-disc list-inside text-lg text-gray-700">
              <li>MSc Info. Systems Management</li>
              <li>University: Auburn University</li>
              <li>PoB: Birmingham, AL, USA</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Certification and Permits Section -->
      <div class="mt-16">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Certifications and Permits</h3>
        <!-- Orange underline -->
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>

        <!-- Certifications and Permits Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 text-gray-700">
          <!-- Column 1 -->
          <div class="flex flex-col justify-between">
            <div class="flex items-start">
              <font-awesome-icon :icon="['fas', 'cloud']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
              <div>
                <span class="text-sm font-bold block">AWS Solution Architect Associate</span>
                <span class="text-xs block">2020</span>
              </div>
            </div>
            <div class="flex items-start mt-16"> <!-- Adjusted spacing -->
              <font-awesome-icon :icon="['fas', 'user-tie']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
              <div>
                <span class="text-sm font-bold block">Allianz Business Analyst Certification</span>
                <span class="text-xs block">2018</span>
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="flex flex-col justify-between">
            <div class="flex items-start">
              <font-awesome-icon :icon="['fas', 'database']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
              <div>
                <span class="text-sm font-bold block">Allianz Business System Certification Levels 1 & 2</span>
                <span class="text-xs block">2016 & 2017</span>
              </div>
            </div>
            <div class="flex items-start mt-16"> <!-- Adjusted spacing -->
              <font-awesome-icon :icon="['fas', 'comments']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
              <div>
                <span class="text-sm font-bold block">Native English & B1 German (ÖIF)</span>
                <span class="text-xs block">2020</span>
              </div>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="flex flex-col justify-between">
            <div class="flex items-start">
              <font-awesome-icon :icon="['fas', 'flag']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
              <span class="text-sm font-bold">US Citizen</span>
            </div>
            <div class="flex items-start mt-4">
              <font-awesome-icon :icon="['fas', 'id-card']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
              <span class="text-sm font-bold">Permanent Austrian Residence Permit "Daueraufenthalt – EU"</span>
            </div>
          </div>

          <!-- Column 4 -->
          <div class="flex items-start mt-16"> <!-- Adjusted spacing -->
            <font-awesome-icon :icon="['fas', 'car']" class="text-blue-600 mr-4" style="font-size: 1.5rem;" />
            <span class="text-sm font-bold">EU A/AM/B Class Driving License</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Custom styles to ensure alignment and spacing */
</style>
