<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/Spinner.vue";
export default defineComponent({
  name: "AuthView",
  components: {
    BaseTextInput: BaseTextInputVue,
    BaseButton: BaseButtonVue,
    Spinner,
  },
  data: () => ({
    form: {
      otp: "",
    },
    isLoading: false,
    //destructure the api response into this variable
    apiResponse: {
      message: "",
      token: "",
    },
  }),

  computed: {
    //disabled state
    disabledState() {
      return this.isLoading === true ? true : false;
    },
    //api response message
    apiResponseMsg() {
      return this.apiResponse.message;
    },
  },
  methods: {
    //request password reset
    requestPasswordReset() {
      console.log("requested");
    },

    //request new token
    requestNewToken() {
      console.log("requested");
    },

    //confirm otp
    confirmOtp() {
      console.log("confirmed");
      this.$router.push({ name: "confirm-otp" });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>

<template>
  <div id="password__reset__confirm__otp__page">
    <div class="container">
      <!--bg-->
      <div></div>
      <!--logon form-->
      <div>
        <div class="title">
          <h1>Confirm OTP</h1>
          <p class="sub__hero__text">Confirm the token sent to your email</p>
        </div>
        <!--api response -->
        <small class="error"> {{ apiResponseMsg }}</small>
        <form action="" method="post" @submit.prevent="confirmOtp">
          <!--form field email-->
          <BaseTextInput
            placeholder="XXXXXX"
            label="Token"
            v-model="form.otp"
            type="text"
            :maxlength="6"
            class="field"
          />
          <!--form field password-->
          <BaseButton text="" :disabled="disabledState">
            <span v-show="!isLoading">Proceed</span>
            <Spinner
              :animation-duration="1000"
              :size="30"
              :color="'#ffffff'"
              v-show="isLoading"
            />
          </BaseButton>
          <small class="goto__sign__up"
            >Didn&apos;t receive any token?
            <RouterLink :to="{ name: 'login' }" class="emphasis" style="font-size:13px">request new </RouterLink>
          </small>
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

#password__reset__confirm__otp__page .container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-areas: "bg form";
  height: 100vh;
  justify-content: center;
  position: relative;
}

/**the background container */
#password__reset__confirm__otp__page .container > div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

#password__reset__confirm__otp__page .container > div:last-child {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#password__reset__confirm__otp__page .container > div:last-child h1 + small {
  margin-bottom: 30px;
}

input,
button,
.form__field input,
.field {
  width: 500px;
}

#password__reset__confirm__otp__page .title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 25px;
}

#password__reset__confirm__otp__page .title h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}

#password__reset__confirm__otp__page .title p {
  align-items: center;
  justify-content: center;
  line-height: 28px;
  color: var(--secondary);
}

/** -----------------------------small devices------------------------ */
@media screen and (max-width: 768px) {
  #password__reset__confirm__otp__page .container {
    /* padding: 50px 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* min-height: 100vh; */
  }

  #password__reset__confirm__otp__page .container > div:first-child {
    display: none;
  }

  #password__reset__confirm__otp__page .container > div:last-child {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 0 30px;
    place-content: center;
    margin: 0 auto;
  }

  #password__reset__confirm__otp__page
    .container
    > div:last-child
    h1
    + small.error {
    margin-bottom: 35px;
  }

  #password__reset__confirm__otp__page .container div:last-child form {
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

  .go__back {
    margin-bottom: 20px;
  }
}
</style>
