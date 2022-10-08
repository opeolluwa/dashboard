import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./axios.config";
import { useAuthStore } from "@/stores/auth";

const app = createApp(App);

//pwa offline config
// import { registerSW } from 'virtual:pwa-register'

// const updateSW = registerSW({
//     onOfflineReady() { },
// })

// Set the badge
// const unreadCount = 24;
// await navigator.setAppBadge(unreadCount).catch((error: Error) => {
//   //Do something with the error.
//   console.log("error setting badge", (error as Error).message)
// });

export { };
declare global {
  interface Navigator {
    setAppBadge: Promise<void>;
  }
  interface Window {
    deferredPrompt: any;
  }
}

app.use(createPinia());
app.use(router);

app.mount("#app");

//export the auth store to make it accessible globally 
export const authStore = useAuthStore();