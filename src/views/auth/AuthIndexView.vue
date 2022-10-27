<template>
  <!--inject onboarding routes here-->
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <router-view></router-view>
  </transition>
</template>

<script lang="ts">
export default {
  name: "AuthenticationIndexView",
};
</script>
