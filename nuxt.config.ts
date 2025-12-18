// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-almacen/', // Reemplaza 'nuxt-almacen' por el nombre exacto de tu repositorio en GitHub
    // buildAssetsDir: 'assets', // Opcional: ayuda a evitar carpetas con guion bajo que GitHub a veces bloquea
  },
  ssr: true,
  nitro: {
    preset: 'github-pages'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
})
