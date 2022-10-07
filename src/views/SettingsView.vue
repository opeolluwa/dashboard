<script lang="ts">
import AppNetworkError from "@/components/AppNetworkError.vue";
import AppSwitch from '@vueform/toggle'
import "@vueform/toggle/themes/default.css";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SettingsView",
  components: { AppNetworkError, AppSwitch },
  methods: {
    toggleTheme() {
      this.settings.theme = this.settings.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
      document.documentElement.setAttribute('data-theme', this.settings.theme); // sets the data-theme attribute
      localStorage.setItem('theme', this.settings.theme); // stores theme value on local storage
    }
  },
  data: () => ({
    networkError: false,
    settings: {
      darkMode: true,
      theme: "",
      showNetworkError: false,
      allowPushNotifications: false,
    }
  }),
});
</script>

<template>
  <AppNetworkError v-if="networkError" />
  <!---->
  <div v-else>
    <h2>Settings</h2>
    <div id="settings-control">
      <div>
        <AppSwitch v-model="settings.darkMode"  @click="toggleTheme"/> dark mode
      </div>
      <div>
        <AppSwitch v-model="settings.showNetworkError" /> network error message
      </div>
      <div>
        <AppSwitch v-model="settings.allowPushNotifications" /> allow push notifications
      </div>
    </div>
  </div>

</template>

<style scoped>
:root {
  --toggle-width: 3rem;
  --toggle-height: 1.25rem;
  --toggle-border: 0.125rem;
  --toggle-font-size: 0.75rem;
  --toggle-duration: 150ms;
  --toggle-bg-on: var(--primary);
  --toggle-bg-off: #e5e7eb;
  --toggle-bg-on-disabled: #d1d5db;
  --toggle-bg-off-disabled: #e5e7eb;
  --toggle-border-on: #aeb1b0;
  --toggle-border-off: #e5e7eb;
  --toggle-border-on-disabled: #d1d5db;
  --toggle-border-off-disabled: #e5e7eb;
  --toggle-ring-width: 3px;
  --toggle-ring-color: transparent;
  --toggle-text-on: #ffffff;
  --toggle-text-off: hsl(217, 19%, 27%);
  --toggle-text-on-disabled: #9ca3af;
  --toggle-text-off-disabled: #9ca3af;
  --toggle-handle-enabled: #ffffff;
  --toggle-handle-disabled: #f3f4f6;
}

#settings-control {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#settings-control>div {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
}
</style>
