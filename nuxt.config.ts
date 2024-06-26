// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss", "@nuxt-alt/http"],

  http: {
    baseURL: "http://localhost:5001",
    credentials: "omit",
    browserBaseURL: "http://localhost:5001",
  },
  serverDir: "nuxt-server",

});
