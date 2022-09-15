<script lang="ts">
import Card from "@/components/AppCard.vue";
// import Bar from "../components/Bar.vue";
// import { Bar } from "vue-chartjs";

export default {
  name: "HomeView",
  components: {
    Card,
    // Bar,
  },
  data: () => ({
    showModal: false,
  }),
};
</script>

<template>
  <!--first row for analytics-->
  <div class="analytics">
    <Card>
      <!-- <Bar /> -->
    </Card>
    <Card> </Card>
  </div>
</template>

<style scoped>
.analytics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
