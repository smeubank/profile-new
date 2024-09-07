<template>
  <section id="content" class="relative py-16 bg-gray-100 rounded-lg shadow-xl">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Content</h2>
      <div class="mt-2 h-1 bg-orange-500 w-3/4 mb-8"></div>

      <!-- Wrap the content columns in the ExpandableSection -->
      <ExpandableSection>
        <!-- Two columns of cards: Blogs and Events -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Blogs Column -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Blogs</h3>
            <div
              v-for="blog in blogs"
              :key="blog.title"
              @click="openLink(blog.link)"
              class="p-4 bg-white rounded-lg shadow-md hover:border-gradient mb-6 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <img
                :src="blog.image || 'https://via.placeholder.com/300x200'"
                alt="Blog Image"
                class="w-full h-48 object-cover rounded mb-4"
              />
              <h4 class="text-xl font-bold mb-2">{{ blog.title }}</h4>
              <p class="text-gray-600">{{ blog.description }}</p>
              <a
                :href="blog.link"
                target="_blank"
                class="text-blue-500 hover:underline"
                >Read more</a
              >
            </div>
          </div>

          <!-- Events Column -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Events and Streams</h3>
            <div
              v-for="event in events"
              :key="event.title"
              @click="openLink(event.link)"
              class="p-4 bg-white rounded-lg shadow-md hover:border-gradient mb-6 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <img
                :src="event.image || 'https://via.placeholder.com/300x200'"
                alt="Event Image"
                class="w-full h-48 object-cover rounded mb-4"
              />
              <h4 class="text-xl font-bold mb-2">{{ event.title }}</h4>
              <p class="text-gray-600">{{ event.description }}</p>
              <a
                :href="event.link"
                target="_blank"
                class="text-blue-500 hover:underline"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </ExpandableSection>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ExpandableSection from '@/components/ExpandableSection.vue'; // Import ExpandableSection

const blogs = ref([
  {
    title: 'Monitoring Twilio\'s Flex Agent Desktop with Sentry',
    description: 'Learn how to monitor Twilio\'s Flex Agent Desktop with Sentry.',
    link: 'https://blog.sentry.io/monitoring-twilios-flex-agent-desktop-with-sentry/',
    image: null,
  },
  {
    title: 'Sentry JavaScript V8 SDK: OTEL and Node Support',
    description: 'Explore the latest updates in the Sentry JavaScript V8 SDK with OpenTelemetry and Node.js support.',
    link: 'https://blog.sentry.io/sentry-javascript-v8-sdk-otel-and-node-support/',
    image: null,
  },
  // Add the rest of your blogs...
]);

const events = ref([
  {
    title: 'Fix Your Front-End: JavaScript Edition',
    description: 'A guide to fixing your front-end JavaScript issues using Sentry.',
    link: 'https://sentry.io/resources/fix-your-front-end-javascript-edition/',
    image: null,
  },
  {
    title: 'Launch Week March 2024: Day 5',
    description: 'Highlights from Sentry\'s Launch Week March 2024, Day 5.',
    link: 'https://sentry.io/resources/launch-week-mar24-day5/',
    image: null,
  },
  // Add the rest of your events...
]);

const openLink = (link) => {
  window.open(link, '_blank');
};

const fetchPreviewImage = async (item) => {
  try {
    const response = await fetch(item.link);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const ogImage = doc.querySelector('meta[property="og:image"]');
    const twitterImage = doc.querySelector('meta[name="twitter:image"]');

    item.image = ogImage?.content || twitterImage?.content || 'https://via.placeholder.com/300x200';
  } catch (error) {
    console.error(`Failed to fetch preview for ${item.link}:`, error);
    item.image = 'https://via.placeholder.com/300x200';
  }
};

onMounted(async () => {
  await Promise.all(blogs.value.map(fetchPreviewImage));
  await Promise.all(events.value.map(fetchPreviewImage));
});
</script>

<style scoped>
.hover\\:border-gradient {
  border: 4px solid transparent;
  transition: border 0.5s ease-in-out;
}
.hover\\:border-gradient:hover {
  border-image: linear-gradient(45deg, #f093fb, #f5576c, #f093fb, #f5576c) 1;
}

.cursor-pointer {
  cursor: pointer;
}

.hover\\:scale-105 {
  transition: transform 0.2s ease-in-out;
}

.active\\:scale-95 {
  transition: transform 0.1s ease-in-out;
}

/* Ensure spacing between cards */
.mb-6 {
  margin-bottom: 1.5rem;
}

/* Add shadow and rounded corner styling for the section */
section {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
}
</style>
