<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/Spinner.vue";
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
    ...mapState(useAuthStore, ["isLoading", "apiError", "authorizationToken"]),
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
          <h1>Login</h1>
          <p class="sub__her__text">Please login to your account.</p>
        </div>

        <!--socila login buttons-->
        <BaseButton text="continue with Google" class="social__login">
          <img src="@/assets/icons/google.png" alt="continue with google" />
        </BaseButton>
        <BaseButton text="Continue with GitHub" class="social__login">
          <img src="@/assets/icons/github.png" alt="continue with google" />
        </BaseButton>
        <BaseButton text="Continue with Twitter" class="social__login">
          <img src="@/assets/icons/twitter.png" alt="continue with google" />
        </BaseButton>

        <!--continue with google-->
        <!--continue with email-->
        <small class="continue__with__email d-none">
          <span class="divider__line"> ------------------ </span>
          <span> continue with email </span>
          <span class="divider__line"> ---------------- </span>
        </small>
        <form action="" method="post" @submit.prevent="login">
          <!--form field email-->
          <BaseTextInput placeholder="example@mailer.com" label="email" v-model="form.email" type="email"
            class="field" />
          <!--form field password-->
          <BaseTextInput placeholder="password" type="password" label="password" class="field" v-model="form.password"
            :reset-password="false" />
          <!--form field submit, change color to black while waiting for response from server-->
          <BaseButton text="" :disabled="disabledState">
            <span v-show="!isLoading">Login</span>
            <Spinner :animation-duration="1000" :size="30" :color="'#ffffff'" v-show="isLoading" />
          </BaseButton>
        </form>

        <!--custom install script-->
        <!-- Install button, hidden by default -->
        <small class="goto__page">
          Don&apos;t have an account?
          <RouterLink :to="{ name: 'sign-up' }" class="emphasis" style="font-size:13px">Sign up </RouterLink>
        </small>

        <small class="goto__page">
          <RouterLink :to="{ name: 'reset-password' }" class="emphasis" style="font-size:13px">Forgotten password? </RouterLink>
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social__login img {
  width: 35px;
  padding: 5px;
}

.social__login {
  background-color: #f3f3f3;
  color: var(--default-dark);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: row-reverse;
  text-align: unset;
  margin-top: 20px;
  display: none;
}

.hidden {
  display: none !important;
}

.goto__page {
  /* font-size: 0.95rem; */
  margin-top: 10px;
  color: var(--secondary);
  text-align: left !important;
  display: block;
  /* display: none; */
}

.goto__page:first-child {
  margin-top: 120px;
}

.goto__sign__up a {
  font-size: inherit !important;
  text-decoration: none;
}

#login__page .container {
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
#login__page .container>div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

#login__page .container>div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#login__page .container>div:last-child h1+small {
  margin-bottom: 30px;
}

input,
button,
.form__field input,
.field {
  width: 500px;
}

#login__page .continue__with__email,
#login__page .social__login__icons {
  display: none;
}

#login__page .title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 35px;
}

#login__page .title h1 {
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
    display: block;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "bg" "form";
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  #login__page .container>div:first-child {
    display: none;
  }

  #login__page .container>div:last-child {
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* padding: 0 30px; */
    place-content: center;
    /* place-items: center; */
    min-height: 90vh;
    /* margin: 20px auto; */
  }

  #login__page .container>div:last-child h1+small.error {
    margin-bottom: 35px;
  }

  #login__page .container div:last-child form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* column-gap: -15px; */
  }

  .form__field,
  button {
    width: auto;
  }

  #login__page .continue__with__email {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    color: var(--secondary);
    font-size: 0.95rem;
    text-align: center;
    vertical-align: middle;
    margin-top: 35px;
    justify-content: center;

    /* display: none; */
  }

  #login__page .continue__with__email .divider__line {
    color: var(--border-color);
    font-weight: 500;
    letter-spacing: -1px;
  }

  #login__page .social__login__icons {
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 15px;
  }

  #login__page .social__login__icons .icon {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 7.5px;
    display: flex;
    background-color: #f5f5f5;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
  }

  #login__page .social__login__icons .icon img {
    max-width: 100%;
    object-fit: contain;
    width: 27px;
  }

  #login__page .form__field {
    margin-bottom: 15px;
  }


}
</style>
