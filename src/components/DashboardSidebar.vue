<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions } from "pinia";
export default defineComponent({
  name: "AppNavigation",
  components: {
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
        name: "notification",
        icon: "mdi:bell-outline",
        path: "notification",
      },
      {
        name: "emails",
        icon: "mdi:email-outline",
        path: "emails",
        children: [
          {
            // get all emails
            path: "emails",
            name: "inbox",
          },
          {
            // create new email
            name: "new",
            path: "new-email",
          },
          //TODO:create category
          {
            name: "important",
            path: "important-email",
          },
          {
            name: "starred",
            path: "starred-email",
          },
          {
            name: "trashed",
            path: "trashed-email",
          },
        ],
      },

      {
        name: "notes",
        icon: "mdi:note-edit-outline",
        path: "all-notes",
        children: [
          {
            name: "all entries",
            path: "all-notes",
          },
          {
            name: "new entry",
            path: "add-note",
          },
        ],
      },
      {
        name: "task",
        icon: "mdi:format-list-checks",
        path: "task",
        children: [
          {
            name: "all task",
            path: "all-task",
          },
          {
            name: "new task",
            path: "add-task",
          },
          /* {
           name: "edit task",
           path: "edit-task",
         },  */
        ],
      },
      {
        name: "profile",
        icon: "mdi:account",
        path: "profile",
      },
      {
        name: "settings",
        icon: "mdi:cog-outline",
        path: "settings",
      },
      {
        name: "help",
        icon: "mdi:help-circle-outline",
        path: "settings",
      },
    ],
  }),
  computed: {
    currentRouteName() {
      const route = this.$route.name;
      return String(route) || "360 Devs";
    },
  },
  mounted() {
    //display dropdown on click or on mouse over parent container
    const dropdown = document.querySelectorAll(".dropdown");
    dropdown.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        item.nextElementSibling?.classList.toggle("show");
      });
    });

    // console.log(this.$router.Rou);
  },
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
  <nav>

    <div id="nav__content">
      <!-- nave header-->
      <div id="nav__header">

      </div>

      <!--the links-->
      <div v-for="route in routes.sort()" :key="route.name">
        <!--use  this templates bases on if a route has children routes-->
        <template v-if="route.children">
          <div class="nav__link__parent link__item dropdown capitalize">
            <Icon :icon="route.icon" />
            <span>{{ route.name }}</span>
            <Icon icon="mdi:menu-down" />
          </div>
          <ul v-if="route.children" class="children__routes">
            <li v-for="child in route.children" class="child__route" @click="closeSidebar">
              <RouterLink @click="closeSidebar" :to="{ name: child.path }" :key="child.name" :class="[
                route.name === currentRouteName ? 'active' : '',
                'capitalize',
              ]">
                <span class="capitalize">{{
                    child.name.replaceAll("-", " ")
                }}</span>
              </RouterLink>
            </li>
          </ul>
        </template>

        <!--use this template if -->
        <template v-else>
          <RouterLink :to="{ name: route.path }" class="link__item" :class="[
            route.name === currentRouteName ? 'active' : '',
            'capitalize',
          ]" @click="closeSidebar">
            <Icon :icon="route.icon" />
            <span>{{ route.name }}</span>
          </RouterLink>
        </template>
      </div>
      <!-- the last out logout button-->
      <div class="link__item" @click="logout" id="logout__btn">
        <Icon icon="mdi:logout" />
        <span>logout</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding-top: 100px;
  background-color: var(--primary);
  color: var(--light-text);
  top: 0;
  left: 0;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 100vh;
  overflow-y: scroll;
  cursor: pointer;
  padding-bottom: 40px;
  /* z-index: 50000; */
}

.children__routes {
  margin-left: 80px;
  list-style: disc;
  display: none;
  transition: all 200ms ease;
}

.children__routes li.child__route {
  /* margin-bottom: 25px; */
  padding: 15px 5px;
}

.show {
  display: block !important;
}

nav .link__item {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 30px;
  border-radius: 5px;
  display: inline-flex;
  align-items: flex-end;
  text-decoration: none;
  color: var(--light-text);
  column-gap: 15px;
  font-size: 17px;
  transition: all 0.2s ease-in-out;
  position: relative;
  margin: 3px 0;
}

nav .link__item:hover,
.link__item:active,
.link__item:focus,
.active {
  background-color: rgba(0, 0, 0, 0.15);
  cursor: pointer;
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
    /* padding: 65px 0; */
    padding: 0;
    margin: 0;
    height: auto;
    background-color: rgba(0, 0, 0, 0.45);
    position: fixed;
    top: 0;
    left: 0;

    z-index: 5000;
  }

  nav #nav__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    height: 150px;
    border-radius: 0 0 4px 4px;
    background-color: var(--primary);
    background-image: url("@/assets/img/bg/sidebar-avatar.svg");
    background-size: cover;
    background-position: center center;
  }

  nav #nav__content {
    max-width: 75%;
    width: 100%;
    min-height: 100vh;
    background-color: var(--primary);
    background-color: var(--border-color);
    padding: 0;
    margin: 0;
  }

  nav .link__item {
    padding: 7.5px 30px;
    color: var(--default-dark);

    /* padding: 20px 30px 10px; */
  }

  nav .link__item:first-child {
    margin-top: 20px;
  }

  #logout__btn {
    margin-top: 15px;
    /* margin-top: 35px; */
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
