<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/AppLoader.vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
import { Icon } from "@iconify/vue";
import OtpInput from "vue3-otp-input";

export default defineComponent({
    name: "AuthView",
    components: {
        BaseTextInput: BaseTextInputVue,
        BaseButton: BaseButtonVue,
        Spinner,
        Icon,
        OtpInput,
    },
    data: () => ({
        form: {
            email: "",
            password: "",
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
        },
        goBack() {
            this.$router.go(-1)
        }
    },
});
</script>

<template>
    <div id="confirm__otp__page">
        <div class="container">
            <!--bg-->
            <div></div>
            <!--logon form-->
            <div>
                <div class="go__back">
                    <Icon icon="mdi:arrow-left" size="20" @click="goBack" />
                </div>
                <div class="title">
                    <h1>Confirm OTP</h1>
                    <p class="sub__her__text">
                        Please provide token sent to your email.
                        you.
                    </p>
                </div>
                <!--api response -->
                <small class="error"> {{ apiResponseMsg }}</small>
                <form action="" method="post" @submit.prevent="login">
                    <!--form field for otp-->
                  
                    <!--form field password-->
                    <BaseButton text="" :disabled="disabledState">
                        <span v-show="!isLoading">Continue</span>
                        <Spinner :animation-duration="1000" :size="30" :color="'#ffffff'" v-show="isLoading" />
                    </BaseButton>
                </form>
            </div>

        </div>

    </div>
</template>

<style scoped>
.hidden {
    display: none !important;
}

.goto__sign__up {
    font-size: 14px;
    margin-top: 10px;
    color: var(--secondary);
    text-align: left !important;
}

.goto__sign__up a {
    text-decoration: underline;

}


#confirm__otp__page .container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    column-gap: 100px;
    grid-template-rows: 1fr;
    grid-template-areas: "bg form";
    min-height: 80vh;
    position: relative;
}

/**the background container */
#confirm__otp__page .container>div:first-child {
    background-image: url("@/assets/img/bg/login-bg.svg");
    background-size: cover;
    background-position: center center;
}

main .container>div:last-child {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
}

main .container>div:last-child h1 {
    margin-bottom: 5px;
    line-height: 64px;
    font-size: 48px;
}

main .container>div:last-child h1+small {
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
    #confirm__otp__page .container {
        /* padding: 50px 0; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        min-height: 90vh;
    }

    #confirm__otp__page .container>div:first-child {
        display: none;
    }

    #confirm__otp__page .container>div:last-child {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 0 30px;
        place-content: center;
        height: 90vh;
        margin: 0 auto;
    }

    #confirm__otp__page .container>div:last-child h1+small.error {
        margin-bottom: 35px;
    }

    #confirm__otp__page .container div:last-child form {
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

    #confirm__otp__page .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 25px;
    }

    #confirm__otp__page .title h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
    }

    #confirm__otp__page .title p {
        font-size: 0.85rem;
        align-items: center;
        justify-content: center;
        line-height: 20px;
        color: var(--secondary);
    }

    .go__back {
        margin-bottom: 20px;
    }
}
</style>
