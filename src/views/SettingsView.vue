<template>
  <div id="settings__page">
    <h3>Connect social account</h3>
    <div id="social__account">
      <div class="social__account__item">
        <Icon icon="mdi:facebook" />
        <span>Facebook</span>
      </div>
      <div class="social__account__item">
        <Icon icon="mdi:twitter" />
        <span>Twitter</span>
      </div>
      <div class="social__account__item">
        <Icon icon="mdi:google" />
        <span>Google</span>
      </div>
      <div class="social__account__item">
        <Icon icon="mdi:github" />
        <span>Github</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "SettingsView",
  components: {
    Icon,
  },
});
</script>

<style></style>
