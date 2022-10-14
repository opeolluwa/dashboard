<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  background-color: white;
  min-height: 200px;
  margin-top: 10%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
</style>

<script lang="ts">
export default {
  name: "AppCard",
};
</script>
