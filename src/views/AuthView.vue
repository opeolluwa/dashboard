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
  mounted() {
    //refrence the install button from the dom
    const divInstall = document?.getElementById('installContainer');
    const butInstall = document?.getElementById('butInstall');


    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log('👍', 'beforeinstallprompt', event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      divInstall?.classList.toggle('hidden', false);
    });

    butInstall?.addEventListener('click', async () => {
      console.log('👍', 'butInstall-clicked');
      const promptEvent = window.deferredPrompt;
      if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
      }
      // Show the install prompt.
      promptEvent.prompt();
      // Log the result
      const result = await promptEvent.userChoice;
      console.log('👍', 'userChoice', result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      divInstall?.classList.toggle('hidden', true);
    });


    butInstall?.addEventListener('click', async () => {
      console.log('👍', 'butInstall-clicked');
      const promptEvent = window.deferredPrompt;
      if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
      }
      // Show the install prompt.
      promptEvent.prompt();
      // Log the result
      const result = await promptEvent.userChoice;
      console.log('👍', 'userChoice', result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      divInstall?.classList.toggle('hidden', true);
    });

    window.addEventListener('appinstalled', (event) => {
      console.log('👍', 'appinstalled', event);
      // Clear the deferredPrompt so it can be garbage collected
      window.deferredPrompt = null;
    });
  },
  methods: {
    async login() {
      /*  try {
         const { data: response } = await axios.post(
           "/auth/login",
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
       } */
      //head over to the next page, which essentially the home page
      router.push({ name: "home" });
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
        <h1>Sign In</h1>
        <small v-show="apiError" class="error">Error: {{ apiResponse.message }}</small>
        <form action="" method="post" @submit.prevent="login">
          <!--form field email-->
          <BaseTextInput placeholder="email" label="email" v-model="form.email" type="email" class="field" />
          <!--form field password-->
          <BaseTextInput placeholder="password" type="password" label="password" v-model="form.password"
            class="field" />
          <!--form field submit-->
          <BaseButton @click="login" text="login" />
          <!-- <a ref="installApp" id="install-button" href="#">install application</a> -->
        </form>

        <!--custom install script-->
        <!-- Install button, hidden by default -->
        <div id="installContainer" class="hidden">
          <button id="butInstall" type="button">
            Install
          </button>
        </div>
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
