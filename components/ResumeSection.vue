<template>
  <section id="resume" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- Resume Header -->
      <div class="text-left mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Résumé</h2>
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
      </div>

      <!-- Columns for Professional Experience and Education -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Professional Experience -->
        <div>
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h3>
          <div class="relative">
            <div class="absolute left-4 top-0 h-full w-1 bg-orange-700"></div> <!-- Timeline Line -->
            <div v-for="(item, index) in professionalExperience" :key="index" class="mb-8 pl-12">
              <div class="relative flex items-center">
                <div class="absolute left-[-1.25rem] h-6 w-6 rounded-full bg-gray-100 border-2 border-orange-700"></div>
                <h4 class="text-lg font-bold ml-8">Professional Title {{ index + 1 }}</h4>
              </div>
              <div class="bg-blue-100 p-2 mt-2 inline-block">
                <p class="text-center text-sm">August 2021 - Present</p>
              </div>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="mt-1 text-sm italic">
                Company Name
              </p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Education</h3>
          <div class="relative">
            <div class="absolute left-4 top-0 h-full w-1 bg-orange-700"></div> <!-- Timeline Line -->
            <div v-for="(item, index) in education" :key="index" class="mb-8 pl-12">
              <div class="relative flex items-center">
                <div class="absolute left-[-1.25rem] h-6 w-6 rounded-full bg-gray-100 border-2 border-orange-700"></div>
                <h4 class="text-lg font-bold ml-8">Degree Title {{ index + 1 }}</h4>
              </div>
              <div class="bg-blue-100 p-2 mt-2 inline-block">
                <p class="text-center text-sm">September 2015 - June 2019</p>
              </div>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="mt-1 text-sm italic">
                University Name
              </p>
            </div>
          </div>

          <!-- Academic Work Experience -->
          <h3 class="text-3xl font-bold text-gray-800 mb-4 mt-16">Academic Work Experience</h3>
          <div class="relative">
            <div class="absolute left-4 top-0 h-full w-1 bg-orange-700"></div> <!-- Timeline Line -->
            <div v-for="(item, index) in academicWorkExperience" :key="index" class="mb-8 pl-12">
              <div class="relative flex items-center">
                <div class="absolute left-[-1.25rem] h-6 w-6 rounded-full bg-gray-100 border-2 border-orange-700"></div>
                <h4 class="text-lg font-bold ml-8">Academic Work Title {{ index + 1 }}</h4>
              </div>
              <div class="bg-blue-100 p-2 mt-2 inline-block">
                <p class="text-center text-sm">June 2017 - August 2019</p>
              </div>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="mt-1 text-sm italic">
                Institution Name
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- The Stuff I am not supposed to put in Resumes anymore -->
      <div class="mt-16">
        <h3 class="text-3xl font-bold text-gray-800">The Stuff I am not supposed to put in Resumes anymore</h3>
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
        <div class="flex items-center justify-start mt-2 cursor-pointer" @click="toggleExpand">
          <font-awesome-icon :icon="isExpanded ? 'chevron-down' : 'chevron-right'" class="text-gray-800 transition-transform duration-500" :class="{'rotate-90': isExpanded}" />
          <span class="ml-2 text-sm text-gray-800 font-bold">expand me to learn more</span>
        </div>
        <transition name="fade">
          <div v-if="isExpanded" class="relative mt-8">
            <div class="absolute left-4 top-0 h-full w-1 bg-orange-700"></div> <!-- Timeline Line -->
            <div v-for="(item, index) in hiddenExperience" :key="index" class="mb-8 pl-12">
              <div class="relative flex items-center">
                <div class="absolute left-[-1.25rem] h-6 w-6 rounded-full bg-gray-100 border-2 border-orange-700"></div>
                <h4 class="text-lg font-bold ml-8">Hidden Job Title {{ index + 1 }}</h4>
              </div>
              <div class="bg-blue-100 p-2 mt-2 inline-block">
                <p class="text-center text-sm">Date Range</p>
              </div>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="mt-1 text-sm italic">
                Company Name
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const professionalExperience = Array(5).fill({})
const education = Array(5).fill({})
const academicWorkExperience = Array(5).fill({})
const hiddenExperience = Array(5).fill({})

const isExpanded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
/* Styling adjustments to position the line and circle */
.relative::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  background-color: #c05621; /* Darker orange */
}

h4 {
  color: #2d3748; /* Text color */
}

.bg-blue-100 {
  background-color: #ebf8ff; /* Light blue background */
}

.text-gray-800 {
  color: #2d3748; /* Main text color */
}

.border-orange-700 {
  border-color: #c05621; /* Darker orange for circles */
}

.inline-block {
  width: auto; /* Shrink to fit the text */
}

.absolute.left-[-1.25rem] {
  transform: translateX(-50%);
}

/* Transition for expanding and collapsing */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Arrow rotation animation */
.rotate-90 {
  transform: rotate(90deg);
}
</style>
