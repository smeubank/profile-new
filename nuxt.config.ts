export default defineNuxtConfig({
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

  plugins: ['~/plugins/fontawesome.js'],
  compatibilityDate: '2024-08-31',
})