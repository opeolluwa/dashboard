<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}
</style>


<script lang="ts">
export default {
    name: "AppCard"
}
</script>