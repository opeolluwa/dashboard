<script lang="ts">
import DashboardSidebarVue from "@/components/DashboardSidebar.vue";
import DashboardHeaderVue from "@/components/DashboardHeader.vue";
import ViewLayoutVue from "@/components/ViewLayout.vue";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
import DashboardBottomNav from "@/components/DashboardBottomNav.vue";
export default defineComponent({
  components: {
    DashboardSidebar: DashboardSidebarVue,
    DashboardHeader: DashboardHeaderVue,
    ViewLayout: ViewLayoutVue,
    DashboardBottomNav,
  },
  data: () => ({
    crumbs: ["Home", "Category", "Sub category"],
    showSidebar: false,
    userTheme: "light-theme"
  }),
  /**
   * before entering the route we check if the user is logged in
   * to do this, try to get the token from the  local storage
   * if token does not exists, redirect to login page
   * else use the token to make request to the server, if the server return a valid response, enter this routes else redirect to login page
   */
  /*beforeRouteEnter(to, from, next) {
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
              next(() => {
                console.log("user is logged in ", from.name, to.name);
                const desiredRoute = String(to.name);
                router.push({ name: desiredRoute });
              });
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
  },
  */

  computed: {
    ...mapState(useAuthStore, ["authorizationToken", "userInformation"]),
    //breadcrumb
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

    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
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
    getTheme() {
      return localStorage.getItem("user-theme");
    },
    setTheme(theme: string) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },

    //track bread crumb
    selected(crumb: any) {
      console.log(crumb);
    },
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
    <!-- the side bar-->
    <DashboardSidebar v-show="showSidebar" @close-sidebar="showSidebar = false" />
    <main>
      <!-- the header-->
      <DashboardHeader @open-sidebar="showSidebar = !showSidebar" />

      <!--inject all views here-->
      <div id="view__box">
        <ViewLayout>
          <template #content>
            <RouterView />
          </template>
        </ViewLayout>
      </div>
      <!--bottom navigation for mobile only-->
      <DashboardBottomNav @close-sidebar="showSidebar = false" />
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
  scrollbar-color: var(--primary);
}

main header {
  grid-area: header;
}

main #view__box {
  grid-area: view;
  background-color: #f9f9f9;
  /* background-color: var(--background-color-primary); */
  min-height: 100vh !important;
  padding-top: 25px;
}

/**------------------styling on mobile devices----------------------- */
@media screen and (max-width: 768px) {
  .container {
    display: unset;
  }

  nav {
    /* height: unset !important; */
    /* padding-top: 55px; */
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    -webkit-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    -moz-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    height: 100vh;
  }

  main {
    height: unset;
    overflow-y: scroll;
  }

  main header {
    height: unset;
  }

  main #view__box {
    grid-area: view;
    /* background-color: #f9f9f9; */
    height: unset !important;
    min-height: 100vh;
    padding-top: unset;
    /* padding: 0  0  20px; */
    margin-bottom: 25px;
  }
}
</style>
