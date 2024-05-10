// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", 'nuxt3-leaflet'],
    imports: {
        dirs: ["stores"],
    },
    pinia: {
        storesDirs: ["./stores/**"],
    },
});