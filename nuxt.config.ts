// nuxt.config.ts
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { projects } from './data/projects'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-site-config'],

  sitemap: {
    urls: projects.map((p) => ({
      loc: `/project/${p.slug}`,
      ...(p.date ? { lastmod: p.date } : {}),
    })),
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
    // Server-only secrets (do NOT put these under `public`)
    mailTo: process.env.MAIL_TO || '',
    mailUser: process.env.MAIL_USER || '',
    mailPass: process.env.MAIL_PASS || '',
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'Vincent Capek',
  },

  // Bootstrap d'abord, puis tes overrides
  css: [
    '@fortawesome/fontawesome-free/css/fontawesome.min.css',
    '@fortawesome/fontawesome-free/css/solid.min.css',
    '@fortawesome/fontawesome-free/css/brands.min.css',
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
