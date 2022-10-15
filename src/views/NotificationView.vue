<script lang="ts">
import { defineComponent } from "vue";
import AppNetworkError from "../components/AppNetworkError.vue";
export default defineComponent({
  name: "NotificationView",
  components: {
    AppNetworkError,
  },
});
</script>

<template>
  <AppNetworkError />
</template>

<style scoped></style>
