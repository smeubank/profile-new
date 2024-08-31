<template>
  <section id="content" class="py-16 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Content Header -->
      <div class="text-left mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Content</h2>
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
      </div>

      <!-- Parallel Columns for Blogs and Events -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Blogs Column -->
        <div id="blogs">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Blogs</h3>
          <div class="space-y-8">
            <div
              v-for="(item, index) in blogItems"
              :key="index"
              class="relative p-4 bg-white rounded-lg shadow-md hover:border-gradient h-full"
            >
              <h4 class="text-xl font-bold text-gray-800 mb-2">{{ item.title }}</h4>
              <p class="text-gray-600 mb-4">{{ item.description }}</p>
              <div v-if="item.preview" class="mb-4">
                <img :src="item.preview" alt="Preview" class="w-full h-48 object-cover rounded" />
              </div>
              <a :href="item.link" target="_blank" class="text-blue-500 font-semibold hover:underline"
                >Read more</a
              >
            </div>
          </div>
        </div>

        <!-- Events Column -->
        <div id="events">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Events</h3>
          <div class="space-y-8">
            <div
              v-for="(item, index) in eventItems"
              :key="index"
              class="relative p-4 bg-white rounded-lg shadow-md hover:border-gradient h-full"
            >
              <h4 class="text-xl font-bold text-gray-800 mb-2">{{ item.title }}</h4>
              <p class="text-gray-600 mb-4">{{ item.description }}</p>
              <div v-if="item.preview" class="mb-4">
                <img :src="item.preview" alt="Preview" class="w-full h-48 object-cover rounded" />
              </div>
              <a :href="item.link" target="_blank" class="text-blue-500 font-semibold hover:underline"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const blogItems = ref([
  {
    title: 'Sentry JavaScript V8 SDK: OTEL and Node Support',
    description:
      'Explore the latest updates in the Sentry JavaScript V8 SDK with OpenTelemetry and Node.js support.',
    link: 'https://blog.sentry.io/sentry-javascript-v8-sdk-otel-and-node-support/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Monitor Supabase Databases and Edge Functions',
    description:
      'Learn how to monitor Supabase databases and edge functions using Sentry.',
    link: 'https://blog.sentry.io/monitor-supabase-databases-and-edge-functions/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'SDK and Integration Updates: Sentry for Every Platform',
    description:
      'Get the latest updates on Sentry\'s SDKs and integrations across various platforms, frameworks, and tools.',
    link: 'https://blog.sentry.io/sdk-and-integration-updates-sentry-for-every-platform-framework-and-tool/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Get More Context About Your Cloud Services with Sentry',
    description:
      'Discover how Sentry provides deeper context for monitoring your cloud services.',
    link: 'https://blog.sentry.io/get-more-context-about-your-cloud-services-with-sentry/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Introducing OpenTelemetry Support',
    description:
      'Learn about Sentry\'s new support for OpenTelemetry.',
    link: 'https://blog.sentry.io/introducing-opentelemetry-support/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Support for Next.js Middleware and Edge Routes',
    description:
      'Understand how Sentry now supports Next.js middleware and edge routes.',
    link: 'https://blog.sentry.io/support-for-next-js-middleware-and-edge-routes/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'JavaScript Browser SDK: Bundle Size Matters',
    description:
      'Why bundle size matters in the JavaScript Browser SDK and how Sentry helps you optimize it.',
    link: 'https://blog.sentry.io/js-browser-sdk-bundle-size-matters/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Monitoring Twilio\'s Flex Agent Desktop with Sentry',
    description:
      'Learn how to monitor Twilio\'s Flex Agent Desktop with Sentry.',
    link: 'https://blog.sentry.io/monitoring-twilios-flex-agent-desktop-with-sentry/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Fix Your Front-End: JavaScript Edition',
    description:
      'A guide to fixing your front-end JavaScript issues using Sentry.',
    link: 'https://sentry.io/resources/fix-your-front-end-javascript-edition/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
]);

const eventItems = ref([
  {
    title: 'Launch Week March 2024: Day 5',
    description:
      'Highlights from Sentry\'s Launch Week March 2024, Day 5.',
    link: 'https://sentry.io/resources/launch-week-mar24-day5/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Launch Week November 2023: Day 4',
    description:
      'Highlights from Sentry\'s Launch Week November 2023, Day 4.',
    link: 'https://sentry.io/resources/launch-week-nov23-day4/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'FastAPI Stream',
    description:
      'Learn how to monitor FastAPI with Sentry in this live stream event.',
    link: 'https://sentry.io/resources/fastapi-stream/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'FastAPI Event',
    description:
      'Join us for an event focused on monitoring FastAPI applications with Sentry.',
    link: 'https://sentry.io/resources/fastapi-event/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    title: 'Getting Started with OpenTelemetry AMA',
    description:
      'An AMA session about getting started with OpenTelemetry.',
    link: 'https://sentry.io/resources/getting-started-opentelemetry-ama/',
    preview: 'https://via.placeholder.com/300x200', // Placeholder image
  },
]);

const fetchPreviewImage = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const metaImage =
      doc.querySelector('meta[property="og:image"]')?.content ||
      doc.querySelector('meta[name="twitter:image"]')?.content;
    return metaImage || 'https://via.placeholder.com/300x200'; // Fallback to placeholder
  } catch (error) {
    console.error('Error fetching image preview:', error);
    return 'https://via.placeholder.com/300x200';
  }
};

const loadPreviewImages = async () => {
  for (const item of [...blogItems.value, ...eventItems.value]) {
    item.preview = await fetchPreviewImage(item.link);
  }
};

onMounted(() => {
  loadPreviewImages();
});
</script>

<style scoped>
/* Header styling similar to About and Resume sections */
h2 {
  color: #2d3748; /* Main text color */
}

.bg-orange-500 {
  background-color: #ed8936; /* Orange underline */
}

/* Card hover effect */
.hover\\:border-gradient {
  border: 4px solid transparent;
  transition: border 0.5s ease-in-out;
}
.hover\\:border-gradient:hover {
  border-image: linear-gradient(45deg, #f093fb, #f5576c, #f093fb, #f5576c) 1;
}

.shadow-md {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.5rem;
}

/* Grid layout adjustments */
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* 1 column on small screens */
  gap: 1.5rem; /* Increased spacing between the cards */
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns on medium screens */
  }
}

@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 columns on large screens */
  }
}

/* Card size adjustments */
.relative {
  min-height: 350px; /* Ensures cards have a consistent minimum height */
  max-width: 100%; /* Ensures cards don't exceed their container's width */
}
</style>
