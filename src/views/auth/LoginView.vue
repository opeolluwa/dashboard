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
      this.$router.push({ name: "home" });
    },
  },
});
</script>

<template>
  <div id="login__page">
    <div class="container">
      <!--bg-->
      <div></div>
      <!--logon form-->
      <div>
        <div class="title">
          <h1 class="text-8xl">Login</h1>
          <p class="sub__her__text">Please login to your account.</p>
        </div>
        <!--api response -->
        <small class="error"> {{ apiResponseMsg }}</small>
        <form action="" method="post" @submit.prevent="login">
          <!--form field email-->
          <BaseTextInput
            placeholder="example@mailer.com"
            label="email"
            v-model="form.email"
            type="email"
            class="field"
          />
          <!--form field password-->
          <BaseTextInput
            placeholder="password"
            type="password"
            label="password"
            class="field"
            v-model="form.password"
            :reset-password="true"
          />
          <!--form field submit, change color to black while waiting for response from server-->

          <BaseButton text="" :disabled="disabledState">
            <span v-show="!isLoading">Login</span>
            <Spinner
              :animation-duration="1000"
              :size="30"
              :color="'#ffffff'"
              v-show="isLoading"
            />
          </BaseButton>
        </form>

        <!--custom install script-->
        <!-- Install button, hidden by default -->
        <div class="goto__sign__up">
          Don&apos;t have an account?
          <RouterLink :to="{ name: 'sign-up' }">Sign up </RouterLink>
        </div>
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

#login__page .container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-areas: "bg form";
  height: 100vh;
  position: relative;
}

/**the background container */
#login__page .container > div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

#login__page .container > div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main .container > div:last-child h1 + small {
  margin-bottom: 30px;
}

input,
button,
.form__field input,
.field {
  width: 500px;
}

#login__page .title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 25px;
}

#login__page .title h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}

#login__page .title p {
  align-items: center;
    justify-content: center;
    line-height: 28px;
    color: var(--secondary);
}

/** -----------------------------small devices------------------------ */
@media screen and (max-width: 768px) {
  #login__page .container {
    /* padding: 50px 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 90vh;
  }

  #login__page .container > div:first-child {
    display: none;
  }

  #login__page .container > div:last-child {
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

  #login__page .container > div:last-child h1 + small.error {
    margin-bottom: 35px;
  }

  #login__page .container div:last-child form {
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

  .form__field:last-child {
    margin-bottom: 0;
    display: none;
  }
}
</style>
