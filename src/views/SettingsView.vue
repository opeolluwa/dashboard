<template>
  <div>
    <button @click="login">Log in</button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
  },
};
</script>
