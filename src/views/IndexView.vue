<script lang="ts">
import DashboardSidebarVue from "@/components/DashboardSidebar.vue";
import DashboardHeaderVue from "@/components/DashboardHeader.vue";
import ViewLayoutVue from "@/components/ViewLayout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    DashboardSidebar: DashboardSidebarVue,
    DashboardHeader: DashboardHeaderVue,
    ViewLayout: ViewLayoutVue,
  },
  data: () => ({
    showSidebar: false,
  }),
  computed: {},
  mounted() {
    this.showSidebar = window.matchMedia("(max-width: 400px)").matches
      ? false
      : true;
  },
  methods: {
    isDeviceMobile() {
      /**
       * use JavaScript to detect if the device is mobile via media query
       * if device is mobile, return true, else return false
       * pass this function to watch lifecycle hook
       */
      const isMobileDevice = window.matchMedia("(max-width: 400px)").matches;
      if (!isMobileDevice) {
        return true;
      }
      // return false
    },
  },
});
</script>

<template>
  <div class="container">
    <DashboardSidebar
      v-show="showSidebar"
      @close-sidebar="showSidebar = false"
    />
    <main>
      <DashboardHeader @open-sidebar="showSidebar = !showSidebar" />
      <div>
        <ViewLayout>
          <template #content>
            <RouterView />
          </template>
        </ViewLayout>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar content";
  column-gap: 0px;
  height: 100vh;
}

nav {
  grid-area: sidebar;
  height: 100vh !important;
}

main {
  grid-area: content;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-color: var(--tertiary) var(--default-dark);
}

main header {
  grid-area: header;
}

main > div {
  grid-area: view;
  background-color: #f9f9f9;
  height: 100vh !important;
}

/**------------------styling on mobile devices----------------------- */
@media screen and (max-width: 768px) {
  .container {
    display: unset;
    /* position: relative; */
  }

  nav {
    height: unset !important;
    padding-top: 55px;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    -webkit-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    -moz-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
  }

  main {
    height: unset;
  }

  main header {
    height: unset;
  }

  main > div {
    grid-area: view;
    background-color: #f9f9f9;
    height: unset !important;
    min-height: 100vh;
  }
}
</style>
