// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Ensure that SSR is turned off
  plugins: ['~/plugins/meilisearch.js', '~/plugins/vue-instantsearch.js', '~/plugins/supabase.js'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
