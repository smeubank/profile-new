export default defineNuxtConfig({
  modules: ["@sentry/nuxt/module"],
  sentry: {
    sourceMapsUploadOptions: {
      org: "steven-eubank",
      project: "profile-new-nuxt",
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN, 
    },
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  app: {
    head: {
      title: 'Steven Eubank - Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio and CV of Steven Eubank' },
        { name: 'keywords', content: 'Product Manager, Solution Architect, Portfolio' }
      ],
    },
  },

  plugins: [
    '~/plugins/fontawesome.js',
  ],
  compatibilityDate: '2024-08-31',
})

// Debugging: Log the environment variable to ensure it's loaded
console.log('Sentry Auth Token:', process.env.VITE_SENTRY_AUTH_TOKEN);