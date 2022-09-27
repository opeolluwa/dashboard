import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:true
  },
  plugins: [
    vue(),
       VitePWA({
      mode: "development",
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ["/favicon.png"],
      manifest: {
        name: "nitride",
        short_name: "nitride",
        description: "a compound of nitrogen",
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
    }), 
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
