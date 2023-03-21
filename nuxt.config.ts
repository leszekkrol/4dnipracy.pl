// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "4dnipracy.pl - Twój portal pracy zdalnej",
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
})
