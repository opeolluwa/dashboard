<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const appToastComponent = useToast();
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
      fullname: "",
    },
    isLoading: false,
    //destructure the api response into this variable
    apiResponseMsg: "",
  }),
  methods: {
    // fet the form body from, pass it to axios, toggle disable state to true
    // and then set the api response message to the response message
    async signUp() {
      this.isLoading = true;
      const { email, password, fullname } = this.form;
      try {
        const { data: response } = await axios.post("/auth/sign-up", {
          email,
          fullname,
          password,
        });
        console.log(JSON.stringify(response));
        if (response.success) {
          appToastComponent.success(response.message);
        } else {
          appToastComponent.error(response.message);
        }
        this.apiResponseMsg = response.message;
        this.isLoading = false;
        return;
      } catch (error: any) {
        this.isLoading = false;
        const { data: response } = error.response;
        if (!response.success) {
          this.apiResponseMsg = response.message;
          appToastComponent.error(response.message);
        }
      }
    },
  },
  //disabled state
  computed: {
    disabledState() {
      return this.isLoading === true ? true : false;
    },
  },
});
</script>

<template>
  <div id="sign__up__page">
    <div class="container">
      <!--bg-->
      <div></div>
      <!--the page title --->
      <div>
        <div class="title">
          <h1>Sign Up</h1>
          <p class="sub__her__text">Proceed with your social account</p>
        </div>

        <!--social icons-->
        <div class="social__login__icons d-none">
          <div class="icon">
            <img src="@/assets/icons/google.png" alt="google" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/github.png" alt="github" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/twitter.png" alt="twitter" />
          </div>
        </div>

        <!--continue with email-->
        <small class="continue__with__email d-none">
          <span class="divider__line"> ------------------ </span>
          <span> continue with email </span>
          <span class="divider__line"> ---------------- </span>
        </small>
        <form action="" method="post" @submit.prevent="signUp">
          <BaseTextInput
            placeholder="Jane Doe"
            label="fullname"
            v-model="form.fullname"
            type="text"
            class="field"
          />
          <!--form field email-->
          <BaseTextInput
            placeholder="jane@mailer.com"
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
            <span v-show="!isLoading">Sign Up</span>
            <Spinner
              :animation-duration="1000"
              :size="30"
              :color="'#ffffff'"
              v-show="isLoading"
            />
          </BaseButton>
        </form>
        <hr />
        <!--custom install script-->
        <!-- Install button, hidden by default -->
        <small class="goto__sign__up"
          >Already have an account?
          <RouterLink :to="{ name: 'login' }" class="emphasis" style="font-size:13px">Login </RouterLink>
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none !important;
}

.goto__sign__up {
  font-size: 0.95rem;
  margin-top: 10px;
  color: var(--secondary);
  text-align: left !important;
}

.goto__sign__up a {
  text-decoration: underline;
}

#sign__up__page .container {
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
#sign__up__page .container > div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

#sign__up__page .container > div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#sign__up__page .container > div:last-child h1 + small {
  margin-bottom: 30px;
}

input,
button,
.form__field input,
.field {
  width: 500px;
}

#sign__up__page .continue__with__email,
#sign__up__page .social__login__icons {
  display: none;
}

#sign__up__page .title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 35px;
}

#sign__up__page .title h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}

#sign__up__page .title p {
  align-items: center;
  justify-content: center;
  line-height: 28px;
  color: var(--secondary);
}

/** -----------------------------small devices------------------------ */

@media screen and (max-width: 768px) {
  #sign__up__page .container {
    display: block;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "bg" "form";
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  #sign__up__page .container > div:first-child {
    display: none;
  }

  #sign__up__page .container > div:last-child {
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

  #sign__up__page .container > div:last-child h1 + small.error {
    margin-bottom: 35px;
  }

  #sign__up__page .container div:last-child form {
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

  #sign__up__page .continue__with__email {
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

  #sign__up__page .continue__with__email .divider__line {
    color: var(--border-color);
    font-weight: 500;
    letter-spacing: -1px;
  }

  #sign__up__page .social__login__icons {
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 15px;
  }

  #sign__up__page .social__login__icons .icon {
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

  #sign__up__page .social__login__icons .icon img {
    max-width: 100%;
    object-fit: contain;
    width: 27px;
  }
}
</style>
