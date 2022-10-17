<script lang="ts">
import { Icon } from "@iconify/vue";
import AppSwitch from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import BaseTextInput from "@/components/BaseTextInput.vue";
export default defineComponent({
  name: "SettingsView",
  components: { AppSwitch, Icon, BaseTextInput },
  methods: {
    toggleTheme() {
      this.settings.theme = this.settings.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.settings.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.settings.theme); // stores theme value on local storage
    },
  },
  computed: {
    ...mapState(useAuthStore, ["userInformation"]),
    fullname() {
      return this.userInformation?.fullname || "";
    },
    username() {
      return this.userInformation?.username || "";
    },
    email() {
      return this.userInformation?.email || "";
    },
  },
  data: () => ({
    networkError: false,
    settings: {
      darkMode: true,
      theme: "",
      showNetworkError: false,
      allowPushNotifications: false,
    },
  }),
});
</script>

<template>
  <div id="settings">
    <!--avatar-->
    <div id="avatar">
      <!--icon-->
      <img src="@/assets/img/illustration/default_user.png" alt="avatar" />
      <!--edit  profile-->
      <button id="edit">
        <Icon icon="mdi:pencil" />
      </button>

      <!---name and email-->
      <div id="user">
        <h3>{{ fullname }}</h3>
        <small>{{ email }}</small>
      </div>
    </div>

    <section>
      <h3>Account Information</h3>
      <BaseTextInput placeholder="fullname" label="fullname" />
      <BaseTextInput
        placeholder="email"
        label="email"
        type="email"
        class="field"
      />
      <BaseTextInput
        placeholder="email"
        label="email"
        type="email"
        class="field"
      />
    </section>

    <section>
      <h3>Preferences</h3>
      <div>
        <AppSwitch v-model="settings.darkMode" @click="toggleTheme" /> dark mode
      </div>
      <div>
        <AppSwitch v-model="settings.showNetworkError" /> network error message
      </div>
      <div>
        <AppSwitch v-model="settings.allowPushNotifications" /> allow push
        notifications
      </div>
    </section>

    <section>
      <h3>Security</h3>
    </section>
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

#settings #avatar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  gap: 15px;
  text-align: center;
  position: relative;
}

#settings #user h3 {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  text-transform: capitalize;
}

#settings small {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  text-transform: lowercase;
  color: #9ca3af;
}

#settings #avatar img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}

#settings button {
  border-radius: 25px;
  background-color: var(--primary);
  color: #fff;
  padding: 4px;
  border: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: absolute;
  bottom: 15px;
  display: none;
  right: 50%;
}

#settings section {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  display: none;
}

#settings-control > div {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
}
</style>
