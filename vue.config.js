require("dotenv").config()

module.exports = {
    pwa: {
        // mode: "development",
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        includeAssets: ["/favicon.png"],
        manifest: {
            name: "nitride",
            short_name: "nitride",
            description: "an oxide of nitrogen",
            theme_color: "#ffffff",
            display: "standalone",
            background_color: "#ffffff",
            icons: [
                {
                    src: "src/assets/favicon/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "src/assets/favicon/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
                {
                    src: "src/assets/favicon/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                },
            ],
        },

    }
}