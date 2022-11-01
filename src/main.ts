import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "animate.css";
import 'highlight.js/styles/github.css';
// import "highlight.js/lib/languages/*"
import "./axios.config";
import { useAuthStore } from "@/stores/auth";

//ccpacitor config
import { SplashScreen } from "@capacitor/splash-screen";
import timeago from "vue-timeago3";
const timeagoOptions = {
  converterOptions: {
    includeSeconds: false,
  },
};
//auth0 social login config
// import { createAuth0 } from "@auth0/auth0-vue";
const app = createApp(App);

export {};
declare global {
  interface Navigator {
    setAppBadge: Promise<void>;
  }
  interface Window {
    deferredPrompt: any;
  }
}

// Show the splash for two seconds and then automatically hide it:
(async function injectCapacitor() {
  await SplashScreen.show({
    showDuration: 2000,
    autoHide: true,
  });
});
app.use(createPinia());
app.use(router);
app.use(timeago, timeagoOptions);

app.mount("#app");

//export the auth store to make it accessible globally
export const authStore = useAuthStore();
