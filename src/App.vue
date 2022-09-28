<script setup lang="ts">
import { RouterView } from "vue-router";
import ReloadPWA from "./ReloadPWA.vue";
</script>

<template>
  <!-- <PwaConfig /> -->
  <ReloadPWA />
  <RouterView />
</template>

<style>
@import url("@/assets/main.css");
</style>
