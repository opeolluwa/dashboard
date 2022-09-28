<script lang="ts">
import { defineComponent } from 'vue';
import AppEmptyState from '@/components/AppEmptyState.vue';
export default defineComponent({
  name: "NotificationView",
  components: {
    AppEmptyState
  },
});
</script>

<template>
  <AppEmptyState />
</template>

<style scoped>

</style>
