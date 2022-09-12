<script lang="ts">
import IconEmail from "./icons/IconEmail.vue";
import IconHome from "./icons/IconHome.vue";
import IconProjects from "./icons/IconProjects.vue";
import IconSettings from "./icons/IconSettings.vue";
import IconTodo from "./icons/IconTodo.vue";
import BaseButton from "./BaseButton.vue";
import router from "@/router";
export default {
  name: "AppNavigation",
  components: {
    IconEmail,
    IconHome,
    IconProjects,
    IconSettings,
    IconTodo,
    BaseButton,
  },
  data: () => ({
    showMobileMenu: true,
  }),
  methods: {
    logout() {
      router.push({ name: "auth" });
      // this.$store.dispatch('logout');
    },
  },
};
</script>

<template>
   <nav :class="showMobileMenu ? '' : 'hide__mobile__menu'"> 
    
    <!-- @click="$emit('close-navigation')" -->
    <div class="close mobile" @click="$emit('close-sidebar')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
        />
      </svg>
    </div>
    <div>
      <router-link class="link-item" :to="{ name: 'home' }">
        <IconHome /> Home
      </router-link>

      <router-link class="link-item" :to="{ name: 'emails' }">
        <IconEmail /> Emails
      </router-link>

      <router-link class="link-item" :to="{ name: 'projects' }">
        <IconProjects /> Projects
      </router-link>

      <router-link class="link-item" :to="{ name: 'todo' }">
        <IconTodo /> Todo
      </router-link>

      <router-link class="link-item" :to="{ name: 'settings' }">
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
  margin-bottom: 10px;
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
    padding-top: 50px;
    height: auto;
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
