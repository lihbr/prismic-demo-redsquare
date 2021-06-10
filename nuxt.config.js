import { getStoriesPaths } from 'slice-machine-ui/helpers/storybook';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'slicezone-redsquare',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@fontsource/montserrat", "@fontsource/yeseva-one"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/prismic",
    '@nuxtjs/tailwindcss',
    "@nuxt/image"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-sm"],

  image: {
    provider: "prismic",
    prismic: {}
  },

  prismic: {
    endpoint: "https://slicezone-redsquare.cdn.prismic.io/api/v2",
    apiOptions: {
      routes: [{
        type: "page",
        path: "/:uid"
      }]
    }
  },

  storybook: {
    stories: [...getStoriesPaths()]
  },

  ignore: ["**/*.stories.js"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  }
};
