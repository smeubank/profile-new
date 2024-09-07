<template>
  <section id="resume" class="py-16 bg-gray-100 shadow-rounded">
    <div class="container mx-auto px-4">
      <!-- Resume Header -->
      <div class="text-left mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Résumé</h2>
        <div class="mt-2 h-1 bg-orange-500 w-3/4"></div>
      </div>

      <!-- Two Column Layout for Professional Experience, Education, and Academic Work Experience -->
      <ExpandableSection title="View More" :expanded="true">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Professional Experience Column -->
          <div>
            <h3 class="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h3>
            <div class="flex flex-col gap-8">
              <div v-for="(item, index) in professionalExperience" :key="index" class="bg-white p-4 rounded-lg shadow-md">
                <h4 class="text-lg font-bold">{{ item.title }}</h4>
                <p class="text-sm italic">{{ item.company }}</p>
                <div class="bg-blue-100 p-2 mt-2 text-sm text-center">{{ item.date }}</div>
                <p class="mt-2 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- Education and Academic Work Experience Column -->
          <div>
            <!-- Education Section -->
            <h3 class="text-3xl font-bold text-gray-800 mb-4">Education</h3>
            <div class="flex flex-col gap-8">
              <div v-for="(item, index) in education" :key="index" class="bg-white p-4 rounded-lg shadow-md">
                <h4 class="text-lg font-bold">{{ item.degree }}</h4>
                <p class="text-sm italic">{{ item.university }}</p>
                <div class="bg-blue-100 p-2 mt-2 text-sm text-center">{{ item.date }}</div>
                <p class="mt-2 text-sm">{{ item.details }}</p>
              </div>
            </div>

            <!-- Academic Work Experience Section -->
            <h3 class="text-3xl font-bold text-gray-800 mt-12 mb-4">Academic Work Experience</h3>
            <div class="flex flex-col gap-8">
              <div v-for="(item, index) in academicWorkExperience" :key="index" class="bg-white p-4 rounded-lg shadow-md">
                <h4 class="text-lg font-bold">{{ item.title }}</h4>
                <p class="text-sm italic">{{ item.institution }}</p>
                <div class="bg-blue-100 p-2 mt-2 text-sm text-center">{{ item.date }}</div>
                <p class="mt-2 text-sm">{{ item.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </div>
  </section>
</template>

<script setup>
import ExpandableSection from './ExpandableSection.vue';

const professionalExperience = [
  { title: 'Product Manager', company: 'Sentry.io', date: 'August 2021 - Present', description: 'Leading the development of web SDKs and tools to enhance observability and performance monitoring.' },
  { title: 'IT Project Manager & Solution Architect', company: 'Allianz Technology Austria GmbH', date: 'December 2015 - August 2021', description: 'Led multiple agile teams to deliver microservices, REST APIs, and DevOps solutions for Allianz Partners.' },
  { title: 'Tech Team Lead & Sr. Solution Designer', company: 'Allianz Direct', date: 'August 2018 - November 2020', description: 'Built a platform for direct B2C business using event-driven microservices, automation, and cloud-native solutions.' },
  { title: 'Business System Analyst', company: 'Allianz Partners', date: 'December 2015 - July 2017', description: 'Coordinated telematics solutions for the European market, ensuring compliance with EU regulations.' }
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
/* Custom styles can be added here */
</style>
