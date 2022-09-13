<script lang="ts">
import { Icon } from '@iconify/vue';
import IconEmail from "./icons/IconEmail.vue";
import IconProjects from "./icons/IconProjects.vue";
import IconSettings from "./icons/IconSettings.vue";
import IconTodo from "./icons/IconTodo.vue";
import BaseButton from "./BaseButton.vue";
import router from "@/router";
import { defineComponent } from "vue";
import IconNotification from "./icons/IconNotification.vue";
export default defineComponent({
  name: "AppNavigation",
  components: {
    IconEmail,
    IconProjects,
    IconSettings,
    IconTodo,
    BaseButton,
    IconNotification,
    Icon
  },
  data: () => ({
    showMobileMenu: true,
  }),
  methods: {
    logout() {
      router.push({ name: "auth" });
      // this.$store.dispatch('logout');
    },
    closeSidebar() {
      /**
       * check if the device is mobile
       * if true, close the sidebar when a nav link is clicked 
       * if not do nothing
       */
      const isMobileDevice = window.matchMedia("(max-width: 400px)").matches
      if (isMobileDevice) {
        this.$emit('close-sidebar')
      }
      return
    }
  }
});
</script>

<template>
  <nav>
    <div>
      <router-link class="link-item" :to="{ name: 'home' }" @click="closeSidebar">
        <Icon icon="mdi:home-variant-outline" /> Home
      </router-link>

      <router-link class="link-item" :to="{ name: 'emails' }" @click="closeSidebar">
      <Icon icon="mdi:email-outline" /> Emails
      </router-link>

      <router-link class="link-item" :to="{ name: 'projects' }" @click="closeSidebar">
        <IconProjects /> Projects
      </router-link>

      <router-link class="link-item" :to="{ name: 'todo' }" @click="closeSidebar">
        <IconTodo /> Todo
      </router-link>

      <router-link class="link-item" :to="{ name: 'notification' }" @click="closeSidebar">
        <IconNotification /> Notifications
      </router-link>

      <router-link class="link-item" :to="{ name: 'settings' }" @click="closeSidebar">
        <IconSettings /> Settings
      </router-link>
    </div>
    <BaseButton @click="logout" class="logout-button" text="Logout" />
  </nav>
</template>

<style scoped>
nav {
  padding-top: 100px;
  background-color: var(--primary);
  color: var(--light-text);
  position: relative;
  top: 0;
  left: 0;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

nav .link-item {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 50px;
  border-radius: 5px;
  margin-bottom: 15px;
  display: inline-flex;
  align-items: flex-end;
  text-decoration: none;
  color: var(--light-text);
  column-gap: 15px;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
}

nav .link-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.logout-button {
  width: 80%;
  background-color: var(--white);
  position: absolute;
  bottom: 35px;
  margin: 0 auto;
  display: block;
  left: 10%;
  color: var(--primary);
  color: var(--dark-text);
  box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
  -webkit-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
  -moz-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
}

.logout-button:hover {
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}

.close {
  display: none;
}

.show__mobile__menu {
  display: block;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.hide__mobile__menu {
  display: none;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/**---------------mobile scree styling----------------- */
@media screen and (max-width: 768px) {
  nav {
    padding: 65px 0;
    /* min-height: 65vh; */
    height: auto;
  }

  .logout-button {
    margin-top: 35px;
    position: static;
  }

  nav .link-item {
    padding: 15px 30px;
  }

  nav .link-item:first-child {
    margin-top: 35px;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: block;
  }
}
</style>
