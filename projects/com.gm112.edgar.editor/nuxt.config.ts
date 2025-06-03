// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  ssr: false,
  sourcemap: true,
  devServer: {
    host: process.env.TAURI_DEV_HOST ?? 'localhost',
  },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-edgar-monaco-editor'
  ],
  css: ['~/assets/css/main.css']
})
