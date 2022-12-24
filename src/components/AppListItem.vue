<template>
  <div class="list__item">
    <slot></slot>
  </div>
</template>

<style scoped>
.list__item {
  /* text-align: center; */
  background-color: white;
  min-height: 20px;
  margin-top: 10px;
  padding: 7.5px;
  border-radius: 4px;
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
