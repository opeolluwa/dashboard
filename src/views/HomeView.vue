<script lang="ts">
import ViewLayout from '../components/ViewLayout.vue';
import Modal from '@/components/AppModal.vue';
import Card from "@/components/AppCard.vue"
export default {
  name: "HomeView",
  components: {
    ViewLayout,
    Modal,
    Card
  },
  data: () => ({
    showModal: false
  }),
};
</script>

<template>
  <!--first row for analytics-->
  <div class="analytics">
    <Card>
      244
    </Card>
    <Card>
      244
    </Card>
    <Card>
      244
    </Card>
  </div>
  <div class="analytics">
    <Card>
      244
    </Card>
    <Card>
      244
    </Card>
    <Card>
      244
    </Card>
  </div>
  <div class="analytics">
    <Card>
      244
    </Card>
    <Card>
      244
    </Card>
    <Card>
      244
    </Card>
  </div>
  <button @click="showModal = true">show modal</button>

  <Modal v-show="showModal" @close-modal="showModal = false">
    <template #icon>
    </template>
    <template #content>
      some content heree
    </template>
  </Modal>
</template>

<style scoped>
.analytics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 35px;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
