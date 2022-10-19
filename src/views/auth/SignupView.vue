<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/AppLoader.vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
export default defineComponent({
    name: "AuthView",
    components: {
        BaseTextInput: BaseTextInputVue,
        BaseButton: BaseButtonVue,
        Spinner,
    },
    data: () => ({
        form: {
            email: "",
            password: "",
            username: "",
            fullname: ""
        },
        //destructure the api response into this variable
        apiResponse: {
            message: "",
            token: "",
        },
    }),

    mounted() {
        /**
         * check if the user is already logged in and the token is still valid
         * if true, go straight to the dashboard, else, stay on the login page
         * once on the dashboard, make request for refresh token.
         */
        if (this.authorizationToken) {
            this.getUserInformation(this.authorizationToken);
            // router.push({ name: "home" });
        }
    },
    computed: {
        ...mapState(useAuthStore, [
            "isLoading",
            "apiError",
            "apiResponseMsg",
            "authorizationToken",
        ]),
        //disabled state
        disabledState() {
            return this.isLoading === true ? true : false;
        },
    },
    methods: {
        //import the methods from store
        ...mapActions(useAuthStore, {
            makeLoginRequest: "loginRequest",
            getUserInformation: "getUserInformation",
        }),

        //exec the login action coming from the store mapped actions
        login() {
            this.makeLoginRequest(this.form);
        },

        //go to home, debug only
        goToHome() {
            this.$router.push({ name: "home" })
        }
    },
});
</script>

<template>
    <div class="container view">
        <!--bg-->
        <div></div>
        <!--logon form-->
        <div>
            <img src="@/assets/illustrations/onbaording-screen-two.png" alt="illustration" class="d-none">
            <h1>Sign Up</h1>
            <p class="sub__hero__text">Create an account to begin</p>
            <!--api response -->
            <small class="error"> {{ apiResponseMsg }}</small>
            <form action="" method="post">
                <!--form field fullname-->
                <BaseTextInput placeholder="fullname" label="fullname" v-model="form.fullname" type="text"
                    class="field" />
                <!--username-->
                <BaseTextInput placeholder="username" label="username" v-model="form.username" type="text"
                    class="field" />
                <!--form field email-->
                <BaseTextInput placeholder="email" label="email" v-model="form.email" type="email" class="field" />
                <!--form field password-->
                <BaseTextInput placeholder="password" type="password" label="password" v-model="form.password"
                    class="field" />
                <!--form field submit, change color to black while waiting for response from server-->
                <BaseButton text="" :disabled="disabledState" @click="goToHome">
                    <span v-show="!isLoading">Login</span>
                    <Spinner :animation-duration="1000" :size="30" :color="'#ffffff'" v-show="isLoading" />
                </BaseButton>
            </form>

            <!--custom install script-->
            <!-- Install button, hidden by default -->
        </div>
    </div>
</template>

<style scoped>
.hidden {
    display: none !important;
}




.container {
    padding-top: 200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    column-gap: 100px;
    grid-template-rows: 1fr;
    grid-template-areas: "bg form";
    min-height: 100vh;
    position: relative;
}

/**the background container */
.container>div:first-child {
    background-image: url("@/assets/img/bg/login-bg.svg");
    background-size: cover;
    background-position: center center;
}

.container>div:last-child {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.container>div:last-child h1 {
    margin-bottom: 5px;
    line-height: 64px;
    font-size: 48px;
}

.container>div:last-child h1+small {
    margin-bottom: 30px;
}

input,
button,
.form__field input,
.field {
    width: 500px;
}

/** -----------------------------small devices------------------------ */
@media screen and (max-width: 768px) {
    .container {
        display: block;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "bg" "form";
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .container>div:first-child {
        display: none;
    }

    .container>div:last-child {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 0 30px;
        place-content: center;
        place-items: center;
        height: 90vh;
        margin: 0 auto;
    }

    .container>div:last-child h1 {
        margin-bottom: 7.5px;
        line-height: 26px;
        font-size: 28px;
        text-align: center;
    }

    .container>div:last-child h1+small.error {
        margin-bottom: 35px;
    }

    .container div:last-child form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        column-gap: 15px;
    }

    .form__field,
    button {
        width: auto;
    }
}
</style>
