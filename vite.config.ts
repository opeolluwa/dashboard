import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // injectRegister: 'auto',
      // registerType: "autoUpdate", //default
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'nitride',
        short_name: 'nitride',
        description: 'an oxide of nitrogen',
        theme_color: '#101010',
        icons: [
          {
            src: 'src/assets/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'src/assets/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:'any maskable'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
