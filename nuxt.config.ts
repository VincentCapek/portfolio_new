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
    autoLastmod: false, // you control the real update dates yourself
    urls: () => {
      return projects.map((project) => ({
        loc: `/project/${project.slug}`,
        lastmod: project.updatedAt?.toISOString(),
        images: project.image
          ? [
            {
              loc: project.image,
              title: project.slug,
            },
          ]
          : [],
      }))
    },
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

  // Bootstrap first, then your overrides
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
    download: false, // set to true if you want to download/serve them locally
  },

  alias: {
    '@components': resolve(rootDir, 'components'),
    '@layouts': resolve(rootDir, 'layouts'),
    '@server': resolve(rootDir, 'server'),
    '@utils': resolve(rootDir, 'utils'),

    // if you use Pinia, the standard Nuxt directory is "stores/" (not "store/")
    '@stores': resolve(rootDir, 'stores'),
  },
})