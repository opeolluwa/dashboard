<template>
  <!--inject onboarding routes here-->
  <div class="view onboarding__screen">
    <img src="@/assets/illustrations/onboarding-one.png" alt="illustration" />
    <h1>
      Keep Track <br />
      of everything in one place
    </h1>
    <p class="sub__hero__text">
      box rice jar bound boat pride main rule paid species else ship point zoo
      remember contrast
    </p>
    <BaseButton text="" @click="goToNext"> Get Started </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import BaseButton from "@/components/BaseButton.vue";
export default defineComponent({
  name: "OnboardingOne",
  components: {
    Icon,
    BaseButton,
  },
  methods: {
    goToNext() {
      this.$router.push({ name: "login" });
    },
  },
});
</script>

<style scoped>
.onboarding__screen {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  align-content: center;
  position: relative;
  padding: 25px 35px;
}

.onboarding__screen img {
  width: 85%;
  margin: 0 auto;
}

.onboarding__screen h1 {
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-top: 7vh;
  font-weight: 500;
}

.onboarding__screen p {
  margin: 10px 0 25px;
  color: var(--secondary);
  text-align: left;
}

.onboarding__screen button {
  margin-top: 40px;
  bottom: 20px;
  left: 0;
  text-align: center;
}
</style>
