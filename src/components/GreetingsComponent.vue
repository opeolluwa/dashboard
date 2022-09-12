<template>
  <div class="vue__greetings">{{ message }}</div>
</template>

<script lang="ts">
import greetings from "./greetings";
export default {
  data() {
    return {
      greetings,
    };
  },
  //TODO:
  props: {
    username: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped></style>
