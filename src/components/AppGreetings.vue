<template>
  <div>
    <!-- <h6>{{ username }}</h6> -->
    <small class="vue__greetings">{{ greetings }}</small>
  </div>
  <!-- <div >{{ message }}</div> -->
</template>

<script lang="ts">
import greetings from "./greetings";
export default {
  name: "AppGreetings",
  data() {
    return {
      greetings,
    };
  },
  props: {
    username: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped></style>
