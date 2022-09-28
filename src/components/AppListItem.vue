<template>
    <div class="list-item">
        <slot></slot>
    </div>
</template>

<style scoped>
.list-item {
    text-align: center;
    background-color: white;
    min-height: 20px;
    margin-top: 10%;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    -webkit-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    -moz-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
}
</style>

<script lang="ts">
export default {
    name: "AppListItem",
};
</script>
