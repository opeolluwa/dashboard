import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "animate.css";
import "highlight.js/styles/github.css";

import "./axios.config";
import { useAuthStore } from "@/stores/auth";

import Toast, { type PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
const toastOptions: PluginOptions = {
  // You can set your default options here
};

//google auth
import GoogleLogin from 'vue3-google-login'
// capacitor status bar
import { StatusBar, Style } from "@capacitor/status-bar";
const statusBarOption = {
  color: "#2f0e73",
};
StatusBar.setBackgroundColor(statusBarOption);

//capacitor storage
import { Preferences } from "@capacitor/preferences";
export async function storeData(data: StorageInterface) {
  const { key, value } = data;
  await Preferences.set({
    key: key.toString(),
    value: value,
  });
}

// JSON "get" example
export async function getStoredData(key: String) {
  const data = await Preferences.get({ key: key.toString() });
  return data.value;
}

//capacitor config
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
app.use(Toast, toastOptions);
// app.use(VueDarkMode)
app.use(GoogleLogin, {
  clientId: '922542500824-bssqki67kdmfpcf11sapl8ignghgvu2d.apps.googleusercontent.com'
})
app.mount("#app");

//export the auth store to make it accessible globally
export const authStore = useAuthStore();

interface StorageInterface {
  key: String;
  value: any;
}
