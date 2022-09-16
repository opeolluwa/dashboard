import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

//pwa offline config 
// import { registerSW } from 'virtual:pwa-register'

// const updateSW = registerSW({
//     onOfflineReady() { },
// })

app.use(createPinia());
app.use(router);

app.mount("#app");
