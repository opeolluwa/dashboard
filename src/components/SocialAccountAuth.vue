<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "SocialAccountAuth",
});
</script>

<template>
    <div class="social__login__icons d-non">
        <div class="icon">
            <img src="@/assets/icons/google.png" alt="google" />
        </div>
        <div class="icon">
            <img src="@/assets/icons/github.png" alt="github" />
        </div>
        <div class="icon">
            <img src="@/assets/icons/twitter.png" alt="twitter" />
        </div>
    </div>
</template>


<style scoped>
 .social__login__icons {
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 15px;
}

.social__login__icons .icon {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 7.5px;
    display: flex;
    background-color: #f5f5f5;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
}

.social__login__icons .icon img {
    max-width: 100%;
    object-fit: contain;
    width: 22px;
}
</style>