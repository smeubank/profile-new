<template>
  <section id="resume" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Resume</h2>
      <ExpandableSection>
        <!-- Professional Experience -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Professional Experience</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="exp in professionalExperience" 
              :key="exp.title"
              class="bg-white rounded-lg shadow-md p-6 hover:border-gradient transition-all duration-300 relative cursor-pointer"
              @click="toggleExpandedCard(exp)"
            >
              <div>
                <h4 class="font-bold">{{ exp.title }}</h4>
                <p>{{ exp.company }}</p>
                <p class="flex items-center text-gray-600 mt-1">
                  {{ exp.location }}
                  <font-awesome-icon 
                    :icon="['fas', 'map-marker-alt']" 
                    class="ml-1 text-gray-500"
                    style="font-size: 0.875rem;"
                  />
                </p>
                <p class="mt-1">{{ exp.date }}</p>
              </div>
              <img 
                v-if="exp.company === 'Allianz Technology Austria GmbH'" 
                src="@/assets/img/allianz_logo.svg" 
                alt="Company Logo" 
                class="absolute top-0 right-0 m-2 w-14 h-14"
              >
              <img 
                v-else-if="exp.company === 'Allianz Direct'" 
                src="@/assets/img/allianz-direct.png" 
                alt="Company Logo" 
                class="absolute top-0 right-0 m-2 w-14 h-14"
              >
              <img 
                v-else-if="exp.company === 'Allianz Partners'" 
                src="@/assets/img/allianz_logo.svg" 
                alt="Company Logo" 
                class="absolute top-0 right-0 m-2 w-14 h-14"
              >
              <img 
                v-else-if="exp.company.includes('Sentry.io')" 
                src="@/assets/img/sentry_logo.svg" 
                alt="Company Logo" 
                class="absolute top-0 right-0 m-2 w-14 h-14 object-cover rounded-full"
              >
              <font-awesome-icon 
                v-if="exp.expandedContent"
                :icon="['fas', 'expand']" 
                class="absolute bottom-2 right-2 text-gray-500 hover:text-blue-500"
              />
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Education</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="edu in education" 
              :key="edu.degree"
              class="bg-white rounded-lg shadow-md p-6 hover:border-gradient transition-all duration-300 relative"
            >
              <div>
                <h4 class="font-bold">{{ edu.degree }}</h4>
                <p>{{ edu.university }}</p>
                <p>{{ edu.date }}</p>
                <p>{{ edu.details }}</p>
              </div>
              <img 
                v-if="edu.university === 'Auburn University'" 
                src="@/assets/img/auburn_logo.svg" 
                alt="University Logo" 
                class="absolute top-0 right-0 m-2 w-14 h-14"
              >
              <img 
                v-else-if="edu.university === 'University of Alabama at Birmingham'" 
                src="@/assets/img/blazer.png" 
                alt="University Logo" 
                class="absolute top-0 right-0 m-2 w-14 h-14"
              >
            </div>
          </div>
        </div>
      </ExpandableSection>
    </div>

    <!-- Expanded Card Modal -->
    <div 
      v-if="expandedCard"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="closeExpandedCard"
    >
      <div 
        class="bg-white rounded-lg p-8 max-w-3xl w-full mx-4 transform transition-all duration-300 modal-content"
        @click.stop
      >
        <div class="flex justify-between items-start mb-6">
          <h3 class="text-2xl font-bold text-gray-900">{{ expandedCard.title }}</h3>
          <button 
            @click="closeExpandedCard" 
            class="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <font-awesome-icon :icon="['fas', 'times']" class="text-xl" />
          </button>
        </div>
        <div class="prose max-w-none" v-html="expandedCard.expandedContent"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { marked } from 'marked';
import ExpandableSection from './ExpandableSection.vue';
import sentryRole from '@/assets/content/roles/sentry-pm';
import placeholderRole from '@/assets/content/roles/placeholder';

// Configure marked to handle line breaks
marked.setOptions({
  breaks: true,
  gfm: true
});

const expandedCard = ref(null);

const toggleExpandedCard = (card) => {
  if (card.expandedContent) {
    expandedCard.value = expandedCard.value === card ? null : card;
  }
};

const closeExpandedCard = () => {
  expandedCard.value = null;
};

const processMarkdown = (content) => {
  return marked(content);
};

const professionalExperience = [
  { 
    title: 'Product Manager', 
    company: 'Sentry.io', 
    location: 'Vienna, AT',
    date: 'August 2021 - Present', 
    //description: 'Supporting the development of web SDKs and tools to enhance observability and performance monitoring.',
    expandedContent: processMarkdown(sentryRole.content)
  },
  { 
    title: 'IT Project Manager',
    company: 'Allianz Technology Austria GmbH',
    location: 'Vienna, AT',
    date: 'December 2015 - August 2021',
    //description: 'Led multiple agile teams across major Allianz initiatives including Allianz Partners and Allianz Direct.',
    expandedContent: processMarkdown(placeholderRole.content)
  },
  {
    title: 'Sr Solution Designer',
    company: 'Allianz Partners',
    location: 'Vienna, AT',
    date: 'November 2020 - August 2021',
    expandedContent: processMarkdown(placeholderRole.content)
  },
  {
    title: 'Sr Solution Designer',
    company: 'Allianz Direct',
    location: 'Munich, DE',
    date: 'August 2018 - November 2020',
    expandedContent: processMarkdown(placeholderRole.content)
  },
  {
    title: 'IT Project Manager',
    company: 'Allianz Partners',
    location: 'Vienna, AT',
    date: 'December 2015 - August 2018',
    expandedContent: processMarkdown(placeholderRole.content)
  }
];

const education = [
  { degree: 'MSc Information Systems', university: 'Auburn University', date: 'Graduated 2015', details: 'Big Data studies & Alpha Iota Delta - Honor Society.' },
  { degree: 'Computer and Information Sciences', university: 'University of Alabama at Birmingham', date: '2013 - 2014', details: 'Completed coursework in Computer and Information Sciences.' },
  { degree: 'Geology', university: 'Auburn University', date: '2010 - 2013', details: 'Completed coursework in Geology, Petrology, Crystallography.' },
  { degree: 'Geography, BA', university: 'Auburn University', date: 'Graduated 2012', details: 'Geographic Information Systems, Remote Sensing, and Cartography.' }
];

const academicWorkExperience = [
  { title: 'Graduate Assistant', institution: 'Auburn University Harbert College of Business', date: 'February 2015 - December 2015', details: 'Assisted IT department with testing virtual machines and documenting Big Data and Data Analytics exercises.' },
  { title: 'GPS Field Technician', institution: 'Auburn University', date: 'June 2010', details: 'Conducted geospatial mapping for hurricane recovery efforts along the Alabama Gulf Coast.' },
  { title: 'Lab Technician', institution: 'Auburn University Aquatic Ecology Lab', date: 'March 2009 - April 2010', details: 'Assisted with processing samples from freshwater streams for research projects.' },
  { title: 'Customer Service Industry', institution: 'Various establishments', date: 'September 2003 - May 2012', details: 'Gained work ethic and customer service skills across various establishments, from skating rinks to restaurants.' }
];
</script>

<style scoped>
.hover\:border-gradient {
  border: 4px solid transparent;
  transition: border 0.5s ease-in-out;
}

.hover\:border-gradient:hover {
  border-image: linear-gradient(45deg, #f093fb, #f5576c, #f093fb, #f5576c) 1;
}

/* Add transition for expanded card */
.transform {
  transition: transform 0.3s ease-in-out;
}

.expanded-card {
  transform: scale(1.05);
}

/* Enhanced Markdown content styling */
:deep(.prose) {
  @apply text-gray-800 leading-relaxed;

  h1 {
    @apply text-3xl font-bold mb-6 text-gray-900 border-b pb-2;
  }

  h2 {
    @apply text-2xl font-semibold mt-8 mb-4 text-gray-800;
  }

  p {
    @apply mb-4 text-base;
  }

  ul {
    @apply list-disc pl-6 mb-6 space-y-2;
  }

  li {
    @apply text-base mb-2;
    &::marker {
      @apply text-blue-500;
    }
  }

  /* Add some spacing between sections */
  h2 + ul {
    @apply mt-3;
  }

  /* Style links if present */
  a {
    @apply text-blue-600 hover:text-blue-800 underline;
  }

  /* Add subtle dividers between major sections */
  h2:not(:first-child) {
    @apply border-t pt-6 mt-8;
  }
}

/* Modal styling improvements */
.modal-content {
  @apply max-h-[80vh] overflow-y-auto;
}

/* Add styles for location text and icon */
.text-gray-600 {
  font-size: 0.875rem;
}

/* Ensure map marker icon aligns properly */
.fa-map-marker-alt {
  vertical-align: middle;
}
</style>
