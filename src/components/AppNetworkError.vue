<template>
  <div class="network__error">
    <img src="@/assets/img/illustration/network-error.svg" alt="empty state" />
    <div>
      <p v-html="message"></p>
    </div>
    <!--refresh button-->
    <BaseButton text="refresh" class="refresh__button" @click="refreshPage">
      <Icon icon="mdi:refresh" />
    </BaseButton>
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
      default:
        "There is error in your network connection. Please check your connection and try again.",
    },
  },
  components: {
    BaseButton,
    Icon,
  },
  methods: {
    refreshPage() {
      window.location.reload();
    },
  },
});
</script>

<style scoped>
.refresh__button {
  /* margin-top: 2rem; */
  background-color: transparent;
  /* border: 0.5px solid var(--default-dark); */
  color: var(--default-dark);
  padding: 5px 12px;
  width: fit-content;
  box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
}

.network__error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150%;
  /* min-height: 50vh; */
  padding: 40px auto;
  /* margin: 40px auto; */
  row-gap: 20px;
  text-align: center;
}

.network-error img {
  width: 30%;
}

.network-error h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 10px;
}

.network-error p {
  font-size: 16px;
  line-height: 24px;
  width: 80%;
  align-items: center;
  margin: 0 auto;
}

.network-error button {
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
  .network-error img {
    width: 95%;
  }
}
</style>
