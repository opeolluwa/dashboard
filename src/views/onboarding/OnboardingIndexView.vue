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

<style>
.onboarding__screen {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    align-content: center;
    position: relative;
    padding-top: 25px;
}

.onboarding__screen h1 {
    text-transform: capitalize;
    margin-top: 7vh;
}

.onboarding__screen p {
    margin: 10px 0 25px;
}

.onboarding__screen button {
    margin-top: 3vh;
    position: relative;
    bottom: 20px;

}
</style>