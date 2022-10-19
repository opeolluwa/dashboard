<template>
    <!--inject onboarding routes here-->
    <div class="view onboarding__screen">
        <img src="@/assets/illustrations/onbaording-screen-two.png" alt="illustration">
        <h1>Some other lies </h1>
        <p class="sub__hero__text">
            gulf teacher judge mirror direction theory lift thousand silver rich lie victory traffic mouth log 
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
            this.$router.push({ name: "onboarding-screen-three" })
        }
    }
})
</script>

