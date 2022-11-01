<script lang="ts">
import { Icon } from "@iconify/vue";
import AppSwitch from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
import BaseTextInput from "@/components/BaseTextInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import Spinner from "@/components/AppLoader.vue";
export default defineComponent({
  name: "profile__pageView",
  components: {
    AppSwitch,
    Icon,
    BaseTextInput,
    BaseButton,
    Spinner,
  },
  methods: {
    ...mapActions(useAuthStore, ["updateUserInformation"]),
    toggleTheme() {
      this.preferences.theme =
        this.preferences.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute(
        "data-theme",
        this.preferences.theme
      ); // sets the data-theme attribute
      localStorage.setItem("theme", this.preferences.theme); // stores theme value on local storage
    },
    updateProfile() {
      //TODO: implement this controller
      this.updateUserInformation(this.profile);
      console.log("updated");
    },
  },
  computed: {
    ...mapState(useAuthStore, ["userInformation", "isLoading"]),
    fullname() {
      return String(this.userInformation?.fullname) || "Jane Doe";
    },
    username() {
      return String(this.userInformation?.username) || "username";
    },
    email() {
      return String(this.userInformation?.email) || "jane@mailer.com";
    },
    // the user profile information
    /*   profile() {
        return { ...this.userInformation, password: "12345678" };
      }, */
    //disabled state
    disabledState() {
      return this.isLoading === true ? true : false;
    },
    profile: () => ({
      fullname: "",
      username: "",
      email: "",
      theme: "",
    }),
  },
  data: () => ({
    networkError: false,
    preferences: {
      darkMode: true,
      theme: "",
      showNetworkError: false,
      allowPushNotifications: false,
      enable2FA: true,
    },
  }),
});
</script>

<template>
  <div id="profile__page">
    <!--avatar-->
    <div id="avatar">
      <!--icon-->
      <img src="@/assets/img/illustration/default_user.png" alt="avatar" />
      <!--edit  profile__page-->
      <button id="edit__button">
        <Icon icon="mdi:pencil" />
      </button>

      <!---name and email-->
      <div id="user">
        <h3>{{ fullname }}</h3>
        <small>{{ email }}</small>
      </div>
    </div>

    <section id="user__information">
      <h3>Account Information</h3>
      <form action="" @submit.prevent="updateProfile">
        <BaseTextInput placeholder="Jane Doe" label="fullname" v-model="fullname" />
        <BaseTextInput placeholder="jane@mailer.com" label="email" type="email" class="field" v-model="email" />
        <BaseTextInput placeholder="username" v-model="username" label="username" type="text" class="field" />
        <BaseButton text="" :disabled="disabledState">
          <span v-show="!isLoading">Save Changes</span>
          <Spinner :animation-duration="1000" :size="30" :color="'#ffffff'" v-show="isLoading" />
        </BaseButton>
      </form>
    </section>

    <section id="preferences">
      <h3>Preferences</h3>
      <div>
        <AppSwitch v-model="preferences.darkMode" @click="toggleTheme" /> dark
        mode
      </div>
      <div>
        <AppSwitch v-model="preferences.showNetworkError" /> network error
        message
      </div>
      <div>
        <AppSwitch v-model="preferences.allowPushNotifications" /> allow push
        notifications
      </div>
      <div>
        <AppSwitch v-model="preferences.enable2FA" /> enable 2FA
      </div>
    </section>

    <section>
      <h3>Security</h3>

      <BaseTextInput placeholder="new password" label="New Password" type="password" class="field" />
      <BaseTextInput placeholder="new password" label="Confirm Password" type="password" class="field" />
    </section>
  </div>
</template>

<style scoped>
#user__information button {
  color: inherit;
  background-color: #f5f5f5;
  border: 1px solid var(--primary);
  margin-top: 25px;
  width: unset;
}

#profile__page {
  text-transform: capitalize;
  font-size: 15px;
}

#profile__page #avatar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  position: relative;
  /* display: none; */
}

#profile__page #user {
  margin-top: -40px;
  margin-bottom: 55px;
}

#profile__page .form__field {
  margin-bottom: 15px;
}

#profile__page small {

  font-weight: 400;

  text-transform: lowercase;
  color: #9ca3af;
}

#profile__page #avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

#profile__page #edit__button {
  border-radius: 25px;
  background-color: var(--primary);
  color: #fff;
  padding: 4px;
  border: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;
  top: -35px;
  right: -30px;
}

#profile__page #edit__button svg {
  width: 15px;
  height: 15px;
}

#profile__page section h3 {
  font-size: 14.5px;
  font-weight: 500;
  font-weight: 500;
  line-height: 28px;
  color: var(--secondary);
  margin-bottom: 18px;
}

#profile__page-control>div {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
}

#preferences {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

section {
  margin-bottom: 4.75rem;
}

@media screen and (max-width: 768px) {
  #user__information button {
    width: 100%;

  }
}
</style>
