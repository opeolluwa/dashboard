<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import router from "@/router";
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AuthView",
  components: {
    BaseTextInput: BaseTextInputVue,
    BaseButton: BaseButtonVue,
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
    apiError: false,
  }),
  methods: {
    async login() {
      try {
        const { data: response } = await axios.post(
          "http://127.0.0.1:8405/api/v1/auth/login",
          this.form
        );
        console.log(JSON.stringify(response));
      } catch (error: any) {
        const { data: response } = error.response;
        if (!response.success) {
          Object.assign(this.apiResponse, response);
          this.apiError = true;
        }
        // console.log(JSON.stringify(error.response.data));
      }
      //head over to the next page, which essentially the home page
      // router.push({ name: "home" });
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
        <small v-show="apiError" class="error">Error: {{ apiResponse.message }}</small>
        <form action="" method="post" @submit.prevent="login">
          <!--form field email-->
          <BaseTextInput placeholder="email" label="email" v-model="form.email" type="email" class="field" />
          <!--form field password-->
          <BaseTextInput placeholder="password" type="password" label="password" v-model="form.password"
            class="field" />
          <!--form field submit-->
          <BaseButton @click="login" text="login" />
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
main .container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-areas: "bg form";
  min-height: 100vh;
}

/**the background container */
main .container>div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

main .container>div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
.form-field input,
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

  main .container>div:first-child {
    display: none;
  }

  main .container>div:last-child {
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

  main .container>div:last-child h1 {
    margin-bottom: 7.5px;
    line-height: 26px;
    font-size: 28px;
    text-align: center;
  }

  main .container>div:last-child h1+small.error {
    margin-bottom: 35px;
  }

  main .container div:last-child form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    column-gap: 15px;
  }

  .form-field,
  button {
    width: auto;
  }
}
</style>
