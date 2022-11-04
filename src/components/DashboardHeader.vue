<script lang="ts">
import { defineComponent } from "vue";
import greetings from "./greetings";
import { Icon } from "@iconify/vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
export default defineComponent({
  name: "DashboardHeader",
  data: () => ({
    greetings,
    //get the notification and messages from the store
    notifications: [],
    messages: [],
  }),
  components: {
    Icon,
  },
  methods: {
    //control the nav bar visibility
    toggleSidebar() {},
    ...mapActions(useAuthStore, ["logoutRequest"]),
  },
  computed: {
    //get the user from the store
    ...mapState(useAuthStore, { user: "userInformation" }),
    username() {
      return this.user?.username || "username";
    },

    //get the user profile picture from the store, if not present use the default avatar
    userAvatar() {
      const avatar =
        this.user?.avatar || "@/assets/img/illustration/default_user.png";
      return String(avatar);
    },
    // the current route name
    currentRouteName() {
      const route = this.$route.name;
      return String(route).replaceAll("-", " ") || "360 Devs";
    },
    // the user fullname
    fullname() {
      return this.user?.fullname || "Default user";
    },
  },
});
</script>
<template>
  <header class="view">
    <!--navigation button for small devices go here-->
    <div class="header__nav__mobile">
      <Icon icon="mdi:menu" @click="$emit('open-sidebar')" />
      <div id="current__route">
        <RouterLink :to="{ name: 'home' }">{{ currentRouteName }}</RouterLink>
      </div>
    </div>

    <!--greetings-->
    <div class="header__nav__desktop">
      <h2>
        Hi <span style="text-transform: capitalize">{{ username }} </span> 😊
      </h2>
      <small>{{ greetings }}</small>
    </div>

    <!--account controls-->
    <div class="account__controls">
      <div class="icons">
        <RouterLink :to="{ name: 'notification' }">
          <Icon icon="mdi:bell-outline" /> <sup></sup>
        </RouterLink>

        <RouterLink :to="{ name: 'emails' }">
          <Icon icon="mdi:email-outline" /> <sup></sup>
        </RouterLink>
      </div>
      <!--account option-->
      <div class="account__options">
        <!--the user image or use the default-->
        <div class="avatar">
          <img src="@/assets/img/illustration/default_user.png" alt="user" />
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px -1px;
}

.account__controls {
  display: flex;
  align-items: center;
}

.account__options {
  display: flex;
}

.account__options .avatar {
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
}

.account__options .avatar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* display: none; */
}

header * {
  background-color: transparent !important;
}

h1 a,
h2 a {
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: var(--default-dark);
}

#current__route {
  font-style: normal;
  font-weight: 500;
  font-size: 14.5px;
  line-height: 16px;
  margin-left: 10px;
}

#current__route::first-letter {
  text-transform: uppercase;
}

small {
  display: block;
}

.header__nav__mobile {
  display: none;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  width: 100px;
}

.icons a {
  text-decoration: none;
  color: inherit;
  position: relative;
}

sup {
  /* vertical-align: super; */
  position: absolute;
  top: -4px;
  right: -3px;
  background-color: var(--default-red);
  color: var(--light-text);
  font-size: 13px;
  padding: 3px;
  border-radius: 50%;
  font-weight: 500;
  width: 10px;
  display: flex;
  place-items: center;
  height: 10px;
  text-align: center;
}

.icons svg {
  width: 24px;
  height: 24px;
  /* fill: #000; */
}

/**--------------------mobile devices styling------------------------ */
@media screen and (max-width: 768px) {
  header {
    padding: 8px 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;
    width: 100%;
    background-color: var(--primary);
    color: var(--white);
  }

  /** hide desktop greeting */
  .header__nav__desktop {
    display: none;
  }

  .header__nav__mobile {
    display: flex;
    align-items: center;
    /* column-gap: -15px; */
  }

  .header__nav__mobile h1 {
    font-size: 22px;
    font-weight: 500;

    line-height: 36px;
    margin-left: 10px;
    color: var(--light-text);
  }

  header h1 a,
  header h2 a {
    color: var(--light-text);
  }

  .header__nav__mobile svg {
    width: 20px;
    height: 20px;
  }

  .icons {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    width: unset;
    padding: 0;
    display: none;
  }

  .icons svg {
    width: 24px;
    height: 24px;
  }
}

svg {
  cursor: pointer;
}
</style>
