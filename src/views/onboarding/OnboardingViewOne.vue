<template>
    <!--inject onboarding routes here-->
    <div class="view onboarding__screen">
        <img src="@/assets/illustrations/onboarding-one.png" alt="illustration">
        <h1>Track every thing </h1>
        <p class="sub__hero__text">
            box rice jar bound boat pride main rule paid species else ship point zoo remember contrast
        </p>
        <BaseButton text="" @click="goToNext">
            Continue
            <Icon icon="mdi:chevron-right" />
        </BaseButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Icon } from "@iconify/vue";
import BaseButton from "@/components/BaseButton.vue"
export default defineComponent({
    name: "OnboardingOne",
    components: {
        Icon,
        BaseButton
    },
    methods: {
        goToNext() {
            this.$router.push({ name: "onboarding-screen-two" })
        }
    }
})
</script>

