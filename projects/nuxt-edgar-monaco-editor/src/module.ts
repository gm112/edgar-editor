import { existsSync } from 'node:fs'
import { addCustomTab } from '@nuxt/devtools-kit'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  devtools?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-edgar-monaco-editor',
    configKey: 'edgar',
  },
  // Default configuration options of the Nuxt module
  defaults: {
  },
  setup(_options, nuxt) {
    const devtools_ui_route = '/__edgar-editor'
    const resolver = createResolver(import.meta.url)
    const { resolve } = resolver
    const _is_production = existsSync(resolve('./runtime/plugin'))
    // TODO: Implement route for dev tools tab
    // if (!is_production)
    //   nuxt.hook('vite:extendConfig', (config) => {
    //     config.server = config.server || {}
    //     config.server.proxy = config.server.proxy || {}
    //     config.server.proxy[devtools_ui_route] = {
    //       target: `http://localhost:${nuxt.options.devServer.port}${devtools_ui_route}`,
    //       changeOrigin: true,
    //       followRedirects: true,
    //       rewrite: path => path.replace(devtools_ui_route, ''),
    //     }
    //   })
    if (nuxt.options.dev)
      addCustomTab({
        name: 'nuxt-edgar-monaco-editor',
        title: 'Edgar Editor',
        icon: 'carbon:face-satisfied',
        view: {
          type: 'iframe',
          src: devtools_ui_route,
        },
      })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  },
})
