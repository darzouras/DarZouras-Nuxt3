import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components/storyblok']
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  runtimeConfig: {
    public: {
      sbAccessToken: process.env.STORYBLOK_ACCESS_TOKEN,
      isPreview: process.env.PREVIEW,
    },
  }
})
