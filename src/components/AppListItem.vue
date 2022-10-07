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
  margin-top: 10px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
}
</style>

<script lang="ts">
export default {
  name: "AppListItem",
};
</script>
