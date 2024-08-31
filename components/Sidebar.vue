<template>
  <div class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col items-center py-8">
    <img src="/assets/img/profile-img.png" alt="Steven Eubank" class="rounded-full w-28 h-28 mb-4"> <!-- Increased size by 20% -->
    <h1 class="text-2xl font-bold">Steven Eubank</h1>

    <!-- Social Icons -->
    <div class="flex flex-wrap justify-center mt-4 space-x-4">
      <a href="https://www.linkedin.com/in/steven-eubank-72a2316b/" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-white" />
      </a>
      <a href="https://github.com/smeubank/" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition">
        <font-awesome-icon :icon="['fab', 'github']" class="text-white" />
      </a>
      <a href="https://www.instagram.com/steveneubank/" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition">
        <font-awesome-icon :icon="['fab', 'instagram']" class="text-white" />
      </a>
    </div>
    <div class="flex justify-center mt-4 space-x-6"> <!-- Reduced space between Facebook and Twitter icons -->
      <a href="https://www.facebook.com/steven.m.eubank" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition">
        <font-awesome-icon :icon="['fab', 'facebook']" class="text-white" />
      </a>
      <a href="https://twitter.com/steveneubank" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition">
        <font-awesome-icon :icon="['fab', 'twitter']" class="text-white" />
      </a>
    </div>

    <!-- Navigation Links -->
    <nav class="mt-8 w-full px-6">
      <ul class="space-y-4">
        <li>
          <a href="#main" class="flex items-center space-x-2 hover:text-blue-300">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span>Main</span>
          </a>
        </li>
        <li>
          <a href="#about" class="flex items-center space-x-2 hover:text-blue-300">
            <font-awesome-icon :icon="['fas', 'user']" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#resume" class="flex items-center space-x-2 hover:text-blue-300">
            <font-awesome-icon :icon="['fas', 'file-alt']" />
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="#content" class="flex items-center space-x-2 hover:text-blue-300">
            <font-awesome-icon :icon="['fas', 'file-alt']" />
            <span>Content</span>
          </a>
        </li>
        <li>
          <a href="#contact" class="flex items-center space-x-2 hover:text-blue-300">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span>Contact Me</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Ensure icons are centered within their containers */
.flex-wrap > a {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Align text to the left with padding */
.nav > ul > li > a {
  padding-left: 10px; /* Adjust padding to taste */
  text-align: left;
}
</style>
