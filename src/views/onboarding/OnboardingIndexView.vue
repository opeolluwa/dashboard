<template>
    <!--inject onboarding routes here-->
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <router-view></router-view>
    </transition>
</template>

<script lang="ts">
export default {
    name: "OnboardingIndexView"
}
</script>

<style >
.onboarding__screen {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 90vh;
}

.onboarding__screen h1 {
    text-transform: capitalize;
}

.onboarding__screen p {
    margin: 10px 0 25px;
}

.onboarding__screen button {
    margin-top: 35px;
    background-color: #3c2c5b;
    position: relative;
    bottom: 20px;
}
</style>