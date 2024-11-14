<template>
  <div 
    class="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 lg:translate-x-0"
    :class="sidebarClasses"
  >
    <div class="h-full overflow-y-auto">
      <!-- Mobile Toggle Button -->
      <button 
        @click="toggleSidebar"
        class="lg:hidden fixed top-4 left-4 p-2 rounded-md hover:bg-gray-800"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="text-xl text-white" />
      </button>

      <!-- Profile Section -->
      <div class="flex flex-col items-center p-6">
        <img 
          src="/assets/img/profile-img.png" 
          alt="Profile" 
          class="w-32 h-32 rounded-full object-cover mb-4"
        >
        <h2 class="text-xl font-bold text-white">Steven Eubank</h2>
        <p class="text-gray-400">Product Manager</p>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-8">
        <NuxtLink 
          v-for="(item, index) in menuItems" 
          :key="index"
          :to="item.href"
          class="flex items-center px-6 py-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200"
          :class="{ 'text-white bg-gray-800': item.active }"
        >
          <font-awesome-icon :icon="item.icon" class="mr-3" />
          {{ item.text }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isOpen = ref(false);
const isMobile = ref(false);

const menuItems = [
  { text: 'Home', href: '/#home', icon: ['fas', 'home'] },
  { text: 'About', href: '/#about', icon: ['fas', 'user'] },
  { text: 'Resume', href: '/#resume', icon: ['fas', 'file-alt'] },
  { text: 'Content', href: '/#content', icon: ['fas', 'newspaper'] },
  { text: 'FAQ', href: '/#faq', icon: ['fas', 'question-circle'] },
  { text: 'Contact Me', href: '/#contact', icon: ['fas', 'envelope'] },
  { text: 'Personal Life', href: '/personal', icon: ['fas', 'heart'] }
];

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeSidebar = () => {
  isOpen.value = false;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024;
};

const sidebarClasses = computed(() => {
  return [
    isOpen.value ? 'translate-x-0' : '-translate-x-full'
  ];
});

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>
