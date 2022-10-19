<template>
    <!--inject onboarding routes here-->
    <div class="view onboarding__screen">
        <img src="@/assets/illustrations/onboarding-three.png" alt="illustration">
        <h1>Create account to begin </h1>
        <p class="sub__hero__text">
            job spring wheel appropriate fuel fallen guess usually route noun steel rabbit mother
        </p>
        <BaseButton text="" @click="goToNext">
            Get Started
        </BaseButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseButton from "@/components/BaseButton.vue"
export default defineComponent({
    name: "OnboardingOne",
    components: {
        BaseButton
    },
    methods: {
        goToNext() {
            this.$router.push({ name: "auth" })
        }
    }
})
</script>

