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
  padding: 60px 0;
  border-radius: 15px;
  box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
}
</style>

<script lang="ts">
export default {
  name: "AppCard",
};
</script>
