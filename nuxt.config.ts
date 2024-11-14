export default defineNuxtConfig({
  modules: ["@sentry/nuxt/module", '@nuxt/content'],
  sentry: {
    sourceMapsUploadOptions: {
      org: "steven-eubank",
      project: "profile-new-nuxt",
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN, 
    },
  },
  ignore: [
    'brag-docs',
  ],
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
  content: {
    markdown: {
      toc: true,
      anchorLinks: true,
      remarkPlugins: [],
      rehypePlugins: []
    }
  }
})

// Debugging: Log the environment variable to ensure it's loaded
console.log('Sentry Auth Token:', process.env.VITE_SENTRY_AUTH_TOKEN);