<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/Spinner.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import axios from "axios";
import { getStoredData } from "@/main";
import { useToast } from "vue-toastification";

const appToastComponent = useToast();

export default defineComponent({
  name: "AuthView",
  components: {
    BaseTextInput: BaseTextInputVue,
    BaseButton: BaseButtonVue,
    Spinner,
    VueCountdown,
  },
  data: () => ({
    form: {
      otp: "",
    },
    isLoading: false,
    counting: false,
    inputFieldProps: {
      pattern: "[0-9]",
      type: "number",
    },
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
    startCountdown: function () {
      this.counting = true;
    },
    onCountdownEnd: function () {
      this.counting = false;
    },
    //confirm otp
    async confirmOtp() {
      /**
       * gt the otp from the data object
       * get the bearer token from stored in shared preferences
       * pass it to axios show loading state
       * destructure response
       */
      try {
        const { otp } = this.form;
        const bearerToken = await getStoredData("confirm-account-token");
        this.isLoading = true;
        const { data: response } = await axios.post(
          "/auth/verify-email",
          {
            token: otp,
          },
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        console.log(JSON.stringify(response));

        // if there is a success response to to login else fire error toast
        if (response.success) {
          this.$router.push({ name: "login" });
          appToastComponent.success(response.message);
          return;
        } else {
          appToastComponent.error(response.message);
        }
        this.isLoading = false;
      } catch (error: any) {
        this.isLoading = false;
        const { data: response } = error.response;
        if (!response.success) {
          appToastComponent.error(response.message);
        }
      }
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
            :input-attributes="inputFieldProps"
            :disabled="counting || isLoading"
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
          <VueCountdown
            v-if="counting"
            :time="60000"
            v-slot="{ seconds }"
            @end="onCountdownEnd"
            style="color: var(--secondary)"
          >
            <small>
              Request new OTP after
              <strong style="font-size: 13px">{{ seconds }}</strong> seconds.
            </small>
          </VueCountdown>
          <button v-else class="goto__sign__up">
            Didn&apos;t receive any token?
            <small
              class="emphasis"
              style="font-size: 13px"
              @click="startCountdown"
              >request new
            </small>
          </button>
        </form>
        <button class="goto__sign__up">
          Go back
          <RouterLink
            :to="{ name: 'sign-up' }"
            class="emphasis"
            style="font-size: 13px"
            >Sign Up
          </RouterLink>
        </button>
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

#password__reset__confirm__otp__page ::placeholder {
  letter-spacing: 3px;
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
  margin-top: 3px;
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
