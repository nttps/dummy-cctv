// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxt/ui",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "nuxt-pdfmake",
    ],
    imports: {
        dirs: ["stores"],
    },
    nitro: {
        publicAssets: [
            {
                baseURL: "/hls",
                dir: "server/public/hls",
            },
        ],
        experimental: {
            websocket: true,
        },
    },
    pdfmake: {
        enableDevtools: true,
    },
    pinia: {
        storesDirs: ["./stores/**"],
    },
    icon: {
        serverBundle: "remote",
    },
    runtimeConfig: {
        public: {
            videoUrl: "",
        },
    },
});