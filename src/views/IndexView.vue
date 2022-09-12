<script lang="ts">
import DashboardSidebarVue from "@/components/DashboardSidebar.vue";
import DashboardHeaderVue from "@/components/DashboardHeader.vue";
import ViewLayoutVue from "@/components/ViewLayout.vue";
export default {
  components: {
    DashboardSidebar: DashboardSidebarVue,
    DashboardHeader: DashboardHeaderVue,
    ViewLayout: ViewLayoutVue,
  },
};
</script>

<template>
  <div class="container">
    <DashboardSidebar />
    <main>
      <DashboardHeader />
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
    height: 60vh !important;
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
    /* padding: 0 30px; */
  }

  main > div {
    grid-area: view;
    background-color: #f9f9f9;
    height: unset !important;
  }
}
</style>
