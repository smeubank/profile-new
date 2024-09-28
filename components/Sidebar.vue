<template>
  <div>
    <!-- Hamburger Button -->
    <button
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-60 block lg:hidden p-2 bg-gray-800 text-white rounded focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Overlay -->
    <div
      v-if="isOpen && isMobile"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <div
      :class="sidebarClasses"
      class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col items-center py-8 transition-transform duration-300 ease-in-out z-50"
      @click.stop
    >
      <!-- Sidebar Content -->
      <img
        src="/assets/img/profile-img.png"
        alt="Steven Eubank"
        class="rounded-full w-28 h-28 mb-4"
      />
      <h1 class="text-2xl font-bold">Steven Eubank</h1>

      <!-- Social Icons -->
      <div class="grid grid-cols-3 gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/steven-eubank-72a2316b/"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="text-white" />
        </a>
        <a
          href="https://github.com/smeubank/"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="text-white" />
        </a>
        <a
          href="https://www.instagram.com/steveneubank/"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-white" />
        </a>
        <a
          href="https://www.strava.com/athletes/67945097"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <font-awesome-icon :icon="['fab', 'strava']" class="text-white" />
        </a>
        <a
          href="https://www.facebook.com/steven.m.eubank"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" class="text-white" />
        </a>
        <a
          href="https://twitter.com/steven_boKnows"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" class="text-white" />
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-8 w-full px-6">
        <ul class="space-y-4">
          <li>
            <a
              @click="closeSidebar"
              href="#home"
              class="flex items-center space-x-2 hover:text-blue-300"
            >
              <font-awesome-icon :icon="['fas', 'house']" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              @click="closeSidebar"
              href="#about"
              class="flex items-center space-x-2 hover:text-blue-300"
            >
              <font-awesome-icon :icon="['fas', 'user']" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              @click="closeSidebar"
              href="#resume"
              class="flex items-center space-x-2 hover:text-blue-300"
            >
              <font-awesome-icon :icon="['fas', 'file-alt']" />
              <span>Resume</span>
            </a>
          </li>
          <li>
            <!-- Content Section with Submenu -->
            <div>
              <a
                @click="toggleContentSubmenu"
                class="flex items-center space-x-2 hover:text-blue-300 cursor-pointer"
              >
                <font-awesome-icon :icon="['fas', 'stream']" />
                <span>Content</span>
                <font-awesome-icon
                  :icon="contentSubmenuOpen ? 'chevron-up' : 'chevron-down'"
                  class="ml-auto"
                />
              </a>
              <ul v-if="contentSubmenuOpen" class="ml-6 mt-2 space-y-2">
                <li>
                  <a
                    @click="closeSidebar"
                    href="#blogs"
                    class="flex items-center space-x-2 hover:text-blue-300"
                  >
                    <font-awesome-icon :icon="['fas', 'newspaper']" />
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a
                    @click="closeSidebar"
                    href="#events"
                    class="flex items-center space-x-2 hover:text-blue-300"
                  >
                    <font-awesome-icon :icon="['fas', 'bullhorn']" />
                    <span>Events</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              @click="closeSidebar"
              href="#contact"
              class="flex items-center space-x-2 hover:text-blue-300"
            >
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const isOpen = ref(false);
const isMobile = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeSidebar = () => {
  isOpen.value = false;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024; // Adjust breakpoint as needed
};

const sidebarClasses = computed(() => {
  return [
    isOpen.value ? 'translate-x-0' : '-translate-x-full',
    'lg:translate-x-0', // Ensure sidebar is visible on larger screens
  ];
});

// Handle screen resize events
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});

// Content submenu
const contentSubmenuOpen = ref(false);

const toggleContentSubmenu = () => {
  contentSubmenuOpen.value = !contentSubmenuOpen.value;
};
</script>

<style scoped>
/* Custom styles for the sidebar and hamburger menu */

/* Adjust z-index values */
button {
  z-index: 60;
}

/* Overlay z-index is set via inline class (z-40) */

/* Active link styling */
.text-blue-300 {
  font-weight: bold;
  transition: color 0.3s ease;
}

/* Additional styles if needed */
</style>
