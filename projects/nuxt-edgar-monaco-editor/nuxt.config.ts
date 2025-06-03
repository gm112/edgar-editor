export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  devtools: { enabled: true },
  workspaceDir: '../..',
  sourcemap: true,

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-05-15',
  typescript: {
    includeWorkspace: true,
  },
})
