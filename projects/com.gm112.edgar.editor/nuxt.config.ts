// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-edgar-monaco-editor',
    '@vueuse/nuxt',
  ],
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  workspaceDir: '../..',
  sourcemap: true,
  devServer: {
    host: process.env.TAURI_DEV_HOST ?? 'localhost',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-06-14',
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
  },
  typescript: {
    includeWorkspace: true,
  },
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: 'single',
      },
    },
  },
  content: {
    experimental: {
      nativeSqlite: true,
      // @ts-expect-error - nuxt-content doesn't have types for this yet
      native: true
    }
  }
})
