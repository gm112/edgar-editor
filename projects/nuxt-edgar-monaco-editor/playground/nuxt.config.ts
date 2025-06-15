export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  workspaceDir: '../../../',
  typescript: {
    includeWorkspace: true,
  },
  edgar: {},

  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: 'single',
      },
    },
  },
})
