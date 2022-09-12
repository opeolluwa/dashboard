<script lang="ts">
import Card from "@/components/AppCard.vue";
export default {
  name: "HomeView",
  components: {
    Card,
  },
  data: () => ({
    showModal: false,
  }),
};
</script>

<template>
  <!--first row for analytics-->
  <div class="analytics">
    <Card> </Card>
    <Card> </Card>
    <Card> </Card>
  </div>
</template>

<style scoped>
.analytics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 35px;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card {
  text-align: unset;
}

/**--------------mobile screen navigation---------- */
@media screen and (max-width: 768px) {
  .analytics {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
