<template>
  <!--bottom nav
    contains 
    - home
    - search
    - add
    - notification
    - profile

    -->
  <div id="bottom__nav">
    <div class="bottom__nav__item" v-for="route in routes" :key="route.name"
      :class="[route.name === currentRouteName ? 'active' : '']" @click="closeSidebar">
      <template v-if="route.isButton != true">
        <RouterLink :to="{ name: route.path }">
          <Icon :icon="route.icon" />
        </RouterLink>
        <span>{{ route.name }} </span>
      </template>
      <template v-else>
        <div @click="$emit('toggle-theme')">
          <Icon :icon="route.icon" />
        </div>
        <span>{{ route.name }} </span>
      </template>
    </div>


  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardBottomNav",
  components: {
    Icon,
  },
  data: () => ({
    //the current route name
    // currentRouteName: '',
    routes: [
      {
        name: "home",
        icon: "mdi:home-variant-outline",
        path: "home",
      },
      {
        name: "notification",
        icon: "mdi:bell-outline",
        path: "notification",
      },

      {
        name: "tasks",
        icon: "mdi:plus-circle-outline",
        path: "add-task",
      },
      {
        name: "theme",
        icon: "mdi:brightness-4",
        path:"settings",
        isButton: true
      },
      {
        name: "profile",
        icon: "mdi:account",
        path: "profile",
      },
    ],
  }),
  computed: {
    currentRouteName() {
      const route = this.$route.name;
      return String(route) || "360 Devs";
    },
  },
  methods: {
    alert() {
     window.alert("message") 
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
    //get the current route nae and compare it with visited class
    activeRoute(route: any) {
      return route === this.currentRouteName; //boolean
    },
  },
});
</script>

<style scoped>
#bottom__nav {
  display: flex;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px 5px;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  border-top: 1px solid var(--border-color);
  background-color: #f9f9f9;
  /* display: none; */
}

.bottom__nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  /* padding: 5px; */
  color: var(--secondary);
  text-transform: capitalize;
}

.bottom__nav__item svg {
  width: 22px;
  height: 22px;
}

.bottom__nav__item span {
  margin-top: 2px;
  font-size: 10px;
  font-weight: 500;
}

.bottom__nav__item:hover,
.bottom__nav__item:focus,
.bottom__nav__item:link,
.bottom__nav__item:active,
.active {
  color: var(--primary);
  transition: 200ms ease-in-out;
}

@media screen and (min-width: 768px) {
  #bottom__nav {
    display: none;
  }
}
</style>
