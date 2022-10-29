<script lang="ts">
import { Icon } from "@iconify/vue";
import AppSwitch from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import BaseTextInput from "@/components/BaseTextInput.vue";
import BaseButton from "@/components/BaseButton.vue";
export default defineComponent({
  name: "profile__pageView",
  components: { AppSwitch, Icon, BaseTextInput, BaseButton },
  methods: {
    toggleTheme() {
      this.profile.theme = this.profile.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.profile.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.profile.theme); // stores theme value on local storage
    },
    updateProfile() {
      //TODO: implement this controller
      // this.updateProfileRequest(this.profile);
      console.log("updated");

    }
  },
  computed: {
    ...mapState(useAuthStore, ["userInformation"]),
    fullname() {
      return String(this.userInformation?.fullname) || "Jane Doe";
    },
    username() {
      return String(this.userInformation?.username) || "username";
    },
    email() {
      return String(this.userInformation?.email) || "jane@mailer.com";
    },
  },
  data: () => ({
    networkError: false,
    profile: {
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
      <button id="edit">
        <Icon icon="mdi:pencil" />
      </button>

      <!---name and email-->
      <div id="user">
        <h3>{{ fullname }}</h3>
        <small>{{ email }}</small>
      </div>
    </div>

    <section>
      <h3>Account Information</h3>
      <form action="" @submit="updateProfile">
        <BaseTextInput placeholder="Jane Doe" label="fullname" v-model="fullname" />
        <BaseTextInput placeholder="jane@mailer.com" label="email" type="email" class="field" v-model="email" />
        <BaseTextInput placeholder="username" v-model="username" label="username" type="text" class="field" />
        <BaseButton text="Save Changes" class="field" />
      </form>
    </section>

    <section id="preferences">
      <h3>Preferences</h3>
      <div>
        <AppSwitch v-model="profile.darkMode" @click="toggleTheme" /> dark mode
      </div>
      <div>
        <AppSwitch v-model="profile.showNetworkError" /> network error message
      </div>
      <div>
        <AppSwitch v-model="profile.allowPushNotifications" /> allow push
        notifications
      </div>
      <div>
        <AppSwitch v-model="profile.enable2FA" /> enable 2FA
      </div>
    </section>

    <section>
      <h3>Security</h3>

      <BaseTextInput placeholder="new password" label="Change Password" type="text" class="field" />
    </section>
  </div>


</template>

<style scoped>
button {
  color: var(--primary);
  background-color: #f5f5f5;
  border: 1px solid var(--primary);
  margin-top: 15px;
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
  margin-bottom: 5px;
}

#profile__page small {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  text-transform: lowercase;
  color: #9ca3af;
}

#profile__page #avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

#profile__page button {
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

#profile__page button svg {
  width: 15px;
  height: 15px;
}

#profile__page section h3 {
  font-size: 1.2rem;
  font-family: "poppins";
  font-weight: 500;
  line-height: 28px;
  color: #000;
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
</style>
