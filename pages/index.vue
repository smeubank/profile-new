<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-grow lg:ml-64 p-4">
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <ContentSection />
      <FaqSection/>
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import HomeSection from '~/components/HomeSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ResumeSection from '~/components/ResumeSection.vue'
import ContentSection from '~/components/ContentSection.vue'
import ContactSection from '~/components/ContactSection.vue'
</script>

<style scoped>
/* Ensure the layout takes the full height of the screen */
html, body {
  height: 100%;
}

.flex {
  min-height: 100vh;
}

@media (max-width: 1024px) {
  .flex-grow {
    margin-left: 0; /* Override large screen margin-left for small screens */
  }
}
</style>
