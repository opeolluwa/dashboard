<script lang="ts">
import { Icon } from "@iconify/vue";
import BaseButton from "./BaseButton.vue";
// import router from "@/router";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions } from "pinia";
export default defineComponent({
  name: "AppNavigation",
  components: {
    BaseButton,
    Icon,
  },
  data: () => ({
    showMobileMenu: true,
    routes: [
      {
        name: "Dashboard",
        icon: "mdi:home-variant-outline",
        path: "home",
      },
      {
        name: "emails",
        icon: "mdi:email-outline",
        path: "emails",
      },
      {
        name: "notification",
        icon: "mdi:bell-outline",
        path: "notification",
      },
      {
        name: "notes",
        icon: "mdi:note-edit-outline",
        path: "all-notes",
      },
      {
        name: "todo",
        icon: "mdi:format-list-checks",
        path: "todo",
      },
      /*    {
        name: "projects",
        icon: "mdi:lightbulb-on-30",
        path: "projects",
      }, */
      {
        name: "settings",
        icon: "mdi:cog-outline",
        path: "settings",
      },
    ],
  }),
  methods: {
    //get the logout action from the store
    ...mapActions(useAuthStore, ["logoutRequest"]),
    logout() {
      //exec the call to the store mapped logout action
      // this.$router.push({ name: "login" });
      this.logoutRequest();
    },
    closeSidebar() {
      /**
       * check if the device is mobile
       * if true, close the sidebar when a nav link is clicked
       * if not do nothing
       */
      const isMobileDevice = window.matchMedia("(max-width: 400px)").matches;
      if (isMobileDevice) {
        this.$emit("close-sidebar");
      }
      return;
    },
  },
});
</script>

<template>
  <nav @click="closeSidebar">
    <div id="nav__content">
      <!--the links-->
      <RouterLink
        v-for="route in routes.sort()"
        class="link-item"
        :to="{ name: route.path }"
        @click="closeSidebar"
        :key="route.name"
      >
        <Icon :icon="route.icon" />
        <span class="capitalize">{{ route.name }}</span>
      </RouterLink>
    </div>
    <BaseButton @click="logout" class="logout-button d-noe" text="Logout" />
  </nav>
</template>

<style scoped>
nav {
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.45);
  background-color: var(--primary);
  color: var(--light-text);
  position: relative;
  top: 0;
  left: 0;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 100vh;
  overflow-y: scroll;
  cursor: pointer;
  /* z-index: 50000; */
}

/* nav {
  background-color: var(--primary);
  width: 75%;
  height: 100%;
} */

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
