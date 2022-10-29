<script lang="ts">
import { Icon } from "@iconify/vue";
import AppSwitch from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import BaseTextInput from "@/components/BaseTextInput.vue";
export default defineComponent({
    name: "profileView",
    components: { AppSwitch, Icon, BaseTextInput },
    methods: {
        toggleTheme() {
            this.profile.theme = this.profile.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
            document.documentElement.setAttribute("data-theme", this.profile.theme); // sets the data-theme attribute
            localStorage.setItem("theme", this.profile.theme); // stores theme value on local storage
        },
    },
    computed: {
        ...mapState(useAuthStore, ["userInformation"]),
        fullname() {
            return this.userInformation?.fullname || "Jane Doe";
        },
        username() {
            return this.userInformation?.username || "dhje";
        },
        email() {
            return this.userInformation?.email || "jane@mailer.com";
        },
    },
    data: () => ({
        networkError: false,
        profile: {
            darkMode: true,
            theme: "",
            showNetworkError: false,
            allowPushNotifications: false,
        },
    }),
});
</script>

<template>
    <div id="profile">
        <!--avatar-->
        <div id="avatar">
            <!--icon-->
            <img src="@/assets/img/illustration/default_user.png" alt="avatar" />
            <!--edit  profile-->
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
            <BaseTextInput placeholder="Jane Doe" label="" />
            <BaseTextInput placeholder="jane@mailer.com" label="" type="email" class="field" />
            <BaseTextInput placeholder="dhje" label="" type="text" class="field" />
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
        </section>

        <section>
            <h3>Security</h3>
        </section>
    </div>
</template>

<style scoped>
:root {
    --toggle-width: 2rem;
    --toggle-height: 1.25rem;
    --toggle-border: 25px;
    --toggle-font-size: 0.75rem;
    --toggle-duration: 150ms;
    --toggle-bg-on: var(--primary);
    --toggle-bg-off: #e5e7eb;
    --toggle-bg-on-disabled: #d1d5db;
    --toggle-bg-off-disabled: #e5e7eb;
    --toggle-border-on: #aeb1b0;
    --toggle-border-off: #e5e7eb;
    --toggle-border-on-disabled: #d1d5db;
    --toggle-border-off-disabled: #e5e7eb;
    --toggle-ring-width: 3px;
    --toggle-ring-color: transparent;
    --toggle-text-on: #ffffff;
    --toggle-text-off: hsl(217, 19%, 27%);
    --toggle-text-on-disabled: #9ca3af;
    --toggle-text-off-disabled: #9ca3af;
    --toggle-handle-enabled: #ffffff;
    --toggle-handle-disabled: #f3f4f6;
}

#profile #avatar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    gap: 15px;
    text-align: center;
    position: relative;
}

#profile .form__field {
    margin-bottom: 5px;

}

#profile small {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    text-transform: lowercase;
    color: #9ca3af;
}

#profile #avatar img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

#profile button {
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

#profile button svg {
    width: 15px;
    height: 15px;
}

#profile section h3 {
    color: var(--secondary);
}


#profile-control>div {
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
