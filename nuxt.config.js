import webpack from "webpack";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "crop-calc",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/corn.png" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "@/assets/styles/main.css",
    // SCSS file in the project
    "@/assets/styles/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/custom-input.js",
    "~/plugins/vue-numeric-input.js",
    "~/plugins/vue-numeric.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "vue-currency-input/nuxt",
    ["vue-currency-input/nuxt", { globalOptions: { currency: "USD" } }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: true,
    extractCSS: true,
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: "jquery",
        _: "lodash"
      })
    ]
  }
};
