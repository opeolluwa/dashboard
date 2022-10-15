<script lang="ts">
import DashboardSidebarVue from "@/components/DashboardSidebar.vue";
import DashboardHeaderVue from "@/components/DashboardHeader.vue";
import ViewLayoutVue from "@/components/ViewLayout.vue";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
import router from "@/router";
import axios from "axios";
export default defineComponent({
  components: {
    DashboardSidebar: DashboardSidebarVue,
    DashboardHeader: DashboardHeaderVue,
    ViewLayout: ViewLayoutVue,
  },
  data: () => ({
    showSidebar: false,
  }),
  /**
   * before entering the route we check if the user is logged in
   * to do this, try to get the token from the  local storage
   * if token does not exists, redirect to login page
   * else use the token to make request to the server, if the server return a valid response, enter this routes else redirect to login page
   */
 /* beforeRouteEnter(to, from, next) {
    // async function checkBearerTokenValidity() {
    const token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      //try to get the user information from the server
      try {
        axios
          .get("/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((severResponse) => {
            const responseData = severResponse.data;
      
            if (responseData.success) {
              next();
            } else {
              localStorage.removeItem("token");
              router.push({ name: "auth" });
              console.log("something bad happened ");
            }
          });

        // console.log({ response });
      } catch (error: any) {
        console.log({ error: error.message });
        console.log("something bad happened ");
      }
    }
    // }
    // checkBearerTokenValidity();
  },*/

  computed: {
    ...mapState(useAuthStore, ["authorizationToken", "userInformation"]),
  },
  created() {
    this.makeAuthRequest();
  },
  mounted() {
    this.showSidebar = window.matchMedia("(max-width: 400px)").matches
      ? false
      : true;

    //the dark theme configuration
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme as string); // updates the data-theme attribute

    //  * get the refresh token every 20 minutes
    const refreshToken = () => {
      this.refreshToken();
    };
    window.setInterval(refreshToken, 1000 * 20 * 60);
  },
  methods: {
    ...mapActions(useAuthStore, {
      getUser: "getUserInformation",
      refreshToken: "getRefreshToken",
    }),

    /**
     * @function makeAuthRequest - make request to the server to get the user information
     * @returns {userInformation} - returns the user information
     * @param {authorizationToken} - the authorization token
     */
    makeAuthRequest() {
      const token = String(this.authorizationToken);
      this.getUser(token);
    },
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
  /* overflow-y: scroll; */
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
    overflow-y: scroll;
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
