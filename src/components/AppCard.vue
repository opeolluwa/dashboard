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
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>

<script lang="ts">
export default {
  name: "AppCard",
};
</script>
