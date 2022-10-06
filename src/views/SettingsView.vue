<script lang="ts">
import AppNetworkError from "@/components/AppNetworkError.vue";
import AppSwitch from "@/components/AppSwitch.vue";
export default {
  name: "SettingsView",
  components: { AppNetworkError, AppSwitch },
  data: () => ({
    networkError: false,
    settings: {
      darkMode: false,
      showNetworkError: false,
      allowPushNotifications: false,
    }
  }),
};
</script>

<template>
  <AppNetworkError v-if="newtorkError" />
  <!---->
  <div v-else>
    <h2>Settings</h2>
    <div id="settings-control">
      <div>
        <AppSwitch :value="settings.darkMode" /> Turn on dark mode
      </div>
      <div>
        <AppSwitch :value="settings.showNetworkError" /> Turn on network error message
      </div>
      <div>
        <AppSwitch :value="settings.allowPushNotifications" /> Turn on network push notifications
      </div>
    </div>
  </div>

</template>

<style scoped>
#settings-control {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#settings-control > div{
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
}
</style>
