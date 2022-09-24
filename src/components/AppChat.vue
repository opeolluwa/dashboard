<script lang="ts">
import { defineComponent } from "vue";
import IconCommunity from "./icons/IconCommunity.vue";
export default defineComponent({
    name: "FavActionButton",
    components: { IconCommunity },
    props: {
        route: {
            type: String,
            required: true,
            default: "404",
        },
    },
});
</script>

<template>
    <RouterLink :to="{ name: route }" class="fab">
        <IconCommunity />
    </RouterLink>
</template>

<style>
.fab {
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    left: calc(100vw - 80px);
    position: fixed;
    bottom: 20px;
    border-radius: 50%;
    border-color: transparent;
    padding: 15px;
    width: 50px;
    height: 50px;
    box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
    z-index: 10;
    background-color: var(--default-dark);
    color: var(--white);
    cursor: pointer;
}

.fab svg{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}

.fab:hover {
    background-color: var(--primary);
    color: var(--white);
    cursor: pointer;
}
</style>
