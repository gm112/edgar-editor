export default defineNuxtConfig({
  modules: ['../src/module',
    '@vueuse/nuxt'],
  devtools: { enabled: true },
  workspaceDir: '../../../',
  typescript: {
    includeWorkspace: true,
  },
  edgar: {},
})
