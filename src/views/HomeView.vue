<script lang="ts">
import Card from "@/components/AppCard.vue";
import Quotes from "@/components/AppQuotes.vue";
// import Greetings from "../components/Greetings.vue";
// import Bar from "../components/Bar.vue";
// import { Bar } from "vue-chartjs";

export default {
  name: "HomeView",
  components: {
    Card,
    Quotes,
    // Greetings
  },
  data: () => ({
    showModal: false,
  }),
};
</script>

<template>
  <!--greetings-->
  <!-- <Greetings username="Opeoluwa"/> -->

  <!--first row for analytics-->
  <div class="analytics">
    <Card id="quotes-container">
      <Quotes :duration="120" />

      <!-- <Bar /> -->
    </Card>
  </div>
</template>

<style scoped>
#quotes-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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
