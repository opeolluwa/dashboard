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
  },
});
</script>

<template>
  <main>
    <div class="container">
      <!--bg-->
      <div></div>
      <!--logon form-->
      <div>
        <h1>Login</h1>
        <!--api response -->
        <small class="error"> {{ apiResponseMsg }}</small>
        <form action="" method="post" @submit.prevent="login">
          <!--form field email-->
          <BaseTextInput
            placeholder="email"
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
            v-model="form.password"
            class="field"
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
      </div>
    </div>
  </main>
</template>

<style scoped>
.hidden {
  display: none !important;
}

#installContainer {
  background-color: red;
  /* position: absolute; */
  bottom: 1em;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  /* z-index: 1500; */
}

#installContainer button {
  background-color: inherit;
  border: 1px solid white;
  color: white;
  font-size: 1em;
  padding: 0.75em;
}

main .container {
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
main .container > div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

main .container > div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

main .container > div:last-child h1 {
  margin-bottom: 5px;
  line-height: 64px;
  font-size: 48px;
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

/** -----------------------------small devices------------------------ */
@media screen and (max-width: 768px) {
  main .container {
    display: block;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "bg" "form";
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  main .container > div:first-child {
    display: none;
  }

  main .container > div:last-child {
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

  main .container > div:last-child h1 {
    margin-bottom: 7.5px;
    line-height: 26px;
    font-size: 28px;
    text-align: center;
  }

  main .container > div:last-child h1 + small.error {
    margin-bottom: 35px;
  }

  main .container div:last-child form {
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
