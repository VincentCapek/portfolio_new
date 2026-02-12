// nuxt.config.ts
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import process from 'node:process'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  runtimeConfig: {
    // Server-only secrets (do NOT put these under `public`)
    mailTo: process.env.MAIL_TO || '',
    mailUser: process.env.MAIL_USER || '',
    mailPass: process.env.MAIL_PASS || '',
  },

  // Bootstrap d'abord, puis tes overrides
  css: [
    '@fortawesome/fontawesome-free/css/fontawesome.min.css',
    '@fortawesome/fontawesome-free/css/solid.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'lenis/dist/lenis.css',
    '~/assets/scss/main.scss',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
    preconnect: true,
    download: false, // true si tu veux télécharger/servir en local
  },

  alias: {
    '@components': resolve(rootDir, 'components'),
    '@layouts': resolve(rootDir, 'layouts'),
    '@server': resolve(rootDir, 'server'),
    '@utils': resolve(rootDir, 'utils'),

    // si tu utilises Pinia, Nuxt standard c'est "stores/" (pas "store/")
    '@stores': resolve(rootDir, 'stores'),
  },
})
