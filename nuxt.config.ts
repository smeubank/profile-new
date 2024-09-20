export default defineNuxtConfig({
  modules: ["@sentry/nuxt/module"],
  // sentry: {
  //   sourceMapsUploadOptions: {
  //     org: "steven-eubank",
  //     project: "profile-new-nuxt",
  //     authToken: process.env.SENTRY_AUTH_TOKEN || "sntrys_eyJpYXQiOjE3MjUwMjEzMDEuOTE4MzUxLCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL3VzLnNlbnRyeS5pbyIsIm9yZyI6InN0ZXZlbi1ldWJhbmsifQ", 
  //   },
  // },
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