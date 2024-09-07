<template>
    <section id="faq" class="relative py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <!-- FAQ Header -->
        <div class="text-left mb-8">
          <h2 class="text-3xl font-bold text-gray-800">FAQs</h2>
          <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
        </div>
  
        <!-- Full-width FAQ Cards, stacked vertically -->
        <div class="flex flex-col space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white p-6 rounded-lg w-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
            @click="toggleFaq(index)"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-800">{{ faq.question }}</h3>
              <!-- Toggle Button -->
              <button @click.stop="toggleFaq(index)" class="text-gray-600 focus:outline-none">
                <font-awesome-icon :icon="faq.isOpen ? 'chevron-up' : 'chevron-down'" />
              </button>
            </div>
            <!-- Answer -->
            <transition name="fade">
              <p v-if="faq.isOpen" class="mt-4 text-gray-600">{{ faq.answer }}</p>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const faqs = ref([
    { question: 'What is your professional background?', answer: 'I have experience in project management, solution architecture, and product management.', isOpen: false },
    { question: 'What technologies do you specialize in?', answer: 'I specialize in cloud computing, observability, and microservices architecture.', isOpen: false },
    { question: 'What is your most recent project?', answer: 'I am currently working as a Product Manager at Sentry.io, leading the development of web SDKs.', isOpen: false },
    { question: 'What languages do you speak?', answer: 'I am a native English speaker with B1-level proficiency in German.', isOpen: false }
  ]);
  
  function toggleFaq(index) {
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
  }
  </script>
  
  <style scoped>
  /* FAQ cards will be stacked vertically with full width */
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  
  .space-y-4 > * + * {
    margin-top: 1rem; /* Adds spacing between FAQ cards */
  }
  
  /* Transition for expanding/collapsing answer */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  /* Apply hover shadow to individual FAQ cards */
  .bg-white {
    background-color: white;
    border-radius: 1rem;
    box-shadow: none; /* Remove any unwanted shadow on the cards */
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  .hover\\:shadow-lg:hover {
    box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 8px 10px -4px rgba(0, 0, 0, 0.05);
  }
  </style>
  