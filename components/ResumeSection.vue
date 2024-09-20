<template>
  <section id="resume" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Resume</h2>
      <ExpandableSection>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Professional Experience Card -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:border-gradient transition-all duration-300">
            <h3 class="text-xl font-semibold mb-4">Professional Experience</h3>
            <ul>
              <li v-for="exp in professionalExperience" :key="exp.title" class="mb-4 relative">
                <img v-if="exp.company.includes('Allianz')" src="assets/img/allianz_logo.svg" alt="Company Logo" class="absolute top-0 right-0 m-2 w-14 h-14">
                <img v-else-if="exp.company.includes('Sentry.io')" src="assets/img/sentry_logo.svg" alt="Company Logo" class="absolute top-0 right-0 m-2 w-14 h-14 object-cover rounded-full">
                <h4 class="font-bold">{{ exp.title }}</h4>
                <p>{{ exp.company }}</p>
                <p>{{ exp.date }}</p>
                <p>{{ exp.description }}</p>
              </li>
            </ul>
          </div>

          <!-- Education Card -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:border-gradient transition-all duration-300">
            <h3 class="text-xl font-semibold mb-4">Education</h3>
            <ul>
              <li v-for="edu in education" :key="edu.degree" class="mb-4 relative">
                <img v-if="edu.university === 'Auburn University'" src="assets/img/auburn_logo.svg" alt="University Logo" class="absolute top-0 right-0 m-2 w-14 h-14">
                <img v-else-if="edu.university === 'University of Alabama at Birmingham'" src="assets/img/blazer.png" alt="University Logo" class="absolute top-0 right-0 m-2 w-14 h-14">
                <h4 class="font-bold">{{ edu.degree }}</h4>
                <p>{{ edu.university }}</p>
                <p>{{ edu.date }}</p>
                <p>{{ edu.details }}</p>
              </li>
            </ul>
          </div>

          <!-- Academic Work Experience Card -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:border-gradient transition-all duration-300">
            <h3 class="text-xl font-semibold mb-4">Academic Work Experience</h3>
            <ul>
              <li v-for="work in academicWorkExperience" :key="work.title" class="mb-4 relative">
                <img v-if="work.institution.includes('Auburn University')" src="assets/img/auburn_logo.svg" alt="Institution Logo" class="absolute top-0 right-0 m-2 w-14 h-14">
                <h4 class="font-bold">{{ work.title }}</h4>
                <p>{{ work.institution }}</p>
                <p>{{ work.date }}</p>
                <p>{{ work.details }}</p>
              </li>
            </ul>
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
.hover\:border-gradient {
  border: 4px solid transparent;
  transition: border 0.5s ease-in-out;
}
.hover\:border-gradient:hover {
  border-image: linear-gradient(45deg, #f093fb, #f5576c, #f093fb, #f5576c) 1;
}
</style>
