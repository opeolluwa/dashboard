<template>
  <div class="empty-state">
    <img src="@/assets/img/illustration/empty-state.svg" alt="empty state" />
    <div>
      <!-- <h1>Oops!</h1> -->
      <p v-html="message"></p>
    </div>
    <!--  <BaseButton @click="goBack" class="d-none">
            <Icon icon="mdi:chevron-left" /> Go Back
        </BaseButton> -->
  </div>
</template>

<script lang="ts">
import BaseButton from "./BaseButton.vue";
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppEmptyState",
  props: {
    message: {
      type: String,
      default: "No data found! They will be displayed once you add them",
    },
  },
  components: {
    BaseButton,
    Icon,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150%;
  min-height: 50vh;
  padding: 40px auto;
  margin: 40px auto;
  row-gap: 20px;
  text-align: center;
}

.empty-state img {
  width: 30%;
}

.empty-state h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 10px;
}

.empty-state p {
  font-size: 16px;
  line-height: 24px;
  width: 80%;
  align-items: center;
  margin: 0 auto;
  font-family: "mulish", sans-serif;
}

.empty-state button {
  width: 100%;
  max-width: fit-content;
  padding: 10px;
  border-radius: 5px;
  background-color: transparent !important;
  border: 1px solid var(--default-dark);
  color: var(--default-dark);
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/**--------------mobile screen navigation---------- */
@media screen and (max-width: 768px) {
  .empty-state img {
    width: 35%;
  }
}
</style>
