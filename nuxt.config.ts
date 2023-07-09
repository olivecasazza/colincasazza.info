import path from 'path'
import wasmPack from 'vite-plugin-wasm-pack'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],
  typescript: {
    shim: false
  },
  vite: {
    plugins: [
      wasmPack([`${path.resolve(__dirname, 'wasm/flock')}/`])
    ]
  },
  app: {
    baseURL: '/nullspace/'
  }
})
