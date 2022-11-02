<script lang="ts">
import AppCard from "@/components/AppCard.vue";
import Quotes from "@/components/AppQuotes.vue";
import greetings from "@/components/greetings";
import { useAuthStore } from "@/stores/auth";
import { mapState } from "pinia";
import { defineComponent } from "vue";
import AppListItem from "../components/AppListItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppCard,
    Quotes,
    AppListItem,
  },
  data: () => ({
    showModal: false,
    greetings,
  }),
  computed: {
    //get the user from the store
    ...mapState(useAuthStore, { user: "userInformation" }),
    username() {
      return this.user?.username || "";
    },
  },
});
</script>

<template>
  <!--greetings-->
  <div class="d-sm-none">
    <h3>
      Hi <strong style="text-transform: capitalize">{{ username }}! 😊 </strong>
    </h3>
    <small>{{ greetings }}</small>
  </div>

  <!--analytics overview-->
  <div class="analytics-overview">
    <AppListItem> 234 </AppListItem>

    <AppListItem> 234 </AppListItem>

    <AppListItem> 234 </AppListItem>
  </div>
  <!--quotes and analytics header-->
  <div id="header">
    <AppCard id="quotes-container">
      <Quotes :duration="120" />
    </AppCard>
  </div>
</template>

<style scoped>
#quotes-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.analytics-overview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  display: none;
}

.analytics-overview > div {
  border-radius: 5px;
  min-height: 75px;
}

#header {
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
  #header {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 45px;
  }

  .analytics-overview {
    column-gap: 5px;
    margin: 20px 0 10px;
    display: none;
  }

  .analytics-overview > div {
    min-height: 40px;
  }
}
</style>
