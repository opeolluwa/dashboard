<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import router from "@/router";
export default {
  name: "AuthView",
  components: {
    BaseTextInput: BaseTextInputVue,
    BaseButton: BaseButtonVue,
  },
  data: () => ({
    form: {
      email: null,
      password: null,
    },
  }),
  methods: {
    login() {
      console.log("login");
      //head over to the next page, which essentially the home page
      router.push({ name: "home" });
    },
  }
};
</script>

<template>
  <main>
    <div class="container">
      <!--bg-->
      <div></div>
      <!--logon form-->
      <div>
        <h1>Login</h1>
        <form action="" method="post" @submit.prevent="login">
          <!--form field email-->
          <BaseTextInput placeholder="email" label="email" :model="form.email" />
          <!--form field password-->
          <BaseTextInput placeholder="password" type="password" label="password" :model="form.password" />
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
}

main .container>div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

main .container>div:last-child h1 {
  margin-bottom: 30px;
  line-height: 64px;
  font-size: 48px;
}

/** -----------------------------small devices------------------------ */
@media screen and (max-width:400px) {
  main .container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "bg" "form";
    justify-content: center;
    align-items: center;
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
    padding:0 30px;
    min-height: 85vh;
  }

  main .container>div:last-child h1 {
    margin-bottom: 35px;
    line-height: 26px;
    font-size: 28px;
    text-align: center;
  }

}
</style>
