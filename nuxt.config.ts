// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "4dnipracy.pl - Twój portal pracy zdalnej",
      meta: [
        { charset: "utf-8" },
        { 'http-equiv': 'Content-type', content: 'text/html;charset=UTF-8' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Leszek W. Król" },
        {
          hid: "title",
          name: "title",
          content: "4dnipracy.pl - Twój portal pracy zdalnej",
        },
        {
          hid: "description",
          name: "description",
          content: "Portal ofert pracy zdalnej dla osób poszukujących lepszej równowagi między życiem zawodowym, a prywatnym.",
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: '4dni pracy',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'pl_PL',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        }
      ],
      script: [
        { hid: 'splitbee', src: 'https://cdn.splitbee.io/sb.js', defer: true, 'data-token': '7ICGRZ7AIDXU' }
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/main.css',
  ],
  modules: [
    '@nuxtjs/supabase'
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  }
})
