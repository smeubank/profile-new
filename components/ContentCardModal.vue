<template>
  <div 
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="close"
  >
    <div 
      class="bg-white rounded-lg w-full h-[90vh] max-w-6xl transform transition-all duration-300"
      @click.stop
    >
      <div class="flex justify-between items-start p-4 border-b">
        <h3 class="text-2xl font-bold text-gray-900">{{ item.title }}</h3>
        <button 
          @click="close" 
          class="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <font-awesome-icon :icon="['fas', 'times']" class="text-xl" />
        </button>
      </div>
      
      <!-- Content Area -->
      <div class="h-[calc(90vh-80px)]">
        <!-- Preview Card when iframe is blocked -->
        <div v-if="iframeBlocked" class="p-8 flex flex-col items-center justify-center h-full">
          <img 
            :src="item.image || placeholderImage" 
            :alt="item.title"
            class="w-full max-w-2xl h-64 object-cover rounded-lg mb-6"
          />
          <h4 class="text-2xl font-bold mb-4">{{ item.title }}</h4>
          <p class="text-gray-600 text-center mb-6 max-w-2xl">{{ item.description }}</p>
          <a 
            :href="item.link" 
            target="_blank"
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Open in New Tab
            <font-awesome-icon :icon="['fas', 'external-link-alt']" class="ml-2" />
          </a>
        </div>

        <!-- Iframe when allowed -->
        <iframe
          v-else
          ref="iframeRef"
          :src="item.link"
          class="w-full h-full border-0"
          title="Content Preview"
          @error="handleIframeError"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  item: Object,
});

const emit = defineEmits(['close']);
const iframeRef = ref(null);
const iframeBlocked = ref(false);
const placeholderImage = 'https://via.placeholder.com/300x200';

const close = () => {
  emit('close');
  iframeBlocked.value = false;
};

const handleIframeError = () => {
  iframeBlocked.value = true;
};

// Reset iframe blocked state when a new item is opened
watch(() => props.item, () => {
  iframeBlocked.value = false;
});

// Check if iframe loading is blocked
onMounted(() => {
  if (props.item?.link?.includes('sentry.io')) {
    iframeBlocked.value = true;
  }
});
</script>

<style scoped>
.modal-content {
  @apply max-h-[90vh] overflow-y-auto;
}

/* Add smooth transitions */
.transform {
  transition: all 0.3s ease-in-out;
}

/* Style the fallback content */
.bg-blue-500 {
  @apply hover:shadow-lg active:transform active:scale-95;
}
</style>