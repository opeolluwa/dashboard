<script lang="ts">
import ViewLayout from '../components/ViewLayout.vue';
import Modal from '@/components/AppModal.vue';
export default {
  name: "HomeView",
  components: {
    ViewLayout,
    Modal
  },
  data: () => ({
    showModal: false
  }),
};
</script>

<template>
  <ViewLayout>
    <!--first row for analytics-->
    <button @click="showModal = true">show modal</button>

    <Modal v-show="showModal" @close-modal="showModal = false" />
  </ViewLayout>
</template>

<style scoped>

</style>
