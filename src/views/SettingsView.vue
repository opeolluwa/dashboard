<template>
  <div id="settings__page">
    <h3>Connect social account</h3>
    <div id="social__account">
      <div class="social__account__icon">
        <img src="@/assets/icons/twitter.png" alt="twitter" />
        <span>Twitter</span>
      </div>
      <div class="social__account__icon">
        <img src="@/assets/icons/google.png" alt="googlr" />
        <span>Google</span>
      </div>
      <div class="social__account__icon">
        <img src="@/assets/icons/github.png" alt="facebook" />
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

<style scoped>
#settings__page h3 {
  font-weight: 500;
}
#social__account {
  margin: 10px 0;
  display: flex;
  grid-template-columns: 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  column-gap: 15px;
}

#social__account .social__account__icon {
  color: var(--secondary);
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 7.5px;
  display: flex;
  margin: 5px 0;
  align-items: center;
}
#social__account .social__account__icon:first-child {
  margin-top: 0;
  padding-top: 3px;
}

#social__account img {
  max-width: 100%;
  width: 40px;
  padding: 10px;
}
</style>
